<script>
// Datos de Práctica
const practiceData = [
    {
        title: "Práctica 1: Variables y Tipos de Datos",
        content: `<h3>Ejercicios Básicos</h3>
        <p>Crea un programa que:</p>
        <ol>
        <li>Pida al usuario su nombre y edad usando input()</li>
        <li>Convierta la edad a entero</li>
        <li>Muestre un mensaje personalizado</li>
        </ol>
        <div class="code-block rounded-lg overflow-hidden mt-4"><div class="code-block-header px-4 py-2 flex items-center gap-2"><span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span></div><pre class="p-4"><code class="language-python"># Tu código aquí
nombre = input("Ingresa tu nombre: ")
edad = int(input("Ingresa tu edad: "))
print(f"Hola {nombre}, tienes {edad} años!")</code></pre></div>`
    },
    {
        title: "Práctica 1.1: Encontrar Errores",
        content: `<h3>Encuentra los Errores</h3>
        <p>Haz clic en las partes del código que están incorrectas para corregirlas.</p>
        <div class="command-list mt-2 mb-2">
            <strong>Comandos disponibles:</strong> input, int, print, f-string
            <div class="command-counter mt-1">
                <span id="command-counter-1">Usados: 0/4</span>
            </div>
        </div>
        <div id="error-code-1" class="code-block rounded-lg overflow-hidden mt-4"><div class="code-block-header px-4 py-2 flex items-center gap-2"><span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span></div><pre class="p-4"><code class="language-python">nombre = input("Ingresa tu nombre: ")
edad = input("Ingresa tu edad: ")
print("Hola {nombre}, tienes {edad} años!")</code></pre></div>
        <button id="give-up-1" class="btn-primary mt-4">Rendirme y Ver Solución</button>
        <div id="solution-1" class="hidden mt-4">
            <p><strong>Solución:</strong></p>
            <pre><code class="language-python">nombre = input("Ingresa tu nombre: ")
edad = int(input("Ingresa tu edad: "))
print(f"Hola {nombre}, tienes {edad} años!")</code></pre>
        </div>`
    },
    {
        title: "Práctica 1.2: Completar Código",
        content: `<h3>Completa el Código</h3>
        <p>Arrastra los comandos disponibles a los huecos correctos.</p>
        <div class="command-list mt-2 mb-2">
            <strong>Comandos disponibles:</strong>
            <div class="command-palette mt-2 flex flex-wrap gap-2" id="command-palette-1">
                <div class="command-item bg-blue-500 text-white px-3 py-1 rounded cursor-move" draggable="true" data-command="input">input</div>
                <div class="command-item bg-blue-500 text-white px-3 py-1 rounded cursor-move" draggable="true" data-command="int">int</div>
                <div class="command-item bg-blue-500 text-white px-3 py-1 rounded cursor-move" draggable="true" data-command="print">print</div>
                <div class="command-item bg-blue-500 text-white px-3 py-1 rounded cursor-move" draggable="true" data-command="f">f</div>
            </div>
            <div class="command-counter mt-1">
                <span id="command-counter-fill-1">Completados: 0/4</span>
            </div>
        </div>
        <div class="code-block rounded-lg overflow-hidden mt-4"><div class="code-block-header px-4 py-2 flex items-center gap-2"><span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span></div><pre class="p-4"><code class="language-python"># Tu código aquí
nombre = <span class="drop-zone border-2 border-dashed border-gray-400 p-1 rounded" data-fill="1"></span>("Ingresa tu nombre: ")
edad = <span class="drop-zone border-2 border-dashed border-gray-400 p-1 rounded" data-fill="2"></span>(<span class="drop-zone border-2 border-dashed border-gray-400 p-1 rounded" data-fill="3"></span>("Ingresa tu edad: "))
print(<span class="drop-zone border-2 border-dashed border-gray-400 p-1 rounded" data-fill="4"></span>("Hola {nombre}, tienes {edad} años!"))</code></pre></div>
        <div class="mt-4">
            
            <button id="reset-fill-1" class="btn-primary ml-2">Reiniciar</button>
        </div>
        <div id="fill-feedback-1" class="mt-2"></div>`
    },
    {
        title: "Práctica 2: Operadores y Condicionales",
        content: `<h3>Ejercicios con Lógica</h3>
        <p>Crea un programa que:</p>
        <ol>
        <li>Pida dos números al usuario</li>
        <li>Realice operaciones básicas (+, -, *, /)</li>
        <li>Determine cuál es mayor</li>
        </ol>
        <div class="code-block rounded-lg overflow-hidden mt-4"><div class="code-block-header px-4 py-2 flex items-center gap-2"><span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span></div><pre class="p-4"><code class="language-python"># Tu código aquí
num1 = float(input("Primer número: "))
num2 = float(input("Segundo número: "))
print(f"Suma: {num1 + num2}")
print(f"Resta: {num1 - num2}")
print(f"Multiplicación: {num1 * num2}")
if num2 != 0:
   print(f"División: {num1 / num2}")
else:
   print("No se puede dividir por cero")
if num1 > num2:
   print(f"{num1} es mayor")
elif num2 > num1:
   print(f"{num2} es mayor")
else:
   print("Son iguales")</code></pre></div>`
    },
    {
        title: "Práctica 2.1: Encontrar Errores en Condicionales",
        content: `<h3>Encuentra los Errores</h3>
        <p>Haz clic en las partes del código que están incorrectas.</p>
        <div class="command-list mt-2 mb-2">
            <strong>Comandos disponibles:</strong> float, input, print, f-string, if, elif, else
            <div class="command-counter mt-1">
                <span id="command-counter-2">Usados: 0/7</span>
            </div>
        </div>
        <div id="error-code-2" class="code-block rounded-lg overflow-hidden mt-4"><div class="code-block-header px-4 py-2 flex items-center gap-2"><span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span></div><pre class="p-4"><code class="language-python">num1 = input("Primer número: ")
num2 = input("Segundo número: ")
print(f"Suma: {num1 + num2}")
if num1 > num2
   print(f"{num1} es mayor")
else num2 > num1:
   print(f"{num2} es mayor")
else:
   print("Son iguales")</code></pre></div>
        <button id="give-up-2" class="btn-primary mt-4">Rendirme y Ver Solución</button>
        <div id="solution-2" class="hidden mt-4">
            <p><strong>Solución:</strong></p>
            <pre><code class="language-python">num1 = float(input("Primer número: "))
num2 = float(input("Segundo número: "))
print(f"Suma: {num1 + num2}")
print(f"Resta: {num1 - num2}")
print(f"Multiplicación: {num1 * num2}")
if num2 != 0:
   print(f"División: {num1 / num2}")
else:
   print("No se puede dividir por cero")
if num1 > num2:
   print(f"{num1} es mayor")
elif num2 > num1:
   print(f"{num2} es mayor")
else:
   print("Son iguales")</code></pre>
        </div>`
    },
    {
        title: "Práctica 2.2: Completar Código con Condicionales",
        content: `<h3>Completa el Código</h3>
        <p>Arrastra los comandos disponibles a los huecos correctos.</p>
        <div class="command-list mt-2 mb-2">
            <strong>Comandos disponibles:</strong>
            <div class="command-palette mt-2 flex flex-wrap gap-2" id="command-palette-2">
                <div class="command-item bg-blue-500 text-white px-3 py-1 rounded cursor-move" draggable="true" data-command="float">float</div>
                <div class="command-item bg-blue-500 text-white px-3 py-1 rounded cursor-move" draggable="true" data-command="input">input</div>
                <div class="command-item bg-blue-500 text-white px-3 py-1 rounded cursor-move" draggable="true" data-command="print">print</div>
                <div class="command-item bg-blue-500 text-white px-3 py-1 rounded cursor-move" draggable="true" data-command="f">f</div>
                <div class="command-item bg-blue-500 text-white px-3 py-1 rounded cursor-move" draggable="true" data-command="if">if</div>
                <div class="command-item bg-blue-500 text-white px-3 py-1 rounded cursor-move" draggable="true" data-command="elif">elif</div>
                <div class="command-item bg-blue-500 text-white px-3 py-1 rounded cursor-move" draggable="true" data-command="else">else</div>
            </div>
            <div class="command-counter mt-1">
                <span id="command-counter-fill-2">Completados: 0/14</span>
            </div>
        </div>
        <div class="code-block rounded-lg overflow-hidden mt-4"><div class="code-block-header px-4 py-2 flex items-center gap-2"><span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span></div><pre class="p-4"><code class="language-python">num1 = <span class="drop-zone border-2 border-dashed border-gray-400 p-1 rounded" data-fill="5"></span>(<span class="drop-zone border-2 border-dashed border-gray-400 p-1 rounded" data-fill="6"></span>("Primer número: "))
num2 = <span class="drop-zone border-2 border-dashed border-gray-400 p-1 rounded" data-fill="7"></span>(<span class="drop-zone border-2 border-dashed border-gray-400 p-1 rounded" data-fill="8"></span>("Segundo número: "))
print(<span class="drop-zone border-2 border-dashed border-gray-400 p-1 rounded" data-fill="9"></span>("Suma: {num1 + num2}"))
print(<span class="drop-zone border-2 border-dashed border-gray-400 p-1 rounded" data-fill="10"></span>("Resta: {num1 - num2}"))
print(<span class="drop-zone border-2 border-dashed border-gray-400 p-1 rounded" data-fill="11"></span>("Multiplicación: {num1 * num2}"))
<span class="drop-zone border-2 border-dashed border-gray-400 p-1 rounded" data-fill="12"></span> num2 != 0:
   print(<span class="drop-zone border-2 border-dashed border-gray-400 p-1 rounded" data-fill="13"></span>("División: {num1 / num2}"))
<span class="drop-zone border-2 border-dashed border-gray-400 p-1 rounded" data-fill="14"></span>:
   print("No se puede dividir por cero")
<span class="drop-zone border-2 border-dashed border-gray-400 p-1 rounded" data-fill="15"></span> num1 > num2:
   print(<span class="drop-zone border-2 border-dashed border-gray-400 p-1 rounded" data-fill="16"></span>("{num1} es mayor"))
<span class="drop-zone border-2 border-dashed border-gray-400 p-1 rounded" data-fill="17"></span> num2 > num1:
   print(<span class="drop-zone border-2 border-dashed border-gray-400 p-1 rounded" data-fill="18"></span>("{num2} es mayor"))
<span class="drop-zone border-2 border-dashed border-gray-400 p-1 rounded" data-fill="19"></span>:
   print("Son iguales")</code></pre></div>
        <div class="mt-4">
            
            <button id="reset-fill-2" class="btn-primary ml-2">Reiniciar</button>
        </div>
        <div id="fill-feedback-2" class="mt-2"></div>`
    },
    {
        title: "Práctica 3: Bucles",
        content: `<h3>Ejercicios con Repetición</h3>
        <p>Crea un programa que:</p>
        <ol>
        <li>Pida un número al usuario</li>
        <li>Muestre la tabla de multiplicar de ese número (del 1 al 10)</li>
        <li>Use un bucle for</li>
        </ol>
        <div class="code-block rounded-lg overflow-hidden mt-4"><div class="code-block-header px-4 py-2 flex items-center gap-2"><span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span></div><pre class="p-4"><code class="language-python"># Tu código aquí
numero = int(input("Ingresa un número: "))
for i in range(1, 11):
    print(f"{numero} x {i} = {numero * i}")</code></pre></div>`
    },
    {
        title: "Práctica 4: Listas y Funciones",
        content: `<h3>Ejercicios con Colecciones</h3>
        <p>Crea funciones que:</p>
        <ol>
        <li>Reciba una lista de números</li>
        <li>Devuelva el promedio</li>
        <li>Encuentre el número mayor</li>
        </ol>
        <div class="code-block rounded-lg overflow-hidden mt-4"><div class="code-block-header px-4 py-2 flex items-center gap-2"><span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span></div><pre class="p-4"><code class="language-python"># Tu código aquí
def calcular_promedio(numeros):
    return sum(numeros) / len(numeros)

def encontrar_mayor(numeros):
    return max(numeros)

# Prueba las funciones
lista = [10, 20, 30, 40, 50]
print(f"Promedio: {calcular_promedio(lista)}")
print(f"Mayor: {encontrar_mayor(lista)}")</code></pre></div>`
    },
    {
        title: "Práctica 5: Proyecto Final",
        content: `<h3>Aplicación Completa</h3>
        <p>Crea un programa que:</p>
        <ol>
        <li>Sea un sistema de gestión de estudiantes</li>
        <li>Permita agregar estudiantes con nombre y calificaciones</li>
        <li>Muestre el promedio de cada estudiante</li>
        <li>Liste todos los estudiantes ordenados por promedio</li>
        </ol>
        <div class="code-block rounded-lg overflow-hidden mt-4"><div class="code-block-header px-4 py-2 flex items-center gap-2"><span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span></div><pre class="p-4"><code class="language-python"># Tu código aquí
estudiantes = []

def agregar_estudiante():
    nombre = input("Nombre del estudiante: ")
    calificaciones = []
    for i in range(3):
        calif = float(input(f"Calificación {i+1}: "))
        calificaciones.append(calif)
    estudiantes.append({"nombre": nombre, "calificaciones": calificaciones})

def calcular_promedio(calificaciones):
    return sum(calificaciones) / len(calificaciones)

# Agregar algunos estudiantes
for _ in range(2):
    agregar_estudiante()

# Mostrar resultados
for estudiante in estudiantes:
    prom = calcular_promedio(estudiante["calificaciones"])
    print(f"{estudiante['nombre']}: {prom:.2f}")

# Ordenar por promedio
estudiantes.sort(key=lambda x: calcular_promedio(x["calificaciones"]), reverse=True)
print("\\nOrdenados por promedio:")
for estudiante in estudiantes:
    prom = calcular_promedio(estudiante["calificaciones"])
    print(f"{estudiante['nombre']}: {prom:.2f}")</code></pre></div>`
    }
];

