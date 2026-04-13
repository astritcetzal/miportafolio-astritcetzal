// ==========================================
// 1. EFECTOS VISUALES (Burbujas Flotantes)
// ==========================================

// 'DOMContentLoaded' es un evento que le dice a JavaScript: 
// "Espera a que todo el esqueleto HTML esté cargado antes de ejecutar esto".
// Es una regla de oro para evitar errores si un elemento aún no existe en la pantalla.
document.addEventListener('DOMContentLoaded', () => {
    
    // querySelector busca la primera etiqueta que tenga la clase '.hero-section'
    // Aquí es donde guardaremos todas nuestras burbujas para que no invadan toda la página.
    const heroSection = document.querySelector('.hero-section');

    // Esto es un Arreglo (Array) que guarda tus colores pastel.
    const bubbleColors = ['#E2D1F9', '#FFC4D9', '#AEC6CF', '#FFFFFF'];

    // Esta función fabrica UNA sola burbuja desde cero
    function createBubble() {
        // createElement crea una nueva etiqueta <div> en la memoria (aún no está en la página)
        const bubble = document.createElement('div');
        
        // classList.add le pega la clase 'bubble' para que tome la forma redonda que le dimos en CSS
        bubble.classList.add('bubble');

        // Math.random() genera un número decimal aleatorio entre 0 y 1.
        // Aquí lo usamos para calcular un tamaño aleatorio entre 20px y 80px.
        const size = Math.random() * 60 + 20 + 'px';
        bubble.style.width = size;
        bubble.style.height = size;
        
        // Esto escoge una posición aleatoria de izquierda a derecha (0% a 100%)
        bubble.style.left = Math.random() * 100 + '%';
        
        // Math.floor redondea hacia abajo. Aquí elegimos un color al azar de nuestro Arreglo.
        bubble.style.backgroundColor = bubbleColors[Math.floor(Math.random() * bubbleColors.length)];
        
        // Calculamos cuánto tiempo tardará en subir (entre 10 y 18 segundos)
        const duration = Math.random() * 8 + 10 + 's';
        bubble.style.animationDuration = duration;
        
        // Retraso aleatorio para que no salgan todas disparadas al mismo tiempo
        bubble.style.animationDelay = Math.random() * 5 + 's';

        // appendChild toma el <div> que creamos y finalmente lo "pega" dentro del HTML
        heroSection.appendChild(bubble);

        // setTimeout es un temporizador. Aquí le decimos: 
        // "Cuando termine la animación de esta burbuja, bórrala (remove) para no saturar la memoria del navegador".
        setTimeout(() => {
            bubble.remove();
        }, (parseFloat(duration) + parseFloat(bubble.style.animationDelay)) * 1000);
    }

    // Este ciclo 'for' crea 10 burbujas de golpe en cuanto entras a la página
    for(let i = 0; i < 10; i++) {
        createBubble();
    }
    
    // setInterval ejecuta una función repetidamente. 
    // Aquí crea una nueva burbuja cada 1500 milisegundos (1.5 segundos) de forma infinita.
    setInterval(createBubble, 1500);
});


// ==========================================
// 2. DICCIONARIO DE TRADUCCIONES (Objetos)
// ==========================================

