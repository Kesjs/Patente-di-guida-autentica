// Gestion du menu mobile et des modales
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modalContent');
    
    // Basculer le menu mobile
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', function() {
            if (mobileMenu.style.display === 'none' || !mobileMenu.style.display) {
                mobileMenu.style.display = 'block';
                this.innerHTML = '<i class="fas fa-times"></i>';
            } else {
                mobileMenu.style.display = 'none';
                this.innerHTML = '<i class="fas fa-bars"></i>';
            }
        });
        
        // Fermer le menu quand on clique sur un lien
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                mobileMenu.style.display = 'none';
                mobileMenuButton.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });
    }
    
    // Gestion des liens de navigation avec smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            
            // Ne pas empêcher le comportement par défaut pour les liens qui ouvrent des modales
            if (href.startsWith('#') && !this.classList.contains('modal-link')) {
                e.preventDefault();
                
                const targetId = href;
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Gestion des liens de modales
    document.querySelectorAll('a[data-modal]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const modalFile = this.getAttribute('data-modal');
            openModal(modalFile);
        });
    });
    
    // Fermer la modale en cliquant en dehors du contenu
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Fermer avec la touche Échap
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Fonction pour ouvrir une modale
    function openModal(modalFile) {
        fetch(modalFile)
            .then(response => response.text())
            .then(html => {
                modalContent.innerHTML = html;
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Empêcher le défilement de la page
                
                // Ajouter un écouteur sur le bouton de fermeture
                const closeButton = modalContent.querySelector('button[onclick="closeModal()"]');
                if (closeButton) {
                    closeButton.addEventListener('click', closeModal);
                }
            })
            .catch(error => {
                console.error('Erreur lors du chargement de la modale:', error);
                modalContent.innerHTML = `
                    <div class="p-6">
                        <h2 class="text-2xl font-bold text-gray-800 mb-4">Erreur</h2>
                        <p class="text-gray-700">Impossible de charger le contenu. Veuillez réessayer plus tard.</p>
                        <div class="mt-6">
                            <button onclick="closeModal()" class="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
                                Fermer
                            </button>
                        </div>
                    </div>`;
                modal.classList.add('active');
            });
    }
    
    // Fonction pour fermer la modale
    window.closeModal = function() {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto'; // Rétablir le défilement de la page
        // Petit délai pour laisser l'animation se terminer avant de vider le contenu
        setTimeout(() => {
            modalContent.innerHTML = '';
        }, 300);
    };
    
    // Chargement dynamique des cartes de permis spéciaux
    fetch('special-licenses.html')
        .then(response => response.text())
        .then(html => {
            const container = document.getElementById('special-licenses-container');
            if (container) {
                container.innerHTML = html;
            }
        })
        .catch(error => {
            console.error('Erreur lors du chargement des cartes de permis spéciaux:', error);
        });
});
