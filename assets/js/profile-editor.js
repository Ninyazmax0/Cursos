// ========================================
// EDITOR DE PERFILES - Profile Editing System
// ========================================
// Sistema para editar bio, tags y redes sociales de usuarios

import { db } from './firebase-config.js';
import { doc, updateDoc, getDoc } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js';

// Mostrar modal de edición
export function openEditProfileModal(userData) {
    const modalHTML = `
        <div id="edit-profile-modal" class="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div class="bg-card-background rounded-2xl border border-border max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div class="p-6 border-b border-border flex justify-between items-center sticky top-0 bg-card-background">
                    <h2 class="text-2xl font-bold text-white">Editar Perfil</h2>
                    <button onclick="closeEditProfileModal()" class="p-2 hover:bg-background rounded-lg">
                        <i data-lucide="x" class="w-6 h-6"></i>
                    </button>
                </div>
                
                <form id="edit-profile-form" class="p-6 space-y-6">
                    <!-- Bio -->
                    <div>
                        <label class="block text-sm font-medium text-gray-400 mb-2">Biografía</label>
                        <textarea
                            id="edit-bio"
                            maxlength="200"
                            rows="3"
                            class="w-full px-4 py-2 bg-background border border-border rounded-lg text-foreground resize-none"
                            placeholder="Cuéntanos sobre ti..."
                        >${userData.bio || ''}</textarea>
                        <p class="text-xs text-gray-500 mt-1"><span id="bio-count">0</span>/200 caracteres</p>
                    </div>
                    
                    <!-- Tags -->
                    <div>
                        <label class="block text-sm font-medium text-gray-400 mb-2">Etiquetas (máx 5)</label>
                        <div id="tags-container" class="flex flex-wrap gap-2 mb-2">
                            ${(userData.tags || []).map(tag => `
                                <span class="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm flex items-center gap-2">
                                    ${tag}
                                    <button type="button" onclick="removeTag('${tag}')" class="hover:text-red-400">
                                        <i data-lucide="x" class="w-3 h-3"></i>
                                    </button>
                                </span>
                            `).join('')}
                        </div>
                        <div class="flex gap-2">
                            <input
                                type="text"
                                id="new-tag-input"
                                maxlength="20"
                                class="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground"
                                placeholder="Ej: Frontend, Python..."
                            >
                            <button type="button" onclick="addTag()" class="px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark">
                                Agregar
                            </button>
                        </div>
                    </div>
                    
                    <!-- Avatar URL (Solución CORS) -->
                    <div>
                        <label class="block text-sm font-medium text-gray-400 mb-2">URL de Avatar Manual</label>
                        <p class="text-xs text-gray-500 mb-2">Si la subida falla, pega aquí un link directo a tu imagen (ej: GitHub, Imgur)</p>
                        <div class="flex items-center gap-2">
                             <img id="avatar-preview-small" src="${userData.avatar}" class="w-10 h-10 rounded-full border border-border">
                             <input
                                type="url"
                                id="edit-avatar-url"
                                value="${userData.avatar && userData.avatar.startsWith('http') ? userData.avatar : ''}"
                                class="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground"
                                placeholder="https://ejemplo.com/mifoto.png"
                            >
                        </div>
                    </div>

                    <!-- Social Links -->
                    <div>
                        <label class="block text-sm font-medium text-gray-400 mb-3">Redes Sociales</label>
                        <div class="space-y-3">
                            <div class="flex items-center gap-2">
                                <i data-lucide="github" class="w-5 h-5 text-gray-400"></i>
                                <input
                                    type="text"
                                    id="edit-github"
                                    value="${userData.socialLinks?.github || ''}"
                                    class="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground"
                                    placeholder="username"
                                >
                            </div>
                            <div class="flex items-center gap-2">
                                <i data-lucide="instagram" class="w-5 h-5 text-gray-400"></i>
                                <input
                                    type="text"
                                    id="edit-instagram"
                                    value="${userData.socialLinks?.instagram || ''}"
                                    class="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground"
                                    placeholder="username"
                                >
                            </div>
                            <div class="flex items-center gap-2">
                                <i data-lucide="twitter" class="w-5 h-5 text-gray-400"></i>
                                <input
                                    type="text"
                                    id="edit-twitter"
                                    value="${userData.socialLinks?.twitter || ''}"
                                    class="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground"
                                    placeholder="username"
                                >
                            </div>
                            <div class="flex items-center gap-2">
                                <i data-lucide="linkedin" class="w-5 h-5 text-gray-400"></i>
                                <input
                                    type="text"
                                    id="edit-linkedin"
                                    value="${userData.socialLinks?.linkedin || ''}"
                                    class="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground"
                                    placeholder="username"
                                >
                            </div>
                            <div class="flex items-center gap-2">
                                <i data-lucide="link" class="w-5 h-5 text-gray-400"></i>
                                <input
                                    type="url"
                                    id="edit-website"
                                    value="${userData.socialLinks?.website || ''}"
                                    class="flex-1 px-4 py-2 bg-background border border-border rounded-lg text-foreground"
                                    placeholder="https://..."
                                >
                            </div>
                        </div>
                    </div>
                    
                    <!-- Actions -->
                    <div class="flex gap-3 pt-4">
                        <button
                            type="submit"
                            class="flex-1 px-6 py-3 bg-accent text-white rounded-lg font-semibold hover:bg-accent-dark"
                        >
                            Guardar Cambios
                        </button>
                        <button
                            type="button"
                            onclick="closeEditProfileModal()"
                            class="px-6 py-3 bg-background text-gray-400 rounded-lg font-semibold hover:text-white"
                        >
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Contador de bio
    const bioTextarea = document.getElementById('edit-bio');
    const bioCount = document.getElementById('bio-count');
    bioCount.textContent = bioTextarea.value.length;
    bioTextarea.addEventListener('input', () => {
        bioCount.textContent = bioTextarea.value.length;
    });
    
    // Form submit
    document.getElementById('edit-profile-form').addEventListener('submit', async (e) => {
        e.preventDefault();
        await saveProfileChanges(userData.id);
    });
    
    // Re-init lucide icons
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Cerrar modal
window.closeEditProfileModal = function() {
    const modal = document.getElementById('edit-profile-modal');
    if (modal) modal.remove();
};

// Agregar tag
let currentTags = [];
window.addTag = function() {
    const input = document.getElementById('new-tag-input');
    const tag = input.value.trim();
    
    if (!tag) return;
    if (currentTags.length >= 5) {
        alert('Máximo 5 etiquetas permitidas');
        return;
    }
    if (currentTags.includes(tag)) {
        alert('Esta etiqueta ya existe');
        return;
    }
    
    currentTags.push(tag);
    input.value = '';
    renderTags();
};

// Remover tag
window.removeTag = function(tag) {
    currentTags = currentTags.filter(t => t !== tag);
    renderTags();
};

// Renderizar tags
export function renderTags() {
    const container = document.getElementById('tags-container');
    if (!container) return console.warn('Tags container not found');

    container.innerHTML = currentTags.map(tag => `
        <span class="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm flex items-center gap-2">
            ${tag}
            <button type="button" onclick="removeTag('${tag}')" class="hover:text-red-400">
                <i data-lucide="x" class="w-3 h-3"></i>
            </button>
        </span>
    `).join('');

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Guardar cambios
export async function saveProfileChanges(userId) {
    const bio = document.getElementById('edit-bio').value.trim();
    const avatarUrl = document.getElementById('edit-avatar-url').value.trim();
    const github = document.getElementById('edit-github').value.trim();
    const instagram = document.getElementById('edit-instagram').value.trim();
    const twitter = document.getElementById('edit-twitter').value.trim();
    const linkedin = document.getElementById('edit-linkedin').value.trim();
    const website = document.getElementById('edit-website').value.trim();
    
    const updatedData = {
        bio,
        tags: currentTags,
        socialLinks: {
            github,
            instagram,
            twitter,
            linkedin,
            website
        },
        // Si hay URL de avatar manual, actualizar también
        ...(avatarUrl ? { avatar: avatarUrl } : {})
    };
    
    try {
        // Actualizar Firebase
        const userRef = doc(db, 'users', userId);
        await updateDoc(userRef, updatedData);
        
        // Actualizar localStorage
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.id === userId) {
            Object.assign(currentUser, updatedData);
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
        }
        
        console.log('✅ Perfil actualizado');
        closeEditProfileModal();
        
        // Recargar página para ver cambios
        window.location.reload();
    } catch (error) {
        console.error('Error al guardar perfil:', error);
        alert('Error al guardar cambios. Intenta de nuevo.');
    }
}

// Inicializar tags del modal
export function initializeModalTags(tags) {
    currentTags = tags || [];
    renderTags();
}
