/*
-- sensorHumedad.js --

En este archivo se encuentran los métodos que se encargan de realizar las operaciones CRUD
en la tabla "wind_sensor" de la base de datos.

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

// -- getLogAnemometer --
async function getLogAnemometer(req, res) {
try {
var sql = constants.selectAnemometer;
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
} catch (error) {
console.log(error);
res.status(500);
res.send(error);
}
}

// -- getAnemometerLogByDateBetween --
async function getAnemometerLogByDateBetween(req, res) {
try {
var sql = constants.selectAnemometerByDate;

var date_one = req.body.date_one;
var date_two = req.body.date_two;

var conn = mysql.getConnection();
conn.connect((error) => {
    if (error) throw error;
    var params = [date_one, date_two];
    conn.execute(sql, params, (error, data, fields) => {
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
} catch (error) {
console.log(error);
res.status(500);
res.send(error);
}
}

// -- insertLogAnemometer -- 
async function insertLogAnemometer(req, res) {
try {
    var sql = "INSERT INTO wind_sensor (ID_ASensor, ID_Plant, Value, Date) VALUES (?, ?, ?, ?)";
    
    // Extract parameters from request body
    var ID = req.body.ID;
    var ID_ASensor = req.body.ID_ASensor;
    var ID_Plant = req.body.ID_Plant;
    var Value = req.body.Value;
    var Date = req.body.Date;
    // Establish database connection
    var conn = mysql.getConnection();
    conn.connect((error) => {
        if (error) throw error;
        
        // Pass parameters directly as an array
        var params = [ID_ASensor, ID_Plant, Value, Date];
        conn.query(sql, params, (error, data, fields) => { 
            if (error) {
                res.status(500);
                res.send(error.message);
            } else {
                console.log(data);
                res.json({
                    status: 200,
                    message: "Wind data inserted",
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



module.exports = { insertLogAnemometer, getLogAnemometer, getAnemometerLogByDateBetween };
