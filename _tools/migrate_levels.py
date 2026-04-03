"""
migrate_levels.py
Convierte los niveles 6-20 de python_course.html del formato `content` antiguo
al nuevo formato `dialogo` + `codigo` + `tourSteps`.

ESTRATEGIA SEGURA: usa template literals (backticks JS) para todas las strings,
eliminando la necesidad de escapar comillas.
"""

import re
import sys
import html

SOURCE_FILE = r"c:\Users\MINEDUCYT\OneDrive\Documentos\verdadera-academia\python_course.html"
BACKUP_FILE = r"c:\Users\MINEDUCYT\OneDrive\Documentos\verdadera-academia\python_course.BACKUP.html"

# ──────────────────────────────────────────────────────────────────────────────
# Helpers
# ──────────────────────────────────────────────────────────────────────────────

def unescape_html(text: str) -> str:
    return html.unescape(text)

def strip_code_blocks(content_html: str):
    """
    Extrae el HTML de diálogo (sin bloques de código) y el último bloque de código Python.
    Retorna (dialogo_html, codigo_python | None).
    El código Python es el ÚLTIMO bloque <code class="language-python"> en la lección.
    """
    code_pattern = re.compile(
        r'<code\s+class=["\']language-python["\']>(.*?)</code>',
        re.DOTALL
    )
    code_matches = list(code_pattern.finditer(content_html))

    if code_matches:
        last_match = code_matches[-1]
        raw_code = last_match.group(1)
        codigo_python = unescape_html(raw_code)
        
        cb_pattern = re.compile(
            r'<div class="code-block[^"]*"[^>]*>.*?</div>(?:\s*</div>)*',
            re.DOTALL
        )
        cb_matches = list(cb_pattern.finditer(content_html))
        
        last_cb = None
        for cb in cb_matches:
            if cb.start() <= last_match.start() <= cb.end():
                last_cb = cb
        
        if last_cb:
            dialogo_html = content_html[:last_cb.start()] + content_html[last_cb.end():]
        else:
            dialogo_html = content_html
    else:
        codigo_python = None
        dialogo_html = content_html

    return dialogo_html.strip(), codigo_python

def build_tour_steps(codigo_python: str) -> str:
    """
    Genera tourSteps automáticos basados en las líneas del código Python.
    Devuelve el string JS del array tourSteps (sin los corchetes externos).
    """
    if not codigo_python:
        return "[]"
    
    lines = codigo_python.split('\n')
    steps = []
    
    seen_lines = set()
    for i, line in enumerate(lines, 1):
        stripped = line.strip()
        if not stripped or stripped.startswith('#'):
            continue
        if i in seen_lines:
            continue
        
        text = None
        
        if stripped.startswith('def '):
            match = re.match(r'def\s+(\w+)', stripped)
            name = match.group(1) if match else 'función'
            text = f'Se define la función <code>{name}()</code>. El bloque indentado que sigue no se ejecuta aún, solo se guarda en memoria.'
        elif stripped.startswith('class '):
            match = re.match(r'class\s+(\w+)', stripped)
            name = match.group(1) if match else 'Clase'
            text = f'Se define la clase <code>{name}</code>. Es la plantilla o molde que usaremos para crear objetos.'
        elif stripped.startswith('return '):
            text = '<code>return</code> devuelve el resultado al lugar que llamó la función y finaliza su ejecución.'
        elif stripped.startswith('print('):
            text = '<code>print()</code> muestra el resultado en la terminal.'
        elif stripped.startswith('for '):
            match = re.match(r'for\s+(\w+)\s+in', stripped)
            var = match.group(1) if match else 'elemento'
            text = f'Bucle <code>for</code>: la variable <code>{var}</code> tomará cada valor de la colección, uno por vuelta.'
        elif stripped.startswith('while '):
            text = 'Bucle <code>while</code>: repetirá el bloque indentado mientras la condición sea <code>True</code>.'
        elif stripped.startswith('if '):
            text = 'Condición <code>if</code>: evalúa si la expresión es verdadera. Si lo es, ejecuta el bloque indentado.'
        elif stripped.startswith('elif '):
            text = 'Condición <code>elif</code>: segunda condición si la anterior fue falsa.'
        elif stripped.startswith('else:'):
            text = 'Bloque <code>else</code>: se ejecuta si ninguna condición anterior fue verdadera.'
        elif stripped.startswith('try:'):
            text = '<code>try</code>: Python intentará ejecutar lo que está dentro. Si ocurre un error, saltará al bloque <code>except</code>.'
        elif stripped.startswith('except'):
            text = 'Bloque <code>except</code>: captura el error y ejecuta este código como respuesta controlada.'
        elif stripped.startswith('finally:'):
            text = 'Bloque <code>finally</code>: siempre se ejecuta, haya o no error.'
        elif stripped.startswith('import ') or stripped.startswith('from '):
            text = 'Importa el módulo o función para usarla en este archivo.'
        elif stripped.startswith('with open('):
            text = 'Abre el archivo de forma segura. Al salir del bloque <code>with</code>, el archivo se cierra automáticamente.'
        elif stripped == 'break':
            text = '<code>break</code> interrumpe el bucle inmediatamente y sale de él.'
        elif stripped == 'continue':
            text = '<code>continue</code> salta el resto de este ciclo y regresa al inicio del bucle.'
        elif ' = ' in stripped and not stripped.startswith('#'):
            match = re.match(r'^([\w\[\]\'".]+)\s*=', stripped)
            if match:
                var = match.group(1)
                text = f'Se asigna un valor a <code>{var}</code>. Esto queda guardado en memoria para usarse después.'
        
        if text:
            seen_lines.add(i)
            text = text.replace('`', '\\`')
            steps.append(f'                    {{ text: `{text}`, line: {i} }}')
    
    if not steps:
        return '[]'
    
    return '[\n' + ',\n'.join(steps) + '\n                ]'


