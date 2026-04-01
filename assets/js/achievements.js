/**
 * Achievements System for Status Code 418
 * Contains definitions and tracking logic.
 */

import { doc, updateDoc, getDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { db } from "./firebase-config.js";

// === ACHIEVEMENT DEFINITIONS ===
export const achievements = [
    // --- BASICS ---
    { id: 'first_login', name: 'Hola Mundo', desc: 'Inicia sesión por primera vez.', hint: 'El primer paso siempre es el más difícil.', rarity: 'common', icon: 'log-in' },
    { id: 'first_blood', name: 'First Blood', desc: 'Completa el Nivel 1 de cualquier curso.', hint: 'Supera el primer cuestionario.', rarity: 'common', icon: 'sword' },
    
    // --- COURSES ---
    { id: 'polyglot_starter', name: 'Políglota Curioso', desc: 'Inicia los 4 cursos.', hint: 'Python, Ruby, Web, DB... ¿por qué elegir?', rarity: 'common', icon: 'languages' },
    { id: 'half_way', name: 'A Medio Camino', desc: 'Alcanza el Nivel 10 de cualquier curso.', hint: 'Ya estás entendiendo la lógica de los lenguajes.', rarity: 'rare', icon: 'zap' },
    
    { id: 'web_master', name: 'Lord of the DOM', desc: 'Completa el curso de Desarrollo Web.', hint: 'Domina el HTML y CSS.', rarity: 'epic', icon: 'globe' },
    { id: 'python_master', name: 'Parsel Tongue', desc: 'Completa el curso de Python.', hint: 'Habla con las serpientes.', rarity: 'epic', icon: 'code-2' },
    { id: 'ruby_master', name: 'Gem Collector', desc: 'Completa el curso de Ruby.', hint: 'Brilla como un rubí.', rarity: 'epic', icon: 'gem' },
    { id: 'db_master', name: 'Query King', desc: 'Completa el curso de Bases de Datos.', hint: 'SELECT * FROM knowledge.', rarity: 'epic', icon: 'database' },
    
    // --- EXPERT ---
    { id: 'sandbox_explorer', name: 'Hacker de Sandbox', desc: 'Abre el entorno de pruebas Sandbox.', hint: 'Experimentar fuera del curso.', rarity: 'rare', icon: 'terminal' },
    { id: 'quiz_genius', name: 'Cerebro Supremo', desc: 'Consigue 10/10 puntos en el Examen Final (Nivel 20).', hint: 'No margen de error en el nivel definitivo.', rarity: 'legendary', icon: 'brain' },
    { id: 'profile_updated', name: 'Nueva Identidad', desc: 'Cambiarse el nombre desde el Perfil.', hint: 'Reinventarse.', rarity: 'common', icon: 'user-cog' },

    // --- DIVINE ACHIEVEMENTS (Founders) ---
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
    // 4. FOUNDER STALKER CHECK
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
}
