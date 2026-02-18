  const burger = document.querySelector('.burger');
  const nav = document.querySelector('.nav');

  burger.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    burger.classList.toggle('active');
    burger.setAttribute('aria-expanded', isOpen);
  });
