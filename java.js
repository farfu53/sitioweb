function validateLogin() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const errorMessage = document.getElementById('errorMessage');

    if (username === "" || password === "") {
        errorMessage.textContent = "Por favor, complete todos los campos.";
        return false;
    }
    
    if (username === "1234" && password === "1234") {
        window.location.href = 'juegos.html';
        return false;
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos.";
        return false;    }
}