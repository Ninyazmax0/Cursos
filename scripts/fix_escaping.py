#!/usr/bin/env python3
"""
Corrige problemas de escaping de comillas en python_course.html
Convierte strings delimitados por \"...\" a '...'
Pero NO toca template literals (backticks) ni strings que ya usan comillas simples.
"""

import re

filepath = r'C:\Users\MINEDUCYT\OneDrive\Documentos\verdadera-academia\python_course.html'

with open(filepath, 'r', encoding='utf-8') as f:
    lines = f.readlines()

changes = 0
new_lines = []

for i, line in enumerate(lines):
    # Solo procesar líneas que contienen \" (comillas escapadas)
    # y que NO están dentro de template literals (backticks)
    
    if '\\"' not in line:
        new_lines.append(line)
        continue
    
    # Verificar si la línea está dentro de un template literal
    # (contiene backticks)
    if '`' in line:
        # No procesar líneas con template literals
        new_lines.append(line)
        continue
    
    # Esta línea tiene \" y no está en un template literal
    # Convertir los strings delimitados por \" a '
    
    result = []
    j = 0
    n = len(line)
    
    while j < n:
        # Buscar inicio de string con \"
        if j + 1 < n and line[j] == '\\' and line[j+1] == '"':
            # Encontrar el cierre del string
            start = j
            k = j + 2
            found_end = False
            
            while k < n:
                if k + 1 < n and line[k] == '\\' and line[k+1] == '"':
                    # Encontramos \" - verificar si es cierre
                    # Verificar qué viene después
                    m = k + 2
                    while m < n and line[m] in ' \t':
                        m += 1
                    
                    # Si después hay , ] } + o es el final, es cierre
                    if m >= n or line[m] in ',]}' or (m + 1 < n and line[m:m+2] == '+ '):
                        # Es cierre - construir el string
                        inner = line[start+2:k]
                        # Cambiar \" internos a "
                        inner = inner.replace('\\"', '"')
                        # Escapar ' internos si las hay
                        inner = inner.replace("'", "\\'")
                        
                        result.append("'")
                        result.append(inner)
                        result.append("'")
                        j = k + 2
                        found_end = True
                        break
                    else:
                        # No es cierre, es comilla interna
                        k += 2
                elif line[k] == '\n':
                    # Fin de línea
                    inner = line[start+2:k]
                    inner = inner.replace('\\"', '"')
                    inner = inner.replace("'", "\\'")
                    result.append("'")
                    result.append(inner)
                    result.append("'")
                    j = k
                    found_end = True
                    break
                else:
                    k += 1
            
            if not found_end:
                # No se encontró cierre, tomar hasta el final
                inner = line[start+2:]
                inner = inner.replace('\\"', '"')
                inner = inner.replace("'", "\\'")
                result.append("'")
                result.append(inner)
                result.append("'")
                j = n
        else:
            result.append(line[j])
            j += 1
    
    new_line = ''.join(result)
    if new_line != line:
        changes += 1
    new_lines.append(new_line)

with open(filepath, 'w', encoding='utf-8') as f:
    f.writelines(new_lines)

print(f"Correcciones aplicadas: {changes} líneas modificadas")
