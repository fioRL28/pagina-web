document.addEventListener("DOMContentLoaded", function () {
    const header = document.createElement("header");
    header.innerHTML = `
        <div class="header__top">
            <div class="header__top__contact">
                <span><img src="img/home.png" alt="Ubicación"> Cajamarca, Perú</span>
                <span><img src="img/phone.png" alt="Teléfono"> (+51) 917-069702</span>
                <span>
                    <img src="img/correo.png" alt="Correo"> 
                    <a href="mailto:jemageneralmultiservices@gmail.com">jemageneralmultiservices@gmail.com</a>
                </span>
            </div>
            <div class="social-icons">
                <a href="https://www.facebook.com/people/JEMA-General-Services-SRL/100066804307139/?_rdr" target="_blank">
                    <i class="fa-brands fa-facebook"></i>
                </a>
                <a href="#" target="_blank">
                    <i class="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </div>
        <nav class="nav-bar">
            <div class="menu-toggle">
                <i class="fa-solid fa-bars"></i>
            </div>
            <div class="nav-container">
                <div class="logo">
                    <img src="img/logo.png" alt="Logo de la empresa" loading="lazy">
                </div>
                <ul class="menu">
                    <li><a href="index.html">Inicio</a></li>
                    <li><a href="nosotros.html">Nosotros</a></li>
                    <li class="dropdown">
                        <a href="#">Servicios</a>
                        <ul class="dropdown-menu">
                            <li><a href="servicios_ingenieria.html">Sistemas Eléctricos</a></li>
                            <li><a href="servicios-mantenimiento.html">Mantenimiento y Servicios Generales</a></li>
                            <li><a href="alquiler-equipos.html">Alquiler de Equipos</a></li>                         
                        </ul>
                    </li>
                    <li><a href="proyectos.html">Proyectos</a></li>
                    <li><a href="contacto.html">Contacto</a></li>
                </ul>
                <a href="certificado.html" class="cta-button">Consulta de Certificados</a>
            </div>
        </nav>
    `;

    document.body.insertBefore(header, document.body.firstChild);
});
