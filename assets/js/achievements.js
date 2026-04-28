/**
 * Achievements System for Status Code 418
 * Contains definitions and tracking logic.
 */

import { doc, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { db } from "./firebase-config.js";

// === ACHIEVEMENT DEFINITIONS ===
export const achievements = [
    // --- BÁSICOS ---
    { id: 'first_login', name: 'Hola Mundo', desc: 'Inicia sesión por primera vez.', hint: 'El primer paso siempre es el más difícil.', rarity: 'common', icon: 'log-in' },
    { id: 'first_blood', name: 'First Blood', desc: 'Completa el Nivel 1 de cualquier curso.', hint: 'Supera el primer cuestionario.', rarity: 'common', icon: 'sword' },
    { id: 'profile_updated', name: 'Nueva Identidad', desc: 'Cambia tu nombre desde el Perfil.', hint: 'Reinventarse.', rarity: 'common', icon: 'user-cog' },
    { id: 'explorer', name: 'Visitante', desc: 'Explora 5 páginas diferentes de la academia.', hint: 'Descubre todo lo que hay.', rarity: 'common', icon: 'compass' },
    
    // --- CURSOS ---
    { id: 'polyglot_starter', name: 'Políglota Curioso', desc: 'Inicia los 4 cursos.', hint: 'Python, Ruby, Web, DB... ¿por qué elegir?', rarity: 'common', icon: 'languages' },
    { id: 'novice_dev', name: 'Principiante Prometedor', desc: 'Completa los primeros 5 niveles.', hint: 'Comienzas a entender tu primer lenguaje.', rarity: 'common', icon: 'star' },
    { id: 'half_way', name: 'A Medio Camino', desc: 'Alcanza el Nivel 10 de cualquier curso.', hint: 'Ya estás entendiendo la lógica de los lenguajes.', rarity: 'rare', icon: 'zap' },
    { id: 'bug_master', name: 'Maestro Cazador', desc: 'Completa 5 niveles de Bug Hunter.', hint: 'Encuentra los errores ocultos.', rarity: 'rare', icon: 'bug' },
    { id: 'arcade_master', name: 'Rey del Arcade', desc: 'Completa un Desafío Arcade interactivo.', hint: 'Pon a prueba tus habilidades sin piedad.', rarity: 'epic', icon: 'gamepad-2' },
    
    // --- MAESTROS ---
    { id: 'web_expert', name: 'Arquitecto Frontend', desc: 'Alcanza el Nivel 15 de Desarrollo Web.', hint: 'Maquillando el DOM a la perfección.', rarity: 'rare', icon: 'layout' },
    { id: 'web_master', name: 'Lord of the DOM', desc: 'Completa el curso de Desarrollo Web.', hint: 'Domina el HTML y CSS.', rarity: 'epic', icon: 'globe' },
    { id: 'python_master', name: 'Parsel Tongue', desc: 'Completa el curso de Python.', hint: 'Habla con las serpientes.', rarity: 'epic', icon: 'code-2' },
    { id: 'ruby_expert', name: 'Diamante en Bruto', desc: 'Alcanza el Nivel 15 del curso Ruby.', hint: 'Pulido, pero aún con filo.', rarity: 'rare', icon: 'gem' },
    { id: 'ruby_master', name: 'Gem Collector', desc: 'Completa el curso de Ruby.', hint: 'Brilla como un rubí.', rarity: 'epic', icon: 'gem' },
    { id: 'db_expert', name: 'Administrador', desc: 'Alcanza el Nivel 15 de Base de Datos.', hint: 'Controlando los registros y las tablas.', rarity: 'rare', icon: 'server' },
    { id: 'db_master', name: 'Query King', desc: 'Completa el curso de Bases de Datos.', hint: 'SELECT * FROM knowledge.', rarity: 'epic', icon: 'database' },
    
    // --- DESAFÍOS ---
    { id: 'quiz_genius', name: 'Cerebro Supremo', desc: 'Consigue 10/10 en el Examen Final (Nivel 20).', hint: 'No margen de error en el nivel definitivo.', rarity: 'legendary', icon: 'brain' },
    { id: 'sandbox_explorer', name: 'Hacker de Sandbox', desc: 'Abre el entorno de pruebas Sandbox.', hint: 'Experimentar fuera del curso.', rarity: 'rare', icon: 'terminal' },
    
    // --- TIENDA ---
    { id: 'buyer', name: 'Comprador', desc: 'Compra tu primer aura en la tienda.', hint: 'Invierte en tu estilo.', rarity: 'common', icon: 'shopping-cart' },
    { id: 'collector', name: 'Coleccionista', desc: 'Posee 5 auras diferentes.', hint: 'Variedad es el arte.', rarity: 'rare', icon: 'gem' },
    
    // --- SOCIAL ---
    { id: 'social_butterfly', name: 'Sociable', desc: 'Envía tu primer mensaje en el chat.', hint: 'Conéctate con otros.', rarity: 'common', icon: 'message-circle' },
    
    // --- RACHA ---
    { id: 'streak_3', name: 'Consistente', desc: 'Completa 1 nivel por día durante 3 días seguidos.', hint: 'La práctica diaria hace al maestro.', rarity: 'rare', icon: 'flame' },
    { id: 'streak_7', name: 'Dedicado', desc: 'Mantén una racha de 7 días completos.', hint: 'Una semana de dedicación.', rarity: 'epic', icon: 'trophy' },
    
    // --- ESPECIAL (Fundadores) ---
    { id: 'steven_moon', name: 'Mi Luna', desc: 'Solo hay una luna en este cielo...', hint: 'Una recompensa por un momento especial.', rarity: 'legendary', icon: 'moon-star' },
    { id: 'marriage_contract', name: 'Mi Prometido', desc: 'Un juramento que el tiempo no podrá borrar.', hint: 'Para el dueño de mis latidos.', rarity: 'legendary', icon: 'heart' },
    { id: 'founder_stalker', name: 'Stalker', desc: 'Visitaste a los creadores.', hint: 'Visitaste los perfiles de Steven y Amelia.', rarity: 'rare', icon: 'eye' }
];

// === LOGIC ===

// Force sync local achievements with firestore when needed
export async function syncAchievementsData() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || !currentUser.id) return currentUser;

    try {
        const userRef = doc(db, 'users', currentUser.id);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
            const serverData = userSnap.data();
            currentUser.achievements = serverData.achievements || [];
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
    } catch(e) {
        console.error("Sync Error", e);
    }
    return currentUser;
}

