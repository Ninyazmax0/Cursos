#!/usr/bin/env python3
"""Insert courseData into database_course.html"""
import os

OUT = r"C:\Users\MINEDUCYT\OneDrive\Documentos\verdadera-academia\database_course.html"

# Read current file
with open(OUT, "r", encoding="utf-8") as f:
    content = f.read()

# Find where to insert courseData (before const COURSE_ID)
marker = "const COURSE_ID"
pos = content.find(marker)
if pos == -1:
    print("ERROR: marker not found")
    exit(1)

# Course data - all 20 levels
course_data = """const courseData = [
    {
        title: "Introduccion a las Bases de Datos",
        dictionary: [
            { term: "Base de Datos", definition: "Coleccion organizada de informacion estructurada almacenada electronicamente." },
            { term: "Tabla", definition: "Estructura de filas y columnas que almacena datos de un tipo especifico." },
            { term: "Registro (Fila)", definition: "Una entrada individual en una tabla. Representa un elemento completo." },
            { term: "Campo (Columna)", definition: "Un atributo especifico de cada registro. Define que tipo de dato almacena." },
            { term: "Clave Primaria (PK)", definition: "Campo unico que identifica cada registro. No puede repetirse ni ser NULL." },
            { term: "SQL", definition: "Structured Query Language. Lenguaje estandar para consultar y manipular bases de datos relacionales." },
            { term: "DBMS", definition: "Database Management System. Software que gestiona bases de datos (MySQL, PostgreSQL, SQLite)." }
        ],
        lesson: [
            { title: "Que es una Base de Datos?", dialogo: "<p>Antes de escribir una sola consulta, necesitas entender que es realmente una base de datos.</p><p>Una <strong>base de datos</strong> es como un archivador digital ultra-organizado. En vez de papeles desordenados, la informacion se almacena en estructuras llamadas <strong>tablas</strong>, donde cada fila es un registro y cada columna es un campo especifico.</p>" },
            { title: "Tipos de Bases de Datos", dialogo: "<p>No todas las bases de datos son iguales:</p><ul><li><strong>Relacionales (SQL):</strong> Datos en tablas con relaciones estrictas. Ej: MySQL, PostgreSQL, SQLite.</li><li><strong>NoSQL:</strong> Documentos flexibles tipo JSON. Ej: MongoDB.</li><li><strong>Clave-Valor:</strong> Ultra-rapido. Ej: Redis.</li><li><strong>Grafos:</strong> Relaciones complejas. Ej: Neo4j.</li></ul><p>Nos enfocaremos en las <strong>relacionales (SQL)</strong>.</p>" },
            { title: "Tu Primera Tabla", dialogo: "<p>Una tabla relacional tiene columnas con nombres y tipos de datos definidos.</p>", codigo: "CREATE TABLE estudiantes (\\n    id INTEGER PRIMARY KEY,\\n    nombre TEXT NOT NULL,\\n    email TEXT UNIQUE,\\n    edad INTEGER\\n);", tourSteps: [ { text: "<code>CREATE TABLE</code> crea una nueva tabla llamada <code>estudiantes</code>.", line: 1 }, { text: "<code>id INTEGER PRIMARY KEY</code>: Identificador UNICO. No se repite.", line: 2 }, { text: "<code>nombre TEXT NOT NULL</code>: Texto obligatorio.", line: 3 }, { text: "<code>email TEXT UNIQUE</code>: No puede duplicarse.", line: 4 }, { text: "<code>edad INTEGER</code>: Numero entero opcional.", line: 5 } ] },
            { title: "Claves Primarias", dialogo: "<p>La <strong>clave primaria</strong> es el identificador unico de cada registro. Nunca se repite.</p>", codigo: "CREATE TABLE productos (\\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\\n    nombre TEXT,\\n    precio REAL\\n);", tourSteps: [ { text: "<code>AUTOINCREMENT</code> genera IDs automaticamente: 1, 2, 3...", line: 2 }, { text: "<code>REAL</code> es para decimales (19.99).", line: 4 } ] },
            { title: "Claves Foraneas", dialogo: "<p>Una <strong>clave foranea</strong> conecta dos tablas, creando una relacion.</p>", codigo: "CREATE TABLE pedidos (\\n    id INTEGER PRIMARY KEY,\\n    estudiante_id INTEGER,\\n    FOREIGN KEY (estudiante_id) REFERENCES estudiantes(id)\\n);", tourSteps: [ { text: "<code>estudiante_id</code> almacena el ID de un estudiante.", line: 3 }, { text: "<code>FOREIGN KEY ... REFERENCES</code> vincula con la tabla estudiantes.", line: 4 } ] },
            { title: "Tipos de Datos", dialogo: "<p>Tipos comunes:</p><ul><li><code>INTEGER</code> - Enteros</li><li><code>REAL</code> - Decimales</li><li><code>TEXT</code> - Texto</li><li><code>BLOB</code> - Binario</li><li><code>BOOLEAN</code> - True/False</li><li><code>DATE</code> - Fechas</li></ul>" },
            { title: "NULL vs NOT NULL", dialogo: "<p><code>NULL</code> = 'sin valor'. No es cero ni vacio. Para verificar usa <code>IS NULL</code>.</p>" },
            { title: "DBMS Populares", dialogo: "<p><strong>SQLite:</strong> Ligero, sin servidor. <strong>MySQL:</strong> Mas usado en la web. <strong>PostgreSQL:</strong> Mas avanzado. <strong>SQL Server:</strong> Microsoft. <strong>Oracle:</strong> Empresarial.</p>" },
            { title: "Relaciones", dialogo: "<p><strong>Uno a Muchos:</strong> Un estudiante, muchos pedidos. <strong>Muchos a Muchos:</strong> Estudiantes y materias (tabla intermedia). <strong>Uno a Uno:</strong> Usuario y perfil.</p>" },
            { title: "Listo para el Quiz!", dialogo: "<p>Has aprendido los conceptos fundamentales. Demuestra tu conocimiento!</p>" }
        ],
        quiz: [
            { type: "multiple-choice", question: "Que es una base de datos relacional?", options: ["Sin estructura", "Datos organizados en tablas relacionadas", "Archivo de texto", "Hoja de calculo"], answer: "Datos organizados en tablas relacionadas" },
            { type: "multiple-choice", question: "Que representa una fila?", options: ["Un campo", "Un registro individual", "Una columna", "Una relacion"], answer: "Un registro individual" },
            { type: "multiple-choice", question: "Que es una clave primaria?", options: ["Campo repetible", "Identificador unico", "Contrasena", "Nombre de tabla"], answer: "Identificador unico" },
            { type: "multiple-choice", question: "Tipo de dato para decimales?", options: ["INTEGER", "TEXT", "REAL", "BOOLEAN"], answer: "REAL" },
            { type: "multiple-choice", question: "Que significa NOT NULL?", options: ["Puede estar vacio", "Valor obligatorio", "Es numerico", "Es clave"], answer: "Valor obligatorio" },
            { type: "multiple-choice", question: "Que hace AUTOINCREMENT?", options: ["Borra registros", "Genera IDs automaticos", "Duplica filas", "Crea indices"], answer: "Genera IDs automaticos" },
            { type: "multiple-choice", question: "Que es una clave foranea?", options: ["Clave de seguridad", "Referencia a PK de otra tabla", "Tipo de dato", "Contrasena"], answer: "Referencia a PK de otra tabla" },
            { type: "multiple-choice", question: "Que significa SQL?", options: ["Simple Query Language", "Structured Query Language", "Standard Query Library", "System Query Logic"], answer: "Structured Query Language" },
            { type: "multiple-choice", question: "DBMS mas ligero sin servidor?", options: ["MySQL", "PostgreSQL", "SQLite", "Oracle"], answer: "SQLite" },
            { type: "multiple-choice", question: "Operador para verificar NULL?", options: ["= NULL", "== NULL", "IS NULL", "EQUALS NULL"], answer: "IS NULL" }
        ]
    },
    {
        title: "SQL Basico - SELECT",
        dictionary: [
            { term: "SELECT", definition: "Sentencia SQL para consultar datos de una tabla." },
            { term: "FROM", definition: "Especifica de que tabla se obtienen los datos." },
            { term: "WHERE", definition: "Filtra resultados segun condiciones." },
            { term: "ORDER BY", definition: "Ordena resultados ASC o DESC." },
            { term: "LIMIT", definition: "Restringe el numero de filas devueltas." },
            { term: "DISTINCT", definition: "Elimina valores duplicados." },
            { term: "AS", definition: "Crea un alias temporal para columnas." }
        ],
        lesson: [
            { title: "Tu Primera Consulta", dialogo: "<p><code>SELECT</code> es la herramienta fundamental. Sintaxis: <code>SELECT columnas FROM tabla;</code></p>", codigo: "SELECT nombre, email FROM estudiantes;", tourSteps: [ { text: "<code>SELECT</code> inicia la consulta con las columnas deseadas.", line: 1 }, { text: "<code>FROM estudiantes</code> indica la tabla de origen.", line: 1 } ] },
            { title: "Todas las Columnas", dialogo: "<p>Usa <code>*</code> para todas las columnas. En produccion, especifica las columnas que necesitas.</p>", codigo: "SELECT * FROM estudiantes;", tourSteps: [ { text: "<code>*</code> significa 'todas las columnas'.", line: 1 } ] },
            { title: "Filtrando con WHERE", dialogo: "<p><code>WHERE</code> filtra filas que cumplan la condicion.</p>", codigo: "SELECT nombre, edad FROM estudiantes\\nWHERE edad >= 18;", tourSteps: [ { text: "Pedimos nombre y edad.", line: 1 }, { text: "<code>WHERE edad >= 18</code> filtra solo mayores de 18.", line: 2 } ] },
            { title: "Operadores de Comparacion", dialogo: "<p><code>=</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>, <code>LIKE</code> (patrones), <code>IN</code> (lista), <code>BETWEEN</code> (rango).</p>" },
            { title: "AND, OR, NOT", dialogo: "<p>Combina condiciones con operadores logicos.</p>", codigo: "SELECT * FROM productos\\nWHERE precio > 100 AND categoria = 'electronica';", tourSteps: [ { text: "<code>AND</code> requiere que AMBAS condiciones sean verdaderas.", line: 2 } ] },
            { title: "Ordenando Resultados", dialogo: "<p><code>ORDER BY</code> ordena. Por defecto ASC. Usa <code>DESC</code> para descendente.</p>", codigo: "SELECT nombre, precio FROM productos\\nORDER BY precio DESC;", tourSteps: [ { text: "<code>ORDER BY precio DESC</code> ordena de mayor a menor.", line: 2 } ] },
            { title: "LIMIT", dialogo: "<p><code>LIMIT</code> restringe cuantas filas devolver.</p>", codigo: "SELECT * FROM estudiantes\\nORDER BY nombre ASC\\nLIMIT 5;", tourSteps: [ { text: "Ordena por nombre, luego toma solo 5.", line: 3 } ] },
            { title: "Funciones de Agregacion", dialogo: "<p><code>COUNT(*)</code>, <code>SUM()</code>, <code>AVG()</code>, <code>MAX()</code>, <code>MIN()</code>.</p>", codigo: "SELECT COUNT(*) AS total, AVG(edad) AS promedio FROM estudiantes;", tourSteps: [ { text: "<code>COUNT(*)</code> cuenta filas. <code>AVG()</code> calcula promedio.", line: 1 } ] },
            { title: "DISTINCT", dialogo: "<p>Elimina duplicados. Solo muestra valores unicos.</p>", codigo: "SELECT DISTINCT categoria FROM productos;", tourSteps: [ { text: "Si hay 100 productos en 5 categorias, devuelve 5 filas.", line: 1 } ] },
            { title: "Listo para el Quiz!", dialogo: "<p>SELECT es el corazon de SQL. Demuestra que sabes consultar datos!</p>" }
        ],
        quiz: [
            { type: "multiple-choice", question: "Que hace SELECT * FROM tabla?", options: ["Borra datos", "Selecciona todas las columnas", "Crea tabla", "Actualiza datos"], answer: "Selecciona todas las columnas" },
            { type: "multiple-choice", question: "Que clausula filtra resultados?", options: ["FROM", "WHERE", "SELECT", "ORDER BY"], answer: "WHERE" },
            { type: "multiple-choice", question: "Operador logico 'Y'?", options: ["OR", "AND", "NOT", "LIKE"], answer: "AND" },
            { type: "multiple-choice", question: "Que clausula ordena?", options: ["SORT BY", "ORDER BY", "GROUP BY", "ARRANGE BY"], answer: "ORDER BY" },
            { type: "multiple-choice", question: "Funcion que cuenta filas?", options: ["SUM()", "COUNT()", "TOTAL()", "SIZE()"], answer: "COUNT()" },
            { type: "multiple-choice", question: "Palabra que elimina duplicados?", options: ["UNIQUE", "DISTINCT", "DIFFERENT", "REMOVE"], answer: "DISTINCT" },
            { type: "multiple-choice", question: "Que limita resultados?", options: ["TOP", "LIMIT", "MAX", "RESTRICT"], answer: "LIMIT" },
            { type: "multiple-choice", question: "Funcion de promedio?", options: ["MEAN()", "AVERAGE()", "AVG()", "PROM()"], answer: "AVG()" },
            { type: "multiple-choice", question: "Operador de patrones de texto?", options: ["=", "LIKE", "MATCH", "SEARCH"], answer: "LIKE" },
            { type: "multiple-choice", question: "Que hace SELECT nombre AS n?", options: ["Renombra permanentemente", "Alias temporal 'n'", "Crea columna", "Elimina columna"], answer: "Alias temporal 'n'" }
        ]
    },
    {
        title: "INSERT, UPDATE, DELETE",
        dictionary: [
            { term: "INSERT INTO", definition: "Agrega nuevos registros a una tabla." },
            { term: "VALUES", definition: "Especifica los valores a insertar en cada columna." },
            { term: "UPDATE", definition: "Modifica registros existentes." },
            { term: "SET", definition: "Especifica las columnas y nuevos valores en UPDATE." },
            { term: "DELETE", definition: "Elimina registros de una tabla." },
            { term: "TRUNCATE", definition: "Elimina todos los registros rapidamente." },
            { term: "DROP TABLE", definition: "Elimina la tabla completa con su estructura." }
        ],
        lesson: [
            { title: "INSERT INTO", dialogo: "<p>Agrega nuevos registros a una tabla.</p>", codigo: "INSERT INTO estudiantes (nombre, email, edad)\\nVALUES ('Ana Garcia', 'ana@email.com', 25);", tourSteps: [ { text: "<code>INSERT INTO</code> especifica la tabla y columnas.", line: 1 }, { text: "<code>VALUES</code> proporciona los valores en orden.", line: 2 } ] },
            { title: "INSERT Multiple", dialogo: "<p>Inserta varios registros en una sola consulta.</p>", codigo: "INSERT INTO productos (nombre, precio)\\nVALUES ('Laptop', 999.99), ('Mouse', 25.50);", tourSteps: [ { text: "Cada par de parentesis es un registro nuevo.", line: 2 } ] },
            { title: "UPDATE", dialogo: "<p>Modifica registros existentes. SIEMPRE usa WHERE para no actualizar todo.</p>", codigo: "UPDATE estudiantes SET email = 'nuevo@email.com'\\nWHERE id = 1;", tourSteps: [ { text: "<code>SET</code> define las columnas a cambiar.", line: 1 }, { text: "<code>WHERE id = 1</code> limita a un solo registro. Sin WHERE, actualiza TODOS!", line: 2 } ] },
            { title: "UPDATE Multiple", dialogo: "<p>Modifica varias columnas a la vez.</p>", codigo: "UPDATE productos SET precio = precio * 1.1, stock = stock - 1\\nWHERE id = 5;", tourSteps: [ { text: "Separa multiples columnas con coma en SET.", line: 1 } ] },
            { title: "DELETE", dialogo: "<p>Elimina registros. SIEMPRE usa WHERE.</p>", codigo: "DELETE FROM estudiantes WHERE id = 1;", tourSteps: [ { text: "Sin WHERE, eliminaria TODOS los registros!", line: 1 } ] },
            { title: "TRUNCATE", dialogo: "<p>Elimina TODOS los registros rapidamente. No se puede deshacer.</p>", codigo: "TRUNCATE TABLE productos;", tourSteps: [ { text: "Mas rapido que DELETE sin WHERE. Reinicia AUTOINCREMENT.", line: 1 } ] },
            { title: "DROP TABLE", dialogo: "<p>Elimina la tabla completa con su estructura. Irreversible.</p>", codigo: "DROP TABLE estudiantes;", tourSteps: [ { text: "Elimina tabla Y datos. No confundir con TRUNCATE.", line: 1 } ] },
            { title: "Transacciones", dialogo: "<p><code>BEGIN</code>, <code>COMMIT</code>, <code>ROLLBACK</code> para operaciones atomicas.</p>", codigo: "BEGIN;\\nUPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;\\nUPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;\\nCOMMIT;", tourSteps: [ { text: "<code>BEGIN</code> inicia la transaccion.", line: 1 }, { text: "<code>COMMIT</code> confirma todos los cambios. Si algo falla, usa <code>ROLLBACK</code>.", line: 4 } ] },
            { title: "Precauciones", dialogo: "<p>Regla de oro: SIEMPRE usa WHERE en UPDATE y DELETE. Haz un SELECT primero para verificar que filas afectaras.</p>" },
            { title: "Listo para el Quiz!", dialogo: "<p>INSERT, UPDATE y DELETE modifican datos. Demuestra que sabes manipularlos!</p>" }
        ],
        quiz: [
            { type: "multiple-choice", question: "Que comando agrega registros?", options: ["ADD", "INSERT", "CREATE", "NEW"], answer: "INSERT" },
            { type: "multiple-choice", question: "Que comando modifica registros?", options: ["MODIFY", "CHANGE", "UPDATE", "EDIT"], answer: "UPDATE" },
            { type: "multiple-choice", question: "Que comando elimina registros?", options: ["REMOVE", "DELETE", "ERASE", "CLEAR"], answer: "DELETE" },
            { type: "multiple-choice", question: "Que clausula especifica que registros modificar?", options: ["WHEN", "IF", "WHERE", "CONDITION"], answer: "WHERE" },
            { type: "multiple-choice", question: "Que elimina todos los registros rapidamente?", options: ["DELETE ALL", "TRUNCATE", "CLEAR", "EMPTY"], answer: "TRUNCATE" },
            { type: "multiple-choice", question: "Que elimina la tabla completa?", options: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "CLEAR TABLE"], answer: "DROP TABLE" },
            { type: "multiple-choice", question: "Que inicia una transaccion?", options: ["START", "BEGIN", "OPEN", "INIT"], answer: "BEGIN" },
            { type: "multiple-choice", question: "Que confirma una transaccion?", options: ["CONFIRM", "COMMIT", "SAVE", "END"], answer: "COMMIT" },
            { type: "multiple-choice", question: "Que cancela una transaccion?", options: ["CANCEL", "ROLLBACK", "UNDO", "REVERT"], answer: "ROLLBACK" },
            { type: "multiple-choice", question: "Por que usar WHERE en UPDATE/DELETE?", options: ["Es obligatorio por sintaxis", "Para no afectar todos los registros", "Para hacer mas rapido", "Para ordenar"], answer: "Para no afectar todos los registros" }
        ]
    },
    {
        title: "Relaciones y JOINs",
        dictionary: [
            { term: "INNER JOIN", definition: "Devuelve solo registros con coincidencias en ambas tablas." },
            { term: "LEFT JOIN", definition: "Todos los registros de la tabla izquierda + coincidencias de la derecha." },
            { term: "RIGHT JOIN", definition: "Todos los registros de la tabla derecha + coincidencias de la izquierda." },
            { term: "FULL OUTER JOIN", definition: "Todos los registros de ambas tablas." },
            { term: "ON", definition: "Especifica la condicion de union entre tablas." },
            { term: "Alias de Tabla", definition: "Nombre corto temporal para una tabla (ej: e AS estudiantes)." },
            { term: "Self Join", definition: "Una tabla que se une consigo misma." }
        ],
        lesson: [
            { title: "Tipos de Relaciones", dialogo: "<p><strong>Uno a Muchos:</strong> Un autor tiene muchos libros. <strong>Muchos a Muchos:</strong> Estudiantes y cursos (tabla intermedia). <strong>Uno a Uno:</strong> Usuario y perfil.</p>" },
            { title: "Claves Foraneas", dialogo: "<p>Conectan tablas. Un campo en una tabla apunta a la PK de otra.</p>", codigo: "ALTER TABLE pedidos ADD COLUMN usuario_id INT;\\nALTER TABLE pedidos ADD FOREIGN KEY (usuario_id)\\n    REFERENCES usuarios(id);", tourSteps: [ { text: "Agregamos columna para la relacion.", line: 1 }, { text: "Definimos la clave foranea que referencia usuarios.", line: 2 } ] },
            { title: "INNER JOIN", dialogo: "<p>Solo registros que existen en AMBAS tablas.</p>", codigo: "SELECT usuarios.nombre, pedidos.fecha\\nFROM usuarios\\nINNER JOIN pedidos ON usuarios.id = pedidos.usuario_id;", tourSteps: [ { text: "Seleccionamos columnas de ambas tablas.", line: 1 }, { text: "<code>INNER JOIN</code> une las tablas.", line: 3 }, { text: "<code>ON</code> define como se conectan (PK = FK).", line: 4 } ] },
            { title: "LEFT JOIN", dialogo: "<p>Todos los registros de la tabla izquierda, con o sin coincidencia en la derecha.</p>", codigo: "SELECT usuarios.nombre, pedidos.fecha\\nFROM usuarios\\nLEFT JOIN pedidos ON usuarios.id = pedidos.usuario_id;", tourSteps: [ { text: "Incluye usuarios SIN pedidos (fecha sera NULL).", line: 3 } ] },
            { title: "RIGHT JOIN", dialogo: "<p>Todos los registros de la tabla derecha, con o sin coincidencia en la izquierda.</p>" },
            { title: "FULL OUTER JOIN", dialogo: "<p>Todos los registros de AMBAS tablas, con NULL donde no hay coincidencia.</p>" },
            { title: "JOIN Multiple", dialogo: "<p>Une mas de dos tablas en una consulta.</p>", codigo: "SELECT u.nombre, p.fecha, pr.nombre as producto\\nFROM usuarios u\\nJOIN pedidos p ON u.id = p.usuario_id\\nJOIN productos pr ON p.producto_id = pr.id;", tourSteps: [ { text: "Usamos aliases (u, p, pr) para simplificar.", line: 1 }, { text: "Primer JOIN: usuarios con pedidos.", line: 3 }, { text: "Segundo JOIN: pedidos con productos.", line: 4 } ] },
            { title: "Alias de Tablas", dialogo: "<p><code>AS</code> crea nombres cortos. <code>FROM usuarios AS u</code> o simplemente <code>FROM usuarios u</code>.</p>" },
            { title: "Cual JOIN usar?", dialogo: "<p><strong>INNER JOIN:</strong> Solo coincidencias. <strong>LEFT JOIN:</strong> Todos de la izquierda. <strong>FULL:</strong> Todos de ambas.</p>" },
            { title: "Listo para el Quiz!", dialogo: "<p>Las JOINs conectan datos entre tablas. Demuestra que sabes unirlas!</p>" }
        ],
        quiz: [
            { type: "multiple-choice", question: "Que JOIN devuelve solo coincidencias?", options: ["LEFT JOIN", "RIGHT JOIN", "INNER JOIN", "FULL JOIN"], answer: "INNER JOIN" },
            { type: "multiple-choice", question: "Que JOIN devuelve todo de la izquierda?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL JOIN"], answer: "LEFT JOIN" },
            { type: "multiple-choice", question: "Que JOIN devuelve todo de ambas tablas?", options: ["INNER JOIN", "LEFT JOIN", "RIGHT JOIN", "FULL OUTER JOIN"], answer: "FULL OUTER JOIN" },
            { type: "multiple-choice", question: "Que palabra conecta tablas en JOIN?", options: ["WITH", "ON", "USING", "BY"], answer: "ON" },
            { type: "multiple-choice", question: "Que es un alias de tabla?", options: ["Renombrar permanentemente", "Nombre corto temporal", "Crear nueva tabla", "Copiar tabla"], answer: "Nombre corto temporal" },
            { type: "multiple-choice", question: "Cuantas tablas puedes unir?", options: ["Solo 2", "Hasta 3", "Sin limite", "Depende del DBMS"], answer: "Sin limite" },
            { type: "multiple-choice", question: "Que es una relacion Muchos a Muchos?", options: ["Un usuario muchos pedidos", "Estudiante muchos cursos", "Empleado muchos proyectos", "Todas las anteriores"], answer: "Todas las anteriores" },
            { type: "multiple-choice", question: "Para Muchos a Muchos, que necesitas?", options: ["Una tabla", "Dos tablas", "Tabla intermedia/puente", "No se puede"], answer: "Tabla intermedia/puente" },
            { type: "multiple-choice", question: "Si un usuario no tiene pedidos, LEFT JOIN devuelve?", options: ["Nada", "El usuario con NULL en pedidos", "Error", "Solo los pedidos"], answer: "El usuario con NULL en pedidos" },
            { type: "multiple-choice", question: "Para que sirven las JOINs?", options: ["Solo para diseno", "Combinar datos de multiples tablas", "Hacer consultas mas rapidas", "Crear indices"], answer: "Combinar datos de multiples tablas" }
        ]
    },
    {
        title: "Funciones de Agregacion Avanzadas",
        dictionary: [
            { term: "GROUP BY", definition: "Agrupa filas con valores iguales para aplicar funciones de agregacion." },
            { term: "HAVING", definition: "Filtra grupos despues de GROUP BY (como WHERE pero para grupos)." },
            { term: "COUNT", definition: "Cuenta filas o valores no NULL." },
            { term: "SUM", definition: "Suma todos los valores de una columna numerica." },
            { term: "AVG", definition: "Calcula el promedio de valores." },
            { term: "MAX/MIN", definition: "Encuentra el valor maximo/minimo." },
            { term: "COALESCE", definition: "Devuelve el primer valor no NULL de una lista." }
        ],
        lesson: [
            { title: "GROUP BY", dialogo: "<p>Agrupa filas que comparten el mismo valor. Se usa con funciones de agregacion.</p>", codigo: "SELECT categoria, COUNT(*) as total\\nFROM productos\\nGROUP BY categoria;", tourSteps: [ { text: "Agrupa por categoria y cuenta productos en cada una.", line: 1 } ] },
            { title: "HAVING", dialogo: "<p>Filtra grupos. WHERE filtra filas, HAVING filtra grupos.</p>", codigo: "SELECT categoria, COUNT(*) as total\\nFROM productos\\nGROUP BY categoria\\nHAVING COUNT(*) > 5;", tourSteps: [ { text: "Solo muestra categorias con mas de 5 productos.", line: 4 } ] },
            { title: "Funciones de Texto", dialogo: "<p><code>UPPER()</code>, <code>LOWER()</code>, <code>LENGTH()</code>, <code>CONCAT()</code>, <code>SUBSTRING()</code>.</p>", codigo: "SELECT UPPER(nombre), LENGTH(email) FROM usuarios;", tourSteps: [ { text: "<code>UPPER()</code> convierte a mayusculas. <code>LENGTH()</code> cuenta caracteres.", line: 1 } ] },
            { title: "Funciones de Fecha", dialogo: "<p><code>NOW()</code>, <code>CURDATE()</code>, <code>DATE_ADD()</code>, <code>DATEDIFF()</code>.</p>", codigo: "SELECT DATEDIFF(fecha_fin, fecha_inicio) as dias\\nFROM proyectos;", tourSteps: [ { text: "Calcula la diferencia en dias entre dos fechas.", line: 1 } ] },
            { title: "Funciones Matematicas", dialogo: "<p><code>ROUND()</code>, <code>CEIL()</code>, <code>FLOOR()</code>, <code>ABS()</code>.</p>", codigo: "SELECT ROUND(precio, 2) FROM productos;", tourSteps: [ { text: "Redondea a 2 decimales.", line: 1 } ] },
            { title: "COALESCE", dialogo: "<p>Devuelve el primer valor no NULL. Util para valores por defecto.</p>", codigo: "SELECT nombre, COALESCE(telefono, 'Sin telefono') FROM usuarios;", tourSteps: [ { text: "Si telefono es NULL, muestra 'Sin telefono'.", line: 1 } ] },
            { title: "CASE WHEN", dialogo: "<p>Como un if/else en SQL.</p>", codigo: "SELECT nombre,\\n  CASE WHEN edad >= 18 THEN 'Adulto' ELSE 'Menor' END as tipo\\nFROM usuarios;", tourSteps: [ { text: "Si edad >= 18, devuelve 'Adulto', sino 'Menor'.", line: 2 } ] },
            { title: "Subconsultas en SELECT", dialogo: "<p>Puedes usar una consulta dentro de otra.</p>", codigo: "SELECT nombre, (SELECT COUNT(*) FROM pedidos p WHERE p.usuario_id = u.id) as total_pedidos\\nFROM usuarios u;", tourSteps: [ { text: "La subconsulta cuenta pedidos por usuario.", line: 1 } ] },
            { title: "Orden de Ejecucion SQL", dialogo: "<p>1. FROM/JOIN → 2. WHERE → 3. GROUP BY → 4. HAVING → 5. SELECT → 6. ORDER BY → 7. LIMIT</p>" },
            { title: "Listo para el Quiz!", dialogo: "<p>Las funciones avanzadas hacen SQL mas poderoso. Demuestra que sabes usarlas!</p>" }
        ],
        quiz: [
            { type: "multiple-choice", question: "Que clausula agrupa filas?", options: ["GROUP BY", "ORDER BY", "SORT BY", "CLUSTER BY"], answer: "GROUP BY" },
            { type: "multiple-choice", question: "Que clausula filtra grupos?", options: ["WHERE", "HAVING", "FILTER", "GROUP WHERE"], answer: "HAVING" },
            { type: "multiple-choice", question: "Diferencia entre WHERE y HAVING?", options: ["Son iguales", "WHERE filtra filas, HAVING filtra grupos", "WHERE es mas rapido", "HAVING es obligatorio"], answer: "WHERE filtra filas, HAVING filtra grupos" },
            { type: "multiple-choice", question: "Que funcion convierte a mayusculas?", options: ["UPPER()", "UP()", "TOUPPER()", "CAPS()"], answer: "UPPER()" },
            { type: "multiple-choice", question: "Que funcion devuelve la fecha actual?", options: ["TODAY()", "NOW()", "CURRENT()", "DATE()"], answer: "NOW()" },
            { type: "multiple-choice", question: "Que hace COALESCE(a, b)?", options: ["Suma a + b", "Devuelve a si no es NULL, sino b", "Concatena a y b", "Compara a con b"], answer: "Devuelve a si no es NULL, sino b" },
            { type: "multiple-choice", question: "Que hace CASE WHEN?", options: ["Crea una tabla", "Evalua condiciones como if/else", "Agrupa datos", "Ordena resultados"], answer: "Evalua condiciones como if/else" },
            { type: "multiple-choice", question: "Orden correcto de ejecucion SQL?", options: ["SELECT, FROM, WHERE", "FROM, WHERE, GROUP BY, HAVING, SELECT", "WHERE, SELECT, FROM", "FROM, SELECT, WHERE"], answer: "FROM, WHERE, GROUP BY, HAVING, SELECT" },
            { type: "multiple-choice", question: "Que funcion redondea numeros?", options: ["ROUND()", "CEIL()", "FLOOR()", "Todas las anteriores"], answer: "Todas las anteriores" },
            { type: "multiple-choice", question: "Puedes usar funciones de agregacion sin GROUP BY?", options: ["No, nunca", "Si, para toda la tabla", "Solo con COUNT", "Solo con SUM"], answer: "Si, para toda la tabla" }
        ]
    },
    {
        title: "Indices y Optimizacion",
        dictionary: [
            { term: "INDICE", definition: "Estructura que acelera las consultas creando un camino rapido de busqueda." },
            { term: "CREATE INDEX", definition: "Crea un indice en una o mas columnas." },
            { term: "INDICE UNICO", definition: "Indice que tambien enforce unicidad (como UNIQUE constraint)." },
            { term: "EXPLAIN", definition: "Muestra el plan de ejecucion de una consulta." },
            { term: "VISTA", definition: "Consulta guardada que se comporta como una tabla virtual." },
            { term: "INDICE COMPUESTO", definition: "Indice en multiples columnas." },
            { term: "FULL TABLE SCAN", definition: "Recorrer toda la tabla sin indice. Lento en tablas grandes." }
        ],
        lesson: [
            { title: "Que son los Indices", dialogo: "<p>Los indices son como el indice de un libro: te llevan directo a la pagina en vez de leer todo. Aceleran SELECT pero ralentizan INSERT/UPDATE/DELETE.</p>" },
            { title: "CREATE INDEX", dialogo: "<p>Crea indices en columnas que buscas frecuentemente.</p>", codigo: "CREATE INDEX idx_email ON usuarios(email);", tourSteps: [ { text: "Crea un indice en la columna email para busquedas rapidas.", line: 1 } ] },
            { title: "Indices Compuestos", dialogo: "<p>Indices en multiples columnas. El orden importa.</p>", codigo: "CREATE INDEX idx_nombre_email ON usuarios(nombre, email);", tourSteps: [ { text: "Indice en nombre Y email. Optimiza busquedas por nombre primero.", line: 1 } ] },
            { title: "Indices Unicos", dialogo: "<p>Aseguran unicidad Y aceleran busquedas.</p>", codigo: "CREATE UNIQUE INDEX idx_email ON usuarios(email);", tourSteps: [ { text: "No permite emails duplicados Y acelera busquedas.", line: 1 } ] },
            { title: "DROP INDEX", dialogo: "<p>Elimina indices cuando no son necesarios.</p>", codigo: "DROP INDEX idx_email;", tourSteps: [ { text: "Elimina el indice. Las busquedas por email seran mas lentas.", line: 1 } ] },
            { title: "EXPLAIN", dialogo: "<p>Muestra como SQL ejecuta tu consulta. Busca 'index scan' vs 'table scan'.</p>", codigo: "EXPLAIN SELECT * FROM usuarios WHERE email = 'test@test.com';", tourSteps: [ { text: "Muestra el plan de ejecucion. Si dice 'index scan', esta usando el indice.", line: 1 } ] },
            { title: "Cuando crear indices", dialogo: "<p>En columnas de WHERE, JOIN, ORDER BY. No en tablas pequenas o columnas que cambian mucho.</p>" },
            { title: "Vistas (Views)", dialogo: "<p>Consultas guardadas que se usan como tablas.</p>", codigo: "CREATE VIEW usuarios_activos AS\\nSELECT * FROM usuarios WHERE activo = 1;", tourSteps: [ { text: "Crea una vista que filtra solo usuarios activos.", line: 1 } ] },
            { title: "Optimizacion de Consultas", dialogo: "<p>1. Usa indices apropiados. 2. Evita SELECT *. 3. Usa LIMIT. 4. Evita funciones en WHERE. 5. Analiza con EXPLAIN.</p>" },
            { title: "Listo para el Quiz!", dialogo: "<p>Indices y optimizacion hacen las consultas rapidas. Demuestra que sabes optimizar!</p>" }
        ],
        quiz: [
            { type: "multiple-choice", question: "Para que sirven los indices?", options: ["Almacenar datos", "Acelerar consultas", "Crear tablas", "Hacer backups"], answer: "Acelerar consultas" },
            { type: "multiple-choice", question: "Que comando crea indices?", options: ["CREATE INDEX", "ADD INDEX", "NEW INDEX", "MAKE INDEX"], answer: "CREATE INDEX" },
            { type: "multiple-choice", question: "Que comando analiza consultas?", options: ["ANALYZE", "EXPLAIN", "DESCRIBE", "SHOW"], answer: "EXPLAIN" },
            { type: "multiple-choice", question: "Que son las vistas?", options: ["Tablas fisicas", "Tablas virtuales basadas en consultas", "Indices", "Procedimientos"], answer: "Tablas virtuales basadas en consultas" },
            { type: "multiple-choice", question: "Los indices ralentizan que operacion?", options: ["SELECT", "INSERT/UPDATE/DELETE", "JOIN", "WHERE"], answer: "INSERT/UPDATE/DELETE" },
            { type: "multiple-choice", question: "Que tipo de indice asegura unicidad?", options: ["PRIMARY", "UNIQUE", "NORMAL", "SIMPLE"], answer: "UNIQUE" },
            { type: "multiple-choice", question: "Que es un full table scan?", options: ["Uso de indice", "Recorrer toda la tabla sin indice", "Backup completo", "Consulta rapida"], answer: "Recorrer toda la tabla sin indice" },
            { type: "multiple-choice", question: "Por que evitar SELECT *?", options: ["Trae datos innecesarios", "Es mas lento", "Ambas anteriores", "No hay problema"], answer: "Ambas anteriores" },
            { type: "multiple-choice", question: "En que columnas crear indices?", options: ["Todas", "Solo PK", "WHERE, JOIN, ORDER BY frecuentes", "Solo TEXT"], answer: "WHERE, JOIN, ORDER BY frecuentes" },
            { type: "multiple-choice", question: "Que comando crea vistas?", options: ["CREATE VIEW", "NEW VIEW", "MAKE VIEW", "ADD VIEW"], answer: "CREATE VIEW" }
        ]
    },
    {
        title: "Subconsultas",
        dictionary: [
            { term: "SUBCONSULTA", definition: "Una consulta dentro de otra consulta." },
            { term: "Subconsulta Escalar", definition: "Devuelve un solo valor. Se usa en SELECT, WHERE." },
            { term: "Subconsulta de Fila", definition: "Devuelve una fila completa." },
            { term: "Subconsulta de Tabla", definition: "Devuelve multiples filas y columnas. Se usa en FROM." },
            { term: "Subconsulta Correlacionada", definition: "Depende de la consulta externa. Se ejecuta por cada fila." },
            { term: "EXISTS", definition: "Verifica si una subconsulta devuelve al menos una fila." },
            { term: "IN", definition: "Verifica si un valor esta en el resultado de una subconsulta." }
        ],
        lesson: [
            { title: "Subconsultas en WHERE", dialogo: "<p>Usa el resultado de una consulta como filtro.</p>", codigo: "SELECT nombre FROM empleados\\nWHERE salario > (SELECT AVG(salario) FROM empleados);", tourSteps: [ { text: "La subconsulta calcula el salario promedio.", line: 2 }, { text: "La consulta externa muestra empleados que ganan mas del promedio.", line: 1 } ] },
            { title: "Subconsultas con IN", dialogo: "<p>Verifica si un valor esta en el resultado de una subconsulta.</p>", codigo: "SELECT nombre FROM productos\\nWHERE categoria_id IN (SELECT id FROM categorias WHERE activa = 1);", tourSteps: [ { text: "Solo productos de categorias activas.", line: 2 } ] },
            { title: "Subconsultas en FROM", dialogo: "<p>Usa una consulta como si fuera una tabla.</p>", codigo: "SELECT dept, avg_sal FROM\\n  (SELECT departamento as dept, AVG(salario) as avg_sal\\n   FROM empleados GROUP BY departamento) as sub;", tourSteps: [ { text: "La subconsulta crea una tabla temporal con promedios.", line: 2 } ] },
            { title: "Subconsultas Correlacionadas", dialogo: "<p>La subconsulta usa valores de la consulta externa. Se ejecuta por cada fila.</p>", codigo: "SELECT nombre FROM empleados e\\nWHERE salario > (SELECT AVG(salario) FROM empleados WHERE departamento = e.departamento);", tourSteps: [ { text: "Compara cada empleado con el promedio de SU departamento.", line: 2 } ] },
            { title: "EXISTS", dialogo: "<p>Verifica si una subconsulta devuelve resultados. Mas eficiente que IN para grandes conjuntos.</p>", codigo: "SELECT nombre FROM clientes c\\nWHERE EXISTS (SELECT 1 FROM pedidos p WHERE p.cliente_id = c.id);", tourSteps: [ { text: "Solo clientes que tienen al menos un pedido.", line: 2 } ] },
            { title: "NOT EXISTS", dialogo: "<p>Lo opuesto: filas que NO tienen coincidencia.</p>", codigo: "SELECT nombre FROM clientes c\\nWHERE NOT EXISTS (SELECT 1 FROM pedidos p WHERE p.cliente_id = c.id);", tourSteps: [ { text: "Clientes SIN pedidos.", line: 2 } ] },
            { title: "Subconsultas vs JOINs", dialogo: "<p>Las subconsultas son utiles para filtros complejos. Los JOINs son mejores para combinar datos. A veces son intercambiables.</p>" },
            { title: "Subconsultas en SELECT", dialogo: "<p>Agrega columnas calculadas desde otra tabla.</p>", codigo: "SELECT nombre, (SELECT COUNT(*) FROM pedidos p WHERE p.usuario_id = u.id) as pedidos\\nFROM usuarios u;", tourSteps: [ { text: "Cuenta pedidos por usuario como columna adicional.", line: 1 } ] },
            { title: "ANY y ALL", dialogo: "<p><code>ANY</code>: verdadero si cumple con ALGUN valor. <code>ALL</code>: verdadero si cumple con TODOS.</p>" },
            { title: "Listo para el Quiz!", dialogo: "<p>Las subconsultas permiten logica compleja. Demuestra que las dominas!</p>" }
        ],
        quiz: [
            { type: "multiple-choice", question: "Que es una subconsulta?", options: ["Una tabla temporal", "Una consulta dentro de otra", "Un indice especial", "Una vista"], answer: "Una consulta dentro de otra" },
            { type: "multiple-choice", question: "Que devuelve una subconsulta escalar?", options: ["Una tabla", "Una fila", "Un solo valor", "Nada"], answer: "Un solo valor" },
            { type: "multiple-choice", question: "Que hace EXISTS?", options: ["Crea una tabla", "Verifica si hay resultados", "Elimina registros", "Ordena datos"], answer: "Verifica si hay resultados" },
            { type: "multiple-choice", question: "Que es una subconsulta correlacionada?", options: ["Independiente", "Depende de la consulta externa", "Usa JOIN", "Es mas rapida"], answer: "Depende de la consulta externa" },
            { type: "multiple-choice", question: "Diferencia entre IN y EXISTS?", options: ["Son iguales", "IN compara valores, EXISTS verifica existencia", "IN es mas rapido siempre", "EXISTS no funciona con subconsultas"], answer: "IN compara valores, EXISTS verifica existencia" },
            { type: "multiple-choice", question: "Donde puedes usar subconsultas?", options: ["Solo en WHERE", "En WHERE, FROM, SELECT", "Solo en FROM", "Solo en SELECT"], answer: "En WHERE, FROM, SELECT" },
            { type: "multiple-choice", question: "Que hace ANY?", options: ["Verifica todos los valores", "Verifica si ALGUN valor cumple", "Cuenta valores", "Suma valores"], answer: "Verifica si ALGUN valor cumple" },
            { type: "multiple-choice", question: "Que hace ALL?", options: ["Verifica algun valor", "Verifica si TODOS los valores cumplen", "Cuenta valores", "Elimina valores"], answer: "Verifica si TODOS los valores cumplen" },
            { type: "multiple-choice", question: "Cuando es mejor EXISTS sobre IN?", options: ["Siempre", "Con grandes conjuntos de datos", "Nunca", "Con subconsultas escalares"], answer: "Con grandes conjuntos de datos" },
            { type: "multiple-choice", question: "Que devuelve NOT EXISTS si la subconsulta tiene resultados?", options: ["TRUE", "FALSE", "NULL", "Error"], answer: "FALSE" }
        ]
    },
    {
        title: "CTEs (Common Table Expressions)",
        dictionary: [
            { term: "CTE", definition: "Expresion de Tabla Comun. Una consulta con nombre temporal definida con WITH." },
            { term: "WITH", definition: "Palabra clave que inicia un CTE." },
            { term: "CTE Recursivo", definition: "CTE que se referencia a si mismo para datos jerarquicos." },
            { term: "Multiple CTEs", definition: "Varios CTEs encadenados separados por comas." },
            { term": "CASE", definition: "Expresion condicional en SQL." },
            { term: "ROW_NUMBER", definition: "Funcion de ventana que numera filas." },
            { term: "RANK", definition: "Funcion de ventana que asigna rangos con saltos." }
        ],
        lesson: [
            { title: "Que son los CTEs", dialogo: "<p>Los CTEs son consultas con nombre temporal. Hacen el codigo mas legible que las subconsultas.</p>", codigo: "WITH ventas_totales AS (\\n    SELECT usuario_id, SUM(monto) as total\\n    FROM ventas GROUP BY usuario_id\\n)\\nSELECT * FROM ventas_totales WHERE total > 1000;", tourSteps: [ { text: "<code>WITH</code> define el CTE llamado 'ventas_totales'.", line: 1 }, { text: "Luego usamos el CTE como si fuera una tabla.", line: 5 } ] },
            { title: "Multiples CTEs", dialogo: "<p>Puedes encadenar varios CTEs separados por comas.</p>", codigo: "WITH ventas AS (SELECT * FROM pedidos WHERE fecha > '2024-01-01'),\\n     totales AS (SELECT usuario_id, SUM(monto) as total FROM ventas GROUP BY usuario_id)\\nSELECT * FROM totales ORDER BY total DESC;", tourSteps: [ { text: "Primer CTE filtra ventas del ano.", line: 1 }, { text: "Segundo CTE usa el primero.", line: 2 } ] },
            { title: "CTEs Recursivos", dialogo: "<p>Se referencian a si mismos. Ideales para jerarquias (organigramas, categorias).</p>", codigo: "WITH RECURSIVE arbol AS (\\n    SELECT id, nombre, jefe_id FROM empleados WHERE jefe_id IS NULL\\n    UNION ALL\\n    SELECT e.id, e.nombre, e.jefe_id FROM empleados e\\n    JOIN arbol a ON e.jefe_id = a.id\\n)\\nSELECT * FROM arbol;", tourSteps: [ { text: "Caso base: empleados sin jefe (CEO).", line: 2 }, { text: "Union recursiva: encuentra subordinados.", line: 4 } ] },
            { title: "CTEs vs Subconsultas", dialogo: "<p>Los CTEs son mas legibles, reutilizables y se pueden referenciar multiples veces. Las subconsultas son inline.</p>" },
            { title: "ROW_NUMBER()", dialogo: "<p>Numera filas dentro de un grupo.</p>", codigo: "SELECT nombre, salario,\\n  ROW_NUMBER() OVER (ORDER BY salario DESC) as ranking\\nFROM empleados;", tourSteps: [ { text: "Asigna numero 1 al salario mas alto, 2 al siguiente, etc.", line: 2 } ] },
            { title: "RANK() y DENSE_RANK()", dialogo: "<p><code>RANK()</code>: salta numeros en empates. <code>DENSE_RANK()</code>: no salta.</p>" },
            { title: "PARTITION BY", dialogo: "<p>Divide los datos en grupos para funciones de ventana.</p>", codigo: "SELECT nombre, departamento, salario,\\n  RANK() OVER (PARTITION BY departamento ORDER BY salario DESC) as rank\\nFROM empleados;", tourSteps: [ { text: "Ranking por departamento, no global.", line: 2 } ] },
            { title: "LAG y LEAD", dialogo: "<p><code>LAG()</code>: valor de la fila anterior. <code>LEAD()</code>: valor de la fila siguiente.</p>", codigo: "SELECT mes, ventas,\\n  LAG(ventas) OVER (ORDER BY mes) as mes_anterior\\nFROM ventas_mensuales;", tourSteps: [ { text: "Compara ventas del mes actual con el anterior.", line: 2 } ] },
            { title: "Ventajas de CTEs", dialogo: "<p>1. Legibilidad. 2. Reutilizacion. 3. Recursividad. 4. Separacion de logica compleja.</p>" },
            { title: "Listo para el Quiz!", dialogo: "<p>CTEs y funciones de ventana son herramientas avanzadas. Demuestra que las dominas!</p>" }
        ],
        quiz: [
            { type: "multiple-choice", question: "Que palabra clave inicia un CTE?", options: ["SELECT", "WITH", "CREATE", "DEFINE"], answer: "WITH" },
            { type: "multiple-choice", question: "Que es un CTE recursivo?", options: ["Un CTE simple", "Un CTE que se referencia a si mismo", "Un CTE con JOIN", "Un CTE con WHERE"], answer: "Un CTE que se referencia a si mismo" },
            { type: "multiple-choice", question: "Que hace ROW_NUMBER()?", options: ["Cuenta filas", "Numera filas secuencialmente", "Suma valores", "Ordena datos"], answer: "Numera filas secuencialmente" },
            { type: "multiple-choice", question: "Diferencia entre RANK y DENSE_RANK?", options: ["Son iguales", "RANK salta numeros en empates, DENSE_RANK no", "DENSE_RANK es mas lento", "RANK no funciona con PARTITION BY"], answer: "RANK salta numeros en empates, DENSE_RANK no" },
            { type: "multiple-choice", question: "Que hace PARTITION BY?", options: ["Elimina datos", "Divide datos en grupos para funciones de ventana", "Crea tablas", "Ordena datos"], answer: "Divide datos en grupos para funciones de ventana" },
            { type: "multiple-choice", question: "Que hace LAG()?", options: ["Retrasa la consulta", "Obtiene valor de la fila anterior", "Ordena descendente", "Elimina filas"], answer: "Obtiene valor de la fila anterior" },
            { type: "multiple-choice", question: "Ventaja de CTEs sobre subconsultas?", options: ["Son mas rapidos siempre", "Mas legibles y reutilizables", "Ocupan menos espacio", "No tienen ventajas"], answer: "Mas legibles y reutilizables" },
            { type: "multiple-choice", question: "Puedes tener multiples CTEs?", options: ["No, solo uno", "Si, separados por comas", "Solo dos", "Solo con UNION"], answer: "Si, separados por comas" },
            { type: "multiple-choice", question: "Para que son utiles los CTEs recursivos?", options: ["Consultas simples", "Datos jerarquicos (organigramas, arboles)", "Calculos matematicos", "Ordenamiento"], answer: "Datos jerarquicos (organigramas, arboles)" },
            { type: "multiple-choice", question: "Que hace LEAD()?", options: ["Obtiene valor de la fila siguiente", "Obtiene valor anterior", "Ordena ascendente", "Cuenta filas"], answer: "Obtiene valor de la fila siguiente" }
        ]
    },
    {
        title: "Triggers",
        dictionary: [
            { term: "TRIGGER", definition: "Procedimiento automatico que se ejecuta ante un evento (INSERT, UPDATE, DELETE)." },
            { term: "BEFORE", definition: "El trigger se ejecuta ANTES del evento." },
            { term: "AFTER", definition: "El trigger se ejecuta DESPUES del evento." },
            { term: "NEW", definition: "Referencia a la nueva fila en INSERT/UPDATE." },
            { term: "OLD", definition: "Referencia a la fila anterior en UPDATE/DELETE." },
            { term: "DROP TRIGGER", definition: "Elimina un trigger existente." },
            { term: "Auditoria", definition: "Registro automatico de cambios en los datos." }
        ],
        lesson: [
            { title: "Que son los Triggers", dialogo: "<p>Los triggers son procedimientos automaticos que se ejecutan cuando ocurre un evento en una tabla (INSERT, UPDATE, DELETE).</p>" },
            { title: "CREATE TRIGGER", dialogo: "<p>Crea un trigger que se ejecuta automaticamente.</p>", codigo: "CREATE TRIGGER actualizar_stock\\nAFTER INSERT ON pedidos\\nFOR EACH ROW\\nBEGIN\\n    UPDATE productos SET stock = stock - NEW.cantidad\\n    WHERE id = NEW.producto_id;\\nEND;", tourSteps: [ { text: "Trigger que se ejecuta despues de cada INSERT en pedidos.", line: 2 }, { text: "<code>NEW.cantidad</code> accede al valor insertado.", line: 5 } ] },
            { title: "BEFORE vs AFTER", dialogo: "<p><code>BEFORE</code>: antes del evento (puedes modificar NEW). <code>AFTER</code>: despues del evento (datos ya guardados).</p>" },
            { title: "Trigger de Auditoria", dialogo: "<p>Registra cambios automaticamente.</p>", codigo: "CREATE TRIGGER log_cambios\\nAFTER UPDATE ON usuarios\\nFOR EACH ROW\\nBEGIN\\n    INSERT INTO auditoria (usuario_id, cambio, fecha)\\n    VALUES (OLD.id, 'actualizado', NOW());\\nEND;", tourSteps: [ { text: "<code>OLD.id</code> accede al valor antes del UPDATE.", line: 5 } ] },
            { title: "NEW y OLD", dialogo: "<p><code>NEW</code>: valores nuevos (INSERT/UPDATE). <code>OLD</code>: valores viejos (UPDATE/DELETE).</p>" },
            { title: "Trigger para Validar", dialogo: "<p>Usa BEFORE para validar datos antes de guardar.</p>", codigo: "CREATE TRIGGER validar_edad\\nBEFORE INSERT ON usuarios\\nFOR EACH ROW\\nBEGIN\\n    IF NEW.edad < 0 THEN\\n        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Edad invalida';\\n    END IF;\\nEND;", tourSteps: [ { text: "Si la edad es negativa, lanza un error.", line: 5 } ] },
            { title: "DROP TRIGGER", dialogo: "<p>Elimina un trigger.</p>", codigo: "DROP TRIGGER IF EXISTS actualizar_stock;", tourSteps: [ { text: "Elimina el trigger si existe.", line: 1 } ] },
            { title: "Casos de Uso", dialogo: "<p>1. Auditoria de cambios. 2. Validacion de datos. 3. Actualizaciones automaticas. 4. Calculos derivados. 5. Sincronizacion entre tablas.</p>" },
            { title: "Precauciones", dialogo: "<p>Los triggers pueden hacer el codigo dificil de debuggear. Usalos con moderacion y documentalos bien.</p>" },
            { title: "Listo para el Quiz!", dialogo: "<p>Los triggers automatizan acciones. Demuestra que sabes crearlos!</p>" }
        ],
        quiz: [
            { type: "multiple-choice", question: "Que es un trigger?", options: ["Una tabla especial", "Procedimiento automatico ante un evento", "Un tipo de indice", "Una vista"], answer: "Procedimiento automatico ante un evento" },
            { type: "multiple-choice", question: "Cuando se ejecuta un trigger BEFORE?", options: ["Despues del evento", "Antes del evento", "Solo en SELECT", "Nunca"], answer: "Antes del evento" },
            { type: "multiple-choice", question: "Que representa NEW en un trigger?", options: ["La tabla nueva", "Los valores nuevos de la fila", "El trigger nuevo", "La base de datos nueva"], answer: "Los valores nuevos de la fila" },
            { type: "multiple-choice", question: "Que representa OLD en un trigger?", options: ["Los valores anteriores de la fila", "La tabla vieja", "El trigger viejo", "La base de datos vieja"], answer: "Los valores anteriores de la fila" },
            { type: "multiple-choice", question: "Para que sirve un trigger de auditoria?", options: ["Borrar datos", "Registrar cambios automaticamente", "Crear indices", "Ordenar datos"], answer: "Registrar cambios automaticamente" },
            { type: "multiple-choice", question: "Que comando elimina un trigger?", options: ["DELETE TRIGGER", "DROP TRIGGER", "REMOVE TRIGGER", "CLEAR TRIGGER"], answer: "DROP TRIGGER" },
            { type: "multiple-choice", question: "Puedes modificar datos en un trigger BEFORE?", options: ["No, nunca", "Si, puedes modificar NEW", "Solo en AFTER", "Solo con SELECT"], answer: "Si, puedes modificar NEW" },
            { type: "multiple-choice", question: "En que eventos se pueden crear triggers?", options: ["Solo INSERT", "INSERT, UPDATE, DELETE", "Solo SELECT", "Solo CREATE"], answer: "INSERT, UPDATE, DELETE" },
            { type: "multiple-choice", question: "Que hace SIGNAL SQLSTATE?", options: ["Crea un trigger", "Lanza un error personalizado", "Elimina datos", "Crea una tabla"], answer: "Lanza un error personalizado" },
            { type: "multiple-choice", question: "FOR EACH ROW significa?", options: ["Se ejecuta una vez por tabla", "Se ejecuta por cada fila afectada", "Se ejecuta una vez por transaccion", "No se ejecuta"], answer: "Se ejecuta por cada fila afectada" }
        ]
    },
    {
        title: "Normalizacion",
        dictionary: [
            { term: "NORMALIZACION", definition: "Proceso de organizar datos para eliminar redundancia y anomalias." },
            { term: "1NF", definition: "Primera Forma Normal: valores atomicos, sin grupos repetidos." },
            { term: "2NF", definition: "Segunda Forma Normal: 1NF + sin dependencias parciales." },
            { term: "3NF", definition: "Tercera Forma Normal: 2NF + sin dependencias transitivas." },
            { term: "DEPENDENCIA FUNCIONAL", definition: "Cuando un valor determina otro valor unico." },
            { term: "DESNORMALIZACION", definition: "Romper reglas de normalizacion para mejorar rendimiento." },
            { term: "ANOMALIA", definition: "Problemas al insertar, actualizar o eliminar datos redundantes." }
        ],
        lesson: [
            { title: "Que es la Normalizacion", dialogo: "<p>Es el proceso de organizar datos en tablas para eliminar redundancia y evitar anomalias de insercion, actualizacion y eliminacion.</p>" },
            { title: "Primera Forma Normal (1NF)", dialogo: "<p>1. Valores atomicos (una sola cosa por celda). 2. Sin grupos repetidos. 3. Cada fila es unica.</p>", codigo: "-- MAL: telefono1, telefono2, telefono3\\n-- BIEN: tabla separada telefonos(usuario_id, telefono)", tourSteps: [ { text: "En vez de multiples columnas para telefonos, crea una tabla relacionada.", line: 2 } ] },
            { title: "Segunda Forma Normal (2NF)", dialogo: "<p>Debe estar en 1NF + todos los campos no-clave deben depender de TODA la clave primaria, no solo parte.</p>" },
            { title: "Tercera Forma Normal (3NF)", dialogo: "<p>Debe estar en 2NF + ningun campo no-clave debe depender de otro campo no-clave (sin dependencias transitivas).</p>", codigo: "-- MAL: empleados(id, nombre, depto, depto_ubicacion)\\n-- depto_ubicacion depende de depto, no de id\\n-- BIEN: tabla separada departamentos(id, nombre, ubicacion)", tourSteps: [ { text: "La ubicacion depende del departamento, no del empleado directamente.", line: 2 } ] },
            { title: "BCNF", dialogo: "<p>Boyce-Codd Normal Form: version mas estricta de 3NF. Cada determinante debe ser una clave candidata.</p>" },
            { title: "Anomalias", dialogo: "<p><strong>Insercion:</strong> No puedes agregar un depto sin empleados. <strong>Actualizacion:</strong> Cambiar ubicacion de depto en multiples filas. <strong>Eliminacion:</strong> Borrar un empleado borra info del depto.</p>" },
            { title: "Desnormalizacion", dialogo: "<p>A veces se rompen reglas de normalizacion para mejorar rendimiento en consultas frecuentes. Es un balance entre integridad y velocidad.</p>" },
            { title: "Cuando Normalizar", dialogo: "<p>Siempre en diseno inicial. Desnormaliza solo cuando el rendimiento lo requiera y tengas datos que lo justifiquen.</p>" },
            { title: "Ejemplo Practico", dialogo: "<p>Tabla original: pedidos(id, cliente, email, producto, precio, categoria, cat_desc). Normalizada: clientes(id, nombre, email), productos(id, nombre, precio, categoria_id), categorias(id, nombre, descripcion), pedidos(id, cliente_id, producto_id).</p>" },
            { title: "Listo para el Quiz!", dialogo: "<p>La normalizacion elimina redundancia. Demuestra que sabes normalizar!</p>" }
        ],
        quiz: [
            { type: "multiple-choice", question: "Que elimina la 1NF?", options: ["Dependencias parciales", "Grupos repetidos y valores no atomicos", "Dependencias transitivas", "Dependencias multivalor"], answer: "Grupos repetidos y valores no atomicos" },
            { type: "multiple-choice", question: "Que elimina la 2NF?", options: ["Grupos repetidos", "Dependencias parciales", "Dependencias transitivas", "Dependencias multivalor"], answer: "Dependencias parciales" },
            { type: "multiple-choice", question: "Que elimina la 3NF?", options: ["Grupos repetidos", "Dependencias parciales", "Dependencias transitivas", "Dependencias multivalor"], answer: "Dependencias transitivas" },
            { type: "multiple-choice", question: "Que es mas estricta que 3NF?", options: ["1NF", "2NF", "BCNF", "4NF"], answer: "BCNF" },
            { type: "multiple-choice", question: "Que es la desnormalizacion?", options: ["Seguir reglas estrictamente", "Romper reglas para mejorar rendimiento", "Crear mas tablas", "Eliminar indices"], answer: "Romper reglas para mejorar rendimiento" },
            { type: "multiple-choice", question: "Que es una anomalia de actualizacion?", options: ["No poder insertar datos", "Tener que cambiar el mismo dato en multiples filas", "Perder datos al eliminar", "Crear datos duplicados"], answer: "Tener que cambiar el mismo dato en multiples filas" },
            { type: "multiple-choice", question: "Por que normalizar?", options: ["Hacer mas lento", "Eliminar redundancia y anomalias", "Usar mas espacio", "Complicar consultas"], answer: "Eliminar redundancia y anomalias" },
            { type: "multiple-choice", question: "Que es un valor atomico?", options: ["Un valor que se puede dividir", "Un valor indivisible (una sola cosa)", "Un valor numerico", "Un valor NULL"], answer: "Un valor indivisible (una sola cosa)" },
            { type: "multiple-choice", question: "Forma normal mas basica?", options: ["1NF", "2NF", "3NF", "BCNF"], answer: "1NF" },
            { type: "multiple-choice", question: "Cuando desnormalizar?", options: ["Siempre", "Cuando el rendimiento lo requiera", "Nunca", "Solo en pruebas"], answer: "Cuando el rendimiento lo requiera" }
        ]
    },
    {
        title: "Transacciones y Concurrencia",
        dictionary: [
            { term: "TRANSACCION", definition: "Grupo de operaciones que se ejecutan como una unidad atomica." },
            { term: "ACID", definition: "Atomicidad, Consistencia, Aislamiento, Durabilidad." },
            { term: "ATOMICIDAD", definition: "Todo o nada: todas las operaciones exiten o ninguna." },
            { term: "AISLAMIENTO", definition: "Las transacciones no interfieren entre si." },
            { term: "DEADLOCK", definition: "Dos transacciones se bloquean mutuamente esperando recursos." },
            { term: "FOR UPDATE", definition: "Bloquea filas para evitar modificaciones concurrentes." },
            { term: "NIVEL DE AISLAMIENTO", definition: "Grado de separacion entre transacciones concurrentes." }
        ],
        lesson: [
            { title: "Propiedades ACID", dialogo: "<p><strong>Atomicidad:</strong> Todo o nada. <strong>Consistencia:</strong> La BD pasa de un estado valido a otro. <strong>Aislamiento:</strong> Transacciones no interfieren. <strong>Durabilidad:</strong> Los cambios persisten tras COMMIT.</p>" },
            { title: "BEGIN, COMMIT, ROLLBACK", dialogo: "<p><code>BEGIN</code> inicia. <code>COMMIT</code> confirma. <code>ROLLBACK</code> deshace.</p>", codigo: "BEGIN;\\nUPDATE cuentas SET saldo = saldo - 100 WHERE id = 1;\\nUPDATE cuentas SET saldo = saldo + 100 WHERE id = 2;\\nCOMMIT;", tourSteps: [ { text: "Si algo falla entre BEGIN y COMMIT, usa ROLLBACK para deshacer.", line: 4 } ] },
            { title: "Niveles de Aislamiento", dialogo: "<p><code>READ UNCOMMITTED</code> (mas permisivo), <code>READ COMMITTED</code>, <code>REPEATABLE READ</code>, <code>SERIALIZABLE</code> (mas estricto).</p>" },
            { title: "SELECT ... FOR UPDATE", dialogo: "<p>Bloquea filas para que otras transacciones no las modifiquen.</p>", codigo: "BEGIN;\\nSELECT saldo FROM cuentas WHERE id = 1 FOR UPDATE;\\nUPDATE cuentas SET saldo = saldo - 50 WHERE id = 1;\\nCOMMIT;", tourSteps: [ { text: "FOR UPDATE bloquea la fila hasta que se haga COMMIT o ROLLBACK.", line: 2 } ] },
            { title: "Deadlocks", dialogo: "<p>Cuando dos transacciones se bloquean mutuamente. El DBMS detecta y resuelve matando una.</p>" },
            { title: "Prevencion de Deadlocks", dialogo: "<p>1. Accede a tablas en el mismo orden. 2. Manten transacciones cortas. 3. Usa niveles de aislamiento apropiados.</p>" },
            { title: "Control de Concurrencia", dialogo: "<p>Multiples usuarios acceden simultaneamente. El DBMS maneja el orden y la consistencia.</p>" },
            { title: "Problemas de Concurrencia", dialogo: "<p><strong>Lectura sucia:</strong> Leer datos no confirmados. <strong>Lectura no repetible:</strong> Datos cambian entre lecturas. <strong>Fantasma:</strong> Nuevas filas aparecen entre lecturas.</p>" },
            { title: "Savepoints", dialogo: "<p>Puntos de retorno dentro de una transaccion.</p>", codigo: "BEGIN;\\nSAVEPOINT sp1;\\n-- operaciones que pueden fallar\\nROLLBACK TO sp1; -- deshace solo desde sp1\\nCOMMIT;", tourSteps: [ { text: "ROLLBACK TO sp1 deshace solo las operaciones despues del savepoint.", line: 4 } ] },
            { title: "Listo para el Quiz!", dialogo: "<p>Las transacciones aseguran integridad. Demuestra que sabes manejar concurrencia!</p>" }
        ],
        quiz: [
            { type: "multiple-choice", question: "Que significa Atomicidad?", options: ["Consistencia", "Todo o nada", "Aislamiento", "Durabilidad"], answer: "Todo o nada" },
            { type: "multiple-choice", question: "Que significa Durabilidad?", options: ["Todo o nada", "Consistencia", "Aislamiento", "Cambios persisten tras COMMIT"], answer: "Cambios persisten tras COMMIT" },
            { type: "multiple-choice", question: "Nivel de aislamiento mas estricto?", options: ["READ UNCOMMITTED", "READ COMMITTED", "REPEATABLE READ", "SERIALIZABLE"], answer: "SERIALIZABLE" },
            { type: "multiple-choice", question: "Que es un deadlock?", options: ["Transaccion rapida", "Dos transacciones se bloquean mutuamente", "Error de sintaxis", "Tabla bloqueada"], answer: "Dos transacciones se bloquean mutuamente" },
            { type: "multiple-choice", question: "Que hace FOR UPDATE?", options: ["Actualiza datos", "Bloquea filas para otras transacciones", "Crea un indice", "Elimina filas"], answer: "Bloquea filas para otras transacciones" },
            { type: "multiple-choice", question: "Que hace ROLLBACK?", options: ["Confirma cambios", "Deshace cambios de la transaccion", "Crea backup", "Ordena datos"], answer: "Deshace cambios de la transaccion" },
            { type: "multiple-choice", question: "Que es un savepoint?", options: ["Un backup completo", "Punto de retorno dentro de una transaccion", "Un tipo de indice", "Una vista"], answer: "Punto de retorno dentro de una transaccion" },
            { type: "multiple-choice", question: "Que es una lectura sucia?", options: ["Leer datos confirmados", "Leer datos no confirmados de otra transaccion", "Leer datos borrados", "Leer datos encriptados"], answer: "Leer datos no confirmados de otra transaccion" },
            { type: "multiple-choice", question: "Como prevenir deadlocks?", options: ["Bloquear todo", "Acceder a tablas en el mismo orden", "No usar transacciones", "Usar solo SELECT"], answer: "Acceder a tablas en el mismo orden" },
            { type: "multiple-choice", question: "Que propiedad ACID asegura que transacciones no interfieren?", options: ["Atomicidad", "Consistencia", "Aislamiento", "Durabilidad"], answer: "Aislamiento" }
        ]
    },
    {
        title: "Procedimientos Almacenados",
        dictionary: [
            { term: "PROCEDIMIENTO", definition: "Bloque de codigo SQL guardado en la BD que se puede ejecutar repetidamente." },
            { term: "CREATE PROCEDURE", definition: "Crea un procedimiento almacenado." },
            { term: "PARAMETROS", definition: "Valores de entrada/salida que recibe un procedimiento." },
            { term: "DELIMITER", definition: "Cambia el caracter de fin de sentencia para definir procedimientos." },
            { term: "CALL", definition: "Ejecuta un procedimiento almacenado." },
            { term: "DROP PROCEDURE", definition: "Elimina un procedimiento almacenado." },
            { term: "CURSOR", definition: "Mecanismo para recorrer filas una por una dentro de un procedimiento." }
        ],
        lesson: [
            { title: "Que son los Procedimientos", dialogo: "<p>Son bloques de codigo SQL guardados en la BD. Se ejecutan con CALL y pueden recibir parametros.</p>" },
            { title: "CREATE PROCEDURE", dialogo: "<p>Crea un procedimiento simple.</p>", codigo: "DELIMITER //\\nCREATE PROCEDURE obtener_usuarios()\\nBEGIN\\n    SELECT * FROM usuarios WHERE activo = 1;\\nEND //\\nDELIMITER ;", tourSteps: [ { text: "<code>DELIMITER //</code> cambia el fin de sentencia para poder usar ; dentro.", line: 1 }, { text: "<code>CALL obtener_usuarios()</code> ejecuta el procedimiento.", line: 3 } ] },
            { title: "Parametros IN", dialogo: "<p>Valores de entrada.</p>", codigo: "DELIMITER //\\nCREATE PROCEDURE buscar_usuario(IN uid INT)\\nBEGIN\\n    SELECT * FROM usuarios WHERE id = uid;\\nEND //\\nDELIMITER ;", tourSteps: [ { text: "<code>IN uid INT</code> define un parametro de entrada.", line: 2 }, { text: "<code>CALL buscar_usuario(5)</code> busca el usuario con id 5.", line: 3 } ] },
            { title: "Parametros OUT", dialogo: "<p>Valores de salida.</p>", codigo: "DELIMITER //\\nCREATE PROCEDURE contar_usuarios(OUT total INT)\\nBEGIN\\n    SELECT COUNT(*) INTO total FROM usuarios;\\nEND //\\nDELIMITER ;", tourSteps: [ { text: "<code>OUT total INT</code> define un parametro de salida.", line: 2 } ] },
            { title: "Variables Locales", dialogo: "<p>Variables dentro del procedimiento.</p>", codigo: "DELIMITER //\\nCREATE PROCEDURE calcular_promedio()\\nBEGIN\\n    DECLARE avg_age DECIMAL(5,2);\\n    SELECT AVG(edad) INTO avg_age FROM usuarios;\\n    SELECT avg_age as promedio;\\nEND //\\nDELIMITER ;", tourSteps: [ { text: "<code>DECLARE</code> crea una variable local.", line: 3 } ] },
            { title: "IF/ELSE en Procedimientos", dialogo: "<p>Logica condicional dentro de procedimientos.</p>", codigo: "DELIMITER //\\nCREATE PROCEDURE verificar_stock(IN pid INT)\\nBEGIN\\n    DECLARE stock_val INT;\\n    SELECT stock INTO stock_val FROM productos WHERE id = pid;\\n    IF stock_val > 0 THEN\\n        SELECT 'Disponible';\\n    ELSE\\n        SELECT 'Agotado';\\n    END IF;\\nEND //\\nDELIMITER ;", tourSteps: [ { text: "IF/ELSE permite logica condicional dentro del procedimiento.", line: 5 } ] },
            { title: "Bucles en Procedimientos", dialogo: "<p>WHILE, REPEAT, LOOP para iterar dentro de procedimientos.</p>" },
            { title: "DROP PROCEDURE", dialogo: "<p>Elimina un procedimiento.</p>", codigo: "DROP PROCEDURE IF EXISTS obtener_usuarios;", tourSteps: [ { text: "Elimina el procedimiento si existe.", line: 1 } ] },
            { title: "Ventajas", dialogo: "<p>1. Reutilizacion de codigo. 2. Mejor rendimiento (precompilado). 3. Seguridad (acceso controlado). 4. Menos trafico de red.</p>" },
            { title: "Listo para el Quiz!", dialogo: "<p>Los procedimientos automatizan logica compleja. Demuestra que sabes crearlos!</p>" }
        ],
        quiz: [
            { type: "multiple-choice", question: "Que es un procedimiento almacenado?", options: ["Una tabla especial", "Bloque de codigo SQL guardado y reutilizable", "Un tipo de indice", "Una vista"], answer: "Bloque de codigo SQL guardado y reutilizable" },
            { type: "multiple-choice", question: "Que comando ejecuta un procedimiento?", options: ["EXECUTE", "CALL", "RUN", "START"], answer: "CALL" },
            { type: "multiple-choice", question: "Que hace DELIMITER?", options: ["Elimina datos", "Cambia el caracter fin de sentencia", "Crea una tabla", "Ordena datos"], answer: "Cambia el caracter fin de sentencia" },
            { type: "multiple-choice", question: "Parametro IN significa?", options: ["Valor de salida", "Valor de entrada", "Valor opcional", "Valor por defecto"], answer: "Valor de entrada" },
            { type: "multiple-choice", question: "Parametro OUT significa?", options: ["Valor de entrada", "Valor de salida", "Valor obligatorio", "Valor nulo"], answer: "Valor de salida" },
            { type: "multiple-choice", question: "Que comando elimina un procedimiento?", options: ["DELETE PROCEDURE", "DROP PROCEDURE", "REMOVE PROCEDURE", "CLEAR PROCEDURE"], answer: "DROP PROCEDURE" },
            { type: "multiple-choice", question: "Que hace DECLARE?", options: ["Elimina variable", "Crea una variable local", "Crea una tabla", "Define un parametro"], answer: "Crea una variable local" },
            { type: "multiple-choice", question: "Ventaja de procedimientos?", options: ["Mas trafico de red", "Reutilizacion y mejor rendimiento", "Menos seguridad", "Mas complejo"], answer: "Reutilizacion y mejor rendimiento" },
            { type: "multiple-choice", question: "Puedes usar IF/ELSE en procedimientos?", options: ["No, nunca", "Si, con sintaxis especial", "Solo en SELECT", "Solo con variables"], answer: "Si, con sintaxis especial" },
            { type: "multiple-choice", question: "Que hace SELECT ... INTO variable?", options: ["Muestra resultados", "Guarda el resultado en una variable", "Elimina datos", "Crea una tabla"], answer: "Guarda el resultado en una variable" }
        ]
    },
    {
        title: "Diseno de Esquemas y Diagramas ER",
        dictionary: [
            { term: "ESQUEMA", definition: "Estructura logica de la base de datos: tablas, columnas, relaciones." },
            { term: "DIAGRAMA ER", definition: "Entidad-Relacion. Representacion visual del diseno de la BD." },
            { term: "ENTIDAD", definition: "Objeto del mundo real que se modela como tabla." },
            { term: "ATRIBUTO", definition: "Propiedad de una entidad que se convierte en columna." },
            { term: "CARDINALIDAD", definition: "Numero de relaciones entre entidades (1:1, 1:N, M:N)." },
            { term: "ENTIDAD DEBIL", definition: "Entidad que depende de otra para existir (no tiene PK propia)." },
            { term: "MODELO CONCEPTUAL", definition: "Diseno abstracto sin detalles tecnicos de implementacion." }
        ],
        lesson: [
            { title: "Que es un Esquema", dialogo: "<p>El esquema es la estructura logica de tu BD: que tablas existen, que columnas tienen y como se relacionan.</p>" },
            { title: "Diagrama Entidad-Relacion (ER)", dialogo: "<p>Representacion visual del diseno. Rectangulos = entidades, diamantes = relaciones, ovalos = atributos.</p>" },
            { title: "Entidades", dialogo: "<p>Objetos del mundo real que se modelan: Usuario, Producto, Pedido, Categoria. Cada entidad se convierte en una tabla.</p>" },
            { title: "Atributos", dialogo: "<p>Propiedades de las entidades: nombre, email, precio, fecha. Se convierten en columnas.</p>" },
            { title: "Cardinalidad", dialogo: "<p><strong>1:1</strong> Un usuario tiene un perfil. <strong>1:N</strong> Un autor tiene muchos libros. <strong>M:N</strong> Estudiantes y cursos (tabla intermedia).</p>" },
            { title: "Entidades Debiles", dialogo: "<p>Dependen de otra entidad para existir. Ej: DetallePedido depende de Pedido. No tiene PK propia, usa la FK + un identificador.</p>" },
            { title: "Proceso de Diseno", dialogo: "<p>1. Identificar entidades. 2. Definir atributos. 3. Establecer relaciones. 4. Definir cardinalidad. 5. Normalizar. 6. Implementar en SQL.</p>" },
            { title: "Ejemplo: Tienda Online", dialogo: "<p>Entidades: Usuarios, Productos, Categorias, Pedidos, DetallePedido. Relaciones: Usuario 1:N Pedidos, Producto N:M Categorias, Pedido 1:N DetallePedido.</p>" },
            { title: "Herramientas de Diseno", dialogo: "<p>dbdiagram.io, Draw.io, MySQL Workbench, pgAdmin, Lucidchart. Todas permiten crear diagramas ER visuales.</p>" },
            { title: "Listo para el Quiz!", dialogo: "<p>El diseno de esquemas es fundamental. Demuestra que sabes modelar datos!</p>" }
        ],
        quiz: [
            { type: "multiple-choice", question: "Que es un esquema de BD?", options: ["Un backup", "Estructura logica: tablas, columnas, relaciones", "Una consulta", "Un indice"], answer: "Estructura logica: tablas, columnas, relaciones" },
            { type: "multiple-choice", question: "Que representa una entidad en un diagrama ER?", options: ["Una columna", "Un objeto del mundo real que se modela como tabla", "Una relacion", "Un atributo"], answer: "Un objeto del mundo real que se modela como tabla" },
            { type: "multiple-choice", question: "Que es la cardinalidad?", options: ["Numero de tablas", "Numero de relaciones entre entidades", "Numero de columnas", "Numero de indices"], answer: "Numero de relaciones entre entidades" },
            { type: "multiple-choice", question: "Que es una entidad debil?", options: ["Una tabla sin datos", "Entidad que depende de otra para existir", "Una tabla borrada", "Una vista"], answer: "Entidad que depende de otra para existir" },
            { type: "multiple-choice", question: "Relacion 1:N significa?", options: ["Uno a uno", "Uno a muchos", "Muchos a muchos", "Ninguna relacion"], answer: "Uno a muchos" },
            { type: "multiple-choice", question: "Para modelar M:N, que necesitas?", options: ["Una tabla", "Dos tablas", "Tabla intermedia/puente", "No se puede"], answer: "Tabla intermedia/puente" },
            { type: "multiple-choice", question: "Primer paso en diseno de BD?", options: ["Crear tablas", "Identificar entidades", "Crear indices", "Escribir SQL"], answer: "Identificar entidades" },
            { type: "multiple-choice", question: "Que forma un atributo en SQL?", options: ["Una tabla", "Una columna", "Una relacion", "Un indice"], answer: "Una columna" },
            { type: "multiple-choice", question: "Herramienta para diagramas ER?", options: ["Photoshop", "dbdiagram.io", "Excel", "Word"], answer: "dbdiagram.io" },
            { type: "multiple-choice", question: "Relacion 1:1 ejemplo?", options: ["Autor y libros", "Usuario y perfil", "Estudiante y cursos", "Producto y categorias"], answer: "Usuario y perfil" }
        ]
    },
    {
        title: "Introduccion a NoSQL",
        dictionary: [
            { term: "NoSQL", definition: "Not Only SQL. Bases de datos no relacionales para datos no estructurados." },
            { term: "DOCUMENTAL", definition: "Almacena datos en documentos tipo JSON/BSON. Ej: MongoDB." },
            { term: "CLAVE-VALOR", definition: "Almacena pares clave-valor ultra-rapidos. Ej: Redis." },
            { term: "COLUMNAR", definition: "Almacena datos por columnas. Eficiente para analisis. Ej: Cassandra." },
            { term: "GRAFOS", definition: "Almacena nodos y relaciones. Ideal para redes sociales. Ej: Neo4j." },
            { term: "ESCALABILIDAD HORIZONTAL", definition: "Anadir mas servidores para manejar mas carga." },
            { term: "ESQUEMA FLEXIBLE", definition: "No requiere estructura fija de columnas." }
        ],
        lesson: [
            { title: "Que es NoSQL", dialogo: "<p>Bases de datos no relacionales diseñadas para datos no estructurados o semi-estructurados. No usan tablas fijas ni SQL estandar.</p>" },
            { title: "Tipos de NoSQL", dialogo: "<p><strong>Documental:</strong> MongoDB, CouchDB. <strong>Clave-Valor:</strong> Redis, DynamoDB. <strong>Columnar:</strong> Cassandra, HBase. <strong>Grafos:</strong> Neo4j, ArangoDB.</p>" },
            { title: "MongoDB", dialogo: "<p>Base de datos documental. Almacena datos en documentos BSON (JSON binario).</p>", codigo: "// Insertar documento\\ndb.usuarios.insertOne({\\n    nombre: \"Ana\",\\n    edad: 25,\\n    hobbies: [\"leer\", \"programar\"]\\n});", tourSteps: [ { text: "Los documentos son como objetos JSON. No requieren estructura fija.", line: 2 } ] },
            { title: "Consultas en MongoDB", dialogo: "<p>Usa metodos en vez de SQL.</p>", codigo: "// Buscar usuarios mayores de 18\\ndb.usuarios.find({ edad: { $gte: 18 } });\\n// Buscar por nombre\\ndb.usuarios.findOne({ nombre: \"Ana\" });", tourSteps: [ { text: "<code>$gte</code> = greater than or equal (>=).", line: 2 } ] },
            { title: "Redis", dialogo: "<p>Base de datos en memoria, clave-valor. Ultra-rapida para cache y sesiones.</p>", codigo: "SET usuario:1 '{\"nombre\":\"Ana\",\"edad\":25}'\\nGET usuario:1\\nEXPIRE usuario:1 3600", tourSteps: [ { text: "<code>SET</code> guarda, <code>GET</code> recupera, <code>EXPIRE</code> establece tiempo de vida.", line: 1 } ] },
            { title: "Escalabilidad Horizontal", dialogo: "<p>NoSQL escala añadiendo mas servidores (sharding). SQL escala verticalmente (mas potencia en un servidor).</p>" },
            { title: "Cuando usar NoSQL", dialogo: "<p>1. Datos no estructurados. 2. Gran volumen de datos. 3. Necesidad de escalabilidad horizontal. 4. Desarrollo rapido con esquemas cambiantes.</p>" },
            { title: "Cuando usar SQL", dialogo: "<p>1. Datos estructurados con relaciones complejas. 2. Transacciones ACID. 3. Consistencia fuerte. 4. Consultas complejas con JOINs.</p>" },
            { title: "SQL + NoSQL", dialogo: "<p>Muchas aplicaciones usan ambos: SQL para datos transaccionales, NoSQL para cache, sesiones, logs, contenido.</p>" },
            { title: "Listo para el Quiz!", dialogo: "<p>NoSQL complementa a SQL. Demuestra que sabes cuando usar cada uno!</p>" }
        ],
        quiz: [
            { type: "multiple-choice", question: "Que significa NoSQL?", options: ["No Structured Query Language", "Not Only SQL", "New Object Storage", "Non-Standard Query"], answer: "Not Only SQL" },
            { type: "multiple-choice", question: "Que tipo de NoSQL usa documentos JSON?", options: ["Clave-Valor", "Documental", "Columnar", "Grafos"], answer: "Documental" },
            { type: "multiple-choice", question: "Que base de datos es documental?", options: ["MySQL", "MongoDB", "PostgreSQL", "SQLite"], answer: "MongoDB" },
            { type: "multiple-choice", question: "Que tipo es Redis?", options: ["Documental", "Clave-Valor", "Columnar", "Grafos"], answer: "Clave-Valor" },
            { type: "multiple-choice", question: "Que tipo es ideal para redes sociales?", options: ["Documental", "Clave-Valor", "Columnar", "Grafos"], answer: "Grafos" },
            { type: "multiple-choice", question: "Ventaja de NoSQL sobre SQL?", options: ["Esquema fijo", "Esquema flexible", "Menos escalable", "Mas lento"], answer: "Esquema flexible" },
            { type: "multiple-choice", question: "Que es escalabilidad horizontal?", options: ["Mas CPU en un servidor", "Anadir mas servidores", "Mas memoria", "Mas disco"], answer: "Anadir mas servidores" },
            { type: "multiple-choice", question: "Formato interno de MongoDB?", options: ["JSON", "BSON", "XML", "YAML"], answer: "BSON" },
            { type: "multiple-choice", question: "Metodo de busqueda en MongoDB?", options: ["SELECT", "find()", "query()", "search()"], answer: "find()" },
            { type: "multiple-choice", question: "Cuando usar SQL en vez de NoSQL?", options: ["Datos no estructurados", "Transacciones ACID y relaciones complejas", "Gran volumen sin estructura", "Desarrollo rapido sin esquema"], answer: "Transacciones ACID y relaciones complejas" }
        ]
    },
    {
        title: "Seguridad en Bases de Datos",
        dictionary: [
            { term: "AUTENTICACION", definition: "Verificar la identidad del usuario (usuario + contrasena)." },
            { term: "AUTORIZACION", definition: "Controlar que acciones puede realizar cada usuario." },
            { term: "SQL INJECTION", definition: "Ataque que inyecta codigo SQL malicioso en consultas." },
            { term: "PREPARED STATEMENTS", definition: "Consultas parametrizadas que previenen SQL injection." },
            { term: "ENCRIPTACION", definition: "Proteger datos sensibles convirtiendolos en formato ilegible." },
            { term: "GRANT/REVOKE", definition: "Dar y quitar permisos a usuarios." },
            { term: "AUDITORIA", definition: "Registro de todas las acciones en la base de datos." }
        ],
        lesson: [
            { title: "Autenticacion", dialogo: "<p>Verificar identidad con credenciales seguras. Nunca almacenes contrasenas en texto plano. Usa hashing (bcrypt, argon2).</p>" },
            { title: "Autorizacion", dialogo: "<p>Controlar acceso con permisos. Principio de minimo privilegio: dar solo los permisos necesarios.</p>" },
            { title: "SQL Injection", dialogo: "<p>Ataque que inyecta codigo SQL malicioso. Ejemplo vulnerable:</p>", codigo: "-- VULNERABLE\\nquery = \"SELECT * FROM users WHERE email = '\" + email + \"'\";\\n\\n-- SEGURO (prepared statement)\\nstmt = \"SELECT * FROM users WHERE email = ?\";\\nexecute(stmt, [email]);", tourSteps: [ { text: "Concatenar input del usuario directamente es peligroso.", line: 2 }, { text: "Prepared statements parametrizan la consulta, previniendo inyeccion.", line: 5 } ] },
            { title: "Prepared Statements", dialogo: "<p>Separan la estructura SQL de los datos. Los parametros se tratan como datos, no como codigo ejecutable.</p>" },
            { title: "GRANT y REVOKE", dialogo: "<p>Control de permisos.</p>", codigo: "GRANT SELECT ON usuarios TO lector;\\nGRANT INSERT, UPDATE ON productos TO editor;\\nREVOKE DELETE ON usuarios FROM editor;", tourSteps: [ { text: "GRANT da permisos, REVOKE los quita.", line: 1 } ] },
            { title: "Encriptacion", dialogo: "<p>Encripta datos sensibles en reposo y en transito. Usa TLS/SSL para conexiones. Encripta columnas sensibles (contrasenas, datos personales).</p>" },
            { title: "Auditoria", dialogo: "<p>Registra quien hizo que y cuando. Usa triggers o logs del DBMS para rastrear cambios.</p>" },
            { title: "Backups Seguros", dialogo: "<p>Respaldos encriptados, almacenados en multiples ubicaciones. Prueba la restauracion periodicamente.</p>" },
            { title: "Buenas Practicas", dialogo: "<p>1. Prepared statements siempre. 2. Minimo privilegio. 3. Contraseñas hasheadas. 4. TLS/SSL. 5. Backups regulares. 6. Auditoria. 7. Actualizar DBMS.</p>" },
            { title: "Listo para el Quiz!", dialogo: "<p>La seguridad protege los datos. Demuestra que sabes protegerlos!</p>" }
        ],
        quiz: [
            { type: "multiple-choice", question: "Que verifica la identidad del usuario?", options: ["Autorizacion", "Autenticacion", "Encriptacion", "Auditoria"], answer: "Autenticacion" },
            { type: "multiple-choice", question: "Que controla las acciones del usuario?", options: ["Autenticacion", "Autorizacion", "Encriptacion", "Auditoria"], answer: "Autorizacion" },
            { type: "multiple-choice", question: "Que es SQL Injection?", options: ["Metodo de encriptacion", "Ataque que inyecta codigo malicioso", "Tipo de indice", "Funcion de busqueda"], answer: "Ataque que inyecta codigo malicioso" },
            { type: "multiple-choice", question: "Que previene SQL Injection?", options: ["SELECT *", "Prepared statements", "ORDER BY", "GROUP BY"], answer: "Prepared statements" },
            { type: "multiple-choice", question: "Que comando da permisos?", options: ["GIVE", "GRANT", "ALLOW", "PERMIT"], answer: "GRANT" },
            { type: "multiple-choice", question: "Que comando quita permisos?", options: ["TAKE", "REVOKE", "DENY", "REMOVE"], answer: "REVOKE" },
            { type: "multiple-choice", question: "Como almacenar contrasenas?", options: ["Texto plano", "Hashing (bcrypt, argon2)", "Base64", "Sin almacenar"], answer: "Hashing (bcrypt, argon2)" },
            { type: "multiple-choice", question: "Principio de minimo privilegio?", options: ["Dar todos los permisos", "Dar solo los permisos necesarios", "No dar permisos", "Dar permisos aleatorios"], answer: "Dar solo los permisos necesarios" },
            { type: "multiple-choice", question: "Que protege datos en transito?", options: ["HTTP", "TLS/SSL", "FTP", "SMTP"], answer: "TLS/SSL" },
            { type: "multiple-choice", question: "Por que son importantes los backups?", options: ["Ahorrar espacio", "Recuperar datos perdidos", "Consultas mas rapidas", "Crear indices"], answer: "Recuperar datos perdidos" }
        ]
    },
    {
        title: "Vistas y Funciones Definidas por Usuario",
        dictionary: [
            { term: "VISTA", definition: "Consulta guardada que se comporta como una tabla virtual." },
            { term: "CREATE VIEW", definition: "Crea una vista basada en una consulta SELECT." },
            { term: "VISTA MATERIALIZADA", definition: "Vista que almacena fisicamente los resultados para mejor rendimiento." },
            { term: "FUNCION UDF", definition: "Funcion definida por el usuario que devuelve un valor." },
            { term: "FUNCION ESCALAR", definition: "Devuelve un solo valor." },
            { term: "FUNCION DE TABLA", definition: "Devuelve una tabla como resultado." },
            { term: "DROP VIEW", definition: "Elimina una vista existente." }
        ],
        lesson: [
            { title: "Que son las Vistas", dialogo: "<p>Consultas guardadas que se usan como tablas. No almacenan datos, solo la consulta.</p>", codigo: "CREATE VIEW vista_empleados AS\\nSELECT e.nombre, e.salario, d.nombre as departamento\\nFROM empleados e\\nJOIN departamentos d ON e.depto_id = d.id;", tourSteps: [ { text: "Crea una vista que combina empleados con departamentos.", line: 1 }, { text: "Usala como tabla: SELECT * FROM vista_empleados;", line: 2 } ] },
            { title: "Usar Vistas", dialogo: "<p><code>SELECT * FROM vista_empleados WHERE salario > 50000;</code></p>" },
            { title: "DROP VIEW", dialogo: "<p>Elimina una vista.</p>", codigo: "DROP VIEW IF EXISTS vista_empleados;", tourSteps: [ { text: "Elimina la vista. Los datos originales no se afectan.", line: 1 } ] },
            { title: "Vistas Actualizables", dialogo: "<p>Algunas vistas permiten INSERT/UPDATE/DELETE si son simples (una tabla, sin agregaciones).</p>" },
            { title: "Vistas Materializadas", dialogo: "<p>Almacenan fisicamente los resultados. Mas rapidas pero necesitan actualizacion manual.</p>", codigo: "CREATE MATERIALIZED VIEW resumen_ventas AS\\nSELECT mes, SUM(monto) as total FROM ventas GROUP BY mes;", tourSteps: [ { text: "Los resultados se guardan fisicamente. Mas rapido para consultas frecuentes.", line: 1 } ] },
            { title: "Funciones Escalares", dialogo: "<p>Devuelven un solo valor.</p>", codigo: "CREATE FUNCTION calcular_edad(fecha_nac DATE)\\nRETURNS INT\\nBEGIN\\n    RETURN YEAR(CURDATE()) - YEAR(fecha_nac);\\nEND;", tourSteps: [ { text: "Funcion que calcula edad a partir de fecha de nacimiento.", line: 1 } ] },
            { title: "Funciones de Tabla", dialogo: "<p>Devuelven una tabla como resultado.</p>" },
            { title: "Ventajas de Vistas", dialogo: "<p>1. Simplifican consultas complejas. 2. Seguridad (ocultan columnas). 3. Consistencia. 4. Abstraccion.</p>" },
            { title: "Funciones vs Procedimientos", dialogo: "<p>Funciones: devuelven valor, se usan en SELECT. Procedimientos: ejecutan acciones, se llaman con CALL.</p>" },
            { title: "Listo para el Quiz!", dialogo: "<p>Vistas y funciones organizan y reutilizan logica. Demuestra que sabes usarlas!</p>" }
        ],
        quiz: [
            { type: "multiple-choice", question: "Que es una vista?", options: ["Tabla fisica", "Consulta guardada como tabla virtual", "Indice", "Procedimiento"], answer: "Consulta guardada como tabla virtual" },
            { type: "multiple-choice", question: "Que comando crea vistas?", options: ["CREATE VIEW", "NEW VIEW", "MAKE VIEW", "ADD VIEW"], answer: "CREATE VIEW" },
            { type: "multiple-choice", question: "Diferencia vista normal vs materializada?", options: ["Son iguales", "Materializada almacena resultados fisicamente", "Normal es mas rapida", "Materializada no se puede consultar"], answer: "Materializada almacena resultados fisicamente" },
            { type: "multiple-choice", question: "Que devuelve una funcion escalar?", options: ["Una tabla", "Un solo valor", "Nada", "Multiple filas"], answer: "Un solo valor" },
            { type: "multiple-choice", question: "Que comando elimina una vista?", options: ["DELETE VIEW", "DROP VIEW", "REMOVE VIEW", "CLEAR VIEW"], answer: "DROP VIEW" },
            { type: "multiple-choice", question: "Ventaja de vistas?", options: ["Mas almacenamiento", "Simplifican consultas complejas", "Mas lento", "Menos seguridad"], answer: "Simplifican consultas complejas" },
            { type: "multiple-choice", question: "Diferencia funcion vs procedimiento?", options: ["Son iguales", "Funcion devuelve valor, procedimiento ejecuta acciones", "Procedimiento devuelve valor", "Funcion usa CALL"], answer: "Funcion devuelve valor, procedimiento ejecuta acciones" },
            { type: "multiple-choice", question: "Puedes usar vistas en JOINs?", options: ["No, nunca", "Si, como tablas normales", "Solo con vistas materializadas", "Solo en WHERE"], answer: "Si, como tablas normales" },
            { type: "multiple-choice", question: "Como se usan vistas para seguridad?", options: ["Encriptando datos", "Ocultando columnas sensibles", "Eliminando tablas", "Creando indices"], answer: "Ocultando columnas sensibles" },
            { type: "multiple-choice", question: "Que hace CREATE FUNCTION?", options: ["Crea una tabla", "Crea una funcion definida por usuario", "Crea un indice", "Crea una vista"], answer: "Crea una funcion definida por usuario" }
        ]
    },
    {
        title: "Migraciones y Control de Versiones",
        dictionary: [
            { term: "MIGRACION", definition: "Script que modifica el esquema de la BD de forma controlada." },
            { term: "VERSIONADO", definition: "Control de que cambios se han aplicado y en que orden." },
            { term: "ROLLBACK", definition: "Deshacer una migracion aplicada." },
            { term: "SEED", definition: "Datos iniciales que se insertan al crear la BD." },
            { term: "SCHEMA", definition: "Estructura actual de la base de datos." },
            { term: "MIGRACION FORWARD", definition: "Aplicar cambios hacia adelante (nueva version)." },
            { term: "MIGRACION BACKWARD", definition: "Revertir cambios a una version anterior." }
        ],
        lesson: [
            { title: "Que son las Migraciones", dialogo: "<p>Scripts versionados que modifican el esquema de la BD. Permiten controlar cambios de forma segura y reversible.</p>" },
            { title: "Estructura de Migracion", dialogo: "<p>Cada migracion tiene: numero de version, descripcion, SQL de aplicacion (UP), SQL de reversa (DOWN).</p>", codigo: "-- 001_crear_usuarios.sql (UP)\\nCREATE TABLE usuarios (\\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\\n    nombre TEXT NOT NULL,\\n    email TEXT UNIQUE\\n);\\n\\n-- DOWN\\nDROP TABLE IF EXISTS usuarios;", tourSteps: [ { text: "La parte UP crea la tabla. La parte DOWN la elimina para revertir.", line: 1 } ] },
            { title: "Herramientas de Migracion", dialogo: "<p><strong>Flyway:</strong> Java, SQL puro. <strong>Liquibase:</strong> XML/YAML/SQL. <strong>Alembic:</strong> Python/SQLAlchemy. <strong>Knex:</strong> Node.js. <strong>Django Migrations:</strong> Python/Django.</p>" },
            { title: "Tabla de Versiones", dialogo: "<p>Las herramientas crean una tabla (schema_migrations) que registra que migraciones se han aplicado.</p>" },
            { title: "Crear una Migracion", dialogo: "<p>1. Generar archivo con version. 2. Escribir SQL UP. 3. Escribir SQL DOWN. 4. Ejecutar migracion. 5. Verificar.</p>" },
            { title: "Revertir Migraciones", dialogo: "<p>Si algo sale mal, ejecuta el DOWN para revertir. Siempre prueba el DOWN antes de aplicar en produccion.</p>" },
            { title: "Seeds (Datos Iniciales)", dialogo: "<p>Scripts que insertan datos base: usuarios admin, categorias, configuraciones.</p>", codigo: "INSERT INTO roles (nombre) VALUES ('admin'), ('editor'), ('lector');\\nINSERT INTO usuarios (nombre, email, rol_id) VALUES ('Admin', 'admin@test.com', 1);", tourSteps: [ { text: "Datos iniciales que la aplicacion necesita para funcionar.", line: 1 } ] },
            { title: "Buenas Practicas", dialogo: "<p>1. Una migracion por cambio. 2. Siempre escribe DOWN. 3. Prueba en desarrollo primero. 4. No modifiques migraciones aplicadas. 5. Versiona los scripts en Git.</p>" },
            { title: "Migraciones en Equipo", dialogo: "<p>En equipos, cada desarrollador crea migraciones. Se aplican en orden de version. Resuelve conflictos antes de aplicar.</p>" },
            { title: "Listo para el Quiz!", dialogo: "<p>Las migraciones controlan cambios del esquema. Demuestra que sabes gestionarlas!</p>" }
        ],
        quiz: [
            { type: "multiple-choice", question: "Que es una migracion de BD?", options: ["Mover datos entre servidores", "Script versionado que modifica el esquema", "Backup de datos", "Creacion de indices"], answer: "Script versionado que modifica el esquema" },
            { type: "multiple-choice", question: "Que es el SQL UP?", options: ["Consulta de lectura", "SQL que aplica el cambio", "SQL que revierte el cambio", "SQL de backup"], answer: "SQL que aplica el cambio" },
            { type: "multiple-choice", question: "Que es el SQL DOWN?", options: ["SQL lento", "SQL que revierte el cambio", "SQL de insercion", "SQL de consulta"], answer: "SQL que revierte el cambio" },
            { type: "multiple-choice", question: "Que herramienta de migracion usa SQL puro?", options: ["Liquibase", "Flyway", "Alembic", "Sequelize"], answer: "Flyway" },
            { type: "multiple-choice", question: "Que es un seed?", options: ["Una migracion", "Datos iniciales de la BD", "Un indice", "Una vista"], answer: "Datos iniciales de la BD" },
            { type: "multiple-choice", question: "Para que sirve la tabla schema_migrations?", options: ["Almacenar datos", "Registrar migraciones aplicadas", "Crear usuarios", "Hacer backups"], answer: "Registrar migraciones aplicadas" },
            { type: "multiple-choice", question: "Buena practica en migraciones?", options: ["Modificar migraciones aplicadas", "Siempre escribir DOWN", "Una migracion con muchos cambios", "No versionar en Git"], answer: "Siempre escribir DOWN" },
            { type: "multiple-choice", question: "Que hacer antes de aplicar en produccion?", options: ["Aplicar directo", "Probar en desarrollo primero", "Borrar la BD", "Crear backup solo"], answer: "Probar en desarrollo primero" },
            { type: "multiple-choice", question: "Que es una migracion forward?", options: ["Revertir cambios", "Aplicar cambios hacia adelante", "Crear backup", "Eliminar tabla"], answer: "Aplicar cambios hacia adelante" },
            { type: "multiple-choice", question: "Donde versionar los scripts de migracion?", options: ["En la BD", "En Git", "En un email", "En papel"], answer: "En Git" }
        ]
    },
    {
        title: "Proyecto Final: Sistema Completo",
        dictionary: [
            { term: "SISTEMA INTEGRAL", definition: "Aplicacion completa que usa todos los conceptos aprendidos." },
            { term: "MODELO DE DATOS", definition: "Diseno completo de tablas, relaciones y restricciones." },
            { term: "API DE DATOS", definition: "Consultas que la aplicacion usa para interactuar con la BD." },
            { term: "INDICES ESTRATEGICOS", definition: "Indices creados basados en patrones de consulta reales." },
            { term: "SEGURIDAD INTEGRAL", definition: "Autenticacion, autorizacion, prepared statements, encriptacion." },
            { term: "BACKUP", definition: "Copia de seguridad de toda la base de datos." },
            { term: "DOCUMENTACION", definition: "Descripcion del esquema, relaciones y consultas principales." }
        ],
        lesson: [
            { title: "El Desafio Final", dialogo: "<p>Has recorrido 19 niveles aprendiendo SQL, diseno, optimizacion, seguridad y mas. Ahora es hora de aplicar todo en un proyecto real.</p>" },
            { title: "Requisitos del Proyecto", dialogo: "<p>Crear el esquema de una plataforma de cursos online con: Usuarios, Cursos, Lecciones, Inscripciones, Progreso, Pagos, Reviews.</p>" },
            { title: "Modelo de Datos", dialogo: "<p>Entidades principales: <strong>usuarios</strong> (id, nombre, email, rol), <strong>cursos</strong> (id, titulo, descripcion, precio), <strong>lecciones</strong> (id, curso_id, titulo, contenido), <strong>inscripciones</strong> (usuario_id, curso_id, fecha), <strong>progreso</strong> (usuario_id, leccion_id, completado), <strong>reviews</strong> (usuario_id, curso_id, puntuacion, comentario).</p>" },
            { title: "Crear Tablas", dialogo: "<p>Implementa el modelo con claves primarias, foraneas, restricciones y tipos apropiados.</p>", codigo: "CREATE TABLE usuarios (\\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\\n    nombre TEXT NOT NULL,\\n    email TEXT UNIQUE NOT NULL,\\n    rol TEXT DEFAULT 'estudiante'\\n);\\n\\nCREATE TABLE cursos (\\n    id INTEGER PRIMARY KEY AUTOINCREMENT,\\n    titulo TEXT NOT NULL,\\n    precio REAL DEFAULT 0\\n);", tourSteps: [ { text: "Cada tabla con su PK, restricciones y valores por defecto.", line: 1 } ] },
            { title: "Consultas Clave", dialogo: "<p>1. Cursos mas populares. 2. Progreso de un estudiante. 3. Revenue total. 4. Cursos por categoria. 5. Reviews promedio.</p>", codigo: "SELECT c.titulo, AVG(r.puntuacion) as rating, COUNT(r.id) as reviews\\nFROM cursos c\\nLEFT JOIN reviews r ON c.id = r.curso_id\\nGROUP BY c.id\\nORDER BY rating DESC;", tourSteps: [ { text: "Combina LEFT JOIN, AVG, COUNT, GROUP BY y ORDER BY.", line: 1 } ] },
            { title: "Indices Estrategicos", dialogo: "<p>Crea indices en columnas de busqueda frecuente: email de usuarios, curso_id en lecciones, usuario_id en inscripciones.</p>" },
            { title: "Vistas Utiles", dialogo: "<p>Crea vistas para consultas frecuentes: vista_cursos_populares, vista_progreso_estudiantes, vista_revenue_mensual.</p>" },
            { title: "Seguridad", dialogo: "<p>1. Prepared statements en todas las consultas. 2. Roles de usuario (admin, instructor, estudiante). 3. Encriptacion de datos sensibles. 4. Auditoria de cambios.</p>" },
            { title: "Migraciones", dialogo: "<p>Versiona cada cambio del esquema. Incluye seeds con datos de prueba. Documenta cada migracion.</p>" },
            { title: "Felicidades!", dialogo: "<p>Has completado los 20 niveles del curso de Base de Datos. Ahora tienes las habilidades para disenar, implementar y mantener bases de datos profesionales. ¡Sigue practicando!</p>" }
        ],
        quiz: [
            { type: "multiple-choice", question: "Que entidades necesita una plataforma de cursos?", options: ["Solo usuarios", "Usuarios, cursos, lecciones, inscripciones", "Solo cursos", "Solo pagos"], answer: "Usuarios, cursos, lecciones, inscripciones" },
            { type: "multiple-choice", question: "Que tipo de JOIN usar para cursos con sus reviews?", options: ["INNER JOIN", "LEFT JOIN (para incluir cursos sin reviews)", "CROSS JOIN", "SELF JOIN"], answer: "LEFT JOIN (para incluir cursos sin reviews)" },
            { type: "multiple-choice", question: "En que columnas crear indices?", options: ["En todas", "En columnas de busqueda frecuente (email, curso_id)", "En ninguna", "Solo en PK"], answer: "En columnas de busqueda frecuente (email, curso_id)" },
            { type: "multiple-choice", question: "Que funcion calcula el promedio de reviews?", options: ["SUM()", "COUNT()", "AVG()", "MAX()"], answer: "AVG()" },
            { type: "multiple-choice", question: "Para que sirve una vista en el proyecto?", options: ["Almacenar datos", "Simplificar consultas frecuentes", "Crear indices", "Hacer backups"], answer: "Simplificar consultas frecuentes" },
            { type: "multiple-choice", question: "Como proteger contrasenas de usuarios?", options: ["Texto plano", "Hashing con bcrypt", "Base64", "Sin almacenar"], answer: "Hashing con bcrypt" },
            { type: "multiple-choice", question: "Que es un seed en el proyecto?", options: ["Una migracion", "Datos iniciales de prueba", "Un indice", "Una vista"], answer: "Datos iniciales de prueba" },
            { type: "multiple-choice", question: "Como manejar roles de usuario?", options: ["Una tabla por rol", "Columna rol en usuarios con permisos", "No manejar roles", "Solo un rol"], answer: "Columna rol en usuarios con permisos" },
            { type: "multiple-choice", question: "Que GROUP BY usar para reviews por curso?", options: ["GROUP BY usuario_id", "GROUP BY curso_id", "GROUP BY puntuacion", "Sin GROUP BY"], answer: "GROUP BY curso_id" },
            { type: "multiple-choice", question: "Que has aprendido en este curso?", options: ["Solo SELECT", "Diseno, implementacion, optimizacion y seguridad de BD", "Solo NoSQL", "Solo migraciones"], answer: "Diseno, implementacion, optimizacion y seguridad de BD" }
        ]
    }
];

console.log("courseData loaded with", courseData.length, "levels");
"""

# Insert courseData before the JS logic
new_content = content[:pos] + course_data + content[pos:]

with open(OUT, "w", encoding="utf-8") as f:
    f.write(new_content)

print(f"SUCCESS! File updated: {os.path.getsize(OUT)} bytes")
print(f"Total levels: 20")
