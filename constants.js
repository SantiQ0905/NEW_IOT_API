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
const dbHost = "mysql-1029d018-irvinornelas2005-45db.e.aivencloud.com";
const dbPort = "16551";
const dbUser = "avnadmin";
const dbPass = "AVNS_fzVzMiarDxMUFDop0Do";
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
const insertTemperature = 'CALL INSERTTEMPHUM(?,?,?,?)';

// Soil Moisture Sensor Queries
const selectSoilMoisture = 'SELECT * FROM sensor_soil_moisture';
const insertSoilMoisture = 'CALL INSERTSOILMOISTURE(?,?,?)';

// Light Sensor Queries
const selectLight = 'SELECT * FROM light_sensor';
const selectLightByDate = 'SELECT * FROM light_sensor WHERE fecha BETWEEN ? AND ?';
const insertLight = 'CALL INSERTLIGHT';

// Servo Motor Sensor Queries
const selectServoMotor = 'SELECT * FROM motor_actuator';
const selectServoMotorByDate = 'SELECT * FROM motor_actuator WHERE fecha BETWEEN ? AND ?';
const insertServoMotor = 'INSERT INTO motor_actuator (servo_motor) VALUES (?)';

// Anemometer Sensor Queries
const selectAnemometer = 'SELECT * FROM wind_sensor';
const selectAnemometerByDate = 'SELECT * FROM wind_sensor WHERE fecha BETWEEN ? AND ?';
const insertAnemometer = 'CALL INSERTWIND(?,?,?)';

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