export async function checkAchievement(achievementId) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser || !currentUser.id) return false;

    // Check localStorage first for speed
    let userAchievements = currentUser.achievements || [];
    if (userAchievements.includes(achievementId)) return false; // Already unlocked

    // Add to list
    userAchievements.push(achievementId);
    currentUser.achievements = userAchievements;

    // AWARD COINS BASED ON RARITY
    const ach = achievements.find(a => a.id === achievementId);
    let reward = 100; // Default Common
    if (ach) {
        if (ach.rarity === 'rare') reward = 300;
        if (ach.rarity === 'epic') reward = 500;
        if (ach.rarity === 'legendary') reward = 1000;
    }
    
    // Init coins if missing
    if (!currentUser.coins) currentUser.coins = 0;
    currentUser.coins += reward;

    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    // Show Notification
    showToast(achievementId, reward);

    // Sync to Firestore
    try {
        const userRef = doc(db, 'users', currentUser.id);
        await updateDoc(userRef, {
            achievements: userAchievements,
            coins: currentUser.coins
        });
        return true;
    } catch (e) {
        console.error("Error syncing achievement:", e);
        return false;
    }
}

// AUTO-AUDIT LOGIC TO RETROACTIVELY GRANT ACHIEVEMENTS BASED ON REAL STATS
export async function auditUserAchievements() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) return;
    
    let checks = [];
    
    // Check Course Masters based on completedLevels array length (assuming 20 is max)
    const webLevels = currentUser.webProgress?.completedLevels?.length || 0;
    const pyLevels = currentUser.pythonProgress?.completedLevels?.length || 0;
    const rubyLevels = currentUser.rubyProgress?.completedLevels?.length || 0;
    const dbLevels = currentUser.databaseProgress?.completedLevels?.length || 0;
    
    if (webLevels >= 20) checks.push('web_master');
    if (pyLevels >= 20) checks.push('python_master');
    if (rubyLevels >= 20) checks.push('ruby_master');
    if (dbLevels >= 20) checks.push('db_master');
    
    if (webLevels >= 10 || pyLevels >= 10 || rubyLevels >= 10 || dbLevels >= 10) checks.push('half_way');
    if (webLevels >= 1 || pyLevels >= 1 || rubyLevels >= 1 || dbLevels >= 1) checks.push('novice_dev');

    // Bug hunter
    if (currentUser.challengeProgress?.bug_hunter >= 5) checks.push('bug_master');
    
    // Streaks
    if (currentUser.streak >= 3) checks.push('streak_3');
    if (currentUser.streak >= 7) checks.push('streak_7');
    
    // Inventory
    const auraCount = currentUser.inventory?.auras?.length || 0;
    if (auraCount >= 5) checks.push('collector');
    
    // Admin/Founder base logic
    if (currentUser.id === 'steven' || currentUser.id === 'steven-founder') {
        checks.push('pixel_perfect', 'dream_architect', 'coffee_overdose', 'bug_lord', 'frontend_god', 'steven_moon', 'marriage_contract');
    }
    if (currentUser.id === 'amelia' || currentUser.id === 'amelia-founder') {
        checks.push('backend_queen', 'database_keeper', 'logic_master', 'server_whisperer', 'security_protocol');
    }
    
    // Run checks silently
    for (let achId of checks) {
        if (!currentUser.achievements?.includes(achId)) {
            await checkAchievement(achId);
        }
    }
}

