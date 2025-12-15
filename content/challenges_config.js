
// Configuración Centralizada de Desafíos
const challengesConfig = {
    // NIVEL 5: Modelo de Caja (CSS Intermedio)
    "level5": {
        title: "Desafío Nivel 5: Dominando el Modelo de Caja",
        subtitle: "Ajusta márgenes, bordes y relleno para que el contenido se vea perfecto.",
        instructions: `
            <h2><i data-lucide="box" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>Tienes una caja con la clase <code>.box</code>. Tu misión es aplicar las siguientes propiedades CSS:</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Ancho (width): 300px</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Relleno (padding): 20px</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Borde (border): 5px sólido azul</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Margen (margin): 50px automático (centrado)</span></div>
            </div>
        `,
        initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Modelo de Caja</title>
    <style>
        body { font-family: sans-serif; background: #f0f0f0; }
        .box {
            background-color: white;
            /* Agrega tu código CSS aquí abajo */
            
        }
    </style>
</head>
<body>
    <div class="box">
        <h2>Hola, soy una caja</h2>
        <p>Ajusta mi modelo de caja (Box Model).</p>
    </div>
</body>
</html>`,
        prompt: "...",
        language: "html",
        validate: (code) => {
            const checks = [
                { pattern: /width:\s*300px/, msg: "Falta width: 300px" },
                { pattern: /padding:\s*20px/, msg: "Falta padding: 20px" },
                { pattern: /border:\s*5px\s+solid\s+blue/i, msg: "Falta border: 5px solid blue" },
                { pattern: /margin:\s*50px\s+auto/, msg: "Falta margin: 50px auto" }
            ];
            const errors = checks.filter(c => !c.pattern.test(code)).map(c => c.msg);
            const score = Math.max(0, 10 - (errors.length * 2.5));
            return {
                score: score,
                isPass: score >= 8,
                feedback: errors.length === 0 ? "¡Perfecto! Has dominado el modelo de caja." : "Te falta: " + errors.join(', ')
            };
        }
    },

    // NIVEL 6: JS Interactivo
    "level6": {
        title: "Desafío Nivel 6: JavaScript Interactivo",
        subtitle: "Crea una función que salude al usuario dinámicamente.",
        instructions: `
            <h2><i data-lucide="zap" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>Crea una mini-app que salude al usuario al hacer clic en un botón.</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Input para nombre (id="nombreInput")</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Botón para saludar (id="saludarBtn")</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Div para resultado (id="resultado")</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>JS: Escuchar clic y mostrar "Hola [nombre]"</span></div>
            </div>
        `,
        initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Saludo JS</title>
    <style>
        body { font-family: sans-serif; padding: 20px; }
        .container { background: white; padding: 20px; border-radius: 8px; }
        input, button { padding: 8px; margin: 5px; }
        #resultado { margin-top: 15px; font-weight: bold; color: #333; }
    </style>
</head>
<body>
    <div class="container">
        <h1>Generador de Saludos</h1>
        <input type="text" id="nombreInput" placeholder="Tu nombre">
        <button id="saludarBtn">Saludar</button>
        <div id="resultado"></div>
    </div>

    <script>
        // Escribe tu lógica JS aquí
        
    </script>
</body>
</html>`,
        prompt: "...",
        language: "html",
        validate: (code) => {
             const checks = [
                { pattern: /document\.getElementById\(['"]nombreInput['"]\)\.value/, msg: "No obtuviste el valor del input" },
                { pattern: /addEventListener\(['"]click['"]/, msg: "Debes usar addEventListener para el clic" },
                { pattern: /innerHTML\s*=|innerText\s*=|textContent\s*=/, msg: "Falta mostrar el resultado" }
            ];
            const missing = checks.filter(c => !c.pattern.test(code));
            return {
                score: missing.length === 0 ? 10 : 5,
                isPass: missing.length === 0,
                feedback: missing.length === 0 ? "¡Excelente interactividad!" : missing.map(m => m.msg).join(". ")
            };
        }
    },

    // NIVEL 10: Flexbox Avanzado
    "level10": {
        title: "Desafío Nivel 10: Flexbox Avanzado",
        subtitle: "Alinea elementos horizontal y verticalmente usando Flexbox.",
        instructions: `
            <h2><i data-lucide="layout" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>Alinea las 3 cajas dentro del contenedor para que estén centradas perfectamente (horizontal y vertical).</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Contenedor: display: flex</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Eje Principal: justify-content: center</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Eje Cruzado: align-items: center</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Espacio entre elementos: gap: 20px</span></div>
            </div>
        `,
        initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
    <style>
        .container {
            background-color: #2c3e50;
            height: 300px;
            /* Aplica Flexbox aquí */
            
        }
        .item {
            background-color: #e74c3c;
            color: white;
            width: 80px;
            height: 80px;
            display: flex; /* Para centrar texto dentro de la caja */
            justify-content: center;
            align-items: center;
            font-family: sans-serif;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">3</div>
    </div>
</body>
</html>`,
        prompt: "...",
        language: "html",
        validate: (code) => {
             const checks = [
                { pattern: /display:\s*flex/, msg: "Falta display: flex" },
                { pattern: /justify-content:\s*center/, msg: "Falta centrar horizontalmente (justify-content)" },
                { pattern: /align-items:\s*center/, msg: "Falta centrar verticalmente (align-items)" },
                { pattern: /gap:\s*20px/, msg: "Falta el gap de 20px" }
            ];
            const errors = checks.filter(c => !c.pattern.test(code));
            return {
                score: errors.length === 0 ? 10 : 4,
                isPass: errors.length === 0,
                feedback: errors.length === 0 ? "¡Flexbox dominado!" : "Revisa: " + errors.map(e => e.msg).join(', ')
            };
        }
    },

    // NIVEL 11: CSS Grid
    "level11": {
        title: "Desafío Nivel 11: CSS Grid Básico",
        subtitle: "Construye una grilla de 2x2 para una galería de fotos.",
        instructions: `
            <h2><i data-lucide="grid" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>Crea una disposición de cuadrícula (Grid) de 2 columnas y 2 filas.</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Contenedor: display: grid</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Columnas: 2 iguales (1fr 1fr)</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Espaciado (gap): 15px</span></div>
            </div>
        `,
        initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
    <style>
        .gallery {
            /* Tu código Grid aquí */
            
        }
        .photo {
            background-color: #3498db;
            color: white;
            padding: 20px;
            text-align: center;
            font-family: sans-serif;
            border-radius: 5px;
        }
    </style>
</head>
<body>
    <div class="gallery">
        <div class="photo">Foto 1</div>
        <div class="photo">Foto 2</div>
        <div class="photo">Foto 3</div>
        <div class="photo">Foto 4</div>
    </div>
</body>
</html>`,
        prompt: "...",
        language: "html",
         validate: (code) => {
             const hasGrid = /display:\s*grid/.test(code);
             const hasCols = /grid-template-columns:\s*(1fr\s*1fr|repeat\(2,\s*1fr\))/.test(code);
             const hasGap = /gap:\s*15px/.test(code);
             
             if(hasGrid && hasCols && hasGap) return { score: 10, isPass: true, feedback: "¡Grid 2x2 correcto!" };
             return { score: 4, isPass: false, feedback: "Asegúrate de usar display: grid, definir 2 columnas iguales y el gap correcto." };
        }
    },

    // NIVEL 15: Diseño Responsivo (Media Queries)
    "level15": {
        title: "Desafío Nivel 15: Diseño Responsivo",
        subtitle: "Haz que tu diseño se adapte a móviles.",
        instructions: `
            <h2><i data-lucide="smartphone" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>Tenemos 3 columnas. Usa Media Queries para que en pantallas pequeñas (max-width: 600px) se conviertan en 1 sola columna.</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Escritorio: display: flex (ya hecho)</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Media Query: @media (max-width: 600px)</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Móvil: flex-direction: column</span></div>
            </div>
        `,
        initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .container {
            display: flex;
            gap: 10px;
        }
        .box {
            background: #9b59b6;
            color: white;
            padding: 20px;
            flex: 1;
            text-align: center;
            font-family: sans-serif;
        }

        /* Escribe tu Media Query aquí */
        
    </style>
</head>
<body>
    <div class="container">
        <div class="box">Columna 1</div>
        <div class="box">Columna 2</div>
        <div class="box">Columna 3</div>
    </div>
</body>
</html>`,
        prompt: "El usuario debe agregar @media (max-width: 600px) { .container { flex-direction: column; } }. Verifica que la sintaxis de la media query sea correcta.",
        language: "html"
    },

    // NIVEL 16: Fetch API
    "level16": {
        title: "Desafío Nivel 16: Consumiendo APIs",
        subtitle: "Obtén datos reales de un usuario usando fetch().",
        instructions: `
            <h2><i data-lucide="globe" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>Usa la API de JSONPlaceholder para mostrar el nombre de un usuario.</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Endpoint: 'https://jsonplaceholder.typicode.com/users/1'</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Usar fetch() para traer los datos</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Convertir respuesta a JSON</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Mostrar el user.name en el div #user-name</span></div>
            </div>
        `,
        initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
    <style>
        body { font-family: sans-serif; padding: 20px; }
        .card { border: 1px solid #ccc; padding: 20px; border-radius: 8px; max-width: 300px; }
    </style>
</head>
<body>
    <div class="card">
        <h3>Datos de Usuario</h3>
        <p>Nombre: <span id="user-name">Cargando...</span></p>
    </div>

    <script>
        // API URL: https://jsonplaceholder.typicode.com/users/1
        
        // Escribe tu fetch aquí
        
    </script>
</body>
</html>`,
        prompt: "El usuario debe implementar fetch a la URL dada, procesar .json(), y asignar data.name al innerText/textContent de document.getElementById('user-name'). Verifica el uso correcto de promesas (then) o async/await.",
        language: "html"
    },

    // NIVEL 19: Proyecto Intermedio
    "level19": {
        title: "Desafío Nivel 19: Galería Interactiva",
        subtitle: "Combina Grid y JS para crear una galería.",
        instructions: `
            <h2><i data-lucide="image" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>1. Crea una grilla de 3 columnas.<br>2. Al hacer clic en una 'foto' (div), cambia su color de fondo a un color aleatorio o específico.</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>CSS: Grid de 3 columnas</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>JS: Seleccionar todas las fotos (.photo)</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>JS: Evento click en cada foto</span></div>
            </div>
        `,
        initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
    <style>
        .gallery {
            /* 1. Define el grid aquí */
            gap: 10px;
        }
        .photo {
            height: 100px;
            background-color: #ddd;
            cursor: pointer;
            transition: background 0.3s;
        }
    </style>
</head>
<body>
    <div class="gallery">
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
        <div class="photo"></div>
    </div>

    <script>
        // 2. Agrega la interactividad aquí
        
    </script>
</body>
</html>`,
        prompt: "Revisa dos cosas: 1) Que .gallery tenga display: grid y grid-template-columns. 2) Que haya un script que agregue addEventListener('click') a los elementos .photo para cambiar su style.backgroundColor. Es un desafío integrador.",
        language: "html"
    },

    // NIVEL 20: EXAMEN FINAL
    "level20": {
        title: "Desafío Final: Landing Page Completa",
        subtitle: "Demuestra todo lo aprendido: Estructura, Estilo e Interactividad.",
        instructions: `
            <h2><i data-lucide="flag" class="w-5 h-5 inline mr-2"></i>Misión Final</h2>
            <p>Construye una mini landing page con:</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Navbar con Flexbox (derecha)</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Sección Hero con título centrado</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Botón "Modo Oscuro" funcional</span></div>
            </div>
        `,
        initialCode: `<!DOCTYPE html>
<html lang="es">
<head>
    <style>
        body { margin: 0; font-family: sans-serif; transition: background 0.3s, color 0.3s; }
        header {
            background: #333; color: white; padding: 1rem;
            /* 1. Usa Flexbox para alinear el botón a la derecha */
            
        }
        .hero {
            padding: 4rem; text-align: center;
        }
        .dark-mode {
            background-color: #222;
            color: white;
        }
    </style>
</head>
<body>
    <header>
        <span>Mi Landing</span>
        <button id="theme-btn">Cambiar Tema</button>
    </header>

    <section class="hero">
        <h1>Bienvenido a mi sitio web</h1>
        <p>Este es mi examen final del curso.</p>
    </section>

    <script>
        // 2. Haz que el botón alterne la clase 'dark-mode' en el body
        
    </script>
</body>
</html>`,
        prompt: "EXAMEN FINAL: Verifica rigorously. 1) header debe tener display: flex y justify-content: space-between o similar. 2) El script debe seleccionar el botón y el body, y usar classList.toggle('dark-mode') al hacer click. Felicítalo efusivamente si lo logra.",
        language: "html"
    },
        // ==========================================
    // RUBY CHALLENGES
    // ==========================================
    
    "ruby_challenge1": {
        title: "Desafío Ruby 1: Fundamentos de Ruby",
        subtitle: "Variables, strings, arrays y hashes básicos",
        instructions: `
            <h2><i data-lucide="gem" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>Crea un programa Ruby que demuestre el uso de variables, arrays y hashes.</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Crea una variable con tu nombre</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Crea un array con 3 frutas</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Crea un hash con nombre y edad</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Imprime todo usando puts</span></div>
            </div>
        `,
        initialCode: `# Desafío Ruby 1: Fundamentos
# Escribe tu código aquí
# 1. Variable con tu nombre
# 2. Array con 3 frutas
# 3. Hash con nombre y edad
# 4. Imprime todo
`,
        prompt: "Verifica que el código Ruby tenga: 1) Una variable de tipo String, 2) Un array con al menos 3 elementos, 3) Un hash con claves :nombre y :edad, 4) Uso de puts para imprimir. El código debe ser sintácticamente válido.",
        language: "ruby"
    },
    "ruby_challenge2": {
        title: "Desafío Ruby 2: Métodos y Bloques",
        subtitle: "Crea métodos y usa bloques con each",
        instructions: `
            <h2><i data-lucide="code" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>Demuestra el uso de métodos y bloques en Ruby.</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Crea un método que sume dos números</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Usa .each para iterar un array</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Usa .map para transformar elementos</span></div>
            </div>
        `,
        initialCode: `# Desafío Ruby 2: Métodos y Bloques
# 1. Método que suma dos números
def sumar(a, b)
  # Tu código aquí
end
# 2. Array de números
numeros = [1, 2, 3, 4, 5]
# 3. Usa .each para imprimir cada número
# 4. Usa .map para duplicar cada número
`,
        prompt: "Verifica: 1) Método sumar que retorne a + b, 2) Uso de .each con bloque do...end o {...}, 3) Uso de .map para transformar el array. Código debe ser funcional.",
        language: "ruby"
    },
    "ruby_challenge3": {
        title: "Desafío Ruby 3: Clases y Objetos",
        subtitle: "Programación orientada a objetos en Ruby",
        instructions: `
            <h2><i data-lucide="box" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>Crea una clase Persona con atributos y métodos.</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Clase Persona con initialize</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Atributos: nombre y edad</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Método saludar que imprima un mensaje</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Crea una instancia y llama al método</span></div>
            </div>
        `,
        initialCode: `# Desafío Ruby 3: Clases y Objetos
# 1. Define la clase Persona
class Persona
  # Tu código aquí
  
end
# 2. Crea una instancia
# 3. Llama al método saludar
`,
        prompt: "Verifica: 1) Clase Persona con initialize(nombre, edad), 2) Atributos @nombre y @edad, 3) Método saludar que use puts, 4) Instancia creada con Persona.new. Sintaxis correcta de Ruby.",
        language: "ruby"
    },
    "ruby_challenge4": {
        title: "Desafío Ruby 4: Proyecto Rails",
        subtitle: "Conceptos de Ruby on Rails",
        instructions: `
            <h2><i data-lucide="train" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>Demuestra conocimiento de Rails con un modelo básico.</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Modelo User con validaciones</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Validación de presencia de nombre</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Método personalizado</span></div>
            </div>
        `,
        initialCode: `# Desafío Ruby 4: Rails Model
# app/models/user.rb
class User < ApplicationRecord
  # 1. Agrega validaciones
  
  
  # 2. Método personalizado que retorne nombre completo
  def nombre_completo
    # Tu código aquí
  end
end
`,
        prompt: "Verifica: 1) Herencia de ApplicationRecord, 2) validates :nombre, presence: true o similar, 3) Método nombre_completo que retorne un string. Sintaxis Rails correcta.",
        language: "ruby"
    },
    // ==========================================
    // PYTHON CHALLENGES
    // ==========================================
    
    "python_challenge1": {
        title: "Desafío Python 1: Variables y Entrada",
        subtitle: "Nivel 3: Domina las variables y la interacción básica.",
        instructions: `
            <h2><i data-lucide="terminal" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>Crea un programa que pregunte el nombre y la edad del usuario, y luego imprima un mensaje personalizado.</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Usa input() para pedir el nombre</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Usa input() para pedir la edad</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Imprime "Hola [nombre], tienes [edad] años"</span></div>
            </div>
        `,
        initialCode: `# Desafío Nivel 3
# Tu código aquí
nombre = 
edad = 
print(...)
`,
        allowedCommands: ['print', 'input', '=', '(', ')', '"', "'", '+', ',', '#'],
        prompt: "Verifica que use input() dos veces y print() con el formato correcto.",
        language: "python"
    },
    "python_challenge2": {
        title: "Desafío Python 2: Lógica y Bucles",
        subtitle: "Nivel 5: Control de flujo con if y for.",
        instructions: `
            <h2><i data-lucide="git-branch" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>Escribe un programa que cuente del 1 al 10 e imprima si cada número es par o impar.</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Bucle for con range(1, 11)</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Usa if/else y el operador módulo %</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Imprime "X es par" o "X es impar"</span></div>
            </div>
        `,
        initialCode: `# Desafío Nivel 5
# Bucle del 1 al 10
for i in range(...):
    if ...:
        print(...)
    else:
        print(...)
`,
        allowedCommands: ['for', 'in', 'range', 'if', 'else', 'elif', 'print', '%', '==', ':', '(', ')'],
        prompt: "Verifica el uso de range(1, 11) o (1, 10), operador %, y estructura if/else dentro del for.",
        language: "python"
    },
    "python_challenge3": {
        title: "Desafío Python 3: Colecciones",
        subtitle: "Nivel 8: Listas y Diccionarios.",
        instructions: `
            <h2><i data-lucide="list" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>Crea una lista de compras y un diccionario de precios.</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Lista 'compras' con 3 items</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Diccionario 'precios' con los mismos items</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Calcula e imprime el total sumando precios</span></div>
            </div>
        `,
        initialCode: `# Desafío Nivel 8
compras = ["manzana", "pan", "leche"]
precios = {"manzana": 10, "pan": 5, "leche": 15}

total = 0
# Tu lógica para sumar aquí...
print("Total:", total)
`,
        allowedCommands: ['list', 'dict', '[', ']', '{', '}', 'for', 'in', 'print', '+', '=', '+=', 'int', 'str'],
        prompt: "Verifica creación de lista, diccionario y bucle para sumar valores.",
        language: "python"
    },
    "python_challenge4": {
        title: "Desafío Python 4: Archivos",
        subtitle: "Nivel 10: Lectura y Escritura.",
        instructions: `
            <h2><i data-lucide="file-text" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>Simula un sistema de logs escribiendo en un archivo.</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Usa 'with open' en modo escritura ('w')</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Escribe 3 líneas de log</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Usa 'with open' en modo lectura ('r') para leerlo</span></div>
            </div>
        `,
        initialCode: `# Desafío Nivel 10
# Escribir log
with open("log.txt", "w") as f:
    # Escribe aquí
    pass

# Leer log
with open("log.txt", "r") as f:
    print(f.read())
`,
        allowedCommands: ['open', 'with', 'as', 'write', 'read', 'print', ':', '(', ')', '"', "'"],
        prompt: "Verifica uso de context manager (with open) para escritura y lectura.",
        language: "python"
    },
    "python_challenge5": {
        title: "Desafío Python 5: Introducción a POO",
        subtitle: "Nivel 13: Clases y Objetos.",
        instructions: `
            <h2><i data-lucide="box" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>Define una clase <code>Robot</code>.</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Clase Robot con __init__(nombre)</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Método saludar() que diga "Hola, soy [nombre]"</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Instancia un robot y haz que salude</span></div>
            </div>
        `,
        initialCode: `# Desafío Nivel 13
class Robot:
    def __init__(self, nombre):
        # Tu código
        pass
    
    def saludar(self):
        # Tu código
        pass

r1 = Robot("R2D2")
r1.saludar()
`,
        allowedCommands: ['class', 'def', '__init__', 'self', 'print', 'return', '=', '(', ')', '.', ':'],
        prompt: "Verifica definición de clase, constructor __init__, uso de self y creación de instancia.",
        language: "python"
    },
    "python_challenge6": {
        title: "Desafío Python 6: Herencia",
        subtitle: "Nivel 15: Superclases y Subclases.",
        instructions: `
            <h2><i data-lucide="git-merge" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>Extiende la clase <code>Robot</code> del nivel anterior.</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Clase RobotVolador que herede de Robot</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Método volar() exclusivo de la subclase</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Sobrescribe saludar() para decir "Soy [nombre] y vuelo"</span></div>
            </div>
        `,
        initialCode: `# Desafío Nivel 15
class Robot:
    def __init__(self, nombre):
        self.nombre = nombre
    def saludar(self):
        print(f"Soy {self.nombre}")

class RobotVolador(Robot):
    # Tu código aquí
    pass

rv = RobotVolador("Astro")
rv.saludar()
rv.volar()
`,
        allowedCommands: ['class', 'def', 'super', 'self', 'print', '(', ')', '.', ':', 'return'],
        prompt: "Verifica herencia (class Sub(Super)), override de método y uso de super() opcional.",
        language: "python"
    },
    "python_challenge7": {
        title: "Desafío Python 7: APIs y JSON",
        subtitle: "Nivel 18: Datos Externos.",
        instructions: `
            <h2><i data-lucide="globe" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>Simula el consumo de uan API usando un diccionario JSON string.</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Importa json</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Parsea el string JSON dado a un diccionario</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Imprime el valor de 'status'</span></div>
            </div>
        `,
        initialCode: `# Desafío Nivel 18
import json

respuesta_api = '{"status": "ok", "data": [1, 2, 3], "code": 200}'

# 1. Parsea JSON
datos = ...

# 2. Imprime status
print(...)
`,
        allowedCommands: ['import', 'json', 'loads', 'print', '=', '(', ')', '[', ']', '"', "'"],
        prompt: "Verifica import json, uso de json.loads() y acceso a diccionario.",
        language: "python"
    },
    "python_challenge8": {
        title: "Desafío Final: Sistema Completo",
        subtitle: "Nivel 20: Proyecto Integrador.",
        instructions: `
            <h2><i data-lucide="award" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>Crea un sistema de gestión de usuarios simple.</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Clase Usuario(nombre, email)</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Clase Sistema con lista de usuarios</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Método registrar_usuario() y listar_usuarios()</span></div>
            </div>
        `,
        initialCode: `# Desafío Final Nivel 20
class Usuario:
    def __init__(self, nombre, email):
        self.nombre = nombre
        self.email = email

class Sistema:
    def __init__(self):
        self.usuarios = []
    
    def registrar(self, usuario):
        # Agregar a lista
        pass
        
    def listar(self):
        # Mostrar todos
        pass

sis = Sistema()
sis.registrar(Usuario("Steven", "s@test.com"))
sis.listar()
`,
        allowedCommands: ['class', 'def', '__init__', 'self', 'append', 'print', 'for', 'in', '=', '(', ')', '.', ':', 'return'],
        prompt: "Verifica estructura de 2 clases, manejo de lista de objetos y métodos funcionales.",
        language: "python"
    },
    // ==========================================
    // DATABASE CHALLENGES
    // ==========================================
    
    "db_challenge1": {
        title: "Desafío SQL 1: SELECT Básico",
        subtitle: "Consultas SELECT simples",
        instructions: `
            <h2><i data-lucide="database" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>Escribe consultas SQL básicas.</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>SELECT * FROM usuarios</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>SELECT con WHERE</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>ORDER BY</span></div>
            </div>
        `,
        initialCode: `-- Desafío SQL 1: SELECT Básico
-- Escribe tus consultas aquí
-- 1. Selecciona todos los usuarios
-- 2. Selecciona usuarios mayores de 18
-- 3. Ordena por nombre
`,
        prompt: "Verifica: 1) SELECT * FROM usuarios, 2) WHERE edad > 18 o similar, 3) ORDER BY nombre. Sintaxis SQL correcta.",
        language: "sql"
    },
    "db_challenge2": {
        title: "Desafío SQL 2: INSERT y UPDATE",
        subtitle: "Modificación de datos",
        instructions: `
            <h2><i data-lucide="edit" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>Inserta y actualiza registros.</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>INSERT nuevo usuario</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>UPDATE edad de un usuario</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>DELETE un registro</span></div>
            </div>
        `,
        initialCode: `-- Desafío SQL 2: INSERT y UPDATE
-- 1. Inserta un nuevo usuario
-- 2. Actualiza la edad del usuario con id=1
-- 3. Elimina usuario con id=5
`,
        prompt: "Verifica: 1) INSERT INTO usuarios VALUES o (columnas) VALUES, 2) UPDATE usuarios SET edad = X WHERE id = 1, 3) DELETE FROM usuarios WHERE id = 5. Sintaxis SQL correcta.",
        language: "sql"
    },
    "db_challenge3": {
        title: "Desafío SQL 3: JOIN",
        subtitle: "Relaciones entre tablas",
        instructions: `
            <h2><i data-lucide="link" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>Usa JOIN para relacionar tablas.</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>INNER JOIN entre usuarios y pedidos</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>LEFT JOIN</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>GROUP BY y COUNT</span></div>
            </div>
        `,
        initialCode: `-- Desafío SQL 3: JOIN
-- 1. INNER JOIN usuarios y pedidos
-- 2. LEFT JOIN para incluir usuarios sin pedidos
-- 3. Cuenta pedidos por usuario
`,
        prompt: "Verifica: 1) SELECT con INNER JOIN ON, 2) LEFT JOIN ON, 3) GROUP BY con COUNT(*) o COUNT(columna). Sintaxis SQL correcta.",
        language: "sql"
    },
    "db_challenge4": {
        title: "Desafío SQL 4: Diseño de BD",
        subtitle: "Crea tablas con relaciones",
        instructions: `
            <h2><i data-lucide="table" class="w-5 h-5 inline mr-2"></i>Instrucciones</h2>
            <p>Diseña una base de datos con CREATE TABLE.</p>
            <div class="requirements">
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Tabla productos con PRIMARY KEY</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>Tabla categorias</span></div>
                <div class="requirement-item"><i data-lucide="check-circle" class="w-5 h-5"></i><span>FOREIGN KEY entre tablas</span></div>
            </div>
        `,
        initialCode: `-- Desafío SQL 4: Diseño de BD
-- 1. Crea tabla categorias
-- 2. Crea tabla productos con FK
-- 3. Inserta datos de ejemplo
`,
        prompt: "Verifica: 1) CREATE TABLE con PRIMARY KEY, 2) FOREIGN KEY REFERENCES, 3) Tipos de datos correctos (INT, VARCHAR, etc.). Sintaxis SQL correcta de DDL.",
        language: "sql"
    },
};

// Exportar para que pueda ser usado (si usáramos módulos, pero aquí será un script global por simplicidad)
window.CHALLENGES_CONFIG = challengesConfig;
