// ==========================================
// SISTEMA DE QUIZSCORES
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

    // Intentar usar las funciones globales de Firebase si están disponibles
    if (window.getUserFromFirestore && window.updateCourseProgress) {
        try {
            const userDoc = await window.getUserFromFirestore(currentUser.id);
            let history = userDoc.quizHistory || [];
            history.push(newEntry);
            await window.updateCourseProgress(currentUser.id, 'quizHistory', history);
            console.log(`✅ Quiz Score saved for ${courseId} Lvl ${levelNumber}`);
        } catch (e) {
            console.error('❌ Error saving quiz history:', e);
        }
    }
}

// Mostrar botón de challenge si corresponde
function showChallengeButton(challenge, resultsMessageElement) {
    const challengeBtn = document.getElementById('code-challenge-btn');
    const nextBtn = document.getElementById('next-level-btn');
    if (challengeBtn) {
        challengeBtn.classList.remove('hidden');
        challengeBtn.onclick = () => {
            window.location.href = challenge.url;
        };
        if (nextBtn) nextBtn.classList.add('hidden');
    } else {
        resultsMessageElement.insertAdjacentElement('afterend', challengeBtn);
    }

    if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Verificar y mostrar challenge si corresponde
function checkAndShowChallenge(levelIndex, challengeMap) {
    const challenge = challengeMap[levelIndex];
    if (challenge) {
        const resultsMessage = document.getElementById('results-message');
        if (resultsMessage) {
            showChallengeButton(challenge, resultsMessage);
        }
    }
}
