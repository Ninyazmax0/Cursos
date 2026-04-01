window.globalDictionary = {
    python: {
        "print": { 
            title: "Comando print()", 
            desc: "<p>Es la función más fundamental de Python. Expulsa texto en la terminal.</p>", 
            example: "print('¡Hola Academia!')", ref: "Nivel 1" 
        },
        "input": { 
            title: "Comando input()", 
            desc: "<p>Pausa el programa esperando escritura en consola.</p>", 
            example: "texto = input('Habla: ')", ref: "Nivel 1" 
        },
        "if": { 
            title: "Bloque if", 
            desc: "<p>Evalúa lógicamente. Solo entra si es True.</p>", 
            example: "if vivo:\n  print('Respira')", ref: "Nivel 3" 
        },
        "else": { 
            title: "Bloque else", 
            desc: "<p>Atrapa cualquier excepción lógica no cumplida.</p>", 
            example: "else:\n  print('Muerto')", ref: "Nivel 3" 
        },
        "for": { 
            title: "Bucle for", 
            desc: "<p>Iterador controlado que recorre listas paso a paso.</p>", 
            example: "for i in [1, 2]:\n  print(i)", ref: "Nivel 5" 
        },
        "while": { 
            title: "Bucle while", 
            desc: "<p>Iterador infinito basado en estado True.</p>", 
            example: "while True:\n  print('Infinito')", ref: "Nivel 4" 
        }
    },
    ruby: {
        "puts": { 
            title: "Comando puts", 
            desc: "<p>Imprime objetos en la consola con un salto de línea mágico, a diferencia del clásico print de C.</p>", 
            example: "puts 'Hola mundo'", ref: "Nivel 1" 
        },
        "print": { 
            title: "Comando print", 
            desc: "<p>Impresión de texto estática plana sin salto de línea automático.</p>", 
            example: "print 'Unido a la siguiente línea'", ref: "Nivel 1" 
        },
        "unless": {
            title: "Bloque unless",
            desc: "<p>El análogo funcional a 'if not'. Corre solo si es Absolutamente Falso.</p>",
            example: "puts 'Pasa' unless baneado", ref: "Nivel 3"
        },
        "each": {
            title: "Método .each",
            desc: "<p>Reemplazo poético estandarizado del for-loop. Itera sacando elementos funcionales.</p>",
            example: "[1,2].each { |num| puts num }", ref: "Nivel 4"
        },
        "new": {
            title: "Método paramétrico Class.new",
            desc: "<p>Invoca al constructor privado 'initialize' fabricando una instancia física de clase en RAM.</p>",
            example: "jugador = Player.new(10)", ref: "Nivel 6"
        },
        "sym": {
            title: "Símbolos (:name)",
            desc: "<p>Textos inmutables para el Engine C de Ruby, garantizando uso de O(1) en RAM a diferencia de Strings.</p>",
            example: "hash = { :System => 'Time' }", ref: "Nivel 5"
        }
    },
    database: {
        "SELECT": { 
            title: "Comando SELECT", 
            desc: "<p>Lee y proyecta datos read-only desde el motor DBMS. Jamás destruye nada.</p>", 
            example: "SELECT id, email FROM user;", ref: "Nivel 2" 
        },
        "WHERE": { 
            title: "Cláusula WHERE", 
            desc: "<p>Aplica una barrera restrictiva fila a fila en O(N) lógico excluyendo data que no machea.</p>", 
            example: "WHERE edad > 18;", ref: "Nivel 3" 
        },
        "INSERT": { 
            title: "Manejador INSERT INTO", 
            desc: "<p>Escribe en crudo bytes directo en el clúster RDBMS.</p>", 
            example: "INSERT INTO x(y) VALUES (z);", ref: "Nivel 5" 
        },
        "UPDATE": { 
            title: "Manejador UPDATE", 
            desc: "<p>Sobrescribe campos viejos in-place. Letal si se omite el WHERE block.</p>", 
            example: "UPDATE x SET a = b;", ref: "Nivel 6" 
        },
        "JOIN": { 
            title: "Función INNER JOIN", 
            desc: "<p>Intercepta dos entidades cruzando IDs comunes (PK/FK) unificando columnas horizontales.</p>", 
            example: "JOIN perfiles p ON user.pid = p.id", ref: "Nivel 10" 
        },
        "EXPLAIN": { 
            title: "Comando Diagnóstico EXPLAIN", 
            desc: "<p>Imprime el árbol binario logístico del Query Planner antes de ejecutar queries peligrosas.</p>", 
            example: "EXPLAIN SELECT * FROM master_log;", ref: "Nivel 18" 
        }
    },
    web: {
        "div": { 
            title: "Etiqueta <div>", 
            desc: "<p>Caja vacía. Evitar en Web moderna si existe alternativa Semántica. Box-model neutro.</p>", 
            example: "<div>Caja gris</div>", ref: "Nivel 1" 
        },
        "main": { 
            title: "HTML5 Semantic <main>", 
            desc: "<p>Engloba el contenido nuclear absoluto. Los Screen Readers O(1) priorizan esto de Inmediato.</p>", 
            example: "<main>...</main>", ref: "Nivel 1" 
        },
        "padding": { 
            title: "CSS Padding", 
            desc: "<p>Empuja lo de ADENTRO. Infla la caja desde su content box hasta el borde.", 
            example: "padding: 1.5rem;", ref: "Nivel 2" 
        },
        "margin": { 
            title: "CSS Margin", 
            desc: "<p>Empuja lo de AFUERA. Mantiene distancia de sanidad para que dom element no choquen.</p>", 
            example: "margin-bottom: 2rem;", ref: "Nivel 2" 
        },
        "fetch": { 
            title: "JS Fetch API Promise", 
            desc: "<p>Cónsul diplomático Asíncrono de redes HTTP. Se trae JSON de un Endpoint RESTful sin recargar página.</p>", 
            example: "await fetch('/api/user')", ref: "Nivel 14" 
        },
        "flex": { 
            title: "Display Flexbox", 
            desc: "<p>Arco y flecha para alineación uni-direccional. Salva vidas centrando botones rebeldes.</p>", 
            example: "display: flex; align-items: center;", ref: "Nivel 7" 
        }
    }
};
