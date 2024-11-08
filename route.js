/*
-- route.js --

En este archivo se definen las rutas de cada endpoint y se asigna su respectivo controlador.

Autor: 
Santiago Quintana Moreno A01571222

Equipo #1: “Null”
Javier Santos Pérez A01198909
Irvin David Ornelas García A00839065
Alejandro Orta Rodríguez A00840490
Santiago Quintana Moreno A01571222  
*/

const constants = require("./constants");
const express = require('express');
const temperaturaController = require('./RestControllers/sensorTemperatura.js'); 
const soilMoistureController = require('./RestControllers/sensorHumedad.js'); 
const lightController = require('./RestControllers/sensorLuz.js'); 
const servoMotorController = require('./RestControllers/actuadorMotor.js');
const anemometerController = require('./RestControllers/sensorViento.js');
const router = express.Router();

// Definiciones de rutas de cada endpoint y su respectivo controlador

// Rutas de sensor de temperatura
router.get(constants.contextURL + constants.api + constants.getTemperatureSensor, temperaturaController.getLogTemperatura);
router.post(constants.contextURL + constants.api + constants.getTemperatureSensorByDate, temperaturaController.getLogByDateBetween);
router.post(constants.contextURL + constants.api + constants.postTemperatureSensor, temperaturaController.insertLogTemperatura);

// Rutas de sensor de humedad
router.get(constants.contextURL + constants.api + constants.getSoilMoistureSensor, soilMoistureController.getSoilMoistureLog);
router.post(constants.contextURL + constants.api + constants.postSoilMoistureSensor, soilMoistureController.insertSoilMoistureLog);

// Rutas de sensor de luz
router.get(constants.contextURL + constants.api + constants.getLightSensor, lightController.getLogLight);
router.post(constants.contextURL + constants.api + constants.getLightSensorByDate, lightController.getLightLogByDateBetween);
router.post(constants.contextURL + constants.api + constants.postLightSensor, lightController.insertLogLight);

// Rutas de sensor de servo motor
router.get(constants.contextURL + constants.api + constants.getServoMotorSensor, servoMotorController.getLogServoMotor);
router.post(constants.contextURL + constants.api + constants.getServoMotorSensorByDate, servoMotorController.getServoMotorLogByDateBetween);
router.post(constants.contextURL + constants.api + constants.postServoMotorSensor, servoMotorController.insertLogServoMotor);

// Rutas de sensor de anemómetro
router.get(constants.contextURL + constants.api + constants.getAnemometerSensor, anemometerController.getLogAnemometer);
router.post(constants.contextURL + constants.api + constants.getAnemometerSensorByDate, anemometerController.getAnemometerLogByDateBetween);
router.post(constants.contextURL + constants.api + constants.postAnemometerSensor, anemometerController.insertLogAnemometer);

module.exports = router;
