document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. EFECTO MÁQUINA DE ESCRIBIR (TYPEWRITER)
    // ==========================================
    const nombreCompleto = "Astrit Cetzal";
    const contenedorTexto = document.getElementById('typewriter-text');
    let indiceLetra = 0;

    function escribirNombre() {
        if (!contenedorTexto) return;
        if (indiceLetra < nombreCompleto.length) {
            contenedorTexto.textContent += nombreCompleto.charAt(indiceLetra);
            indiceLetra++;
            setTimeout(escribirNombre, 110); // Velocidad de escritura en ms
        }
    }
    
    // Inicia el efecto de tipeo
    escribirNombre();

    // ==========================================
    // 2. GENERADOR DE BURBUJAS DE FONDO
    // ==========================================
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
        
        const duration = Math.random() * 8 + 8 + 's';
        bubble.style.animationDuration = duration;

        heroSection.appendChild(bubble);

        setTimeout(() => {
            bubble.remove();
        }, parseFloat(duration) * 1000);
    }

    if (heroSection) {
        for (let i = 0; i < 14; i++) {
            createBubble();
        }
        setInterval(createBubble, 1100);
    }

    // ==========================================
    // 3. FLOTACIÓN FLUIDA CON GSAP
    // ==========================================
    if (typeof gsap !== 'undefined') {
        // Flotación suave del avatar
        gsap.to(".astrit-avatar", {
            y: -8,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Flotación orgánica de los stickers
        gsap.to(".sticker-dog", {
            y: -10,
            rotation: 4,
            duration: 2.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(".sticker-books", {
            y: -12,
            rotation: -3,
            duration: 2.8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 0.3
        });

        gsap.to(".sticker-icecream", {
            y: -10,
            rotation: 5,
            duration: 2.2,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 0.5
        });

        gsap.to(".sticker-vinyl", {
            y: -8,
            rotation: 360,
            duration: 7,
            repeat: -1,
            ease: "linear"
        });

        gsap.to(".deco-flower", {
            y: -8,
            duration: 2.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            stagger: 0.4
        });
    }

    // Inicializar carrusel
    initCarousel('cert-track', 'cert-prev', 'cert-next');
});

// ==========================================
// 4. CARRUSEL DE CERTIFICACIONES
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
                ease: "power2.out"
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

// ==========================================
// 5. VENTANAS MODALES
// ==========================================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    modal.classList.add('active');

    if (typeof gsap !== 'undefined') {
        const box = modal.querySelector('.modal-box');
        gsap.fromTo(box, 
            { scale: 0.8, opacity: 0, y: 25 },
            { scale: 1, opacity: 1, y: 0, duration: 0.35, ease: "back.out(1.5)" }
        );
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;

    if (typeof gsap !== 'undefined') {
        const box = modal.querySelector('.modal-box');
        gsap.to(box, {
            scale: 0.85,
            opacity: 0,
            duration: 0.2,
            ease: "power2.in",
            onComplete: () => {
                modal.classList.remove('active');
            }
        });
    } else {
        modal.classList.remove('active');
    }
}

window.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal')) {
        closeModal(event.target.id);
    }
});

window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        const activeModal = document.querySelector('.modal.active');
        if (activeModal) {
            closeModal(activeModal.id);
        }
    }
});