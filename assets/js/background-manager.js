/**
 * Background Manager - Sistema de fondo de pantalla local
 * Permite cambiar el fondo de pantalla de todas las páginas usando localStorage
 * No requiere Firebase, todo es local
 */

const DEFAULT_BACKGROUNDS = {
    dark: 'https://i.pinimg.com/originals/4c/23/98/4c2398e6be397bb08b5cb70b2192d730.gif',
    light: 'https://i.pinimg.com/originals/71/f1/b9/71f1b924a56150104ec16828f2d31b7f.gif'
};

class BackgroundManager {
    constructor() {
        this.customBackground = null;
        this.init();
    }

    init() {
        this.initializeCSSVariables();
        this.loadSettings();
        this.applyBackground();
        this.setupThemeListener();
        this.applyToAllPages();
    }

    initializeCSSVariables() {
        document.documentElement.style.setProperty('--bg-day', `url('${DEFAULT_BACKGROUNDS.light}')`);
        document.documentElement.style.setProperty('--bg-night', `url('${DEFAULT_BACKGROUNDS.dark}')`);
        document.documentElement.style.setProperty('--bg-fallback', '#1a1b26');
    }

    loadSettings() {
        try {
            const saved = localStorage.getItem('customBackground');
            if (saved) {
                this.customBackground = JSON.parse(saved);
            }
        } catch (e) {
            console.error('Error loading background settings:', e);
        }
    }

    saveSettings() {
        try {
            localStorage.setItem('customBackground', JSON.stringify(this.customBackground));
        } catch (e) {
            console.error('Error saving background settings:', e);
        }
    }

    applyBackground() {
        const bgDay = document.querySelector('.background-day');
        const bgNight = document.querySelector('.background-night');

        let bgUrl = this.customBackground || DEFAULT_BACKGROUNDS.dark;

        if (bgDay) {
            bgDay.style.backgroundImage = `url('${bgUrl}')`;
        }
        if (bgNight) {
            bgNight.style.backgroundImage = `url('${bgUrl}')`;
        }

        document.documentElement.style.setProperty('--bg-day', `url('${bgUrl}')`);
        document.documentElement.style.setProperty('--bg-night', `url('${bgUrl}')`);
    }

    setCustomBackground(imageData) {
        this.customBackground = imageData;
        this.applyBackground();
        this.applyToAllPages();
        this.saveSettings();
    }

    removeCustomBackground() {
        this.customBackground = null;
        this.applyBackground();
        this.applyToAllPages();
        this.saveSettings();
    }

    hasCustomBackground() {
        return this.customBackground !== null;
    }

    getCustomBackground() {
        return this.customBackground;
    }

    applyToAllPages() {
        if (typeof localStorage !== 'undefined') {
            localStorage.setItem('bgUpdate', Date.now().toString());
        }
    }

    setupThemeListener() {
        let debounceTimer = null;

        const observer = new MutationObserver(() => {
            if (debounceTimer) clearTimeout(debounceTimer);
            debounceTimer = setTimeout(() => {
                this.applyBackground();
            }, 100);
        });

        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['class']
        });
    }
}

const backgroundManager = new BackgroundManager();

window.BackgroundManager = BackgroundManager;
window.backgroundManager = backgroundManager;
window.DEFAULT_BACKGROUNDS = DEFAULT_BACKGROUNDS;