const courseData = [
    { // Nivel 1 - REVISADO
        title: "Los Cimientos de la Web",
        lesson: [
            {
                title: "¿Qué es HTML?",
                content: `
                    <p>HTML son las siglas de <strong>HyperText Markup Language</strong> (Lenguaje de Marcado de Hipertexto). No es un lenguaje de programación, sino un <strong>lenguaje de marcado</strong>. Su única función es darle estructura y significado al contenido de una página web.</p>
                    <p>Piensa en HTML como el esqueleto de un cuerpo humano. Define dónde va la cabeza (título), el cuerpo (contenido principal), los brazos y las piernas (secciones), pero no define su apariencia (colores, fuentes) ni su comportamiento (interactividad). De eso se encargan CSS y JavaScript.</p>
                `
            },
            {
                title: "Etiquetas y Elementos",
                content: `
                    <p>HTML funciona mediante <strong>etiquetas</strong> (tags). La mayoría vienen en pares: una etiqueta de apertura y una de cierre. Por ejemplo, <code>&lt;p&gt;</code> abre un párrafo y <code>&lt;/p&gt;</code> lo cierra.</p>
                    <p>El conjunto de la etiqueta de apertura, el contenido y la etiqueta de cierre se llama un <strong>elemento HTML</strong>.</p>
                    <div class="code-block"><pre><code class="language-html">&lt;p&gt;Este es el contenido de un elemento de párrafo.&lt;/p&gt;</code></pre></div>
                    <p class="mt-4">Algunas etiquetas, como las de imágenes <code>&lt;img&gt;</code> o saltos de línea <code>&lt;br&gt;</code>, no necesitan cerrarse y se conocen como <strong>etiquetas de autocierre</strong>.</p>
                `
            },
            {
                title: "La Estructura Básica",
                content: `
                    <p>Toda página HTML tiene una estructura fundamental. ¡Vamos a analizarla línea por línea!</p>
                    <div class="code-block"><pre><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;
    &lt;title&gt;Mi Primera Página&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;¡Hola Mundo!&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre></div>
                    <ul class="mt-4 list-disc pl-5">
                        <li><code>&lt;!DOCTYPE html&gt;</code>: Es la primera línea, una instrucción que le dice al navegador que el documento es de tipo HTML5 (la versión moderna de HTML).</li>
                        <li><code>&lt;html&gt;</code>: Es la etiqueta raíz que envuelve todo el contenido de la página. El atributo <code>lang="es"</code> le dice al navegador que el contenido principal está en español.</li>
                        <li><code>&lt;head&gt;</code>: Contiene "metadatos", que es información <strong>para el navegador</strong>. No es visible en la página. Aquí va el título que aparece en la pestaña del navegador (<code>&lt;title&gt;</code>), enlaces a archivos CSS y más.</li>
                        <li><code>&lt;body&gt;</code>: ¡Aquí va la acción! Todo el contenido <strong>visible</strong> para el usuario (textos, imágenes, videos) se coloca dentro de esta etiqueta.</li>
                    </ul>
                `
            },
            {
                title: "Atributos: Más Información para las Etiquetas",
                content: `
                    <p>Los atributos proporcionan información adicional a los elementos. Se escriben dentro de la etiqueta de apertura.</p>
                    <p>Ya viste el atributo <code>lang</code>. Otro muy común es <code>href</code> (Hypertext Reference) en la etiqueta de enlace <code>&lt;a&gt;</code>, que especifica la URL a la que quieres que vaya el enlace.</p>
                    <div class="code-block"><pre><code class="language-html">&lt;!-- Este enlace lleva a Google --&gt;
&lt;a href="https://www.google.com"&gt;Ir a Google&lt;/a&gt;</code></pre></div>
                    <p class="mt-4">O el atributo <code>src</code> (source) en una etiqueta de imagen, que indica la ubicación del archivo de la imagen.</p>
                    <div class="code-block"><pre><code class="language-html">&lt;img src="logo.png" alt="Logo de mi empresa"&gt;</code></pre></div>
                    <p class="mt-2">El atributo <code>alt</code> es muy importante: proporciona un texto alternativo si la imagen no se puede cargar y ayuda a la accesibilidad para personas con discapacidad visual.</p>
                `
            },
            {
                title: "Comentarios en HTML",
                content: `
                    <p>Puedes dejar notas en tu código que el navegador ignorará. Son útiles para explicar partes de tu código a otros desarrolladores o a tu "yo" del futuro.</p>
                    <div class="code-block"><pre><code class="language-html">&lt;!-- Esto es un comentario. El navegador no lo mostrará. --&gt;
&lt;p&gt;Esto sí es visible.&lt;/p&gt;
&lt;!-- &lt;p&gt;Este párrafo no aparecerá porque está comentado.&lt;/p&gt; --&gt;</code></pre></div>
                `
            },

            {
                title: "¡Listo para el Quiz!",
                content: "<p>Has aprendido la estructura fundamental de una página web, qué son los elementos, las etiquetas y los atributos. ¡Ahora, a demostrar lo que sabes!</p>"
            }
        ],
        quiz: [
            { question: "¿Qué significa HTML?", options: ["HyperText Markup Language", "High-Level Textual Machine Language", "Hyperlink and Text Management Language", "Home Tool Markup Language"], answer: "HyperText Markup Language" },
            { question: "¿Cuál es el propósito de la etiqueta <body>?", options: ["Contener información para el navegador", "Contener todo el contenido visible de la página", "Definir el idioma del documento", "Enlazar a hojas de estilo"], answer: "Contener todo el contenido visible de la página" },
            { question: "¿Qué tipo de lenguaje es HTML?", options: ["De programación", "De estilos", "De marcado", "De bases de datos"], answer: "De marcado" },
            { question: "¿Cómo se llama el conjunto de una etiqueta de apertura, contenido y etiqueta de cierre?", options: ["Un atributo", "Una declaración", "Un elemento HTML", "Un comentario"], answer: "Un elemento HTML" },
            { question: "¿Cuál de las siguientes es una etiqueta de autocierre?", options: ["<p>", "<div>", "<h1>", "<br>"], answer: "<br>" },
            { question: "La declaración <!DOCTYPE html> le dice al navegador que la página está escrita en...", options: ["HTML4", "XML", "HTML5", "JavaScript"], answer: "HTML5" },
            { question: "¿Dónde se coloca la información para el navegador, como el título de la página?", options: ["En la etiqueta <body>", "En la etiqueta <head>", "Justo después del DOCTYPE", "Al final del archivo"], answer: "En la etiqueta <head>" },
            { question: "¿Para qué sirve el atributo 'href' en una etiqueta <a>?", options: ["Para cambiar el color del texto", "Para especificar la URL de destino del enlace", "Para definir el tamaño del enlace", "Para añadir un comentario"], answer: "Para especificar la URL de destino del enlace" },
            { question: "¿Cómo se escribe un comentario en HTML?", options: ["// Esto es un comentario", "/* Esto es un comentario */", "<!-- Esto es un comentario -->", "# Esto es un comentario"], answer: "<!-- Esto es un comentario -->" },
            { question: "¿Qué atributo proporciona texto alternativo para las imágenes?", options: ["src", "href", "title", "alt"], answer: "alt" }
        ]
    },
    { // Nivel 2 - REVISADO
        title: "Contenido Esencial en HTML",
        lesson: [
            {
                title: "Jerarquía de Títulos",
                content: `
                    <p>Los títulos (headings) organizan el contenido y establecen una jerarquía. Van desde <code>&lt;h1&gt;</code> (el más importante) hasta <code>&lt;h6&gt;</code> (el menos importante).</p>
                    <p><strong>Regla de oro:</strong> Debería haber solo un <code>&lt;h1&gt;</code> por página, que usualmente corresponde al título principal. No uses los títulos solo para cambiar el tamaño del texto; su propósito es dar estructura semántica al documento.</p>
                    <div class="code-block"><pre><code class="language-html">&lt;h1&gt;El Sistema Solar&lt;/h1&gt;
&lt;p&gt;Una introducción a nuestro vecindario cósmico.&lt;/p&gt;
&lt;h2&gt;Planetas Interiores&lt;/h2&gt;
&lt;h3&gt;La Tierra&lt;/h3&gt;
&lt;h2&gt;Planetas Exteriores&lt;/h2&gt;
&lt;h3&gt;Júpiter&lt;/h3&gt;</code></pre></div>
                `
            },
            {
                title: "Párrafos y Saltos de Línea",
                content: `
                    <p>La etiqueta <code>&lt;p&gt;</code> se usa para agrupar texto en párrafos. El navegador añade automáticamente un espacio entre ellos.</p>
                    <p>HTML ignora los saltos de línea que haces en tu editor de código. Si necesitas forzar un salto de línea sin crear un nuevo párrafo, usa la etiqueta de autocierre <code>&lt;br&gt;</code>.</p>
                    <div class="code-block"><pre><code class="language-html">&lt;p&gt;Este es el primer párrafo.&lt;/p&gt;
&lt;p&gt;Este es el segundo. Forzamos una línea aquí.&lt;br&gt;Y esta es la línea nueva.&lt;/p&gt;</code></pre></div>
                `
            },
            {
                title: "Listas: Ordenadas y Desordenadas",
                content: `
                    <p>Las listas son fundamentales para organizar información. Hay dos tipos principales:</p>
                    <ul class="list-disc pl-5">
                        <li><strong>Listas Desordenadas <code>&lt;ul&gt;</code>:</strong> Para items donde el orden no importa. Se muestran con viñetas.</li>
                        <li><strong>Listas Ordenadas <code>&lt;ol&gt;</code>:</strong> Para items donde el orden sí importa, como pasos en una receta. Se muestran numeradas.</li>
                    </ul>
                    <p>En ambos casos, cada item de la lista se define con la etiqueta <code>&lt;li&gt;</code> (list item).</p>
                     <div class="code-block"><pre><code class="language-html">&lt;h4&gt;Lista de la compra (desordenada):&lt;/h4&gt;
&lt;ul&gt;
    &lt;li&gt;Leche&lt;/li&gt;
    &lt;li&gt;Pan&lt;/li&gt;
&lt;/ul&gt;

&lt;h4&gt;Pasos para hacer café (ordenada):&lt;/h4&gt;
&lt;ol&gt;
    &lt;li&gt;Hervir agua&lt;/li&gt;
    &lt;li&gt;Añadir café&lt;/li&gt;
    &lt;li&gt;Servir en una taza&lt;/li&gt;
&lt;/ol&gt;</code></pre></div>
                `
            },
            {
                title: "Dando Énfasis al Texto",
                content: `
                    <p>A veces quieres resaltar ciertas palabras. HTML ofrece etiquetas semánticas para esto:</p>
                    <ul class="list-disc pl-5">
                        <li><code>&lt;strong&gt;</code>: Indica que el texto tiene una <strong>gran importancia</strong>. Los navegadores lo muestran en negrita.</li>
                        <li><code>&lt;em&gt;</code> (emphasis): Pone <em>énfasis</em> en una palabra o frase. Se suele mostrar en cursiva.</li>
                    </ul>
                    <p>Aunque existen las etiquetas <code>&lt;b&gt;</code> (bold) y <code>&lt;i&gt;</code> (italic) que logran el mismo efecto visual, se prefieren <code>&lt;strong&gt;</code> y <code>&lt;em&gt;</code> porque añaden significado semántico, lo cual es mejor para la accesibilidad y los motores de búsqueda.</p>
                `
            },
            {
                title: "Entidades HTML: Caracteres Especiales",
                content: `
                    <p>¿Qué pasa si quieres mostrar una etiqueta HTML como texto en tu página? No puedes escribir <code>&lt;p&gt;</code> directamente, porque el navegador lo interpretaría como una etiqueta real.</p>
                    <p>Para esto, usamos <strong>entidades HTML</strong>. Son códigos especiales para representar caracteres reservados.</p>
                    <ul class="list-disc pl-5">
                        <li>Para mostrar <code>&lt;</code>, escribes <code>&amp;lt;</code> (less than).</li>
                        <li>Para mostrar <code>&gt;</code>, escribes <code>&amp;gt;</code> (greater than).</li>
                        <li>Para mostrar <code>&amp;</code>, escribes <code>&amp;amp;</code> (ampersand).</li>
                    </ul>
                    <div class="code-block"><pre><code class="language-html">&lt;!-- Esto mostrará: El tag &lt;p&gt; se usa para párrafos. --&gt;
&lt;p&gt;El tag &amp;lt;p&amp;gt; se usa para párrafos.&lt;/p&gt;</code></pre></div>
                `
            },
            {
                title: "¡Listo para el Quiz!",
                content: "<p>Ahora puedes estructurar texto con títulos, párrafos y listas, y hasta sabes cómo mostrar caracteres especiales. ¡A por el quiz!</p>"
            }
        ],
        quiz: [
            { question: "¿Qué etiqueta usarías para el título más importante de la página?", options: ["<h6>", "<h1>", "<h2>", "<head>"], answer: "<h1>" },
            { question: "Si quieres hacer una lista de ingredientes para una receta (el orden no importa), ¿qué etiqueta usarías?", options: ["<ol>", "<li>", "<ul>", "<dl>"], answer: "<ul>" },
            { question: "Para crear los items dentro de una lista, ya sea ordenada o desordenada, usas la etiqueta...", options: ["<item>", "<li>", "<ol>", "<ul>"], answer: "<li>" },
            { question: "¿Qué etiqueta fuerza un salto de línea dentro de un párrafo?", options: ["<p>", "<br>", "<hr>", "<break>"], answer: "<br>" },
            { question: "Para dar un énfasis fuerte y semántico a un texto (visualmente negrita), ¿cuál es la etiqueta preferida?", options: ["<b>", "<bold>", "<strong>", "<em>"], answer: "<strong>" },
            { question: "¿Cómo mostrarías el carácter '<' en una página web sin que el navegador lo interprete?", options: ["<", "&lt;", "&less;", "&lcarr;"], answer: "&lt;" },
            { question: "Es una buena práctica tener más de un <h1> en una misma página.", options: ["Verdadero", "Falso"], answer: "Falso" },
            { question: "La etiqueta <em> se usa para...", options: ["Mostrar texto muy importante", "Poner énfasis en un texto (visualmente cursiva)", "Crear un error en el texto", "Marcar texto eliminado"], answer: "Poner énfasis en un texto (visualmente cursiva)" },
            { question: "Las etiquetas <ul> y <ol> necesitan etiquetas ______ en su interior.", options: ["<p>", "<li>", "<a>", "<span>"], answer: "<li>" },
            { question: "¿Qué sucede si pones muchos espacios o saltos de línea en tu editor de código HTML?", options: ["Se genera un error", "Se muestran todos en la página", "HTML los ignora y los colapsa en un solo espacio", "Se convierten en <br> automáticamente"], answer: "HTML los ignora y los colapsa en un solo espacio" }
        ]
    },
    { // Nivel 3 - REVISADO
        title: "Contenedores y Semántica",
        lesson: [
            {
                title: "<div> y <span>: Contenedores Genéricos",
                content: `
                    <p>A veces necesitas agrupar elementos para aplicarles estilos o para organización. Para eso existen los contenedores genéricos:</p>
                    <ul class="list-disc pl-5">
                        <li><code>&lt;div&gt;</code> (división): Es un contenedor de <strong>bloque</strong>. Ocupa todo el ancho disponible y siempre empieza en una nueva línea. Es ideal para agrupar grandes secciones de contenido, como una barra lateral o una tarjeta de producto.</li>
                        <li><code>&lt;span&gt;</code>: Es un contenedor de <strong>línea</strong>. Solo ocupa el espacio necesario para su contenido y no empieza en una nueva línea. Es perfecto para agrupar pequeñas partes de texto dentro de un párrafo para, por ejemplo, cambiarles el color.</li>
                    </ul>
                    <div class="code-block"><pre><code class="language-html">&lt;div style="background-color: lightgray;"&gt;
  &lt;h2&gt;Sección de Noticias&lt;/h2&gt;
  &lt;p&gt;Esta es una noticia &lt;span style="color: red;"&gt;urgente&lt;/span&gt;.&lt;/p&gt;
&lt;/div&gt;</code></pre></div>
                `
            },
            {
                title: "HTML Semántico: Estructura con Significado",
                content: `
                    <p>En lugar de usar <code>&lt;div&gt;</code> para todo, HTML5 introdujo etiquetas semánticas que describen su contenido. Esto es genial para la accesibilidad (lectores de pantalla) y para SEO (motores de búsqueda).</p>
                    <p>Imagina la estructura de una página web típica:</p>
                    <div class="code-block"><pre><code class="language-html">&lt;header&gt;
  &lt;h1&gt;Logo y Título de la Web&lt;/h1&gt;
  &lt;nav&gt;
    &lt;!-- Menú de navegación principal --&gt;
  &lt;/nav&gt;
&lt;/header&gt;

&lt;main&gt;
  &lt;h2&gt;Contenido Principal de la Página&lt;/h2&gt;
  &lt;article&gt;
    &lt;h3&gt;Un post del blog&lt;/h3&gt;
  &lt;/article&gt;
  &lt;section&gt;
    &lt;h3&gt;Otra sección de contenido&lt;/h3&gt;
  &lt;/section&gt;
&lt;/main&gt;

&lt;aside&gt;
  &lt;h3&gt;Barra lateral (anuncios, enlaces)&lt;/h3&gt;
&lt;/aside&gt;

&lt;footer&gt;
  &lt;p&gt;Copyright y enlaces de contacto.&lt;/p&gt;
&lt;/footer&gt;</code></pre></div>
                `
            },
            {
                title: "Explicación de Etiquetas Semánticas",
                content: `
                    <ul class="list-disc pl-5">
                        <li><code>&lt;header&gt;</code>: Contiene la cabecera de una página o sección. Usualmente tiene el logo, el título y la navegación.</li>
                        <li><code>&lt;nav&gt;</code>: Para el menú de navegación principal.</li>
                        <li><code>&lt;main&gt;</code>: Debe contener el contenido <strong>principal y único</strong> de la página. Solo debe haber uno por página.</li>
                        <li><code>&lt;article&gt;</code>: Para contenido independiente y auto-contenido, como un post de un blog, un artículo de periódico o un comentario de un foro.</li>
                        <li><code>&lt;section&gt;</code>: Agrupa contenido temáticamente relacionado. Es una sección genérica, pero con más significado que un <code>&lt;div&gt;</code>.</li>
                        <li><code>&lt;aside&gt;</code>: Para contenido relacionado tangencialmente, como una barra lateral (sidebar).</li>
                        <li><code>&lt;footer&gt;</code>: Para el pie de página. Contiene información de autor, copyright, etc.</li>
                    </ul>
                `
            },
            {
                title: "Anidando Enlaces",
                content: `
                    <p>Una pregunta común es si se pueden poner enlaces dentro de otros enlaces. La respuesta simple es <strong>no</strong>. Anidar etiquetas <code>&lt;a&gt;</code> no es válido en HTML y los navegadores se comportarán de forma impredecible.</p>
                    <div class="code-block"><pre><code class="language-html">&lt;!-- ❌ INCORRECTO --&gt;
&lt;a href="#"&gt;Enlace exterior &lt;a href="#"&gt;enlace interior&lt;/a&gt;&lt;/a&gt;

&lt;!-- ✅ CORRECTO --&gt;
&lt;a href="#"&gt;Primer enlace&lt;/a&gt; | &lt;a href="#"&gt;Segundo enlace&lt;/a&gt;</code></pre></div>
                    <p>Si quieres que un bloque entero sea clickeable, puedes poner un <code>&lt;div&gt;</code> u otro elemento dentro de un <code>&lt;a&gt;</code> (esto es válido en HTML5), pero nunca otro <code>&lt;a&gt;</code>.</p>
                `
            },
            {
                title: "¡Listo para el Quiz!",
                content: "<p>Has aprendido a estructurar tus páginas de forma profesional con contenedores y etiquetas semánticas. ¡Demuestra que lo dominas!</p>"
            }
        ],
        quiz: [
            { question: "¿Qué etiqueta usarías para la cabecera principal de tu sitio web, que contiene el logo y el menú?", options: ["<head>", "<main>", "<header>", "<section>"], answer: "<header>" },
            { question: "¿Cuál es la principal diferencia entre <div> y <span>?", options: ["<div> es para imágenes y <span> para texto", "<div> es un elemento de bloque y <span> de línea", "<div> no puede tener estilos y <span> sí", "<div> es semántico y <span> no"], answer: "<div> es un elemento de bloque y <span> de línea" },
            { question: "El contenido principal y único de una página debe ir dentro de la etiqueta...", options: ["<article>", "<section>", "<main>", "<header>"], answer: "<main>" },
            { question: "Para un post de un blog que podría existir de forma independiente, ¿qué etiqueta semántica es la más apropiada?", options: ["<section>", "<article>", "<div>", "<main>"], answer: "<article>" },
            { question: "La etiqueta <nav> se usa típicamente para...", options: ["Navegar a la siguiente página", "Contener el menú de navegación principal", "Crear un nuevo artículo", "Definir una nota al pie"], answer: "Contener el menú de navegación principal" },
            { question: "Una barra lateral con contenido relacionado pero no esencial (como anuncios) iría dentro de...", options: ["<section>", "<aside>", "<div>", "<footer>"], answer: "<aside>" },
            { question: "El pie de página, con información de copyright y contacto, se define con la etiqueta...", options: ["<bottom>", "<end>", "<footer>", "<main>"], answer: "<footer>" },
            { question: "¿Es una práctica válida anidar una etiqueta <a> dentro de otra etiqueta <a>?", options: ["Sí, siempre", "No, nunca es válido", "Solo si tienen diferentes atributos href", "Sí, pero solo en el <footer>"], answer: "No, nunca es válido" },
            { question: "¿Cuál de estas etiquetas es un elemento de línea?", options: ["<div>", "<h1>", "<p>", "<span>"], answer: "<span>" },
            { question: "¿Por qué es importante usar HTML semántico?", options: ["Hace que la página se cargue más rápido", "Es la única forma de usar CSS", "Mejora la accesibilidad y el SEO", "Añade colores automáticamente"], answer: "Mejora la accesibilidad y el SEO" }
        ]
    },
    { // Nivel 4 - REVISADO
        title: "Introducción a CSS",
        lesson: [
            {
                title: "¿Qué es CSS?",
                content: `
                    <p>CSS son las siglas de <strong>Cascading Style Sheets</strong> (Hojas de Estilo en Cascada). Es el lenguaje que usamos para dar estilo y diseño a nuestras páginas HTML. Si HTML es el esqueleto, CSS es la ropa, el peinado y el maquillaje.</p>
                    <p>Con CSS controlamos colores, fuentes, tamaños, márgenes, posicionamiento y mucho más.</p>
                `
            },
            {
                title: "Sintaxis de una Regla CSS",
                content: `
                    <p>Una regla CSS tiene dos partes principales: un <strong>selector</strong> y un <strong>bloque de declaración</strong>.</p>
                    <div class="code-block"><pre><code class="language-css">/* h1 es el selector */
h1 { 
    /* color: blue; es una declaración */
    color: blue; 
    font-size: 24px;
}</code></pre></div>
                    <ul class="list-disc pl-5 mt-4">
                        <li>El <strong>selector</strong> apunta al elemento HTML que quieres estilizar (ej. <code>h1</code>, <code>p</code>, <code>.mi-clase</code>).</li>
                        <li>El <strong>bloque de declaración</strong> va entre llaves <code>{ }</code> y contiene una o más declaraciones separadas por punto y coma.</li>
                        <li>Cada <strong>declaración</strong> consiste en una <strong>propiedad</strong> (ej. <code>color</code>) y un <strong>valor</strong> (ej. <code>blue</code>), separados por dos puntos.</li>
                    </ul>
                `
            },
            {
                title: "Tres Formas de Añadir CSS",
                content: `
                    <p>Puedes añadir CSS a tu HTML de tres maneras:</p>
                    <ol class="list-decimal pl-5">
                        <li><strong>CSS Externo (Recomendado):</strong> Creas un archivo <code>.css</code> separado y lo enlazas en el <code>&lt;head&gt;</code> de tu HTML. Esto es ideal para mantener el código organizado.
                            <div class="code-block"><pre><code class="language-html">&lt;head&gt;
  &lt;link rel="stylesheet" href="styles.css"&gt;
&lt;/head&gt;</code></pre></div>
                        </li>
                        <li><strong>CSS Interno:</strong> Escribes el CSS dentro de una etiqueta <code>&lt;style&gt;</code> en el <code>&lt;head&gt;</code> del HTML. Útil para estilos de una sola página.
                            <div class="code-block"><pre><code class="language-html">&lt;head&gt;
  &lt;style&gt;
    body { background-color: #f0f0f0; }
  &lt;/style&gt;
&lt;/head&gt;</code></pre></div>
                        </li>
                        <li><strong>CSS en Línea:</strong> Aplicas estilos directamente a un elemento usando el atributo <code>style</code>. Debe usarse con moderación, ya que es difícil de mantener.
                            <div class="code-block"><pre><code class="language-html">&lt;p style="color: red;"&gt;Este texto es rojo.&lt;/p&gt;</code></pre></div>
                        </li>
                    </ol>
                `
            },
            {
                title: "Selectores Básicos: Etiqueta, Clase e ID",
                content: `
                    <p>Los selectores son la clave para conectar CSS con HTML.</p>
                    <ul class="list-disc pl-5">
                        <li><strong>Selector de Etiqueta:</strong> Selecciona todos los elementos de un tipo. (<code>p { ... }</code>)</li>
                        <li><strong>Selector de Clase:</strong> Selecciona todos los elementos que tienen un atributo <code>class</code> específico. Se usa un punto <code>.</code> antes del nombre de la clase en CSS. Es reutilizable. (<code>.importante { ... }</code>)</li>
                        <li><strong>Selector de ID:</strong> Selecciona <strong>un único elemento</strong> con un atributo <code>id</code> específico. Se usa una almohadilla <code>#</code>. Un ID debe ser único en toda la página. (<code>#titulo-principal { ... }</code>)</li>
                    </ul>
                     <div class="code-block"><pre><code class="language-html">&lt;h1 id="titulo-principal"&gt;Título&lt;/h1&gt;
&lt;p class="importante"&gt;Párrafo importante.&lt;/p&gt;
&lt;p&gt;Otro párrafo.&lt;/p&gt;</code></pre></div>
                     <div class="code-block mt-2"><pre><code class="language-css">/* Selector de ID */
#titulo-principal { color: navy; }

/* Selector de Clase */
.importante { font-weight: bold; }

/* Selector de Etiqueta */
p { color: gray; }</code></pre></div>
                `
            },
            {
                title: "El Significado de 'Cascada'",
                content: `
                    <p>La "C" en CSS significa "Cascading" (en Cascada). Este es un concepto fundamental que define cómo se resuelven los conflictos cuando múltiples reglas CSS apuntan al mismo elemento.</p>
                    <p>La cascada sigue un orden de prioridad:</p>
                    <ol class="list-decimal pl-5">
                        <li><strong>Importancia:</strong> Una regla con <code>!important</code> casi siempre gana (¡pero úsalo con mucho cuidado!).</li>
                        <li><strong>Especificidad:</strong> Reglas más específicas tienen más peso. Un selector de ID (<code>#id</code>) es más específico que un selector de clase (<code>.clase</code>), que a su vez es más específico que un selector de etiqueta (<code>p</code>).</li>
                        <li><strong>Orden de Fuente:</strong> Si la especificidad es la misma, la regla que aparece más tarde en el código (o en el último archivo CSS importado) es la que se aplica.</li>
                    </ol>
                `
            },
            {
                title: "¡Listo para el Quiz!",
                content: "<p>Ya conoces los fundamentos de CSS, cómo añadirlo a tu web y cómo funcionan los selectores y la cascada. ¡Vamos a probarlo!</p>"
            }
        ],
        quiz: [
            { question: "¿Qué significa CSS?", options: ["Creative Style System", "Cascading Style Sheets", "Computer Styling Syntax", "Colorful Style Sheets"], answer: "Cascading Style Sheets" },
            { question: "¿Qué parte de una regla CSS apunta al elemento HTML que se va a estilizar?", options: ["La propiedad", "El valor", "El selector", "La declaración"], answer: "El selector" },
            { question: "¿Qué símbolo se usa en CSS para seleccionar elementos por su CLASE?", options: ["# (Almohadilla)", ". (Punto)", "* (Asterisco)", "& (Ampersand)"], answer: ". (Punto)" },
            { question: "¿Y qué símbolo se usa para seleccionar un elemento por su ID?", options: ["# (Almohadilla)", ". (Punto)", "!", "$"], answer: "# (Almohadilla)" },
            { question: "¿Cuál es la forma RECOMENDADA de añadir CSS a un sitio web con múltiples páginas?", options: ["CSS en línea (atributo style)", "CSS interno (<style>)", "CSS externo (archivo .css enlazado)", "Usando JavaScript"], answer: "CSS externo (archivo .css enlazado)" },
            { question: "En la 'cascada' de CSS, ¿qué criterio tiene, por lo general, la máxima prioridad?", options: ["El orden en el archivo", "La especificidad del selector", "El color de la regla", "Una regla marcada con !important"], answer: "Una regla marcada con !important" },
            { question: "¿Cuál de estos selectores es MÁS específico?", options: ["p", ".texto", "#principal"], answer: "#principal" },
            { question: "En la declaración `color: blue;`, `color` es...", options: ["El selector", "La propiedad", "El valor", "La clase"], answer: "La propiedad" },
            { question: "Si dos reglas CSS tienen la misma especificidad, ¿cuál se aplica?", options: ["La primera que aparece en el código", "La última que aparece en el código", "Ninguna de las dos", "La que tenga un color más oscuro"], answer: "La última que aparece en el código" },
            { question: "La etiqueta <link rel=\"stylesheet\"> para enlazar un CSS externo se coloca dentro de...", options: ["<body>", "<header>", "<footer>", "<head>"], answer: "<head>" }
        ]
    },
    { // Nivel 5 - REVISADO
        title: "El Modelo de Caja en CSS",
        lesson: [
            {
                title: "Todo es una Caja",
                content: `
                    <p>El concepto más importante del diseño en CSS es el <strong>Modelo de Caja (Box Model)</strong>. Cada elemento HTML que pones en una página es, para el navegador, una caja rectangular. Esta caja se compone de cuatro partes:</p>
                    <ul class="list-disc pl-5">
                        <li><strong>Content (Contenido):</strong> El área donde se muestra tu texto o imágenes.</li>
                        <li><strong>Padding (Relleno):</strong> Un espacio transparente alrededor del contenido, pero dentro de los bordes.</li>
                        <li><strong>Border (Borde):</strong> Una línea que rodea el padding y el contenido.</li>
                        <li><strong>Margin (Margen):</strong> Un espacio transparente fuera del borde, que separa la caja de otras cajas.</li>
                    </ul>
                    <img src="https://i.imgur.com/kE5gSt8.png" alt="Diagrama del Modelo de Caja de CSS" style="max-width: 100%; border-radius: 8px; margin-top: 1rem;">
                `
            },
            {
                title: "Propiedades del Modelo de Caja",
                content: `
                    <p>Puedes controlar cada parte de la caja con propiedades CSS:</p>
                    <div class="code-block"><pre><code class="language-css">.mi-caja {
    /* Dimensiones del CONTENIDO */
    width: 300px;
    height: 150px;

    /* PADDING de 10px en todos los lados */
    padding: 10px; 
    /* Equivalente a:
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    */

    /* BORDER de 2px, sólido y de color negro */
    border: 2px solid black;

    /* MARGIN de 20px en todos los lados */
    margin: 20px;
}</code></pre></div>
                    <p class="mt-4">Puedes especificar los valores para cada lado (top, right, bottom, left) de forma individual, o usar la notación abreviada (shorthand).</p>
                `
            },
            {
                title: "box-sizing: border-box",
                content: `
                    <p>Por defecto, cuando defines un <code>width</code> y un <code>height</code>, estos solo se aplican al área del <strong>contenido</strong>. El padding y el border se añaden por fuera, haciendo que la caja sea más grande de lo que esperabas. Esto puede ser muy confuso.</p>
                    <p>La solución moderna es usar <code>box-sizing: border-box;</code>. Con esta regla, el <code>width</code> y <code>height</code> que definas incluirán el <strong>contenido, el padding y el borde</strong>. ¡Esto hace que los cálculos de tamaño sean mucho más intuitivos!</p>
                     <div class="code-block"><pre><code class="language-css">/* Un truco muy común es aplicar esto a todos los elementos */
* {
    box-sizing: border-box;
}

.mi-caja {
    width: 300px; /* Ahora 300px es el ancho total de la caja */
    padding: 20px;
    border: 5px solid red;
    /* El área para el contenido se ajustará automáticamente */
}</code></pre></div>
                    <p class="mt-2">El selector universal <code>*</code> selecciona todos los elementos de la página.</p>
                `
            },
            {
                title: "Unidades: Píxeles vs. Unidades Relativas",
                content: `
                    <p>Para definir tamaños, tienes varias unidades a tu disposición:</p>
                    <ul class="list-disc pl-5">
                        <li><strong><code>px</code> (Píxeles):</strong> Una unidad absoluta y fija. Es precisa, pero no se adapta bien a diferentes tamaños de pantalla.</li>
                        <li><strong><code>%</code> (Porcentaje):</strong> Una unidad relativa al tamaño del elemento padre. <code>width: 50%;</code> significa que la caja ocupará la mitad del ancho de su contenedor.</li>
                        <li><strong><code>em</code>:</strong> Una unidad relativa al tamaño de fuente (<code>font-size</code>) del elemento actual. Si <code>font-size</code> es <code>16px</code>, entonces <code>2em</code> son <code>32px</code>.</li>
                        <li><strong><code>rem</code> (root em):</strong> Una unidad relativa al tamaño de fuente del elemento raíz (la etiqueta <code>&lt;html&gt;</code>). Es la unidad relativa más usada y recomendada hoy en día porque proporciona consistencia en toda la página.</li>
                    </ul>
                `
            },
            {
                title: "¡Listo para el Quiz!",
                content: "<p>Dominar el Modelo de Caja es el paso más importante para crear layouts en CSS. Has visto sus partes y cómo controlar tamaños. ¡A por ello!</p>"
            }
        ],
        quiz: [
            { question: "En el Modelo de Caja, ¿qué propiedad define el espacio ENTRE el contenido y el borde?", options: ["margin", "spacing", "padding", "content-gap"], answer: "padding" },
            { question: "¿Y cuál define el espacio FUERA del borde, separando el elemento de otros?", options: ["margin", "spacing", "padding", "border-gap"], answer: "margin" },
            { question: "Si a una caja con `box-sizing: border-box` le pones `width: 100px` y `padding: 10px`, ¿cuál es su ancho total?", options: ["120px", "110px", "100px", "80px"], answer: "100px" },
            { question: "Si a una caja con el `box-sizing` por defecto le pones `width: 100px` y `padding: 10px` a cada lado, ¿cuál es su ancho total?", options: ["120px", "110px", "100px", "80px"], answer: "120px" },
            { question: "¿Qué hace el selector universal `*` en CSS?", options: ["Selecciona solo los elementos importantes", "Multiplica los valores de las propiedades", "Selecciona todos los elementos de la página", "Es un comentario"], answer: "Selecciona todos los elementos de la página" },
            { question: "¿Cuál es la unidad de medida relativa al tamaño de fuente del elemento RAÍZ (<html>)?", options: ["em", "px", "%", "rem"], answer: "rem" },
            { question: "La propiedad `border` es una notación abreviada para...", options: ["border-width, border-style, y border-color", "border-size, border-type, y border-shade", "margin, padding, y content", "width, height, y display"], answer: "border-width, border-style, y border-color" },
            { question: "Si un elemento tiene `font-size: 20px;`, ¿a cuántos píxeles equivale `padding: 2em;`?", options: ["20px", "30px", "40px", "10px"], answer: "40px" },
            { question: "Las cuatro partes del Modelo de Caja, de adentro hacia afuera, son:", options: ["Margin, Border, Padding, Content", "Content, Padding, Border, Margin", "Content, Border, Padding, Margin", "Padding, Content, Margin, Border"], answer: "Content, Padding, Border, Margin" },
            { question: "La propiedad `margin` se usa para...", options: ["Añadir un fondo de color", "Separar un elemento de otros elementos", "Aumentar el tamaño del texto", "Crear un borde punteado"], answer: "Separar un elemento de otros elementos" }
        ]
    },
    { // Nivel 6 - REVISADO
        title: "Introducción a JavaScript",
        lesson: [
            {
                title: "¿Qué es JavaScript?",
                content: `
                    <p>JavaScript (o JS) es un <strong>lenguaje de programación</strong> que da vida a las páginas web. Mientras HTML estructura y CSS decora, JavaScript añade <strong>interactividad</strong>.</p>
                    <p>Con JS puedes:</p>
                    <ul class="list-disc pl-5">
                        <li>Reaccionar a acciones del usuario (clics, movimientos del ratón).</li>
                        <li>Cambiar el contenido de la página dinámicamente sin recargarla.</li>
                        <li>Crear animaciones, validar formularios, cargar datos de servidores y mucho más.</li>
                    </ul>
                    <p>El código JavaScript se ejecuta directamente en el navegador del usuario.</p>
                `
            },
            {
                title: "Añadiendo JavaScript a tu Página",
                content: `
                    <p>Al igual que con CSS, hay varias formas de incluir JS. La más común y recomendada es usar la etiqueta <code>&lt;script&gt;</code> con el atributo <code>src</code> para enlazar un archivo <code>.js</code> externo.</p>
                    <p>Por convención, la etiqueta <code>&lt;script&gt;</code> se suele colocar justo antes del cierre de la etiqueta <code>&lt;/body&gt;</code>. Esto asegura que todo el HTML se haya cargado antes de que el JavaScript intente manipularlo.</p>
                    <div class="code-block"><pre><code class="language-html">&lt;body&gt;
    &lt;!-- Tu contenido HTML va aquí --&gt;
    &lt;h1 id="titulo"&gt;Hola&lt;/h1&gt;

    &lt;script src="mi_script.js"&gt;&lt;/script&gt;
&lt;/body&gt;</code></pre></div>
                `
            },
            {
                title: "Variables: Guardando Información",
                content: `
                    <p>Las variables son como cajas donde guardamos datos. En JavaScript moderno, usamos principalmente dos palabras clave para declararlas:</p>
                    <ul class="list-disc pl-5">
                        <li><code>let</code>: Para variables cuyo valor puede cambiar.</li>
                        <li><code>const</code>: Para constantes, es decir, variables cuyo valor no cambiará una vez asignado.</li>
                    </ul>
                     <div class="code-block"><pre><code class="language-javascript">// Usamos 'let' porque el nombre de usuario puede cambiar
let nombreUsuario = "Ana"; 
nombreUsuario = "Carlos"; // Válido

// Usamos 'const' para un valor que no debería cambiar
const PI = 3.1416;
// PI = 3.14; // Esto daría un error
 
let edad = 25; // Números
let mensaje = "¡Hola, mundo!"; // Cadenas de texto (Strings)
let esMayorDeEdad = true; // Booleanos (true o false)</code></pre></div>
                    <p class="mt-2">También existe <code>var</code>, una forma más antigua de declarar variables, pero se recomienda usar <code>let</code> y <code>const</code>.</p>
                `
            },
            {
                title: "La Consola del Navegador",
                content: `
                    <p>La consola es la mejor amiga de un desarrollador de JavaScript. Es una herramienta en tu navegador (puedes abrirla con F12 o clic derecho -> Inspeccionar -> Consola) donde puedes ver mensajes, errores y probar código.</p>
                    <p>El comando <code>console.log()</code> te permite imprimir cualquier variable o mensaje en la consola para depurar tu código.</p>
                    <div class="code-block"><pre><code class="language-javascript">let saludo = "Bienvenido a JavaScript";
console.log(saludo); // "Bienvenido a JavaScript" aparecerá en la consola

let a = 10;
let b = 20;
console.log(a + b); // 30 aparecerá en la consola</code></pre></div>
                `
            },
            {
                title: "Interactuando con el DOM",
                content: `
                    <p>El DOM (Document Object Model) es la representación de tu HTML que JavaScript puede entender y manipular. JS puede "ver" cada elemento de tu página como un objeto.</p>
                    <p>Para empezar a manipular el DOM, primero necesitamos seleccionar un elemento. El método más común es <code>document.getElementById()</code>.</p>
                    <div class="code-block"><pre><code class="language-javascript">// HTML: &lt;h1 id="titulo"&gt;Título Original&lt;/h1&gt;

// En tu archivo .js:
// 1. Seleccionamos el elemento por su ID y lo guardamos en una variable
const miTitulo = document.getElementById("titulo");

// 2. Manipulamos sus propiedades. Por ejemplo, cambiamos su texto.
miTitulo.textContent = "¡Título Cambiado con JS!";

// 3. O cambiamos su estilo.
miTitulo.style.color = "purple";</code></pre></div>
                    <p class="mt-2"><code>textContent</code> y <code>style</code> son propiedades del objeto <code>miTitulo</code> que representan el contenido de texto y los estilos en línea del elemento <code>&lt;h1&gt;</code>, respectivamente.</p>
                `
            },
            {
                title: "¡Listo para el Quiz!",
                content: "<p>Has dado tus primeros pasos en JavaScript: sabes qué es, cómo incluirlo en tu página, cómo guardar datos en variables y cómo manipular tu primer elemento HTML. ¡Vamos al quiz!</p>"
            }
        ],
        quiz: [
            { question: "¿Para qué se utiliza principalmente JavaScript en el desarrollo web?", options: ["Para estructurar el contenido de la página", "Para dar estilos y colores a la página", "Para añadir interactividad y comportamiento a la página", "Para gestionar bases de datos"], answer: "Para añadir interactividad y comportamiento a la página" },
            { question: "¿Dónde se recomienda colocar la etiqueta &lt;script&gt; para enlazar un archivo JS externo?", options: ["Dentro de la etiqueta &lt;head&gt;", "Justo después de la etiqueta &lt;body&gt;", "Justo antes de cerrar la etiqueta &lt;/body&gt;", "Fuera de la etiqueta &lt;html&gt;"], answer: "Justo antes de cerrar la etiqueta &lt;/body&gt;" },
            { question: "Si necesitas guardar un valor que NUNCA va a cambiar, como el número Pi, ¿qué palabra clave deberías usar?", options: ["let", "var", "const", "static"], answer: "const" },
            { question: "Y si el valor de una variable SÍ puede cambiar, como la puntuación de un jugador, ¿qué palabra clave es la más adecuada?", options: ["let", "const", "fixed", "variable"], answer: "let" },
            { question: "¿Qué comando usarías para imprimir un mensaje o el valor de una variable en la consola del navegador?", options: ["document.write()", "alert()", "console.log()", "print()"], answer: "console.log()" },
            { question: "El DOM (Document Object Model) es...", options: ["Un lenguaje de programación", "Una hoja de estilos", "La representación de la estructura HTML que JS puede manipular", "Un servidor web"], answer: "La representación de la estructura HTML que JS puede manipular" },
            { question: "¿Qué método de `document` se usa para seleccionar un elemento por su atributo `id`?", options: ["getElementByClass()", "querySelector()", "getElement()", "getElementById()"], answer: "getElementById()" },
            { question: "Después de seleccionar un elemento con `const el = document.getElementById('miId');`, ¿cómo cambiarías su color de texto a rojo?", options: ["el.color = 'red';", "el.style.color = 'red';", "el.changeColor('red');", "el.css('color', 'red');"], answer: "el.style.color = 'red';" },
            { question: "El código JavaScript se ejecuta en...", options: ["El servidor web", "La base de datos", "El navegador del usuario", "El editor de código"], answer: "El navegador del usuario" },
            { question: "Para cambiar el texto visible dentro de un elemento, puedes modificar su propiedad...", options: ["text", "content", "textContent", "value"], answer: "textContent" }
        ]
    },
    { // Nivel 7 - Funciones en JavaScript: Explicar código
        title: "Funciones en JavaScript",
        lesson: [
            {
                title: "Código Completo: Funciones",
                content: `
                    <p>Aquí tienes un ejemplo de código con las funciones que aprenderás en este nivel:</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                        <div class="code-block-header px-4 py-2 flex items-center gap-2">
                            <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                        </div>
                        <pre class="p-4"><code class="language-javascript">function saludar(nombre) {
  return "Hola, " + nombre;
}

let miFuncion = function() {
  console.log("Función de expresión");
};

const funcionFlecha = () => {
  console.log("Función flecha");
};</code></pre>
                    </div>
                `
            },
            {
                title: "Explicación del Código: Declaración de Funciones",
                content: `
                    <p>Las funciones son bloques de código reutilizables.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-javascript">function saludar(nombre) {
    return "¡Hola, " + nombre + "!";
}</code></pre>
                    </div>
                    <p>La función <code>saludar</code> toma un parámetro <code>nombre</code> y devuelve un saludo personalizado.</p>
                `
            },
            {
                title: "Explicación del Código: Llamando Funciones",
                content: `
                    <p>Para ejecutar una función, la llamas con su nombre seguido de paréntesis.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-javascript">console.log(saludar("Ana")); // ¡Hola, Ana!</code></pre>
                    </div>
                `
            },
            {
                title: "Tipos de Funciones",
                content: `
                    <p>JavaScript tiene diferentes formas de declarar funciones:</p>
                    <ul>
                        <li><strong>Declaración de función</strong> - <code>function nombre() {}</code></li>
                        <li><strong>Expresión de función</strong> - <code>const nombre = function() {}</code></li>
                        <li><strong>Función flecha</strong> - <code>const nombre = () => {}</code></li>
                    </ul>
                `
            },
            {
                title: "Funciones con Parámetros",
                content: `
                    <p>Las funciones pueden recibir parámetros para trabajar con diferentes valores.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-javascript">function saludar(nombre) {
    return "Hola, " + nombre + "!";
}

console.log(saludar("María"));  // "Hola, María!"
console.log(saludar("Juan"));   // "Hola, Juan!"

// Múltiples parámetros
function sumar(a, b) {
    return a + b;
}

console.log(sumar(5, 3));  // 8</code></pre>
                    </div>
                    <p>Los parámetros permiten que las funciones sean reutilizables con diferentes datos.</p>
                `
            },
            {
                title: "Funciones Anónimas y Flecha",
                content: `
                    <p>JavaScript permite crear funciones sin nombre y funciones flecha.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-javascript">// Función anónima
let despedir = function(nombre) {
    return "Adiós, " + nombre;
};

// Función flecha
let multiplicar = (a, b) => a * b;

// Función flecha con cuerpo
let esMayor = (edad) => {
    if (edad >= 18) {
        return "Mayor de edad";
    } else {
        return "Menor de edad";
    }
};

console.log(despedir("Ana"));     // "Adiós, Ana"
console.log(multiplicar(4, 5));   // 20
console.log(esMayor(20));         // "Mayor de edad"</code></pre>
                    </div>
                    <p>Las funciones flecha son más concisas y no tienen su propio <code>this</code>.</p>
                `
            },
            {
                title: "Alcance de Variables",
                content: `
                    <p>El alcance determina dónde se puede acceder a una variable.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-javascript">// Variable global
let global = "Soy global";

function ejemplo() {
    // Variable local a la función
    let local = "Soy local";
    
    if (true) {
        // Variable de bloque
        let bloque = "Soy de bloque";
        var varBloque = "Soy var (no respeta bloque)";
        console.log(bloque);  // Funciona
    }
    
    console.log(local);      // Funciona
    console.log(varBloque);  // Funciona (var no respeta bloques)
    console.log(global);     // Funciona
}

console.log(global);  // Funciona
// console.log(local); // Error: local no está definida</code></pre>
                    </div>
                    <p><code>let</code> y <code>const</code> tienen alcance de bloque, <code>var</code> tiene alcance de función.</p>
                `
            },
            {
                title: "¡Listo para el Quiz!",
                content: "<p>Has aprendido sobre funciones en JavaScript. ¡Demuestra tus conocimientos!</p>"
            }
        ],
        quiz: [
            { question: "¿Cómo se declara una función?", options: ["function miFuncion()", "def miFuncion()", "func miFuncion()", "declare miFuncion()"], answer: "function miFuncion()" },
            { question: "¿Qué hace return?", options: ["Termina la función", "Devuelve un valor", "Crea una variable", "Todas las anteriores"], answer: "Todas las anteriores" },
            { question: "¿Qué son los parámetros?", options: ["Valores que devuelve la función", "Variables que recibe la función", "Nombre de la función", "Tipo de función"], answer: "Variables que recibe la función" },
            { question: "¿Cómo se llama una función?", options: ["miFuncion{}", "miFuncion()", "miFuncion[]", "miFuncion<>"], answer: "miFuncion()" },
            { question: "¿Qué devuelve una función sin return?", options: ["null", "undefined", "error", "nada"], answer: "undefined" },
            { question: "¿Se pueden anidar funciones?", options: ["Sí", "No", "Solo en objetos", "Solo en arrays"], answer: "Sí" },
            { question: "¿Qué es una función anónima?", options: ["Función sin nombre", "Función con errores", "Función muy pequeña", "Función lenta"], answer: "Función sin nombre" },
            { question: "¿Para qué sirven las funciones?", options: ["Solo para matemáticas", "Reutilizar código", "Crear variables", "Mostrar mensajes"], answer: "Reutilizar código" },
            { question: "¿Qué palabra clave crea funciones?", options: ["func", "function", "def", "declare"], answer: "function" },
            { question: "¿Pueden las funciones tener parámetros por defecto?", options: ["Sí", "No", "Solo en ES6+", "Solo en objetos"], answer: "Sí" }
        ]
    },
    { // Nivel 8 - Eventos en JavaScript: Explicar código
        title: "Eventos en JavaScript",
        lesson: [
            {
                title: "Código Completo: Eventos",
                content: `
                    <p>Aquí tienes un ejemplo de código con los eventos que aprenderás en este nivel:</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                        <div class="code-block-header px-4 py-2 flex items-center gap-2">
                            <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                        </div>
                        <pre class="p-4"><code class="language-html">&lt;button id="miBoton"&gt;Púlsame&lt;/button&gt;
&lt;script&gt;
    const boton = document.getElementById('miBoton');
    boton.addEventListener('click', () => {
        alert('Botón pulsado');
    });
&lt;/script&gt;</code></pre>
                    </div>
                `
            },
            {
                title: "Explicación del Código: Escuchando Eventos",
                content: `
                    <p>Los eventos permiten que JavaScript responda a acciones del usuario.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-javascript">const boton = document.getElementById('miBoton');
boton.addEventListener('click', function() {
    alert('¡Botón clickeado!');
});</code></pre>
                    </div>
                    <p>Este código busca un elemento con ID 'miBoton' y le añade un escuchador de eventos para el clic.</p>
                `
            },
            {
                title: "Explicación del Código: Función del Evento",
                content: `
                    <p>La función se ejecuta cuando ocurre el evento.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-javascript">function() {
    alert('¡Botón clickeado!');
}</code></pre>
                    </div>
                    <p>Esta es una función anónima que se ejecuta cuando se hace clic en el botón.</p>
                `
            },
            {
                title: "Tipos de Eventos Comunes",
                content: `
                    <p>Algunos eventos comunes en JavaScript:</p>
                    <ul>
                        <li><code>click</code> - Clic del mouse</li>
                        <li><code>mouseover</code> - Mouse sobre elemento</li>
                        <li><code>keydown</code> - Tecla presionada</li>
                        <li><code>submit</code> - Formulario enviado</li>
                        <li><code>load</code> - Página cargada</li>
                    </ul>
                `
            },
            {
                title: "¡Listo para el Quiz!",
                content: "<p>Has aprendido sobre eventos en JavaScript. ¡Muestra que sabes manejarlos!</p>"
            }
        ],
        quiz: [
            { question: "¿Qué método añade escuchadores de eventos?", options: ["addEvent", "addEventListener", "onEvent", "listenEvent"], answer: "addEventListener" },
            { question: "¿Qué evento se dispara al hacer clic?", options: ["click", "onclick", "mouseclick", "buttonclick"], answer: "click" },
            { question: "¿Qué evento se dispara al cambiar input?", options: ["input", "change", "modify", "update"], answer: "change" },
            { question: "¿Qué contiene información del evento?", options: ["Event object", "Element object", "Window object", "Document object"], answer: "Event object" },
            { question: "¿Cómo se previene el comportamiento por defecto?", options: ["preventDefault()", "stopPropagation()", "cancelEvent()", "blockDefault()"], answer: "preventDefault()" },
            { question: "¿Qué evento se dispara al enviar formulario?", options: ["send", "submit", "post", "form"], answer: "submit" },
            { question: "¿Qué evento se dispara al cargar la página?", options: ["ready", "load", "start", "init"], answer: "load" },
            { question: "¿Para qué sirven los eventos?", options: ["Mostrar datos", "Responder a acciones del usuario", "Crear funciones", "Definir variables"], answer: "Responder a acciones del usuario" },
            { question: "¿Se pueden quitar escuchadores de eventos?", options: ["Sí", "No", "Solo algunos", "Solo en objetos"], answer: "Sí" },
            { question: "¿Qué método quita escuchadores?", options: ["removeEventListener", "deleteEventListener", "offEvent", "stopEvent"], answer: "removeEventListener" }
        ]
    },
    { // Nivel 9 - Proyecto Final: Código completo
        title: "Proyecto Final: Página Web Completa",
        lesson: [
            {
                title: "Código Completo del Proyecto Final",
                content: `
                    <p>Aquí tienes el código completo de una página web interactiva que combina HTML, CSS y JavaScript:</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Mi Proyecto Web&lt;/title&gt;
    &lt;style&gt;
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .contenedor {
            background: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .tarea {
            display: flex;
            align-items: center;
            margin: 10px 0;
            padding: 10px;
            background: #f9f9f9;
            border-radius: 4px;
        }
        .completada {
            text-decoration: line-through;
            opacity: 0.6;
        }
        button {
            background: #007bff;
            color: white;
            border: none;
            padding: 8px 16px;
            border-radius: 4px;
            cursor: pointer;
            margin-left: 10px;
        }
        button:hover {
            background: #0056b3;
        }
        input[type="text"] {
            flex: 1;
            padding: 8px;
            border: 1px solid #ddd;
            border-radius: 4px;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="contenedor"&gt;
        &lt;h1&gt;Lista de Tareas Interactiva&lt;/h1&gt;
        &lt;div id="nueva-tarea"&gt;
            &lt;input type="text" id="input-tarea" placeholder="Nueva tarea..."&gt;
            &lt;button onclick="agregarTarea()"&gt;Agregar&lt;/button&gt;
        &lt;/div&gt;
        &lt;ul id="lista-tareas"&gt;&lt;/ul&gt;
    &lt;/div&gt;

    &lt;script&gt;
        let tareas = [];

        function agregarTarea() {
            const input = document.getElementById('input-tarea');
            const texto = input.value.trim();
            if (texto) {
                tareas.push({ texto: texto, completada: false });
                input.value = '';
                mostrarTareas();
            }
        }

        function toggleTarea(index) {
            tareas[index].completada = !tareas[index].completada;
            mostrarTareas();
        }

        function eliminarTarea(index) {
            tareas.splice(index, 1);
            mostrarTareas();
        }

        function mostrarTareas() {
            const lista = document.getElementById('lista-tareas');
            lista.innerHTML = '';
            tareas.forEach((tarea, index) => {
                const li = document.createElement('li');
                li.className = 'tarea';
                li.innerHTML = \`
                    &lt;span class="\${tarea.completada ? 'completada' : ''}" onclick="toggleTarea(\${index})">\${tarea.texto}&lt;/span&gt;
                    &lt;button onclick="eliminarTarea(\${index})"&gt;Eliminar&lt;/button&gt;
                \`;
                lista.appendChild(li);
            });
        }

        // Permitir agregar con Enter
        document.getElementById('input-tarea').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                agregarTarea();
            }
        });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                    </div>
                    <p>Esta es una aplicación completa de lista de tareas que demuestra todos los conceptos aprendidos: HTML para estructura, CSS para estilos y JavaScript para interactividad.</p>
                `
            },
            {
                title: "Implementación del Proyecto",
                content: `
                    <p>Ahora que tienes el código completo del proyecto final, es momento de implementarlo. Crea un nuevo archivo HTML, copia el código proporcionado y ábrelo en tu navegador para ver la aplicación en funcionamiento.</p>
                    <p>Experimenta modificando los estilos, añadiendo más tareas o cambiando la funcionalidad para personalizar la aplicación según tus necesidades.</p>
                `
            }
        ],
        quiz: [
            { question: "¿Qué combina el proyecto final?", options: ["Solo HTML", "HTML y CSS", "HTML, CSS y JS", "Solo JavaScript"], answer: "HTML, CSS y JS" },
            { question: "¿Qué estructura la aplicación?", options: ["HTML", "CSS", "JavaScript", "Todas"], answer: "HTML" },
            { question: "¿Qué da estilo visual?", options: ["HTML", "CSS", "JavaScript", "Ninguna"], answer: "CSS" },
            { question: "¿Qué añade interactividad?", options: ["HTML", "CSS", "JavaScript", "Ninguna"], answer: "JavaScript" },
            { question: "¿Qué método modifica el DOM?", options: ["innerHTML", "textContent", "Ambos", "Ninguno"], answer: "Ambos" },
            { question: "¿Qué evento permite agregar con Enter?", options: ["click", "keypress", "keydown", "keyup"], answer: "keypress" },
            { question: "¿Qué estructura almacena las tareas?", options: ["Variable", "Array", "Objeto", "String"], answer: "Array" },
            { question: "¿Qué propiedad marca tareas completadas?", options: ["done", "completed", "finished", "checked"], answer: "completada" },
            { question: "¿Qué método añade elementos al DOM?", options: ["appendChild", "addElement", "insertElement", "createElement"], answer: "appendChild" },
            { question: "¿Qué hace toggle en el código?", options: ["Cambia estado", "Elimina tarea", "Agrega tarea", "Muestra lista"], answer: "Cambia estado" }
        ]
    },
    { // Nivel 10 - Repaso General
        title: "Repaso Final",
        lesson: [
            {
                title: "HTML: Estructura",
                content: `
                    <p>HTML crea la estructura con etiquetas como &lt;h1&gt;, &lt;p&gt;, &lt;div&gt;, etc.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;&lt;title&gt;Título&lt;/title&gt;&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Contenido&lt;/h1&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                    </div>
                `
            },
            {
                title: "CSS: Estilos",
                content: `
                    <p>CSS da estilo con selectores y propiedades.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-css">body {
    font-family: Arial;
    background: #f0f0f0;
}</code></pre>
                    </div>
                `
            },
            {
                title: "JavaScript: Interactividad",
                content: `
                    <p>JavaScript añade lógica y responde a eventos.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-javascript">function cambiarColor() {
    document.body.style.background = 'blue';
}</code></pre>
                    </div>
                `
            },
            {
                title: "Aplicación Práctica",
                content: "<p>¡Has dominado los fundamentos del desarrollo web! En los próximos niveles aplicarás estos conocimientos en proyectos más avanzados. ¡Sigue practicando!</p>"
            }
        ],
        quiz: [
            { question: "¿Qué lenguaje estructura el contenido?", options: ["CSS", "JavaScript", "HTML", "SQL"], answer: "HTML" },
            { question: "¿Qué lenguaje da estilos?", options: ["HTML", "JavaScript", "CSS", "PHP"], answer: "CSS" },
            { question: "¿Qué lenguaje añade interactividad?", options: ["HTML", "CSS", "JavaScript", "XML"], answer: "JavaScript" },
            { question: "¿Qué etiqueta define el tipo de documento?", options: ["<html>", "<head>", "<!DOCTYPE html>", "<body>"], answer: "<!DOCTYPE html>" },
            { question: "¿Qué propiedad CSS cambia colores?", options: ["font-size", "color", "margin", "padding"], answer: "color" },
            { question: "¿Qué método JS selecciona elementos?", options: ["getElementById", "querySelector", "addEventListener", "innerHTML"], answer: "getElementById" },
            { question: "¿Qué evento responde a clics?", options: ["load", "change", "click", "submit"], answer: "click" },
            { question: "¿Qué selector CSS selecciona clases?", options: ["#", ".", "*", ":"], answer: "." },
            { question: "¿Qué palabra clave declara variables?", options: ["var", "let", "const", "Todas"], answer: "Todas" },
            { question: "¿Qué hace el DOM?", options: ["Conecta lenguajes", "Representa HTML en JS", "Ejecuta código", "Almacena datos"], answer: "Representa HTML en JS" }
        ]
    },
    { // Nivel 11 - Formularios HTML
        title: "Formularios en HTML",
        lesson: [
            {
                title: "Código Completo: Formulario de Contacto",
                content: `
                    <p>Aquí tienes el código completo de un formulario de contacto funcional:</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html lang="es"&gt;
&lt;head&gt;
    &lt;meta charset="UTF-8"&gt;
    &lt;title&gt;Formulario de Contacto&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;h1&gt;Contáctanos&lt;/h1&gt;
    &lt;form action="/enviar" method="post"&gt;
        &lt;label for="nombre"&gt;Nombre:&lt;/label&gt;
        &lt;input type="text" id="nombre" name="nombre" required&gt;&lt;br&gt;&lt;br&gt;

        &lt;label for="email"&gt;Email:&lt;/label&gt;
        &lt;input type="email" id="email" name="email" required&gt;&lt;br&gt;&lt;br&gt;

        &lt;label for="mensaje"&gt;Mensaje:&lt;/label&gt;&lt;br&gt;
        &lt;textarea id="mensaje" name="mensaje" rows="4" cols="50"&gt;&lt;/textarea&gt;&lt;br&gt;&lt;br&gt;

        &lt;input type="submit" value="Enviar"&gt;
    &lt;/form&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                    </div>
                    <p>Este formulario permite a los usuarios enviar información de contacto al servidor.</p>
                `
            },
            {
                title: "Explicación del Código: Etiqueta Form",
                content: `
                    <p>La etiqueta <form> define un formulario. Los atributos action y method especifican dónde y cómo enviar los datos.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-html">&lt;form action="/enviar" method="post"&gt;
    &lt;!-- Contenido del formulario --&gt;
&lt;/form&gt;</code></pre>
                    </div>
                    <p>action especifica la URL donde enviar los datos, method puede ser "get" o "post".</p>
                `
            },
            {
                title: "Explicación del Código: Inputs de Texto",
                content: `
                    <p><input> crea campos de entrada. type="text" para texto normal, type="email" para emails.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-html">&lt;label for="nombre"&gt;Nombre:&lt;/label&gt;
&lt;input type="text" id="nombre" name="nombre" required&gt;</code></pre>
                    </div>
                    <p>El atributo required hace el campo obligatorio. name identifica el campo en el envío.</p>
                `
            },
            {
                title: "Explicación del Código: Textarea",
                content: `
                    <p><textarea> crea un área de texto multilínea para mensajes largos.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-html">&lt;textarea id="mensaje" name="mensaje" rows="4" cols="50"&gt;&lt;/textarea&gt;</code></pre>
                    </div>
                    <p>rows y cols controlan el tamaño inicial del área de texto.</p>
                `
            },
            {
                title: "¡Listo para el Quiz!",
                content: "<p>Has aprendido a crear formularios HTML para recopilar datos de usuarios. ¡Demuestra tus conocimientos!</p>"
            }
        ],
        quiz: [
            { question: "¿Qué etiqueta define un formulario?", options: ["<input>", "<form>", "<textarea>", "<label>"], answer: "<form>" },
            { question: "¿Qué atributo hace un campo obligatorio?", options: ["required", "mandatory", "needed", "essential"], answer: "required" },
            { question: "¿Qué type es para emails?", options: ["text", "email", "mail", "address"], answer: "email" },
            { question: "¿Qué etiqueta crea áreas de texto multilínea?", options: ["<input>", "<textarea>", "<text>", "<multiline>"], answer: "<textarea>" },
            { question: "¿Qué atributo especifica dónde enviar los datos?", options: ["action", "method", "target", "url"], answer: "action" },
            { question: "¿Qué method envía datos de forma visible?", options: ["post", "get", "send", "submit"], answer: "get" },
            { question: "¿Qué etiqueta asocia texto con un input?", options: ["<label>", "<text>", "<associate>", "<link>"], answer: "<label>" },
            { question: "¿Qué atributo conecta label con input?", options: ["id", "name", "for", "connect"], answer: "for" },
            { question: "¿Qué type es para contraseñas?", options: ["text", "password", "secret", "hidden"], answer: "password" },
            { question: "¿Qué atributo especifica el nombre del campo?", options: ["id", "name", "field", "label"], answer: "name" }
        ]
    },
    { // Nivel 12 - CSS Grid
        title: "CSS Grid Layout",
        lesson: [
            {
                title: "Código Completo: Layout con Grid",
                content: `
                    <p>Aquí tienes el código completo de un layout usando CSS Grid:</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;style&gt;
        .grid-container {
            display: grid;
            grid-template-columns: 1fr 2fr 1fr;
            grid-template-rows: 100px auto 100px;
            gap: 10px;
        }
        .header { grid-column: 1 / -1; background: lightblue; }
        .sidebar { background: lightgreen; }
        .main { background: lightyellow; }
        .footer { grid-column: 1 / -1; background: lightgray; }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="grid-container"&gt;
        &lt;div class="header"&gt;Header&lt;/div&gt;
        &lt;div class="sidebar"&gt;Sidebar&lt;/div&gt;
        &lt;div class="main"&gt;Main Content&lt;/div&gt;
        &lt;div class="footer"&gt;Footer&lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                    </div>
                    <p>Este layout crea una estructura de página con header, sidebar, contenido principal y footer usando CSS Grid.</p>
                `
            },
            {
                title: "Explicación del Código: display: grid",
                content: `
                    <p>display: grid convierte un contenedor en un grid container.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-css">.grid-container {
    display: grid;
}</code></pre>
                    </div>
                    <p>Los elementos hijos directos se convierten automáticamente en grid items.</p>
                `
            },
            {
                title: "Explicación del Código: grid-template-columns",
                content: `
                    <p>Define el número y tamaño de las columnas del grid.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-css">grid-template-columns: 1fr 2fr 1fr;</code></pre>
                    </div>
                    <p>1fr 2fr 1fr crea 3 columnas: la del medio es el doble de ancha que las laterales.</p>
                `
            },
            {
                title: "Explicación del Código: grid-column",
                content: `
                    <p>Permite que un elemento ocupe múltiples columnas o filas.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-css">.header { grid-column: 1 / -1; }</code></pre>
                    </div>
                    <p>1 / -1 significa desde la primera línea hasta la última, ocupando todas las columnas.</p>
                `
            },
            {
                title: "¡Listo para el Quiz!",
                content: "<p>Has aprendido CSS Grid para crear layouts complejos. ¡Demuestra que sabes usarlo!</p>"
            }
        ],
        quiz: [
            { question: "¿Qué propiedad activa CSS Grid?", options: ["display: flex", "display: grid", "display: block", "display: inline"], answer: "display: grid" },
            { question: "¿Qué define las columnas del grid?", options: ["grid-template-rows", "grid-template-columns", "grid-columns", "grid-template"], answer: "grid-template-columns" },
            { question: "¿Qué significa 1fr?", options: ["1 píxel", "1 fracción del espacio disponible", "1 fila", "1 columna"], answer: "1 fracción del espacio disponible" },
            { question: "¿Qué propiedad define el espacio entre celdas?", options: ["margin", "padding", "gap", "space"], answer: "gap" },
            { question: "¿Qué permite ocupar múltiples columnas?", options: ["grid-column", "grid-row", "grid-span", "grid-multi"], answer: "grid-column" },
            { question: "¿Qué significa grid-column: 1 / -1?", options: ["Ocupa primera columna", "Ocupa todas las columnas", "Ocupa última columna", "Ocupa ninguna columna"], answer: "Ocupa todas las columnas" },
            { question: "¿Qué define las filas del grid?", options: ["grid-template-rows", "grid-template-columns", "grid-rows", "grid-template"], answer: "grid-template-rows" },
            { question: "¿Qué propiedad alinea items en el eje cross?", options: ["justify-items", "align-items", "place-items", "center-items"], answer: "align-items" },
            { question: "¿Qué propiedad alinea items en el eje main?", options: ["justify-items", "align-items", "place-items", "center-items"], answer: "justify-items" },
            { question: "¿Qué es un grid item?", options: ["El contenedor grid", "Los elementos hijos directos", "Las líneas del grid", "Las áreas del grid"], answer: "Los elementos hijos directos" }
        ]
    },
    { // Nivel 13 - Arrays en JavaScript
        title: "Arrays en JavaScript",
        lesson: [
            {
                title: "Código Completo: Gestión de Lista de Tareas",
                content: `
                    <p>Aquí tienes el código completo de una aplicación simple de lista de tareas usando arrays:</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-javascript">let tareas = ["Comprar leche", "Estudiar JS", "Hacer ejercicio"];

// Añadir tarea
tareas.push("Llamar a mamá");

// Mostrar tareas
console.log("Lista de tareas:");
tareas.forEach(function(tarea, index) {
    console.log(index + 1 + ". " + tarea);
});

// Marcar primera tarea como completada
tareas[0] = "✓ Comprar leche";

// Eliminar última tarea
tareas.pop();

console.log("Tareas restantes:", tareas.length);</code></pre>
                    </div>
                    <p>Este código demuestra operaciones básicas con arrays en JavaScript.</p>
                `
            },
            {
                title: "Explicación del Código: Creación de Arrays",
                content: `
                    <p>Los arrays almacenan colecciones de datos.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-javascript">let tareas = ["Comprar leche", "Estudiar JS", "Hacer ejercicio"];</code></pre>
                    </div>
                    <p>Los arrays se crean con corchetes y pueden contener cualquier tipo de datos.</p>
                `
            },
            {
                title: "Explicación del Código: Métodos de Arrays",
                content: `
                    <p>JavaScript proporciona métodos útiles para trabajar con arrays.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-javascript">// Añadir elemento al final
tareas.push("Nueva tarea");

// Eliminar último elemento
tareas.pop();

// Recorrer array
tareas.forEach(function(tarea) {
    console.log(tarea);
});</code></pre>
                    </div>
                `
            },
            {
                title: "Métodos Comunes de Arrays",
                content: `
                    <p>Algunos métodos útiles para arrays:</p>
                    <ul>
                        <li><code>push()</code> - Añade elemento al final</li>
                        <li><code>pop()</code> - Elimina último elemento</li>
                        <li><code>shift()</code> - Elimina primer elemento</li>
                        <li><code>unshift()</code> - Añade elemento al inicio</li>
                        <li><code>forEach()</code> - Ejecuta función para cada elemento</li>
                        <li><code>map()</code> - Crea nuevo array transformando elementos</li>
                    </ul>
                `
            },
            {
                title: "¡Listo para el Quiz!",
                content: "<p>Has aprendido a trabajar con arrays en JavaScript. ¡Demuestra tus conocimientos!</p>"
            }
        ],
        quiz: [
            { question: "¿Qué es un array?", options: ["Colección de datos", "Tipo de variable", "Función", "Objeto"], answer: "Colección de datos" },
            { question: "¿Qué método añade elemento al final?", options: ["push()", "pop()", "add()", "append()"], answer: "push()" },
            { question: "¿Qué método elimina el último elemento?", options: ["push()", "pop()", "remove()", "delete()"], answer: "pop()" },
            { question: "¿Cómo acceder al primer elemento?", options: ["array[0]", "array[1]", "array.first", "array.start"], answer: "array[0]" },
            { question: "¿Qué hace forEach()?", options: ["Ejecuta función para cada elemento", "Filtra elementos", "Ordena elementos", "Elimina elementos"], answer: "Ejecuta función para cada elemento" },
            { question: "¿Qué método crea nuevo array transformado?", options: ["forEach()", "map()", "filter()", "reduce()"], answer: "map()" },
            { question: "¿Qué método filtra elementos?", options: ["forEach()", "map()", "filter()", "reduce()"], answer: "filter()" },
            { question: "¿Cómo saber longitud de array?", options: ["array.length", "array.size", "array.count", "array.items"], answer: "array.length" },
            { question: "¿Qué hace shift()?", options: ["Elimina primer elemento", "Elimina último elemento", "Añade al inicio", "Añade al final"], answer: "Elimina primer elemento" },
            { question: "¿Qué hace unshift()?", options: ["Elimina primer elemento", "Elimina último elemento", "Añade al inicio", "Añade al final"], answer: "Añade al inicio" }
        ]
    },
    { // Nivel 14 - CSS Flexbox
        title: "CSS Flexbox",
        lesson: [
            {
                title: "Código Completo: Layout con Flexbox",
                content: `
                    <p>Aquí tienes el código completo de un layout usando CSS Flexbox:</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;style&gt;
        .flex-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 200px;
            background: lightgray;
        }
        .item {
            background: lightblue;
            padding: 20px;
            margin: 10px;
            flex: 1;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="flex-container"&gt;
        &lt;div class="item"&gt;Item 1&lt;/div&gt;
        &lt;div class="item"&gt;Item 2&lt;/div&gt;
        &lt;div class="item"&gt;Item 3&lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                    </div>
                    <p>Este layout distribuye los elementos horizontalmente usando Flexbox.</p>
                `
            },
            {
                title: "Explicación del Código: display: flex",
                content: `
                    <p>display: flex convierte el contenedor en un flex container.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-css">.flex-container {
    display: flex;
}</code></pre>
                    </div>
                    <p>Los elementos hijos se convierten en flex items.</p>
                `
            },
            {
                title: "Explicación del Código: justify-content",
                content: `
                    <p>justify-content alinea los items a lo largo del eje principal (horizontal).</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-css">justify-content: space-between;</code></pre>
                    </div>
                    <p>space-between distribuye el espacio entre los items.</p>
                `
            },
            {
                title: "Explicación del Código: align-items",
                content: `
                    <p>align-items alinea los items a lo largo del eje cruzado (vertical).</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-css">align-items: center;</code></pre>
                    </div>
                    <p>center alinea los items al centro verticalmente.</p>
                `
            },
            {
                title: "¡Listo para el Quiz!",
                content: "<p>Has aprendido CSS Flexbox para layouts flexibles. ¡Demuestra que sabes usarlo!</p>"
            }
        ],
        quiz: [
            { question: "¿Qué propiedad activa Flexbox?", options: ["display: flex", "display: grid", "display: block", "display: inline"], answer: "display: flex" },
            { question: "¿Qué alinea items horizontalmente?", options: ["align-items", "justify-content", "flex-direction", "align-content"], answer: "justify-content" },
            { question: "¿Qué alinea items verticalmente?", options: ["justify-items", "align-items", "place-items", "center-items"], answer: "align-items" },
            { question: "¿Qué valor distribuye espacio entre items?", options: ["space-around", "space-between", "space-evenly", "distribute"], answer: "space-between" },
            { question: "¿Qué propiedad cambia la dirección?", options: ["flex-direction", "direction", "flow", "axis"], answer: "flex-direction" },
            { question: "¿Qué hace flex: 1?", options: ["Hace el item flexible", "Establece ancho fijo", "Centra el item", "Oculta el item"], answer: "Hace el item flexible" },
            { question: "¿Qué es un flex item?", options: ["El contenedor flex", "Los elementos hijos directos", "Las líneas flex", "Las áreas flex"], answer: "Los elementos hijos directos" },
            { question: "¿Qué propiedad controla el orden?", options: ["order", "index", "position", "z-index"], answer: "order" },
            { question: "¿Qué hace flex-wrap?", options: ["Permite que los items se envuelvan", "Centra los items", "Estira los items", "Comprime los items"], answer: "Permite que los items se envuelvan" },
            { question: "¿Cuál es el eje principal por defecto?", options: ["Vertical", "Horizontal", "Diagonal", "Ninguno"], answer: "Horizontal" }
        ]
    },
    { // Nivel 15 - Media Queries
        title: "Media Queries y Diseño Responsivo",
        lesson: [
            {
                title: "Código Completo: Página Responsiva",
                content: `
                    <p>Aquí tienes el código completo de una página web responsiva:</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;style&gt;
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        .grid {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 20px;
        }
        .card {
            background: lightblue;
            padding: 20px;
            text-align: center;
        }

        @media (max-width: 768px) {
            .grid {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (max-width: 480px) {
            .grid {
                grid-template-columns: 1fr;
            }
            .container {
                padding: 10px;
            }
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="container"&gt;
        &lt;div class="grid"&gt;
            &lt;div class="card"&gt;Card 1&lt;/div&gt;
            &lt;div class="card"&gt;Card 2&lt;/div&gt;
            &lt;div class="card"&gt;Card 3&lt;/div&gt;
            &lt;div class="card"&gt;Card 4&lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                    </div>
                    <p>Esta página se adapta a diferentes tamaños de pantalla usando media queries.</p>
                `
            },
            {
                title: "Explicación del Código: Media Queries",
                content: `
                    <p>Las media queries aplican estilos basados en características del dispositivo.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-css">@media (max-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}</code></pre>
                    </div>
                    <p>Esta media query cambia el grid a 2 columnas en pantallas menores a 768px.</p>
                `
            },
            {
                title: "Explicación del Código: Breakpoints",
                content: `
                    <p>Los breakpoints son puntos donde cambian los estilos para diferentes tamaños.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-css">@media (max-width: 480px) {
    .grid {
        grid-template-columns: 1fr;
    }
}</code></pre>
                    </div>
                    <p>En móviles pequeños, el grid se convierte en una sola columna.</p>
                `
            },
            {
                title: "Mobile First",
                content: `
                    <p>El enfoque "mobile first" significa diseñar primero para móviles y luego añadir estilos para pantallas más grandes.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-css">/* Estilos base para móviles */
.grid {
    grid-template-columns: 1fr;
}

/* Estilos para tablets */
@media (min-width: 768px) {
    .grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

/* Estilos para desktop */
@media (min-width: 1024px) {
    .grid {
        grid-template-columns: repeat(4, 1fr);
    }
}</code></pre>
                    </div>
                `
            },
            {
                title: "¡Listo para el Quiz!",
                content: "<p>Has aprendido media queries para diseño responsivo. ¡Demuestra tus conocimientos!</p>"
            }
        ],
        quiz: [
            { question: "¿Qué permiten las media queries?", options: ["Aplicar estilos condicionales", "Crear animaciones", "Cambiar colores", "Añadir fuentes"], answer: "Aplicar estilos condicionales" },
            { question: "¿Qué significa max-width: 768px?", options: ["Pantallas más anchas que 768px", "Pantallas más estrechas que 768px", "Pantallas exactamente de 768px", "Pantallas más altas que 768px"], answer: "Pantallas más estrechas que 768px" },
            { question: "¿Qué es un breakpoint?", options: ["Punto de ruptura del código", "Punto donde cambian los estilos", "Punto de carga de la página", "Punto de conexión con el servidor"], answer: "Punto donde cambian los estilos" },
            { question: "¿Qué media type es común?", options: ["screen", "print", "speech", "Todos"], answer: "Todos" },
            { question: "¿Qué propiedad es responsive por defecto?", options: ["width", "max-width", "min-width", "height"], answer: "max-width" },
            { question: "¿Qué significa min-width?", options: ["Mínimo ancho requerido", "Máximo ancho requerido", "Ancho exacto", "Ancho mínimo del elemento"], answer: "Mínimo ancho requerido" },
            { question: "¿Por qué es importante el diseño responsivo?", options: ["Mejor UX en móviles", "Más rápido", "Más barato", "Más colores"], answer: "Mejor UX en móviles" },
            { question: "¿Qué herramienta ayuda con responsive?", options: ["DevTools", "Consola", "Terminal", "Editor"], answer: "DevTools" },
            { question: "¿Qué unidad es relativa al viewport?", options: ["px", "em", "vw", "%"], answer: "vw" },
            { question: "¿Qué significa 100vw?", options: ["100% del ancho del viewport", "100% del alto del viewport", "100 píxeles", "100% del contenedor"], answer: "100% del ancho del viewport" }
        ]
    },
    { // Nivel 16 - APIs con Fetch
        title: "Introducción a APIs con Fetch",
        lesson: [
            {
                title: "Código Completo: Obtener Datos de una API",
                content: `
                    <p>Aquí tienes el código completo para obtener datos de una API usando fetch:</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
    &lt;div id="resultado"&gt;&lt;/div&gt;

    &lt;script&gt;
        fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then(response => response.json())
            .then(data => {
                document.getElementById('resultado').innerHTML =
                    '&lt;h2&gt;' + data.title + '&lt;/h2&gt;&lt;p&gt;' + data.body + '&lt;/p&gt;';
            })
            .catch(error => {
                console.error('Error:', error);
                document.getElementById('resultado').innerHTML = 'Error al cargar datos';
            });
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                    </div>
                    <p>Este código obtiene datos de una API y los muestra en la página.</p>
                `
            },
            {
                title: "Explicación del Código: fetch()",
                content: `
                    <p>fetch() es una función moderna para hacer peticiones HTTP.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-javascript">fetch('https://jsonplaceholder.typicode.com/posts/1')</code></pre>
                    </div>
                    <p>fetch() devuelve una Promise que se resuelve con la respuesta.</p>
                `
            },
            {
                title: "Explicación del Código: .then()",
                content: `
                    <p>.then() maneja la respuesta exitosa de la petición.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-javascript">.then(response => response.json())</code></pre>
                    </div>
                    <p>response.json() convierte la respuesta a un objeto JavaScript.</p>
                `
            },
            {
                title: "Explicación del Código: .catch()",
                content: `
                    <p>.catch() maneja los errores que puedan ocurrir.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-javascript">.catch(error => {
    console.error('Error:', error);
})</code></pre>
                    </div>
                    <p>Es importante manejar errores para una buena experiencia de usuario.</p>
                `
            },
            {
                title: "¡Listo para el Quiz!",
                content: "<p>Has aprendido a consumir APIs con fetch. ¡Demuestra tus conocimientos!</p>"
            }
        ],
        quiz: [
            { question: "¿Qué hace fetch()?", options: ["Hace peticiones HTTP", "Crea elementos HTML", "Cambia estilos", "Maneja eventos"], answer: "Hace peticiones HTTP" },
            { question: "¿Qué devuelve fetch()?", options: ["Datos directos", "Una Promise", "Un array", "Un objeto"], answer: "Una Promise" },
            { question: "¿Qué método convierte respuesta a JSON?", options: ["response.text()", "response.json()", "response.xml()", "response.data()"], answer: "response.json()" },
            { question: "¿Qué maneja .catch()?", options: ["Respuestas exitosas", "Errores", "Datos", "Eventos"], answer: "Errores" },
            { question: "¿Qué es una API?", options: ["Interfaz de Programación de Aplicaciones", "Aplicación de Programación Interactiva", "Archivo de Programación de Internet", "Acceso a Programación de Internet"], answer: "Interfaz de Programación de Aplicaciones" },
            { question: "¿Qué significa HTTP?", options: ["HyperText Transfer Protocol", "High-Tech Transfer Protocol", "HyperText Transport Protocol", "Home Transfer Protocol"], answer: "HyperText Transfer Protocol" },
            { question: "¿Qué es JSON?", options: ["JavaScript Object Notation", "JavaScript Online Network", "Java Simple Object Notation", "JavaScript Object Network"], answer: "JavaScript Object Notation" },
            { question: "¿Qué es asíncrono?", options: ["Se ejecuta inmediatamente", "No bloquea el código", "Es más rápido", "Es más lento"], answer: "No bloquea el código" },
            { question: "¿Qué es una Promise?", options: ["Un objeto que representa un valor futuro", "Un tipo de variable", "Una función", "Un array"], answer: "Un objeto que representa un valor futuro" },
            { question: "¿Por qué usar APIs?", options: ["Obtener datos externos", "Crear estilos", "Hacer animaciones", "Cambiar colores"], answer: "Obtener datos externos" }
        ]
    },
    { // Nivel 17 - Local Storage
        title: "Local Storage y Session Storage",
        lesson: [
            {
                title: "Código Completo: Guardar Datos Localmente",
                content: `
                    <p>Aquí tienes el código completo para usar Local Storage:</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;body&gt;
    &lt;input type="text" id="input" placeholder="Escribe algo"&gt;
    &lt;button onclick="guardar()"&gt;Guardar&lt;/button&gt;
    &lt;button onclick="cargar()"&gt;Cargar&lt;/button&gt;
    &lt;div id="resultado"&gt;&lt;/div&gt;

    &lt;script&gt;
        function guardar() {
            const valor = document.getElementById('input').value;
            localStorage.setItem('miDato', valor);
            alert('Dato guardado');
        }

        function cargar() {
            const valor = localStorage.getItem('miDato');
            document.getElementById('resultado').innerHTML = valor || 'No hay datos';
        }

        // Cargar al iniciar
        window.onload = cargar;
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                    </div>
                    <p>Esta aplicación guarda y carga datos usando Local Storage.</p>
                `
            },
            {
                title: "Explicación del Código: setItem()",
                content: `
                    <p>setItem() guarda un valor en el almacenamiento local.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-javascript">localStorage.setItem('miDato', valor);</code></pre>
                    </div>
                    <p>Los datos persisten incluso después de cerrar el navegador.</p>
                `
            },
            {
                title: "Explicación del Código: getItem()",
                content: `
                    <p>getItem() recupera un valor del almacenamiento local.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-javascript">const valor = localStorage.getItem('miDato');</code></pre>
                    </div>
                    <p>Si la clave no existe, devuelve null.</p>
                `
            },
            {
                title: "Diferencia con Session Storage",
                content: `
                    <p>Session Storage dura solo durante la sesión del navegador, Local Storage persiste.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-javascript">// Local Storage
localStorage.setItem('clave', 'valor');

// Session Storage
sessionStorage.setItem('clave', 'valor');</code></pre>
                    </div>
                    <p>Usa sessionStorage para datos temporales, localStorage para persistentes.</p>
                `
            },
            {
                title: "¡Listo para el Quiz!",
                content: "<p>Has aprendido Local Storage para persistir datos. ¡Demuestra tus conocimientos!</p>"
            }
        ],
        quiz: [
            { question: "¿Qué permite Local Storage?", options: ["Guardar datos en el navegador", "Enviar datos al servidor", "Crear cookies", "Almacenar en base de datos"], answer: "Guardar datos en el navegador" },
            { question: "¿Qué método guarda datos?", options: ["saveItem()", "setItem()", "storeItem()", "putItem()"], answer: "setItem()" },
            { question: "¿Qué método recupera datos?", options: ["getItem()", "retrieveItem()", "loadItem()", "fetchItem()"], answer: "getItem()" },
            { question: "¿Cuánto dura Local Storage?", options: ["Solo la sesión", "Hasta que se borre", "1 día", "1 semana"], answer: "Hasta que se borre" },
            { question: "¿Qué devuelve getItem() si no existe?", options: ["undefined", "null", "error", "empty"], answer: "null" },
            { question: "¿Qué borra todos los datos?", options: ["clear()", "removeAll()", "deleteAll()", "erase()"], answer: "clear()" },
            { question: "¿Qué borra un item específico?", options: ["removeItem()", "deleteItem()", "clearItem()", "eraseItem()"], answer: "removeItem()" },
            { question: "¿Cuál es el límite de Local Storage?", options: ["1KB", "5MB", "10MB", "Ilimitado"], answer: "5MB" },
            { question: "¿Qué tipo de datos se guarda?", options: ["Solo strings", "Cualquier tipo", "Solo números", "Solo objetos"], answer: "Solo strings" },
            { question: "¿Para qué usar JSON.stringify()?", options: ["Convertir a string", "Comprimir datos", "Encriptar datos", "Validar datos"], answer: "Convertir a string" }
        ]
    },
    { // Nivel 18 - Introducción a Bootstrap
        title: "Introducción a Bootstrap",
        lesson: [
            {
                title: "Código Completo: Página con Bootstrap",
                content: `
                    <p>Aquí tienes el código completo de una página usando Bootstrap:</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="container"&gt;
        &lt;div class="row"&gt;
            &lt;div class="col-md-6"&gt;
                &lt;div class="card"&gt;
                    &lt;div class="card-body"&gt;
                        &lt;h5 class="card-title"&gt;Título de la Card&lt;/h5&gt;
                        &lt;p class="card-text"&gt;Contenido de la card.&lt;/p&gt;
                        &lt;a href="#" class="btn btn-primary"&gt;Botón&lt;/a&gt;
                    &lt;/div&gt;
                &lt;/div&gt;
            &lt;/div&gt;
            &lt;div class="col-md-6"&gt;
                &lt;div class="alert alert-success" role="alert"&gt;
                    ¡Éxito! Operación completada.
                &lt;/div&gt;
            &lt;/div&gt;
        &lt;/div&gt;
    &lt;/div&gt;

    &lt;script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"&gt;&lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                    </div>
                    <p>Esta página usa componentes de Bootstrap para un diseño rápido y responsivo.</p>
                `
            },
            {
                title: "Explicación del Código: Sistema de Grid",
                content: `
                    <p>Bootstrap usa un sistema de grid de 12 columnas para layouts.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-html">&lt;div class="container"&gt;
    &lt;div class="row"&gt;
        &lt;div class="col-md-6"&gt;Columna 1&lt;/div&gt;
        &lt;div class="col-md-6"&gt;Columna 2&lt;/div&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
                    </div>
                    <p>col-md-6 ocupa 6 de 12 columnas en pantallas medianas y superiores.</p>
                `
            },
            {
                title: "Explicación del Código: Componentes",
                content: `
                    <p>Bootstrap incluye componentes listos para usar como cards, botones, alerts.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-html">&lt;div class="card"&gt;
    &lt;div class="card-body"&gt;
        &lt;h5 class="card-title"&gt;Título&lt;/h5&gt;
        &lt;p class="card-text"&gt;Contenido&lt;/p&gt;
        &lt;a href="#" class="btn btn-primary"&gt;Botón&lt;/a&gt;
    &lt;/div&gt;
&lt;/div&gt;</code></pre>
                    </div>
                    <p>Las clases de Bootstrap aplican estilos automáticamente.</p>
                `
            },
            {
                title: "Responsive Design con Bootstrap",
                content: `
                    <p>Bootstrap es responsive por defecto. Usa clases como:</p>
                    <ul>
                        <li><code>col-sm-*</code> - Pantallas pequeñas (≥576px)</li>
                        <li><code>col-md-*</code> - Pantallas medianas (≥768px)</li>
                        <li><code>col-lg-*</code> - Pantallas grandes (≥992px)</li>
                        <li><code>col-xl-*</code> - Pantallas extra grandes (≥1200px)</li>
                    </ul>
                `
            },
            {
                title: "¡Listo para el Quiz!",
                content: "<p>Has aprendido Bootstrap para desarrollo rápido. ¡Demuestra tus conocimientos!</p>"
            }
        ],
        quiz: [
            { question: "¿Qué es Bootstrap?", options: ["Framework CSS", "Lenguaje de programación", "Base de datos", "Servidor web"], answer: "Framework CSS" },
            { question: "¿Qué incluye Bootstrap?", options: ["Solo CSS", "CSS, JS y componentes", "Solo JavaScript", "Solo HTML"], answer: "CSS, JS y componentes" },
            { question: "¿Qué clase crea un contenedor?", options: [".container", ".wrapper", ".box", ".content"], answer: ".container" },
            { question: "¿Cuántas columnas tiene el grid?", options: ["6", "12", "16", "24"], answer: "12" },
            { question: "¿Qué significa col-md-6?", options: ["6 columnas en móviles", "6 columnas en medianas", "6 columnas siempre", "6 píxeles"], answer: "6 columnas en medianas" },
            { question: "¿Qué clase crea un botón?", options: [".button", ".btn", ".link", ".action"], answer: ".btn" },
            { question: "¿Qué es responsivo en Bootstrap?", options: ["El grid", "Los colores", "Las fuentes", "Los iconos"], answer: "El grid" },
            { question: "¿Cómo incluir Bootstrap?", options: ["Descargar archivos", "CDN", "Ambos", "Ninguno"], answer: "Ambos" },
            { question: "¿Qué hace .card?", options: ["Crea una tarjeta", "Centra contenido", "Cambia colores", "Añade bordes"], answer: "Crea una tarjeta" },
            { question: "¿Por qué usar Bootstrap?", options: ["Desarrollo rápido", "Más personalizado", "Mejor rendimiento", "Más ligero"], answer: "Desarrollo rápido" }
        ]
    },
    { // Nivel 19 - Proyecto Intermedio
        title: "Proyecto Intermedio: Galería de Imágenes",
        lesson: [
            {
                title: "Código Completo: Galería Interactiva",
                content: `
                    <p>Aquí tienes el código completo de una galería de imágenes interactiva:</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-html">&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt;
    &lt;style&gt;
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            gap: 10px;
        }
        .gallery img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            cursor: pointer;
            transition: transform 0.3s;
        }
        .gallery img:hover {
            transform: scale(1.05);
        }
        .modal {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0,0,0,0.8);
            justify-content: center;
            align-items: center;
        }
        .modal img {
            max-width: 90%;
            max-height: 90%;
        }
    &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
    &lt;div class="gallery"&gt;
        &lt;img src="https://via.placeholder.com/300x200" alt="Imagen 1" onclick="openModal(this.src)"&gt;
        &lt;img src="https://via.placeholder.com/300x200" alt="Imagen 2" onclick="openModal(this.src)"&gt;
        &lt;img src="https://via.placeholder.com/300x200" alt="Imagen 3" onclick="openModal(this.src)"&gt;
    &lt;/div&gt;

    &lt;div class="modal" id="modal" onclick="closeModal()"&gt;
        &lt;img id="modal-img" src="" alt=""&gt;
    &lt;/div&gt;

    &lt;script&gt;
        function openModal(src) {
            document.getElementById('modal-img').src = src;
            document.getElementById('modal').style.display = 'flex';
        }

        function closeModal() {
            document.getElementById('modal').style.display = 'none';
        }
    &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>
                    </div>
                    <p>Esta galería muestra imágenes en grid y permite verlas en modal al hacer clic.</p>
                `
            },
            {
                title: "Explicación del Código: Grid Responsivo",
                content: `
                    <p>El grid se adapta automáticamente al número de imágenes.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-css">.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 10px;
}</code></pre>
                    </div>
                    <p>auto-fill crea tantas columnas como quepan, cada una de al menos 200px.</p>
                `
            },
            {
                title: "Explicación del Código: Modal",
                content: `
                    <p>El modal muestra la imagen ampliada al hacer clic.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-javascript">function openModal(src) {
    document.getElementById('modal-img').src = src;
    document.getElementById('modal').style.display = 'flex';
}</code></pre>
                    </div>
                    <p>La función cambia la imagen del modal y lo muestra.</p>
                `
            },
            {
                title: "Transiciones y Efectos",
                content: `
                    <p>CSS permite añadir transiciones suaves para mejor experiencia de usuario.</p>
                    <div class="code-block rounded-lg overflow-hidden mt-4">
                      <div class="code-block-header px-4 py-2 flex items-center gap-2">
                        <span class="w-3 h-3 bg-red-500 rounded-full"></span><span class="w-3 h-3 bg-yellow-500 rounded-full"></span><span class="w-3 h-3 bg-green-500 rounded-full"></span>
                      </div>
                      <pre class="p-4"><code class="language-css">.gallery img {
    transition: transform 0.3s;
}

.gallery img:hover {
    transform: scale(1.05);
}</code></pre>
                    </div>
                    <p>Esto crea un efecto de zoom suave al pasar el mouse sobre las imágenes.</p>
                `
            },
            {
                title: "¡Proyecto Completado!",
                content: "<p>Has creado una galería interactiva combinando HTML, CSS y JavaScript. ¡Excelente trabajo!</p>"
            }
        ],
        quiz: [
            { question: "¿Qué usa la galería para el layout?", options: ["Flexbox", "Grid", "Float", "Position"], answer: "Grid" },
            { question: "¿Qué hace auto-fill?", options: ["Llena automáticamente", "Centra items", "Estira columnas", "Comprime filas"], answer: "Llena automáticamente" },
            { question: "¿Qué es un modal?", options: ["Ventana emergente", "Menú lateral", "Barra de navegación", "Pie de página"], answer: "Ventana emergente" },
            { question: "¿Qué propiedad hace responsivo el grid?", options: ["minmax()", "auto-fill", "Ambas", "Ninguna"], answer: "Ambas" },
            { question: "¿Qué evento abre el modal?", options: ["click", "hover", "load", "scroll"], answer: "click" },
            { question: "¿Qué hace object-fit: cover?", options: ["Cubre el contenedor", "Centra la imagen", "Recorta la imagen", "Estira la imagen"], answer: "Recorta la imagen" },
            { question: "¿Por qué usar modal?", options: ["Mejor UX", "Más rápido", "Menos código", "Más colores"], answer: "Mejor UX" },
            { question: "¿Qué oculta el modal?", options: ["display: none", "visibility: hidden", "opacity: 0", "Todas"], answer: "display: none" },
            { question: "¿Qué pasa al hacer clic fuera del modal?", options: ["Se cierra", "Se abre más", "Cambia imagen", "Nada"], answer: "Se cierra" },
            { question: "¿Qué combina este proyecto?", options: ["HTML, CSS, JS", "Solo HTML", "Solo CSS", "Solo JS"], answer: "HTML, CSS, JS" }
        ]
    },
    { // Nivel 20 - Repaso Avanzado
        title: "Repaso Avanzado y Próximos Pasos",
        lesson: [
            {
                title: "Resumen de Conceptos Avanzados",
                content: `
                    <p>Has aprendido técnicas avanzadas de desarrollo web. Aquí un resumen:</p>
                    <ul>
                        <li><strong>CSS Grid y Flexbox:</strong> Layouts modernos y flexibles</li>
                        <li><strong>Media Queries:</strong> Diseño responsivo para todos los dispositivos</li>
                        <li><strong>APIs con Fetch:</strong> Comunicación con servidores externos</li>
                        <li><strong>Local Storage:</strong> Persistencia de datos en el navegador</li>
                        <li><strong>Bootstrap:</strong> Framework para desarrollo rápido</li>
                        <li><strong>Proyectos Prácticos:</strong> Aplicación de conocimientos en proyectos reales</li>
                    </ul>
                `
            },
            {
                title: "Próximos Pasos en tu Aprendizaje",
                content: `
                    <p>Para continuar tu viaje en el desarrollo web, considera estos temas:</p>
                    <ul>
                        <li><strong>React/Vue/Angular:</strong> Frameworks de JavaScript para aplicaciones web</li>
                        <li><strong>Node.js:</strong> JavaScript en el servidor</li>
                        <li><strong>Bases de datos:</strong> Almacenamiento persistente (MongoDB, PostgreSQL)</li>
                        <li><strong>APIs RESTful:</strong> Diseño de APIs profesionales</li>
                        <li><strong>Git y GitHub:</strong> Control de versiones y colaboración</li>
                        <li><strong>Despliegue:</strong> Publicar tus aplicaciones (Vercel, Netlify, Heroku)</li>
                    </ul>
                `
            },
            {
                title: "Consejos para Mejorar",
                content: `
                    <p>Para ser un mejor desarrollador web:</p>
                    <ul>
                        <li>Practica diariamente creando proyectos personales</li>
                        <li>Lee documentación oficial y blogs técnicos</li>
                        <li>Contribuye a proyectos open source</li>
                        <li>Únete a comunidades de desarrolladores</li>
                        <li>Mantente actualizado con las últimas tecnologías</li>
                        <li>Aprende debugging y resolución de problemas</li>
                    </ul>
                `
            },
            {
                title: "¡Felicidades! Has Completado el Curso",
                content: `
                    <p>Has dominado los fundamentos del desarrollo web y explorado conceptos avanzados. Ahora tienes las habilidades para crear aplicaciones web interactivas y responsivas.</p>
                    <p>Recuerda: el aprendizaje continuo es clave en el desarrollo web. ¡Sigue explorando y creando!</p>
                `
            }
        ],
        quiz: [
            { question: "¿Qué permite CSS Grid?", options: ["Layouts complejos", "Solo filas", "Solo columnas", "Solo flexibilidad"], answer: "Layouts complejos" },
            { question: "¿Por qué usar media queries?", options: ["Diseño responsivo", "Mejor rendimiento", "Menos código", "Más colores"], answer: "Diseño responsivo" },
            { question: "¿Qué hace fetch()?", options: ["Peticiones HTTP", "Cambia DOM", "Guarda datos", "Crea elementos"], answer: "Peticiones HTTP" },
            { question: "¿Qué persiste más tiempo?", options: ["Session Storage", "Local Storage", "Variables JS", "Cookies"], answer: "Local Storage" },
            { question: "¿Qué acelera el desarrollo?", options: ["Bootstrap", "Escribir todo desde cero", "Solo CSS puro", "Solo JS puro"], answer: "Bootstrap" },
            { question: "¿Qué combina un proyecto full-stack?", options: ["Frontend + Backend", "Solo HTML", "Solo CSS", "Solo JS"], answer: "Frontend + Backend" },
            { question: "¿Qué es React?", options: ["Framework JS", "Lenguaje", "Base de datos", "Servidor"], answer: "Framework JS" },
            { question: "¿Para qué sirve Node.js?", options: ["JS en servidor", "JS en navegador", "JS en móvil", "JS en desktop"], answer: "JS en servidor" },
            { question: "¿Qué hace Git?", options: ["Control de versiones", "Desarrollo web", "Diseño UI", "Testing"], answer: "Control de versiones" },
            { question: "¿Dónde desplegar apps?", options: ["Vercel/Netlify", "Solo local", "Solo servidor propio", "Solo GitHub"], answer: "Vercel/Netlify" }
        ]
    }
];


