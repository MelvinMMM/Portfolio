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
    const lightbox = document.createElement("div");
    lightbox.className = "lightbox-overlay";
    style = `
        top: 0;
    `;
    lightbox.style.cssText = style;
    
    const lightboxImage = document.createElement("img");
    lightbox.appendChild(lightboxImage);
    document.body.appendChild(lightbox);

    const images = document.querySelectorAll(".project-image img, .project-image-full img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImage.src = img.src;
            lightbox.classList.add("active");
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("active");
    });
});
