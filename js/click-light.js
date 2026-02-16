window.addEventListener('mousedown', (event) => {
  const particles = 8;

  for (let i = 0; i < particles; i++) {
    const p = document.createElement('div');
    p.className = 'click-particle';
    p.style.left = `${event.clientX}px`;
    p.style.top = `${event.clientY}px`;

    document.body.appendChild(p);

    const angle = (Math.PI * 2 * i) / particles;
    const distance = 60;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    requestAnimationFrame(() => {
      p.style.transform = `translate(${x}px, ${y}px)`;
      p.style.opacity = '0';
    });

    setTimeout(() => p.remove(), 200);
  }
});

document.addEventListener("DOMContentLoaded", () => {
    // 1. Création de la popup (HTML généré dynamiquement)
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox-overlay";
    
    const lightboxImage = document.createElement("img");
    lightbox.appendChild(lightboxImage);
    document.body.appendChild(lightbox);

    // 2. Cibler les images (Ici, toutes les images dans tes conteneurs .project-image)
    const images = document.querySelectorAll(".project-image img, .project-image-full img");

    // 3. Ajouter l'événement de clic sur chaque image
    images.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImage.src = img.src; // Récupère la source de l'image cliquée
            lightbox.classList.add("active"); // Affiche la popup
        });
    });

    // 4. Fermer la popup quand on clique n'importe où dessus
    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });
});
