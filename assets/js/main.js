// Mobile menu toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// FAQ toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const faqToggles = document.querySelectorAll('.faq-toggle');
    
    faqToggles.forEach(toggle => {
        // Set initial state
        const content = toggle.nextElementSibling;
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        
        // Add click event
        toggle.addEventListener('click', () => {
            const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
            
            // Toggle aria-expanded
            toggle.setAttribute('aria-expanded', !isExpanded);
            
            // Toggle content visibility
            if (isExpanded) {
                content.classList.remove('show');
            } else {
                // Close other open FAQs
                document.querySelectorAll('.faq-content.show').forEach(openContent => {
                    if (openContent !== content) {
                        openContent.classList.remove('show');
                        const openToggle = openContent.previousElementSibling;
                        if (openToggle) {
                            openToggle.setAttribute('aria-expanded', 'false');
                        }
                    }
                });
                content.classList.add('show');
            }
        });
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        }
    });
});

// Form submission handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        // Add your form submission logic here
        alert('Grazie per il tuo messaggio! Ti risponderemo al più presto.');
        this.reset();
    });
}

// Special licenses content
document.addEventListener('DOMContentLoaded', function() {
    const specialLicensesContainer = document.getElementById('special-licenses-container');
    if (specialLicensesContainer) {
        fetch('special-licenses.html')
            .then(response => {
                if (!response.ok) throw new Error('Network response was not ok');
                return response.text();
            })
            .then(html => {
                specialLicensesContainer.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading special licenses:', error);
                specialLicensesContainer.innerHTML = '<p class="text-red-500">Impossibile caricare le licenze speciali. Si prega di riprovare più tardi.</p>';
            });
    }
});
