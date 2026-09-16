import {
    auth
} from "./firebase.js";

import {
    signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";


const formulario =
    document.getElementById("login-form");

const mensajeError =
    document.getElementById("login-error");


formulario.addEventListener("submit", async (evento) => {

    evento.preventDefault();

    const email =
        document.getElementById("email").value.trim();

    const password =
        document.getElementById("password").value;


    mensajeError.textContent = "";


    try {

        await signInWithEmailAndPassword(
            auth,
            email,
            password
        );

        window.location.href = "panel.html";

    } catch (error) {

        console.error("Error de Firebase:", error);

        mensajeError.textContent =
            error.code + " — " + error.message;

    }

});