# ──────────────────────────────────────────────────────────────────────────────
# Parser de lecciones con content
# ──────────────────────────────────────────────────────────────────────────────

def convert_lesson_block(lesson_text: str) -> str:
    """
    Recibe el texto JS de un objeto leccion
    y lo convierte al nuevo formato.
    """
    title_match = re.search(r'title:\s*["`\'](.*?)["`\']', lesson_text)
    title = title_match.group(1) if title_match else 'Sin título'
    
    content_match = re.search(r'content:\s*`(.*?)`(?=\s*[,}])', lesson_text, re.DOTALL)
    if not content_match:
        return lesson_text
    
    content_html = content_match.group(1)
    
    dialogo_html, codigo_python = strip_code_blocks(content_html)
    
    dialogo_html = re.sub(r'\n{3,}', '\n\n', dialogo_html)
    dialogo_html = dialogo_html.strip()
    
    dialogo_html = dialogo_html.replace('`', '\\`')
    
    indent = '                '
    
    new_block = f"""            {{
                title: `{title}`,
                dialogo: `{dialogo_html}`"""
    
    if codigo_python:
        codigo_safe = codigo_python.replace('`', '\\`').replace('${', '\\${')
        tour_steps = build_tour_steps(codigo_python)
        new_block += f""",
                codigo: `{codigo_safe}`,
                tourSteps: {tour_steps}
            }}"""
    else:
        new_block += f"""
            }}"""
    
    return new_block


def process_file():
    print("Leyendo archivo fuente...")
    with open(SOURCE_FILE, 'r', encoding='utf-8') as f:
        content = f.read()
    
    print("Creando backup...")
    with open(BACKUP_FILE, 'w', encoding='utf-8') as f:
        f.write(content)
    print(f"Backup creado: {BACKUP_FILE}")
    
    nivel6_marker = '{ // Nivel 6'
    nivel6_start = content.find(nivel6_marker)
    
    if nivel6_start == -1:
        print("Error: No se encontro '{ // Nivel 6'. Abortando.")
        sys.exit(1)
    
    print(f"Nivel 6 encontrado en posicion {nivel6_start}")
    
    before_nivel6 = content[:nivel6_start]
    after_nivel6_full = content[nivel6_start:]
    
    end_array_match = re.search(r'\n\];\s*\n', after_nivel6_full)
    if end_array_match:
        coursedata_end = end_array_match.end()
        niveles_6_plus = after_nivel6_full[:coursedata_end]
        after_coursedata = after_nivel6_full[coursedata_end:]
    else:
        niveles_6_plus = after_nivel6_full
        after_coursedata = ""
    
    print(f"Bloque de niveles 6-20: {len(niveles_6_plus)} caracteres")
    
    lesson_pattern = re.compile(
        r'(\s+\{[^{}]*?title:\s*[`"\'][^`"\']*?[`"\']\s*,\s*content:\s*`.*?`\s*\})',
        re.DOTALL
    )
    
    converted_count = 0
    
    def replacer(m):
        nonlocal converted_count
        original = m.group(1)
        converted = convert_lesson_block(original)
        if converted != original:
            converted_count += 1
            print(f"Leccion convertida")
        return converted
    
    nuevos_niveles = lesson_pattern.sub(replacer, niveles_6_plus)
    
    print(f"\nTotal de lecciones convertidas: {converted_count}")
    
    final_content = before_nivel6 + nuevos_niveles + after_coursedata
    
    print(f"\nEscribiendo archivo final...")
    with open(SOURCE_FILE, 'w', encoding='utf-8') as f:
        f.write(final_content)
    
    print(f"Migracion completada! Archivo actualizado: {SOURCE_FILE}")
    
    return converted_count


if __name__ == '__main__':
    count = process_file()
    if count == 0:
        print("\nADVERTENCIA: No se convirtio ninguna leccion.")
    else:
        print(f"\nExito total: {count} lecciones migradas.")
