// Obten todos los enlaces del menú de navegación
const navLinks = document.querySelectorAll('nav a');

// Agrega un controlador de eventos para cada enlace
navLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
        // Evita la navegación normal
        event.preventDefault();

        // Obtiene el href del enlace y elimina el carácter '#'
        const targetId = link.getAttribute('href').slice(1);

        // Encuentra el elemento con el id correspondiente
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            // Desplázate hasta el elemento
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth', // Para obtener un desplazamiento suave
            });
        }
    });
});
