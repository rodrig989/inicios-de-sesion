const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('Usuario').value.trim();
    const password = document.getElementById('Contraseña').value;


    if (username==="" || password === "") {
        alert("Por favor, llena todos los campos.");
        return;
    }

   
    console.log("Usuario ingresado:", username);
    console.log("Contraseña ingresada:", password);

    alert(`¡Bienvenido, {username}!`);
});