console.log("✅ courseData loaded successfully", courseData.length);



// --- LÓGICA DE QUIZ MEJORADA ---
let currentQuizType = "";
let currentQuizData = {};
let userAnswers = {};
let foundErrors = [];

// --- LÓGICA DE LA APLICACIÓN (STRICT FIREBASE) ---
let currentLevel = 0;
let resultsScoreV = 0;
let currentLessonStep = 0;
let currentQuizQuestion = 0;
let score = 0;
let currentPracticeStep = 0;
let userProgress = { completedLevels: [], quizScores: {} };
const COURSE_ID = 'python';



// INIT (Strict)
document.addEventListener('DOMContentLoaded', async () => {
    // Dynamic Import to ensure Firebase is loaded before proceeding
    let firebaseTools;
    try {
        firebaseTools = await import('./assets/js/firebase-config.js');
    } catch(e) {
        console.error("Critical: Failed to load Firebase.", e);
        // Intentar continuar sin Firebase en modo offline
        console.warn('⚠️ Continuando en modo offline (sin sincronización con Firestore)');
        
        // Cargar datos desde localStorage
        const localSession = JSON.parse(localStorage.getItem('currentUser'));
        if (!localSession || !localSession.id) {
            console.warn('⚠️ Sesión inválida en Python Course.');
            window.location.href = 'index.html';
            return;
        }
        
        // Cargar progreso desde localStorage
        const savedProgress = localStorage.getItem('pythonCourseProgress');
        if (savedProgress) {
            try {
                userProgress = JSON.parse(savedProgress);
            } catch (e) {
                console.error('❌ Error parsing saved progress:', e);
                userProgress = { completedLevels: [], quizScores: {} };
            }
        } else {
            console.log('🆕 Inicializando progreso Python vacío.');
            userProgress = { completedLevels: [], quizScores: {} };
        }
        
        // Renderizar interfaz
        if (window.renderLevelSelection) renderLevelSelection();
        if (window.showPanel) showPanel('levelSelection');
        return;
    }
    
    // Extract functions
    const { showLoading, hideLoading, checkConnection, getUserFromFirestore } = firebaseTools;
    
    if (!checkConnection()) return;
    if (showLoading) showLoading('Sincronizando curso Python...');
    
    const localSession = JSON.parse(localStorage.getItem('currentUser'));
    if (!localSession || !localSession.id) {
        console.warn('⚠️ Sesión inválida en Python Course.');
        window.location.href = 'index.html';
        return;
    }
    
    try {
        if (getUserFromFirestore) {
            const firestoreUser = await getUserFromFirestore(localSession.id);
            if (!firestoreUser) throw new Error('Usuario no encontrado en DB.');
            
            // Sync Local State
            if (firestoreUser.pythonProgress) {
                userProgress = firestoreUser.pythonProgress;
                // Defaults
                if (!userProgress.completedLevels) userProgress.completedLevels = [];
                if (!userProgress.quizScores) userProgress.quizScores = {};
            } else {
                console.log('🆕 Inicializando progreso Python vacío.');
                userProgress = { completedLevels: [], quizScores: {} };
            }
            
            // Update Session Cache
            localStorage.setItem('currentUser', JSON.stringify(firestoreUser));
            localStorage.setItem('pythonCourseProgress', JSON.stringify(userProgress));
        }
        
        // Initial Render
        if (window.renderLevelSelection) renderLevelSelection();
        if (window.showPanel) showPanel('levelSelection');
        
        
        
        if (hideLoading) hideLoading();
        
    } catch (e) {
        console.error('❌ Error Init Python:', e);
        
        // Solo redirigir si es un error crítico (no de Pyodide/postMessage)
        if (e.message && !e.message.includes('postMessage') && !e.message.includes('Pyodide')) {
            alert('Error cargando curso: ' + e.message);
            window.location.href = 'menu_inicio.html';
        } else {
            console.warn('⚠️ Error no crítico de Pyodide - continuando con la carga del curso');
            // Intentar renderizar de todos modos
            if (window.renderLevelSelection) renderLevelSelection();
            if (window.showPanel) showPanel('levelSelection');
            if (hideLoading) hideLoading();
        }
    }
});

