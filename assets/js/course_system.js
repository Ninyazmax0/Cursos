// ==========================================
// SISTEMA DE QUIZSCORES & NEXT LEVEL
// Sistema Universal para todos los cursos
// ==========================================

// Guardar puntuación del quiz en Firestore (Historial por intento)
async function saveQuizScore(score, total, courseId, levelNumber) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (!currentUser.id) return;

    const newEntry = {
        courseId: courseId,
        level: levelNumber,
        score: score,
        total: total,
        percentage: Math.round((score / total) * 100),
        date: new Date().toISOString()
    };

    if (window.getUserFromFirestore && window.updateCourseProgress) {
        try {
            const userDoc = await window.getUserFromFirestore(currentUser.id);
            let history = userDoc.quizHistory || [];
            history.push(newEntry);
            await window.updateCourseProgress(currentUser.id, 'quizHistory', history);
            console.log(` Quiz Score saved for ${courseId} Lvl ${levelNumber}`);
        } catch (e) {
            console.error(' Error saving quiz history:', e);
        }
    }
}

// ===== BOTÓN SIGUIENTE NIVEL =====
// Muestra el botón "Siguiente Nivel" en el panel de resultados
function showNextLevelButton(currentLevelIndex) {

    
    const nextBtn = document.getElementById('next-level-btn');
    if (!nextBtn) return;

    // Verificar si existe un nivel siguiente
    const totalLevels = window.courseData ? window.courseData.length : 20;
    if (currentLevelIndex < totalLevels - 1) {
        nextBtn.classList.remove('hidden');
        nextBtn.style.display = 'flex';
        nextBtn.innerHTML = `Nivel ${currentLevelIndex + 2} <i data-lucide="arrow-right" class="w-4 h-4"></i>`;
        nextBtn.onclick = () => {
            if (window.startLevel) {
                window.startLevel(currentLevelIndex + 1);
            } else {
                if (window.showPanel) window.showPanel('levelSelection');
            }
        };
        if (typeof lucide !== 'undefined') lucide.createIcons();
    } else {
        // Último nivel - mensaje especial
        nextBtn.classList.remove('hidden');
        nextBtn.style.display = 'flex';
        nextBtn.innerHTML = ` ¡Curso Completado! <i data-lucide="check-circle" class="w-4 h-4"></i>`;
        nextBtn.onclick = () => { if (window.showPanel) window.showPanel('levelSelection'); };
        nextBtn.classList.remove('btn-primary');
        nextBtn.classList.add('btn-success');
        if (typeof lucide !== 'undefined') lucide.createIcons();
        
        // Disparar logro de curso maestro al ver este boton 
        try {
            if (window.COURSE_ID) {
                import('./achievements.js').then(m => {
                    if (window.COURSE_ID === 'python') m.checkAchievement('python_master');
                    if (window.COURSE_ID === 'ruby') m.checkAchievement('ruby_master');
                    if (window.COURSE_ID === 'web') m.checkAchievement('web_master');
                    if (window.COURSE_ID === 'database') m.checkAchievement('db_master');
                });
            }
        } catch(e){}
    }
    
    // Logros de niveles intermedios
    try {
        import('./achievements.js').then(m => {
            if (currentLevelIndex === 4) m.checkAchievement('novice_dev');
            if (currentLevelIndex === 9) m.checkAchievement('half_way');
            if (currentLevelIndex === 14) {
                if (window.COURSE_ID === 'ruby') m.checkAchievement('ruby_expert');
                if (window.COURSE_ID === 'web') m.checkAchievement('web_expert');
                if (window.COURSE_ID === 'database') m.checkAchievement('db_expert');
            }
        });
    } catch(e){}
}

// Global Achievement hook for Quiz Genius (10/10)
window.tryAwardQuizGenius = async function() {
    try {
        const m = await import('./achievements.js');
        m.checkAchievement('quiz_genius');
    } catch(e){}
};

// Global achievement hook for Sanbox
window.tryAwardSandboxExplorer = async function() {
    try {
        const m = await import('./achievements.js');
        m.checkAchievement('sandbox_explorer');
    } catch(e){}
};
