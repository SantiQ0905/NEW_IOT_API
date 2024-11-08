/*
-- app.js --

Este es el archivo principal de la aplicación, en el cual se configura el servidor web y se definen los endpoints de la API.

Autor: 
Santiago Quintana Moreno A01571222

Equipo #1: “Null”
Javier Santos Pérez A01198909
Irvin David Ornelas García A00839065
Alejandro Orta Rodríguez A00840490
Santiago Quintana Moreno A01571222  
*/

// Incluye en tu proyecto las dependencias necesarias
const constants = require("./constants");
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./route');

// Crear el servidor con Express.
const app = express();
const port = constants.serverPort;

// Configuración del servidor web.
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Crearacion de endpoints básicos para operaciones CRUD.
app.use(router);

// Endpoint inicial para verificar que el servidor está corriendo.
app.get("/", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>API de Sensores IoT</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; background-color: #f4f4f9; margin: 0; padding: 0; }
                h1 { color: #333; }
                p { color: #555; }
                .container { padding: 20px; max-width: 600px; margin: auto; }
                .button { background-color: #4CAF50; color: white; padding: 10px 20px; border: none; cursor: pointer; font-size: 16px; }
                .button:hover { background-color: #45a049; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Bienvenido a la API de Sensores IoT</h1>
                <p>El servidor está corriendo correctamente.</p>
                <p>Esta API permite gestionar los datos de sensores de temperatura, humedad, luz, motores y anemómetros.</p>
                <p>Utiliza los siguientes endpoints para interactuar con la API:</p>
                <ul style="text-align: left; display: inline-block;">
                    <li><strong>GET</strong> /getTemperatures</li>
                    <li><strong>POST</strong> /insertTemperature</li>
                    <li><strong>GET</strong> /getSoilMoisture</li>
                    <li><strong>POST</strong> /insertSoilMoisture</li>
                    <li><strong>GET</strong> /getLight</li>
                    <li><strong>POST</strong> /insertLight</li>
                    <li><strong>GET</strong> /getServoMotor</li>
                    <li><strong>POST</strong> /insertServoMotor</li>
                    <li><strong>GET</strong> /getAnemometer</li>
                    <li><strong>POST</strong> /insertAnemometer</li>
                </ul>
                <button class="button" onclick="alert('API de Sensores IoT en funcionamiento!')">Probar Conexión</button>
            </div>
        </body>
        </html>
    `);
});

// Arranque del server 
app.listen(port, () => {
    console.log('Server started running on : ' + port);
});
