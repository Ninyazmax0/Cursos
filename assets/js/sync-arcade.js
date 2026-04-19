
import { saveChallengeScore } from './assets/js/firebase-secondary.js';

async function syncProgress() {
    console.log("🚀 Sincronizando 10 niveles de la Arcada para Steven...");
    for(let i = 1; i <= 10; i++) {
        await saveChallengeScore('python', i, 10, 'logic');
        console.log(`✅ Nivel ${i} completado con éxito.`);
    }
    console.log("✨ ¡Sincronización completa! Revisa tu Hub de Desafíos.");
}

syncProgress();
