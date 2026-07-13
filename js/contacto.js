/* validacion - popups ===== */

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const servicio = document.getElementById('servicio');
    const mensaje = document.getElementById('mensaje');

    // reset
    const inputs = [nombre, email, servicio, mensaje];
    inputs.forEach(input => input.style.borderColor = 'rgba(255, 255, 255, 0.1)');

    let isValid = true;

    if(nombre.value.trim() === '') { nombre.style.borderColor = '#ef4444'; isValid = false; }
    if(email.value.trim() === '') { email.style.borderColor = '#ef4444'; isValid = false; }
    if(servicio.value === '') { servicio.style.borderColor = '#ef4444'; isValid = false; }
    if(mensaje.value.trim() === '') { mensaje.style.borderColor = '#ef4444'; isValid = false; }

    const overlay = document.getElementById('popup-overlay');
    if (isValid) {
        overlay.style.display = 'block';
        document.getElementById('popup-success').style.display = 'block';
        this.reset();
    } else {
        overlay.style.display = 'block';
        document.getElementById('popup-error').style.display = 'block';
    }
});

function closePopup() {
    document.getElementById('popup-overlay').style.display = 'none';
    document.getElementById('popup-success').style.display = 'none';
    document.getElementById('popup-error').style.display = 'none';
}