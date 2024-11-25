-- Insert into Servo_Catalog table
INSERT INTO `Servo_Catalog` (ID_Servo, Servo_Name) VALUES
                                                       (1, 'Servo 1'),
                                                       (2, 'Servo 2');

-- Insert into Plant table
INSERT INTO `Plant` (ID_Plant, Name_Plant, Desc_Plant) VALUES
                                                           (1, 'Plankton', 'Type: Ficus lyrata, Tree, Family: Moraceae'),
                                                           (2, 'Ms. Sofishticated', 'Type: Lavandula angustifolia, Flowering plant, Family: Lamiaceae');

-- Insert into Sensor_Catalog table
INSERT INTO `Sensor_Catalog` (ID_Sensor, SensorType) VALUES
                                                         (1, 'Light_Sensor'),
                                                         (2, 'Air_TemperatureAndHumidity'),
                                                         (3, 'ServoMotor'),
                                                         (4, 'Anemometer'),
                                                         (5, 'Dirt_Humidity');

-- Insert into User table
INSERT INTO `User` (ID_User, name, password) VALUES
                                                 (2, 'Javier Santos Pérez', 'A01198909'),
                                                 (3, 'Irvin David Ornelas García', 'A00839065'),
                                                 (4, 'Alejandro Orta Rodríguez', 'A00840490'),
                                                 (1, 'Santiago Quintana Moreno', 'A01571222');

-- Insert into Settings table
INSERT INTO Settings (ID_Settings, Screen_Mode) VALUES
                                                    (2, 'Light'),
                                                    (3, 'Dark'),
                                                    (4, 'Light'),
                                                    (1, 'Dark');

-- Insert into User_Settings table
INSERT INTO User_Settings (ID, ID_User, ID_Settings) VALUES
                                                         (2, 2, 2),
                                                         (3, 3, 3),
                                                         (4, 4, 4),
                                                         (1, 1, 1);

-- Insert into Plant_User table
INSERT INTO `Plant_User` (ID, ID_User, ID_Plant) VALUES
                                                     (1, 2, 1),
                                                     (2, 1, 2);

-- Insert into Plant_ServoConfig table
INSERT INTO `Plant_ServoConfig` (ID, ID_Servo, ID_Plant) VALUES
                                                             (1, 1, 1),
                                                             (2, 2, 2);
