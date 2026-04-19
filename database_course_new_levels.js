const courseData = [
    {
        "title": "Nivel 1: Fundamentos de Bases de Datos",
        "lesson": [
            {
                "title": "Qué es una Base de Datos",
                "dialogo": "<p>Una base de datos es un sistema organizado para almacenar, gestionar y recuperar información. Piensa en ella como una biblioteca extremadamente organizada donde cada libro (dato) sabe dónde está y cómo encontrar otros libros relacionados.</p><p>Las dos familias principales son: <strong>SQL</strong> (relacionales, con estructura fija) y <strong>NoSQL</strong> (como Firebase, flexibles).</p>",
                "codigo": "-- SQL (MySQL, PostgreSQL, SQLite)\nSELECT * FROM usuarios;\n\n-- NoSQL (Firebase Firestore)\n// db.collection('usuarios').get()",
                "tourSteps": [
                    { "text": "SQL usa lenguaje declarativo para pedir datos.", "line": 1 },
                    { "text": "NoSQL usa métodos de programación.", "line": 3 }
                ]
            },
            {
                "title": "SQL vs NoSQL",
                "dialogo": "<p><strong>SQL (MySQL, PostgreSQL):</strong> Datos en tablas rígidas con filas y columnas. Ideal para datos estructurados que requieren relaciones complejas.</p><p><strong>NoSQL (Firebase, MongoDB):</strong> Documentos flexibles tipo JSON. Ideal para rapid development y datos que cambian mucho.</p>",
                "codigo": "-- SQL: Tabla rígida\nusuarios | id | nombre | email\n            1    | Ana | ana@email\n\n-- NoSQL: Documento flexible\n{   id: \"uuid\", \n  nombre: \"Ana\", \n  email: \"ana@email\",\n  amigos: [\"bob\", \"carol\"]  // array sin límite\n}",
                "tourSteps": [
                    { "text": "SQL requiere definir esquema antes.", "line": 1 },
                    { "text": "NoSQL permite campos nuevos dinámicamente.", "line": 5 }
                ]
            },
            {
                "title": "Nuestro enfoque: Firebase + SQL",
                "dialogo": "<p>En este curso aprenderás ambas tecnologías. Usaremos <strong>Firebase</strong> para autenticación y datos en tiempo real (ideal para apps), y <strong>SQL</strong> para consultas complejas y análisis de datos.</p>"
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "¿Qué es SQL?", "options": ["Lenguaje de consulta", "Una base de datos", "Un servidor", "Un formato"], "answer": "Lenguaje de consulta" },
            { "type": "multiple-choice", "question": "¿Cuál es más flexible para variar estructuras?", "options": ["SQL", "NoSQL (Firebase)", "Ambos igual", "Ninguno"], "answer": "NoSQL (Firebase)" },
            { "type": "multiple-choice", "question": "¿Firebase es SQL o NoSQL?", "options": ["SQL", "NoSQL", "Ambos", "Ninguno"], "answer": "NoSQL" },
            { "type": "multiple-choice", "question": "SQL usa tablas, ¿qué usa NoSQL?", "options": ["Tablas", "Documentos", "Hojas de cálculo", "Nada"], "answer": "Documentos" },
            { "type": "multiple-choice", "question": "¿Para qué es ideal Firebase?", "options": ["Análisis de datos", "Tiempo real y apps", "Reports", "Backup"], "answer": "Tiempo real y apps" },
            { "type": "multiple-choice", "question": "¿Cuál elegir para datos financieros complejos?", "options": ["Firebase", "SQL", "NoSQL", "Cualquiera"], "answer": "SQL" },
            { "type": "multiple-choice", "question": "Las tablas en SQL tienen ___ y ___", "options": ["Filas y columnas", "Documentos y colecciones", "Keys y values", "Nodos y edges"], "answer": "Filas y columnas" },
            { "type": "multiple-choice", "question": "Firestore es parte de:", "options": ["MySQL", "Firebase", "PostgreSQL", "Oracle"], "answer": "Firebase" },
            { "type": "multiple-choice", "question": "¿Puedo usar ambas en un proyecto?", "options": ["Sí", "No", "Solo una", "Depende"], "answer": "Sí" },
            { "type": "multiple-choice", "question": "¿Firebase maneja autenticación?", "options": ["No", "Sí", "Solo con plugins", "No sabe"], "answer": "Sí" }
        ]
    },
    {
        "title": "Nivel 2: Firebase - Configuración",
        "lesson": [
            {
                "title": "Creando un Proyecto Firebase",
                "dialogo": "<p>Para usar Firebase necesitas crear un proyecto en la consola de Firebase (console.firebase.google.com). Allí obtiene las credenciales de conexión.</p>",
                "codigo": "// Configuración de Firebase\nimport { initializeApp } from 'firebase/app';\nimport { getFirestore } from 'firebase/firestore';\n\nconst firebaseConfig = {\n  apiKey: \"AIzaSy...\",\n  authDomain: \"proyecto.firebaseapp.com\",\n  projectId: \"proyecto\",\n  storageBucket: \"proyecto.appspot.com\",\n  messagingSenderId: \"123456789\",\n  appId: \"1:123:web:abc\"\n};\n\nconst app = initializeApp(firebaseConfig);\nconst db = getFirestore(app);",
                "tourSteps": [
                    { "text": "Credentials del proyecto Firebase.", "line": 5 },
                    { "text": "Inicializar la app.", "line": 14 }
                ]
            },
            {
                "title": "Estructura de Firestore",
                "dialogo": "<p>Firestore organiza datos en: <strong>colecciones</strong> (tablas) y <strong>documentos</strong> (registros). Cada documento tiene campos tipo JSON.</p>",
                "codigo": "-- Estructura jerárquica --\ncolección: \"usuarios\"\n  documento id: \" usuario1\"\n    campo: nombre = \"Ana\"\n    campo: edad = 25\n    campo: email = \"ana@test.com\"\n    \n-- Anidamiento permitido --\n  documento\n    amigos: [\"bob\", \"carol\"]\n    direccion: {\n      ciudad: \"Madrid\",\n      pais: \"España\"\n    }",
                "tourSteps": [
                    { "text": "Colección = grupo de documentos.", "line": 1 },
                    { "text": "Documento = registro individual.", "line": 2 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "¿Dónde creas un proyecto Firebase?", "options": ["console.firebase.google.com", "aws.amazon.com", "cloud.google.com", "azure.com"], "answer": "console.firebase.google.com" },
            { "type": "multiple-choice", "question": "¿Qué es una colección en Firestore?", "options": ["Un documento", "Un grupo de documentos", "Un campo", "Una consulta"], "answer": "Un grupo de documentos" },
            { "type": "multiple-choice", "question": "¿Qué es un documento?", "options": ["Una tabla", "Un registro individual", "Una consulta", "Un índice"], "answer": "Un registro individual" },
            { "type": "multiple-choice", "question": "Los documentos contienen:", "options": ["Filas", "Campos JSON", "Tablas", "Llaves"], "answer": "Campos JSON" },
            { "type": "multiple-choice", "question": "getFirestore() sirve para:", "options": ["Autenticarse", "Conectar a DB", "Crear usuario", "Enviar email"], "answer": "Conectar a DB" },
            { "type": "multiple-choice", "question": "¿Firestore permite objetos anidados?", "options": ["No", "Sí", "Solo arrays", "Solo strings"], "answer": "Sí" },
            { "type": "multiple-choice", "question": "apiKey es parte de:", "options": ["Query", "Config", "Index", " Regla"], "answer": "Config" },
            { "type": "multiple-choice", "question": "projectId identifica:", "options": ["El proyecto", "El usuario", "El documento", "La regla"], "answer": "El proyecto" },
            { "type": "multiple-choice", "question": "¿Firestore es NoSQL?", "options": ["Sí", "No", "Depende", "Solo"], "answer": "Sí" },
            { "type": "multiple-choice", "question": "¿Puedes anidar colecciones dentro de documentos?", "options": ["No", "Sí", "Solo root", "Nunca"], "answer": "Sí" }
        ]
    },
    {
        "title": "Nivel 3: Firebase - Escritura de Datos",
        "lesson": [
            {
                "title": "set() - Crear/Reemplazar documento",
                "dialogo": "<p><code>set()</code> crea un documento nuevo o reemplaza uno existente. Si no especificas ID, crea uno automático.</p>",
                "codigo": "import { doc, setDoc } from 'firebase/firestore';\n\n// Con ID personalizado\nawait setDoc(doc(db, 'usuarios', 'ana001'), {\n  nombre: 'Ana García',\n  edad: 25,\n  email: 'ana@test.com',\n  activa: true\n});\n\n// Con ID automático (push)\nimport { addDoc, collection } from 'firebase/firestore';\nawait addDoc(collection(db, 'usuarios'), {\n  nombre: 'Carlos',\n  edad: 30\n});",
                "tourSteps": [
                    { "text": "doc()指向 documento específico.", "line": 3 },
                    { "text": "setDoc() escribe datos.", "line": 4 },
                    { "text": "addDoc() genera ID automático.", "line": 10 }
                ]
            },
            {
                "title": "update() - Actualizar campos específicos",
                "dialogo": "<p><code>update()</code> modifica campos específicos sin borrar otros. Si el documento no existe, falla.</p>",
                "codigo": "import { doc, updateDoc } from 'firebase/firestore';\n\nconst usuarioRef = doc(db, 'usuarios', 'ana001');\n\n// Solo actualiza los campos especificados\nawait updateDoc(usuarioRef, {\n  edad: 26,\n  ciudad: 'Madrid'\n});\n\n// Incrementar valor numérico \nimport { increment } from 'firebase/firestore';\nawait updateDoc(usuarioRef, {\n  visitas: increment(1)\n});",
                "tourSteps": [
                    { "text": "update() modifica sin reemplazar.", "line": 3 },
                    { "text": "increment() suma/resta atómicamente.", "line": 10 }
                ]
            },
            {
                "title": "delete() - Borrar datos",
                "dialogo": "<p><code>delete()</code> borra documentos o campos específicos.</p>",
                "codigo": "import { doc, deleteDoc } from 'firebase/firestore';\n\n// Borrar documento completo\nawait deleteDoc(doc(db, 'usuarios', 'ana001'));\n\n// Borrar campo específico\nimport { updateDoc, deleteField } from 'firebase/firestore';\nawait updateDoc(doc(db, 'usuarios', 'ana001'), {\n  telefono: deleteField()\n});",
                "tourSteps": [
                    { "text": "deleteDoc() borra documento.", "line": 3 },
                    { "text": "deleteField()_REMUEVE campo.", "line": 8 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "set() crea o reemplaza:", "options": ["Campo", "Documento", "Colección", "Índice"], "answer": "Documento" },
            { "type": "multiple-choice", "question": "addDoc() genera ID:", "options": ["Manual", "Automático", "Aleatorio", "Fijo"], "answer": "Automático" },
            { "type": "multiple-choice", "question": "update() vs set():", "options": ["Actualiza solo campos", "Reemplaza todo", "Iguales", "Different"], "answer": "Actualiza solo campos" },
            { "type": "multiple-choice", "question": "deleteField() REMUEVE:", "options": ["Documento", "Campo", "Colección", "Todo"], "answer": "Campo" },
            { "type": "multiple-choice", "question": "increment(1) en update:", "options": ["Resta 1", "Suma 1", "Multiplica 1", "Nada"], "answer": "Suma 1" },
            { "type": "multiple-choice", "question": "Si documento no existe, set():", "options": ["Crea nuevo", "Error", "Nada", "Advierte"], "answer": "Crea nuevo" },
            { "type": "multiple-choice", "question": "Si documento no existe, update():", "options": ["Crea nuevo", "Error", "Nada", "Advierte"], "answer": "Error" },
            { "type": "multiple-choice", "question": "doc(db, 'tabla', 'id') crea:", "options": ["Referencia", "Datos", "Consulta", "Índice"], "answer": "Referencia" },
            { "type": "multiple-choice", "question": "await hace que:", "options": ["Async", "Sincrónico", "Lento", "Inseguro"], "answer": "Async" },
            { "type": "multiple-choice", "question": "collection(db, 'usuarios') es:", "options": ["Referencia", "Datos", "Consulta", "Documento"], "answer": "Referencia" }
        ]
    },
    {
        "title": "Nivel 4: Firebase - Lectura de Datos",
        "lesson": [
            {
                "title": "get() - Leer una vez",
                "dialogo": "<p><code>get()</code> lee datos una vez. Muy útil para perfiles que no cambian seguido.</p>",
                "codigo": "import { doc, getDoc } from 'firebase/firestore';\n\nconst docRef = doc(db, 'usuarios', 'ana001');\nconst docSnap = await getDoc(docRef);\n\nif (docSnap.exists()) {\n  const datos = docSnap.data();\n  console.log(datos.nombre);  // Ana\n} else {\n  console.log('No existe');\n}",
                "tourSteps": [
                    { "text": "doc()指向 documento.", "line": 3 },
                    { "text": "getDoc() lo obtiene.", "line": 4 },
                    { "text": "data() extrae campos.", "line": 7 }
                ]
            },
            {
                "title": "onSnapshot() - Tiempo real",
                "dialogo": "<p><code>onSnapshot()</code> escucha cambios en tiempo real. Cada vez que los datos cambian en Firestore, la callback se ejecuta.</p>",
                "codigo": "import { doc, onSnapshot } from 'firebase/firestore';\n\nconst docRef = doc(db, 'usuarios', 'ana001');\n\n// Esta función corre cada cambio\nconst unsubscribe = onSnapshot(docRef, (docSnap) => {\n  if (docSnap.exists()) {\n    console.log('Datos actuales:', docSnap.data());\n  }\n});\n\n// Para de escuchar:\nunsubscribe();",
                "tourSteps": [
                    { "text": "onSnapshot() se ejecuta al inicio y cada cambio.", "line": 5 },
                    { "text": "unsubscribe() detiene el listener.", "line": 11 }
                ]
            },
            {
                "title": "getDocs() - Múltiples documentos",
                "dialogo": "<p><code>getDocs()</code> obtiene todos los documentos de una colección.</p>",
                "codigo": "import { collection, getDocs } from 'firebase/firestore';\n\nconst querySnapshot = await getDocs(collection(db, 'usuarios'));\n\nquerySnapshot.forEach((doc) => {\n  console.log(doc.id, '=>', doc.data());\n});\n\n// Filtrar con where\nimport { query, where, collection, getDocs } from 'firebase/firestore';\nconst q = query(collection(db, 'usuarios'), where('edad', '>=', 18));\nconst resultado = await getDocs(q);",
                "tourSteps": [
                    { "text": "getDocs() devuelve Collection.", "line": 2 },
                    { "text": "forEach() itera documentos.", "line": 4 },
                    { "text": "query() filtra resultados.", "line": 9 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "getDoc() lee:", "options": ["Una vez", "Tiempo real", "Todo el tiempo", "Nunca"], "answer": "Una vez" },
            { "type": "multiple-choice", "question": "onSnapshot() se ejecuta:", "options": ["Una vez", "En cambios", "Manual", "Nunca"], "answer": "En cambios" },
            { "type": "multiple-choice", "question": ".data() devuelve:", "options": ["JSON", "ID", "Colección", "Índice"], "answer": "JSON" },
            { "type": "multiple-choice", "question": "doc.id es:", "options": ["Campo", "Identificador único", "Índice", "Colección"], "answer": "Identificador único" },
            { "type": "multiple-choice", "question": "where('edad', '>=', 18) filtra:", "options": ["Mayores de 18", "Menores de 18", "Iguales a 18", "Nada"], "answer": "Mayores de 18" },
            { "type": "multiple-choice", "question": "getDocs(collection(db, 'x')):", "options": ["Un doc", "Múltiples docs", "Error", "Nada"], "answer": "Múltiples docs" },
            { "type": "multiple-choice", "question": "onSnapshot retorna función para:", "options": ["Escuchar", "Borrar", "Actualizar", "Nada"], "answer": "Borrar" },
            { "type": "multiple-choice", "question": "docSnap.exists() verifica:", "options": ["Si existe campo", "Si existe doc", "Si hay error", "Si hay datos"], "answer": "Si existe doc" },
            { "type": "multiple-choice", "question": "query() se usa con:", "options": ["getDocs", "setDoc", "deleteDoc", "addDoc"], "answer": "getDocs" },
            { "type": "multiple-choice", "question": "orderBy() ordena por:", "options": ["Campo", "ID", "Tiempo", "Nada"], "answer": "Campo" }
        ]
    },
    {
        "title": "Nivel 5: SQL - SELECT y FROM",
        "lesson": [
            {
                "title": "SELECT básico",
                "dialogo": "<p>En SQL todo comienza con SELECT. Selecciona las columnas que quieres ver. El asterisco (*) significa TODAS las columnas.</p>",
                "codigo": "-- Todas las columnas\nSELECT * FROM usuarios;\n\n-- Columnas específicas\nSELECT nombre, email FROM usuarios;\n\n-- Con alias de columna\nSELECT nombre AS 'Nombre del usuario' FROM usuarios;",
                "tourSteps": [
                    { "text": "* = todas las columnas.", "line": 2 },
                    { "text": "SELECT especifica columnas.", "line": 5 },
                    { "text": "AS renombra para mostrar.", "line": 8 }
                ]
            },
            {
                "title": "FROM - De dónde vienen los datos",
                "dialogo": "<p>FROM indica la tabla de donde extraer datos. Puedes seleccionar de múltiples tablas con comas (sintaxis básica).</p>",
                "codigo": "-- Una tabla\nSELECT * FROM usuarios;\n\n-- Múltiples tablas (sin join, no recomendado)\nSELECT * FROM usuarios, pedidos;\n\n-- Con filtro obligatorio\nSELECT * FROM usuarios WHERE id > 0;",
                "tourSteps": [
                    { "text": "FROM especifica la tabla.", "line": 2 }
                ]
            },
            {
                "title": "Expresiones y cálculos",
                "dialogo": "SQL puede hacer cálculos directamente en el SELECT.",
                "codigo": "-- Cálculos numéricos\nSELECT precio * cantidad AS total FROM pedidos;\n\n-- Concatenar texto\nSELECT nombre || '@' || dominio AS email FROM usuarios;\n\n--funciones\nSELECT UPPER(nombre) FROM usuarios;\nSELECT LOWER(email) FROM usuarios;\nSELECT LENGTH(nombre) FROM usuarios;",
                "tourSteps": [
                    { "text": "Operadores matemáticos funcionan.", "line": 2 },
                    { "text": "Funciones de texto: UPPER, LOWER.", "line": 8 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "SELECT * significa:", "options": ["Una columna", "Todas las columnas", "Sin columnas", "Error"], "answer": "Todas las columnas" },
            { "type": "multiple-choice", "question": "FROM especifica:", "options": ["Columnas", "Tabla", "Condición", "Orden"], "answer": "Tabla" },
            { "type": "multiple-choice", "question": "AS en SELECT sirve para:", "options": ["Agregar", "Renombrar columna resultados", "Eliminar", "Filtrar"], "answer": "Renombrar columna resultados" },
            { "type": "multiple-choice", "question": "UPPER('hola') = ?", "options": ["hola", "HOLA", "Hola", "Null"], "answer": "HOLA" },
            { "type": "multiple-choice", "question": "LOWER('HOLA') = ?", "options": ["HOLA", "hola", "Hola", "Null"], "answer": "hola" },
            { "type": "multiple-choice", "question": "SELECT nombre, edad FROM usuarios:", "options": ["Todas las columnas", "Solo nombre y edad", "Solo edad", "Error"], "answer": "Solo nombre y edad" },
            { "type": "multiple-choice", "question": "LENGTH('Ruby') = ?", "options": ["3", "4", "5", "6"], "answer": "4" },
            { "type": "multiple-choice", "question": "\"Carlos\" || \"@\" = ?", "options": ["Carlos@", "Carlos @", "Error", "Null"], "answer": "Carlos@" },
            { "type": "multiple-choice", "question": "¿Puedes calcular en SELECT?", "options": ["Sí", "No", "Solo con funciones", "Nunca"], "answer": "Sí" },
            { "type": "multiple-choice", "question": "SELECT 2 + 3 = ?", "options": ["5", "23", "Error", "Nada"], "answer": "5" }
        ]
    },
    {
        "title": "Nivel 6: SQL - WHERE y Filtros",
        "lesson": [
            {
                "title": "WHERE básico",
                "dialogo": "<p>WHERE filtra registros. Solo devuelve los que cumplen la condición.</p>",
                "codigo": "-- IGUALDAD\nSELECT * FROM usuarios WHERE ciudad = 'Madrid';\n\n-- DIFERENTE\nSELECT * FROM usuarios WHERE estado != 'activo';\n\n-- MAYOR/MENOR\nSELECT * FROM productos WHERE precio > 100;\nSELECT * FROM usuarios WHERE edad >= 18;",
                "tourSteps": [
                    { "text": "= significa \"es igual a\".", "line": 2 },
                    { "text": "!= significa \"no es igual\".", "line": 5 }
                ]
            },
            {
                "title": "Operadores AND y OR",
                "dialogo": "Combina múltiples condiciones lógicas.",
                "codigo": "-- AMBAS deben ser ciertas (AND)\nSELECT * FROM usuarios \nWHERE edad >= 18 AND ciudad = 'Madrid';\n\n-- UNA u OTRA (OR)\nSELECT * FROM productos \nWHERE categoria = 'electronics' OR precio < 50;",
                "tourSteps": [
                    { "text": "AND = ambas ciertas.", "line": 3 },
                    { "text": "OR = al menos una cierta.", "line": 9 }
                ]
            },
            {
                "title": "IN, BETWEEN, LIKE",
                "dialogo": "<p>Operadores adicionales para filtros comunes.</p>",
                "codigo": "-- IN: uno de varios valores\nSELECT * FROM usuarios WHERE pais IN ('España', 'México', 'Colombia');\n\n-- BETWEEN: rango inclusivo\nSELECT * FROM pedidos WHERE fecha BETWEEN '2024-01-01' AND '2024-12-31';\n\n-- LIKE: patrón de texto (% = cualquier cosa)\nSELECT * FROM usuarios WHERE email LIKE '%@gmail.com';\nSELECT * FROM usuarios WHERE nombre LIKE 'A%';  --Empieza con A",
                "tourSteps": [
                    { "text": "IN matchea valores específicos.", "line": 2 },
                    { "text": "BETWEEN rango numérico/fechas.", "line": 5 },
                    { "text": "LIKE busca patrones.", "line": 8 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "WHERE filtra:", "options": ["Columnas", "Filas", "Tablas", "Índices"], "answer": "Filas" },
            { "type": "multiple-choice", "question": "ciudad = 'Madrid' filtra:", "options": ["Madrid", "No Madrid", "Todos", "Error"], "answer": "Madrid" },
            { "type": "multiple-choice", "question": "edad >= 18 significa:", "options": ["Mayor a 18", "Mayor o igual a 18", "18 exacto", "Menor a 18"], "answer": "Mayor o igual a 18" },
            { "type": "multiple-choice", "question": "A AND B requiere:", "options": ["A o B", "A y B", "Solo A", "Solo B"], "answer": "A y B" },
            { "type": "multiple-choice", "question": "A OR B requiere:", "options": ["A y B", "A o B", "Ninguna", "Todas"], "answer": "A o B" },
            { "type": "multiple-choice", "question": "pais IN ('A', 'B') = ?", "options": ["A o B", "A y B", "Ninguno", "Todo"], "answer": "A o B" },
            { "type": "multiple-choice", "question": "precio BETWEEN 10 AND 20:", "options": ["10-20", "Mayor a 20", "Menor a 10", "Todo"], "answer": "10-20" },
            { "type": "multiple-choice", "question": "LIKE 'A%' encuentra:", "options": ["Empieza A", "Termina A", "Tiene A", "Sin A"], "answer": "Empieza A" },
            { "type": "multiple-choice", "question": "LIKE '%@gmail.com' encuentra:", "options": ["Cualquiera", "Solo gmail", "Sin gmail", "Error"], "answer": "Solo gmail" },
            { "type": "multiple-choice", "question": "NOT antes de operador:", "options": ["Invierte", "Niega", "Ambas", "Ninguna"], "answer": "Invierte" }
        ]
    },
    {
        "title": "Nivel 7: SQL - ORDER BY y LIMIT",
        "lesson": [
            {
                "title": "ORDER BY - Ordenar resultados",
                "dialogo": "<p>ORDER BY ordena ASC (ascendente) o DESC (descendente). Por defecto ASC.</p>",
                "codigo": "-- Ascendente (A-Z, 1-100)\nSELECT * FROM usuarios ORDER BY nombre ASC;\n\n-- Descendente (Z-A, 100-1)\nSELECT * FROM productos ORDER BY precio DESC;\n\n-- Múltiples columnas\nSELECT * FROM pedidos \nORDER BY fecha DESC, total ASC;",
                "tourSteps": [
                    { "text": "ASC = menor a mayor.", "line": 2 },
                    { "text": "DESC = mayor a menor.", "line": 5 }
                ]
            },
            {
                "title": "LIMIT - Limitar resultados",
                "dialogo": "<p>LIMIT restre el número de filas devueltas. Útil para top N.</p>",
                "codigo": "-- Top 5 productos más caros\nSELECT * FROM productos ORDER BY precio DESC LIMIT 5;\n\n-- Saltar primeros (para paginación)\nSELECT * FROM productos LIMIT 10 OFFSET 20;\n\n-- MySQL/MariaDB sintaxis alterna\nSELECT * FROM productos LIMIT 20, 10;",
                "tourSteps": [
                    { "text": "LIMIT 5 = solo 5 resultados.", "line": 2 },
                    { "text": "OFFSET salta registros.", "line": 5 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "ORDER BY ASC es:", "options": ["Descendente", "Ascendente", "Aleatorio", "Sin orden"], "answer": "Ascendente" },
            { "type": "multiple-choice", "question": "ORDER BY precio DESC:", "options": ["Mayor precio primero", "Menor primero", "Aleatorio", "Sin orden"], "answer": "Mayor precio primero" },
            { "type": "multiple-choice", "question": "LIMIT 10 muestra:", "options": ["10 filas", "10 columnas", "Todo", "Error"], "answer": "10 filas" },
            { "type": "multiple-choice", "question": "OFFSET 5 salta:", "options": ["5 primeras", "5 últimas", "5 columnas", "Nada"], "answer": "5 primeras" },
            { "type": "multiple-choice", "question": "Top 10 requiere:", "options": ["ORDER BY + LIMIT", "WHERE", "JOIN", "GROUP BY"], "answer": "ORDER BY + LIMIT" },
            { "type": "multiple-choice", "question": "ORDER BY sin especificar:", "options": ["ASC", "DESC", "Aleatorio", "Error"], "answer": "ASC" },
            { "type": "multiple-choice", "question": "LENGTH() vs ORDER BY:", "options": ["No relacionados", "Iguales", "LENGTH es función", "ORDER BY es función"], "answer": "No relacionados" },
            { "type": "multiple-choice", "question": "ORDER BY fecha DESC, nombre ASC:", "options": ["Fecha desc, nombre asc", "Fecha asc", "Nombre desc", "Solo fecha"], "answer": "Fecha desc, nombre asc" },
            { "type": "multiple-choice", "question": "LIMIT 5 OFFSET 10:", "options": ["11-15", "10-15", "5-10", "10-14"], "answer": "11-15" },
            { "type": "multiple-choice", "question": "Puedes combinar ORDER BY con WHERE?", "options": ["Sí", "No", "Solo con LIMIT", "Nunca"], "answer": "Sí" }
        ]
    },
    {
        "title": "Nivel 8: SQL - Funciones de Agregación",
        "lesson": [
            {
                "title": "COUNT, SUM, AVG",
                "dialogo": "<p>Funciones agregadas procesan múltiples filas para devolver un solo valor.</p>",
                "codigo": "-- Contar filas\nSELECT COUNT(*) FROM usuarios;\nSELECT COUNT(DISTINCT ciudad) FROM usuarios;\n\n-- Sumar valores\nSELECT SUM(precio) FROM pedidos;\n\n-- Promedio\nSELECT AVG(edad) FROM usuarios;\n\n-- Combinadas conAlias\nSELECT \n  COUNT(*) AS total_usuarios,\n  AVG(edad) AS edad_promedio\nFROM usuarios;",
                "tourSteps": [
                    { "text": "COUNT cuenta filas.", "line": 2 },
                    { "text": "SUM suma valores.", "line": 5 },
                    { "text": "AVG calcula promedio.", "line": 8 }
                ]
            },
            {
                "title": "MIN y MAX",
                "dialogo": "<p>Encuentra valores extremos.</p>",
                "codigo": "-- Valor mínimo\nSELECT MIN(precio) FROM productos;\n\n-- Valor máximo\nSELECT MAX(precio) FROM productos;\n\n-- En misma consulta\nSELECT \n  MIN(precio) AS precio_min,\n  MAX(precio) AS precio_max\nFROM productos;",
                "tourSteps": [
                    { "text": "MIN = valor más bajo.", "line": 2 },
                    { "text": "MAX = valor más alto.", "line": 5 }
                ]
            },
            {
                "title": "Funciones con WHERE",
                "dialogo": "Las funciones agregadas pueden filtrar antes de calcular.",
                "codigo": "-- Contar solo activos\nSELECT COUNT(*) FROM usuarios WHERE activa = true;\n\n-- Sumar pedidos de 2024\nSELECT SUM(total) FROM pedidos \nWHERE fecha >= '2024-01-01';",
                "tourSteps": [
                    { "text": "WHERE filtra antes de contar.", "line": 2 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "COUNT(*) cuentas:", "options": ["Columnas", "Filas", "Valores nulos", "Todo"], "answer": "Filas" },
            { "type": "multiple-choice", "question": "SUM() espera:", "options": ["Textos", "Números", "Fechas", "Booleanos"], "answer": "Números" },
            { "type": "multiple-choice", "question": "AVG() calcula:", "options": ["Suma", "Mediana", "Promedio", "Moda"], "answer": "Promedio" },
            { "type": "multiple-choice", "question": "MIN() devuelve:", "options": ["Menor", "Mayor", "Media", "Total"], "answer": "Menor" },
            { "type": "multiple-choice", "question": "MAX() devuelve:", "options": ["Menor", "Mayor", "Media", "Total"], "answer": "Mayor" },
            { "type": "multiple-choice", "question": "COUNT(DISTINCT ciudad) cuenta:", "options": ["Todas", "Unique", "Nulas", "Alguna"], "answer": "Unique" },
            { "type": "multiple-choice", "question": "DISTINCT elimina:", "options": ["Nulos", "Duplicados", "Todo", "Nada"], "answer": "Duplicados" },
            { "type": "multiple-choice", "question": "Agregadas con WHERE:", "options": ["Filtran antes", "Filtran después", "No funcionan", "Dan error"], "answer": "Filtran antes" },
            { "type": "multiple-choice", "question": "SELECT SUM(1):", "options": ["1", "0", "Error", "Nulos"], "answer": "1" },
            { "type": "multiple-choice", "question": "SELECT AVG(NULL):", "options": ["NULL", "0", "Error", "Ignore"], "answer": "NULL" }
        ]
    },
    {
        "title": "Nivel 9: SQL - GROUP BY y HAVING",
        "lesson": [
            {
                "title": "GROUP BY - Agrupar",
                "dialogo": "<p>GROUP BY agrupa filas con valores iguales para aplicar funciones agregadas por grupo.</p>",
                "codigo": "-- Contar usuarios por ciudad\nSELECT ciudad, COUNT(*) AS usuarios \nFROM usuarios \nGROUP BY ciudad;\n\n-- Sumar ventas por categoría\nSELECT categoria, SUM(ventas) AS total\nFROM productos\nGROUP BY categoria;",
                "tourSteps": [
                    { "text": "GROUP BY agrupapor ciudad.", "line": 3 },
                    { "text": "COUNT ahora es por grupo.", "line": 4 }
                ]
            },
            {
                "title": "HAVING - Filtrar grupos",
                "dialogo": "<p>HAVING filtra grupos después de GROUP BY (equivalente a WHERE pero para grupos).</p>",
                "codigo": "-- Ciudades con más de 5 usuarios\nSELECT ciudad, COUNT(*) AS usuarios\nFROM usuarios\nGROUP BY ciudad\nHAVING COUNT(*) > 5;\n\n-- Categorías con ventas > 10000\nSELECT categoria, SUM(ventas) AS total\nFROM productos\nGROUP BY categoria\nHAVING SUM(ventas) > 10000;",
                "tourSteps": [
                    { "text": "HAVING aplica después de agrupar.", "line": 3 }
                ]
            },
            {
                "title": "WHERE vs HAVING",
                "dialogo": "<p><strong>WHERE</strong> filtra filas ANTES de grupar. <strong>HAVING</strong> filtra grupos DESPUÉS de grupar.</p>",
                "codigo": "-- WHERE: filtra antes de agrupar\nSELECT ciudad, COUNT(*)\nFROM usuarios\nWHERE edad >= 18\nGROUP BY ciudad;\n\n-- HAVING: filtra después\nSELECT ciudad, COUNT(*)\nFROM usuarios\nGROUP BY ciudad\nHAVING COUNT(*) > 10;",
                "tourSteps": [
                    { "text": "WHERE antes de GROUP BY.", "line": 2 },
                    { "text": "HAVING después de GROUP BY.", "line": 7 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "GROUP BY:", "options": ["Ordena", "Agrupa", "Filtra", "Une"], "answer": "Agrupa" },
            { "type": "multiple-choice", "question": "HAVING filtra:", "options": ["Filas", "Grupos", "Columnas", "Todo"], "answer": "Grupos" },
            { "type": "multiple-choice", "question": "WHERE vs HAVING:", "options": ["WHERE después", "HAVING antes", "Iguales", "Diferentes"], "answer": "Diferentes" },
            { "type": "multiple-choice", "question": "HAVING requiere:", "options": ["SELECT", "WHERE", "GROUP BY", "ORDER BY"], "answer": "GROUP BY" },
            { "type": "multiple-choice", "question": "GROUP BY sin agregada:", "options": ["Error", "Funciona", "Nada", "Nulo"], "answer": "Funciona" },
            { "type": "multiple-choice", "question": "COUNT(columna) cuenta:", "options": ["Nulos", "No nulos", "Todo", "Duplicados"], "answer": "No nulos" },
            { "type": "multiple-choice", "question": "GROUP BY columna1, columna2:", "options": ["Por ambas", "Solo primera", "Solo segunda", "Error"], "answer": "Por ambas" },
            { "type": "multiple-choice", "question": "Con ROLLUP:", "options": ["Totales", "Subtotales", "Ambas", "Nada"], "answer": "Subtotales" },
            { "type": "multiple-choice", "question": "HAVING COUNT(*) > 5:", "options": ["< 5", "> 5", "= 5", "Todo"], "answer": "> 5" },
            { "type": "multiple-choice", "question": "SELECT AVG(edad) GROUP BY ciudad:", "options": ["Promedio total", "Promedio por ciudad", "Error", "Nada"], "answer": "Promedio por ciudad" }
        ]
    },
    {
        "title": "Nivel 10: SQL - INSERT, UPDATE, DELETE",
        "lesson": [
            {
                "title": "INSERT - Agregar datos",
                "dialogo": "<p>INSERT INTO añade nuevas filas a una tabla.</p>",
                "codigo": "-- Insertar fila completa\nINSERT INTO usuarios (nombre, edad, email)\nVALUES ('Ana', 25, 'ana@email.com');\n\n-- Insertar múltiples\nINSERT INTO usuarios (nombre, edad)\nVALUES ('Carlos', 30),\n       ('Maria', 28),\n       ('Luis', 35);",
                "tourSteps": [
                    { "text": "INSERT INTO + tabla.", "line": 1 },
                    { "text": "VALUES + datos.", "line": 2 }
                ]
            },
            {
                "title": "UPDATE - Modificar datos",
                "dialogo": "<p>UPDATE modifica filas existentes. SIEMPRE usa WHERE para evitar actualizar todo.</p>",
                "codigo": "-- Actualizar un registro\nUPDATE usuarios\nSET edad = 26, ciudad = 'Madrid'\nWHERE id = 1;\n\n-- Actualizar todos (¡peligroso!)\nUPDATE productos\nSET precio = precio * 1.1;  -- Aumentar 10%",
                "tourSteps": [
                    { "text": "SET especifica nuevos valores.", "line": 2 },
                    { "text": "WHERE hace específico el cambio.", "line": 3 }
                ]
            },
            {
                "title": "DELETE - Borrar datos",
                "dialogo": "<p>DELETE elimina filas. SIEMPRE con WHERE para no borrar todo.</p>",
                "codigo": "-- Borrar uno específico\nDELETE FROM usuarios WHERE id = 5;\n\n-- Borrar múltiples (con condición)\nDELETE FROM usuarios \nWHERE activa = false AND ultimo_login < '2023-01-01';",
                "tourSteps": [
                    { "text": "DELETE FROM + tabla.", "line": 1 },
                    { "text": "WHERE evita borrar todo.", "line": 2 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "INSERT INTO agrega:", "options": ["Columnas", "Filas", "Tablas", "Índices"], "answer": "Filas" },
            { "type": "multiple-choice", "question": "UPDATE modifica:", "options": ["Columnas", "Filas", "Tablas", "Estructura"], "answer": "Filas" },
            { "type": "multiple-choice", "question": "DELETE REMUEVE:", "options": ["Columnas", "Filas", "Tablas", "Índices"], "answer": "Filas" },
            { "type": "multiple-choice", "question": "Sin WHERE en UPDATE:", "options": ["Error", "Actualiza todo", "Nada", "Advierte"], "answer": "Actualiza todo" },
            { "type": "multiple-choice", "question": "Sin WHERE en DELETE:", "options": ["Error", "Borra todo", "Nada", "Advierte"], "answer": "Borra todo" },
            { "type": "multiple-choice", "question": "INSERT múltiples:", "options": ["Una fila", "Múltiples", "Error", "Solo una vez"], "answer": "Múltiples" },
            { "type": "multiple-choice", "question": "SET precio = precio * 2:", "options": ["Duplica", "Resetea", "Error", "Nada"], "answer": "Duplica" },
            { "type": "multiple-choice", "question": "RETURNING (PostgreSQL):", "options": ["Da datos", "Crea", "Borra", "Nada"], "answer": "Da datos" },
            { "type": "multiple-choice", "question": "REPLACE (MySQL):", "options": ["Actualiza", "Borra y crea", "Solo crea", "Nada"], "answer": "Borra y crea" },
            { "type": "multiple-choice", "question": "INSERT requiere columnas:", "options": ["Opcional", "Obligatorio", "Nunca", "Depende"], "answer": "Opcional" }
        ]
    },
    {
        "title": "Nivel 11: Foreign Keys y Relaciones",
        "lesson": [
            {
                "title": "Primary Key y Foreign Key",
                "dialogo": "<p><strong>Primary Key (PK)</strong> identifica cada fila única. <strong>Foreign Key (FK)</strong> relaciona tablas entre sí.</p>",
                "codigo": "-- Tabla之父 (sin FK)\nCREATE TABLE categorias (\n  id INT PRIMARY KEY,\n  nombre VARCHAR(50)\n);\n\n-- Tabla hijo (con FK)\nCREATE TABLE productos (\n  id INT PRIMARY KEY,\n  nombre VARCHAR(100),\n  categoria_id INT,\n  FOREIGN KEY (categoria_id) REFERENCES categorias(id)\n);",
                "tourSteps": [
                    { "text": "PRIMARY KEY = identificador único.", "line": 3 },
                    { "text": "FOREIGN KEY = referencia a otra tabla.", "line": 11 }
                ]
            },
            {
                "title": "Tipos de Relaciones",
                "dialogo": "<p>Las relaciones pueden ser: 1-a-1, 1-a-muchos, muchos-a-muchos.</p>",
                "codigo": "-- 1-a-1 (un usuario tiene un perfil)\nCREATE TABLE perfiles (\n  usuario_id INT PRIMARY KEY,\n  bio TEXT,\n  FOREIGN KEY (usuario_id) REFERENCES usuarios(id)\n);\n\n-- 1-a-muchos (una categoría tiene muchos productos)\ncategorias --1 --> productos --muchos\n\n-- Muchos-a-muchos (estudiantes-cursos)\nCREATE TABLE inscripciones (\n  estudiante_id INT,\n  curso_id INT,\n  PRIMARY KEY (estudiante_id, curso_id)\n);",
                "tourSteps": [
                    { "text": "1-a-1: PK en ambas tablas.", "line": 2 },
                    { "text": "1-a-muchos: FK en tabla много.", "line": 9 }
                ]
            },
            {
                "title": "Integridad Referencial",
                "dialogo": "<p>Las FK mantienen integridad: no puedes criar hijo sin padre, y al borrar padre decide qué pasa.</p>",
                "codigo": "-- Al borrar categoría, borrar productos\nCREATE TABLE productos (\n  categoria_id INT,\n  FOREIGN KEY (categoria_id) \n  REFERENCES categorias(id) \n  ON DELETE CASCADE\n);\n\n-- O setear null\nFOREIGN KEY (categoria_id) \nREFERENCES categorias(id) \nON DELETE SET NULL;",
                "tourSteps": [
                    { "text": "CASCADE = borra hijos.", "line": 5 },
                    { "text": "SET NULL = hijossin padre.", "line": 10 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "Primary Key:", "options": ["Identifica fila", " Relación", "Alias", "Índice"], "answer": "Identifica fila" },
            { "type": "multiple-choice", "question": "Foreign Key:", "options": ["Identifica", "Relaciona", "Ordena", "Filtra"], "answer": "Relaciona" },
            { "type": "multiple-choice", "question": "1-a-muchos significa:", "options": ["1 padre, muchos hijos", "Muchos padres, 1 hijo", "1 a 1", "Muchos a muchos"], "answer": "1 padre, muchos hijos" },
            { "type": "multiple-choice", "question": "CASCADE al borrar padre:", "options": ["Borra hijos", "Mantiene hijos", "Error", "Nada"], "answer": "Borra hijos" },
            { "type": "multiple-choice", "question": "SET NULL al borrar padre:", "options": [" Null", "Borra hijos", "Error", "Mantiene"], "answer": "Null" },
            { "type": "multiple-choice", "question": "FK puede ser null:", "options": ["Sí", "No", "Solo número", "Nunca"], "answer": "Sí" },
            { "type": "multiple-choice", "question": "PK acepta duplicados:", "options": ["Sí", "No", "Solo null", "Depende"], "answer": "No" },
            { "type": "multiple-choice", "question": "Relación muchos-a-muchos:", "options": ["Tabla intermedia", "2 FK", "3 tablas", "No existe"], "answer": "Tabla intermedia" },
            { "type": "multiple-choice", "question": "ON DELETE:", "options": ["Al borrar padre", "Al borrar hijo", "Al actualizar", "Nunca"], "answer": "Al borrar padre" },
            { "type": "multiple-choice", "question": "RESTRICT:", "options": ["Permite", "Impide borrar", "Nada", "Error"], "answer": "Impide borrar" }
        ]
    },
    {
        "title": "Nivel 12: SQL - JOINs",
        "lesson": [
            {
                "title": "INNER JOIN - Intersección",
                "dialogo": "<p>INNER JOIN devuelve solo filas que tienen match en ambas tablas.</p>",
                "codigo": "-- Productos con su categoría\nSELECT p.nombre, c.nombre AS categoria\nFROM productos p\nINNER JOIN categorias c\n  ON p.categoria_id = c.id;\n\n-- Equivalente a:\nSELECT p.nombre, c.nombre\nFROM productos p, categorias c\nWHERE p.categoria_id = c.id;",
                "tourSteps": [
                    { "text": "INNER JOIN conecta tablas.", "line": 2 },
                    { "text": "ON especifica la condición.", "line": 3 }
                ]
            },
            {
                "title": "LEFT JOIN - Izquierda completa",
                "dialogo": "<p>LEFT JOIN devuelve TODOS los de la izquierda, y los matches de la derecha (o null si no hay).</p>",
                "codigo": "-- Todos los productos (incluidos sin categoría)\nSELECT p.nombre, c.nombre AS categoria\nFROM productos p\nLEFT JOIN categorias c\n  ON p.categoria_id = c.id;\n\n-- Productos sin categoría (donde FK es null)\nWHERE c.id IS NULL;",
                "tourSteps": [
                    { "text": "LEFT JOIN preserva izquierda.", "line": 2 }
                ]
            },
            {
                "title": "RIGHT JOIN y FULL OUTER JOIN",
                "dialogo": "<p>RIGHT JOIN = todos de derecha. FULL OUTER = todos de ambas (si no hay match, null).</p>",
                "codigo": "-- Todos las categorías (incluidos sin productos)\nSELECT p.nombre, c.nombre\nFROM productos p\nRIGHT JOIN categorias c\n  ON p.categoria_id = c.id;\n\n-- MySQL no tiene FULL, se simula con UNION\n(SELECT p.nombre, c.nombre FROM p INNER JOIN c)\nUNION ALL\n(SELECT p.nombre, c.nombre FROM p LEFT JOIN c WHERE c.id IS NULL);",
                "tourSteps": [
                    { "text": "RIGHT JOIN preserva derecha.", "line": 2 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "INNER JOIN devuelve:", "options": ["Todo izquierda", "Todo derecha", "Solo matches", "Todo"], "answer": "Solo matches" },
            { "type": "multiple-choice", "question": "LEFT JOIN devuelve:", "options": ["Todo izquierda", "Solo matches", "Todo derecha", "Nada"], "answer": "Todo izquierda" },
            { "type": "multiple-choice", "question": "Sin match en LEFT JOIN:", "options": ["No aparece", "Aparece null", "Error", "Borra"], "answer": "Aparece null" },
            { "type": "multiple-choice", "question": "ON especifica:", "options": ["Columnas", "Condición join", "Orden", "Filtro"], "answer": "Condición join" },
            { "type": "multiple-choice", "question": "JOIN sin tipo:", "options": ["INNER", "LEFT", "RIGHT", "FULL"], "answer": "INNER" },
            { "type": "multiple-choice", "question": "WHERE después de JOIN:", "options": ["Filtra resultado", "Filtra tablas", "Error", "Nada"], "answer": "Filtra resultado" },
            { "type": "multiple-choice", "question": "Múltiples JOINs:", "options": ["Encadenar", "Solo uno", "Error", "Nada"], "answer": "Encadenar" },
            { "type": "multiple-choice", "question": "Tablas en FROM por coma:", "options": ["CROSS JOIN", "JOIN implícito", "Error", "Nada"], "answer": "JOIN implícito" },
            { "type": "multiple-choice", "question": " LEFT vs RIGHT:", "options": ["Invierte tabla", "Iguales", "Depende", "Solo sentido"], "answer": "Invierte tabla" },
            { "type": "multiple-choice", "question": "ON p.id = c.id:", "options": ["Error", "JOIN", "Filtro", "Nada"], "answer": "JOIN" }
        ]
    },
    {
        "title": "Nivel 13: SQL - Subqueries",
        "lesson": [
            {
                "title": "Qué es una Subquery",
                "dialogo": "<p>Una subquery es un SELECT dentro de otro SELECT. Se evalúa primero el interno y luego el externo.</p>",
                "codigo": "-- Usuarios mayores que el promedio\nSELECT nombre, edad\nFROM usuarios\nWHERE edad > (\n  SELECT AVG(edad) FROM usuarios\n);\n\n-- Productos con precio mayor al promedio\nSELECT nombre, precio\nFROM productos\nWHERE precio > (SELECT AVG(precio) FROM productos);",
                "tourSteps": [
                    { "text": "Subquery entre paréntesis.", "line": 3 },
                    { "text": "Se evalúa primero el interno.", "line": 4 }
                ]
            },
            {
                "title": "Subqueries en WHERE y HAVING",
                "dialogo": "<p>Puedes usar subqueries para comparar con valores calculados dinámicamente.</p>",
                "codigo": "-- Categorías con más ventas que el promedio\nSELECT categoria, SUM(ventas) AS total\nFROM productos\nGROUP BY categoria\nHAVING SUM(ventas) > (\n  SELECT AVG(ventas) FROM productos\n);\n\n-- EXISTS: verificar existencia\nSELECT * FROM usuarios u\nWHERE EXISTS (\n  SELECT 1 FROM pedidos p WHERE p.usuario_id = u.id\n);",
                "tourSteps": [
                    { "text": "HAVING puede usar subquery.", "line": 3 }
                ]
            },
            {
                "title": "Subqueries correlacionadas",
                "dialogo": "<p>Una subquery correlacionada Reference la tabla externa. Se evalúa por cada fila.</p>",
                "codigo": "-- Productos cuyo precio > promedio de su categoría\nSELECT nombre, precio, categoria_id\nFROM productos p\nWHERE precio > (\n  SELECT AVG(precio) \n  FROM productos \n  WHERE categoria_id = p.categoria_id\n);",
                "tourSteps": [
                    { "text": "p.categoria_id reference externa.", "line": 5 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "Subquery se evalúa:", "options": ["Último", "Primero", "Nunca", "Después"], "answer": "Primero" },
            { "type": "multiple-choice", "question": "EXISTS retorna:", "options": ["Boolean", "Datos", "Índice", "Nada"], "answer": "Boolean" },
            { "type": "multiple-choice", "question": "IN con subquery:", "options": ["Valores", "Boolean", "Índice", "Error"], "answer": "Valores" },
            { "type": "multiple-choice", "question": "Correlacionada:", "options": ["Reference externa", "Independiente", "Simple", "Ninguna"], "answer": "Reference externa" },
            { "type": "multiple-choice", "question": "ANY significa:", "options": ["Al menos uno", "Todos", "Uno", "Ninguno"], "answer": "Al menos uno" },
            { "type": "multiple-choice", "question": "ALL significa:", "options": ["Al menos uno", "Todos", "Uno", "Ninguno"], "answer": "Todos" },
            { "type": "multiple-choice", "question": "Subquery en SELECT:", "options": ["Permitido", "No permitido", "Depende", "Error"], "answer": "Permitido" },
            { "type": "multiple-choice", "question": "Subquery en FROM:", "options": ["Como tabla", "No permitido", "Error", "Depende"], "answer": "Como tabla" },
            { "type": "multiple-choice", "question": "Scalar subquery retorna:", "options": ["1 valor", "Múltiples", "Nada", "Tabla"], "answer": "1 valor" },
            { "type": "multiple-choice", "question": "Mejor que JOIN para:", "options": ["Cálculos", "Filtros", "Orden", "Todo"], "answer": "Cálculos" }
        ]
    },
    {
        "title": "Nivel 14: SQL - Índices y Rendimiento",
        "lesson": [
            {
                "title": "Qué es un Índice",
                "dialogo": "<p>Un índice es como el índice de un libro: accelerate encontrar datos sin leer todo.</p>",
                "codigo": "-- Crear índice básico\nCREATE INDEX idx_usuarios_email \nON usuarios(email);\n\n-- Índice compuesto\nCREATE INDEX idx_pedidos_fecha_estado\nON pedidos(fecha DESC, estado);\n\n-- Índices únicos\nCREATE UNIQUE INDEX idx_usuarios_dni \nON usuarios(dni);",
                "tourSteps": [
                    { "text": "CREATE INDEX acelerabúsquedas.", "line": 2 }
                ]
            },
            {
                "title": "Cuándo crear índices",
                "dialogo": "<p>Crea índices en columnas usadas en: WHERE, JOIN, ORDER BY, GROUP BY.</p>",
                "codigo": "-- En columnas de filtro\nCREATE INDEX idx_productos_categoria \nON productos(categoria_id);\n\n-- En ORDER BY frecuente\nCREATE INDEX idx_pedidos_fecha \nON pedidos(fecha DESC);\n\n-- Comprobarexplains\nEXPLAIN SELECT * FROM usuarios \nWHERE email = 'a@test.com';",
                "tourSteps": [
                    { "text": "EXPLAIN muestra plan de ejecución.", "line": 11 }
                ]
            },
            {
                "title": "Ventajas y costos",
                "dialogo": "<p>Los índices aceleran LECTURAS pero lentifican ESCRITURAS (actualizar índice).</p>",
                "codigo": "-- Buscar sin índice (full scan)\nSELECT * FROM usuarios WHERE nombre LIKE '%ana%';\n\n-- Con índice en nombre\nCREATE INDEX idx_usuarios_nombre ON usuarios(nombre);\n\n-- Índice no ayuda con funciones\nSELECT * FROM usuarios WHERE UPPER(nombre) = 'ANA';  -- No usa índice",
                "tourSteps": [
                    { "text": "% al inicio no usa índice.", "line": 2 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "Índice acelera:", "options": ["Escritura", "Lectura", "Todo", "Nada"], "answer": "Lectura" },
            { "type": "multiple-choice", "question": "Índice lentifica:", "options": ["Lectura", "Escritura", "Nada", "Consulta"], "answer": "Escritura" },
            { "type": "multiple-choice", "question": "PRIMARY KEY crea índice:", "options": ["Automático", "Manual", "No", "Depende"], "answer": "Automático" },
            { "type": "multiple-choice", "question": "UNIQUE crea índice:", "options": ["Sí", "No", "Manual", "Depende"], "answer": "Sí" },
            { "type": "multiple-choice", "question": "LIKE 'abc%' usa índice:", "options": ["Sí", "No", "Depende", "Nunca"], "answer": "Sí" },
            { "type": "multiple-choice", "question": "LIKE '%abc' usa índice:", "options": ["Sí", "No", "Depende", "Nunca"], "answer": "No" },
            { "type": "multiple-choice", "question": "EXPLAIN muestra:", "options": ["Plan ejecución", "Datos", "Índice", "Tiempo"], "answer": "Plan ejecución" },
            { "type": "multiple-choice", "question": "Índice compuesto:", "options": ["Múltiples columnas", "Una columna", "Solo uno", "No existe"], "answer": "Múltiples columnas" },
            { "type": "multiple-choice", "question": "Demasiados índices:", "options": ["Mejor", "Peor", "Igual", "Nada"], "answer": "Peor" },
            { "type": "multiple-choice", "question": "DROP INDEX:", "options": ["Elimina índice", "Crea índice", "Nada", "Error"], "answer": "Elimina índice" }
        ]
    },
    {
        "title": "Nivel 15: SQL - Transactions",
        "lesson": [
            {
                "title": "Qué es una Transaction",
                "dialogo": "<p>Una transaction agrupa múltiples operaciones como UNA sola. O todas succeeden o todas fallan (rollback).</p>",
                "codigo": "BEGIN TRANSACTION;\n\nUPDATE cuentas SET saldo = saldo - 100 \nWHERE id = 1;  -- Restar\n\nUPDATE cuentas SET saldo = saldo + 100 \nWHERE id = 2;  -- Sumar\n\nCOMMIT;  -- Confirmar\n\n-- Si algo falla:\nROLLBACK;  -- Deshacer todo",
                "tourSteps": [
                    { "text": "BEGIN inicia transaction.", "line": 1 },
                    { "text": "COMMIT confirma todo.", "line": 8 },
                    { "text": "ROLLBACK deshace todo.", "line": 12 }
                ]
            },
            {
                "title": "ACID",
                "dialogo": "<p>Transactions cumplen ACID: Atomicidad, Consistencia, Isolación, Durabilidad.</p>",
                "codigo": "-- Atomicidad (todo o nada)\nBEGIN;\nUPDATE pedido SET estado = 'procesando' WHERE id = 1;\nUPDATE inventario SET stock = stock - 1 WHERE producto_id = 5;\n-- Si falla uno, rollback todo\nCOMMIT;\n\n-- Consistencia (restricciones se mantienen)",
                "tourSteps": [
                    { "text": "Atomic = opera como unidad.", "line": 2 }
                ]
            },
            {
                "title": "SAVEPOINT",
                "dialogo": "Guarda puntos intermedios dentro de una transaction para hacer rollback parcial.",
                "codigo": "BEGIN;\nINSERT INTO usuarios (nombre) VALUES ('Ana');\n\nSAVEPOINT punto1;\n\nINSERT INTO usuarios (nombre) VALUES ('Ana');  -- Error\nROLLBACK TO SAVEPOINT punto1;  -- Regresa a punto1, no borra a Ana\n\nCOMMIT;",
                "tourSteps": [
                    { "text": "SAVEPOINT marca punto.", "line": 4 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "Transaction agrupa:", "options": ["Consultas", "Operaciones", "Índices", "Vistas"], "answer": "Operaciones" },
            { "type": "multiple-choice", "question": "COMMIT:", "options": ["Confirma", "Cancela", "Guarda", "Nada"], "answer": "Confirma" },
            { "type": "multiple-choice", "question": "ROLLBACK:", "options": ["Confirma", "Deshace", "Guarda", "Nada"], "answer": "Deshace" },
            { "type": "multiple-choice", "question": "A de ACID:", "options": ["Atomic", "Actual", "Añadir", "Auto"], "answer": "Atomic" },
            { "type": "multiple-choice", "question": "SAVEPOINT:", "options": ["Punto parcial", "Todo", "Nada", "Error"], "answer": "Punto parcial" },
            { "type": "multiple-choice", "question": "Autocommit (por defecto):", "options": ["Confirma solo", "Automatic rollback", "Manual", "Depende"], "answer": "Confirma solo" },
            { "type": "multiple-choice", "question": "BEGIN o START:", "options": ["Inicia", "Termina", "Guarda", "Nada"], "answer": "Inicia" },
            { "type": "multiple-choice", "question": "Error en transaction:", "options": ["Auto rollback", "Nada", "Commit parcial", "Pregunta"], "answer": "Auto rollback" },
            { "type": "multiple-choice", "question": "ISOLACIÓN previene:", "options": ["Deadlocks", "Lecturas sucias", "Índices", "Errores"], "answer": "Lecturas sucias" },
            { "type": "multiple-choice", "question": "SERIALIZABLE:", "options": ["Más aislamiento", "Menos", "Nada", "Error"], "answer": "Más aislamiento" }
        ]
    },
    {
        "title": "Nivel 16: Normalización",
        "lesson": [
            {
                "title": "Qué es Normalización",
                "dialogo": "<p>Normalización organiza datos en tablas para evitar redundancia y anomalías. Se mide en Formas Normales (FN).</p>",
                "codigo": "-- 1FN: Atomicidad (sin valores múltiples)\n-- MALO: telefonos ARRAY['123','456']\n-- BUENO: telefono1, telefono2\n\n-- 2FN: No dependencias parciales\n-- Malo: (producto_id, categoria_id) con solo categoria_nombre\n-- Bueno: Tabla categorias separada\n\n-- 3FN: No dependencias transitivas\n-- Malo: usuario → ciudad_id → pais_nombre\n-- Bueno: Tabla paises separada",
                "tourSteps": [
                    { "text": "1FN = valores atómicos.", "line": 2 }
                ]
            },
            {
                "title": "Primera Forma Normal (1FN)",
                "dialogo": "<p>Cada campo debe tener un solo valor (atómico). Sin grupos ni arrays.</p>",
                "codigo": "-- VIOLA 1FN (múltiples valores)\nCREATE TABLE pedidos_malo (\n  productos TEXT  -- '1,2,3' en misma celda\n);\n\n-- CUMPLE 1FN (una fila por producto)\nCREATE TABLE pedidos_productos (\n  pedido_id INT,\n  producto_id INT,\n  PRIMARY KEY (pedido_id, producto_id)\n);",
                "tourSteps": [
                    { "text": "Una columna = un valor.", "line": 2 }
                ]
            },
            {
                "title": "Segunda y Tercera Forma Normal",
                "dialogo": "<p>2FN: Todo no-key依赖于 toda la clave primaria. 3FN: Sin dependencias transitivas.</p>",
                "codigo": "-- Tabla con dependencias parciales (MALO)\nCREATE TABLE pedidos_malo (\n  pedido_id INT PRIMARY KEY,\n  cliente_id INT,\n  cliente_nombre TEXT  -- depende solo de cliente_id\n);\n\n-- Divide en tablas (CUMPLE)\nCREATE TABLE clientes (id PK, nombre);\nCREATE TABLE pedidos (id PK, cliente_id FK);",
                "tourSteps": [
                    { "text": "2FN: cada tabla con PK.", "line": 2 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "Normalización evita:", "options": ["Velocidad", "Redundancia", "Índices", "Join"], "answer": "Redundancia" },
            { "type": "multiple-choice", "question": "1FN requiere:", "options": ["Valores únicos", "Atómicos", "FK", "PK"], "answer": "Atómicos" },
            { "type": "multiple-choice", "question": "2FN requiere:", "options": ["1FN", "3FN", "No necesita", "Invierte"], "answer": "1FN" },
            { "type": "multiple-choice", "question": "Dependencia transitiva:", "options": ["Directa", "Indirecta", "Ninguna", "Especial"], "answer": "Indirecta" },
            { "type": "multiple-choice", "question": "3FN:", "options": ["1FN + 2FN", "Solo 1FN", "Sin normalizar", "Todas"], "answer": "1FN + 2FN" },
            { "type": "multiple-choice", "question": "PK en 2FN:", "options": ["Necesaria", "Opcional", "No", "Depende"], "answer": "Necesaria" },
            { "type": "multiple-choice", "question": "Denormalizar:", "options": ["Agregar redundancia", "Quitar redundancia", "Normalizar", "Indices"], "answer": "Agregar redundancia" },
            { "type": "multiple-choice", "question": "Por qué denormalizar:", "options": ["Velocidad", " space", "Simplicidad", "Todo"], "answer": "Velocidad" },
            { "type": "multiple-choice", "question": "BCNF:", "options": ["Forma normal", "Más estricta", "Antes de 3FN", "Sin utilidad"], "answer": "Más estricta" },
            { "type": "multiple-choice", "question": "Objetivo:", "options": ["Menos tablas", "Sin redundancia", "Más joins", "Índices"], "answer": "Sin redundancia" }
        ]
    },
    {
        "title": "Nivel 17: Firebase Auth",
        "lesson": [
            {
                "title": "Auth - Autenticación",
                "dialogo": "<p>Firebase Auth maneja autenticación de usuarios: email/contraseña, Google, Facebook, etc.</p>",
                "codigo": "import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';\n\nconst auth = getAuth();\n\n// Registrar usuario\ncreateUserWithEmailAndPassword(auth, 'ana@test.com', 'password123')\n  .then((userCredential) => {\n    console.log('Usuario criado:', userCredential.user.uid);\n  });",
                "tourSteps": [
                    { "text": "createUserWithEmailAndPassword registra.", "line": 5 }
                ]
            },
            {
                "title": "Iniciar sesión y cerrar",
                "dialogo": "<p>signInWithEmailAndPassword y signOut para gestionar sesión.</p>",
                "codigo": "// Iniciar sesión\nsignInWithEmailAndPassword(auth, 'ana@test.com', 'password123')\n  .then((userCredential) => {\n    console.log('Logged in:', userCredential.user.email);\n  });\n\n// Cerrar sesión\nsignOut(auth).then(() => {\n  console.log('Signed out');\n});",
                "tourSteps": [
                    { "text": "signInWithEmailAndPassword login.", "line": 2 }
                ]
            },
            {
                "title": "onAuthStateChanged - Detectar estado",
                "dialogo": "<p>onAuthStateChanged escucha cambios de autenticación en tiempo real.</p>",
                "codigo": "import { onAuthStateChanged } from 'firebase/auth';\n\nonAuthStateChanged(auth, (user) => {\n  if (user) {\n    console.log('Usuario autenticado:', user.uid, user.email);\n    // Mostrar dashboard\n  } else {\n    console.log('No hay usuario');\n    // Mostrar login\n  }\n});",
                "tourSteps": [
                    { "text": "onAuthStateChanged detecta cambios.", "line": 3 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "Firebase Auth sirve para:", "options": ["Base de datos", "Autenticación", "Storage", "Hosting"], "answer": "Autenticación" },
            { "type": "multiple-choice", "question": "createUserWithEmailAndPassword:", "options": ["Registra", "Login", "Cierra", "Nada"], "answer": "Registra" },
            { "type": "multiple-choice", "question": "signInWithEmailAndPassword:", "options": ["Registra", "Login", "Cierra", "Borra"], "answer": "Login" },
            { "type": "multiple-choice", "question": "signOut:", "options": ["Registra", "Login", "Cierra sesión", "Borra"], "answer": "Cierra sesión" },
            { "type": "multiple-choice", "question": "onAuthStateChanged:", "options": ["Escucha estado", "Crea usuario", "Login", "Nada"], "answer": "Escucha estado" },
            { "type": "multiple-choice", "question": "user.uid es:", "options": ["Identificador único", "Email", "Password", "Token"], "answer": "Identificador único" },
            { "type": "multiple-choice", "question": "Auth no es Firestore:", "options": ["Diferente servicio", "Igual", "Depende", "Error"], "answer": "Diferente servicio" },
            { "type": "multiple-choice", "question": "Google Auth:", "options": ["Proveedor", "Solo email", "No soportado", "Manual"], "answer": "Proveedor" },
            { "type": "multiple-choice", "question": "user.emailVerified:", "options": ["Boolean", "Email", "Tiempo", "Nada"], "answer": "Boolean" },
            { "type": "multiple-choice", "question": "auth.currentUser:", "options": ["Usuario actual", "Todos", "Primero", "Nada"], "answer": "Usuario actual" }
        ]
    },
    {
        "title": "Nivel 18: Reglas de Seguridad Firebase",
        "lesson": [
            {
                "title": "Firestore Security Rules",
                "dialogo": "<p>Las reglas definen quién puede ler/escribir en Firestore. Se escriben en lenguaje específico.</p>",
                "codigo": "rules_version = '2';\nservice cloud.firestore {\n  match /databases/{database}/documents {\n    \n    // Regla para todos\n    match /usuarios/{uid} {\n      allow read: if request.auth != null;\n      allow write: if request.auth.uid == uid;\n    }\n  }\n}",
                "tourSteps": [
                    { "text": "request.auth = usuario autenticado.", "line": 7 }
                ]
            },
            {
                "title": "Condiciones comunes",
                "dialogo": "<p>Condiciones típicas: solo propietario, solo lectura pública, soloAdmin.</p>",
                "codigo": "// Solo el propietario puede ler y escribir\nmatch /usuarios/{uid} {\n  allow read, write: if request.auth != null && request.auth.uid == uid;\n}\n\n// Lectura pública, soloadmin escribe\nmatch /publico/{docId} {\n  allow read: if true;\n  allow write: if request.auth != null \n    && request.auth.token.admin == true;\n}\n\n// Nadie puede borrar\nmatch /{document=**} {\n  allow delete: if false;\n}",
                "tourSteps": [
                    { "text": "request.auth.uid == uid = propietario.", "line": 2 }
                ]
            },
            {
                "title": "Validar datos",
                "dialogo": "<p>Puedes validar que los datos enviados cumplan condiciones.</p>",
                "codigo": "// Validar que nombre tenga menos de 50 chars\nmatch /usuarios/{uid} {\n  allow create: if request.resource.data.nombre.size() < 50;\n}\n\n// Validar tipos\nmatch /productos/{uid} {\n  allow write: if request.resource.data.precio is int\n    && request.resource.data.precio > 0;\n}",
                "tourSteps": [
                    { "text": "request.resource.data = datos a escribir.", "line": 2 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "Security Rules protegen:", "options": ["Frontend", "Backend", "Ambos", "Nada"], "answer": "Backend" },
            { "type": "multiple-choice", "question": "request.auth != null significa:", "options": ["Anonimo", "Autenticado", "Admin", "Invitado"], "answer": "Autenticado" },
            { "type": "multiple-choice", "question": "allow read: if true:", "options": ["Cualquiera", "Solo auth", "Nadie", "Error"], "answer": "Cualquiera" },
            { "type": "multiple-choice", "question": "allow delete: if false:", "options": ["Nunca puede borrar", "Solo admin", "Solo owner", "Depende"], "answer": "Nunca puede borrar" },
            { "type": "multiple-choice", "question": "resource.data:", "options": ["Datos nuevo", "Datos actual", "Usuario", "Todo"], "answer": "Datos nuevo" },
            { "type": "multiple-choice", "question": "request.auth.token:", "options": ["Claime", "Email", "UID", "Token"], "answer": "Claime" },
            { "type": "multiple-choice", "question": "match /{document=**}:", "options": ["Todo documento", "Uno", "Algunos", "Nada"], "answer": "Todo documento" },
            { "type": "multiple-choice", "question": "if request.auth.uid == uid:", "options": ["Propietario", "Admin", "Otro", "Nadie"], "answer": "Propietario" },
            { "type": "multiple-choice", "question": "Reglas se aplicana:", "options": ["Escritura", "Lectura", "Ambas", "Nada"], "answer": "Ambas" },
            { "type": "multiple-choice", "question": "Validar permite:", "options": ["Rechazar datos", "Aprobar", "Todo", "Nada"], "answer": "Rechazar datos" }
        ]
    },
    {
        "title": "Nivel 19: Stored Procedures y Functions",
        "lesson": [
            {
                "title": "Stored Procedures (MySQL/MariaDB)",
                "dialogo": "<p>Stored procedures son código SQL guardado en la base para reutilizar.</p>",
                "codigo": "DELIMITER //\nCREATE PROCEDURE crear_pedido(IN usuario_id INT, IN producto_id INT, IN cantidad INT)\nBEGIN\n  INSERT INTO pedidos (usuario_id, producto_id, cantidad, fecha)\n  VALUES (usuario_id, producto_id, cantidad, NOW());\n  \n  UPDATE productos SET stock = stock - cantidad\n  WHERE id = producto_id;\nEND //\nDELIMITER ;\n\n-- Llamar\nCALL crear_pedido(1, 5, 2);",
                "tourSteps": [
                    { "text": "CREATE PROCEDURE guarda código.", "line": 2 }
                ]
            },
            {
                "title": "Functions (PostgreSQL)",
                "dialogo": "<p>Functions devuelven valor, se usan en SELECT como cualquier columna.</p>",
                "codigo": "CREATE OR REPLACE FUNCTION total_pedidos(usuario_id INT)\nRETURNS DECIMAL\nAS $$\n  SELECT COALESCE(SUM(total), 0)\n  FROM pedidos\n  WHERE usuario_id = $1;\n$$ LANGUAGE plpgsql;\n\n-- Usar\nSELECT nombre, total_pedidos(id) AS total_gastado\nFROM usuarios;",
                "tourSteps": [
                    { "text": "CREATE FUNCTION con RETURNS.", "line": 1 }
                ]
            },
            {
                "title": "Triggers",
                "dialogo": "<p>Triggers ejecutan código automáticamente cuando ocurre un evento (INSERT/UPDATE/DELETE).</p>",
                "codigo": "CREATE TRIGGER actualizar_stock\nAFTER INSERT ON pedido_items\nFOR EACH ROW\nBEGIN\n  UPDATE productos \n  SET stock = stock - NEW.cantidad\n  WHERE id = NEW.producto_id;\nEND;\n\n-- OLD = datos anteriores\n-- NEW = datos nuevos",
                "tourSteps": [
                    { "text": "AFTER INSERT = se ejecuta después.", "line": 2 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "Stored Procedure:", "options": ["Código guardado", "Índice", "Vista", "Tabla"], "answer": "Código guardado" },
            { "type": "multiple-choice", "question": "Function:", "options": ["Devuelve valor", "Guarda", "Borra", "Invierte"], "answer": "Devuelve valor" },
            { "type": "multiple-choice", "question": "Trigger:", "options": ["Automático", "Manual", "Solo", "Nunca"], "answer": "Automático" },
            { "type": "multiple-choice", "question": "CALL:", "options": ["Ejecuta procedure", "Crea", "Borra", "Nada"], "answer": "Ejecuta procedure" },
            { "type": "multiple-choice", "question": "NEW en trigger:", "options": ["Datos nuevos", "Viejos", "Usuario", "Tabla"], "answer": "Datos nuevos" },
            { "type": "multiple-choice", "question": "OLD en trigger:", "options": ["Datos nuevos", "Datos anteriores", "Usuario", "Todo"], "answer": "Datos anteriores" },
            { "type": "multiple-choice", "question": "AFTER INSERT:", "options": ["Después de insertar", "Antes", "Solo", "Nunca"], "answer": "Después de insertar" },
            { "type": "multiple-choice", "question": "DELIMITER:", "options": ["Cambia separador", "Crea", "Borra", "Nada"], "answer": "Cambia separador" },
            { "type": "multiple-choice", "question": "En SELECT se usa:", "options": ["Function", "Procedure", "Trigger", "Índice"], "answer": "Function" },
            { "type": "multiple-choice", "question": "BEGIN...END:", "options": ["Bloque", "Tabla", "Índice", "Nada"], "answer": "Bloque" }
        ]
    },
    {
        "title": "Nivel 20: Examen Final",
        "lesson": [
            {
                "title": "Has llegado al final",
                "dialogo": "<p>En 20 niveles cubriste Firebase (CRUD, Auth, reglas) y SQL (SELECT, JOINs, transacciones, normalización).</p><p>Este examen mezcla ambos tecnologías. Lee con calma cada pregunta.</p>"
            },
            {
                "title": "Lo que dominas",
                "dialogo": "<p>Repasa lo que aprendiste:</p><ul><li>Nivel 1-4: Fundamentos DB, Firebase config y CRUD</li><li>Nivel 5-10: SQL básico (SELECT, WHERE, aggregate, INSERT/UPDATE/DELETE)</li><li>Nivel 11-13: Relaciones, JOINs, Subqueries</li><li>Nivel 14-16:Índices, Transactions, Normalización</li><li>Nivel 17-19: Firebase Auth, Security Rules, Stored Procedures</li></ul>"
            },
            {
                "title": "Consejo para el examen",
                "dialogo": "<p>Las preguntas requieren lógica. Simula mentalmente cada consulta/transacción antes de responder.</p>"
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "SELECT * FROM usuarios WHERE edad > 18:", "options": ["Mayores 18", "Menores 18", "Todos 18", "Error"], "answer": "Mayores 18" },
            { "type": "multiple-choice", "question": "Firebase: addDoc() genera:", "options": ["ID manual", "ID automático", "Error", "Null"], "answer": "ID automático" },
            { "type": "multiple-choice", "question": "INNER JOIN devuelve:", "options": ["Todo", "Solo matches", "Izquierda", "Derecha"], "answer": "Solo matches" },
            { "type": "multiple-choice", "question": "GROUP BY:", "options": ["Agrupa", "Filtra", "Ordena", "Cuenta"], "answer": "Agrupa" },
            { "type": "multiple-choice", "question": "ORDER BY precio DESC:", "options": ["Mayor primero", "Menor primero", "Random", "Igual"], "answer": "Mayor primero" },
            { "type": "multiple-choice", "question": "DELETE sin WHERE:", "options": ["Error", "Borra todo", "Nada", "Advierte"], "answer": "Borra todo" },
            { "type": "multiple-choice", "question": "onSnapshot():", "options": ["Una vez", "Tiempo real", "Manual", "Nunca"], "answer": "Tiempo real" },
            { "type": "multiple-choice", "question": "INDEX acelera:", "options": ["Escritura", "Lectura", "Todo", "Nada"], "answer": "Lectura" },
            { "type": "multiple-choice", "question": "ROLLBACK:", "options": ["Confirma", "Deshace", "Guarda", "Nada"], "answer": "Deshace" },
            { "type": "multiple-choice", "question": "1FN:", "options": ["Sin duplicar", "Atómico", "Índices", "FK"], "answer": "Atómico" }
        ]
    }
];
window.courseData = courseData;