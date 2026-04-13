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

//



//traducciones
const traducciones = {
    es: {
        menu_sobre_mi: "Sobre Mí",
        menu_habilidades: "Habilidades y conocimientos",
        menu_softskills: "Habilidades blandas",
        menu_proyectos: "Proyectos y participaciones",
        mune_educacion:"Educación",
        menu_idiomas:"Idiomas",
        hero_saludo:"¡Hola! Soy Astrit",
        btn_idioma: "EN | <strong>ES</strong>"
    },
    en: {
        menu_sobre_mi: "About me",
        menu_habilidades: "Skills & Knowledge",
        menu_softskills: "Soft skills",
        menu_proyectos: "Proyects & Participation",
        menu_educacion:"Education",
        menu_idiomas:"Languages",
        hero_saludo:"Hi! I'm Astrit",
        btn_idioma: "<strong>EN</strong> | ES"
    }
};
let idiomaActual = "es"; //español por defecto
// 
// Efecto de máquina de escribir
const textoCarrera  = { 
    es: "Estudiante en ingeniería en Desarrollo de software",
    en: "Software Engineering Student"
}
let indice = 0;
let timeoutId; //guardar el temoporizador para poder reiniciarlo al cambiar de idioma
function escribirTexto() {
    const elemento = document.getElementById("subtitulo-maquina");
    const textoActual = textoCarrera[idiomaActual];
    if (indice < textoActual.length) {
        elemento.innerHTML += textoActual.charAt(indice);
        indice++;
        timeoutId = setTimeout(escribirTexto, 70); //50ms es la velocidad
    }
}
// Inicia la animación cuando la página carga
window.onload = escribirTexto;
// el motor de traduccion

function cambiarIdioma(){
    //cambiamos la variable de idioma
    if (idiomaActual === "es"){
        idiomaActual = "en";
    }else{
        idiomaActual ="es";
    }


//traducir todos los elementos estaticos 
    const elementos = document.querySelectorAll("[data-i18n]");
    elementos.forEach((elemento) => {
        const clave = elemento.getAttribute("data-i18n");
        if(traducciones[idiomaActual][clave]){
            elemento.innerHTML = traducciones[idiomaActual][clave];
        }
    })

    // Actualizar las letras del botón de idioma
    document.getElementById("btn-idioma").innerHTML = traducciones[idiomaActual].btn_idioma;
    // Reiniciar y traducir la máquina de escribir
    clearTimeout(timeoutId); // Detiene la animación actual
    document.getElementById("subtitulo-maquina").innerHTML = ""; // Limpia el texto
    indice = 0; // Regresa el contador a cero
    escribirTexto(); // Vuelve a empezar en el nuevo idioma
}


    // --- 4. ACTIVAR EL BOTÓN ---
    // Le decimos al botón que escuche cuando le den clic
    document.getElementById("btn-idioma").addEventListener("click", function(evento) {
        evento.preventDefault(); // Evita que la página salte bruscamente hacia arriba
        cambiarIdioma();
    });
