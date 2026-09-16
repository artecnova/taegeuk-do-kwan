import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
    getFirestore,
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

import {
    getAuth
} from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyBDUT0opdo44f1fbtYdaiB4Gi-xkLpAb7Q",
    authDomain: "taegeuk-do-kwan.firebaseapp.com",
    projectId: "taegeuk-do-kwan",
    storageBucket: "taegeuk-do-kwan.firebasestorage.app",
    messagingSenderId: "12029049603",
    appId: "1:12029049603:web:ba739a7c04123c0fde0736"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);


export {
    app,
    db,
    auth,
    doc,
    getDoc
};
