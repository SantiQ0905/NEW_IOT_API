DELIMITER //

CREATE PROCEDURE INSERTTEMPHUM(
    IN _ID_TSENSOR INT,
    IN _ID_PLANT INT,
    IN _VALUE1 INT,
    IN _VALUE2 INT
)
BEGIN
    INSERT INTO ambientTempHum_sensor(ID_TSensor, ID_Plant, Value1, Value2, Date)
    VALUES (_ID_TSENSOR, _ID_PLANT, _VALUE1, _VALUE2, NOW());
END //

DELIMITER //

CREATE PROCEDURE INSERTWIND(
    IN _ID_ASENSOR INT,
    IN _ID_PLANT INT,
    IN _VALUE1 INT
)
BEGIN
    INSERT INTO wind_sensor(ID_ASensor, ID_Plant, Value, Date)
    VALUES (_ID_ASENSOR, _ID_PLANT, _VALUE1, NOW());
END //

DELIMITER //

CREATE PROCEDURE INSERTSOILMOISTURE(
    IN _ID_EHSENSOR INT,
    IN _ID_PLANT INT,
    IN _VALUE1 INT
)
BEGIN
    INSERT INTO sensor_soil_moisture(ID_EHSensor, ID_Plant, Value, Date)
    VALUES (_ID_EHSENSOR, _ID_PLANT, _VALUE1, NOW());
END //

DELIMITER //

CREATE PROCEDURE INSERTLIGHT(
    IN _ID_LSENSOR INT,
    IN _ID_PLANT INT,
    IN _VALUE1 INT
)
BEGIN
    INSERT INTO light_sensor(ID_LSensor, ID_Plant, Value, Date)
    VALUES (_ID_LSENSOR, _ID_PLANT, _VALUE1, NOW());
END //

DELIMITER ;

DELIMITER //
CREATE PROCEDURE PopulatePlantServoLog (
    IN input_servo_id INT,
    IN input_plant_id INT,
    IN input_value FLOAT
)
BEGIN
    INSERT INTO Plant_ServoLog (ID_Servo, ID_Plant, Value)
    VALUES (input_servo_id, input_plant_id, input_value);
END //
DELIMITER ;
