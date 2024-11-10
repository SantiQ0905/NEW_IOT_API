/*
-- actuadorMotor.js --

En este archivo se encuentran los métodos que se encargan de realizar las operaciones CRUD 
en la tabla "motor_actuador" de la base de datos.

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

//getLogServoMotor
async function getLogServoMotor(req, res) {
try {
var sql = constants.selectServoMotor;
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

// -- getServoMotorLogByDateBetween --
async function getServoMotorLogByDateBetween(req, res) {
try {
var sql = constants.selectServoMotorByDate;
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

// -- insertLogServoMotor -- 
async function insertLogServoMotor(req, res) {
try {
var sql = "INSERT INTO motor_actuator (ID_Servo, Log, Date) VALUES (?, ?, ?)";
var ID_Servo = req.body.ID_Servo;
var Log = req.body.Log;
var Date = req.body.Date;

var conn = mysql.getConnection();
conn.connect((error) => {
    if (error) throw error;
    var params = [ID_Servo, Log, Date];
    conn.execute(sql, [servo_motor], (error, data, fields) => {
    if (error) {
        res.status(500);
        res.send(error.message);
    } else {
        console.log(data);
        res.json({
        status: 200,
        message: "Actuador Motor datos insertados",
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

module.exports = { insertLogServoMotor, getLogServoMotor, getServoMotorLogByDateBetween };
