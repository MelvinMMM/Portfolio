document.addEventListener('DOMContentLoaded', () => {
    const scrollContainer = document.getElementById('projectScroll');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');

    if (!scrollContainer || !nextBtn || !prevBtn) return;

    // Rendre le carrousel focusable au clavier avec support des flèches directionnelles
    if (!scrollContainer.hasAttribute('tabindex')) {
        scrollContainer.setAttribute('tabindex', '0');
        scrollContainer.setAttribute('role', 'region');
        scrollContainer.setAttribute('aria-label', 'Carrousel de projets connexes. Utilisez les flèches directionnelles gauche et droite pour faire défiler.');
    }

    const getCardWidth = () => {
        const firstCard = scrollContainer.querySelector('.project-preview');
        return firstCard ? firstCard.clientWidth + 24 : 300;
    };

    const updateArrowButtons = () => {
        const scrollLeft = scrollContainer.scrollLeft;
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;

        const isAtStart = scrollLeft <= 5;
        const isAtEnd = scrollLeft >= maxScroll - 5;

        prevBtn.disabled = isAtStart;
        nextBtn.disabled = isAtEnd;
    };

    nextBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
    });

    prevBtn.addEventListener('click', () => {
        scrollContainer.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
    });

    // Support du défilement au clavier via les flèches gauche/droite sur le conteneur
    scrollContainer.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            scrollContainer.scrollBy({ left: getCardWidth(), behavior: 'smooth' });
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            scrollContainer.scrollBy({ left: -getCardWidth(), behavior: 'smooth' });
        }
    });

    scrollContainer.addEventListener('scroll', updateArrowButtons);
    window.addEventListener('resize', updateArrowButtons);

    // Initialisation immédiate de l'état disabled
    updateArrowButtons();
});