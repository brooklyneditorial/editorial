

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";


const firebaseConfig = {
    apiKey: "AIzaSyBHmI0bF3vkAH9bP7sOBctwPYUTgYvw2U8",
    authDomain: "editorial-16a00.firebaseapp.com",
    projectId: "editorial-16a00",
    storageBucket: "editorial-16a00.appspot.com",
    messagingSenderId: "390933970933",
    appId: "1:390933970933:web:50081b6cd70f74aca12abc",
    measurementId: "G-D8XQQWDP45"
  };

  const app = initializeApp(firebaseConfig);
 

  
  export class ManageAccount {
    register(email, password) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((_) => {
          window.location.href = "login.html";
          // Mostrar alerta de registro exitoso
          alert("Registro exitoso. Serás redirigido a la página de inicio de sesión.");
        })
        .catch((error) => {
          console.error(error.message);
              // Mostrar alerta de error de registro
              alert("Error al registrar: " + error.message);
        });
    }
  
    authenticate(email, password) {
      signInWithEmailAndPassword(auth, email, password)
        .then((_) => {
          window.location.href = "index.html";
          // Mostrar alerta de inicio de sesión exitoso
          alert("Has iniciado sesión correctamente. Serás redirigido a la página principal.");
        })
        .catch((error) => {
          console.error(error.message);
                  // Mostrar alerta de error de inicio de sesión
                  alert("Error al iniciar sesión: " + error.message);
        });
    }
  
    signOut() {
      signOut(auth)
        .then((_) => {
          window.location.href = "index.html";
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }