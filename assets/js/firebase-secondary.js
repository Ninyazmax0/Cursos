/**
 * Módulo Firebase Dual (Secundario) - Arcadia de Desafíos
 * Conecta silenciosamente con el proyecto status-code-418-f4366
 * Usado exclusivamente para notas, rankings y telemetría de juegos.
 */

import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, query, orderBy, setDoc, doc, getDoc, limit } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// Credenciales del Proyecto Secundario (Status Code 418 v2)
const secondaryConfig = {
    apiKey: "AIzaSyDtuNPTHZ0tFFHYeBIjeRdqLbo4HMr323c",
    authDomain: "status-code-418-f4366.firebaseapp.com",
    projectId: "status-code-418-f4366",
    storageBucket: "status-code-418-f4366.firebasestorage.app",
    messagingSenderId: "292545013614",
    appId: "1:292545013614:web:230668e6ac96b08683c37f",
    measurementId: "G-HYJMCWXRD8"
};

// Se inicializa con el nombre "ArcadiaDB" para no crear conflicto con el Firebase App principal
const secondaryApp = initializeApp(secondaryConfig, "ArcadiaDB");
const arcadiaDb = getFirestore(secondaryApp);

console.log('🎮 ArcadiaDB (Firebase Secundario) inicializado silenciosamente.');

/**
 * Función Puente: Guarda la puntuación de un minijuego en la DB Secundaria
 * usando la identidad del usuario logueado en LocalStorage (DB Principal).
 */
export async function saveChallengeScore(courseType, levelNumber, score, gameType) {
    try {
        const userStr = localStorage.getItem('currentUser');
        if (!userStr) {
            console.error("No hay usuario principal logueado para guardar en Arcadia.");
            return false;
        }
        
        const user = JSON.parse(userStr);
        
        // 1. Guardar el registro de la partida exacta (telemetría y auditoría)
        const runRecord = {
            userId: user.id,
            userName: user.name,
            userAvatar: user.avatar || '',
            course: courseType,
            level: levelNumber,
            gameType: gameType,
            score: score,
            timestamp: new Date().toISOString()
        };
        
        await addDoc(collection(arcadiaDb, "challenge_runs"), runRecord);
        
        // 2. Actualizar el "Profile de Arcada" del usuario (Para el Ranking)
        const profileRef = doc(arcadiaDb, "arcadia_profiles", user.id);
        const profileSnap = await getDoc(profileRef);
        
        let perfectRunsIncr = (score === 10) ? 1 : 0;
        
        if (profileSnap.exists()) {
             const data = profileSnap.data();
             await setDoc(profileRef, {
                 totalXP: (data.totalXP || 0) + score,
                 perfectRuns: (data.perfectRuns || 0) + perfectRunsIncr,
                 lastPlayed: new Date().toISOString(),
                 // Siempre mantenemos actualizados el nombre y avatar desde la base principal
                 userName: user.name,
                 userAvatar: user.avatar || ''
             }, { merge: true });
        } else {
             await setDoc(profileRef, {
                 userId: user.id,
                 userName: user.name,
                 userAvatar: user.avatar || '',
                 totalXP: score,
                 perfectRuns: perfectRunsIncr,
                 lastPlayed: new Date().toISOString()
             });
        }
        
        console.log(`✅ [ArcadiaDB] Partida de ${courseType} Nivel ${levelNumber} guardada con nota: ${score}`);
        return true;
    } catch (e) {
        console.error("❌ [ArcadiaDB] Error al guardar progreso:", e);
        return false;
    }
}

/**
 * Obtiene el TOP de jugadores para el Ranking del Hub.
 * Se evita doble orderBy para no forzar índices compuestos en Firestore.
 */
export async function getGlobalRanking(limitCount = 10) {
    try {
        const q = query(
            collection(arcadiaDb, "arcadia_profiles"), 
            orderBy("totalXP", "desc"), 
            limit(limitCount)
        );
        const snapshot = await getDocs(q);
        let ranking = [];
        snapshot.forEach(doc => ranking.push(doc.data()));
        
        // Orden secundario en memoria por si hay empates de XP
        ranking.sort((a, b) => {
            if (b.totalXP === a.totalXP) {
                return (b.perfectRuns || 0) - (a.perfectRuns || 0);
            }
            return b.totalXP - a.totalXP;
        });
        
        return ranking;
    } catch(e) {
        console.error("❌ [ArcadiaDB] Error obteniendo ranking:", e);
        return [];
    }
}

/**
 * Obtiene los niveles que el usuario ya completó en un curso.
 */
export async function getUserChallengeProgress(courseType) {
    try {
        const userStr = localStorage.getItem('currentUser');
        if (!userStr) return [];
        const user = JSON.parse(userStr);
        
        const q = query(collection(arcadiaDb, "challenge_runs"));
        const snapshot = await getDocs(q);
        
        const completedLevels = new Set();
        snapshot.forEach(doc => {
            const data = doc.data();
            if (data.userId === user.id && data.course === courseType && data.score >= 6) {
                completedLevels.add(data.level);
            }
        });
        return Array.from(completedLevels);
    } catch (e) {
        console.error("❌ [ArcadiaDB] Error leyendo progreso:", e);
        return [];
    }
}

/**
 * Obtiene el total de XP del usuario
 */
export async function getUserTotalArcadiaXP() {
    try {
        const userStr = localStorage.getItem('currentUser');
        if (!userStr) return 0;
        const user = JSON.parse(userStr);
        const profileRef = doc(arcadiaDb, "arcadia_profiles", user.id);
        const profileSnap = await getDoc(profileRef);
        if (profileSnap.exists()) {
            return profileSnap.data().totalXP || 0;
        }
        return 0;
    } catch (e) {
        console.error("❌ [ArcadiaDB] Error leyendo XP:", e);
        return 0;
    }
}

// Opcional: Hacerlas globales para debug desde consola
window.ArcadiaDB = {
    saveChallengeScore,
    getGlobalRanking,
    getUserChallengeProgress,
    getUserTotalArcadiaXP
};
