document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contacto").addEventListener("submit", function (event) {
        event.preventDefault(); // Evita que la página se recargue al enviar

        let nombre = document.getElementById("nombre").value.trim();
        let email = document.getElementById("email").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();
        let botonEnviar = document.querySelector("button");

        if (nombre === "" || email === "" || mensaje === "") {
            alert("Por favor, complete todos los campos.");
        } else {
            botonEnviar.disabled = true; // Deshabilita el botón temporalmente
            botonEnviar.innerText = "Enviando...";

            setTimeout(() => {
                alert("Formulario enviado correctamente.");
                document.getElementById("contacto").reset();
                botonEnviar.disabled = false; // Reactiva el botón
                botonEnviar.innerText = "Enviar";
            }, 2000);
        }
    });
});

