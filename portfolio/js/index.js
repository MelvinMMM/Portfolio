(function(){
  const switchBtn = document.getElementById('mode-switch');
  const themeLink = document.getElementById('theme-stylesheet');
  const sonicLink = document.getElementById('sonic-stylesheet');
  const body = document.body;

  const THEME_KEY = 'mm_theme_mode';
  const TRANSITION_CLASS = 'theme-transition';

(function(){
  const switchBtn = document.getElementById('mode-switch');
  const body = document.body;
  const THEME_KEY = 'mm_theme_mode';
  const TRANSITION_CLASS = 'theme-transition';

  function enableTransition(){
    body.classList.add(TRANSITION_CLASS);
    setTimeout(()=> body.classList.remove(TRANSITION_CLASS), 600);
  }

  function setMode(mode, save=true){
    enableTransition();
    if(mode === 'sonic'){
      body.classList.add('sonic-mode');
      switchBtn.textContent = '💻 Mode Tech';
      switchBtn.setAttribute('aria-pressed','true');
    } else {
      body.classList.remove('sonic-mode');
      switchBtn.textContent = '🌀 Mode Sonic';
      switchBtn.setAttribute('aria-pressed','false');
    }
    if(save) localStorage.setItem(THEME_KEY, mode);
  }

  switchBtn.addEventListener('click', ()=>{
    const current = localStorage.getItem(THEME_KEY) || 'tech';
    const next = current === 'tech' ? 'sonic' : 'tech';
    setMode(next);
  });

  const saved = localStorage.getItem(THEME_KEY) || 'tech';
  setMode(saved, false);
})();

})();