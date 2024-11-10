/*
-- sensorHumedad.js --

En este archivo se encuentran los métodos que se encargan de realizar las operaciones CRUD 
en la tabla "sensor_soil_moisture" de la base de datos.

Autor: 
Javier Santos Pérez A01198909

Coautor:
Santiago Quintana Moreno A01571222

Equipo #1: “Null”
Irvin David Ornelas García A00839065
Alejandro Orta Rodríguez A00840490
*/

const mysql = require("../database/db");
const constants = require("../constants");

// -- getSoilMoistureLog --
// Esta funcion recibe todas las entradas en la tabla "sensor_soil_moisture".
async function getSoilMoistureLog(req, res) {
try {
    var sql = constants.selectSoilMoisture;
    var conn = mysql.getConnection();
    conn.connect((error) => {
    if (error) throw error;
        conn.query(sql, (error, data, fields) => {
        if (error) {
            res.status(500);
            res.send(error.message);
        } else {
            console.log(data);
            res.json({
            data,
        });
        }
        conn.end();
    });
    });
}catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
}
}

// -- insertSoilMoistureLog --
// Esta funcion inserta una nueva entrada en la tabla "sensor_soil_moisture".

async function insertSoilMoistureLog(req, res) {
try {
    var sql = "INSERT INTO sensor_soil_moisture (ID_EHSensor, ID_Plant, Value, Date) VALUES (?, ?, ?, ?)";
    var ID_EHSensor = req.body.ID_EHSensor;
    var ID_Plant = req.body.ID_Plant;
    var Value = req.body.Value;
    var Date = req.body.Date;

    var conn = mysql.getConnection();
    conn.connect((error) => {
    if (error) throw error;
        var params = [ID_EHSensor,ID_Plant, Value, Date];
        conn.execute(sql, params, (error, data, fields) => {
        if (error) {
            res.status(500);
            res.send(error.message);
        } else {
            console.log(data);
            res.json({
            status: 200,
            message: "Soil moisture data inserted",
            affectedRows: data.affectedRows,
        });
        }
        conn.end();
    });
    });
} catch (error) {
    console.log(error);
    res.status(500);
    res.send(error);
}
}

module.exports = { insertSoilMoistureLog, getSoilMoistureLog };
