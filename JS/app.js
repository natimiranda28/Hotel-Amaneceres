

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario

    var name = document.getElementById('nombre').value;
    var email = document.getElementById('correo').value;
    var message = document.getElementById('mensaje').value;

    // Verifica si hay campos vacíos
    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
        alert('Por favor, completa todos los campos.');
        return;
    }

    console.log('Nombre:', name);
    console.log('Correo Electrónico:', email);
    console.log('Mensaje:', message);

    // Limpia los campos del formulario
    document.getElementById('nombre').value = '';
    document.getElementById('correo').value = '';
    document.getElementById('mensaje').value = '';

    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
});
