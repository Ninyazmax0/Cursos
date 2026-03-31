#!/usr/bin/env python3
"""
Arregla las líneas HTML corruptas dentro de template literals.
El problema: las comillas dobles en atributos HTML fueron cambiadas a simples.
Solución: dentro de template literals (backticks), restaurar comillas dobles en HTML.
"""

import re

filepath = r'C:\Users\MINEDUCYT\OneDrive\Documentos\verdadera-academia\python_course.html'

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

# Buscar líneas que contienen HTML con comillas simples en atributos
# Patrón: class='...' o cualquier atributo HTML con comilla simple
html_attr_pattern = re.compile(r'''(<[a-z]+ [^>]*class\s*=\s*)'([^']*)'(.*>)''')

changes = 0
new_lines = []

for i, line in enumerate(lines):
    # Solo procesar líneas que están dentro de template literals
    # (líneas que contienen HTML tags y comillas simples en atributos)
    if '<div class=' in line or '<strong class=' in line or '<p class=' in line or '<ul class=' in line:
        # Restaurar comillas dobles en atributos HTML
        new_line = line.replace("class='", 'class="')
        # Buscar el cierre de la comilla del atributo
        # Patrón: ..."texto"> o ..."texto">'
        new_line = re.sub(r'\"([^\"]*)\">', r'"\1">', new_line)
        # Quitar comillas simples sobrantes después de >
        new_line = re.sub(r'\">\'', '">', new_line)
        if new_line != line:
            changes += 1
        new_lines.append(new_line)
    elif '</strong>\'' in line or '</p>\'' in line or '</ul>\'' in line or '</li>\'' in line:
        # Quitar comillas simples después de tags de cierre
        new_line = line.replace("</strong>'", '</strong>')
        new_line = new_line.replace("</p>'", '</p>')
        new_line = new_line.replace("</ul>'", '</ul>')
        new_line = new_line.replace("</li>'", '</li>')
        if new_line != line:
            changes += 1
        new_lines.append(new_line)
    elif '<li>' in line and '</li>\'' in line:
        new_line = line.replace("</li>'", '</li>')
        if new_line != line:
            changes += 1
        new_lines.append(new_line)
    else:
        new_lines.append(line)

with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print(f"Arregladas {changes} líneas HTML corruptas")
