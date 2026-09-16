import { db, doc, getDoc } from "./firebase.js";

async function cargarHorarios() {
    try {
        const referencia = doc(db, "horarios", "sede-reñaca");
        const documento = await getDoc(referencia);

        if (!documento.exists()) {
            console.error("No se encontraron los horarios.");
            return;
        }

        const datos = documento.data();

        // Dirección y sede
        const nombreSede = document.querySelector(".sede-title h3");
        const ciudadSede = document.querySelector(".sede-title div span:last-child");
        const direccion = document.querySelector(".direccion span");

        if (nombreSede) {
            nombreSede.textContent = datos.nombre;
        }

        if (ciudadSede) {
            ciudadSede.textContent = datos.ciudad;
        }

        if (direccion) {
            direccion.textContent = datos.direccion;
        }

        // Horarios
        const dias = document.querySelectorAll(".dia");

        if (dias.length >= 3) {

            // Lunes
            dias[0].querySelectorAll(".horario-dia span")[0].textContent =
                datos.lunes_ninos;

            dias[0].querySelectorAll(".horario-dia span")[1].textContent =
                datos.lunes_jovenes_adultos;

            // Miércoles
            dias[1].querySelectorAll(".horario-dia span")[0].textContent =
                datos.miercoles_ninos;

            dias[1].querySelectorAll(".horario-dia span")[1].textContent =
                datos.miercoles_jovenes_adultos;

            // Viernes
            dias[2].querySelectorAll(".horario-dia span")[0].textContent =
                datos.viernes_ninos;

            dias[2].querySelectorAll(".horario-dia span")[1].textContent =
                datos.viernes_jovenes_adultos;
        }

    } catch (error) {
        console.error("Error al cargar los horarios:", error);
    }
}

cargarHorarios();
