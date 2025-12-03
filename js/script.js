document.querySelectorAll('.project-card').forEach((card, i) => {
    card.style.opacity = 0;
    setTimeout(() => {
        card.style.transition = 'opacity 0.5s ease-in';
        card.style.opacity = 1;
    }, 100 * i);
});