async function saveProgress() {
    // 1. Update Global wrapper variable if needed (userProgress IS valid here)
    // 2. Sync to Firebase
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (currentUser.id && window.updateCourseProgress) {
        
        // Prepare payload
        const progressPayload = {
            ...userProgress,
            lastUpdated: new Date().toISOString()
        };
        
        // Optimistic Cache Update
        currentUser.pythonProgress = progressPayload;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        // localStorage.setItem('pythonCourseProgress', ...) -> Removed per user request (Strict Firebase)
        
        try {
            await window.updateCourseProgress(currentUser.id, 'pythonProgress', progressPayload);
            console.log('✅ Python Progress Saved to Firestore');
        } catch (e) {
            console.error('❌ Error saving python progress:', e);
        }
    }
}

// Deprecated: updateGlobalUserProgress was legacy local storage sync. 
// We mapped functionality into saveProgress above. 
// Keeping empty dummy if called elsewhere, or safely removing.
function updateGlobalUserProgress() {
    saveProgress(); 
}

function markLevelCompleted(levelIndex) {
    if (!userProgress.completedLevels.includes(levelIndex)) {
        userProgress.completedLevels.push(levelIndex);
        saveProgress();
        showLevelUpNotification();
    }
    renderLevelSelection();
}

function showLevelUpNotification() {
    const notification = document.createElement('div');
    notification.id = 'level-up-notification';
    notification.className = 'fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50';
    notification.innerHTML = `
        <div class="bg-green-600 text-white px-6 py-4 rounded-lg shadow-xl text-center animate-bounce">
            <div class="text-4xl mb-2">🎉</div>
            <div class="text-xl font-bold">¡Nivel Completado!</div>
            <div class="text-lg">+1 Nivel</div>
        </div>
    `;
    document.body.appendChild(notification);

    setTimeout(() => {
        if (notification.parentNode) notification.parentNode.removeChild(notification);
    }, 3000);
}

