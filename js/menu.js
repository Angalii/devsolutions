document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    const toggle = document.querySelector('.menu-toggle');

    if (!navbar || !toggle) return;

    const closeMenu = () => {
        navbar.classList.remove('nav-open');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('menu-open');
    };

    toggle.addEventListener('click', () => {
        const isOpen = navbar.classList.toggle('nav-open');
        toggle.classList.toggle('active', isOpen);
        toggle.setAttribute('aria-expanded', String(isOpen));

        if (isOpen) {
            document.body.classList.add('menu-open');
        } else {
            document.body.classList.remove('menu-open');
        }
    });

    navbar.querySelectorAll('.nav-links a, .btn-nav').forEach((link) => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('click', (event) => {
        if (!navbar.contains(event.target)) {
            closeMenu();
        }
    });
});
