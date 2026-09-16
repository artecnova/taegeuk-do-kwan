import {
    auth,
    db,
    doc,
    getDoc
} from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";

import {
    updateDoc
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";


const botonCerrarSesion =
    document.getElementById("cerrar-sesion");

const formularioHorarios =
    document.getElementById("horarios-form");

const mensajeHorarios =
    document.getElementById("mensaje-horarios");


const referenciaHorarios =
    doc(db, "horarios", "sede-reñaca");


/* ==========================================
   COMPROBAR SESIÓN
========================================== */

onAuthStateChanged(auth, async (usuario) => {

    if (!usuario) {

        window.location.href = "admin.html";

        return;

    }


    await cargarHorarios();

});


/* ==========================================
   CARGAR HORARIOS DESDE FIRESTORE
========================================== */

async function cargarHorarios() {

    try {

        const documento =
            await getDoc(referenciaHorarios);


        if (!documento.exists()) {

            mensajeHorarios.textContent =
                "No se encontraron los horarios.";

            return;

        }


        const datos =
            documento.data();


        document.getElementById("lunes-ninos").value =
            datos.lunes_ninos || "";

        document.getElementById("lunes-jovenes-adultos").value =
            datos.lunes_jovenes_adultos || "";


        document.getElementById("miercoles-ninos").value =
            datos.miercoles_ninos || "";

        document.getElementById("miercoles-jovenes-adultos").value =
            datos.miercoles_jovenes_adultos || "";


        document.getElementById("viernes-ninos").value =
            datos.viernes_ninos || "";

        document.getElementById("viernes-jovenes-adultos").value =
            datos.viernes_jovenes_adultos || "";


    } catch (error) {

        console.error(
            "Error al cargar los horarios:",
            error
        );

        mensajeHorarios.textContent =
            "No fue posible cargar los horarios.";

    }

}


/* ==========================================
   GUARDAR HORARIOS
========================================== */

formularioHorarios.addEventListener(
    "submit",
    async (evento) => {

        evento.preventDefault();


        mensajeHorarios.textContent =
            "Guardando cambios...";


        const nuevosHorarios = {

            lunes_ninos:
                document.getElementById("lunes-ninos").value.trim(),

            lunes_jovenes_adultos:
                document
                    .getElementById("lunes-jovenes-adultos")
                    .value
                    .trim(),


            miercoles_ninos:
                document
                    .getElementById("miercoles-ninos")
                    .value
                    .trim(),

            miercoles_jovenes_adultos:
                document
                    .getElementById("miercoles-jovenes-adultos")
                    .value
                    .trim(),


            viernes_ninos:
                document
                    .getElementById("viernes-ninos")
                    .value
                    .trim(),

            viernes_jovenes_adultos:
                document
                    .getElementById("viernes-jovenes-adultos")
                    .value
                    .trim()

        };


        try {

            await updateDoc(
                referenciaHorarios,
                nuevosHorarios
            );


            mensajeHorarios.textContent =
                "✓ Horarios guardados correctamente.";


        } catch (error) {

            console.error(
                "Error al guardar los horarios:",
                error
            );


            mensajeHorarios.textContent =
                "No se pudieron guardar los cambios.";

        }

    }
);


/* ==========================================
   CERRAR SESIÓN
========================================== */

botonCerrarSesion.addEventListener(
    "click",
    async () => {

        try {

            await signOut(auth);

            window.location.href =
                "admin.html";


        } catch (error) {

            console.error(
                "Error al cerrar sesión:",
                error
            );

        }

    }
);

