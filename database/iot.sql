
-- Plant details
CREATE TABLE Plant (
                       ID_Plant INT AUTO_INCREMENT PRIMARY KEY,
                       Name_Plant VARCHAR(255) NOT NULL,
                       Desc_Plant TEXT
);

-- Servo catalog for managing servo details
CREATE TABLE Servo_Catalog (
                               ID_Servo INT AUTO_INCREMENT PRIMARY KEY,
                               Servo_Name VARCHAR(255) NOT NULL
);

-- Plant configuration for linking servos to plants
CREATE TABLE Plant_ServoConfig (
                                   ID INT AUTO_INCREMENT PRIMARY KEY,
                                   ID_Servo INT NOT NULL,
                                   ID_Plant INT NOT NULL,
                                   FOREIGN KEY (ID_Servo) REFERENCES Servo_Catalog(ID_Servo),
                                   FOREIGN KEY (ID_Plant) REFERENCES Plant(ID_Plant)
);

-- Log for servo-related actions for all plants
CREATE TABLE Plant_ServoLog (
                                ID INT AUTO_INCREMENT PRIMARY KEY,
                                ID_Servo INT NOT NULL,
                                ID_Plant INT NOT NULL,
                                Value FLOAT NOT NULL,
                                Date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                                FOREIGN KEY (ID_Servo) REFERENCES Servo_Catalog(ID_Servo),
                                FOREIGN KEY (ID_Plant) REFERENCES Plant(ID_Plant)
);

-- User details
CREATE TABLE User (
                      ID_User INT AUTO_INCREMENT PRIMARY KEY,
                      name VARCHAR(255) NOT NULL,
                      password VARCHAR(255) NOT NULL
);

-- Settings for users
CREATE TABLE Settings (
                          ID_Settings INT AUTO_INCREMENT PRIMARY KEY,
                          Screen_Mode VARCHAR(50)
);

-- Sensor catalog for managing sensors
CREATE TABLE Sensor_Catalog (
                                ID_Sensor INT AUTO_INCREMENT PRIMARY KEY,
                                SensorType VARCHAR(50) NOT NULL
);

-- Ambient temperature and humidity sensor data
CREATE TABLE ambientTempHum_sensor (
                                       ID INT AUTO_INCREMENT PRIMARY KEY,
                                       ID_TSensor INT NOT NULL,
                                       ID_Plant INT NOT NULL,
                                       Value1 FLOAT NOT NULL,
                                       Value2 FLOAT NOT NULL,
                                       Date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                                       FOREIGN KEY (ID_TSensor) REFERENCES Sensor_Catalog(ID_Sensor),
                                       FOREIGN KEY (ID_Plant) REFERENCES Plant(ID_Plant)
);

-- Wind sensor data
CREATE TABLE wind_sensor (
                             ID INT AUTO_INCREMENT PRIMARY KEY,
                             ID_ASensor INT NOT NULL,
                             ID_Plant INT NOT NULL,
                             Value FLOAT NOT NULL,
                             Date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                             FOREIGN KEY (ID_ASensor) REFERENCES Sensor_Catalog(ID_Sensor),
                             FOREIGN KEY (ID_Plant) REFERENCES Plant(ID_Plant)
);

-- Light sensor data
CREATE TABLE light_sensor (
                              ID INT AUTO_INCREMENT PRIMARY KEY,
                              ID_LSensor INT NOT NULL,
                              ID_Plant INT NOT NULL,
                              Value FLOAT NOT NULL,
                              Date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                              FOREIGN KEY (ID_LSensor) REFERENCES Sensor_Catalog(ID_Sensor),
                              FOREIGN KEY (ID_Plant) REFERENCES Plant(ID_Plant)
);

-- Soil moisture sensor data
CREATE TABLE sensor_soil_moisture (
                                      ID INT AUTO_INCREMENT PRIMARY KEY,
                                      ID_EHSensor INT NOT NULL,
                                      ID_Plant INT NOT NULL,
                                      Value FLOAT NOT NULL,
                                      Date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                                      FOREIGN KEY (ID_EHSensor) REFERENCES Sensor_Catalog(ID_Sensor),
                                      FOREIGN KEY (ID_Plant) REFERENCES Plant(ID_Plant)
);

-- Air velocity log
CREATE TABLE AirV_Log (
                          ID INT AUTO_INCREMENT PRIMARY KEY,
                          ID_AHSensor INT NOT NULL,
                          ID_Plant INT NOT NULL,
                          Value FLOAT NOT NULL,
                          Date DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
                          FOREIGN KEY (ID_AHSensor) REFERENCES Sensor_Catalog(ID_Sensor),
                          FOREIGN KEY (ID_Plant) REFERENCES Plant(ID_Plant)
);

-- User-Plant relationship
CREATE TABLE Plant_User (
                            ID INT AUTO_INCREMENT PRIMARY KEY,
                            ID_User INT NOT NULL,
                            ID_Plant INT NOT NULL,
                            FOREIGN KEY (ID_User) REFERENCES User(ID_User),
                            FOREIGN KEY (ID_Plant) REFERENCES Plant(ID_Plant)
);

-- User-Settings relationship
CREATE TABLE User_Settings (
                               ID INT AUTO_INCREMENT PRIMARY KEY,
                               ID_User INT NOT NULL,
                               ID_Settings INT NOT NULL,
                               FOREIGN KEY (ID_User) REFERENCES User(ID_User),
                               FOREIGN KEY (ID_Settings) REFERENCES Settings(ID_Settings)
);