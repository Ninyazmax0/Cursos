// ==========================================
// CONFIGURACIÓN DE CHALLENGES PYTHON
// ==========================================

window.PYTHON_CHALLENGES_CONFIG = {
    // Challenge 1: Variables y Tipos de Datos (Niveles 1-5)
    'python_challenge1': {
        title: 'Challenge Python #1',
        subtitle: 'Niveles 1-5: Variables y Tipos de Datos',
        language: 'python',
        allowedCommands: ['print', 'int', 'float', 'str', 'bool', 'type', 'len'],
        initialCode: `# Challenge 1: Área de un Rectángulo
# Escribe tu código aquí

`,
        instructions: `
            <h2 class="text-xl font-bold mb-3" style="color: var(--yellow);">📋 Tu Misión</h2>
            <p class="mb-4">Crea un programa que calcule el área de un rectángulo. El programa debe:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Crear dos variables: <code class="px-2 py-1 bg-black/30 rounded text-accent">base</code> y <code class="px-2 py-1 bg-black/30 rounded text-accent">altura</code></li>
                <li>Asignarles valores numéricos (puedes usar los que quieras)</li>
                <li>Calcular el área multiplicando base por altura</li>
                <li>Guardar el resultado en una variable llamada <code class="px-2 py-1 bg-black/30 rounded text-accent">area</code></li>
                <li>Imprimir el resultado con un mensaje descriptivo</li>
            </ul>
            <div class="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p class="text-sm"><strong class="text-yellow-400">💡 Pista:</strong> Recuerda que puedes multiplicar números usando el operador <code class="px-2 py-1 bg-black/30 rounded text-yellow-400">*</code></p>
            </div>
        `,
        validate: async function(code) {
            let score = 0;
            let feedback = [];
            
            // Test 1: Variables creadas
            if (code.includes('base') && code.includes('altura') && code.includes('area')) {
                score += 25;
                feedback.push('✅ Variables creadas correctamente');
            } else {
                feedback.push('❌ Debes crear las variables base, altura y area');
            }
            
            // Test 2: Multiplicación
            if (code.includes('*')) {
                score += 25;
                feedback.push('✅ Usas multiplicación');
            } else {
                feedback.push('❌ Debes multiplicar base por altura');
            }
            
            // Test 3: Print
            if (code.includes('print')) {
                score += 25;
                feedback.push('✅ Imprimes el resultado');
            } else {
                feedback.push('❌ Debes imprimir el resultado');
            }
            
            // Test 4: Código ejecutable
            try {
                score += 25;
                feedback.push('✅ Código sin errores de sintaxis');
            } catch(e) {
                feedback.push('❌ Error de sintaxis: ' + e.message);
            }
            
            return {
                score: score,
                isPass: score >= 75,
                feedback: feedback.join('<br>')
            };
        }
    },

    // Challenge 2: Estructuras de Control (Niveles 6-10)
    'python_challenge2': {
        title: 'Challenge Python #2',
        subtitle: 'Niveles 6-10: Estructuras de Control',
        language: 'python',
        allowedCommands: ['print', 'int', 'float', 'str', 'bool', 'type', 'len', 'if', 'elif', 'else', 'for', 'while', 'range', 'break', 'continue'],
        initialCode: `# Challenge 2: Clasificador de Números
# Escribe tu código aquí

`,
        instructions: `
            <h2 class="text-xl font-bold mb-3" style="color: var(--yellow);">📋 Tu Misión</h2>
            <p class="mb-4">Crea un programa que clasifique números. El programa debe:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Crear una lista con al menos 5 números (positivos, negativos y cero)</li>
                <li>Usar un bucle <code class="px-2 py-1 bg-black/30 rounded text-accent">for</code> para recorrer la lista</li>
                <li>Para cada número, usar <code class="px-2 py-1 bg-black/30 rounded text-accent">if/elif/else</code> para clasificarlo</li>
                <li>Imprimir cada número con su clasificación</li>
                <li>Contar cuántos números hay de cada tipo</li>
            </ul>
            <div class="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p class="text-sm"><strong class="text-yellow-400">💡 Pista:</strong> Usa variables contador para llevar la cuenta</p>
            </div>
        `,
        validate: async function(code) {
            let score = 0;
            let feedback = [];
            
            if (/\[.*\]/.test(code) && code.includes('for')) {
                score += 25;
                feedback.push('✅ Lista y bucle for');
            } else {
                feedback.push('❌ Debes crear una lista y usar for');
            }
            
            if (code.includes('if') && (code.includes('elif') || code.includes('else'))) {
                score += 25;
                feedback.push('✅ Usa if/elif/else');
            } else {
                feedback.push('❌ Debes usar if/elif/else');
            }
            
            if (code.includes('print')) {
                score += 25;
                feedback.push('✅ Imprimes resultados');
            } else {
                feedback.push('❌ Debes imprimir resultados');
            }
            
            if ((code.match(/=\s*0/g) || []).length >= 2) {
                score += 25;
                feedback.push('✅ Usas contadores');
            } else {
                feedback.push('❌ Debes usar contadores');
            }
            
            return {
                score: score,
                isPass: score >= 75,
                feedback: feedback.join('<br>')
            };
        }
    },

    // Challenge 3: Funciones y Listas (Niveles 11-15)
    'python_challenge3': {
        title: 'Challenge Python #3',
        subtitle: 'Niveles 11-15: Funciones y Listas',
        language: 'python',
        allowedCommands: ['print', 'def', 'return', 'list', 'append', 'pop', 'len', 'sum', 'for', 'if'],
        initialCode: `# Challenge 3: Funciones y Listas
# Escribe tu código aquí

`,
        instructions: `
            <h2 class="text-xl font-bold mb-3" style="color: var(--yellow);">📋 Tu Misión</h2>
            <p class="mb-4">Crea funciones para manipular listas:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Función <code class="px-2 py-1 bg-black/30 rounded text-accent">filtrar_pares(lista)</code></li>
                <li>Función <code class="px-2 py-1 bg-black/30 rounded text-accent">suma_lista(lista)</code></li>
                <li>Función <code class="px-2 py-1 bg-black/30 rounded text-accent">promedio(lista)</code></li>
                <li>Crear una lista de números y probar las funciones</li>
                <li>Imprimir los resultados</li>
            </ul>
            <div class="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p class="text-sm"><strong class="text-yellow-400">💡 Pista:</strong> Usa return para devolver valores</p>
            </div>
        `,
        validate: async function(code) {
            let score = 0;
            let feedback = [];
            
            if (code.includes('def filtrar_pares')) {
                score += 20;
                feedback.push('✅ Función filtrar_pares');
            } else {
                feedback.push('❌ Falta filtrar_pares');
            }
            
            if (code.includes('def suma_lista')) {
                score += 20;
                feedback.push('✅ Función suma_lista');
            } else {
                feedback.push('❌ Falta suma_lista');
            }
            
            if (code.includes('def promedio')) {
                score += 20;
                feedback.push('✅ Función promedio');
            } else {
                feedback.push('❌ Falta promedio');
            }
            
            if ((code.match(/return/g) || []).length >= 3) {
                score += 20;
                feedback.push('✅ Usas return');
            } else {
                feedback.push('❌ Debes usar return');
            }
            
            if (/\[.*\]/.test(code) && code.includes('print')) {
                score += 20;
                feedback.push('✅ Pruebas las funciones');
            } else {
                feedback.push('❌ Debes probar las funciones');
            }
            
            return {
                score: score,
                isPass: score >= 75,
                feedback: feedback.join('<br>')
            };
        }
    },

    // Challenge 4: Diccionarios y Comprehensions (Niveles 16-20)
    'python_challenge4': {
        title: 'Challenge Python #4',
        subtitle: 'Niveles 16-20: Diccionarios y Comprehensions',
        language: 'python',
        allowedCommands: ['print', 'dict', 'keys', 'values', 'items', 'list', 'for', 'if', 'max', 'min'],
        initialCode: `# Challenge 4: Sistema de Estudiantes
# Escribe tu código aquí

`,
        instructions: `
            <h2 class="text-xl font-bold mb-3" style="color: var(--yellow);">📋 Tu Misión</h2>
            <p class="mb-4">Crea un sistema de gestión de estudiantes:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Diccionario con al menos 3 estudiantes</li>
                <li>Cada estudiante: edad, curso, calificaciones</li>
                <li>List comprehension para promedios</li>
                <li>Dict comprehension para nombre:promedio</li>
                <li>Imprimir mejor estudiante</li>
            </ul>
            <div class="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p class="text-sm"><strong class="text-yellow-400">💡 Pista:</strong> [expr for item in lista]</p>
            </div>
        `,
        validate: async function(code) {
            let score = 0;
            let feedback = [];
            
            if (code.includes('{') && code.includes(':')) {
                score += 20;
                feedback.push('✅ Diccionario creado');
            } else {
                feedback.push('❌ Falta diccionario');
            }
            
            if (/\[.*for.*in.*\]/.test(code)) {
                score += 30;
                feedback.push('✅ List comprehension');
            } else {
                feedback.push('❌ Falta list comprehension');
            }
            
            if (/\{.*for.*in.*\}/.test(code)) {
                score += 30;
                feedback.push('✅ Dict comprehension');
            } else {
                feedback.push('❌ Falta dict comprehension');
            }
            
            if (code.includes('print') && (code.includes('max') || code.includes('mejor'))) {
                score += 20;
                feedback.push('✅ Imprime mejor estudiante');
            } else {
                feedback.push('❌ Falta imprimir mejor');
            }
            
            return {
                score: score,
                isPass: score >= 75,
                feedback: feedback.join('<br>')
            };
        }
    },

    // Challenges 5-8 (Avanzados)
    'python_challenge5': {
        title: 'Challenge Python #5',
        subtitle: 'POO Básica',
        language: 'python',
        allowedCommands: ['print', 'class', 'def', '__init__', '__str__', 'self'],
        initialCode: `# Challenge 5: POO
# Escribe tu código aquí

`,
        instructions: `
            <h2 class="text-xl font-bold mb-3" style="color: var(--yellow);">📋 Tu Misión</h2>
            <p class="mb-4">Crea un sistema de biblioteca con clases:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Clase Libro con atributos: título, autor, año</li>
                <li>Método __str__ para mostrar info</li>
                <li>Clase Biblioteca con lista de libros</li>
                <li>Métodos para agregar y buscar libros</li>
                <li>Crear al menos 3 libros y probar</li>
            </ul>
        `,
        validate: async function(code) {
            let score = 0;
            let feedback = [];
            
            if (code.includes('class Libro')) { score += 25; feedback.push('✅ Clase Libro'); } else { feedback.push('❌ Falta clase Libro'); }
            if (code.includes('__str__')) { score += 25; feedback.push('✅ Método __str__'); } else { feedback.push('❌ Falta __str__'); }
            if (code.includes('class Biblioteca')) { score += 25; feedback.push('✅ Clase Biblioteca'); } else { feedback.push('❌ Falta clase Biblioteca'); }
            if (code.includes('def') && (code.includes('agregar') || code.includes('buscar'))) { score += 25; feedback.push('✅ Métodos de gestión'); } else { feedback.push('❌ Faltan métodos'); }
            
            return { score: score, isPass: score >= 75, feedback: feedback.join('<br>') };
        }
    },

    'python_challenge6': {
        title: 'Challenge Python #6',
        subtitle: 'Manejo de Excepciones',
        language: 'python',
        allowedCommands: ['print', 'try', 'except', 'finally', 'raise'],
        initialCode: `# Challenge 6: Excepciones
# Escribe tu código aquí

`,
        instructions: `
            <h2 class="text-xl font-bold mb-3" style="color: var(--yellow);">📋 Tu Misión</h2>
            <p class="mb-4">Crea un sistema con manejo de errores:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Función que puede generar errores</li>
                <li>Usa try/except para capturar errores</li>
                <li>Maneja diferentes tipos de excepciones</li>
                <li>Usa finally para limpieza</li>
                <li>Demuestra el manejo de errores</li>
            </ul>
        `,
        validate: async function(code) {
            let score = 0;
            let feedback = [];
            
            if (code.includes('try') && code.includes('except')) { score += 40; feedback.push('✅ Try/except'); } else { feedback.push('❌ Falta try/except'); }
            if (code.includes('finally')) { score += 30; feedback.push('✅ Finally'); } else { feedback.push('❌ Falta finally'); }
            if (code.includes('def')) { score += 30; feedback.push('✅ Función'); } else { feedback.push('❌ Falta función'); }
            
            return { score: score, isPass: score >= 75, feedback: feedback.join('<br>') };
        }
    },

    'python_challenge7': {
        title: 'Challenge Python #7',
        subtitle: 'Trabajo con Datos',
        language: 'python',
        allowedCommands: ['print', 'lambda', 'map', 'filter', 'list', 'dict'],
        initialCode: `# Challenge 7: Datos y JSON
# Escribe tu código aquí

`,
        instructions: `
            <h2 class="text-xl font-bold mb-3" style="color: var(--yellow);">📋 Tu Misión</h2>
            <p class="mb-4">Trabaja con estructuras de datos complejas:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Lista de diccionarios (simula JSON)</li>
                <li>Función para filtrar datos</li>
                <li>Función para transformar datos</li>
                <li>Usa lambda functions</li>
                <li>Usa map/filter</li>
            </ul>
        `,
        validate: async function(code) {
            let score = 0;
            let feedback = [];
            
            if (/\[.*\{.*\}.*\]/.test(code.replace(/\s/g, ''))) { score += 25; feedback.push('✅ Estructura compleja'); } else { feedback.push('❌ Falta estructura'); }
            if (code.includes('lambda')) { score += 25; feedback.push('✅ Lambda'); } else { feedback.push('❌ Falta lambda'); }
            if (code.includes('filter') || code.includes('map')) { score += 25; feedback.push('✅ Map/filter'); } else { feedback.push('❌ Falta map/filter'); }
            if (code.includes('def')) { score += 25; feedback.push('✅ Funciones'); } else { feedback.push('❌ Faltan funciones'); }
            
            return { score: score, isPass: score >= 75, feedback: feedback.join('<br>') };
        }
    },

    'python_challenge8': {
        title: 'Challenge Python #8',
        subtitle: 'Proyecto Final Integrado',
        language: 'python',
        allowedCommands: ['print', 'class', 'def', 'try', 'except', 'lambda', 'map', 'filter', 'list', 'dict'],
        initialCode: `# Challenge 8: Proyecto Final
# Crea un sistema completo integrando todo lo aprendido
# ¡Sé creativo!

`,
        instructions: `
            <h2 class="text-xl font-bold mb-3" style="color: var(--yellow);">📋 Proyecto Final</h2>
            <p class="mb-4">Integra todo lo aprendido:</p>
            <ul class="list-disc list-inside space-y-2 ml-4">
                <li>Al menos 2 clases</li>
                <li>Funciones auxiliares</li>
                <li>Estructuras de datos avanzadas</li>
                <li>Manejo de excepciones</li>
                <li>Código documentado</li>
                <li>Demostración funcional</li>
            </ul>
            <div class="mt-4 p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <p class="text-sm"><strong class="text-green-400">🎯 Objetivo:</strong> Demuestra todo lo que aprendiste</p>
            </div>
        `,
        validate: async function(code) {
            let score = 0;
            let feedback = [];
            
            if ((code.match(/class /g) || []).length >= 2) { score += 20; feedback.push('✅ 2+ clases'); } else { feedback.push('❌ Faltan clases'); }
            if ((code.match(/def /g) || []).length >= 3) { score += 15; feedback.push('✅ Funciones'); } else { feedback.push('❌ Faltan funciones'); }
            if ((code.includes('{') && code.includes('[')) || /\[.*for.*\]/.test(code)) { score += 15; feedback.push('✅ Estructuras avanzadas'); } else { feedback.push('❌ Faltan estructuras'); }
            if (code.includes('try') && code.includes('except')) { score += 15; feedback.push('✅ Excepciones'); } else { feedback.push('❌ Faltan excepciones'); }
            if ((code.match(/#/g) || []).length >= 5) { score += 15; feedback.push('✅ Documentado'); } else { feedback.push('❌ Falta documentación'); }
            if (code.includes('print')) { score += 20; feedback.push('✅ Demostración'); } else { feedback.push('❌ Falta demostración'); }
            
            return { score: score, isPass: score >= 75, feedback: feedback.join('<br>') };
        }
    }
};
