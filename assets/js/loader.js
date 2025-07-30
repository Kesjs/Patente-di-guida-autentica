// Loader configuration
const LOADER_MIN_DISPLAY_TIME = 8000; // 8 seconds in milliseconds

// Create loader elements immediately
const loaderOverlay = document.createElement('div');
loaderOverlay.className = 'loader-overlay';
loaderOverlay.style.display = 'flex';
loaderOverlay.style.opacity = '1';
loaderOverlay.style.visibility = 'visible';

const loaderContainer = document.createElement('div');
loaderContainer.className = 'flex flex-col items-center justify-center';

// Add logo
const logo = document.createElement('img');
logo.src = 'https://patentediguida.org/wp-content/uploads/2024/08/Patente-Di-Guida-Logo.jpg';
logo.alt = 'Patente Autentica';
logo.className = 'loader-logo rounded-full border-4 border-white shadow-lg';

// Add loader animation
const loader = document.createElement('div');
loader.className = 'loader';
loader.innerHTML = `
    <div></div>
    <div></div>
    <div></div>
`;

// Add loading text
const loaderText = document.createElement('div');
loaderText.className = 'loader-text';
loaderText.textContent = 'Caricamento...';

// Assemble loader
loaderContainer.appendChild(loader);
loaderContainer.appendChild(loaderText);
loaderOverlay.appendChild(logo);
loaderOverlay.appendChild(loaderContainer);

// Add loader to body immediately
document.documentElement.style.overflow = 'hidden'; // Prevent scrolling while loading
document.body.prepend(loaderOverlay);

// Track when we started showing the loader
const loaderStartTime = Date.now();

// Function to hide loader
function hideLoader() {
    const elapsedTime = Date.now() - loaderStartTime;
    const remainingTime = Math.max(0, LOADER_MIN_DISPLAY_TIME - elapsedTime);
    
    // Wait until minimum display time has passed
    setTimeout(() => {
        loaderOverlay.style.opacity = '0';
        loaderOverlay.style.visibility = 'hidden';
        document.documentElement.style.overflow = ''; // Re-enable scrolling
        
        // Remove loader from DOM after animation completes
        setTimeout(() => {
            if (loaderOverlay.parentNode === document.body) {
                document.body.removeChild(loaderOverlay);
            }
        }, 800); // Match this with CSS transition time
    }, remainingTime);
}

// Hide loader when page is fully loaded
if (document.readyState === 'complete') {
    hideLoader();
} else {
    window.addEventListener('load', hideLoader);
    
    // Fallback in case load event doesn't fire
    setTimeout(hideLoader, LOADER_MIN_DISPLAY_TIME + 2000);
}

// Handle browser back/forward navigation
window.addEventListener('pageshow', function(event) {
    // If the page is loaded from the bfcache, force reload to show loader
    if (event.persisted) {
        window.location.reload();
    }
});

// Prevent form submissions from bypassing the loader
const forms = document.querySelectorAll('form');
forms.forEach(form => {
    form.addEventListener('submit', () => {
        if (loaderOverlay.parentNode !== document.body) {
            document.body.prepend(loaderOverlay);
            loaderOverlay.style.display = 'flex';
            loaderOverlay.style.opacity = '1';
            loaderOverlay.style.visibility = 'visible';
            document.documentElement.style.overflow = 'hidden';
        }
    });
});