// ================= LÓGICA DEL TOUR EN LECCIONES =================


window.monacoRequireConfigured = false;
window.originalLessonHTML = ''; // Guardará el contenido original de la lección

function ensureMonacoLoaded(callback) {
    if (window.monaco) return callback();
    if (!window.monacoRequireConfigured) {
        require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.36.1/min/vs' }});
        window.monacoRequireConfigured = true;
    }
    require(['vs/editor/editor.main'], function() {
        window.monaco = monaco;
        if (window.themeManager) window.themeManager.defineCustomThemes();
        callback();
    });
}

const keywordDocs = {
   "print": { 
        title: "Comando print()", 
        desc: "<p>Es la función más fundamental y utilizada de Python. Su propósito exclusivo es expulsar y mostrar información gráfica en la terminal, para que el operador logre leer los resultados generados por el código.</p><p>Puedes imprimir textos, variables e incluso cálculos directamente separados por comas.</p>", 
        example: "print('¡Hola Academia!')\nprint(5 + 10) # En consola saldrá 15\nprint('Total:', 200)",
        ref: "Nivel 1" 
   },
   "input": { 
        title: "Comando input()", 
        desc: "<p>Esta función representa la <strong>Pausa Suprema</strong>. Al activarse, detiene agresivamente el programa e inmoviliza la terminal a la espera de un humano.</p><p>Solo avanzará una vez que el espectador teclee algún texto y presione la tecla <code>ENTER</code>. Recuerda: cualquier tecla que presione el humano <strong>siempre</strong> se registrará pura y llanamente como Texto Crudo (String), nunca números nativos.</p>", 
        example: "poder = input('Mide tu nivel: ')\n# Si tecleas 9000 será texto '9000'",
        ref: "Nivel 1" 
   },
   "if": { 
        title: "Bloque if (Si...)", 
        desc: "<p>Es el guardia de seguridad central. Significa 'Solamente si pasa esto...'. Evalúa matemáticamente o de forma lógica una condición inmediata.</p><p>Si el sistema aprueba (sale <code>True</code>), las siguientes líneas indentadas (tabuladas) se ejecutarán obedientemente.</p>", 
        example: "if energia < 20:\n    print('Tu batería se agota')",
        ref: "Nivel 3" 
   },
   "elif": { 
        title: "Bloque elif (Sino, si...)", 
        desc: "<p>Es un <code>if</code> secundario o de repuesto. Se ejecuta únicamente si el <code>if</code> o los <code>elif</code> situados arriba fallaron. Sirve para enlazar inmensas cadenas lógicas y atrapar un bloque específico uno detrás del otro.</p>", 
        example: "if color == 'Rojo':\n    print('Peligro')\nelif color == 'Amarillo':\n    print('Precaución')\nelse:\n    print('Siga')",
        ref: "Nivel 3" 
   },
   "else": { 
        title: "Bloque else (De lo contrario...)", 
        desc: "<p>El plan final de respaldo o la red de seguridad del código. El bloque <code>else</code> captura literalmente todo caso paralelo que rebotó de los <code>if</code>. Por naturaleza, <strong>jamás admite</strong> condiciones escritas frente a él.</p>", 
        example: "if edad >= 18:\n    print('Acceso Total')\nelse:\n    print('Acceso Denegado')",
        ref: "Nivel 3" 
   },
   "while": { 
        title: "Estructura while (Mientras...)", 
        desc: "<p>Un espiral cósmico o <strong>bucle de condición</strong> indefinido. Repetirá la secuencia una, y otra, y otra vez, hasta que milagrosamente la condición que evalúa termine convertida en Falsa.</p><p>¡Si olvidas cambiar la variable que le das como tope, el bucle será infinito y tu computadora morirá del pánico colapsando!</p>", 
        example: "ciclos = 3\nwhile ciclos > 0:\n    print('Faltan:', ciclos)\n    ciclos = ciclos - 1",
        ref: "Nivel 4" 
   },
   "for": { 
        title: "Estructura for (Para cada...)", 
        desc: "<p>El más controlado y elegante de los bucles en el desarrollo diario. A diferencia del inestable <code>while</code>, un ciclo <code>for</code> recorre quirúrgicamente listas completas o textos hasta el final, iterando un objeto y procesándolo uno por uno de forma finita y sin riesgo de cierre mortal continuo.</p>", 
        example: "for persona in ['Steven', 'Kurumi']:\n    print('Te veo, ' + persona)",
        ref: "Nivel 5" 
   },
   "range": { 
        title: "Generador range()", 
        desc: "<p>Un generador aritmético veloz que escupe enormes fábricas de números. Crea una ráfaga secuencial instantánea.</p><p>Suele ir incrustado dentro de los <code>for</code> para enumerar veces específicas y determinar paradas matemáticas.</p>", 
        example: "for numero in range(3):\n    print(numero) # Arroja 0, 1, 2",
        ref: "Nivel 5" 
   },
   "int": { 
        title: "Casting int()", 
        desc: "<p>Significa Integer (Número Entero). Corta radicalmente los textos con números que metes en inputs y decapitada fracciones si le introduces decimales, quedándose únicamente con un número redondo válido en las mates.</p>", 
        example: "base = int('200') # De Texto a Número\nala = int(10.9) # Termina siendo 10",
        ref: "Nivel 2" 
   },
   "float": { 
        title: "Casting float()", 
        desc: "<p>Significa Número de Coma Flotante (Con decimales). Un conversor numérico preciso. Mantiene todo valor intacto para operar matemáticametne con exactitud microscópica, sin cercenar las fracciones.</p>", 
        example: "peso = float('68.5') # Texto a Decimal matemático",
        ref: "Nivel 2" 
   },
   "str": { 
        title: "Casting str()", 
        desc: "<p>Significa String (Cadena de Texto). Permite convertir números vivos o estados lógicos como True o False en simples letras pasivas, inhabilitadas para sumar y diseñadas exclusivamente para poder fundirlas con frases.</p>", 
        example: "resultado = 500\nprint('Lograste ' + str(resultado))",
        ref: "Nivel 2" 
   },
   "True": { 
        title: "Booleano True (Verdadero)", 
        desc: "<p>Absoluta Verdad en el procesador. Indica estado binario positivo. En una comparación, dictamina que el universo lógico ha cumplido tu afirmación.</p>", 
        example: "es_mayor = True",
        ref: "Nivel 3" 
   },
   "False": { 
        title: "Booleano False (Falso)", 
        desc: "<p>Negación bi-estado absoluta. Afirmación que falló miserablemente, o interruptor que está apagado temporalmente.</p>", 
        example: "vivo = False",
        ref: "Nivel 3" 
   }
};

