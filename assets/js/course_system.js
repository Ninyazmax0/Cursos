// ==========================================
// SISTEMA DE QUIZSCORES Y CHALLENGEMAP
// Para Ruby Course
// ==========================================

// Guardar puntuación del quiz
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
            // 1. Obtener historial actual de Firestore (SSOT)
            const userDoc = await window.getUserFromFirestore(currentUser.id);
            let history = userDoc.quizHistory || [];
            
            // 2. Agregar nuevo intento
            history.push(newEntry);
            
            // 3. Guardar en Firestore
            // Usamos updateCourseProgress como un helper genérico para actualizar un campo del usuario
            // En este caso el 'courseKey' es 'quizHistory'
            await window.updateCourseProgress(currentUser.id, 'quizHistory', history);
            console.log('✅ Quiz Score saved to Firestore History');
            
        } catch (e) {
            console.error('❌ Error saving quiz history to Firestore:', e);
        }
    } else {
        console.warn('⚠️ Firebase helpers not found. Quiz history not saved.');
    }
}

// Mostrar botón de challenge
function showChallengeButton(challengeId, resultsMessageElement) {
    // Verificar si ya existe un botón de challenge
    const existingBtn = document.querySelector('.challenge-btn');
    if (existingBtn) existingBtn.remove();
    
    const challengeBtn = document.createElement('button');
    challengeBtn.className = 'btn-primary mt-4 challenge-btn';
    challengeBtn.innerHTML = '<i data-lucide="zap"></i> ¡Ir al Desafío!';
    challengeBtn.onclick = () => window.location.href = `challenges/engine.html?id=${challengeId}`;
    
    resultsMessageElement.insertAdjacentElement('afterend', challengeBtn);
    
    // Reinicializar iconos de Lucide
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Verificar y mostrar challenge si corresponde
function checkAndShowChallenge(levelNumber, challengeMap) {
    if (challengeMap[levelNumber]) {
        const resultsMessage = document.getElementById('results-message');
        if (resultsMessage) {
            showChallengeButton(challengeMap[levelNumber], resultsMessage);
        }
    }
}
