import json

# ============================================================
# GENERADOR DEL CURSO DE BASE DE DATOS - 20 NIVELES
# ============================================================

levels_data = [
    {
        "title": "Introducción a las Bases de Datos",
        "dictionary": [
            {"term": "Base de Datos", "def": "Colección organizada de información estructurada almacenada electrónicamente."},
            {"term": "Tabla", "def": "Estructura de filas y columnas que almacena datos de un tipo específico."},
            {"term": "Registro (Fila)", "def": "Una entrada individual en una tabla. Representa un elemento completo."},
            {"term": "Campo (Columna)", "def": "Un atributo específico de cada registro. Define qué tipo de dato almacena."},
            {"term": "Clave Primaria (PK)", "def": "Campo único que identifica cada registro. No puede repetirse ni ser NULL."},
            {"term": "SQL", "def": "Structured Query Language. Lenguaje estándar para consultar y manipular bases de datos relacionales."},
            {"term": "DBMS", "def": "Database Management System. Software que gestiona bases de datos (MySQL, PostgreSQL, SQLite)."}
        ],
        "lesson": [
            {
                "title": "¿Qué es una Base de Datos?",
                "dialogo": "<p>Antes de escribir una sola consulta, necesitas entender qué es realmente una base de datos.</p><p>Una <strong>base de datos</strong> es como un archivador digital ultra-organizado. En vez de papeles desordenados, la información se almacena en estructuras llamadas <strong>tablas</strong>, donde cada fila es un registro y cada columna es un campo específico.</p><p>Imagina una hoja de cálculo de Excel, pero con reglas estrictas de integridad, velocidad de búsqueda instantánea y capacidad de manejar millones de registros sin colapsar.</p>",
                "codigo": "-- Esto NO es código ejecutable, es la estructura conceptual\n-- Tabla: estudiantes\n-- Columnas: id, nombre, email, edad\n-- Filas: cada estudiante registrado",
                "tourSteps": [
                    {"text": "Una <strong>tabla</strong> es la estructura fundamental. Piensa en ella como una hoja de cálculo con columnas definidas.", "line": 2},
                    {"text": "Las <strong>columnas</strong> definen qué tipo de información almacena cada campo (nombre=texto, edad=número).", "line": 3},
                    {"text": "Las <strong>filas</strong> son los datos reales. Cada fila es un registro completo e individual.", "line": 4}
                ]
            },
            {
                "title": "Tipos de Bases de Datos",
                "dialogo": "<p>No todas las bases de datos son iguales. Existen varios tipos según cómo organizan los datos:</p><ul><li><strong>Relacionales (SQL):</strong> Datos en tablas con relaciones estrictas. Ej: MySQL, PostgreSQL, SQLite.</li><li><strong>NoSQL (Documentales):</strong> Datos en documentos flexibles tipo JSON. Ej: MongoDB.</li><li><strong>Clave-Valor:</strong> Almacenamiento ultra-rápido con pares clave-valor. Ej: Redis.</li><li><strong>Grafos:</strong> Optimizadas para relaciones complejas entre nodos. Ej: Neo4j.</li></ul><p>En este curso nos enfocaremos en las <strong>relacionales (SQL)</strong>, que son las más utilizadas en la industria.</p>"
            },
            {
                "title": "Tu Primera Tabla",
                "dialogo": "<p>Una tabla relacional tiene columnas con nombres y tipos de datos definidos. Cada fila que insertes debe respetar esa estructura.</p>",
                "codigo": "CREATE TABLE estudiantes (\n    id INTEGER PRIMARY KEY,\n    nombre TEXT NOT NULL,\n    email TEXT UNIQUE,\n    edad INTEGER\n);",
                "tourSteps": [
                    {"text": "<code>CREATE TABLE</code> es la sentencia SQL para crear una nueva tabla. Le damos el nombre <code>estudiantes</code>.", "line": 1},
                    {"text": "<code>id INTEGER PRIMARY KEY</code>: Columna numérica que identifica ÚNICAMENTE cada fila. No se repite jamás.", "line": 2},
                    {"text": "<code>nombre TEXT NOT NULL</code>: Campo de texto obligatorio. <code>NOT NULL</code> obliga a que siempre tenga valor.", "line": 3},
                    {"text": "<code>email TEXT UNIQUE</code>: Texto que no puede duplicarse. Dos estudiantes no pueden compartir email.", "line": 4},
                    {"text": "<code>edad INTEGER</code>: Número entero opcional (puede ser NULL si no se proporciona).", "line": 5}
                ]
            },
            {
                "title": "Claves Primarias",
                "dialogo": "<p>La <strong>clave primaria (Primary Key)</strong> es el identificador único de cada registro. Es como el DNI o número de seguridad social: nunca se repite.</p><div class='mt-4 p-4 bg-yellow-900/30 border border-yellow-500 rounded-lg'><strong class='text-yellow-400'>💡 Regla de oro:</strong><p class='text-sm'>Toda tabla DEBE tener una clave primaria. Sin ella, no puedes identificar un registro específico de forma confiable.</p></div>",
                "codigo": "-- AUTOINCREMENT genera el número automáticamente\nCREATE TABLE productos (\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\n    nombre TEXT,\n    precio REAL\n);",
                "tourSteps": [
                    {"text": "<code>AUTOINCREMENT</code> hace que el id se genere solo: 1, 2, 3... Tú no necesitas escribirlo al insertar.", "line": 2},
                    {"text": "<code>REAL</code> es el tipo de dato para números con decimales (como 19.99).", "line": 4}
                ]
            },
            {
                "title": "Claves Foráneas",
                "dialogo": "<p>Una <strong>clave foránea (Foreign Key)</strong> conecta dos tablas. Es un campo en una tabla que apunta a la clave primaria de otra tabla, creando una relación.</p>",
                "codigo": "CREATE TABLE pedidos (\n    id INTEGER PRIMARY KEY,\n    estudiante_id INTEGER,\n    producto TEXT,\n    FOREIGN KEY (estudiante_id)\n        REFERENCES estudiantes(id)\n);",
                "tourSteps": [
                    {"text": "<code>estudiante_id</code> es la columna que almacenará el ID de un estudiante existente.", "line": 3},
                    {"text": "<code>FOREIGN KEY</code> declara que esta columna es una clave foránea.", "line": 4},
                    {"text": "<code>REFERENCES estudiantes(id)</code> vincula con la columna <code>id</code> de la tabla <code>estudiantes</code>. No puedes poner un ID que no exista.", "line": 5}
                ]
            },
            {
                "title": "Tipos de Datos en SQL",
                "dialogo": "<p>Cada columna tiene un tipo de dato específico. Los más comunes son:</p><ul><li><code>INTEGER</code> - Números enteros (1, 42, -7)</li><li><code>REAL</code> - Números decimales (3.14, 19.99)</li><li><code>TEXT</code> - Cadenas de texto ('Hola', 'María')</li><li><code>BLOB</code> - Datos binarios (imágenes, archivos)</li><li><code>BOOLEAN</code> - Verdadero/Falso (1/0)</li><li><code>DATE</code> - Fechas ('2025-01-15')</li></ul>"
            },
            {
                "title": "NULL vs NOT NULL",
                "dialogo": "<p><code>NULL</code> significa 'sin valor' o 'desconocido'. No es lo mismo que cero o texto vacío.</p><div class='mt-4 p-4 bg-red-900/30 border border-red-500 rounded-lg'><strong class='text-red-400'>🚧 Error Común:</strong><p class='text-sm'>NULL no es igual a nada, ni siquiera a otro NULL. <code>NULL = NULL</code> devuelve falso. Para verificar NULL usa <code>IS NULL</code> o <code>IS NOT NULL</code>.</p></div>",
                "codigo": "CREATE TABLE usuarios (\n    id INTEGER PRIMARY KEY,\n    nombre TEXT NOT NULL,     -- Obligatorio\n    email TEXT,               -- Opcional (puede ser NULL)\n    telefono TEXT DEFAULT 'Sin registrar'\n);",
                "tourSteps": [
                    {"text": "<code>NOT NULL</code> obliga a que este campo tenga valor al insertar. Sin él, la operación falla.", "line": 3},
                    {"text": "Sin <code>NOT NULL</code>, este campo acepta NULL si no se proporciona valor.", "line": 4},
                    {"text": "<code>DEFAULT</code> establece un valor automático si no se proporciona ninguno al insertar.", "line": 5}
                ]
            },
            {
                "title": "Sistemas de Gestión (DBMS)",
                "dialogo": "<p>Un <strong>DBMS</strong> (Database Management System) es el software que crea, gestiona y consulta bases de datos. Los más populares:</p><ul><li><strong>SQLite:</strong> Ligero, sin servidor, ideal para aprendizaje. Usa un archivo .db.</li><li><strong>MySQL:</strong> El más usado en la web. Open source, rápido.</li><li><strong>PostgreSQL:</strong> El más avanzado. Soporta tipos complejos, JSON, y más.</li><li><strong>SQL Server:</strong> De Microsoft, usado en empresas grandes.</li><li><strong>Oracle:</strong> Potente, para aplicaciones empresariales críticas.</li></ul><p>En este curso usaremos sintaxis compatible con <strong>SQLite</strong> por ser el más accesible para aprender.</p>"
            },
            {
                "title": "Relaciones entre Tablas",
                "dialogo": "<p>El poder real de las bases de datos relacionales está en conectar tablas:</p><ul><li><strong>Uno a Muchos:</strong> Un estudiante tiene muchos pedidos. Un pedido pertenece a un estudiante.</li><li><strong>Muchos a Muchos:</strong> Un estudiante cursa muchas materias. Una materia tiene muchos estudiantes. Necesita una tabla intermedia.</li><li><strong>Uno a Uno:</strong> Un usuario tiene un perfil. Raro pero existe.</li></ul>"
            },
            {
                "title": "¡Listo para el Quiz!",
                "dialogo": "<p>Has aprendido los conceptos fundamentales: qué es una base de datos, tablas, registros, claves primarias y foráneas, tipos de datos y relaciones.</p><p>Ahora demuestra tu conocimiento en el quiz evaluativo. ¡Necesitas 70% para aprobar!</p>"
            }
        ],
        "quiz": [
            {"type": "multiple-choice", "question": "¿Qué es una base de datos relacional?", "options": ["Una base de datos sin estructura", "Una colección de datos organizados en tablas relacionadas", "Un archivo de texto plano", "Una hoja de cálculo de Excel"], "answer": "Una colección de datos organizados en tablas relacionadas"},
            {"type": "multiple-choice", "question": "¿Qué representa una fila en una tabla?", "options": ["Un campo", "Un registro individual", "Una columna", "Una relación"], "answer": "Un registro individual"},
            {"type": "multiple-choice", "question": "¿Qué es una clave primaria?", "options": ["Un campo que puede repetirse", "Un identificador único de cada registro", "Una contraseña de la base de datos", "El nombre de la tabla"], "answer": "Un identificador único de cada registro"},
            {"type": "multiple-choice", "question": "¿Qué tipo de dato almacena números con decimales?", "options": ["INTEGER", "TEXT", "REAL", "BOOLEAN"], "answer": "REAL"},
            {"type": "multiple-choice", "question": "¿Qué significa NOT NULL?", "options": ["El campo puede estar vacío", "El campo debe tener un valor obligatorio", "El campo es numérico", "El campo es una clave"], "answer": "El campo debe tener un valor obligatorio"},
            {"type": "multiple-choice", "question": "¿Qué hace AUTOINCREMENT?", "options": ["Borra registros automáticamente", "Genera números secuenciales automáticos para la PK", "Duplica las filas", "Crea índices"], "answer": "Genera números secuenciales automáticos para la PK"},
            {"type": "multiple-choice", "question": "¿Qué es una clave foránea?", "options": ["Una clave de seguridad", "Un campo que referencia la PK de otra tabla", "Un tipo de dato especial", "Una contraseña"], "answer": "Un campo que referencia la PK de otra tabla"},
            {"type": "multiple-choice", "question": "¿Qué significa SQL?", "options": ["Simple Query Language", "Structured Query Language", "Standard Query Library", "System Query Logic"], "answer": "Structured Query Language"},
            {"type": "multiple-choice", "question": "¿Cuál DBMS es más ligero y no requiere servidor?", "options": ["MySQL", "PostgreSQL", "SQLite", "Oracle"], "answer": "SQLite"},
            {"type": "multiple-choice", "question": "¿Para verificar si un campo es NULL, qué operador usas?", "options": ["= NULL", "== NULL", "IS NULL", "EQUALS NULL"], "answer": "IS NULL"}
        ]
    },
    {
        "title": "SQL Básico - SELECT",
        "dictionary": [
            {"term": "SELECT", "def": "Sentencia SQL para consultar y recuperar datos de una tabla."},
            {"term": "FROM", "def": "Especifica de qué tabla se obtienen los datos."},
            {"term": "WHERE", "def": "Filtra resultados según condiciones específicas."},
            {"term": "ORDER BY", "def": "Ordena los resultados ascendente (ASC) o descendente (DESC)."},
            {"term": "LIMIT", "def": "Restringe el número máximo de filas devueltas."},
            {"term": "DISTINCT", "def": "Elimina valores duplicados del resultado."},
            {"term": "AS", "def": "Crea un alias temporal para columnas o tablas."}
        ],
        "lesson": [
            {
                "title": "Tu Primera Consulta",
                "dialogo": "<p>La sentencia <code>SELECT</code> es la herramienta fundamental de SQL. Sirve para consultar y recuperar datos de una tabla.</p><p>La sintaxis mínima es: <code>SELECT columnas FROM tabla;</code></p>",
                "codigo": "SELECT nombre, email FROM estudiantes;",
                "tourSteps": [
                    {"text": "<code>SELECT</code> inicia la consulta. Le dices a SQL qué columnas quieres ver.", "line": 1},
                    {"text": "<code>nombre, email</code> son las columnas específicas que solicitamos, separadas por coma.", "line": 1},
                    {"text": "<code>FROM estudiantes</code> indica de qué tabla extraer esos datos.", "line": 1}
                ]
            },
            {
                "title": "Seleccionar Todas las Columnas",
                "dialogo": "<p>Si quieres ver TODAS las columnas de una tabla, usa el asterisco <code>*</code> como comodín.</p><div class='mt-4 p-4 bg-yellow-900/30 border border-yellow-500 rounded-lg'><strong class='text-yellow-400'>⚠️ Buena Práctica:</strong><p class='text-sm'>En producción, evita <code>SELECT *</code>. Especifica las columnas que necesitas para mejor rendimiento y claridad.</p></div>",
                "codigo": "SELECT * FROM estudiantes;",
                "tourSteps": [
                    {"text": "<code>*</code> es el comodín que significa 'todas las columnas'. Devuelve cada campo de la tabla.", "line": 1}
                ]
            },
            {
                "title": "Filtrando con WHERE",
                "dialogo": "<p><code>WHERE</code> es el filtro de tu consulta. Solo devuelve filas que cumplan la condición.</p>",
                "codigo": "SELECT nombre, edad FROM estudiantes\nWHERE edad >= 18;",
                "tourSteps": [
                    {"text": "Pedimos nombre y edad de los estudiantes.", "line": 1},
                    {"text": "<code>WHERE edad >= 18</code> filtra: solo estudiantes de 18 años o más pasan el filtro.", "line": 2}
                ]
            },
            {
                "title": "Operadores de Comparación",
                "dialogo": "<p>Los operadores para condiciones WHERE son:</p><ul><li><code>=</code> Igual a</li><li><code>!=</code> o <code>&lt;&gt;</code> Diferente de</li><li><code>&lt;</code> Menor que</li><li><code>&gt;</code> Mayor que</li><li><code>&lt;=</code> Menor o igual</li><li><code>&gt;=</code> Mayor o igual</li><li><code>LIKE</code> Coincidencia de patrón ('%Ana%' contiene 'Ana')</li><li><code>IN</code> Dentro de una lista (edad IN (18, 19, 20))</li><li><code>BETWEEN</code> En un rango (edad BETWEEN 18 AND 25)</li></ul>"
            },
            {
                "title": "Combinando Condiciones: AND, OR, NOT",
                "dialogo": "<p>Puedes combinar múltiples condiciones con operadores lógicos:</p>",
                "codigo": "SELECT * FROM productos\nWHERE precio > 100\n  AND categoria = 'electronica'\n  AND stock > 0;",
                "tourSteps": [
                    {"text": "<code>AND</code> requiere que TODAS las condiciones sean verdaderas. Si una falla, la fila se excluye.", "line": 2},
                    {"text": "Aquí filtramos por precio, categoría Y stock simultáneamente.", "line": 4}
                ]
            },
            {
                "title": "Ordenando Resultados",
                "dialogo": "<p><code>ORDER BY</code> ordena los resultados. Por defecto es ascendente (ASC). Usa <code>DESC</code> para descendente.</p>",
                "codigo": "SELECT nombre, precio FROM productos\nORDER BY precio DESC;",
                "tourSteps": [
                    {"text": "<code>ORDER BY precio DESC</code> ordena de mayor a menor precio. El producto más caro aparece primero.", "line": 2}
                ]
            },
            {
                "title": "Limitando Resultados",
                "dialogo": "<p><code>LIMIT</code> restringe cuántas filas devolver. Útil para paginación o ver solo los primeros resultados.</p>",
                "codigo": "SELECT * FROM estudiantes\nORDER BY nombre ASC\nLIMIT 5;",
                "tourSteps": [
                    {"text": "Primero ordena por nombre alfabéticamente (ASC).", "line": 2},
                    {"text": "<code>LIMIT 5</code> toma solo los primeros 5 resultados del conjunto ordenado.", "line": 3}
                ]
            },
            {
                "title": "Funciones de Agregación",
                "dialogo": "<p>Las funciones de agregación calculan valores sobre un conjunto de filas:</p><ul><li><code>COUNT(*)</code> - Cuenta filas</li><li><code>SUM(columna)</code> - Suma valores</li><li><code>AVG(columna)</code> - Promedio</li><li><code>MAX(columna)</code> - Valor máximo</li><li><code>MIN(columna)</code> - Valor mínimo</li></ul>",
                "codigo": "SELECT COUNT(*) AS total,\n       AVG(edad) AS promedio,\n       MAX(edad) AS mayor,\n       MIN(edad) AS menor\nFROM estudiantes;",
                "tourSteps": [
                    {"text": "<code>COUNT(*)</code> cuenta TODAS las filas de la tabla.", "line": 1},
                    {"text": "<code>AS total</code> crea un alias: la columna resultante se llamará 'total'.", "line": 1},
                    {"text": "<code>AVG(edad)</code> calcula el promedio de todas las edades.", "line": 2},
                    {"text": "<code>MAX/MIN</code> encuentran los valores extremos de la columna edad.", "line": 3}
                ]
            },
            {
                "title": "DISTINCT: Eliminar Duplicados",
                "dialogo": "<p><code>DISTINCT</code> elimina valores repetidos del resultado. Solo muestra valores únicos.</p>",
                "codigo": "SELECT DISTINCT categoria FROM productos;",
                "tourSteps": [
                    {"text": "Si hay 100 productos pero solo 5 categorías distintas, esta consulta devuelve exactamente 5 filas.", "line": 1}
                ]
            },
            {
                "title": "¡Listo para el Quiz!",
                "dialogo": "<p>SELECT es el corazón de SQL. Dominar consultas básicas es fundamental para todo lo que viene.</p><p>¡Demuestra que sabes consultar datos!</p>"
            }
        ],
        "quiz": [
            {"type": "multiple-choice", "question": "¿Qué hace SELECT * FROM tabla?", "options": ["Borra todos los datos", "Selecciona todas las columnas de la tabla", "Crea una tabla nueva", "Actualiza los datos"], "answer": "Selecciona todas las columnas de la tabla"},
            {"type": "multiple-choice", "question": "¿Qué cláusula filtra resultados?", "options": ["FROM", "WHERE", "SELECT", "ORDER BY"], "answer": "WHERE"},
            {"type": "multiple-choice", "question": "¿Qué operador lógico significa 'Y' (ambas condiciones deben cumplirse)?", "options": ["OR", "AND", "NOT", "LIKE"], "answer": "AND"},
            {"type": "multiple-choice", "question": "¿Qué cláusula ordena los resultados?", "options": ["SORT BY", "ORDER BY", "GROUP BY", "ARRANGE BY"], "answer": "ORDER BY"},
            {"type": "multiple-choice", "question": "¿Qué función cuenta el número de filas?", "options": ["SUM()", "COUNT()", "TOTAL()", "SIZE()"], "answer": "COUNT()"},
            {"type": "multiple-choice", "question": "¿Qué palabra elimina valores duplicados?", "options": ["UNIQUE", "DISTINCT", "DIFFERENT", "REMOVE"], "answer": "DISTINCT"},
            {"type": "multiple-choice", "question": "¿Qué cláusula limita el número de resultados?", "options": ["TOP", "LIMIT", "MAX", "RESTRICT"], "answer": "LIMIT"},
            {"type": "multiple-choice", "question": "¿Qué función calcula el promedio?", "options": ["MEAN()", "AVERAGE()", "AVG()", "PROM()"], "answer": "AVG()"},
            {"type": "multiple-choice", "question": "¿Qué operador busca patrones de texto?", "options": ["=", "LIKE", "MATCH", "SEARCH"], "answer": "LIKE"},
            {"type": "multiple-choice", "question": "¿Qué significa SELECT nombre AS n FROM t?", "options": ["Renombra la columna permanentemente", "Muestra 'nombre' con el alias temporal 'n'", "Crea una nueva columna", "Elimina la columna nombre"], "answer": "Muestra 'nombre' con el alias temporal 'n'"}
        ]
    }
]

print(f"Generated {len(levels_data)} levels so far...")
print("Script ready to generate full file")