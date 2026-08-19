document.addEventListener('DOMContentLoaded', () => {4

// Lógica del Menú Desplegable
  const menuBtn = document.getElementById('menu-toggle');
  const dropdownMenu = document.getElementById('dropdown-menu');
  
  // 1. Registro de plugins de GSAP si están disponibles
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  // 2. Fondo dinámico del Navbar al hacer scroll
  const nav = document.querySelector('.nav-universe');
  if (nav) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        nav.style.background = 'rgba(17, 19, 33, 0.92)';
        nav.style.borderColor = 'rgba(185, 167, 232, 0.25)';
      } else {
        nav.style.background = 'rgba(23, 24, 42, 0.75)';
        nav.style.borderColor = 'rgba(185, 167, 232, 0.16)';
      }
    });
  }

  // 3. Microinteracción de la mascota pingüino
  const penguin = document.querySelector('.penguin-mascot');
  if (penguin) {
    penguin.addEventListener('click', () => {
      penguin.style.transform = 'scale(1.15) rotate(-8deg)';
      setTimeout(() => {
        penguin.style.transform = '';
      }, 300);
    });
  }

  // 4. Animaciones de scroll para el Carrusel de Certificaciones
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.from('.carousel-wrapper', {
      scrollTrigger: {
        trigger: '#certificaciones',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      },
      y: 45,
      opacity: 0,
      duration: 0.8,
      ease: 'power2.out'
    });
  }

  // 5. Inicialización del carrusel
  initCarousel('cert-track', 'cert-prev', 'cert-next');

  if (menuBtn && dropdownMenu) {
    // Abrir / Cerrar al hacer clic en el botón
    menuBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = dropdownMenu.classList.toggle('open');
      menuBtn.classList.toggle('active', isOpen);
      menuBtn.setAttribute('aria-expanded', isOpen);
    });

    // Cerrar al hacer clic en cualquier enlace del menú
    dropdownMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        dropdownMenu.classList.remove('open');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      });
    });

    // Cerrar si se hace clic fuera del menú
    document.addEventListener('click', (e) => {
      if (!dropdownMenu.contains(e.target) && !menuBtn.contains(e.target)) {
        dropdownMenu.classList.remove('open');
        menuBtn.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
      }
    });
  }
});

// ==========================================
// 6. FUNCIONALIDAD DEL CARRUSEL
// ==========================================
function initCarousel(trackId, prevBtnId, nextBtnId) {
  const track = document.getElementById(trackId);
  const prevBtn = document.getElementById(prevBtnId);
  const nextBtn = document.getElementById(nextBtnId);

  if (!track || !prevBtn || !nextBtn) return;

  let currentIndex = 0;

  function updateCarousel() {
    const items = track.querySelectorAll('.cert-item');
    if (items.length === 0) return;

    const trackStyle = window.getComputedStyle(track);
    const gap = parseFloat(trackStyle.gap) || 50;
    const itemWidth = items[0].offsetWidth + gap;

    if (typeof gsap !== 'undefined') {
      gsap.to(track, {
        x: -(currentIndex * itemWidth),
        duration: 0.45,
        ease: 'power2.out'
      });
    } else {
      track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }
  }

  nextBtn.addEventListener('click', () => {
    const items = track.querySelectorAll('.cert-item');
    if (items.length === 0) return;

    if (currentIndex < items.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  prevBtn.addEventListener('click', () => {
    const items = track.querySelectorAll('.cert-item');
    if (items.length === 0) return;

    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = items.length - 1;
    }
    updateCarousel();
  });

  window.addEventListener('resize', () => {
    currentIndex = 0;
    updateCarousel();
  });
}
function createFloatingStars(count = 25) {
  const container = document.getElementById('stars-container');
  if (!container) return;

  const starSymbols = ['✦', '★', '✧', '⋆', '✵'];

  for (let i = 0; i < count; i++) {
    const star = document.createElement('span');
    star.classList.add('star');
    
    // Símbolo aleatorio
    star.textContent = starSymbols[Math.floor(Math.random() * starSymbols.length)];

    // Propiedades aleatorias
    const left = Math.random() * 100; // Posición horizontal (0 a 100%)
    const duration = Math.random() * 8 + 6; // Velocidad entre 6s y 14s
    const delay = Math.random() * 10; // Inicio escalonado
    const size = Math.random() * 14 + 10; // Tamaño entre 10px y 24px

    star.style.left = `${left}%`;
    star.style.fontSize = `${size}px`;
    star.style.animationDuration = `${duration}s`;
    star.style.animationDelay = `${delay}s`;

    container.appendChild(star);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  createFloatingStars(30);
});