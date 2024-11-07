/*
-- sensorHumedad.js --

En este archivo se encuentran los métodos que se encargan de realizar las operaciones CRUD 
en la tabla "sensor_temperatura" de la base de datos.

Autor: 
Santiago Quintana Moreno A01571222

Equipo #1: “Null”
Javier Santos Pérez A01198909
Irvin David Ornelas García A00839065
Alejandro Orta Rodríguez A00840490
Santiago Quintana Moreno A01571222  
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
    var sql = "INSERT INTO sensor_soil_moisture (moisture_level) VALUES (?)";
    var moisture_level = req.body.moisture_level;
    var conn = mysql.getConnection();
    conn.connect((error) => {
    if (error) throw error;
        var params = [moisture_level];
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