// En JavaScript, esto se llama un Objeto (Object). 
// Funciona como un diccionario real: tiene una "llave" (ej. menu_sobre_mi) y un "valor" (ej. "Sobre Mí").
// Lo dividimos en dos grandes bloques: 'es' (Español) y 'en' (Inglés).
const traducciones = {
    es: {
        menu_sobre_mi: "Sobre Mí",
        menu_habilidades: "Habilidades y conocimientos",
        menu_softskills: "Habilidades blandas",
        menu_proyectos: "Proyectos y participaciones",
        menu_educacion: "Educación",
        menu_idiomas: "Idiomas",
        btn_idioma: "EN | <strong>ES</strong>",

        hero_saludo: "¡Hola! Soy Astrit",
        hero_descripcion: "Estudiante de desarrollo de software apasionada por la tecnología, el trabajo en equipo y la creación de soluciones creativas. Constantemente aprendiendo y buscando nuevos retos para crecer profesionalmente.",
        hero_boton: "Contáctame",

        titulo_habilidades: "Habilidades y conocimientos",
        
        titulo_softskills: "Habilidades blandas",
        soft1: "Pensamiento crítico",
        soft2: "Liderazgo",
        soft3: "Trabajo en equipo",
        soft4: "Organización",
        soft5: "Adaptabilidad",
        soft6: "Resolución de problemas",
        soft7: "Comunicación efectiva",
        soft8: "Aprendizaje autónomo",

        titulo_proyectos: "Proyectos y participaciones",
        proj1_title: "Bootcamp de Starknet - marzo 2026",
        proj1_desc: "Bootcamp para crear nuestro primer contrato inteligente, conocer nuevas herramientas y sobre todo aprender nuevas cosas.",
        proj2_title: "La cumbre - Technolatinas - 20 de Marzo 2026",
        proj2_desc: "La cumbre de comunidades de technolatinas, evento llevado a cabo del 20 al 22 de marzo, dicho evento conectó a mujeres de STEM.",
        proj3_title: "Invent for the Planet - 28 de febrero al 2 de marzo de 2026",
        proj3_desc: "Proyecto ganador del primer lugar a nivel universitario, compitiendo contra 31 universidades. Solución innovadora desarrollada en equipo.",
        proj4_title: "PROYECTO: CONTADOR DE COCHES PARA ESTUDIO VIAL - junio 2025",
        proj4_desc: "El arquitecto Hector Cabañas y la empresa Camsac nos pidió llevar a cabo un proyecto en donde, en un caso hipotético, se quisiera abrir un centro comercial, se tendría que revisar el tráfico vehicular para analizar si le conviene a la empresa colocar el centro comercial en dicho lugar.",
        proj5_title: "Laboratorio Universitario: Java",
        proj5_desc: "Colección de prácticas y algoritmos desarrollados durante mis primeros cuatrimestres. Demuestra mi progresión desde la <strong>programación estructurada</strong> hasta la <strong>programación orientada a objetos (POO)</strong>.",
        proj6_title: "Laboratorio Universitario: Python",
        proj6_desc: "Colección de prácticas y algoritmos desarrollados en python.",
        btn_github: "Ver código en GitHub",

        titulo_educacion: "Educación",
        edu_cert_bootcamp: "Bootcamp",
        edu_cert_certificacion: "Certificación",
        edu_cert_membresia: "Membresía",
        edu1_badge: "Presente",
        edu1_title: "Estudiante de Desarrollo de Software",
        edu1_desc: "Tecnológico de Software",
        edu2_badge: "Marzo 2026",
        edu2_desc: "Bootcamp de Starknet",
        edu3_desc: "Invent for the Planet",
        edu4_badge: "De febrero 2026 a diciembre 2026",
        edu4_desc: "Miembro de la IEEE",
        edu5_badge: "2024",
        edu5_desc: "Soporte de TI de Google",
        edu8_desc: "Manejo de hojas de cálculo",

        titulo_idiomas: "Idiomas",
        idioma_es: "Español (Lengua materna)",
        idioma_en: "🌍 Inglés (A2)",

        footer_titulo: "¡Hablemos!",
        footer_desc: "Encuéntrame en mis redes profesionales:",
        footer_copy: "© 2026 Astrit Cetzal. Diseñado con ♥."
    },
    en: {
        menu_sobre_mi: "About Me",
        menu_habilidades: "Skills & Knowledge",
        menu_softskills: "Soft Skills",
        menu_proyectos: "Projects & Participations",
        menu_educacion: "Education",
        menu_idiomas: "Languages",
        btn_idioma: "<strong>EN</strong> | ES",

        hero_saludo: "Hi! I'm Astrit",
        hero_descripcion: "Software development student passionate about technology, teamwork, and creating innovative solutions. Constantly learning and looking for new challenges to grow professionally.",
        hero_boton: "Contact Me",

        titulo_habilidades: "Skills & Knowledge",
        
        titulo_softskills: "Soft Skills",
        soft1: "Critical Thinking",
        soft2: "Leadership",
        soft3: "Teamwork",
        soft4: "Organization",
        soft5: "Adaptability",
        soft6: "Problem Solving",
        soft7: "Effective Communication",
        soft8: "Autonomous Learning",

        titulo_proyectos: "Projects & Participations",
        proj1_title: "Starknet Bootcamp - March 2026",
        proj1_desc: "Bootcamp to create our first smart contract, discover new tools, and above all, learn new things.",
        proj2_title: "The Summit - Technolatinas - March 20, 2026",
        proj2_desc: "The summit of Technolatinas communities, held from March 20 to 22. This event connected women in STEM.",
        proj3_title: "Invent for the Planet - Feb 28 to March 2, 2026",
        proj3_desc: "First place winning project at the university level, competing against 31 universities. Innovative solution developed as a team.",
        proj4_title: "PROJECT: CAR COUNTER FOR TRAFFIC STUDY - June 2025",
        proj4_desc: "Architect Hector Cabañas and the Camsac company asked us to carry out a project where, in a hypothetical case of opening a shopping center, vehicular traffic would have to be analyzed to see if it was convenient to build it in that location.",
        proj5_title: "University Lab: Java",
        proj5_desc: "Collection of practices and algorithms developed during my first semesters. It demonstrates my progression from <strong>structured programming</strong> to <strong>object-oriented programming (OOP)</strong>.",
        proj6_title: "University Lab: Python",
        proj6_desc: "Collection of practices and algorithms developed in Python.",
        btn_github: "View Code on GitHub",

        titulo_educacion: "Education",
        edu_cert_bootcamp: "Bootcamp",
        edu_cert_certificacion: "Certification",
        edu_cert_membresia: "Membership",
        edu1_badge: "Present",
        edu1_title: "Software Development Student",
        edu2_badge: "March 2026",
        edu2_desc: "Starknet Bootcamp",
        edu3_desc: "Invent for the Planet",
        edu4_badge: "February 2026 to December 2026",
        edu4_desc: "IEEE Member",
        edu5_badge: "2024",
        edu5_desc: "Google IT Support",
        edu8_desc: "Spreadsheet Management",

        titulo_idiomas: "Languages",
        idioma_es: "Spanish (Native)",
        idioma_en: "🌍 English (A2)",

        footer_titulo: "Let's Talk!",
        footer_desc: "Find me on my professional networks:",
        footer_copy: "© 2026 Astrit Cetzal. Designed with ♥."
    }
};

