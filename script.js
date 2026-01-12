document.addEventListener('DOMContentLoaded', () => {
    // Scroll Reveal Interaction
    const revealElements = document.querySelectorAll('.scroll-reveal');
    
    const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        const elementVisible = 150;
        
        revealElements.forEach((reveal) => {
            const elementTop = reveal.getBoundingClientRect().top;
            if (elementTop < windowHeight - elementVisible) {
                reveal.classList.add('visible');
            } else {
                reveal.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Trigger once on load

    // Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-white/10', 'backdrop-blur-md', 'shadow-2xl', 'py-2');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.remove('bg-white/10', 'backdrop-blur-md', 'shadow-2xl', 'py-2');
            navbar.classList.add('py-4');
        }
    });

    // Tab Switching Logic (Fixed)
    window.switchTab = (tabId) => {
        // Hide all content
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // Show target content
        const targetContent = document.getElementById(tabId);
        if (targetContent) {
            targetContent.classList.add('active');
        } else {
            console.error(`Tab content with ID '${tabId}' not found.`);
            return;
        }

        // Update buttons
        document.querySelectorAll('.tab-button').forEach(btn => {
            btn.classList.remove('active');
            // Check based on data-tab attribute for robustness
            if (btn.getAttribute('data-tab') === tabId) {
                btn.classList.add('active');
            }
        });

        // Smooth scroll to top of main content
        const main = document.querySelector('main');
        if (main) {
            main.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };
});
