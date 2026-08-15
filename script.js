document.addEventListener('DOMContentLoaded', () => {
  const nav = document.querySelector('.nav-universe');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      nav.style.background = 'rgba(17, 19, 33, 0.92)';
      nav.style.borderColor = 'rgba(185, 167, 232, 0.25)';
    } else {
      nav.style.background = 'rgba(23, 24, 42, 0.75)';
      nav.style.borderColor = 'rgba(185, 167, 232, 0.16)';
    }
  });

  const penguin = document.querySelector('.penguin-mascot');
  if (penguin) {
    penguin.addEventListener('click', () => {
      penguin.style.transform = 'scale(1.15) rotate(-8deg)';
      setTimeout(() => {
        penguin.style.transform = '';
      }, 300);
    });
  }
});