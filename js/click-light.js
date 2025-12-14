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
