const fs = require('fs');
const courses = ['python_course.html', 'database_course.html', 'ruby_course.html', 'web_course.html'];

courses.forEach(file => {
    let text = fs.readFileSync(file, 'utf8');

    // 1. In showResults(), award Quiz Genius if score === totalQuestions
    // 2. Award 'first_blood' if currentLevel === 0 and passed
    const resultsHookOld = 'markLevelCompleted(currentLevel);';
    const resultsHookNew = `markLevelCompleted(currentLevel);
        
        // --- ACHIEVEMENTS ---
        try {
            import('./assets/js/achievements.js').then(m => {
                if (currentLevel === 0) m.checkAchievement('first_blood');
                if (score === courseData[currentLevel].quiz.length) m.checkAchievement('quiz_genius');
            });
        } catch(e) {}
`;
    if (text.includes(resultsHookOld) && !text.includes('first_blood')) {
        text = text.replace(resultsHookOld, resultsHookNew);
        console.log(`✅ Hooked achievements in ${file}`);
    }
    
    // Add Sandbox Explorer achievement hook to Sandbox button
    const sandboxBtnOld = `window.open('sandbox.html?lang='`;
    const sandboxBtnNew = `try{window.tryAwardSandboxExplorer?.()}catch(e){}; window.open('sandbox.html?lang='`;
    if (text.includes(sandboxBtnOld) && !text.includes('tryAwardSandboxExplorer')) {
        text = text.replace(sandboxBtnOld, sandboxBtnNew);
        console.log(`✅ Hooked Sandbox Explorer in ${file}`);
    }
    
    fs.writeFileSync(file, text);
});
