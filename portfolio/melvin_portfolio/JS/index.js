(function(){
      const container = document.querySelector('.hero-right');
      if(!container) return;
      container.addEventListener('mousemove', (e)=>{
        const r = container.getBoundingClientRect();
        const dx = (e.clientX - (r.left + r.width/2)) / r.width;
        const dy = (e.clientY - (r.top + r.height/2)) / r.height;
        const char = container.querySelector('.char');
        char.style.transform = `translate(${dx*12}px,${dy*10}px) rotate(-6deg)`;
      });
      container.addEventListener('mouseleave', ()=>{
        const char = container.querySelector('.char');
        char.style.transform = 'rotate(-6deg)';
      });
    })();

document.addEventListener('DOMContentLoaded', function() {
  const musiqueCard = document.querySelector('.card2');
  if (!musiqueCard) {
    console.error('Le bloc "Musique" (.card2) est introuvable.');
    return;
  }

  const audio = new Audio('../MUSIC/musique-46.mp3');
  audio.addEventListener('error', function(e) {
    console.error('Erreur de chargement audio :', e);
  });

  function playMusic() {
    audio.currentTime = 0;
    audio.play().catch(e => console.error('Erreur de lecture :', e));
  }

  function stopMusic() {
    audio.pause();
    audio.currentTime = 0;
  }

  musiqueCard.addEventListener('mouseover', playMusic);
  musiqueCard.addEventListener('mouseout', stopMusic);
});
