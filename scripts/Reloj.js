// script.js

// Variables para almacenar el tiempo
let segundos = 0;
let minutos = 0;
let interval;

// Función para actualizar el reloj
function updateReloj() {
    segundos++;

    // Si los segundos llegan a 60, se incrementan los minutos y se reinician los segundos
    if (segundos === 60) {
        segundos = 0;
        minutos++;
    }

    // Actualiza los elementos de minutos y segundos
    document.getElementById("minutos").textContent = 
        (minutos < 10 ? '0' + minutos : minutos);
    document.getElementById("segundos").textContent = 
        (segundos < 10 ? '0' + segundos : segundos);
}

// Iniciar el contador cuando la página carga
window.onload = function() {
    interval = setInterval(updateReloj, 1000); // Actualiza cada segundo
};