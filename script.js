// ==========================================
// 1. BURBUJAS FLOTANTES DE FONDO
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const heroSection = document.querySelector('.hero-section');
    const bubbleColors = ['#E2D1F9', '#BDB2FF', '#FFC6FF', '#A0C4FF', '#FFFFFF'];

    function createBubble() {
        if (!heroSection) return;

        const bubble = document.createElement('div');
        bubble.classList.add('bubble');

        const size = Math.random() * 50 + 20 + 'px';
        bubble.style.width = size;
        bubble.style.height = size;
        bubble.style.left = Math.random() * 100 + '%';
        bubble.style.backgroundColor = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
        
        const duration = Math.random() * 8 + 10 + 's';
        bubble.style.animationDuration = duration;
        bubble.style.animationDelay = Math.random() * 3 + 's';

        heroSection.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
        }, (parseFloat(duration) + parseFloat(bubble.style.animationDelay)) * 1000);
    }

    if (heroSection) {
        for (let i = 0; i < 12; i++) {
            createBubble();
        }
        setInterval(createBubble, 1200);
    }

    // Inicializar carrusel de certificaciones
    initCarousel('cert-track', 'cert-prev', 'cert-next');
});

// ==========================================
// 2. CARRUSEL DE CERTIFICACIONES
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
        const gap = parseFloat(trackStyle.gap) || 20;
        const itemWidth = items[0].offsetWidth + gap;

        track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
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

// ==========================================
// 3. VENTANAS MODALES (PROYECTOS Y PARTICIPACIONES)
// ==========================================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
}

// Cerrar modal al hacer clic en el fondo
window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('active');
    }
});

// Cerrar modal con tecla Escape
window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const activeModals = document.querySelectorAll('.modal.active');
        activeModals.forEach(modal => modal.classList.remove('active'));
    }
});