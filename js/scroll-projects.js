const scrollContainer = document.getElementById('projectScroll');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

nextBtn.addEventListener('click', () => {
    // On récupère la largeur d'un élément + le gap (24px)
    const cardWidth = scrollContainer.querySelector('.project-preview').clientWidth + 24;
    scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
});

prevBtn.addEventListener('click', () => {
    const cardWidth = scrollContainer.querySelector('.project-preview').clientWidth + 24;
    scrollContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
});

// Optionnel : Désactiver les flèches si on est au bout du scroll
scrollContainer.addEventListener('scroll', () => {
    const scrollLeft = scrollContainer.scrollLeft;
    const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
    
    prevBtn.style.opacity = scrollLeft <= 0 ? "0.3" : "1";
    prevBtn.style.pointerEvents = scrollLeft <= 0 ? "none" : "auto";
    
    nextBtn.style.opacity = scrollLeft >= maxScroll - 5 ? "0.3" : "1";
    nextBtn.style.pointerEvents = scrollLeft >= maxScroll - 5 ? "none" : "auto";
});