function restoreLessonContent() {
    if (window.originalLessonHTML !== '') {
        const contentDiv = document.getElementById('lesson-content');
        contentDiv.style.opacity = '0';
        setTimeout(() => {
            contentDiv.innerHTML = window.originalLessonHTML;
            contentDiv.style.opacity = '1';
            window.originalLessonHTML = ''; // Limpiar estado
            // Restaurar header
            document.getElementById('lesson-narrator-title').textContent = 'Teoría y Conceptos';
            document.getElementById('lesson-narrator-subtitle').textContent = 'Lectura';
            document.getElementById('lesson-narrator-icon').innerHTML = '<i data-lucide="book-open" class="w-4 h-4"></i>';
            lucide.createIcons();
            
            // Si el Monaco estaba resaltado, limpiamos las decoraciones
            if (window.tourDecorations) window.tourDecorations.clear();
        }, 200);
    }
}

function showKeywordTooltip(word, posLine) {
    const doc = keywordDocs[word];
    if (!doc) return; 

    const contentDiv = document.getElementById('lesson-content');
    
    // Guardar original solo la primera vez si no hay estado previo almacenado
    if (window.originalLessonHTML === '') {
        window.originalLessonHTML = contentDiv.innerHTML;
    }
    
    // Resaltar suavemente la linea en Monaco (Ayuda visual)
    if (window.lessonMainMonacoEditor && posLine) {
        const decorations = [{
            range: new monaco.Range(posLine, 1, posLine, 1),
            options: { isWholeLine: true, className: 'bg-accent/30 border-l-4 border-accent' }
        }];
        if (!window.tourDecorations) window.tourDecorations = window.lessonMainMonacoEditor.createDecorationsCollection();
        window.tourDecorations.set(decorations);
        window.lessonMainMonacoEditor.revealLineInCenter(posLine);
    }

    // Adaptar Header del Panel
    document.getElementById('lesson-narrator-title').textContent = 'Diccionario de Comandos';
    document.getElementById('lesson-narrator-subtitle').textContent = 'Profundizando la información';
    document.getElementById('lesson-narrator-icon').innerHTML = '<i data-lucide="book" class="w-4 h-4"></i>';
    
    // Animar la transición del texto
    contentDiv.style.opacity = '0';
    setTimeout(() => {
        contentDiv.innerHTML = `
            <div class="mb-4">
                <button onclick="restoreLessonContent()" class="btn-secondary flex items-center gap-2 mb-6 px-4 py-2 text-sm bg-accent/20 border-accent/40 hover:bg-accent/40 text-accent transition">
                    <i data-lucide="arrow-left" class="w-4 h-4"></i> Regresar a la Lección General
                </button>
            </div>
            
            <div class="glass p-6 rounded-xl border border-accent/40 shadow-lg relative overflow-hidden">
                <div class="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
                
                <h2 class="text-2xl font-bold font-mono text-white mb-4 flex items-center gap-3">
                    <span class="text-accent">${word}</span> 
                    <span class="text-xs px-2 py-1 rounded bg-white/10 text-gray-300 font-sans tracking-wide uppercase">Definición</span>
                </h2>
                
                <div class="prose prose-invert prose-p:leading-relaxed text-gray-300 mb-6">
                    ${doc.desc}
                </div>
                
                <div class="bg-black/40 rounded-lg p-4 font-mono text-sm border-l-4 border-accent shadow-inner">
                    <p class="text-gray-400 text-xs mb-2 uppercase tracking-wide">Ejemplo Práctico en código:</p>
                    <pre class="bg-transparent m-0 p-0 overflow-x-auto"><code class="text-blue-300">${doc.example}</code></pre>
                </div>
                
                <div class="mt-6 pt-4 border-t border-white/10 flex justify-between items-center text-sm font-bold text-gray-400">
                    <span class="flex items-center gap-2"><i data-lucide="map-pin" class="w-4 h-4 text-accent"></i> Visto originalmente en ${doc.ref}</span>
                </div>
            </div>
        `;
        contentDiv.style.opacity = '1';
        lucide.createIcons();
    }, 200);
}

// ============== REESCRITURA COMPLETA DEL SISTEMA "TOUR" ==============
function startLessonTour(tourSteps) { 
    if (!tourSteps || tourSteps.length === 0) return;

    const contentDiv = document.getElementById('lesson-content');
    
    // Guardar original si estamos empezando un tour limpio de cero
    if (window.originalLessonHTML === '') {
        window.originalLessonHTML = contentDiv.innerHTML;
    }

    let currentStep = 0;
    
    // Adaptar Header del Panel
    document.getElementById('lesson-narrator-title').textContent = 'Guía Interactiva Paso a Paso';
    document.getElementById('lesson-narrator-subtitle').textContent = 'Anatomía del código';
    document.getElementById('lesson-narrator-icon').innerHTML = '<i data-lucide="microscope" class="w-4 h-4"></i>';

    function renderTourUI(index) {
        if (index >= tourSteps.length) {
            restoreLessonContent();
            return;
        }

        const step = tourSteps[index];

        // Highlight en Monaco visualmente para anclar la pantalla al código
        if (window.lessonMainMonacoEditor && step.line) {
            const decorations = [{
                range: new monaco.Range(step.line, 1, step.line, 1),
                options: { isWholeLine: true, className: 'bg-accent/40 border-l-4 border-accent' }
            }];
            if (!window.tourDecorations) window.tourDecorations = window.lessonMainMonacoEditor.createDecorationsCollection();
            window.tourDecorations.set(decorations);
            window.lessonMainMonacoEditor.revealLineInCenter(step.line);
        }

        const btnText = index === tourSteps.length - 1 ? "Completar Análisis" : "Siguiente Línea";
        const iconName = index === tourSteps.length - 1 ? "check-circle" : "arrow-down-circle";
        
        contentDiv.style.opacity = '0';
        setTimeout(() => {
            contentDiv.innerHTML = `
                <div class="mb-4 flex flex-wrap gap-3 justify-between items-center">
                    <button id="tour-back-btn" class="btn-secondary flex items-center gap-2 px-4 py-2 text-sm bg-accent/20 border-accent/40 hover:bg-accent/40 text-accent transition">
                        <i data-lucide="arrow-left" class="w-4 h-4"></i> Regresar a la Lección
                    </button>
                    <span class="text-sm font-mono text-gray-400 bg-black/40 px-3 py-1 rounded-full border border-white/5">Paso ${index + 1} de ${tourSteps.length}</span>
                </div>
                
                <div class="glass p-6 rounded-xl border border-accent/30 bg-black/20 shadow-xl relative mt-4">
                    <div class="flex items-center gap-3 mb-4 border-b border-white/10 pb-3">
                        <div class="w-10 h-10 rounded-full bg-accent/20 flex flex-shrink-0 items-center justify-center text-accent">
                            <i data-lucide="focus" class="w-5 h-5"></i>
                        </div>
                        <h3 class="text-lg font-bold text-white">${step.title || "Explicando línea " + step.line}</h3>
                    </div>
                    
                    <div class="prose prose-invert prose-p:leading-loose text-gray-200 mb-6 text-md">
                        ${step.text}
                    </div>
                    
                    <div class="flex justify-end pt-4 mt-2">
                        <button id="tour-next-btn" class="btn-primary flex items-center gap-2">
                            ${btnText} <i data-lucide="${iconName}" class="w-4 h-4"></i>
                        </button>
                    </div>
                </div>
                <div class="mt-6 text-sm text-gray-500 text-center flex gap-2 items-center justify-center">
                    <i data-lucide="mouse-pointer-click" class="w-4 h-4"></i> También puedes clickear palabras clave azules en el código para ver el diccionario
                </div>
            `;
            contentDiv.style.opacity = '1';
            lucide.createIcons();

            document.getElementById('tour-back-btn').onclick = restoreLessonContent;
            document.getElementById('tour-next-btn').onclick = () => {
                renderTourUI(index + 1);
            };
        }, 150);
    }
    
    renderTourUI(currentStep);
}

// ================================================================

const panels = { levelSelection: document.getElementById('level-selection-panel'), lesson: document.getElementById('lesson-panel'), quiz: document.getElementById('quiz-panel'), results: document.getElementById('results-panel'), practice: document.getElementById('practice-panel') };
const savedTheme = localStorage.getItem('theme') || 'dark';
if (savedTheme === 'light') document.documentElement.classList.remove('dark');

function showPanel(panelName) { 
    // Filtrar paneles null para evitar errores
    Object.values(panels).filter(p => p !== null).forEach(p => p.classList.remove('active')); 
    if(panels[panelName]) panels[panelName].classList.add('active'); 
    lucide.createIcons(); 
}

