document.addEventListener('DOMContentLoaded', () => {
    // Intersection Observer for scroll animations
    const faders = document.querySelectorAll('.fade-in, .slide-up');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Add click event logic to call/whatsapp buttons for tracking or confirmation if needed
    const whatsappBtns = document.querySelectorAll('.wa-btn, .btn-whatsapp, .floating-whatsapp');
    whatsappBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Optional: you can add analytics here
            console.log('WhatsApp button clicked');
        });
    });

    // Check if fonts are loaded to ensure correct layout and rendering cache
    document.fonts.ready.then(function() {
        console.log('Fonts loaded successfully.');
    });

    // Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const themeIcon = themeToggle.querySelector('i');

    // Load saved theme or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        htmlElement.setAttribute('data-theme', 'dark');
        updateThemeIcon(true);
    }

    themeToggle.addEventListener('click', () => {
        const isDark = htmlElement.getAttribute('data-theme') === 'dark';
        if (isDark) {
            htmlElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            updateThemeIcon(false);
        } else {
            htmlElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            updateThemeIcon(true);
        }
    });

    function updateThemeIcon(isDark) {
        if (isDark) {
            themeIcon.className = 'fas fa-sun';
        } else {
            themeIcon.className = 'fas fa-moon';
        }
    }
});
