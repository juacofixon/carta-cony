// Elementos DOM
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
const registerContainer = document.getElementById("register-container");
const loginContainer = document.getElementById("login-container");
const letterContainer = document.getElementById("letter-container");
const messageElement = document.getElementById("message");

// Texto de la carta
const messageText = `Querida Constanza,

Siempre me has inspirado a ser una mejor persona, y quiero que sepas cuánto te valoro.

Eres mi compañera, mi confidente y mi mejor amiga.

Espero que este pequeño gesto te saque una sonrisa.

Con todo mi amor,

Tu Gatito`;

let index = 0;

// Evento para el formulario de registro
registerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;

    // Guardar credenciales en localStorage
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);

    alert("Registro exitoso. Ahora puedes iniciar sesión.");
    registerContainer.style.display = "none";
    loginContainer.style.display = "block";
});

// Evento para el formulario de inicio de sesión
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verificar credenciales
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");

    if (username === storedUsername && password === storedPassword) {
        loginContainer.style.display = "none";
        letterContainer.style.display = "block";
        typeLetter();
    } else {
        alert("Nombre de usuario o contraseña incorrectos. Inténtalo de nuevo.");
    }
});

// Función para animar la escritura de la carta
function typeLetter() {
    if (index < messageText.length) {
        messageElement.textContent += messageText.charAt(index);
        index++;
        setTimeout(typeLetter, 100); // Ajusta el tiempo para hacer la escritura más rápida o más lenta
    }
}

// script.js

document.getElementById('register-form').addEventListener('submit', function(event) {
    const passwordInput = document.getElementById('register-password');
    const password = passwordInput.value;

    // Expresión regular para verificar al menos una letra mayúscula
    const hasUpperCase = /[A-Z]/.test(password);

    if (!hasUpperCase) {
        // Evita el envío del formulario si no contiene una letra mayúscula
        event.preventDefault();
        alert('La contraseña debe contener al menos una letra mayúscula.');
    }
});