function renderLevelSelection() {
    const levelGrid = document.getElementById('level-grid');
    if (!levelGrid) return;
    
    levelGrid.innerHTML = '';
    levelGrid.style.cssText = 'display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 0.9rem; width: 100%; max-width: 860px; margin-bottom: 2rem;';
    levelGrid.className = '';
    
    if (!userProgress.completedLevels) {
        userProgress.completedLevels = [];
    }
    
    const totalLevels = courseData.length;
    const completedCount = userProgress.completedLevels.length;
    const progressPercent = Math.round((completedCount / totalLevels) * 100);
    
    // Actualizar barra de progreso general
    const progressBar = document.getElementById('overall-progress-bar');
    const progressText = document.getElementById('overall-progress-text');
    if (progressBar) progressBar.style.width = progressPercent + '%';
    if (progressText) progressText.textContent = `${completedCount}/${totalLevels} niveles`;
    
    courseData.forEach((level, index) => {
        const isUnlocked = index === 0 || userProgress.completedLevels.includes(index - 1);
        const isCompleted = userProgress.completedLevels.includes(index);
        
        const levelNode = document.createElement('div');
        levelNode.className = `level-node ${isUnlocked ? 'unlocked' : 'locked'} ${isCompleted ? 'completed' : ''}`;
        
        // Ribbon para niveles completados
        if (isCompleted) {
            const ribbon = document.createElement('div');
            ribbon.className = 'status-ribbon';
            ribbon.innerText = 'HECHO';
            levelNode.appendChild(ribbon);
        }
        
        // Icono dinámico brillante
        const iconDiv = document.createElement('div');
        iconDiv.className = 'node-icon';
        const iconName = isCompleted ? 'check-circle' : isUnlocked ? 'play-circle' : 'lock';
        iconDiv.innerHTML = `<i data-lucide="${iconName}"></i>`;
        levelNode.appendChild(iconDiv);
        
        // Información del nivel
        const infoDiv = document.createElement('div');
        infoDiv.className = 'flex flex-col items-center gap-1';
        infoDiv.innerHTML = `
            <span class="node-number">Nivel ${index + 1}</span>
            <div class="node-title">${level.title}</div>
        `;
        levelNode.appendChild(infoDiv);
        
        if (isUnlocked) {
            levelNode.onclick = () => startLevel(index);
        }
        
        levelGrid.appendChild(levelNode);
    });
    
    if (window.lucide) window.lucide.createIcons();
}

function startLevel(levelIndex) { 
    currentLevel = levelIndex; 
    currentLessonStep = 0; 
    
    // Mostramos el panel primero para que el layout se asiente
    showPanel('lesson'); 
    
    // Renderizamos la lección con un ligero delay para el Editor Monaco
    setTimeout(() => {
        renderLesson(); 
    }, 50);
}

function renderLesson() {
    // 1. Limpiar Monaco Editor previo si existe en el Code Panel
    if (window.lessonMainMonacoEditor) {
        window.lessonMainMonacoEditor.dispose();
        window.lessonMainMonacoEditor = null;
    }

    const levelData = courseData[currentLevel];
    const stepData = levelData.lesson[currentLessonStep];
    
    document.getElementById('lesson-title').textContent = `Nivel ${currentLevel + 1}: ${stepData.title || 'Lección'}`;
    
    const dialogPanel = document.getElementById('lesson-dialog-panel');
    const codePanel = document.getElementById('lesson-code-panel');
    const lessonContent = document.getElementById('lesson-content');

    // 2. Animación de salida express
    dialogPanel.style.opacity = '0';
    dialogPanel.style.transform = 'translateY(10px)';

    setTimeout(() => {
        // 3. Evaluar el nuevo formato (Dialogo + Código) vs formato viejo (content)
        if (stepData.dialogo) {
            // Formato Nuevo (Nivel 1 reformulado)
            lessonContent.innerHTML = stepData.dialogo;
            
            if (stepData.codigo) {
                // Hay código para mostrar
                codePanel.classList.remove('hidden');
                codePanel.classList.add('flex');
                dialogPanel.classList.replace('lg:w-full', 'lg:w-1/2');
                
                document.getElementById('lesson-code-filename').textContent = stepData.filename || 'ejemplo.py';
                
                // Boton tour: mostrar solo si hay tourSteps
                const tourBtn = document.getElementById('code-tour-btn');
                if (tourBtn) {
                    if (stepData.tourSteps && stepData.tourSteps.length > 0) {
                        tourBtn.classList.add('visible');
                        tourBtn.onclick = () => startLessonTour(stepData.tourSteps);
                        if (window.lucide) lucide.createIcons({ nodes: [tourBtn] });
                    } else {
                        tourBtn.classList.remove('visible');
                        tourBtn.onclick = null;
                    }
                }
                
                // Renderizar Monaco Editor local
                setTimeout(() => {
                    const container = document.getElementById('lesson-monaco-container');
                    if (container) {
                        ensureMonacoLoaded(() => {
                            window.lessonMainMonacoEditor = window.monaco.editor.create(container, {
                                value: stepData.codigo.trim(),
                                language: 'python',
                                theme: 'tokyo-night',
                                readOnly: true,
                                minimap: { enabled: false },
                                fontSize: 14,
                                fontFamily: "'JetBrains Mono', monospace",
                                scrollBeyondLastLine: false,
                                padding: { top: 16 }, automaticLayout: true
                            });

                            // Attach listener interactivo al tocar keywords en cualquier nivel
                            window.lessonMainMonacoEditor.onMouseDown(function (e) {
                                if (e.target.type === window.monaco.editor.MouseTargetType.CONTENT_TEXT) {
                                    var word = window.lessonMainMonacoEditor.getModel().getWordAtPosition(e.target.position);
                                    if (word) {
                                        showKeywordTooltip(word.word, e.target.position.lineNumber);
                                    }
                                }
                            });

                            // Autochain del tour o highlighter manual
                            if (stepData.tourSteps && stepData.tourSteps.length > 0) {
                                setTimeout(() => {
                                    startLessonTour(stepData.tourSteps);
                                }, 300);
                            } else if (stepData.highlightLines && stepData.highlightLines.length > 0) {
                                setTimeout(() => {
                                    const decorations = stepData.highlightLines.map(line => ({
                                        range: new window.monaco.Range(line, 1, line, 1),
                                        options: { isWholeLine: true, className: 'bg-blue-500/30 border-l-4 border-blue-500' }
                                    }));
                                    window.lessonMainMonacoEditor.deltaDecorations([], decorations);
                                }, 100);
                            }
                        });
                    }
                }, 100);
            } else {
                // Solo diálogo
                codePanel.classList.add('hidden');
                codePanel.classList.remove('flex');
                dialogPanel.classList.replace('lg:w-1/2', 'lg:w-full');
            }
        } else {
            // Formato Viejo (Fallback para Nivel 2-20)
            codePanel.classList.add('hidden');
            codePanel.classList.remove('flex');
            dialogPanel.classList.replace('lg:w-1/2', 'lg:w-full');
            
            lessonContent.innerHTML = stepData.content;
            
            // Inicializar bloques viejos
            setTimeout(() => {
                initializeCodeBlockMonaco();
                Prism.highlightAll();
                
                const consoles = document.querySelectorAll('#lesson-content [data-code-base64], #lesson-content [data-code]');
                consoles.forEach(div => {
                    if (div.dataset.codeBase64) {
                         createInteractiveConsole(div.dataset.codeBase64, div.id, true);
                    } else if (div.dataset.code) {
                        createInteractiveConsole(div.dataset.code, div.id, false);
                    }
                });
            }, 50);
        }

        // 4. Animación de Entrada
        dialogPanel.style.opacity = '1';
        dialogPanel.style.transform = 'translateY(0)';

    }, 150); // Timeout para permitir render reflow

    // 5. Actualizar barra de progreso y botones
    document.getElementById('lesson-step').textContent = `${currentLessonStep + 1} / ${levelData.lesson.length}`;
    const progress = ((currentLessonStep + 1) / levelData.lesson.length) * 100;
    document.getElementById('lesson-progress').style.width = `${progress}%`;
    
    document.getElementById('prev-btn').disabled = currentLessonStep === 0;
    
    const nextBtn = document.getElementById('next-btn');
    if (currentLessonStep === levelData.lesson.length - 1) {
        nextBtn.innerHTML = `Iniciar Quiz <i data-lucide="zap" class="w-4 h-4 ml-2"></i>`;
    } else {
        nextBtn.innerHTML = `Siguiente <i data-lucide="arrow-right" class="w-4 h-4 ml-2"></i>`;
    }
    
    setTimeout(() => {
        lucide.createIcons();
        if(window.initializeClickToPlace) initializeClickToPlace();
    }, 200);
}

function startQuiz() {
    currentQuizQuestion = 0;
    score = 0;
    renderQuizQuestion();
    showPanel('quiz');
    // Bloquear chat durante el quiz
    document.getElementById('chat-modal').classList.add('hidden');
    document.getElementById('chat-toggle-btn').style.display = 'none';
}

function renderQuizQuestion() {
    const levelData = courseData[currentLevel];
    const questionData = levelData.quiz[currentQuizQuestion];
    currentQuizData = questionData;
    currentQuizType = questionData.type;

    document.getElementById('quiz-level-title').textContent = `Quiz - Nivel ${currentLevel + 1}`;
    document.getElementById('quiz-progress').textContent = `${currentQuizQuestion + 1}/${levelData.quiz.length}`;
    document.getElementById('quiz-question').textContent = questionData.question;

    // Actualizar indicador de tipo de pregunta
    const typeNames = {
        "multiple-choice": "Selección múltiple",
    };
    document.getElementById('quiz-type-indicator').textContent = typeNames[currentQuizType] || "Pregunta";

    // Ocultar todos los contenedores primero
    document.querySelectorAll('#quiz-content > div').forEach(container => {
        container.classList.add('hidden');
    });

    // Limpiar respuestas anteriores
    userAnswers = {};
    foundErrors = [];
    document.getElementById('quiz-feedback').classList.add('hidden');

    // Mostrar el contenedor adecuado según el tipo de pregunta
    renderMultipleChoice();


    // Configurar botones
    document.getElementById('quiz-hint-btn').onclick = showHint;
}

function renderMultipleChoice() {
    const container = document.getElementById('multiple-choice-container');
    container.classList.remove('hidden');
    container.innerHTML = '';

    // Crear letras fijas en orden a, b, c, d
    const letters = ['a', 'b', 'c', 'd'];

    // Barajar las opciones antes de asignarlas a las letras
    const shuffledOptions = [...currentQuizData.options].sort(() => Math.random() - 0.5);

    // Crear opciones con letras fijas pero contenido aleatorio
    letters.forEach((letter, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = `${letter}) ${shuffledOptions[index]}`;
        optionButton.className = 'quiz-option p-4 rounded-lg text-left';
        optionButton.dataset.answer = shuffledOptions[index];
        optionButton.dataset.isCorrect = shuffledOptions[index] === currentQuizData.answer ? 'true' : 'false';
        optionButton.onclick = () => {
            // Verificar si la respuesta es correcta y actualizar el score
            if (optionButton.dataset.isCorrect === 'true') {
                score++;
            }
            // Avanzar a la siguiente pregunta
            currentQuizQuestion++;
            if (currentQuizQuestion < courseData[currentLevel].quiz.length) {
                renderQuizQuestion();
            } else {
                showResults();
            }
        };
        container.appendChild(optionButton);
    });
}

function renderCodeCompletion() {
    const container = document.getElementById('code-completion-container');
    container.classList.remove('hidden');

    // Configurar el código con inputs
    document.getElementById('code-completion-code').innerHTML = currentQuizData.code;

    // Agregar event listeners a los inputs
    setTimeout(() => {
        document.querySelectorAll('.code-input').forEach(input => {
            const inputElement = document.createElement('input');
            inputElement.type = 'text';
            inputElement.className = 'code-completion-input';
            inputElement.dataset.answer = input.dataset.answer;
            inputElement.addEventListener('input', function() {
                userAnswers[input.dataset.answer] = this.value;
            });
            input.parentNode.replaceChild(inputElement, input);
        });
    }, 100);
}

function renderDragDrop() {
    const container = document.getElementById('drag-drop-container');
    container.classList.remove('hidden');

    // Barajar opciones
    const shuffledOptions = [...currentQuizData.options].sort(() => Math.random() - 0.5);

    // Crear área de opciones
    const optionsArea = document.createElement('div');
    optionsArea.className = 'drag-drop-options';
    optionsArea.innerHTML = '<h4 class="text-sm font-semibold mb-2">Opciones:</h4>';

    shuffledOptions.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.className = 'drag-option';
        optionElement.textContent = option;
        optionElement.draggable = true;
        optionElement.addEventListener('dragstart', handleDragStart);
        optionsArea.appendChild(optionElement);
    });

    // Crear área de destino
    const targetsArea = document.createElement('div');
    targetsArea.className = 'drag-drop-targets';
    targetsArea.innerHTML = '<h4 class="text-sm font-semibold mb-2">Arrastra aquí en orden:</h4>';

    currentQuizData.correctOrder.forEach(() => {
        const targetElement = document.createElement('div');
        targetElement.className = 'drag-target';
        targetElement.addEventListener('dragover', handleDragOver);
        targetElement.addEventListener('drop', handleDrop);
        targetsArea.appendChild(targetElement);
    });

    // Limpiar y agregar elementos
    container.innerHTML = '';
    container.appendChild(optionsArea);
    container.appendChild(targetsArea);
}

function handleDragStart(e) {
    e.dataTransfer.setData('text/plain', e.target.textContent);
}

function handleDragOver(e) {
    e.preventDefault();
}

function handleDrop(e) {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    const target = e.target.closest('.drag-target');

    if (target && !target.querySelector('.drag-option')) {
        const optionElement = document.createElement('div');
        optionElement.className = 'drag-option';
        optionElement.textContent = data;
        optionElement.draggable = false;
        target.appendChild(optionElement);
        target.classList.add('occupied');

        // Guardar respuesta
        const targetIndex = Array.from(target.parentNode.children).indexOf(target);
        userAnswers[targetIndex] = data;
    }
}

function renderMatching() {
    const container = document.getElementById('matching-container');
    container.classList.remove('hidden');
    container.innerHTML = '';

    // Barajar pares
    const shuffledPairs = [...currentQuizData.pairs].sort(() => Math.random() - 0.5);

    // Crear columnas
    const conceptsColumn = document.createElement('div');
    const descriptionsColumn = document.createElement('div');

    conceptsColumn.innerHTML = '<h4 class="text-sm font-semibold mb-2">Conceptos:</h4>';
    descriptionsColumn.innerHTML = '<h4 class="text-sm font-semibold mb-2">Descripciones:</h4>';

    shuffledPairs.forEach(pair => {
        const conceptElement = document.createElement('div');
        conceptElement.className = 'matching-item';
        conceptElement.textContent = pair.concept;
        conceptElement.dataset.concept = pair.concept;
        conceptElement.addEventListener('click', () => selectMatchingItem(conceptElement, 'concept'));
        conceptsColumn.appendChild(conceptElement);

        const descriptionElement = document.createElement('div');
        descriptionElement.className = 'matching-item';
        descriptionElement.textContent = pair.description;
        descriptionElement.dataset.concept = pair.concept;
        descriptionElement.addEventListener('click', () => selectMatchingItem(descriptionElement, 'description'));
        descriptionsColumn.appendChild(descriptionElement);
    });

    container.appendChild(conceptsColumn);
    container.appendChild(descriptionsColumn);
}

let selectedConcept = null;
let selectedDescription = null;

function selectMatchingItem(element, type) {
    if (type === 'concept') {
        // Deseleccionar concepto anterior
        if (selectedConcept) {
            selectedConcept.classList.remove('selected');
        }

        selectedConcept = element;
        element.classList.add('selected');
    } else {
        // Deseleccionar descripción anterior
        if (selectedDescription) {
            selectedDescription.classList.remove('selected');
        }

        selectedDescription = element;
        element.classList.add('selected');
    }

    // Si ambos están seleccionados, verificar si coinciden
    if (selectedConcept && selectedDescription) {
        if (selectedConcept.dataset.concept === selectedDescription.dataset.concept) {
            // Coinciden - marcarlos como emparejados
            selectedConcept.classList.remove('selected');
            selectedConcept.classList.add('matched');
            selectedDescription.classList.remove('selected');
            selectedDescription.classList.add('matched');

            // Guardar emparejamiento
            userAnswers[selectedConcept.dataset.concept] = true;

            // Resetear selección
            selectedConcept = null;
            selectedDescription = null;
        } else {
            // No coinciden - quitar selección después de un breve momento
            setTimeout(() => {
                selectedConcept.classList.remove('selected');
                selectedDescription.classList.remove('selected');
                selectedConcept = null;
                selectedDescription = null;
            }, 1000);
        }
    }
}

function renderOrdering() {
    const container = document.getElementById('ordering-container');
    container.classList.remove('hidden');
    container.innerHTML = '';

    // Barajar pasos
    const shuffledSteps = [...currentQuizData.steps].sort(() => Math.random() - 0.5);

    shuffledSteps.forEach(step => {
        const stepElement = document.createElement('div');
        stepElement.className = 'ordering-item';
        stepElement.draggable = true;
        stepElement.dataset.step = step;

        const handleElement = document.createElement('div');
        handleElement.className = 'ordering-handle';
        handleElement.innerHTML = '<i data-lucide="grip-vertical"></i>';

        stepElement.appendChild(handleElement);
        stepElement.appendChild(document.createTextNode(step));

        stepElement.addEventListener('dragstart', handleOrderingDragStart);
        stepElement.addEventListener('dragover', handleOrderingDragOver);
        stepElement.addEventListener('drop', handleOrderingDrop);
        stepElement.addEventListener('dragend', handleOrderingDragEnd);

        container.appendChild(stepElement);
    });

    setTimeout(() => lucide.createIcons(), 100);
}

let draggedElement = null;

function handleOrderingDragStart(e) {
    draggedElement = e.target;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.outerHTML);
    e.target.classList.add('dragging');
}

function handleOrderingDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';

    const target = e.target.closest('.ordering-item');
    if (target && target !== draggedElement) {
        const rect = target.getBoundingClientRect();
        const next = (e.clientY - rect.top) / (rect.bottom - rect.top) > 0.5;
        container.insertBefore(draggedElement, next ? target.nextSibling : target);
    }
}

function handleOrderingDrop(e) {
    e.preventDefault();
}

function handleOrderingDragEnd(e) {
    e.target.classList.remove('dragging');

    // Guardar orden actual
    userAnswers.order = Array.from(document.querySelectorAll('.ordering-item')).map(item => item.dataset.step);
}

function renderErrorFinding() {
    const container = document.getElementById('error-finding-container');
    container.classList.remove('hidden');

    // Crear contenedor de código con áreas clickeables para errores
    const codeContainer = document.createElement('div');
    codeContainer.className = 'error-code';

    // Dividir el código en líneas
    const lines = currentQuizData.code.split('\n');

    lines.forEach((line, lineIndex) => {
        const lineElement = document.createElement('div');
        lineElement.className = 'flex';

        // Número de línea
        const lineNumber = document.createElement('div');
        lineNumber.className = 'w-8 text-right pr-2 text-gray-500 select-none';
        lineNumber.textContent = lineIndex + 1;
        lineElement.appendChild(lineNumber);

        // Contenido de la línea
        const lineContent = document.createElement('div');
        lineContent.className = 'flex-1 relative';
        lineContent.innerHTML = `<code class="language-python">${line}</code>`;

        // Agregar áreas clickeables para errores en esta línea
        currentQuizData.errors.forEach(error => {
            if (error.line === lineIndex + 1) {
                const errorSpot = document.createElement('div');
                errorSpot.className = 'error-spot';
                errorSpot.style.left = `${error.start}ch`;
                errorSpot.style.width = `${error.end - error.start}ch`;
                errorSpot.style.height = '1.2em';
                errorSpot.style.top = '0';
                errorSpot.dataset.description = error.description;
                errorSpot.addEventListener('click', () => markErrorFound(errorSpot, error.description));
                lineContent.appendChild(errorSpot);
            }
        });

        lineElement.appendChild(lineContent);
        codeContainer.appendChild(lineElement);
    });

    container.innerHTML = '';
    container.appendChild(codeContainer);

    // Resaltar sintaxis
    setTimeout(() => Prism.highlightAll(), 100);
}

function markErrorFound(errorSpot, description) {
    if (!errorSpot.classList.contains('found')) {
        errorSpot.classList.add('found');
        foundErrors.push(description);
        userAnswers.foundErrors = foundErrors;
    }
}

function showHint() {
    let hint = "";

    switch(currentQuizType) {
        case "multiple-choice":
            hint = "Lee cuidadosamente todas las opciones antes de seleccionar una.";
            break;
        case "code-completion":
            hint = "Piensa en qué función o palabra clave falta para que el código funcione correctamente.";
            break;
        case "drag-drop":
            hint = "Recuerda la sintaxis básica de Python para formar sentencias válidas.";
            break;
        case "matching":
            hint = "Haz clic primero en un concepto y luego en su descripción correspondiente.";
            break;
        case "ordering":
            hint = "Piensa en el orden lógico de los pasos para ejecutar un programa Python.";
            break;
        case "error-finding":
            hint = "Busca errores comunes como tipos de datos incorrectos o sintaxis mal formada.";
            break;
    }

    alert(hint);
}

function checkAnswer() {
    let isCorrect = false;
    const feedback = document.getElementById('quiz-feedback');

    switch(currentQuizType) {
        case "multiple-choice":
            isCorrect = userAnswers.selected === currentQuizData.answer;
            break;
        case "code-completion":
            isCorrect = Object.values(userAnswers).includes(currentQuizData.answer);
            break;
        case "drag-drop":
            const userOrder = Object.values(userAnswers);
            isCorrect = JSON.stringify(userOrder) === JSON.stringify(currentQuizData.correctOrder);
            break;
        case "matching":
            isCorrect = Object.keys(userAnswers).length === currentQuizData.pairs.length;
            break;
        case "ordering":
            isCorrect = JSON.stringify(userAnswers.order) === JSON.stringify(currentQuizData.correctOrder);
            break;
        case "error-finding":
            isCorrect = foundErrors.length === currentQuizData.errors.length;
            break;
    }

    // Mostrar feedback
    feedback.textContent = isCorrect ?
        "¡Correcto! " + (currentQuizData.explanation || "Buen trabajo.") :
        "Incorrecto. " + (currentQuizData.explanation || "Inténtalo de nuevo.");
    feedback.className = `quiz-feedback ${isCorrect ? 'correct' : 'incorrect'}`;
    feedback.classList.remove('hidden');

    // Si es correcto, avanzar después de un breve retraso
    if (isCorrect) {
        setTimeout(() => {
            currentQuizQuestion++;
            if (currentQuizQuestion < courseData[currentLevel].quiz.length) {
                renderQuizQuestion();
            } else {
                showResults();
            }
        }, 2000);
    }
}

