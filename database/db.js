/*
-- db.js --

En este archivo se configura la conexión a la base de datos, utilizando las credenciales de acceso y el certificado SSL 
proporcionados por Aiven.

Autor: 
Santiago Quintana Moreno A01571222

Equipo #1: “Null”
Javier Santos Pérez A01198909
Irvin David Ornelas García A00839065
Alejandro Orta Rodríguez A00840490
Santiago Quintana Moreno A01571222  
*/

// Incluye las dependencias necesarias
const mysql = require('mysql2');
var fs = require("fs");
require('dotenv').config() 

// Obtiene las variables de entorno
const {DB_HOST, DB_PORT,DB_USER, DB_PASS} = process.env

// Método que configura un objeto conexión y lo regresa a quien lo solicite.
function getConnection(){
  const connection = mysql.createConnection({
    host: "mysql-2cb3001c-tec-ccea.d.aivencloud.com",
    user: "avnadmin",
    port: "17179",
    password: "AVNS_vpIyR4RVAho-2_Z9cB5",
    database: "iot",
    dateStrings: true, 
    ssl: {
      ca: fs.readFileSync("./database/ca.pem")
    }
  });

  return connection;
}

module.exports = {getConnection};
