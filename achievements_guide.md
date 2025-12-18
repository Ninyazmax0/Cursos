# Guía de Logros - Status Code 418

Aquí tienes la lista completa de logros disponibles y cómo desbloquearlos.

## 🌟 Básicos y Login

| Logro | Rareza | Cómo desbloquear |
|-------|--------|------------------|
| **Hola Mundo** | Common | Inicia sesión por primera vez. |
| **Night Owl** | Epic | Inicia sesión entre las 01:00 AM y las 04:00 AM. |
| **Early Bird** | Rare | Inicia sesión entre las 05:00 AM y las 07:00 AM. |
| **Veteran** | Legend | Ten una cuenta con más de 1 año de antigüedad (o simúlalo editando la fecha de registro). |

## 📚 Cursos y Progreso

| Logro | Rareza | Cómo desbloquear |
|-------|--------|------------------|
| **Polyglot Starter** | Common | Completa el Nivel 1 en al menos 2 cursos diferentes. |
| **Web Master** | Rare | Alcanza el Nivel 10 en Desarrollo Web. |
| **Python Master** | Rare | Alcanza el Nivel 10 en Python. |
| **Ruby Master** | Rare | Alcanza el Nivel 10 en Ruby. |
| **Database Master** | Rare | Alcanza el Nivel 10 en Bases de Datos. |
| **Level 5** | Common | Alcanza el nivel global 5. |
| **Level 20** | Rare | Alcanza el nivel global 20. |
| **Level 50** | Epic | Alcanza el nivel global 50. |
| **Level 80** | Legendary| Alcanza el nivel global 80. |

## 🥚 Easter Eggs y Secretos

| Logro | Rareza | Cómo desbloquear |
|-------|--------|------------------|
| **Click Spammer** | Common | Haz clic 10 veces rápidas en el logo "Status Code 418" del menú principal (clase `.logo-trigger` o `.brand-logo`). |
| **Konami Code** | Epic | Introduce el Código Konami en cualquier pantalla: `↑ ↑ ↓ ↓ ← → ← → B A`. |
| **Founder Stalker** | Epic | Visita los perfiles de los dos fundadores: `steven-founder` y `amelia-founder`. |
| **Teapot** | Legendary| Haz clic 5 veces en el título principal "Status Code 418" dentro de la página `story.html`. |
| **Social Butterfly** | Common | Visita el perfil de 5 otros estudiantes diferentes. |
| **Bug Hunter** | Epic | Encuentra y reporta un bug (Simulado: Haz clic en un elemento con clase `.bug` si existiera, o usa la consola: `checkAchievement('bug_hunter')`). |
| **Quiz Genius** | Epic | Obtén 100% en 3 quizzes consecutivos. |
| **Life Cycle** | Legendary| Desbloquea el secreto de la naturaleza con el Código Konami. |
| **Chronos** | Legendary| Supera un desafío de código en el primer minuto del día (Medianoche 00:00). |
| **Eternal Flame**| Legendary| Mantén una racha de conexión de 7 días seguidos. |
| **Zero Day** | Legendary| Hackea el sistema desde la consola (Usa `unlock_secrets()`). |

## 🛠️ Notas para Developers

Para probar cualquier logro rápidamente, puedes abrir la consola del navegador (F12) y ejecutar:

```javascript
import('./assets/js/achievements.js').then(m => m.checkAchievement('id_del_logro'));
// Ejemplo:
// m.checkAchievement('konami_code');
```