function showResults() {
    const totalQuestions = courseData[currentLevel].quiz.length;
    const passed = score >= (totalQuestions * 0.7);
    const percentage = Math.round((score / totalQuestions) * 100);

    // Save Score logic
    if (userProgress.quizScores === undefined) userProgress.quizScores = {};
    if (userProgress.quizScores[currentLevel] === undefined || score > userProgress.quizScores[currentLevel]) {
        userProgress.quizScores[currentLevel] = score;
        saveProgress();
        // Guardar quizScores para leaderboard
        saveQuizScore(score, courseData[currentLevel].quiz.length, COURSE_ID, currentLevel + 1);
        // Mostrar challenge si corresponde
        checkAndShowChallenge(currentLevel, challengeMap);
    }

    const resultsTitle = document.getElementById('results-title');
    const resultsScore = document.getElementById('results-score');
    const resultsMessage = document.getElementById('results-message');
    const resultsIcon = document.getElementById('results-icon');
    const nextLevelBtn = document.getElementById('next-level-btn');
    const challengeBtn = document.getElementById('code-challenge-btn');

    resultsScore.textContent = `Puntuación: ${score}/${totalQuestions} (${percentage}%)`;

    if (passed) {
        resultsTitle.textContent = '¡Felicidades!';
        resultsTitle.style.color = 'var(--green)';
        resultsMessage.textContent = 'Has aprobado el cuestionario.';
        resultsIcon.setAttribute('data-lucide', 'award');
        resultsIcon.style.color = 'var(--green)';

        // La lógica de checkAndShowChallenge en course_system.js se encarga del botón
        if (!challengeMap[currentLevel]) {
            challengeBtn.classList.add('hidden');
            nextLevelBtn.classList.remove('hidden');
            markLevelCompleted(currentLevel);
        }

    } else {
        resultsTitle.textContent = '¡Inténtalo de nuevo!';
        resultsTitle.style.color = 'var(--red)';
        resultsMessage.textContent = 'Necesitas al menos 70% para aprobar.';
        resultsIcon.setAttribute('data-lucide', 'refresh-cw');
        resultsIcon.style.color = 'var(--red)';
        nextLevelBtn.classList.add('hidden');
        challengeBtn.classList.add('hidden');
    }
    
    lucide.createIcons();
    showPanel('results');
    
    // Desbloquear chat después del quiz (Removed)
    // document.getElementById('chat-toggle-btn').style.display = 'block';
}

// Event Listeners
document.getElementById('next-btn').addEventListener('click', () => { 
    if (currentLessonStep < courseData[currentLevel].lesson.length - 1) { 
        currentLessonStep++; 
        renderLesson(); 
    } else { 
        startQuiz(); 
    } 
});

document.getElementById('prev-btn').addEventListener('click', () => { 
    if (currentLessonStep > 0) { 
        currentLessonStep--; 
        renderLesson(); 
    } 
});

document.getElementById('close-lesson-btn').addEventListener('click', () => { 
    renderLevelSelection(); 
    showPanel('levelSelection'); 
});

document.getElementById('retry-lesson-btn').addEventListener('click', () => startLevel(currentLevel));

document.getElementById('next-level-btn').addEventListener('click', () => {
    if (currentLevel + 1 < courseData.length) {
        startLevel(currentLevel + 1);
    } else {
        renderLevelSelection();
        showPanel('levelSelection');
    }
});



// Elemento 'close-practice-btn' no existe en el HTML - comentado para evitar error
// document.getElementById('close-practice-btn').addEventListener('click', () => {
//     renderLevelSelection();
//     showPanel('levelSelection');
// });

// Theme toggle
document.getElementById('theme-toggle').addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    const icon = document.querySelector('#theme-toggle i');
    icon.setAttribute('data-lucide', isDark ? 'sun' : 'moon');
    lucide.createIcons();
});

// Chat functionality removed


// Error finding functionality
function initializeErrorFinding() {
    // Check if elements exist before adding event listeners
    const giveUpBtn1 = document.getElementById('give-up-1');
    const giveUpBtn2 = document.getElementById('give-up-2');
    
    if (giveUpBtn1) {
        giveUpBtn1.addEventListener('click', () => {
            const solution1 = document.getElementById('solution-1');
            if (solution1) {
                solution1.classList.remove('hidden');
            }
        });
    }
    
    if (giveUpBtn2) {
        giveUpBtn2.addEventListener('click', () => {
            const solution2 = document.getElementById('solution-2');
            if (solution2) {
                solution2.classList.remove('hidden');
            }
        });
    }
}

function getErrorsForBlock(blockId) {
    const errorMap = {
        'error-code-1': ['input("Ingresa tu edad: ")', '"Hola {nombre}, tienes {edad} años!"'],
        'error-code-2': ['input("Primer número: ")', 'input("Segundo número: ")', 'if num1 > num2', 'else num2 > num1:']
    };
    return errorMap[blockId] || [];
}

function checkAllErrorsFound(blockId) {
    // Track found errors and update counter
    const errorCounts = {
        'error-code-1': 2,
        'error-code-2': 4
    };

    // In a real implementation, track which errors have been found
    // For now, just show encouragement
    setTimeout(() => {
        alert('¡Bien! Has encontrado un error. Sigue buscando los demás.');
        updateCommandCounter(blockId);
    }, 500);
}

function updateCommandCounter(blockId) {
    const counterMap = {
        'error-code-1': 'command-counter-1',
        'error-code-2': 'command-counter-2'
    };

    const counterElement = document.getElementById(counterMap[blockId]);
    if (counterElement) {
        // Simulate finding errors - in real implementation, track actual found errors
        const current = parseInt(counterElement.textContent.split(':')[1].split('/')[0]);
        if (current < parseInt(counterElement.textContent.split('/')[1])) {
            counterElement.textContent = `Usados: ${current + 1}/${counterElement.textContent.split('/')[1]}`;
        }
    }
}

// Code completion functionality
function initializeCodeCompletion() {
    // Initialize click-to-place for fill exercises
    initializeClickToPlace();
}

let selectedCommand = null;

function initializeClickToPlace() {
    // Remove existing event listeners to avoid duplicates
    document.querySelectorAll('.command-item').forEach(item => {
        item.removeEventListener('click', handleCommandSelect);
        item.addEventListener('click', handleCommandSelect);
    });

    // Make drop zones clickable for placement
    document.querySelectorAll('.drop-zone').forEach(zone => {
        zone.removeEventListener('click', handleZoneClick);
        zone.addEventListener('click', handleZoneClick);
    });

    // Reset buttons - only add if they exist
    const resetBtn1 = document.getElementById('reset-fill-1');
    const resetBtn2 = document.getElementById('reset-fill-2');
    if (resetBtn1) {
        resetBtn1.removeEventListener('click', () => resetFill(1));
        resetBtn1.addEventListener('click', () => resetFill(1));
    }
    if (resetBtn2) {
        resetBtn2.removeEventListener('click', () => resetFill(2));
        resetBtn2.addEventListener('click', () => resetFill(2));
    }
}

function handleCommandSelect(e) {
    // Remove previous selection
    document.querySelectorAll('.command-item.selected').forEach(item => {
        item.classList.remove('selected');
    });

    // Select this command
    selectedCommand = e.target.dataset.command;
    e.target.classList.add('selected');

    // Add visual feedback - command follows mouse
    document.addEventListener('mousemove', followMouse);
}

function followMouse(e) {
    if (selectedCommand) {
        const selectedElement = document.querySelector('.command-item.selected');
        if (selectedElement) {
            // Create floating element that follows mouse
            let floatingElement = document.getElementById('floating-command');
            if (!floatingElement) {
                floatingElement = document.createElement('div');
                floatingElement.id = 'floating-command';
                floatingElement.className = 'fixed bg-blue-500 text-white px-3 py-1 rounded shadow-lg pointer-events-none z-50';
                floatingElement.textContent = selectedCommand;
                document.body.appendChild(floatingElement);
            }
            floatingElement.style.left = (e.clientX + 10) + 'px';
            floatingElement.style.top = (e.clientY + 10) + 'px';
        }
    }
}

function handleZoneClick(e) {
    if (selectedCommand && !e.currentTarget.dataset.value) {
        const dropZone = e.currentTarget;

        // Clear previous content
        dropZone.textContent = '';

        // Add the command
        const commandSpan = document.createElement('span');
        commandSpan.textContent = selectedCommand;
        commandSpan.className = 'bg-blue-500 text-white px-2 py-1 rounded text-sm';
        dropZone.appendChild(commandSpan);

        // Store the value
        dropZone.dataset.value = selectedCommand;

        // Hide the selected item
        const selectedItem = document.querySelector('.command-item.selected');
        if (selectedItem) {
            selectedItem.style.display = 'none';
            selectedItem.classList.remove('selected');
        }

        // Remove floating element
        const floatingElement = document.getElementById('floating-command');
        if (floatingElement) {
            floatingElement.remove();
        }

        // Clear selection
        selectedCommand = null;
        document.removeEventListener('mousemove', followMouse);
    }
}

function resetFill(exerciseNum) {
    // Reset drop zones
    document.querySelectorAll(`#practice-content .drop-zone`).forEach(zone => {
        zone.textContent = '';
        zone.dataset.value = '';
        zone.style.backgroundColor = '';
    });

    // Show all command items
    document.querySelectorAll('.command-item').forEach(item => {
        item.style.display = 'inline-block';
        item.style.opacity = '1';
    });

    // Reset feedback
    const feedback = document.getElementById(`fill-feedback-${exerciseNum}`);
    feedback.innerHTML = '';

    // Reset counter
    const counterElement = document.getElementById(`command-counter-fill-${exerciseNum}`);
    if (counterElement) {
        counterElement.textContent = `Completados: 0/${counterElement.textContent.split('/')[1]}`;
    }
}

function checkFill(exerciseNum) {
    const answers = {
        1: ['input', 'int', 'input', 'f'],
        2: ['float', 'input', 'float', 'input', 'f', 'if', 'f', 'elif', 'f', 'else']
    };

    const correct = answers[exerciseNum];
    let allCorrect = true;
    const feedback = document.getElementById(`fill-feedback-${exerciseNum}`);

    // Check drop zones instead of inputs
    const dropZones = document.querySelectorAll(`#practice-content .drop-zone`);
    dropZones.forEach((zone, index) => {
        const value = zone.dataset.value || '';
        if (value === correct[index]) {
            zone.style.borderColor = 'green';
            zone.style.backgroundColor = 'rgba(158, 206, 106, 0.1)';
        } else {
            zone.style.borderColor = 'red';
            zone.style.backgroundColor = 'rgba(247, 118, 142, 0.1)';
            allCorrect = false;
        }
    });

    if (allCorrect) {
        feedback.innerHTML = '<span style="color: green;">¡Excelente! Todos los huecos están correctos.</span>';
        updateFillCounter(exerciseNum, true);
    } else {
        feedback.innerHTML = '<span style="color: red;">Algunos huecos están incorrectos. Revisa y vuelve a intentar.</span>';
        updateFillCounter(exerciseNum, false);
    }
}

function updateFillCounter(exerciseNum, success) {
    const counterElement = document.getElementById(`command-counter-fill-${exerciseNum}`);
    if (counterElement) {
        const total = parseInt(counterElement.textContent.split('/')[1]);
        let current = parseInt(counterElement.textContent.split(':')[1].split('/')[0]);
        if (success && current < total) {
            current = total; // Mark as completed when all correct
        }
        counterElement.textContent = `Completados: ${current}/${total}`;
    }
}

// ========================================
// CONSOLA INTERACTIVA DE PYTHON CON MONACO EDITOR
// ========================================

let pyodide = null;
let pyodideReady = false;
let currentInputResolver = null;
window.monacoEditors = {}; // Store editor instances
let monacoRequireConfigured = false;

// Inicializar Pyodide
async function initPyodide() {
    if (pyodideReady) return;
    
    try {
        console.log('🐍 Inicializando Pyodide...');
        pyodide = await loadPyodide({
            indexURL: "https://cdn.jsdelivr.net/pyodide/v0.24.1/full/"
        });
        pyodideReady = true;
        console.log('✅ Pyodide listo!');
    } catch (error) {
        console.error('❌ Error al cargar Pyodide:', error);
    }
}

// Crear componente de consola interactiva con Monaco
function createInteractiveConsole(codeOrBase64, containerId, isBase64 = false) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let code = codeOrBase64;
    if (isBase64) {
        try {
            code = atob(codeOrBase64);
        } catch (e) {
            console.error("Error decoding Base64 code:", e);
            code = "# Error cargando código base";
        }
    }

    const consoleHTML = `
        <div class="python-interactive-container grid grid-cols-1 lg:grid-cols-2 gap-4 h-[500px]">
            <!-- Panel de Código (Monaco) -->
            <div class="code-display-panel flex flex-col h-full border-r border-gray-700/50">
                <div class="code-display-header flex justify-between items-center p-2 bg-gray-900/50">
                    <div class="flex items-center gap-2">
                        <div class="dots flex gap-1">
                            <span class="dot w-3 h-3 rounded-full bg-red-500"></span>
                            <span class="dot w-3 h-3 rounded-full bg-yellow-500"></span>
                            <span class="dot w-3 h-3 rounded-full bg-green-500"></span>
                        </div>
                        <span class="text-xs font-bold text-gray-400 ml-2">main.py</span>
                    </div>
                    <span class="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded border border-gray-700">Read Only</span>
                </div>
                <!-- Container para Monaco -->
                <div id="monaco-${containerId}" class="flex-1 w-full min-h-0 overflow-hidden"></div>
            </div>

            <!-- Panel de Consola -->
            <div class="console-panel flex flex-col h-full bg-[#1a1b26]">
                <div class="console-header flex justify-between items-center p-2 border-b border-gray-700/50">
                    <div class="title flex items-center gap-2 text-gray-300 text-sm font-mono">
                        <i data-lucide="terminal" class="w-4 h-4"></i>
                        Terminal
                    </div>
                    <div class="console-controls flex gap-2">
                         <button class="console-btn console-btn-run flex items-center gap-1 px-3 py-1 bg-green-600 hover:bg-green-700 text-white rounded text-xs transition-colors" onclick="runPythonCode('${containerId}')">
                            <i data-lucide="play" class="w-3 h-3"></i>
                            Ejecutar
                        </button>
                        <button class="console-btn console-btn-clear p-1 hover:bg-gray-700 rounded text-gray-400 transition-colors" onclick="clearConsole('${containerId}')" title="Limpiar">
                            <i data-lucide="trash-2" class="w-4 h-4"></i>
                        </button>
                    </div>
                </div>
                <div class="console-output flex-1 p-4 overflow-y-auto font-mono text-sm" id="${containerId}-output">
                    <div class="console-line info text-gray-500">>>> Esperando ejecución...</div>
                </div>
                <div class="console-input-prompt hidden flex items-center p-2 border-t border-gray-700/50 bg-gray-900/30" id="${containerId}-input-prompt">
                    <span class="text-yellow-500 mr-2 font-mono">>>></span>
                    <input type="text" class="console-input-field bg-transparent border-none outline-none text-white w-full font-mono text-sm" id="${containerId}-input" placeholder="Escribe aquí..." />
                </div>
            </div>
        </div>
    `;

    container.innerHTML = consoleHTML;
    
    if (window.lucide) lucide.createIcons();

    // Setup input handler
    const inputField = document.getElementById(`${containerId}-input`);
    if (inputField) {
        // Evitar duplicados usando flag en dataset en lugar de clonar
        if (inputField.dataset.listenerAttached === 'true') {
            return;
        }
        
        inputField.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const value = inputField.value;
                console.log(`[Python Console] Input submitted for ${containerId}: "${value}"`);
                
                // Usar resolver específico del contenedor
                if (window.consoleInputResolvers && window.consoleInputResolvers[containerId]) {
                    window.consoleInputResolvers[containerId](value);
                    delete window.consoleInputResolvers[containerId];
                } else {
                    console.warn(`[Python Console] No resolver found for ${containerId}. Input ignored.`);
                }
                
                inputField.value = '';
                document.getElementById(`${containerId}-input-prompt`).classList.add('hidden');
            }
        });
        
        inputField.dataset.listenerAttached = 'true';
    }

    // Inicializar Monaco Editor
    if (!monacoRequireConfigured) {
        require.config({ paths: { 'vs': 'https://cdnjs.cloudflare.com/ajax/libs/monaco-editor/0.36.1/min/vs' }});
        monacoRequireConfigured = true;
    }
    require(['vs/editor/editor.main'], function() {
        // Define themes first
        if (window.themeManager) window.themeManager.defineCustomThemes();
        
        const user = JSON.parse(localStorage.getItem('currentUser')) || {};
        const userTheme = user.preferredTheme || 'vs-dark';

        const editorElement = document.getElementById(`monaco-${containerId}`);
        if(editorElement) {
             window.monacoEditors[containerId] = monaco.editor.create(editorElement, {
                value: code.trim(),
                language: 'python',
                theme: userTheme, 
                automaticLayout: true,
                minimap: { enabled: true },
                fontSize: 14,
                lineNumbers: 'on',
                renderIndentGuides: true,       
                guides: { indentation: true }, 
                scrollBeyondLastLine: false,
                roundedSelection: true,
                padding: { top: 10 },
                readOnly: true, // USER REQUEST: Prevent modification
                domReadOnly: true // Ensure input is blocked
            });
        }
    });
}

// Ejecutar código Python desde Monaco
// Función para inicializar Monaco Editor en bloques de código estáticos (Ejemplos)
// Convierte los .code-block en editores Monaco con tema Tokyo Night
let codeBlockMonacoInstances = [];
let codeBlockCounter = 0;

function initializeCodeBlockMonaco() {
    if (!window.monaco) return;

    // Obtener todos los bloques de código en la lección actual (los que aún no tienen editor)
    const codeBlocks = document.querySelectorAll('#lesson-content .code-block:not([data-monaco-initialized])');
    
    codeBlocks.forEach((block) => {
        const codeElement = block.querySelector('pre code');
        if (!codeElement) return;
        
        const codeText = codeElement.textContent || codeElement.innerText;
        if (!codeText.trim()) return;

        block.setAttribute('data-monaco-initialized', 'true');

        // Detectar lenguaje
        let language = 'html';
        if (codeElement.className.includes('language-html')) language = 'html';
        else if (codeElement.className.includes('language-css')) language = 'css';
        else if (codeElement.className.includes('language-javascript')) language = 'javascript';

        // Crear ID único
        const uniqueId = `code-block-monaco-${codeBlockCounter++}`;
        
        // Calcular altura basada en líneas
        const lines = codeText.split('\n').length;
        const height = Math.min(Math.max(lines * 22 + 20, 100), 500);

        // Limpiar contenedor pero mantener referencia
        block.innerHTML = '';
        
        // Contenedor principal estilizado
        const container = document.createElement('div');
        container.className = 'code-block-monaco-wrapper';
        container.style.cssText = 'border-radius: 12px; overflow: hidden; margin-top: 1rem; border: 1px solid #414868; box-shadow: 0 4px 12px rgba(0,0,0,0.3);';

        // Header estilo Tokyo Night
        const header = document.createElement('div');
        header.className = 'code-block-header';
        header.style.cssText = 'display: flex; justify-content: space-between; align-items: center; padding: 0.75rem 1rem; background: linear-gradient(135deg, #24283b 0%, #1a1b26 100%); border-bottom: 1px solid #414868;';
        header.innerHTML = `
            <div class="flex items-center gap-2">
                <span class="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                <span class="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                <span class="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                <span class="text-xs text-gray-400 ml-2 font-mono">${language === 'python' ? 'index.html' : language === 'html' ? 'index.html' : 'code.' + language}</span>
            </div>
            <span class="text-xs text-gray-500 bg-gray-800 px-2 py-1 rounded border border-gray-700">Preview</span>
        `;

        const monacoContainer = document.createElement('div');
        monacoContainer.id = uniqueId;
        monacoContainer.style.cssText = `width: 100%; height: ${height}px;`;

        container.appendChild(header);
        container.appendChild(monacoContainer);
        block.appendChild(container);

        const editor = monaco.editor.create(monacoContainer, {
            value: codeText.trim(),
            language: language,
            theme: 'tokyo-night',
            readOnly: true,
            domReadOnly: true,
            minimap: { enabled: false },
            fontSize: 14,
            fontFamily: "'JetBrains Mono', monospace",
            lineNumbers: 'on',
            scrollBeyondLastLine: false,
            padding: { top: 10, bottom: 10 }
        });

        codeBlockMonacoInstances.push(editor);
    });
}

// Re-inicializar los bloques de código cuando se cambia de paso
const originalRenderLesson = typeof renderLesson === 'function' ? renderLesson : null;
if (originalRenderLesson) {
    window.renderLesson = function() {
        // Limpiar instancias anteriores para liberar memoria
        codeBlockMonacoInstances.forEach(editor => {
            if (editor && typeof editor.dispose === 'function') editor.dispose();
        });
        codeBlockMonacoInstances = [];
        
        originalRenderLesson.apply(this, arguments);
        setTimeout(initializeCodeBlockMonaco, 100);
    };
}

async function runPythonCode(containerId) {
    const outputDiv = document.getElementById(`${containerId}-output`);
    const runBtn = document.querySelector(`#${containerId} .console-btn-run`);
    
    if (!outputDiv || !runBtn) return;

    if (!pyodideReady) {
        outputDiv.innerHTML = '<div class="console-loading"><div class="spinner"></div> Cargando...</div>';
        runBtn.disabled = true;
        await initPyodide();
        runBtn.disabled = false;
    }

    const editor = window.monacoEditors[containerId];
    if (!editor) return;
    const code = editor.getValue();

    outputDiv.innerHTML = '<div class="console-line info">🚀 Ejecutando...</div>';

    try {
        // Setup output redirect
        pyodide.globals.set('print_output', (text, is_prompt = false) => {
            const line = document.createElement('div');
            line.className = `console-line ${is_prompt ? 'input' : 'output'}`;
            line.textContent = text;
            outputDiv.appendChild(line);
            outputDiv.scrollTop = outputDiv.scrollHeight;
        });

        // Setup input resolver
        pyodide.globals.set('js_get_input', (prompt) => {
            return getUserInput(containerId, prompt);
        });

        // Pre-configure Python environment
        await pyodide.runPythonAsync(`
import sys
import builtins

class CustomStdout:
    def write(self, text):
        if text.strip(): print_output(text)
    def flush(self): pass

sys.stdout = CustomStdout()
sys.stderr = CustomStdout()

async def async_input(prompt=''):
    if prompt: print_output(prompt, True)
    return await js_get_input(prompt)

builtins.input = async_input
        `);

        // Transform user code to be async-safe
        // We wrap it in a function if it contains 'input' to allow top-level await behavior
        await pyodide.runPythonAsync(code.replace(/\binput\s*\(/g, 'await input('));
        
        const doneLine = document.createElement('div');
        doneLine.className = 'console-line info';
        doneLine.textContent = '✅ Ejecución completada';
        outputDiv.appendChild(doneLine);

    } catch (error) {
        const errorLine = document.createElement('div');
        errorLine.className = 'console-line error';
        errorLine.textContent = `❌ Error: ${error.message}`;
        outputDiv.appendChild(errorLine);
    }
    outputDiv.scrollTop = outputDiv.scrollHeight;
}

// Obtener input del usuario
window.consoleInputResolvers = window.consoleInputResolvers || {};

function getUserInput(containerId, prompt) {
    return new Promise((resolve) => {
        const inputPrompt = document.getElementById(`${containerId}-input-prompt`);
        const inputField = document.getElementById(`${containerId}-input`);
        
        if (!inputPrompt || !inputField) {
            resolve('');
            return;
        }

        inputPrompt.classList.remove('hidden');
        inputPrompt.style.display = 'flex';
        
        setTimeout(() => {
            inputField.focus();
            const outputDiv = document.getElementById(`${containerId}-output`);
            if (outputDiv) outputDiv.scrollTop = outputDiv.scrollHeight;
        }, 50);
        
        window.consoleInputResolvers[containerId] = resolve;
    });
}

// Fin de la lógica de Monaco y Python


</script>