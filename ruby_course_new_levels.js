const courseData = [
    {
        "title": "Nivel 1: Fundamentos de Ruby",
        "lesson": [
            {
                "title": "Bienvenido a Ruby",
                "dialogo": "<p>Ruby fue creado por Yukihiro Matsumoto con una filosofía clara: el程序员的 felicidad primero. A diferencia de otros lenguajes, Ruby busca que escribir código sea agradable y natural.</p><p>Para mostrar texto en la pantalla usamos <code>puts</code>, que imprime y automáticamente añade un salto de línea.</p>",
                "codigo": "puts \"¡Hola,bienvenido a Ruby!\"\nprint \"Este texto no salta línea...\"\nprint \" ...pero este sí\"\nputs \"Ahora sí saltamos\"",
                "tourSteps": [
                    { "text": "puts muestra el texto y automáticamente añade un salto de línea al final.", "line": 1 },
                    { "text": "print muestra el texto SIN salto de línea, ideal para continuar enla misma línea.", "line": 2 }
                ]
            },
            {
                "title": "Todo es un Objeto",
                "dialogo": "<p>En Ruby NO existen tipos primitivos como en otros lenguajes. Todo es un objeto, incluyendo los números. El -5 tiene métodos, el texto tiene métodos, incluso nil (nulo) es un objeto.</p>",
                "codigo": "numero = -5\n\nputs numero.abs        # Valor absoluto: 5\nputs numero.class     # muestra: Integer\nputs numero.zero?     # false\nputs \"Hola\".class   # String",
                "tourSteps": [
                    { "text": "Todo en Ruby es un objeto con métodos disponibles.", "line": 1 },
                    { "text": ".abs() devuelve el valor absoluto sin signo.", "line": 2 },
                    { "text": ".zero? pregunta si el número es cero (devuelve true/false).", "line": 4 }
                ]
            },
            {
                "title": "Obteniendo entrada del usuario",
                "dialogo": "<p>Para pedir información al usuario usamos <code>gets</code>. Esta función espera que el usuario escriba algo y presione ENTER.</p><p>Importante: gets devuelve SIEMPRE un string (texto).</p>",
                "codigo": "puts \"¿Cómo te llamas?\"\nnombre = gets\nputs \"Tu nombre es: #{nombre}\"",
                "tourSteps": [
                    { "text": "gets pausa el programa y espera que el usuario escriba.", "line": 2 },
                    { "text": "El resultado se guarda en la variable como texto.", "line": 3 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "¿Qué método usa Ruby para mostrar texto con salto de línea?", "options": ["print", "puts", "echo", "write"], "answer": "puts" },
            { "type": "multiple-choice", "question": "¿Qué devuelve gets?", "options": ["Integer", "String", "Boolean", "Array"], "answer": "String" },
            { "type": "multiple-choice", "question": "En Ruby, ¿todo es un objeto?", "options": ["Solo los números", "Solo el texto", "Sí, todo es objeto", "No, nada es objeto"], "answer": "Sí, todo es objeto" },
            { "type": "multiple-choice", "question": "¿Qué hace -5.abs?", "options": ["-5", "5", "0", "-1"], "answer": "5" },
            { "type": "multiple-choice", "question": "¿Cuál es la diferencia entre puts y print?", "options": ["puts usa comillas", "puts añade salto de línea", "Son iguales", "print es más rápido"], "answer": "puts añadir salto de línea" },
            { "type": "multiple-choice", "question": "¿Qué es nil en Ruby?", "options": ["El número 0", "Un objeto vacío", "El valor nulo", "Un espacio"], "answer": "El valor nulo" },
            { "type": "multiple-choice", "question": "Dado: x = \"Ruby\" / puts x.class. ¿Qué muestra?", "options": ["nil", "Integer", "String", "String"], "answer": "String" },
            { "type": "multiple-choice", "question": "¿Qué método muestra solo el texto sin salto?", "options": ["puts", "print", "echo", "write"], "answer": "print" },
            { "type": "multiple-choice", "question": "-5.zero? devuelve:", "options": ["true", "false", "-5", "Error"], "answer": "false" },
            { "type": "multiple-choice", "question": "¿Cómo se llamar un método en Ruby?", "options": ["x.metodo()", "metodo x", "x.metodo", "Todas"], "answer": "x.metodo" }
        ]
    },
    {
        "title": "Nivel 2: Matemáticas y Conversiones",
        "lesson": [
            {
                "title": "Operadores Matemáticos",
                "dialogo": "<p>Ruby maneja matemáticas de manera natural. Los operadores básicos son: + (suma), - (resta), * (multiplicación), / (división).</p><p>La división entera (//) NO existe en Ruby como operador, se usa el método .div().</p>",
                "codigo": "a = 10\nb = 3\n\nputs a + b    # 13\nputs a - b    # 7\nputs a * b    # 30\nputs a / b    # 3 (división entera en Ruby)\nputs a % b     # 1 (módulo o residuo)",
                "tourSteps": [
                    { "text": "Suma: 10 + 3 = 13", "line": 3 },
                    { "text": "Resta: 10 - 3 = 7", "line": 4 },
                    { "text": "Multiplicación: 10 * 3 = 30", "line": 5 },
                    { "text": "División: 10 / 3 = 3 (redondea hacia abajo)", "line": 6 },
                    { "text": "Módulo: 10 % 3 = 1 (el residuo)", "line": 7 }
                ]
            },
            {
                "title": "Conversiones de Tipo",
                "dialogo": "<p>A veces necesitas cambiar un tipo de dato a otro. Usamos .to_i (a entero), .to_f (a decimal), .to_s (a texto).</p><p>Recuerda: gets siempre devuelve string, necesitas convertirlo para hacer cálculos.</p>",
                "codigo": "texto = \"25\"\nputs texto.to_i      # 25 (texto a entero)\nputs texto.to_f      # 25.0 (texto a flotante)\n\n	numero = 42\nputs numero.to_s    # \"42\" (número a texto)",
                "tourSteps": [
                    { "text": ".to_i convierte string a entero.", "line": 2 },
                    { "text": ".to_f convierte string a decimal.", "line": 3 },
                    { "text": ".to_s convierte número a string.", "line": 6 }
                ]
            },
            {
                "title": "Cálculos con entrada del usuario",
                "dialogo": "<p>Como gets devuelve string, si quieres hacer operaciones matemáticas debes convertir. Veamos un ejemplo práctico.</p>",
                "codigo": "puts \"Ingresa tu edad:\"\nedad = gets.chomp.to_i\n\nputs \"El próximo año tendrás: #{edad + 1}\"",
                "tourSteps": [
                    { "text": "gets.chomp elimina el salto de línea final.", "line": 2 },
                    { "text": ".to_i convierte el texto a número para calcular.", "line": 2 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "¿Cuánto es 15 % 4?", "options": ["3", "4", "2", "1"], "answer": "3" },
            { "type": "multiple-choice", "question": "10.div(3) equivale a:", "options": ["10 / 3", "10 % 3", "10 * 3", "10 - 3"], "answer": "10 / 3" },
            { "type": "multiple-choice", "question": ".to_i convierte a:", "options": ["String", "Integer", "Float", "Boolean"], "answer": "Integer" },
            { "type": "multiple-choice", "question": "\"100\".to_i + 5 = ?", "options": ["105", "1005", "Error", "100"], "answer": "105" },
            { "type": "multiple-choice", "question": "\"10\".to_f muestra:", "options": ["10", "10.0", "Error", "0"], "answer": "10.0" },
            { "type": "multiple-choice", "question": "gets.chomp sirve para:", "options": ["Sumar números", "Quitar salto de línea", "Crear variables", "Nada"], "answer": "Quitar salto de línea" },
            { "type": "multiple-choice", "question": "20 / 5 = ?", "options": ["4", "5", "Error", "0"], "answer": "4" },
            { "type": "multiple-choice", "question": "17 / 5 en Ruby da:", "options": ["3", "3.4", "4", "Error"], "answer": "3" },
            { "type": "multiple-choice", "question": "¿Por qué falla: edad = gets / edad + 1?", "options": ["edad no existe", "Gets devuelve String, no puedo sumar", "Falta punto y coma", "Error de variable"], "answer": "Gets devuelve String, no puedo sumar" },
            { "type": "multiple-choice", "question": "42.to_s + \" años\" = ?", "options": ["42 años", "Error", "43", "42"], "answer": "42 años" }
        ]
    },
    {
        "title": "Nivel 3: Condicionales",
        "lesson": [
            {
                "title": "If (Condicional básico)",
                "dialogo": "<p>Para tomar decisiones en Ruby usamos <code>if</code>. Si la condición es verdadera (true), se ejecuta el bloque.</p><p>Importante: Ruby usa == para comparar, no = (que es para asignar).</p>",
                "codigo": "edad = 18\n\nif edad >= 18\n  puts \"Eres mayor de edad\"\nend\n\n# Forma resumida:\nputs \"Bienvenido\" if edad >= 18",
                "tourSteps": [
                    { "text": "La condición evalúa si es true o false.", "line": 3 },
                    { "text": "Si es true, ejecuta lo indentado.", "line": 4 },
                    { "text": "Forma inline: if al final.", "line": 9 }
                ]
            },
            {
                "title": "Else y Elsif",
                "dialogo": "<p><code>else</code> ejecuta cuando el if es falso. <code>elsif</code> permite múltiples condiciones.</p>",
                "codigo": "puntos = 75\n\nif puntos >= 90\n  puts \"Excelente!\"\nelsif puntos >= 70\n  puts \"Bien hecho!\"\nelse\n  puts \"Debes practicar más\"\nend",
                "tourSteps": [
                    { "text": "Si >= 90, muy bien.", "line": 3 },
                    { "text": "Si no era >= 90 pero >= 70, bien.", "line": 5 },
                    { "text": "Si ninguna anterior, else.", "line": 7 }
                ]
            },
            {
                "title": "Unless (El inverso de if)",
                "dialogo": "<p>Unless es el inverso de if. Se ejecuta SOLO cuando la condición es FALSE. Es como \"a menos que sea cierto\".</p>",
                "codigo": "lluvia = false\n\nunless lluvia\n  puts \"¡Vamos a la playa!\"\nend\n\n# También funciona con else\nputs \"Llueve\" unless !lluvia",
                "tourSteps": [
                    { "text": "unless significa \"a menos que\".", "line": 3 },
                    { "text": "Es verdadero porque lluvia = false.", "line": 4 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "¿Qué devuelve 5 == 5?", "options": ["true", "false", "Error", "5"], "answer": "true" },
            { "type": "multiple-choice", "question": "5 == \"5\"?", "options": ["true", "false", "Error", "nil"], "answer": "false" },
            { "type": "multiple-choice", "question": "unless false / puts \"Sí\" / end muestra:", "options": ["Sí", "Nada", "Error", "false"], "answer": "Sí" },
            { "type": "multiple-choice", "question": "if true / puts \"A\" / else / puts \"B\" / end muestra:", "options": ["A", "B", "AB", "Error"], "answer": "A" },
            { "type": "multiple-choice", "question": "x = 10 / if x > 5 / puts \"Mayor\" / end muestra:", "options": ["Mayor", "Nada", "Error", "10"], "answer": "Mayor" },
            { "type": "multiple-choice", "question": "Qué es elsif?", "options": ["Igual que else", "Nueva condición si if fue falso", "Repite el if", "Cierra"], "answer": "Nueva condición si if fue falso" },
            { "type": "multiple-choice", "question": "a = 5 / b = 5 / if a == b / puts \"Igual\" / end:", "options": ["Igual", "Nada", "5", "Error"], "answer": "Igual" },
            { "type": "multiple-choice", "question": "unless true / puts \"No\" / end:", "options": ["No", "Nada", "Error", "true"], "answer": "Nada" },
            { "type": "multiple-choice", "question": "¿Qué significa != ?", "options": ["Igual a", "Mayor que", "Diferente a", "Menor"], "answer": "Diferente a" },
            { "type": "multiple-choice", "question": "\"ruby\" == \"ruby\"?", "options": ["true", "false", "Error", "nil"], "answer": "true" }
        ]
    },
    {
        "title": "Nivel 4: Bucles e Iteración",
        "lesson": [
            {
                "title": "El iterador times",
                "dialogo": "<p>Ruby no tiene un bucle for tradicional. En su lugar usa iteradores como <code>.times</code>. Es más limpio y seguro (no hay bucles infinitos).</p>",
                "codigo": "3.times do |i|\n  puts \"Iteración #{i + 1}\"\nend\n\n# También con llaves:\n3.times { |i| puts \"Vuelta #{i}\" }",
                "tourSteps": [
                    { "text": ".times repite el bloque la cantidad especificada.", "line": 1 },
                    { "text": "|i| es la variable de cada repetición (0, 1, 2).", "line": 2 }
                ]
            },
            {
                "title": "While (bucle clásico)",
                "dialogo": "<p>Ruby también tiene <code>while</code>, que repite mientras la condición sea verdadera. ¡Cuidado de no hacer un bucle infinito!</p>",
                "codigo": "contador = 0\n\nwhile contador < 3\n  puts \"Contador: #{contador}\"\n  contador += 1\nend\nputs \"¡Finalizado!\"",
                "tourSteps": [
                    { "text": "While repite mientras la condición sea true.", "line": 3 },
                    { "text": "Debes incrementar el contador para salir.", "line": 5 }
                ]
            },
            {
                "title": "Loop y break",
                "dialogo": "<p><code>loop</code> crea un bucle infinito. Se usa <code>break</code> para salir.</p>",
                "codigo": "i = 0\n\nloop do\n  puts \"Número: #{i}\"\n  i += 1\n  break if i >= 3\nend\n\nputs \"Salimos del loop\"",
                "tourSteps": [
                    { "text": "loop do crea un bucle sin fin.", "line": 2 },
                    { "text": "break sale del bucle immediately.", "line": 5 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "3.times { |i| puts i } imprime:", "options": ["0 1 2", "1 2 3", "3 2 1", "Error"], "answer": "0 1 2" },
            { "type": "multiple-choice", "question": "¿Cuántas veces ejecuta 5.times?", "options": ["4", "5", "6", "Error"], "answer": "5" },
            { "type": "multiple-choice", "question": "c = 0 / while c < 2 / puts c / c += 1 / end:", "options": ["0 1", "1 2", "0 1 2", "Error"], "answer": "0 1" },
            { "type": "multiple-choice", "question": "loop sin break:", "options": ["Se para solo", "Bucle infinito", "Error", "Nada"], "answer": "Bucle infinito" },
            { "type": "multiple-choice", "question": "i = 0 / loop do / break if i == 1 / puts i / end:", "options": ["0", "1", "0 1", "Error"], "answer": "0" },
            { "type": "multiple-choice", "question": "¿Para qué sirve break?", "options": ["Pausar", "Salir del bucle", "Continuar", "Error"], "answer": "Salir del bucle" },
            { "type": "multiple-choice", "question": "c=0 / 3.times { c+=1 } / puts c:", "options": ["0", "1", "3", "Error"], "answer": "3" },
            { "type": "multiple-choice", "question": "while true / break / end:", "options": ["Error", "Nada", "Se cuelga", "true"], "answer": "Nada" },
            { "type": "multiple-choice", "question": "¿Cuál iterador es más seguro (sin bucles infinitos)?", "options": ["while", "loop", "times", "for"], "answer": "times" },
            { "type": "multiple-choice", "question": "2.times { |x| puts x * 2 }:", "options": ["0 2", "2 4", "0 2 4", "Error"], "answer": "0 2" }
        ]
    },
    {
        "title": "Nivel 5: Iteradores Avanzados",
        "lesson": [
            {
                "title": "Each (el iterador versátil)",
                "dialogo": "<p><code>.each</code> es el iterador más usado en Ruby. Recorre cada elemento de una colección.</p>",
                "codigo": "colores = [\"Rojo\", \"Verde\", \"Azul\"]\n\ncolores.each do |color|\n  puts \"Me gusta el #{color}\"\nend",
                "tourSteps": [
                    { "text": ".each recorre cada elemento.", "line": 3 },
                    { "text": "|color| toma el valor de cada elemento.", "line": 4 }
                ]
            },
            {
                "title": "Upto y Downto",
                "dialogo": "<p>Para contar de forma ascendente o descendente usamos <code>.upto</code> y <code>.downto</code>.</p>",
                "codigo": "# Contar del 1 al 3:\n1.upto(3) { |n| puts n }\n\n# Contar del 3 al 1:\n3.downto(1) { |n| puts n }",
                "tourSteps": [
                    { "text": "upto cuenta hacia arriba.", "line": 2 },
                    { "text": "downto cuenta hacia abajo.", "line": 5 }
                ]
            },
            {
                "title": "Rangos (Ranges)",
                "dialogo": "<p>Los rangos (..) representan una secuencia de valores. Son muy útiles con each.</p>",
                "codigo": "# Rango del 1 al 5:\n(1..5).each { |n| puts n }\n\n# Rangos con letras:\n(\"a\"..\"c\").each { |l| puts l }",
                "tourSteps": [
                    { "text": ".. incluye el valor final (1 a 5).", "line": 2 },
                    { "text": "... excluye el valor final.", "line": 5 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "[1,2].each { |x| puts x } imprime:", "options": ["1", "2", "1 2", "Error"], "answer": "1 2" },
            { "type": "multiple-choice", "question": "1.upto(3).to_a = ?", "options": ["[1,2,3]", "[0,1,2,3]", "[1,2]", "Error"], "answer": "[1,2,3]" },
            { "type": "multiple-choice", "question": "(1...5).to_a = ?", "options": ["[1,2,3,4,5]", "[1,2,3,4]", "[0,1,2,3,4]", "Error"], "answer": "[1,2,3,4]" },
            { "type": "multiple-choice", "question": "(\"b\"..\"d\").to_a = ?", "options": ["[b,c,d]", "[b,c]", "[a,b,c,d]", "Error"], "answer": "[b,c,d]" },
            { "type": "multiple-choice", "question": "3.downto(1).to_a = ?", "options": ["[3,2,1]", "[2,1,0]", "[3,2]", "Error"], "answer": "[3,2,1]" },
            { "type": "multiple-choice", "question": "each con.do |x| es igual a:", "options": ["each { |x| }", "for x in", "while", "Todas"], "answer": "each { |x| }" },
            { "type": "multiple-choice", "question": "(1..3).include?(2)?", "options": ["true", "false", "Error", "2"], "answer": "true" },
            { "type": "multiple-choice", "question": "[-1,0,1].each_with_index:", "options": ["Imprime índices", "Da índice y valor", "No existe", "Error"], "answer": "Da índice y valor" },
            { "type": "multiple-choice", "question": "select filtra elementos:", "options": ["Que cumplen condición", "Aleatorios", "Ordena", "Invierte"], "answer": "Que cumplen condición" },
            { "type": "multiple-choice", "question": "map transforma elementos:", "options": ["Devuelve nuevos valores", "Los BORRA", "Los ORDENA", "Nada"], "answer": "Devuelve nuevos valores" }
        ]
    },
    {
        "title": "Nivel 6: Arrays",
        "lesson": [
            {
                "title": "Creando Arrays",
                "dialogo": "<p>Un Array es una lista ordenada de elementos. Se crea con corchetes [] y los elementos separados por comas.</p>",
                "codigo": "# Formas de crear un array:\narmi = [\"Espada\", \"Arco\", \"Escudo\"]\nvacio = []\nnumeros = [1, 2, 3]\n\nputs armi[0]    # Primer elemento\nputs armi[-1]   # Último elemento",
                "tourSteps": [
                    { "text": "Los arrays se acceden por índice, empieza en 0.", "line": 6 },
                    { "text": "-1 accede al último elemento.", "line": 7 }
                ]
            },
            {
                "title": "Métodos útiles de Arrays",
                "dialogo": "<p>Ruby tiene muchos métodos para trabajar con arrays: .push (agregar), .pop (quitar), .shift (quitar primer), .unshift (agregar al inicio).</p>",
                "codigo": "armi = [\"Espada\", \"Arco\"]\narmi.push(\"Escudo\")\nputs armi   # [\"Espada\", \"Arco\", \"Escudo\"]\n\narmi.pop\nputs armi   # [\"Espada\", \"Arco\"]\n\narmi << \"Varita\"  # Operador shovel\nputs armi",
                "tourSteps": [
                    { "text": ".push agrega al final.", "line": 2 },
                    { "text": ".pop quita el último.", "line": 5 },
                    { "text": "<< es un atajo para push.", "line": 8 }
                ]
            },
            {
                "title": "Métodos de búsqueda",
                "dialogo": "<p>Métodos como .include? (buscar), .first, .last, .length (o .size), .empty? son muy útiles.</p>",
                "codigo": "numeros = [1, 2, 3, 4, 5]\n\nputs numeros.include?(3)   # true\nputs numeros.first          # 1\nputs numeros.last           # 5\nputs numeros.length        # 5\nputs numeros.empty?          # false",
                "tourSteps": [
                    { "text": ".include? pregunta si existe el elemento.", "line": 2 },
                    { "text": ".length o .size da la cantidad.", "line": 5 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "¿Cuál es el índice del primer elemento?", "options": ["0", "1", "-1", "Primero"], "answer": "0" },
            { "type": "multiple-choice", "question": "[1,2][-1] = ?", "options": ["1", "2", "nil", "0"], "answer": "2" },
            { "type": "multiple-choice", "question": "[].empty? = ?", "options": ["true", "false", "nil", "Error"], "answer": "true" },
            { "type": "multiple-choice", "question": "a = [1]; a << 2; a = ?", "options": ["[1,2]", "[2]", "[1]", "Error"], "answer": "[1,2]" },
            { "type": "multiple-choice", "question": "[1,2,3].first = ?", "options": ["1", "3", "nil", "Error"], "answer": "1" },
            { "type": "multiple-choice", "question": "a = [1,2]; a.pop; a = ?", "options": ["[1]", "[2]", "[1,2]", "Error"], "answer": "[1]" },
            { "type": "multiple-choice", "question": "[1,2,3].include?(2)?", "options": ["true", "false", "nil", "Error"], "answer": "true" },
            { "type": "multiple-choice", "question": "[1,2] + [3] = ?", "options": ["[1,2,3]", "Error", "[4]", "[3]"], "answer": "[1,2,3]" },
            { "type": "multiple-choice", "question": "a = [1,2,3]; a[1] = 5; a = ?", "options": ["[1,5,3]", "[1,2,3]", "[5]", "Error"], "answer": "[1,5,3]" },
            { "type": "multiple-choice", "question": "[1,2,3,2].count(2) = ?", "options": ["1", "2", "3", "0"], "answer": "2" }
        ]
    },
    {
        "title": "Nivel 7: Hashes y Símbolos",
        "lesson": [
            {
                "title": "Creando Hashes",
                "dialogo": "<p>Un Hash es un diccionario de pares clave-valor. Es como un objeto en JS o un diccionario en Python. Se crea con {} .</p>",
                "codigo": "jugador = {\n  \"nombre\" => \"Carlos\",\n  \"edad\" => 25,\n  \"nivel\" => 10\n}\n\nputs jugador[\"nombre\"]\nputs jugador[\"edad\"]",
                "tourSteps": [
                    { "text": "Las claves pueden ser cualquier objeto.", "line": 2 },
                    { "text": "Se accede con corchetes.", "line": 6 }
                ]
            },
            {
                "title": "Símbolos",
                "dialogo": "<p>Los símbolos (:simbolo) son seperti claves ideales para hashes. Son inmutables y se comparan por su contenido, no por referencia.</p>",
                "codigo": "datos = {\n  nombre: \"Ana\",\n  edad: 30\n}\n\nputs datos[:nombre]   # Ana\nputs datos[:edad]     # 30",
                "tourSteps": [
                    { "text": "Ruby permite usar :clave directamente.", "line": 2 },
                    { "text": "Se accede con :simbolo.", "line": 5 }
                ]
            },
            {
                "title": "Métodos de Hash",
                "dialogo": "<p>Los hashes tienenkeys, values, has_key?, fetch y más métodos útiles.</p>",
                "codigo": "datos = { nombre: \"Ana\", edad: 30 }\n\nputs datos.keys       # [:nombre, :edad]\nputs datos.values     # [\"Ana\", 30]\nputs datos.has_key?(:nombre)  # true\nputs datos.fetch(:edad, 0)    # 30",
                "tourSteps": [
                    { "text": ".keys devuelve las claves.", "line": 2 },
                    { "text": ".fetch obtiene valor con default.", "line": 5 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "{ a: 1 }[:a] = ?", "options": ["1", "nil", ":a", "Error"], "answer": "1" },
            { "type": "multiple-choice", "question": "¿Cuál es la diferencia entre :clave y \"clave\"?", "options": ["Ninguna", "Símbolo es inmutable", "String es más rápido", "Son iguales"], "answer": "Símbolo es inmutable" },
            { "type": "multiple-choice", "question": "{}.keys = ?", "options": ["[]", "nil", "{}", "Error"], "answer": "[]" },
            { "type": "multiple-choice", "question": "{ a: 1, b: 2 }.length = ?", "options": ["1", "2", "nil", "Error"], "answer": "2" },
            { "type": "multiple-choice", "question": "{ a: 1 }.has_key?(:b)?", "options": ["true", "false", "nil", "Error"], "answer": "false" },
            { "type": "multiple-choice", "question": "{ a: 1 }.values.first = ?", "options": ["1", ":a", "nil", "Error"], "answer": "1" },
            { "type": "multiple-choice", "question": "h = { a: 1 }; h.merge(b: 2) = ?", "options": ["{a:1,b:2}", "{a:1}", "{b:2}", "Error"], "answer": "{a:1,b:2}" },
            { "type": "multiple-choice", "question": "Hash.new = ?", "options": ["{}", "nil", "[]", "Error"], "answer": "{}" },
            { "type": "multiple-choice", "question": "{ a: [1,2] }[:a][0] = ?", "options": ["1", "2", "nil", "Error"], "answer": "1" },
            { "type": "multiple-choice", "question": "¿Qué símbolo es mejor para claves?", "options": ["String", "Símbolo", "Número", "Cualquiera"], "answer": "Símbolo" }
        ]
    },
    {
        "title": "Nivel 8: Bloques y Procs",
        "lesson": [
            {
                "title": "Qué son los Bloques",
                "dialogo": "<p>Un bloque es un pedazo de código que puedes pasar a un método. Se define con {} o do...end.</p>",
                "codigo": "# Con llaves:\n3.times { puts \"Hola\" }\n\n# Con do...end:\n3.times do\n  puts \"Chao\"\nend",
                "tourSteps": [
                    { "text": "Las llaves {} definen un bloque.", "line": 2 },
                    { "text": "do...end también define bloque.", "line": 5 }
                ]
            },
            {
                "title": "Pasando parámetros a bloques",
                "dialogo": "<p>Los bloques pueden recibir parámetros con |variable|.</p>",
                "codigo": "[1, 2, 3].each do |num|\n  puts num * 2\nend\n\n[1,2,3].each { |x| puts x + 10 }",
                "tourSteps": [
                    { "text": "|num| recibe cada elemento.", "line": 2 },
                    { "text": "Se procesa y muestra.", "line": 3 }
                ]
            },
            {
                "title": "Yield (Ejecutar bloque)",
                "dialogo": "<p>Un método puede ejecutar el bloque que recibe con yield.</p>",
                "codigo": "def repetir\n  yield\n  yield\nend\n\n# Se ejecuta el bloque pasado:\nrepetir { puts \"Bloque ejecutado!\" }",
                "tourSteps": [
                    { "text": "yield ejecuta el bloque recibido.", "line": 2 },
                    { "text": "Se ejecuta dos veces.", "line": 3 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "{ } y do...end:", "options": ["Son diferentes", "Son equivalentes", "Error", "Solo uno sirve"], "answer": "Son equivalentes" },
            { "type": "multiple-choice", "question": "block_given? detecta:", "options": ["Si hay bloque", "Si hay variable", "Si hay método", "Error"], "answer": "Si hay bloque" },
            { "type": "multiple-choice", "question": "yield ejecuta:", "options": ["El bloque", "El método", "La variable", "Nada"], "answer": "El bloque" },
            { "type": "multiple-choice", "question": "[1,2].each { |x| } tiene parámetro:", "options": ["x", "each", "nil", "Error"], "answer": "x" },
            { "type": "multiple-choice", "question": "def test; yield 5; end; test { |x| puts x }:", "options": ["5", "nil", "x", "Error"], "answer": "5" },
            { "type": "multiple-choice", "question": "¿Se puede pasar bloque a cualquier método?", "options": ["Sí", "No", "Solo a each", "Error"], "answer": "Sí" },
            { "type": "multiple-choice", "question": "2.times { puts \"A\" }:", "options": ["A dos veces", "A una vez", "Error", "Nada"], "answer": "A dos veces" },
            { "type": "multiple-choice", "question": "block.call ejecuta:", "options": ["El proc", "El bloque", "El método", "Nada"], "answer": "El proc" },
            { "type": "multiple-choice", "question": "Proc.new es:", "options": ["Un objeto bloque", "Un método", "Una variable", "Error"], "answer": "Un objeto bloque" },
            { "type": "multiple-choice", "question": "lambda es:", "options": ["Una función anónima", "Un método", "Una variable", "Error"], "answer": "Una función anónima" }
        ]
    },
    {
        "title": "Nivel 9: Métodos (Funciones)",
        "lesson": [
            {
                "title": "Definiendo Métodos",
                "dialogo": "<p>En Ruby definimos funciones (métodos) con def. El código no se ejecuta hasta que llames al método.</p>",
                "codigo": "def saludar\n  puts \"¡Hola!\"\nend\n\n# Para ejecutarlo:\nsaludar\n\n# Con retorno:\ndef retorna_saludo\n  \"Hola amigo\"\nend\nputs retorna_saludo",
                "tourSteps": [
                    { "text": "def define el método.", "line": 1 },
                    { "text": "El código no corre hasta llamarlo.", "line": 5 }
                ]
            },
            {
                "title": "Parámetros",
                "dialogo": "<p>Los métodos pueden recibir parámetros.</p>",
                "codigo": "def saludar(nombre)\n  puts \"¡Hola #{nombre}!\"\nend\n\nsaludar(\"Carlos\")\nsaludar(\"Ana\")",
                "tourSteps": [
                    { "text": "Los parámetros van en paréntesis.", "line": 1 },
                    { "text": "Se usan dentro del método.", "line": 2 }
                ]
            },
            {
                "title": "Return",
                "dialogo": "<p>Ruby devuelve automáticamente el última expresión evaluada. También puedes usar return explícito.</p>",
                "codigo": "def suma(a, b)\n  a + b\nend\n\ndef suma_return(a, b)\n  return a + b\nend\n\nputs suma(2, 3)        # 5\nputs suma_return(2, 3)  # 5",
                "tourSteps": [
                    { "text": "No hace falta return explícito.", "line": 2 },
                    { "text": "return sale inmediatamente.", "line": 6 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "def hola; end; hola devuelve:", "options": ["nil", "hola", "Error", "0"], "answer": "nil" },
            { "type": "multiple-choice", "question": "def test(x); x * 2; end; test(3):", "options": ["6", "3", "nil", "Error"], "answer": "6" },
            { "type": "multiple-choice", "question": "return en método:", "options": ["Sale inmediatamente", "Continúa", "Error", "Nada"], "answer": "Sale inmediatamente" },
            { "type": "multiple-choice", "question": "def suma(a=1, b=2); a+b; end; suma():", "options": ["1", "2", "3", "Error"], "answer": "3" },
            { "type": "multiple-choice", "question": "Métodos en Ruby son:", "options": ["Siempre retornan algo", "Nunca retornan", "Solo con return", "Error"], "answer": "Siempre retornan algo" },
            { "type": "multiple-choice", "question": "def test; 1; 2; 3; end:", "options": ["3", "1", "nil", "Error"], "answer": "3" },
            { "type": "multiple-choice", "question": "Se llaman con:", "options": ["nombre()", "nombre", "Los dos", "Error"], "answer": "Los dos" },
            { "type": "multiple-choice", "question": "Parámetros van en:", "options": ["()", "[]", "{}", "Cualquiera"], "answer": "()" },
            { "type": "multiple-choice", "question": "Puedo omitir () al definir?", "options": ["Sí", "No", "Solo con 1 parámetro", "Error"], "answer": "Sí" },
            { "type": "multiple-choice", "question": "Métodos privados:", "options": ["No se llaman fuera", "No existen", "Con private", "Con public"], "answer": "No se llaman fuera" }
        ]
    },
    {
        "title": "Nivel 10: Métodos Avanzados",
        "lesson": [
            {
                "title": "Parámetros por defecto",
                "dialogo": "<p>Puedes definir valores por defecto para parámetros.</p>",
                "codigo": "def greet(nombre = \"Amigo\")\n  \"Hola #{nombre}\"\nend\n\nputs greet           # Hola Amigo\nputs greet(\"Carlos\")  # Hola Carlos",
                "tourSteps": [
                    { "text": "Si no se pasa, usa el default.", "line": 4 },
                    { "text": "Si se pasa, usa el valor dado.", "line": 5 }
                ]
            },
            {
                "title": "Splat (*) argumentos",
                "dialogo": "<p>*args permite recibir múltiples argumentos como array.</p>",
                "codigo": "def suma(*numeros)\n  numeros.sum\nend\n\nputs suma(1, 2, 3)      # 6\nputs suma(1, 2, 3, 4, 5)  # 15",
                "tourSteps": [
                    { "text": "*args agrupa en array.", "line": 2 },
                    { "text": " Funciona con cualquier cantidad.", "line": 3 }
                ]
            },
            {
                "title": "Hash como parámetro",
                "dialogo": "<p>Puedes pasar un hash como argumento opciones.</p>",
                "codigo": "def crear_usuario(nombre, opciones = {})\n  puts nombre\n  puts opciones[:edad]\nend\n\ncrear_usuario(\"Ana\", edad: 25)",
                "tourSteps": [
                    { "text": "Hash como parámetro.", "line": 2 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "def test(a=5); a; end; test():", "options": ["5", "nil", "a", "Error"], "answer": "5" },
            { "type": "multiple-choice", "question": "def test(*args); args; end; test(1,2):", "options": ["[1,2]", "1", "2", "Error"], "answer": "[1,2]" },
            { "type": "multiple-choice", "question": "**kwargs acepta:", "options": ["Hash", "Array", "Número", "Texto"], "answer": "Hash" },
            { "type": "multiple-choice", "question": "def test(a:, b:); end:", "options": ["Con palabras clave", "Sin palabras clave", "Error", "Nada"], "answer": "Con palabras clave" },
            { "type": "multiple-choice", "question": "Puedes anidar métodos?", "options": ["Sí", "No", "Solo 1 nivel", "Error"], "answer": "Sí" },
            { "type": "multiple-choice", "question": "alias_method sirve para:", "options": ["Renombrar método", "Copiar método", "Borrar método", "Error"], "answer": "Renombrar método" },
            { "type": "multiple-choice", "question": "def self.metodo es:", "options": ["Método de clase", "Método privado", "Ningún método", "Error"], "answer": "Método de clase" },
            { "type": "multiple-choice", "question": "Métodos bang (!):", "options": ["Modifican el objeto", "No modifican", "Son privados", "Error"], "answer": "Modifican el objeto" },
            { "type": "multiple-choice", "question": "&. método es seguro contra:", "options": ["nil", "No nil", "Booleanos", "Todos"], "answer": "nil" },
            { "type": "multiple-choice", "question": "block_given? sirve para:", "options": ["Verificar bloque", "Crear bloque", "Ejecutar bloque", "Nada"], "answer": "Verificar bloque" }
        ]
    },
    {
        "title": "Nivel 11: Strings Avanzados",
        "lesson": [
            {
                "title": "Split y Join",
                "dialogo": "<p><code>split</code> divide un string en array. <code>join</code> une un array en string.</p>",
                "codigo": "texto = \"hola,mundo, ruby\"\npartes = texto.split(\",\")\nputs partes.inspect\n\nunion = partes.join(\"-\")\nputs union",
                "tourSteps": [
                    { "text": "split divide por el separador.", "line": 2 },
                    { "text": "join une con divisor.", "line": 5 }
                ]
            },
            {
                "title": "Gsub (Reemplazar)",
                "dialogo": "<p>gsub reemplaza patrones en strings.</p>",
                "codigo": "texto = \"Hola Mundo\"\nputs texto.gsub(\"Mundo\", \"Ruby\")\nputs texto.gsub(/[aeiou]/, \"*\")",
                "tourSteps": [
                    { "text": "Por string exacto.", "line": 2 },
                    { "text": "Por regex (vocales).", "line": 3 }
                ]
            },
            {
                "title": "Métodos de caso y espacio",
                "dialogo": "<p>Métodos útiles: upcase, downcase, capitalize, strip, empty?, length, include?.</p>",
                "codigo": "texto = \"  hola ruby  \"\nputs texto.upcase        # HOLA RUBY\nputs texto.strip           # hola ruby\nputs \"Hola\".include?(\"ol\")  # true\nputs \"abc\".length         # 3",
                "tourSteps": [
                    { "text": "upcase mayúsculas.", "line": 2 },
                    { "text": "strip elimina espacios.", "line": 3 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "\"a,b\".split(\",\") = ?", "options": ["[a,b]", "a, b", "a b", "Error"], "answer": "[a,b]" },
            { "type": "multiple-choice", "question": "[\"a\",\"b\"].join = ?", "options": ["ab", "a,b", "nada", "nil"], "answer": "ab" },
            { "type": "multiple-choice", "question": "\"Ruby\".downcase = ?", "options": ["ruby", "RUBY", "ruby ", "Error"], "answer": "ruby" },
            { "type": "multiple-choice", "question": "\"Hola\".include?(\"ol\")?", "options": ["true", "false", "nil", "Error"], "answer": "true" },
            { "type": "multiple-choice", "question": "\"  hola  \".strip = ?", "options": ["hola", " hola ", "hola  ", "Error"], "answer": "hola" },
            { "type": "multiple-choice", "question": "\"Ruby\".gsub(\"R\", \"r\") = ?", "options": ["rUby", "Ruby", "ruby", "Error"], "answer": "ruby" },
            { "type": "multiple-choice", "question": "[1,2][0] da:", "options": ["1", "2", "nil", "Error"], "answer": "1" },
            { "type": "multiple-choice", "question": "slice Extrae:", "options": ["Parte del string", "Todo", "Nada", "Error"], "answer": "Parte del string" },
            { "type": "multiple-choice", "question": "reverse invierte:", "options": ["String", "Array", "Ambos", "Nada"], "answer": "String" },
            { "type": "multiple-choice", "question": "start_with? verifica:", "options": ["Inicio", "Final", "Contenido", "Nada"], "answer": "Inicio" }
        ]
    },
    {
        "title": "Nivel 12: Expresiones Regulares",
        "lesson": [
            {
                "title": "Introducción a Regex",
                "dialogo": "<p>Las expresiones regulares (regex) buscan patrones en texto. Se encierran entre //.</p>",
                "codigo": "texto = \"mi correo es test@email.com\"\n\nif texto =~ /@/\n  puts \"Tiene @\"\nend",
                "tourSteps": [
                    { "text": "=~ busca el patrón.", "line": 2 }
                ]
            },
            {
                "title": "Match y Captura",
                "dialogo": "<p>.match() devuelve el match y permite capturar grupos.</p>",
                "codigo": "texto = \"Mi edad es 25 años\"\n\nif texto =~ /(\\d+) años/\n  puts \"La edad es #{$1}\"\nend",
                "tourSteps": [
                    { "text": "() captura el grupo.", "line": 2 },
                    { "text": "$1 tiene lo capturado.", "line": 3 }
                ]
            },
            {
                "title": "Sub y Gsub con Regex",
                "dialogo": "<p>Puedes usar regex con gsub para reemplazar patrones.</p>",
                "codigo": "tel = \"123-456-7890\"\nputs tel.gsub(/\\d/, \"X\")  # XXX-XXX-XXXX\nputs tel.gsub(/\\d+/, \"*\")     # *-*-*",
                "tourSteps": [
                    { "text": "\\d = cualquier dígito.", "line": 2 },
                    { "text": "\\d+ = uno o más dígitos.", "line": 3 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "/\\d/匹配:", "options": ["Dígito", "Letra", "Todo", "Nada"], "answer": "Dígito" },
            { "type": "multiple-choice", "question": "/\\w/匹配:", "options": ["Palabra", "Todo", "Número", "Espacio"], "answer": "Palabra" },
            { "type": "multiple-choice", "question": "/\\s/匹配:", "options": ["Espacio", "Todo", "Número", "Letra"], "answer": "Espacio" },
            { "type": "multiple-choice", "question": "\"abc\" =~ /b/ = ?", "options": ["1", "0", "2", "nil"], "answer": "1" },
            { "type": "multiple-choice", "question": "(.+?) captura:", "options": ["Grupo 1+", "Todo", "Nada", "Error"], "answer": "Grupo 1+" },
            { "type": "multiple-choice", "question": "match devuelve:", "options": ["MatchData", "String", "nil", "Booleano"], "answer": "MatchData" },
            { "type": "multiple-choice", "question": "scan encuentra:", "options": ["Array", "Primero", "Último", "Nada"], "answer": "Array" },
            { "type": "multiple-choice", "question": "gsub con regex:", "options": ["Reemplaza todo", "Solo uno", "Nada", "Error"], "answer": "Reemplaza todo" },
            { "type": "multiple-choice", "question": "[aeiou]匹配:", "options": ["Vocales", "Todas", "A e i o u", "Error"], "answer": "Vocales" },
            { "type": "multiple-choice", "question": "^ inicia:", "options": ["Inicio", "Negación", "Fin", "Nada"], "answer": "Inicio" }
        ]
    },
    {
        "title": "Nivel 13: Manejo de Excepciones",
        "lesson": [
            {
                "title": "Begin - Rescue",
                "dialogo": "<p>El manejo de errores en Ruby usa begin...rescue.</p>",
                "codigo": "begin\n  resultado = 10 / 0\nrescue\n  puts \"Error: no puedes dividir por cero\"\nend",
                "tourSteps": [
                    { "text": "begin inicia el bloque.", "line": 1 },
                    { "text": "rescue atrapa el error.", "line": 2 }
                ]
            },
            {
                "title": "Tipos de Error",
                "dialogo": "<p>Puedes capturar tipos específicos de error.</p>",
                "codigo": "begin\n num = Integer(\"hola\")\nrescue ArgumentError\n  puts \"No es número\"\nrescue ZeroDivisionError\n  puts \"División por cero\"\nend",
                "tourSteps": [
                    { "text": "ArgumentError para tipo wrong.", "line": 3 },
                    { "text": "ZeroDivisionError para /0.", "line": 5 }
                ]
            },
            {
                "title": "Ensure y Raise",
                "dialogo": "<p><code>ensure</code> siempre ejecuta. <code>raise</code> lanza error.</p>",
                "codigo": "begin\n  puts \"Iniciando\"\nrescue\n  puts \"Error\"\nensure\n  puts \"Siempre corro\"\nend\n\nraise(\"Mi error\")  # Lanza excepción",
                "tourSteps": [
                    { "text": "ensure corre siempre.", "line": 5 },
                    { "text": "raise lanza excepción.", "line": 7 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "begin sin rescue:", "options": ["Error", "Funciona", "Nada", "nil"], "answer": "Error" },
            { "type": "multiple-choice", "question": "rescue captura:", "options": ["Errores", "Variables", "Métodos", "Nada"], "answer": "Errores" },
            { "type": "multiple-choice", "question": "ensure corre:", "options": ["Siempre", "Solo error", "Solo éxito", "Nada"], "answer": "Siempre" },
            { "type": "multiple-choice", "question": "raise lanza:", "options": ["Excepción", "Nada", "Nil", "true"], "answer": "Excepción" },
            { "type": "multiple-choice", "question": "ZeroDivisionError:", "options": ["División 0", " Tipo", "Valor", "Ninguno"], "answer": "División 0" },
            { "type": "multiple-choice", "question": " rescues puede tener muchos:", "options": ["Sí", "No", "Solo 1", "Ninguno"], "answer": "Sí" },
            { "type": "multiple-choice", "question": "retry en rescue:", "options": ["Reintenta", "Sale", "Nada", "Error"], "answer": "Reintenta" },
            { "type": "multiple-choice", "question": " rescue solo sin begin:", "options": ["No", "Sí", "Depende", "Error"], "answer": "No" },
            { "type": "multiple-choice", "question": "Exception es:", "options": ["Clase base", "Instancia", "Método", "nil"], "answer": "Clase base" },
            { "type": "multiple-choice", "question": " backtrace muestra:", "options": ["Rastreo", "Error", "Mensaje", "nil"], "answer": "Rastreo" }
        ]
    },
    {
        "title": "Nivel 14: Clases (POO)",
        "lesson": [
            {
                "title": "Definiendo Clases",
                "dialogo": "<p>Las clases son planos para crear objetos. Se definen con class.</p>",
                "codigo": "class Persona\nend\n\n# Crear instancia:\np = Persona.new\nputs p.class",
                "tourSteps": [
                    { "text": "class define la clase.", "line": 1 },
                    { "text": ".new crea instancia.", "line": 4 }
                ]
            },
            {
                "title": "initialize (Constructor)",
                "dialogo": "<p>initialize es el método que se llama al crear un objeto con .new.</p>",
                "codigo": "class Persona\n  def initialize(nombre)\n    @nombre = nombre\n  end\nend\n\np = Persona.new(\"Carlos\")\nputs p.inspect",
                "tourSteps": [
                    { "text": "initialize se llama automáticamente.", "line": 2 },
                    { "text": "@nombre es variable de instancia.", "line": 3 }
                ]
            },
            {
                "title": "Attr_accessor",
                "dialogo": "<p>attr_accessor crea getters y setters automáticamente.</p>",
                "codigo": "class Persona\n  attr_accessor :nombre, :edad\nend\n\np = Persona.new\np.nombre = \"Ana\"\np.edad = 25\nputs p.nombre\nputs p.edad",
                "tourSteps": [
                    { "text": "create getters y setters.", "line": 2 },
                    { "text": "Se usan como métodos.", "line": 5 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "def initialize es:", "options": ["Constructor", "Destructor", "Método", "nil"], "answer": "Constructor" },
            { "type": "multiple-choice", "question": "@variable es:", "options": ["Instancia", "Clase", "Local", "Global"], "answer": "Instancia" },
            { "type": "multiple-choice", "question": "attr_accessor crea:", "options": ["Getter/setter", "Constructor", "Método", "nil"], "answer": "Getter/setter" },
            { "type": "multiple-choice", "question": "Persona.new llama a:", "options": ["initialize", "new", "create", "build"], "answer": "initialize" },
            { "type": "multiple-choice", "question": " self en clase es:", "options": ["El objeto", "La clase", "nil", "Método"], "answer": "El objeto" },
            { "type": "multiple-choice", "question": "attr_reader solo:", "options": ["Getter", "Setter", "Ambos", "Ninguno"], "answer": "Getter" },
            { "type": "multiple-choice", "question": "attr_writer solo:", "options": ["Setter", "Getter", "Ambos", "Ninguno"], "answer": "Setter" },
            { "type": "multiple-choice", "question": "herencia usa:", "options": ["<", ">", "extends", "inherit"], "answer": "<" },
            { "type": "multiple-choice", "question": "super llama:", "options": ["Padre", "Hijo", "nil", "error"], "answer": "Padre" },
            { "type": "multiple-choice", "question": "@@variable es:", "options": ["De clase", "De instancia", "Local", "Global"], "answer": "De clase" }
        ]
    },
    {
        "title": "Nivel 15: Métodos de Instancia",
        "lesson": [
            {
                "title": "Métodos de Instancia",
                "dialogo": "<p>Los métodos definidos dentro de una clase son métodos de instancia por defecto. Pueden acceder a self.</p>",
                "codigo": "class Calculadora\n  def suma(a, b)\n    a + b\n  end\nend\n\nc = Calculadora.new\nputs c.suma(2, 3)",
                "tourSteps": [
                    { "text": " Se llama desde la instancia.", "line": 6 },
                    { "text": "Usa self implícito.", "line": 2 }
                ]
            },
            {
                "title": " self explícito",
                "dialogo": "<p>self se refiere al objeto actual. Útil para encadenar métodos.</p>",
                "codigo": "class String\n  def exclamar\n    self + \"!\"\n  end\nend\n\nputs \"Hola\".exclamar",
                "tourSteps": [
                    { "text": "self = el objeto.", "line": 2 }
                ]
            },
            {
                "title": "Métodos predicado",
                "dialogo": "<p>Los métodos que devuelven true/false suelen terminar en ?.</p>",
                "codigo": "class Numero\n  def par?\n    self % 2 == 0\n  end\nend\n\nputs 4.par?   # true\nputs 5.par?   # false",
                "tourSteps": [
                    { "text": "? en el nombre.", "line": 2 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "def metodo; self; end devuelve:", "options": ["El objeto", "nil", "self", "error"], "answer": "El objeto" },
            { "type": "multiple-choice", "question": "Método ? devuelve:", "options": ["Booleano", "nil", "Objeto", "error"], "answer": "Booleano" },
            { "type": "multiple-choice", "question": " private hace:", "options": ["No público", "Oculto", "error", "Público"], "answer": "No público" },
            { "type": "multiple-choice", "question": " protected:", "options": ["Mismo método", "Familia", "error", "Público"], "answer": "Familia" },
            { "type": "multiple-choice", "question": " public:", "options": ["Accesible", "Oculto", "error", "Privado"], "answer": "Accesible" },
            { "type": "multiple-choice", "question": " private :metodo:", "options": ["Hace privado", "Hace público", "error", "Borra"], "answer": "Hace privado" },
            { "type": "multiple-choice", "question": "protected vs private:", "options": ["Acceso", "Oculto", "error", "Ambos"], "answer": "Acceso" },
            { "type": "multiple-choice", "question": " self.class:", "options": ["Class", "String", "nil", "error"], "answer": "Class" },
            { "type": "multiple-choice", "question": " methods muestra:", "options": ["Lista", "error", "nil", "Boolean"], "answer": "Lista" },
            { "type": "multiple-choice", "question": " respond_to?:", "options": ["Boolean", "error", "nil", "Método"], "answer": "Boolean" }
        ]
    },
    {
        "title": "Nivel 16: Herencia y Módulos",
        "lesson": [
            {
                "title": "Herencia",
                "dialogo": "<p>Ruby usa herencia simple con <. La clase hija hereda todo de la padre.</p>",
                "codigo": "class Animal\n  def hablar\n    \"Sonido\"\n  end\nend\n\nclass Perro < Animal\n  def ladrar\n    \"Guau!\"\n  end\nend\n\nputs Perro.new.ladrar\nputs Perro.new.hablar",
                "tourSteps": [
                    { "text": "< indica herencia.", "line": 5 },
                    { "text": "Hereda métodos del padre.", "line": 8 }
                ]
            },
            {
                "title": "Super",
                "dialogo": "<p>super llama al método del padre con el mismo nombre.</p>",
                "codigo": "class Gato < Animal\n  def hablar\n    \"Miau \" + super\n  end\nend\n\nputs Gato.new.hablar",
                "tourSteps": [
                    { "text": "super llama al padre.", "line": 2 }
                ]
            },
            {
                "title": "Módulos",
                "dialogo": "<p>Los módulos son como clases que no se pueden instanciar. Se usan con include para agregar métodos.</p>",
                "codigo": "module Volador\n  def volar\n    \"¡Estoy volando!\"\n  end\nend\n\nclass Ave\n  include Volador\nend\n\nputs Ave.new.volar",
                "tourSteps": [
                    "module agrupa métodos.",
                    "include los agrega."
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "class Perro < Animal:", "options": ["Hereda", "Crea", "Error", "nil"], "answer": "Hereda" },
            { "type": "multiple-choice", "question": "super:", "options": ["Padre", "Hijo", "error", "nil"], "answer": "Padre" },
            { "type": "multiple-choice", "question": "module no puede:", "options": ["Instanciarse", "Heredar", "Tener métodos", "include"], "answer": "Instanciarse" },
            { "type": "multiple-choice", "question": " include agrega:", "options": ["Métodos", "Clase", "Instancia", "Error"], "answer": "Métodos" },
            { "type": "multiple-choice", "question": " prepend:", "options": ["Antes", "Después", "Error", "nil"], "answer": "Antes" },
            { "type": "multiple-choice", "question": "extend:", "options": ["Clase", "Módulo", "Error", "nil"], "answer": "Clase" },
            { "type": "multiple-choice", "question": "class A < B < C:", "options": ["A hereda B y C", "B hereda C", "C hereda todo", "Error"], "answer": "Error" },
            { "type": "multiple-choice", "question": "super con args:", "options": ["Los pasa", "No", "Error", "nil"], "answer": "Los pasa" },
            { "type": "multiple-choice", "question": "module.constants:", "options": ["Constantes", "Métodos", "error", "nil"], "answer": "Constantes" },
            { "type": "multiple-choice", "question": " ModuleName.constants:", "options": ["De módulo", "Globales", "error", "nil"], "answer": "De módulo" }
        ]
    },
    {
        "title": "Nivel 17: Métodos de Clase",
        "lesson": [
            {
                "title": " self.method",
                "dialogo": "<p>Los métodos de clase se definen con self.method_name. Se llaman desde la clase, no desde la instancia.</p>",
                "codigo": "class Contador\n  def self.contar\n    puts \"Método de clase\"\n  end\nend\n\nContador.contar",
                "tourSteps": [
                    { "text": "self. hace método de clase.", "line": 2 }
                ]
            },
            {
                "title": "Variables de clase",
                "dialogo": "<p>@@variable es compartida por todas las instancias.</p>",
                "codigo": "class Persona\n  @@cuenta = 0\n  \n  def initialize\n    @@cuenta += 1\n  end\n  \n  def self.cuantos?\n    @@cuenta\n  end\nend\n\np1 = Persona.new\np2 = Persona.new\nputs Persona.cuantos?",
                "tourSteps": [
                    { "text": "@@ es de clase.", "line": 2 }
                ]
            },
            {
                "title": "Singleton class",
                "dialogo": "<p>Cada objeto tiene una singleton class única.</p>",
                "codigo": "class Foo\n  class << self\n    def singleton\n      \"Método único\"\n    end\n  end\nend\n\nputs Foo.singleton",
                "tourSteps": [
                    { "text": "class << self define método singleton.", "line": 2 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": " self.metodo es:", "options": ["De clase", "Instancia", "Privado", "Error"], "answer": "De clase" },
            { "type": "multiple-choice", "question": " @@variable:", "options": ["Clase", "Instancia", "Local", "Error"], "answer": "Clase" },
            { "type": "multiple-choice", "question": " Persona.metodo se llama en:", "options": ["La clase", "Instancia", "Error", "nil"], "answer": "La clase" },
            { "type": "multiple-choice", "question": " class << self:", "options": ["Singleton", "Privado", "Error", "Público"], "answer": "Singleton" },
            { "type": "multiple-choice", "question": "singleton class:", "options": ["Por objeto", "Por clase", "Error", "nil"], "answer": "Por objeto" },
            { "type": "multiple-choice", "question": "def self.contar; end se llama:", "options": ["Contador.contar", "c.contar", "Error", "Ambos"], "answer": "Contador.contar" },
            { "type": "multiple-choice", "question": " class_variable_get:", "options": ["Lee @@", "null", "Error", "nil"], "answer": "Lee @@" },
            { "type": "multiple-choice", "question": " class_variable_set:", "options": ["Define @@", "null", "Error", "nil"], "answer": "Define @@" },
            { "type": "multiple-choice", "question": " instantiate singleton:", "options": ["Error", "null", "nil", "OK"], "answer": "Error" },
            { "type": "multiple-choice", "question": " singleton methods:", "options": ["Lista", "null", "Error", "nil"], "answer": "Lista" }
        ]
    },
    {
        "title": "Nivel 18: Archivos I/O",
        "lesson": [
            {
                "title": "File.read",
                "dialogo": "<p>Para leer archivos usamos File.read o File.readlines.</p>",
                "codigo": "# Leer archivo:\n contenido = File.read(\"datos.txt\")\nputs contenido\n\n# Línea por línea:\nFile.readlines(\"datos.txt\").each do |linea|\n  puts linea\nend",
                "tourSteps": [
                    { "text": "File.read lee todo.", "line": 2 },
                    { "text": "readlines da array.", "line": 5 }
                ]
            },
            {
                "title": "File.write",
                "dialogo": "<p>Para escribir usamos File.write o File.open con bloque.</p>",
                "codigo": "# Escribir:\nFile.write(\"salida.txt\", \"Hola mundo\")\n\n# Append:\nFile.open(\"log.txt\", \"a\") do |f|\n  f.puts \"Nuevo registro\"\nend",
                "tourSteps": [
                    { "text": "write escribe.", "line": 2 },
                    { "text": "a = append.", "line": 5 }
                ]
            },
            {
                "title": "File.exists? y directorios",
                "dialogo": "<p>File.exist? verifica existencia. Dir maneja directorios.</p>",
                "codigo": "if File.exist?(\"datos.txt\")\n  puts \"Existe\"\nend\n\n# Crear directorio:\nDir.mkdir(\"carpeta\") unless Dir.exist?(\"carpeta\")",
                "tourSteps": [
                    { "text": "exist? verifica archivo.", "line": 1 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "File.read devuelve:", "options": ["String", "Array", "Hash", "nil"], "answer": "String" },
            { "type": "multiple-choice", "question": "File.readlines devuelve:", "options": ["Array", "String", "Hash", "nil"], "answer": "Array" },
            { "type": "multiple-choice", "question": " File.write:", "options": ["Escribe", "Lee", " nil", "Error"], "answer": "Escribe" },
            { "type": "multiple-choice", "question": "\"a\" en File.open:", "options": ["Append", "Lee", "Error", "nil"], "answer": "Append" },
            { "type": "multiple-choice", "question": "\"w\" en File.open:", "options": ["Write", "Read", "Error", "nil"], "answer": "Write" },
            { "type": "multiple-choice", "question": "File.exist?(archivo):", "options": ["Boolean", "String", "Error", "nil"], "answer": "Boolean" },
            { "type": "multiple-choice", "question": "Dir.mkdir:", "options": ["Directorio", "Archivo", "Error", "nil"], "answer": "Directorio" },
            { "type": "multiple-choice", "question": "File.dirname:", "options": ["Carpeta", "Archivo", "Error", "nil"], "answer": "Carpeta" },
            { "type": "multiple-choice", "question": "basename:", "options": ["Nombre", "Ruta", "Carpeta", "nil"], "answer": "Nombre" },
            { "type": "multiple-choice", "question": "extname:", "options": ["Extensión", "Nombre", "Carpeta", "nil"], "answer": "Extensión" }
        ]
    },
    {
        "title": "Nivel 19: Lambdas y Procs",
        "lesson": [
            {
                "title": "Qué son Lambdas",
                "dialogo": "<p>lambdas son funciones anónimas (sin nombre). Se crean con -> o lambda.</p>",
                "codigo": "mi_lambda = -> { puts \"Hola lambda\" }\nmi_lambda.call\n\n# Con parámetros:\nsuma = ->(a, b) { a + b }\nputs suma.call(2, 3)",
                "tourSteps": [
                    { "text": "-> crea lambda.", "line": 1 },
                    { "text": ".call ejecuta.", "line": 2 }
                ]
            },
            {
                "title": "Procs",
                "dialogo": "<p>Procs son como lambdas pero más flexibles. Se crean con Proc.new.</p>",
                "codigo": "mi_proc = Proc.new { |x| x * 2 }\nputs mi_proc.call(5)\n\n# Más flexible:\notro_proc = Proc.new { |a, b, c| a + b + (c || 0) }\nputs otro_proc.call(1, 2)",
                "tourSteps": [
                    { "text": "Proc.new crea proc.", "line": 1 }
                ]
            },
            {
                "title": "Diferencias Lambda vs Proc",
                "dialogo": "<p>Lambda verifica argumentos exactos. Proc permite argumentos extra.</p>",
                "codigo": "lambda = ->(a, b) { a + b }\nproc = Proc.new { |a, b| a + b }\n\nputs lambda.call(1, 2)    # 3\nputs proc.call(1, 2, 3, 4)  # 3 (ignora extra)",
                "tourSteps": [
                    { "text": "Lambda estricto.", "line": 4 },
                    { "text": "Proc permisivo.", "line": 5 }
                ]
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "lambda retorna?", "options": ["Último", "nil", "null", "Error"], "answer": "Último" },
            { "type": "multiple-choice", "question": "Proc.new:", "options": ["Crea Proc", "null", "nil", "Error"], "answer": "Crea Proc" },
            { "type": "multiple-choice", "question": "-> (a,b) { } es:", "options": ["Lambda", "Proc", "nil", "Error"], "answer": "Lambda" },
            { "type": "multiple-choice", "question": "Proc vs Lambda args:", "options": ["Proc flexible", "Lambda flexible", "Iguales", "Ninguno"], "answer": "Proc flexible" },
            { "type": "multiple-choice", "question": "lambda.call:", "options": ["Ejecuta", "null", "nil", "Error"], "answer": "Ejecuta" },
            { "type": "multiple-choice", "question": "Se asignan:", "options": ["A variables", "null", "nil", "Error"], "answer": "A variables" },
            { "type": "multiple-choice", "question": "Closure captura:", "options": ["Entorno", "null", "nil", "Error"], "answer": "Entorno" },
            { "type": "multiple-choice", "question": "lambda { return }:", "options": ["Retorna del bloque", "Sale del método", "nil", "Error"], "answer": "Retorna del bloque" },
            { "type": "multiple-choice", "question": "Proc.new { return }:", "options": ["Error fuera de método", "Sale del método", "nil", "No hace nada"], "answer": "Sale del método" },
            { "type": "multiple-choice", "question": "&:simbolo sirve para:", "options": ["Llamar método", "Crear variable", "nil", "Error"], "answer": "Llamar método" }
        ]
    },
    {
        "title": "Nivel 20: Examen Final",
        "lesson": [
            {
                "title": "Has llegado al final",
                "dialogo": "<p>En 20 niveles cubriste todo lo básico y algo avanzado de Ruby: desde puts hasta clases, desde arrays hasta lambdas.</p><p>Este examen final mezcla todo lo aprendido. Lee con calma cada pregunta.</p>"
            },
            {
                "title": "Lo que dominas",
                "dialogo": "<p>Repasa lo que sabes:</p><ul><li>Nivel 1-3: Fundamentos, matemáticas, if/unless</li><li>Nivel 4-5: Bucles e iteradores</li><li>Nivel 6-7: Arrays y Hashes</li><li>Nivel 8-10: Bloques, métodos</li><li>Nivel 11-13: Strings, regex, excepciones</li><li>Nivel 14-17: Clases, POO, herencia</li><li>Nivel 18-19: Archivos, Lambdas</li></ul>"
            },
            {
                "title": "Consejo para el examen",
                "dialogo": "<p>Las preguntas requieren lógica de deducción. Simula el código mentalmente, línea por línea.</p>"
            }
        ],
        "quiz": [
            { "type": "multiple-choice", "question": "[1,2][-2] = ?", "options": ["2", "1", "nil", "0"], "answer": "1" },
            { "type": "multiple-choice", "question": "3.times { |i| puts i } prints:", "options": ["0 1 2", "1 2 3", "3", "Error"], "answer": "0 1 2" },
            { "type": "multiple-choice", "question": "a = { b: 1 }; a[:b] = ?", "options": ["1", "nil", ":b", "Error"], "answer": "1" },
            { "type": "multiple-choice", "question": "\"ruby\".upcase = ?", "options": ["RUBY", "ruby", "Ruby", "Error"], "answer": "RUBY" },
            { "type": "multiple-choice", "question": "10 / 3 = ?", "options": ["3", "3.33", "Error", "4"], "answer": "3" },
            { "type": "multiple-choice", "question": "unless false / puts \"A\" / end:", "options": ["A", "Nada", "nil", "Error"], "answer": "A" },
            { "type": "multiple-choice", "question": "def test; end; test.class:", "options": ["NilClass", "nil", "Object", "Error"], "answer": "NilClass" },
            { "type": "multiple-choice", "question": "class A; end; A.new.class:", "options": ["A", "Object", "nil", "Error"], "answer": "A" },
            { "type": "multiple-choice", "question": "[1,2].include?(3)?", "options": ["false", "true", "nil", "Error"], "answer": "false" },
            { "type": "multiple-choice", "question": "1 + 2 * 3 = ?", "options": ["7", "9", "6", "Error"], "answer": "7" }
        ]
    }
];
window.courseData = courseData;
console.log(" courseData loaded successfully", courseData.length);