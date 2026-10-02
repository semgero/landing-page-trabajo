document.addEventListener('DOMContentLoaded', () => {
    const botonSaludar = document.getElementById('saludar');

    if (botonSaludar) {
        botonSaludar.addEventListener('click', () => {
            alert('¡Hola! Bienvenido a nuestra landing page.');
        });
    }
});
