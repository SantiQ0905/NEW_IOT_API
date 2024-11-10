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
const dbPort = "17179";
const dbUser = "avnadmin";
const dbPass = "AVNS_vpIyR4RVAho-2_Z9cB5";
const dbName = "iot";

// Configuración del servidor
const serverPort = 3000;
const contextURL = '/iot'; // Ruta de contexto del proyecto
const api = '/api'; // URL de accesso API

// SENSOR 1: "sensorTemperatura" URLs
const getTemperatureSensor = '/getTemperatures';
const getTemperatureSensorByDate = '/getTemperatures';
const postTemperatureSensor = '/insertTemperature';

// SENSOR 2: "sensorHumedad" URLs
const getSoilMoistureSensor = '/getSoilMoisture';
const postSoilMoistureSensor = '/insertSoilMoisture';

// SENSOR 3: "sensorLuz" URLs
const getLightSensor = '/getLight';
const getLightSensorByDate = '/getLightByDate';
const postLightSensor = '/insertLight';

// SENSOR 4: "sensorServoMotor" URLs
const getServoMotorSensor = '/getServoMotor';
const getServoMotorSensorByDate = '/getServoMotorByDate';
const postServoMotorSensor = '/insertServoMotor';

// SENSOR 5: "sensorAnemometro" URLs
const getAnemometerSensor = '/getAnemometer';
const getAnemometerSensorByDate = '/getAnemometerByDate';
const postAnemometerSensor = '/insertAnemometer';

// DB Queries
// Temperature Sensor Queries
const selectTemperature = 'SELECT * FROM ambientTempHum_sensor';
const selectTemperatureByDate = 'SELECT * FROM ambientTempHum_sensor WHERE fecha BETWEEN ? AND ?';
const insertTemperature = 'INSERT INTO ambientTempHum_sensor (ID_TSensor, ID_Plant, Value1, Value2, date) VALUES (?, ?, ?, ?, ?)';

// Soil Moisture Sensor Queries
const selectSoilMoisture = 'SELECT * FROM sensor_soil_moisture';
const insertSoilMoisture = 'INSERT INTO sensor_soil_moisture (ID_EHSensor, ID_Plant, Value, Date) VALUES (?, ?, ?, ?)';

// Light Sensor Queries
const selectLight = 'SELECT * FROM light_sensor';
const selectLightByDate = 'SELECT * FROM light_sensor WHERE fecha BETWEEN ? AND ?';
const insertLight = 'INSERT INTO light_sensor (light) VALUES (?)';

// Servo Motor Sensor Queries
const selectServoMotor = 'SELECT * FROM motor_actuator';
const selectServoMotorByDate = 'SELECT * FROM motor_actuator WHERE fecha BETWEEN ? AND ?';
const insertServoMotor = 'INSERT INTO motor_actuator (servo_motor) VALUES (?)';

// Anemometer Sensor Queries
const selectAnemometer = 'SELECT * FROM wind_sensor';
const selectAnemometerByDate = 'SELECT * FROM wind_sensor WHERE fecha BETWEEN ? AND ?';
const insertAnemometer = 'INSERT INTO wind_sensor (wind) VALUES (?)';

// Exportar las constantes
module.exports = {
dbHost, dbPort, dbUser, dbPass, dbName, serverPort, contextURL, api,
getTemperatureSensor, getTemperatureSensorByDate, postTemperatureSensor,
selectTemperature, selectTemperatureByDate, insertTemperature,
getSoilMoistureSensor, postSoilMoistureSensor, selectSoilMoisture, insertSoilMoisture,
getLightSensor, getLightSensorByDate, postLightSensor, selectLight, selectLightByDate, insertLight,
getServoMotorSensor, getServoMotorSensorByDate, postServoMotorSensor, selectServoMotor, selectServoMotorByDate, insertServoMotor,
getAnemometerSensor, getAnemometerSensorByDate, postAnemometerSensor, selectAnemometer, selectAnemometerByDate, insertAnemometer
};
