# 👩‍💻 Astrit Cetzal | Portafolio Profesional

🌍 *[🇺🇸 Click here to skip to the English version](#english-version)*

¡Hola! Bienvenida/o al repositorio de mi portafolio personal. Este proyecto fue desarrollado desde cero para mostrar mi evolución como estudiante de Ingeniería en Desarrollo de Software, mis proyectos destacados y mis habilidades técnicas.

🔗 **[Ver el portafolio en vivo aquí](https://astritcetzal.github.io/miportafolio-astritcetzal/)** 

---

## ✨ Características Destacadas

Este proyecto no es solo una página estática, incluye varias implementaciones técnicas interesantes:

* 🎨 **Diseño "Pastel Tech":** Una interfaz única que combina la estética de
*  colores lila y rosa pastel con elementos de terminales de código y UI/UX moderna.
* 🌐 **Arquitectura Bilingüe (i18n):** Implementación de un motor de traducción personalizado con Vanilla JavaScript utilizando atributos `data-i18n` para cambiar instantáneamente entre Español e Inglés sin recargar la página.
* ✨ **Animaciones CSS Avanzadas:** * Fondo inmersivo con estrellas flotantes usando posiciones y retrasos (`animation-delay`) aleatorios.
  * Avatar SVG personalizado con animaciones de órbita y parpadeo continuo.
* 💻 **Efecto Máquina de Escribir:** Un script dinámico en JS que renderiza texto en tiempo real y se adapta automáticamente al idioma seleccionado.
* 📱 **Diseño 100% Responsivo:** Uso de Media Queries y Flexbox/Grid para una experiencia de usuario perfecta tanto en monitores de escritorio como en dispositivos móviles.

## 🛠️ Tecnologías Utilizadas

* **HTML5:** Semántica web para la estructura.
* **CSS3:** Variables de color (`:root`), Flexbox, CSS Grid, animaciones (`@keyframes`) y diseño modular.
* **JavaScript (Vanilla):** Lógica del DOM para el generador de burbujas dinámicas y el sistema de internacionalización.
* **Devicon:** Librería para los iconos de las herramientas de desarrollo.
* **GitHub Pages:** Alojamiento y despliegue continuo.

## 📁 Estructura del Proyecto

La arquitectura del proyecto está pensada para ser modular y escalable:

```text
/
├── css/
│   ├── animacion.css       # Animaciones del entorno (estrellas, burbujas)
│   ├── avatar.css          # Estilos exclusivos del SVG principal
│   ├── estilos-terminal.css # UI de las ventanas de código
│   └── style.css           # Variables globales, reset y responsive
├── imagenes/               # Activos visuales
├── certificados/           # Certificados
├── index.html              # Archivo principal con las etiquetas data-i18n
└── script.js               # Lógica de traducción y efectos visuales
