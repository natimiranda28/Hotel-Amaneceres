const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('public')); // Carpeta con HTML, CSS e imágenes
app.use(express.json());

// Ruta para servir el HTML principal
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta que recibe el formulario
app.post('/api/contacto', (req, res) => {
    const { name, email, message } = req.body;
    console.log('Mensaje recibido:', name, email, message);
    
    
    res.json({ message: '¡Gracias por tu mensaje, ' + name + '!' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});




