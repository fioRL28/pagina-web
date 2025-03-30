/*
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
});*/

/*document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");

    menuToggle.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
});*/


/*

document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const menuLinks = document.querySelectorAll(".menu a"); // Selecciona todos los enlaces del menú

    // Mostrar/Ocultar menú al hacer clic en el botón de hamburguesa
    toggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Cerrar menú al hacer clic en cualquier enlace
    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("active"); // Cierra el menú al hacer clic en un enlace
        });
    });
});*/

/*

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const dropdownToggle = document.querySelector(".dropdown .dropdown-toggle");
    const dropdownMenu = document.querySelector(".dropdown-menu");

    // Mostrar/Ocultar menú en móviles
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Mostrar/Ocultar submenú "Servicios"
    dropdownToggle.addEventListener("click", function (event) {
        event.preventDefault(); // Evita que el enlace redirija
        dropdownMenu.classList.toggle("show");
    });

    // Cerrar menú si se toca fuera de él
    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && !menuToggle.contains(event.target) && !dropdownToggle.contains(event.target)) {
            menu.classList.remove("active");
            dropdownMenu.classList.remove("show");
        }
    });
});*/

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menu = document.querySelector(".menu");
    const dropdown = document.querySelector(".dropdown > a"); // "Servicios" enlace
    const dropdownMenu = document.querySelector(".dropdown-enu");

    // Mostrar menú principal en responsive
    menuToggle.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    // Evitar que "Servicios" redirija y abrir/cerrar el submenú
    dropdown.addEventListener("click", function (event) {
        event.preventDefault(); // Evita la redirección
        dropdownMenu.classList.toggle("show"); // Muestra u oculta el submenú
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todos los enlaces dentro del menú
    const menuLinks = document.querySelectorAll(".menu a");

    menuLinks.forEach(link => {
        link.addEventListener("click", function () {
            // Busca el menú y lo oculta al hacer clic en un enlace
            const menu = document.querySelector(".menu");
            menu.classList.remove("show"); // Asegura que el menú se cierre
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Seleccionamos el enlace "Servicios" y el submenú
    const serviciosLink = document.querySelector(".dropdown > a");
    const submenu = document.querySelector(".dropdown-enu");

    serviciosLink.addEventListener("click", function (event) {
        event.preventDefault(); // Evita que se redirija la página

        // Alternar la visibilidad del submenú
        if (submenu.style.display === "block") {
            submenu.style.display = "none"; // Oculta el submenú si está abierto
        } else {
            submenu.style.display = "block"; // Muestra el submenú si está cerrado
        }
    });

    // Cierra el submenú si se hace clic en un enlace dentro de él
    const submenuLinks = submenu.querySelectorAll("a");
    submenuLinks.forEach(link => {
        link.addEventListener("click", function () {
            submenu.style.display = "none"; // Cierra el submenú al hacer clic en un enlace
        });
    });
});




/********************************* */

document.addEventListener("DOMContentLoaded", function () {
    let menu = document.querySelector(".menu");
    let certificadoItem = document.querySelector(".certificado-item");

    function verificarResponsivo() {
        if (window.innerWidth <= 768) {
            certificadoItem.style.display = "block"; // Asegurar visibilidad
        } else {
            certificadoItem.style.display = "none"; // Ocultarlo en escritorio
        }
    }

    verificarResponsivo();
    window.addEventListener("resize", verificarResponsivo);
});

/**************************************************************** */

document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = new bootstrap.Carousel(document.querySelector("#carouselServicios"), {
        interval: 3000,  // Cambia la imagen cada 3 segundos
        wrap: true,      // Permite que el carrusel regrese al inicio después de la última imagen
        pause: "hover"   // Pausa el carrusel cuando el usuario pasa el mouse sobre él
    });
});

/*********************************************** */

var swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});