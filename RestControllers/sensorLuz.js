/*
-- sensorLuz.js --

En este archivo se encuentran los métodos que se encargan de realizar las operaciones CRUD 
en la tabla "light_sensor" de la base de datos.

Autor: 
Javier Santos Pérez A01198909

Coautor:
Santiago Quintana Moreno A01571222

Equipo #1: “Null”
Irvin David Ornelas García A00839065
Alejandro Orta Rodríguez A00840490
*/

const mysql = require("../database/db");
const constants = require("../constants")

// -- getLogLight --
// Este método realiza un select de todos los registros ubicados en una tabla llamada "light_sensor".
async function getLogLight(req, res) {
  try {
    var sql = constants.selectLight;
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


// -- getLogByDateBetween --
// Este método realiza un select de todos los registros ubicados en una tabla llamada "light_sensor".
async function getLightLogByDateBetween(req, res) {
  try {
    var sql = constants.selectLightByDate;

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

// -- insertLogLight --
// Este método realiza un insert en la tabla "light_sensor".
async function insertLogLight(req, res) {
  try {
    var sql = "INSERT INTO light_sensor (ID, ID_LSensor, ID_Plant, Value, Date) VALUES (?, ?, ?, ?, ?)";
    var ID = req.body.ID;
    var ID_LSensor = req.body.ID_LSensor;
    var ID_Plant = req.body.ID_Plant;
    var Value = req.body.Value;
    var Date = req.body.Date;

    var conn = mysql.getConnection();
    conn.connect((error) => {
      if (error) throw error;
      conn.execute(sql, [light], (error, data, fields) => {
        if (error) {
          res.status(500);
          res.send(error.message);
        } else {
          console.log(data);
          res.json({
            status: 200,
            message: "Sensor de luz datos insertados",
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

module.exports = { insertLogLight, getLogLight, getLightLogByDateBetween };
