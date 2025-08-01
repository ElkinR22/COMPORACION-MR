const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

// Conectar a la base de datos
connectDB();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba de la API
app.get('/api/test', (req, res) => {
    res.json({ msg: 'La API del sistema financiero funciona correctamente' });
});

// Definir las rutas de la API
app.use('/api/auth', require('./auth'));
// app.use('/api/transactions', require('./transactions'));

const PORT = process.env.PORT || 5000; // Cambiado al puerto 5000 para evitar conflictos con el frontend

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
