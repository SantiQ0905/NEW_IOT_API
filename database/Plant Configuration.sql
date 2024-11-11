INSERT INTO `Plant` (ID_Plant, Name_Plant, Desc_Plant) VALUES
                                                         (1, 'Plankton', 'Type: Ficus lyrata, Tree, Family: Moraceae'),
                                                         (2, 'Ms. Sofishticated', 'Type: Lavandula angustifolia, Flowering plant, Family: Lamiaceae');

INSERT INTO `Plant_User` (ID, ID_User, ID_Plant) VALUES
                                                     (1,2,1),
                                                     (2,1,2);
