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
    const images = document.querySelectorAll(".project-image img, .project-image-full img");
    // Ne pas instancier la lightbox si aucune image zoomable n'est présente sur la page
    if (!images.length) return;

    const lightbox = document.createElement("div");
    lightbox.className = "lightbox-overlay";
    lightbox.setAttribute("role", "dialog");
    lightbox.setAttribute("aria-modal", "true");
    lightbox.setAttribute("aria-label", "Aperçu agrandi de l'image");
    lightbox.setAttribute("aria-hidden", "true");
    lightbox.style.cssText = "position: fixed; top: 0; left: 0;";
    
    const lightboxImage = document.createElement("img");
    lightboxImage.alt = "Aperçu agrandi du projet";
    lightbox.appendChild(lightboxImage);
    document.body.appendChild(lightbox);

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImage.src = img.src;
            lightboxImage.alt = img.alt || "Aperçu agrandi du projet";
            lightbox.classList.add("active");
            lightbox.setAttribute("aria-hidden", "false");
        });
    });

    const closeLightbox = () => {
        lightbox.classList.remove("active");
        lightbox.setAttribute("aria-hidden", "true");
    };

    lightbox.addEventListener("click", closeLightbox);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && lightbox.classList.contains("active")) {
            closeLightbox();
        }
    });
});
