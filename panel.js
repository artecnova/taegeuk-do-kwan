import {
    auth
} from "./firebase.js";

import {
    onAuthStateChanged,
    signOut
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";


const botonCerrarSesion =
    document.getElementById("cerrar-sesion");


onAuthStateChanged(auth, (usuario) => {

    if (!usuario) {

        window.location.href = "admin.html";

    }

});


botonCerrarSesion.addEventListener("click", async () => {

    try {

        await signOut(auth);

        window.location.href = "admin.html";

    } catch (error) {

        console.error(
            "Error al cerrar sesión:",
            error
        );

    }

});
