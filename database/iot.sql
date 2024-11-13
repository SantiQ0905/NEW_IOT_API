/*
-- iot.js --

En este archivo se encuentran las instrucciones para la creación de la base de datos que se utilizará en el proyecto de IoT.
El archivo se encuentra dividido en dos partes: la primera parte contiene la creación de las tablas que se utilizarán en el proyecto, y 
la segunda parte contiene la inserción de datos de prueba en las tablas.

Autor: 
Santiago Quintana Moreno A01571222

Equipo #1: “Null”
Javier Santos Pérez A01198909
Irvin David Ornelas García A00839065
Alejandro Orta Rodríguez A00840490
*/


CREATE TABLE motor_actuator (
    ID_Servo INT PRIMARY KEY,
    Log TEXT,
    Date INT
);

CREATE TABLE Plant (
    ID_Plant INT PRIMARY KEY,
    Name_Plant VARCHAR(255),
    Desc_Plant TEXT
);

CREATE TABLE User (
    ID_User INT PRIMARY KEY,
    name VARCHAR(255),
    password VARCHAR(255)
);

CREATE TABLE Settings (
    ID_Settings INT PRIMARY KEY,
    Screen_Mode VARCHAR(50)
);

CREATE TABLE Sensor_Catalog (
    ID_Sensor INT PRIMARY KEY,
    SensorType VARCHAR(50)
);

CREATE TABLE ambientTempHum_sensor (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_TSensor INT,
    ID_Plant INT,
    Value1 FLOAT,
    Value2 FLOAT,
    Date INT,
    FOREIGN KEY (ID_TSensor) REFERENCES Sensor_Catalog(ID_Sensor),
    FOREIGN KEY (ID_Plant) REFERENCES Plant(ID_Plant)
);

CREATE TABLE wind_sensor (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_ASensor INT,
    ID_Plant INT,
    Value FLOAT,
    Date INT,
    FOREIGN KEY (ID_ASensor) REFERENCES Sensor_Catalog(ID_Sensor),
    FOREIGN KEY (ID_Plant) REFERENCES Plant(ID_Plant)
);

CREATE TABLE light_sensor (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_LSensor INT,
    ID_Plant INT,
    Value FLOAT,
    Date INT,
    FOREIGN KEY (ID_LSensor) REFERENCES Sensor_Catalog(ID_Sensor),
    FOREIGN KEY (ID_Plant) REFERENCES Plant(ID_Plant)
);

CREATE TABLE sensor_soil_moisture (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_EHSensor INT,
    ID_Plant INT,
    Value FLOAT,
    Date INT,
    FOREIGN KEY (ID_EHSensor) REFERENCES Sensor_Catalog(ID_Sensor),
    FOREIGN KEY (ID_Plant) REFERENCES Plant(ID_Plant)
);

CREATE TABLE AirV_Log (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_AHSensor INT,
    ID_Plant INT,
    Value FLOAT,
    Date INT,
    FOREIGN KEY (ID_AHSensor) REFERENCES Sensor_Catalog(ID_Sensor),
    FOREIGN KEY (ID_Plant) REFERENCES Plant(ID_Plant)
);

CREATE TABLE Plant_Servo (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_Servo INT,
    ID_Plant INT,
    FOREIGN KEY (ID_Servo) REFERENCES motor_actuator(ID_Servo),
    FOREIGN KEY (ID_Plant) REFERENCES Plant(ID_Plant)
);

CREATE TABLE Plant_User (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_User INT,
    ID_Plant INT,
    FOREIGN KEY (ID_User) REFERENCES User(ID_User),
    FOREIGN KEY (ID_Plant) REFERENCES Plant(ID_Plant)
);

CREATE TABLE User_Settings (
    ID INT AUTO_INCREMENT PRIMARY KEY,
    ID_User INT,
    ID_Settings INT,
    FOREIGN KEY (ID_User) REFERENCES User(ID_User),
    FOREIGN KEY (ID_Settings) REFERENCES Settings(ID_Settings)
);

DELIMITER //

CREATE PROCEDURE GetRecentSensorReadings(
    IN p_PlantID INT,
    IN p_SensorType VARCHAR(50),
    IN p_Date INT
)
BEGIN
    SELECT sc.SensorType, ats.Value1 AS Temperature, ats.Value2 AS Humidity, ws.Value AS WindSpeed,
           ls.Value AS Light, ss.Value AS SoilMoisture, avl.Value AS AirVelocity
    FROM Plant AS p
             JOIN ambientTempHum_sensor AS ats ON p.ID_Plant = ats.ID_Plant
             JOIN wind_sensor AS ws ON p.ID_Plant = ws.ID_Plant
             JOIN light_sensor AS ls ON p.ID_Plant = ls.ID_Plant
             JOIN sensor_soil_moisture AS ss ON p.ID_Plant = ss.ID_Plant
             JOIN AirV_Log AS avl ON p.ID_Plant = avl.ID_Plant
             JOIN Sensor_Catalog AS sc ON sc.ID_Sensor = ats.ID_TSensor OR sc.ID_Sensor = ws.ID_ASensor
        OR sc.ID_Sensor = ls.ID_LSensor OR sc.ID_Sensor = ss.ID_EHSensor
        OR sc.ID_Sensor = avl.ID_AHSensor
    WHERE p.ID_Plant = p_PlantID AND sc.SensorType = p_SensorType AND
        (ats.Date >= p_Date OR ws.Date >= p_Date OR ls.Date >= p_Date
            OR ss.Date >= p_Date OR avl.Date >= p_Date)
    ORDER BY ats.Date DESC, ws.Date DESC, ls.Date DESC, ss.Date DESC, avl.Date DESC;
END //

DELIMITER ;
