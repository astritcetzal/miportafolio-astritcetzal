// Esperar a que el HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    
    // Seleccionamos la sección donde queremos las burbujas
    const heroSection = document.querySelector('.hero-section');

    // Paleta de colores para las burbujas (variaciones de tu tema)
    const bubbleColors = [
        '#E2D1F9', // Lila
        '#FFC4D9', // Rosa
        '#AEC6CF', // Azul claro
        '#FFFFFF'  // Blanco puro
    ];

    // Función que crea UNA burbuja
    function createBubble() {
        // Crear el elemento div
        const bubble = document.createElement('div');
        
        // Asignarle la clase CSS que definimos antes
        bubble.classList.add('bubble');

        // --- ALEATORIEDAD (Aquí está el truco profesional) ---

        // 1. Tamaño aleatorio (entre 20px y 80px)
        const size = Math.random() * 60 + 20 + 'px';
        bubble.style.width = size;
        bubble.style.height = size;

        // 2. Posición horizontal aleatoria (0% a 100% del ancho)
        bubble.style.left = Math.random() * 100 + '%';

        // 3. Color aleatorio de nuestra paleta
        const randomColor = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
        bubble.style.backgroundColor = randomColor;

        // 4. Duración de la animación aleatoria (entre 10 y 18 segundos)
        // Esto hace que no suban todas en fila india, sino orgánicamente
        const duration = Math.random() * 8 + 10 + 's';
        bubble.style.animationDuration = duration;

        // 5. Retraso aleatorio para empezar (así no salen todas a la vez al cargar)
        bubble.style.animationDelay = Math.random() * 5 + 's';

        // Añadir la burbuja a la sección hero
        heroSection.appendChild(bubble);

        // --- IMPORTANTE: LIMPIEZA ---
        // Si no eliminamos las burbujas, la página se pondrá lenta después de un rato.
        // Las eliminamos justo después de que termine su animación.
        setTimeout(() => {
            bubble.remove();
        }, (parseFloat(duration) + parseFloat(bubble.style.animationDelay)) * 1000);
    }

    // --- INICIAR EL EFECTO ---
    // Crear burbujas iniciales rápido para que no se vea vacío al principio
    for(let i = 0; i < 10; i++) {
        createBubble();
    }

    // Crear una burbuja nueva cada 1.5 segundos para mantener el flujo
    setInterval(createBubble, 1500);
});