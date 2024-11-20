/*
-- sensorTemperatura.js --

En este archivo se encuentran los métodos que se encargan de realizar las operaciones CRUD 
en la tabla "ambientTempHum_sensor" de la base de datos.

Autor: 
Santiago Quintana Moreno A01571222

Equipo #1: “Null”
Javier Santos Pérez A01198909
Irvin David Ornelas García A00839065
Alejandro Orta Rodríguez A00840490
Santiago Quintana Moreno A01571222  
*/


const mysql = require("../database/db");
const constants = require("../constants")

// -- getLogTemperatura --
// Este método realiza un select de todos los registros ubicados en una tabla llamada "ambientTempHum_sensor".

async function getLogTemperatura(req,res){
  try{
    var sql = constants.selectTemperature;
    var conn = mysql.getConnection();
    conn.connect((error)=>{
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
  }catch(error){
    console.log(error)
    res.status(500)
    res.send(error)
  }
}


// -- getLogByDateBetween --
// Este método realiza un select de todos los registros ubicados en una tabla llamada "ambientTempHum_sensor".

async function getLogByDateBetween(req,res){
  try{
    var sql = constants.selectTemperatureByDate;
    var date_one = req.body.date_one;
    var date_two = req.body.date_two;
    var conn = mysql.getConnection();
    conn.connect((error)=>{
        if (error) throw error;
        var params = [date_one,date_two];
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
  }catch(error){
    console.log(error)
    res.status(500)
    res.send(error)
  }
  
}

// -- insertLogTemperatura --
// Este método realiza un insert en la tabla "ambientTempHum_sensor" con los valores que se reciban en el cuerpo de la petición.
async function insertLogTemperatura(req,res){
  try{
    var sql = "CALL INSERTTEMPHUM(?,?,?,?)";
    var ID_TSensor = req.body.ID_TSensor;
    var ID_Plant = req.body.ID_Plant;
    var Value1 = req.body.Value1;
    var Value2 = req.body.Value2;
  
    var conn = mysql.getConnection();
    conn.connect((error)=>{
        if (error) throw error;
        var params = [ID_TSensor, ID_Plant, Value1, Value2]; 
        conn.execute(sql, params, (error, data, fields) => {
            if (error) {
              res.status(500);
              res.send(error.message);
            } else {
              console.log(data);
              res.json({
                status: 200,
                message: "Valor insertado",
                affectedRows: data.affectedRows,
              });
            }
            conn.end();
        });
    });
  }catch(error){
    console.log(error)
    res.status(500)
    res.send(error)
  }
  
}

module.exports = {insertLogTemperatura, getLogTemperatura, getLogByDateBetween};
