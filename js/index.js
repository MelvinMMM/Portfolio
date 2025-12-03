(function () {
  const switchBtn = document.getElementById('mode-switch');
  const body = document.body;

  const THEME_KEY = 'mm_theme_mode';
  const TRANSITION_CLASS = 'theme-transition';

  const sonicMusic = new Audio('music/musique-46.mp3');
  sonicMusic.loop = true;

  const ringSound = new Audio('music/ring_sound.mp3');

  sonicMusic.volume = 0.7;    
  ringSound.volume = 0.1;      


  let ringInterval = null;
  const ringImages = ['img/ring1.png', 'img/ring2.png', 'img/ring3.gif', 'img/ring4.gif', 'img/ring5.gif'];

  function spawnRing() {
    const ring = document.createElement('img');
    ring.src = ringImages[Math.floor(Math.random() * ringImages.length)];
    ring.classList.add('falling-ring');
    ring.style.left = Math.random() * 100 + 'vw';
    ring.style.transform = `rotate(${Math.random() * 360}deg)`;

    document.body.appendChild(ring);

    ring.addEventListener('animationend', () => ring.remove());
  }

  function startRings() {
    if (!ringInterval) {
      ringInterval = setInterval(spawnRing, 250);
    }
  }

  function stopRings() {
    clearInterval(ringInterval);
    ringInterval = null;

    document.querySelectorAll('.falling-ring').forEach(r => r.remove());
  }

  function enableTransition() {
    body.classList.add(TRANSITION_CLASS);
    setTimeout(() => body.classList.remove(TRANSITION_CLASS), 600);
  }

  function setMode(mode, save = true) {
    enableTransition();

    if (mode === 'sonic') {
      body.classList.add('sonic-mode');

      switchBtn.textContent = '💻 Mode Tech';
      switchBtn.setAttribute('aria-pressed', 'true');

      ringSound.play();
      sonicMusic.play().catch(() => { });
      startRings();

    } else {
      body.classList.remove('sonic-mode');

      switchBtn.textContent = '🌀 Mode Sonic';
      switchBtn.setAttribute('aria-pressed', 'false');

      sonicMusic.pause();
      sonicMusic.currentTime = 0;
      stopRings();
    }

    if (save) localStorage.setItem(THEME_KEY, mode);
  }

  switchBtn.addEventListener('click', () => {
    const current = localStorage.getItem(THEME_KEY) || 'tech';
    const next = current === 'tech' ? 'sonic' : 'tech';
    setMode(next);
  });

  const saved = localStorage.getItem(THEME_KEY) || 'tech';
  setMode(saved, false);

})();