// Esta variable es como nuestro interruptor principal. 
// Guarda la información de qué idioma está activo en la página en este momento.
let idiomaActual = "es"; 


// ==========================================
// 3. MÁQUINA DE ESCRIBIR
// ==========================================
const textoCarrera  = { 
    es: "Estudiante en ingeniería en Desarrollo de software",
    en: "Software Engineering Student"
};

// 'indice' es un contador que rastrea qué letra estamos dibujando (0 = E, 1 = s, 2 = t...)
let indice = 0;

// 'timeoutId' es el nombre de nuestro temporizador. Lo declaramos afuera para poder detenerlo más tarde.
let timeoutId;

function escribirTexto() {
    // Busca la etiqueta HTML donde va el texto
    const elemento = document.getElementById("subtitulo-maquina");
    
    // Escoge la frase dependiendo del idioma actual
    const textoActual = textoCarrera[idiomaActual];
    
    // Si el índice (la letra actual) es menor a la cantidad total de letras de la frase...
    if (indice < textoActual.length) {
        // ...añade la siguiente letra al HTML. (charAt extrae la letra en la posición 'indice')
        elemento.innerHTML += textoActual.charAt(indice);
        
        // Sumamos 1 al contador para que en el siguiente ciclo dibuje la siguiente letra
        indice++;
        
        // Volvemos a llamar a esta misma función en 50 milisegundos.
        // Esto crea un bucle (recursividad) que da el efecto de que alguien está tecleando.
        timeoutId = setTimeout(escribirTexto, 50); 
    }
}

// 'window.onload' asegura que la máquina de escribir comience en cuanto se termine de dibujar la página
window.onload = escribirTexto;


// ==========================================
// 4. MOTOR DE TRADUCCIÓN PRINCIPAL
// ==========================================
function cambiarIdioma() {
    
    // 1. Cambiar el "interruptor"
    // Esto es un operador ternario (un 'if' en una sola línea). 
    // Significa: ¿idiomaActual es igual a "es"? Si sí (?), cámbialo a "en". Si no (:), cámbialo a "es".
    idiomaActual = (idiomaActual === "es") ? "en" : "es";

    // 2. Traducir el contenido estático
    // querySelectorAll busca TODAS las etiquetas que tengan este atributo especial. Nos devuelve una lista.
    const elementos = document.querySelectorAll("[data-i18n]");
    
    // forEach es un ciclo que recorre cada uno de los elementos que encontró arriba.
    elementos.forEach((elemento) => {
        // Extraemos la llave (ej. "hero_saludo")
        const clave = elemento.getAttribute("data-i18n");
        
        // Si esa llave existe en nuestro diccionario en el idioma actual...
        if(traducciones[idiomaActual][clave]){
            // ...reemplazamos el texto viejo por la nueva traducción.
            elemento.innerHTML = traducciones[idiomaActual][clave];
        }
    });

    // 3. Traducir el botón en sí mismo
    document.getElementById("btn-idioma").innerHTML = traducciones[idiomaActual].btn_idioma;
    
    // 4. Reiniciar la animación de la máquina de escribir para el nuevo idioma
    clearTimeout(timeoutId); // Frenamos el bucle del 'setTimeout' que estaba corriendo
    document.getElementById("subtitulo-maquina").innerHTML = ""; // Borramos el texto en pantalla
    indice = 0; // Reiniciamos el contador de letras a cero
    escribirTexto(); // Damos play a la animación de nuevo
}

// ==========================================
// 5. ACTIVACIÓN DE EVENTOS (Listeners)
// ==========================================

// addEventListener es como ponerle un "oído" a tu botón. 
// Aquí le decimos que escuche el evento "click".
document.getElementById("btn-idioma").addEventListener("click", function(evento) {
    
    // Cuando haces clic en un enlace (<a>), el navegador normalmente intenta saltar a otra página o subir al principio.
    // 'preventDefault' cancela ese comportamiento por defecto para que la página se quede exactamente donde el usuario está leyendo.
    evento.preventDefault();
    
    // Finalmente, llamamos a nuestro motor de traducción.
    cambiarIdioma();
});
