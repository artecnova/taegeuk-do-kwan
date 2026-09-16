import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

const firebaseConfig = {
    apiKey: "AIzaSyBDUT0opdo44f1fbtYdaiB4Gi-xkLpAb7Q",
    authDomain: "taegeuk-do-kwan.firebaseapp.com",
    projectId: "taegeuk-do-kwan",
    storageBucket: "taegeuk-do-kwan.firebasestorage.app",
    messagingSenderId: "12029049603",
    appId: "1:12029049603:web:ba739a7c04123c0fde0736"
};

const app = initializeApp(firebaseConfig);

export { app };
