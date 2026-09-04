// ================================
// MENÚ HAMBURGUESA
// ================================

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {

        menu.classList.toggle("activo");

        menuBtn.classList.toggle("activo");

        const abierto = menu.classList.contains("activo");

        menuBtn.setAttribute("aria-expanded", abierto);

    });


    // Cerrar menú al seleccionar una opción

    const enlacesMenu = menu.querySelectorAll("a");

    enlacesMenu.forEach((enlace) => {

        enlace.addEventListener("click", () => {

            menu.classList.remove("activo");

            menuBtn.classList.remove("activo");

            menuBtn.setAttribute("aria-expanded", "false");

        });

    });

}


// ================================
// NAVEGACIÓN SUAVE
// ================================

document.querySelectorAll('a[href^="#"]').forEach((enlace) => {

    enlace.addEventListener("click", function (e) {

        const href = this.getAttribute("href");

        // Ignorar enlaces que solamente tienen "#"

        if (!href || href === "#") {
            return;
        }

        const destino = document.querySelector(href);

        if (destino) {

            e.preventDefault();

            destino.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }

    });

});


// ================================
// AÑO AUTOMÁTICO
// ================================

const año = document.getElementById("año");

if (año) {

    año.textContent = new Date().getFullYear();

}


// ================================
// HEADER AL HACER SCROLL
// ================================

const header = document.querySelector("header");

if (header) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 50) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

}