// MAKE IT GLOBAL SO HTML INLINE SCRIPTS CAN CALL IT
window.checkAchievement = checkAchievement;
window.syncAchievementsData = syncAchievementsData;
window.auditUserAchievements = auditUserAchievements;

function showToast(achId, reward) {
    const ach = achievements.find(a => a.id === achId);
    if (!ach) return;

    const toast = document.createElement('div');
    toast.className = 'fixed bottom-4 right-4 bg-gray-800 border border-yellow-500 text-white p-4 rounded-xl shadow-2xl flex items-center gap-4 transform translate-y-20 opacity-0 transition-all duration-500 z-50';
    toast.innerHTML = `
        <div class="p-2 bg-yellow-500/20 rounded-full text-yellow-500">
            <i data-lucide="${ach.icon}"></i>
        </div>
        <div>
            <h4 class="font-bold text-sm text-yellow-400">¡Logro Desbloqueado!</h4>
            <p class="font-bold">${ach.name}</p>
            <p class="text-xs text-gray-400">+${reward} Monedas</p>
        </div>
    `;
    
    document.body.appendChild(toast);
    
    // Initialize icon
    if(window.lucide) window.lucide.createIcons();

    // Animate in
    requestAnimationFrame(() => {
        toast.classList.remove('translate-y-20', 'opacity-0');
    });

    // Remove after 4s
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
        setTimeout(() => toast.remove(), 500);
    }, 4000);
}

// === GLOBAL LISTENERS ===
export function initAchievementListeners() {
    // 1. EXPLORER - Rastrear páginas visitadas
    const visitedPages = JSON.parse(localStorage.getItem('visitedPages') || '[]');
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (!visitedPages.includes(currentPage)) {
        visitedPages.push(currentPage);
        localStorage.setItem('visitedPages', JSON.stringify(visitedPages));
        if (visitedPages.length >= 5) checkAchievement('explorer');
    }
    
    // 2. FOUNDER STALKER CHECK
    if (window.location.href.includes('perfil_usuario.html')) {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id') || urlParams.get('user');
        if (id === 'steven' || id === 'amelia') {
            let viewed = JSON.parse(localStorage.getItem('viewedFounders') || '[]');
            if (!viewed.includes(id)) viewed.push(id);
            localStorage.setItem('viewedFounders', JSON.stringify(viewed));
            
            if (viewed.includes('steven') && viewed.includes('amelia')) {
                checkAchievement('founder_stalker');
            }
        }
    }
    
    // 3. PROFILE UPDATED - Se llama desde perfil_usuario.html cuando renombra
    window.checkProfileUpdated = () => checkAchievement('profile_updated');
    
    // 4. BUG MASTER - Se llama desde los challenges
    window.checkBugMaster = () => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) return;
        const bugLevels = currentUser.challengeProgress?.bug_hunter || 0;
        if (bugLevels >= 5) checkAchievement('bug_master');
    };
    
    // 5. BUYER - Se llama desde la tienda
    window.checkBuyerAchievement = () => checkAchievement('buyer');
    
    // 6. COLLECTOR - Se llama cuando equipar aura
    window.checkCollectorAchievement = () => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) return;
        const inventory = currentUser.inventory?.auras || [];
        if (inventory.length >= 5) checkAchievement('collector');
    };
    
    // 7. SOCIAL BUTTERFLY - Se llama desde chat
    window.checkSocialAchievement = () => checkAchievement('social_butterfly');
    
    // 8. STREAK - Se llama cuando completa un nivel
    window.checkStreakAchievement = () => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) return;
        
        const today = new Date().toDateString();
        const lastActive = currentUser.lastActiveDate;
        const streak = currentUser.streak || 0;
        
        if (lastActive === today) return; // Ya activity hoy
        
        const yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        let newStreak = 1;
        if (lastActive === yesterday.toDateString()) {
            newStreak = streak + 1;
        }
        
        currentUser.lastActiveDate = today;
        currentUser.streak = newStreak;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        
        if (newStreak >= 3) checkAchievement('streak_3');
        if (newStreak >= 7) checkAchievement('streak_7');
    };
    
    // 9. SECRET UNLOCKS - Verificar condiciones de secretos
    window.checkSecretUnlocks = () => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (!currentUser) return;
        
        const achievementsList = currentUser.achievements || [];
        
        // Verificar Void (10 logros)
        if (achievementsList.length >= 10) {
            // Desbloquear aura-secret-void
            if (!currentUser.inventory?.auras?.includes('aura-secret-void')) {
                if (!currentUser.inventory) currentUser.inventory = { auras: [] };
                currentUser.inventory.auras.push('aura-secret-void');
                checkAchievement('secret_void');
            }
        }
        
        // Verificar Course Completions para secretos
        const webLevels = currentUser.webProgress?.completedLevels?.length || 0;
        const pyLevels = currentUser.pythonProgress?.completedLevels?.length || 0;
        
        if (webLevels >= 20) {
            if (!currentUser.inventory?.auras?.includes('aura-secret-hacker')) {
                if (!currentUser.inventory) currentUser.inventory = { auras: [] };
                currentUser.inventory.auras.push('aura-secret-hacker');
            }
        }
        
        if (pyLevels >= 20) {
            if (!currentUser.inventory?.auras?.includes('aura-secret-fire')) {
                if (!currentUser.inventory) currentUser.inventory = { auras: [] };
                currentUser.inventory.auras.push('aura-secret-fire');
            }
        }
    };
}

