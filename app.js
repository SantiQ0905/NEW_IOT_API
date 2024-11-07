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

//Incluye en tu proyecto las dependencias necesarias
const constants = require("./constants")
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const router = require('./route')

// Crear el servidor con Express.
const app = express();
const port = constants.serverPort;

//Configuración del servidor web.
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Crearacion de endpoints básicos para operaciones CRUD.
app.use(router);


// Endpoint inicial para verificar que el servidor está corriendo.
app.get("/", (req, res) => {
    res.send('El servidor está corriendo correctamente!!! Bienvenido a la API de Sensores IoT');
});

// Arranque del server 
app.listen(port, () => {
    console.log('Server started running on : ' + port)
})