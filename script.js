// Elementos DOM
const registerForm = document.getElementById("register-form");
const loginForm = document.getElementById("login-form");
const registerContainer = document.getElementById("register-container");
const loginContainer = document.getElementById("login-container");
const letterContainer = document.getElementById("letter-container");
const messageElement = document.getElementById("message");

// Texto de la carta actualizado
const messageText = `Querida Amada,

Quiero aprovechar esta oportunidad para agradecerte por todo lo que haces por mi, 
desde tu mensaje por las mañanas, hasta el mas minimo detalle que tienes conmigo. 
Eres una persona muy importante para mí, 
y me siento increíblemente afortunado de tenerte en mi vida.

Espero que podamos seguir juntos por mucho tiempo, porque realmente deseo estar a tu lado siempre. 
También quiero disculparme si en algún momento no te he hecho sentir bien; 
sabes cuánto me importas y cuánto valoro nuestra relación...

Eres maravillosa, me encanta cada detalle de ti, 
especialmente ese culazo que tienes mami, sabes que me encanta. 
Siempre te lo diré porque nunca me cansaré de decirtelo.

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

