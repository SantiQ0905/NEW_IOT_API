/*
-- constants.js --

En este archivo se definen las constantes que se utilizan en el proyecto, como las credenciales de la base de datos, 
el puerto del servidor y las rutas de los endpoints de la API.

Autor: 
Santiago Quintana Moreno A01571222

Equipo #1: “Null”
Javier Santos Pérez A01198909
Irvin David Ornelas García A00839065
Alejandro Orta Rodríguez A00840490
Santiago Quintana Moreno A01571222  
*/

// Configuración de la base de datos y del servidor.
const dbHost = "mysql-2cb3001c-tec-ccea.d.aivencloud.com";
const dbPort ="17179";
const dbUser = "avnadmin";
const dbPass ="AVNS_vpIyR4RVAho-2_Z9cB5";
const dbName = "iot";

// Configuración del servidor
const serverPort = 3000
const contextURL = '/iot'; // Ruta de contexto del proyecto
const api = '/api'; // URL de accesso API

// SENSOR 1: "sensorTemperatura" URLs
const getTemperatureSensor = '/getTemperatures'
const getTemperatureSensorByDate = '/getTemperatures'
const postTemperatureSensor = '/insertTemperature'; 

// SENSOR 2: "sensorHumedad" URLs
const getSoilMoistureSensor = '/getSoilMoisture';
const postSoilMoistureSensor = '/insertSoilMoisture';


// DB Queries
   // Temperature Sensor Queries
   const selectTemperature = 'SELECT * FROM temps';
   const selectTemperatureByDate = 'SELECT * FROM temps WHERE fecha between ? and ?';
   const insertTemperature = 'INSERT INTO temps (temperature, humidity) VALUES (?, ?)';

   // Soil Moisture Sensor Queries
   const selectSoilMoisture = 'SELECT * FROM sensor_soil_moisture';
   const insertSoilMoisture = 'INSERT INTO sensor_soil_moisture (moisture_level) VALUES (?)';

// Exportar las constantes
module.exports = {
   dbHost, dbPort, dbUser, dbPass, dbName, serverPort, contextURL, api,
   getTemperatureSensor, getTemperatureSensorByDate, postTemperatureSensor,
   selectTemperature, selectTemperatureByDate, insertTemperature,
   getSoilMoistureSensor, postSoilMoistureSensor, selectSoilMoisture, insertSoilMoisture
};