// Konami Code Listener
let konamiCode = ['w', 'a', 's', 'd', 'a', 'b', 'a', 'b'];
let konamiIndex = 0;

// Zafkiel Code Listener (Tokisaki Kurumi Theme)
let zafkielCode = ['z', 'a', 'f', 'k', 'i', 'e', 'l'];
let zafkielIndex = 0;

document.addEventListener('keydown', (e) => {
    const key = e.key.toLowerCase();
    
    // Konami Code Logic
    if (key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser) {
                if (!currentUser.inventory) currentUser.inventory = { auras: [] };
                if (!currentUser.inventory.auras.includes('aura-secret-nature')) {
                    currentUser.inventory.auras.push('aura-secret-nature');
                    localStorage.setItem('currentUser', JSON.stringify(currentUser));
                    checkAchievement('secret_nature');
                    alert('✨ ¡Secreto desbloqueado! Has obtenido el aura Life Cycle');
                }
            }
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }

    // Zafkiel Code Logic (Easter Egg)
    if (key === zafkielCode[zafkielIndex]) {
        zafkielIndex++;
        if (zafkielIndex === zafkielCode.length) {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (currentUser) {
                // Unlock and Equip Bride of Time
                if (!currentUser.inventory) currentUser.inventory = { auras: [] };
                if (!currentUser.inventory.auras.includes('aura-bride-time')) {
                    currentUser.inventory.auras.push('aura-bride-time');
                }
                currentUser.equippedAura = 'aura-bride-time';
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                
                // Sync to Firestore to ensure it persists
                try {
                    const userRef = doc(db, 'users', currentUser.id);
                    updateDoc(userRef, {
                        inventory: currentUser.inventory,
                        equippedAura: 'aura-bride-time'
                    });
                } catch(e) { console.error(e); }
                
                // Also give the achievement which saves coins and achievement data
                window.checkAchievement('marriage_contract');
                
                // Change Background to Kurumi Theme
                if (window.backgroundManager) {
                    window.backgroundManager.setCustomBackground('https://i.pinimg.com/originals/3f/1f/27/3f1f274a2cc46f1cb6dc948b89410ea8.gif');
                }

                // Restart cosmetic effects to show new aura instantly
                if (window.cosmeticEffects) {
                    const event = new CustomEvent('auraChanged', { detail: { auraId: 'aura-bride-time' } });
                    window.dispatchEvent(event);
                }
                
                if(window.showGlobalToast) {
                    window.showGlobalToast('Zafkiel: El Tiempo se Detiene', 'Ara ara... ¿así que invocaste mi nombre? El tiempo ahora nos pertenece.', 'success');
                }
            }
            zafkielIndex = 0;
        }
    } else {
        zafkielIndex = 0;
    }
});
