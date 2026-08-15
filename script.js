document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. REGISTRO DE PLUGINS GSAP
    // ==========================================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // ==========================================
    // 2. EFECTO MAQUINA DE ESCRIBIR (HERO)
    // ==========================================
    const nombreCompleto = "Astrit Cetzal";
    const contenedorTexto = document.getElementById('typewriter-text');
    let indiceLetra = 0;

    function escribirNombre() {
        if (!contenedorTexto) return;
        if (indiceLetra < nombreCompleto.length) {
            contenedorTexto.textContent += nombreCompleto.charAt(indiceLetra);
            indiceLetra++;
            setTimeout(escribirNombre, 110);
        }
    }
    escribirNombre();

    // ==========================================
    // 3. FLOTACION CONTINUA (AVATAR Y STICKERS)
    // ==========================================
    if (typeof gsap !== 'undefined') {
        gsap.to(".astrit-avatar", {
            y: -10,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(".sticker-dog", {
            y: -14,
            rotation: 4,
            duration: 2.6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        gsap.to(".sticker-books", {
            y: -15,
            rotation: -4,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 0.3
        });

        gsap.to(".sticker-icecream", {
            y: -12,
            rotation: 5,
            duration: 2.4,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: 0.5
        });

        gsap.to(".sticker-vinyl", {
            y: -10,
            rotation: 360,
            duration: 8,
            repeat: -1,
            ease: "linear"
        });
    }

    // ==========================================
    // 4. ANIMACIONES AL HACER SCROLL (SCROLLTRIGGER)
    // ==========================================
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {

        // A. Titulos de cada seccion (Aparecen elevandose suavemente)
        gsap.utils.toArray("section h2").forEach(titulo => {
            gsap.from(titulo, {
                scrollTrigger: {
                    trigger: titulo,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 35,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            });
        });

        // B. Seccion Habilidades (Aparece con ligera escala)
        gsap.from(".marquee-group", {
            scrollTrigger: {
                trigger: "#habilidades",
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 40,
            opacity: 0,
            stagger: 0.2,
            duration: 0.8,
            ease: "power3.out"
        });

        // C. Tarjetas de Proyectos (Entrada en cascada tipo rebote)
        gsap.from(".project-card", {
            scrollTrigger: {
                trigger: "#proyectos",
                start: "top 75%",
                toggleActions: "play none none reverse"
            },
            scale: 0.85,
            y: 50,
            opacity: 0,
            stagger: 0.15,
            duration: 0.7,
            ease: "back.out(1.5)"
        });

        // D. Linea de Tiempo de Participaciones
        // 1. La barra horizontal se dibuja de izquierda a derecha
        gsap.from(".timeline-main-bar", {
            scrollTrigger: {
                trigger: "#participaciones",
                start: "top 75%",
                toggleActions: "play none none reverse"
            },
            scaleX: 0,
            transformOrigin: "left center",
            duration: 1,
            ease: "power3.inOut"
        });

        // 2. Los nodos y tarjetas de eventos brotan en secuencia
        gsap.from(".timeline-point", {
            scrollTrigger: {
                trigger: "#participaciones",
                start: "top 70%",
                toggleActions: "play none none reverse"
            },
            scale: 0,
            opacity: 0,
            stagger: 0.25,
            duration: 0.6,
            ease: "back.out(2)",
            delay: 0.3
        });

        // E. Carrusel de Certificaciones
        gsap.from(".carousel-wrapper", {
            scrollTrigger: {
                trigger: "#certificaciones",
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 45,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        });

        // F. Bloques de Idiomas
        gsap.from(".language-pill-box", {
            scrollTrigger: {
                trigger: "#idiomas",
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            scale: 0.8,
            opacity: 0,
            stagger: 0.2,
            duration: 0.6,
            ease: "back.out(1.6)"
        });
    }

    // Inicializar carrusel de certificaciones
    initCarousel('cert-track', 'cert-prev', 'cert-next');
});

// ==========================================
// 5. CARRUSEL DE CERTIFICACIONES
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
// 6. VENTANAS MODALES
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