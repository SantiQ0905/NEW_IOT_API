
/*
 * LOCAL DATABASE Config
 * 
 *  Para acceder a una BD en la nube debes configurar un archivo .env
 */
const dbHost = "mysql-2cb3001c-tec-ccea.d.aivencloud.com";
const dbPort ="17179";
const dbUser = "avnadmin";
const dbPass ="AVNS_vpIyR4RVAho-2_Z9cB5";
const dbName = "iot";



/*
 * Server General Configuration
 */
const serverPort = 3000
const contextURL = '/iot'; //If needed, project context
const api = '/api'; // Sugested API URL

// SENSOR 1 (Temperature) URLs
const getTemperatureSensor = '/getTemperatures'
const getTemperatureSensorByDate = '/getTemperatures'
const postTemperatureSensor = '/insertTemperature'; 

// SENSOR 2 (Soil Moisture) URLs
const getSoilMoistureSensor = '/getSoilMoisture';
const postSoilMoistureSensor = '/insertSoilMoisture';

/*
 * DB Queries
 * Agregar queries por sensor.
 */

// Temperature Sensor Queries
const selectTemperature = 'SELECT * FROM temps';
const selectTemperatureByDate = 'SELECT * FROM temps WHERE fecha between ? and ?';
const insertTemperature = 'INSERT INTO temps (temperature, humidity) VALUES (?, ?)';

// Soil Moisture Sensor Queries
const selectSoilMoisture = 'SELECT * FROM sensor_soil_moisture';
const insertSoilMoisture = 'INSERT INTO sensor_soil_moisture (moisture_level) VALUES (?)';


module.exports = {
   dbHost, dbPort, dbUser, dbPass, dbName, serverPort, contextURL, api,
   getTemperatureSensor, getTemperatureSensorByDate, postTemperatureSensor,
   selectTemperature, selectTemperatureByDate, insertTemperature,
   getSoilMoistureSensor, postSoilMoistureSensor, selectSoilMoisture, insertSoilMoisture
};