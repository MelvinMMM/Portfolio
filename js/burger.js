document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');

    if (!burger || !nav) return;

    const closeNav = () => {
        if (nav.classList.contains('open')) {
            nav.classList.remove('open');
            burger.classList.remove('active');
            burger.setAttribute('aria-expanded', 'false');
            burger.focus();
        }
    };

    burger.addEventListener('click', () => {
        const isOpen = nav.classList.toggle('open');
        burger.classList.toggle('active');
        burger.setAttribute('aria-expanded', String(isOpen));
    });

    // Fermeture à la touche Escape (W3C APG Standard)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && nav.classList.contains('open')) {
            closeNav();
        }
    });

    // Fermeture au clic en dehors du menu
    document.addEventListener('click', (e) => {
        if (nav.classList.contains('open') && !nav.contains(e.target) && !burger.contains(e.target)) {
            nav.classList.remove('open');
            burger.classList.remove('active');
            burger.setAttribute('aria-expanded', 'false');
        }
    });
});
