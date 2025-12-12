
// assets/js/theme-manager.js

const AVAILABLE_THEMES = {
    'vs-dark': { name: 'Default Dark', price: 0, locked: false },
    'vs-light': { name: 'Light Mode', price: 0, locked: false },
    'dracula': { 
        name: 'Dracula', 
        price: 500, 
        locked: true,
        colors: { 'editor.background': '#282a36', 'editor.foreground': '#f8f8f2' } 
    },
    'cyberpunk': { 
        name: 'Cyberpunk', 
        price: 1000, 
        locked: true,
        colors: { 'editor.background': '#0f0e17', 'editor.foreground': '#ff00ff' } 
    },
    'matrix': { 
        name: 'Matrix', 
        price: 2000, 
        locked: true,
        colors: { 'editor.background': '#0d0208', 'editor.foreground': '#00ff41' }
    }
};

// Define custom themes in Monaco
function defineCustomThemes() {
    if (!window.monaco) return;

    // Dracula
    monaco.editor.defineTheme('dracula', {
        base: 'vs-dark',
        inherit: true,
        rules: [{ background: '282a36' }],
        colors: {
            'editor.background': '#282a36',
            'editor.foreground': '#f8f8f2',
            'editorCursor.foreground': '#f8f8f0',
            'editor.lineHighlightBackground': '#44475a',
            'editor.selectionBackground': '#44475a'
        }
    });

    // Cyberpunk
    monaco.editor.defineTheme('cyberpunk', {
        base: 'vs-dark',
        inherit: true,
        rules: [{ background: '0f0e17', token: 'keyword', foreground: 'ff00ff' }],
        colors: {
            'editor.background': '#0f0e17',
            'editor.foreground': '#fffffe',
            'editorCursor.foreground': '#ff00ff',
            'editor.lineHighlightBackground': '#2e2f3e',
        }
    });

     // Matrix
     monaco.editor.defineTheme('matrix', {
        base: 'vs-dark',
        inherit: true,
        rules: [{ background: '000000', token: 'string', foreground: '003b00' }],
        colors: {
            'editor.background': '#0d0208',
            'editor.foreground': '#00ff41',
            'editorCursor.foreground': '#008F11',
             'editor.lineHighlightBackground': '#003300',
        }
    });
}

function getUserThemes() {
    const user = JSON.parse(localStorage.getItem('currentUser')) || {};
    return user.unlockedThemes || ['vs-dark', 'vs-light'];
}

function purchaseTheme(themeId) {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (!user) return alert("Debes iniciar sesión.");

    const theme = AVAILABLE_THEMES[themeId];
    if (!theme) return;

    if (user.monedas >= theme.price) {
        user.monedas -= theme.price;
        if (!user.unlockedThemes) user.unlockedThemes = ['vs-dark', 'vs-light'];
        user.unlockedThemes.push(themeId);
        
        // Save logic (Local + potentially Firestore)
        localStorage.setItem('currentUser', JSON.stringify(user));
        if (window.updateUserFirestore) window.updateUserFirestore(user); // Mock function check
        
        alert(`¡Compraste ${theme.name}!`);
        applyTheme(themeId);
        renderStore(); // Refresh UI
    } else {
        alert("No tienes suficientes CodeCoins.");
    }
}

function applyTheme(themeId) {
    if (window.monaco) {
        monaco.editor.setTheme(themeId);
        // Save preference
        const user = JSON.parse(localStorage.getItem('currentUser'));
        if (user) {
            user.preferredTheme = themeId;
            localStorage.setItem('currentUser', JSON.stringify(user));
        }
    }
}

// Render Store UI
function renderStore() {
    const container = document.getElementById('theme-store-list');
    if (!container) return;
    
    const userThemes = getUserThemes();
    const user = JSON.parse(localStorage.getItem('currentUser')) || { monedas: 0 };
    
    // Update coins display
    const coinsDisplay = document.getElementById('store-coins-display');
    if(coinsDisplay) coinsDisplay.textContent = user.monedas || 0;

    container.innerHTML = Object.entries(AVAILABLE_THEMES).map(([id, theme]) => {
        const isUnlocked = userThemes.includes(id);
        const isActive = (user.preferredTheme || 'vs-dark') === id;
        
        return `
            <div class="p-4 border rounded-lg ${isUnlocked ? 'border-green-500/30 bg-green-500/10' : 'border-gray-700 bg-gray-800'} flex justify-between items-center">
                <div>
                    <h4 class="font-bold ${isUnlocked ? 'text-white' : 'text-gray-400'}">${theme.name}</h4>
                    <span class="text-xs text-yellow-400">${theme.price > 0 ? theme.price + ' CC' : 'Gratis'}</span>
                </div>
                ${isActive ? 
                    '<span class="px-3 py-1 bg-green-500 text-black text-xs font-bold rounded">En uso</span>' :
                    isUnlocked ? 
                        `<button onclick="applyTheme('${id}'); renderStore()" class="px-3 py-1 border border-white text-white text-xs rounded hover:bg-white hover:text-black">Equipar</button>` :
                        `<button onclick="purchaseTheme('${id}')" class="px-3 py-1 bg-yellow-500 text-black text-xs rounded hover:bg-yellow-400">Comprar</button>`
                }
            </div>
        `;
    }).join('');
}

// Init
window.themeManager = {
    defineCustomThemes,
    renderStore,
    applyTheme,
    purchaseTheme
};
