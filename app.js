document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".slider-track");
    const logos = Array.from(track.children);
    
    // Duplicamos los logos para el efecto infinito
    logos.forEach(logo => {
        let clone = logo.cloneNode(true);
        track.appendChild(clone);
    });

    let position = 0;
    let speed = 1; // Control de velocidad

    function moveLogos() {
        position -= speed;
        if (position <= -track.scrollWidth / 2) {
            position = 0;
        }
        track.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(moveLogos);
    }

    moveLogos(); // Inicia la animación
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const menuLinks = document.querySelectorAll(".menu a");
    const dropdowns = document.querySelectorAll(".dropdown > a");

    // Mostrar/ocultar menú hamburguesa
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Cerrar menú al hacer clic en una opción (excepto en dropdowns)
    menuLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            if (!this.parentElement.classList.contains("dropdown")) {
                menu.classList.remove("active");
            }
        });
    });

    // Manejar desplegables en dispositivos móviles
    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function (e) {
            e.preventDefault(); // Evita que el enlace redirija
            const submenu = this.nextElementSibling;
            submenu.classList.toggle("show"); // Muestra u oculta el submenú

            // Cierra otros submenús abiertos
            document.querySelectorAll(".dropdown-menu").forEach(menu => {
                if (menu !== submenu) {
                    menu.classList.remove("show");
                }
            });
        });
    });

    // Cerrar el submenú si se hace clic fuera de él
    document.addEventListener("click", function (e) {
        if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
            menu.classList.remove("active");
            document.querySelectorAll(".dropdown-menu").forEach(menu => {
                menu.classList.remove("show");
            });
        }
    });
});
