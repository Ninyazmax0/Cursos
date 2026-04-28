/**
 * Cosmetic Effects for Status Code 418
 * Adds interactive visual layers like particle cursors based on auras.
 */

class CosmeticEffects {
    constructor() {
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.initialized = false;
        this.equippedAura = localStorage.getItem('equippedAuraCursor') || 'none';
        
        // Listen for aura changes
        window.addEventListener('auraChanged', (e) => {
            this.equippedAura = e.detail.auraId;
            localStorage.setItem('equippedAuraCursor', this.equippedAura);
        });
    }

    init() {
        if (this.initialized) return;
        
        this.canvas = document.createElement('canvas');
        this.canvas.id = 'cosmetic-canvas';
        this.canvas.style.position = 'fixed';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '9999';
        document.body.appendChild(this.canvas);
        
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        
        window.addEventListener('resize', () => this.resize());
        window.addEventListener('mousemove', (e) => this.addParticle(e.clientX, e.clientY));
        
        this.animate();
        this.initialized = true;
        this.lastUpdateTime = 0;
        this.throttleTimer = 0;
        console.log('✨ Cosmetic Effects Initialized (Optimized)');
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    addParticle(x, y) {
        // Optimization: Throttle spawning
        const now = Date.now();
        if (now - this.throttleTimer < 15) return; // More fluid spawn
        this.throttleTimer = now;

        const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
        const aura = user.equippedAura;
        
        if (!aura || aura === 'aura-none') return;

        let color = '#7aa2f7';
        if (aura.includes('moon')) color = '#e2e8f0';
        if (aura.includes('bride')) color = '#ff7ac6'; // Pink for Bride
        if (aura.includes('fire') || aura.includes('magma')) color = '#f7768e';
        if (aura.includes('nature')) color = '#9ece6a';
        if (aura.includes('gold') || aura.includes('time')) color = '#e0af68';
        if (aura.includes('hacker')) color = '#00ff00';

        this.particles.push({
            x, y,
            vx: (Math.random() - 0.5) * 2.5,
            vy: (Math.random() - 0.5) * 2.5,
            size: Math.random() * 3 + 1.5,
            life: 1.0,
            color: color,
            wobble: Math.random() * Math.PI * 2,
            wobbleSpeed: (Math.random() - 0.5) * 0.2
        });
        
        if (this.particles.length > 80) this.particles.shift(); // Reduce max particles but allow more than before
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Add a magical global glow effect
        this.ctx.globalCompositeOperation = 'lighter';
        
        const len = this.particles.length;
        for (let i = len - 1; i >= 0; i--) {
            const p = this.particles[i];
            
            // Add a sine-wave wobble to the movement for a "magic dust" feel
            p.wobble += p.wobbleSpeed;
            p.x += p.vx + Math.cos(p.wobble) * 0.5;
            p.y += p.vy + Math.sin(p.wobble) * 0.5;
            p.life -= 0.02; // Fade slightly slower
            
            // Shrink over time
            p.size = Math.max(0, p.size * 0.98);

            if (p.life <= 0 || p.size <= 0.1) {
                this.particles.splice(i, 1);
                continue;
            }
            
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            
            // Convert life to hex alpha
            let alphaHex = Math.floor(Math.max(0, p.life) * 255).toString(16).padStart(2, '0');
            this.ctx.fillStyle = p.color + alphaHex;
            
            // Glow shadow
            this.ctx.shadowBlur = 15;
            this.ctx.shadowColor = p.color;
            
            this.ctx.fill();
        }
        
        // Reset composite operation to not break other draws (if any)
        this.ctx.globalCompositeOperation = 'source-over';
        this.ctx.shadowBlur = 0;
        
        requestAnimationFrame(() => this.animate());
    }
}

// Global instance
window.cosmeticEffects = new CosmeticEffects();
document.addEventListener('DOMContentLoaded', () => {
    // Check if user has an aura to start the effects
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    if (user.equippedAura && user.equippedAura !== 'aura-none') {
        window.cosmeticEffects.init();
    }
});
