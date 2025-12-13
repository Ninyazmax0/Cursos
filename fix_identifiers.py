
import re

file_path = r"c:\Users\MINEDUCYT\OneDrive\Documentos\verdadera-academia\python_course.html"

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Define patterns to fix nested backticks in createInteractiveConsole calls
# We want to change `createInteractiveConsole(` followed by an unescaped backtick to `createInteractiveConsole(\`
# And the closing backtick before the container ID.

# Pattern 1: Opening backtick
# Look for createInteractiveConsole(` that is NOT preceded by a backslash
# But wait, looking at the text itself, we want to replace `createInteractiveConsole(` with `createInteractiveConsole(\`
# if the next char is a backtick.

# Actually, the specific string in the file is `createInteractiveConsole(` followed by a newline or spaces?
# No, usually `createInteractiveConsole(`
# Let's count them first.

count_open = content.count("createInteractiveConsole(`")
print(f"Found {count_open} unescaped opening calls.")

# Perform replacement
# Replacement: `createInteractiveConsole(` -> `createInteractiveConsole(\`
new_content = content.replace("createInteractiveConsole(`", "createInteractiveConsole(\\`")

# Pattern 2: Closing backtick
# Look for backtick followed by `, 'console` or `, "console`
# We need to escape this backtick too.
# Regex is safer here.
# Pattern: `(backtick), 'console` -> `\(backtick), 'console`

# We need to be careful not to double escape if already escaped.
# But count showed unescaped ones.

# Regex for closing
# find ` , 'console` (backtick comma space quote console)
# Replace with `\` , 'console`
new_content = re.sub(r"`,\s*'console", r"\\`, 'console", new_content)
new_content = re.sub(r"`,\s*\"console", r"\\`, \"console", new_content)

if new_content != content:
    print("Replacements made.")
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
else:
    print("No changes needed.")
