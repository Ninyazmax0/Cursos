// ========================================
// PERFILES PREDEFINIDOS - Steven & Amelia
// ========================================
// Perfiles automáticos con privilegios admin para los fundadores

import { db } from './firebase-config.js';
import { collection, doc, setDoc, getDoc } from 'https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js';

// Datos predefinidos para Steven
const STEVEN_PROFILE = {
    id: 'steven',
    name: 'Steven',
    password: 'admin123',
    email: 'steven@statuscode418.dev',
    avatar: 'https://i.ibb.co/9HGqpf0B/Captura-de-pantalla-2025-06-21-205156.png',
    bio: 'Frontend perfectionist. Si hay un píxel fuera de lugar, no duermo hasta arreglarlo. Fundador de Status Code 418. 💙',
    tags: ['Frontend', 'UX/UI', 'Design', 'Perfectionist', 'Coffee'],
    socialLinks: { github: '', instagram: '', twitter: '', linkedin: '', website: '' },
    isAdmin: true,
    isOnline: false,
    rank: 'Owner',
    xp: 9999,
    achievements: ['first_login', 'web_master', 'python_master', 'ruby_master', 'db_master', 'pixel_perfect', 'dream_architect', 'coffee_overdose', 'bug_lord', 'frontend_god'],
    registeredAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    // Desbloquear todo
    webProgress: { unlockedLevel: 99, completedLevels: Array.from({ length: 20 }, (_, i) => i), quizScores: {} },
    pythonProgress: { unlockedLevel: 99, completedLevels: Array.from({ length: 20 }, (_, i) => i), quizScores: {} },
    rubyProgress: { unlockedLevel: 99, completedLevels: Array.from({ length: 20 }, (_, i) => i), quizScores: {} },
    databaseProgress: { unlockedLevel: 99, completedLevels: Array.from({ length: 20 }, (_, i) => i), quizScores: {} },
    quizHistory: []
};

const AMELIA_PROFILE = {
    id: 'amelia',
    name: 'Amelia',
    password: 'admin123',
    email: 'amelia@statuscode418.dev',
    avatar: 'https://cdn.myanimelist.net/images/characters/8/239523.jpg',
    bio: 'Backend wizard. Drama queen con 5 copias de seguridad de tus copias de seguridad. Coffee addict. Co-fundadora de Status Code 418. 💜',
    tags: ['Backend', 'Firebase', 'Architecture', 'Coffee', 'TypeScript'],
    socialLinks: { github: '', instagram: '', twitter: '', linkedin: '', website: '' },
    isAdmin: true,
    isOnline: false,
    rank: 'Co-Owner',
    xp: 9999,
    achievements: ['first_login', 'web_master', 'python_master', 'ruby_master', 'db_master', 'backend_queen', 'database_keeper', 'logic_master', 'server_whisperer', 'security_protocol'],
    registeredAt: new Date().toISOString(),
    createdAt: new Date().toISOString(),
    // Desbloquear todo
    webProgress: { unlockedLevel: 99, completedLevels: Array.from({ length: 20 }, (_, i) => i), quizScores: {} },
    pythonProgress: { unlockedLevel: 99, completedLevels: Array.from({ length: 20 }, (_, i) => i), quizScores: {} },
    rubyProgress: { unlockedLevel: 99, completedLevels: Array.from({ length: 20 }, (_, i) => i), quizScores: {} },
    databaseProgress: { unlockedLevel: 99, completedLevels: Array.from({ length: 20 }, (_, i) => i), quizScores: {} },
    quizHistory: []
};

// === FUNCIONES EXPORTADAS ===

export function isSteven(username) {
    return username && username.toLowerCase() === 'steven';
}

export function isAmelia(username) {
    return username && username.toLowerCase() === 'amelia';
}

export function getPredefinedProfile(username) {
    if (isSteven(username)) return STEVEN_PROFILE;
    if (isAmelia(username)) return AMELIA_PROFILE;
    return null;
}

/**
 * Asegura que los perfiles de Steven y Amelia existan en Firestore
 * Se llama al iniciar la app (opcional, desde index.html)
 */
export async function initializePredefinedProfiles() {
    try {
        const stevenRef = doc(db, 'users', 'steven');
        const ameliaRef = doc(db, 'users', 'amelia');

        // Check Steven
        const stevenSnap = await getDoc(stevenRef);
        if (!stevenSnap.exists()) {
            console.log('✨ Inicializando perfil de Steven...');
            await setDoc(stevenRef, { ...STEVEN_PROFILE, id: 'steven' });
        }

        // Check Amelia
        const ameliaSnap = await getDoc(ameliaRef);
        if (!ameliaSnap.exists()) {
            console.log('✨ Inicializando perfil de Amelia...');
            await setDoc(ameliaRef, { ...AMELIA_PROFILE, id: 'amelia' });
        }
        
    } catch (e) {
        console.error('Error inicializando perfiles predefinidos (puede ser normal si falta permisos):', e);
    }
}

/**
 * Mezcla los datos predefinidos con los datos del usuario
 * Asegura que Steven y Amelia siempre tengan sus badges y permisos
 */
export function applyAdminPrivileges(userData, username) {
    // Normalizar ID/Username para check
    const idToCheck = (userData.id || username).toLowerCase();

    if (idToCheck === 'steven') {
        return {
            ...userData,
            ...STEVEN_PROFILE,
            id: 'steven',
            // Preservar contraseña y datos "vivos" si se desea, 
            // pero forzar los metadatos importantes.
            password: userData.password || STEVEN_PROFILE.password 
        };
    }
    
    if (idToCheck === 'amelia') {
        return {
            ...userData,
            ...AMELIA_PROFILE,
            id: 'amelia',
            password: userData.password || AMELIA_PROFILE.password
        };
    }

    return userData;
}
