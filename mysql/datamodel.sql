USE hustleDB;

-- INITIAL CREATION OF TABLES AND QUERIES
CREATE TABLE Gyms (
	GymID INTEGER NOT NULL,
    GymName VARCHAR(100) NOT NULL,
    GymDesc VARCHAR(255) DEFAULT NULL,
    Latitude DECIMAL(10, 7) NOT NULL,
    Longitude DECIMAL(10, 7) NOT NULL,
    ImagePath VARCHAR(255) NOT NULL,
    PRIMARY KEY (GymID)
);

CREATE TABLE Users (
	UserID INTEGER NOT NULL,
    FirstName VARCHAR(50) NOT NULL,
    LastName VARCHAR(50) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Pass VARCHAR(255) NOT NULL,
    PRIMARY KEY (UserID)
);

CREATE TABLE Reviews (
	ReviewID INTEGER NOT NULL,
    Review VARCHAR(255) NOT NULL,
	Rating INTEGER NOT NULL,
    GymID INTEGER NOT NULL,
    UserID INTEGER NOT NULL,
    FOREIGN KEY (GymID) REFERENCES Gyms(GymID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    PRIMARY KEY (ReviewID)
);

INSERT INTO Gyms VALUES (0, 'Fit4Less', '3434 Lawrence Avenue East', 43.760184874119524, -79.22848806953778, '/images/ef9338618abacb2e54a462792324b3c6');
INSERT INTO Gyms VALUES (1, 'Goodlife Fitness', '3495 Lawrence Avenue East', 43.75936073944207, -79.22636479263029, '/images/879bf4e70a0f034be8413cf67129f362');
INSERT INTO Gyms VALUES (2, 'Snap Fitness', '8130 Sheppard Avenue East', 43.80276095567687, -79.19796443984907, '/images/cffdd44593f6414f4fa1eb57fdf8bf7c');
INSERT INTO Gyms VALUES (3, 'World Gym', '1455 McCowan Road', 43.784495020847004, -79.25541754349388, '/images/9e55ee0ca048919a6b6ed278a4e33f1a');
INSERT INTO Gyms VALUES (4, 'LA Fitness', '33 William Kitchen Rd', 43.77433447276707, -79.2814474713105, '/images/e3c405602f191d9e73b937f808913bd3');

INSERT INTO Users VALUES (0, 'Timothy', 'Choy', 'tc@gmail.com', 'password');
INSERT INTO Users VALUES (1, 'Ridhwan', 'Chowdhury','rc@gmail.com', 'test123');
INSERT INTO Users VALUES (2, 'John', 'Doe', 'email@email.com', 'pwd');
INSERT INTO Users VALUES (3, 'Clark', 'Kent', 'notsuperman@gmail.com', 'notsuperman');
INSERT INTO Users VALUES (4, 'Test', 'User', 'fake@hotmail.com', 'password');

INSERT INTO Reviews VALUES (0, 'Clean and friendly atmosphere.', 5, 0, 0);
INSERT INTO Reviews VALUES (1, 'Not worth it. Don\'t come.', 1, 2, 3);
INSERT INTO Reviews VALUES (2, 'They had good customer service.', 4, 1, 4);
INSERT INTO Reviews VALUES (3, 'Great gym for a quick workout.', 4, 4, 1);
INSERT INTO Reviews VALUES (4, 'Bad payment system. Wouldn\'t go again', 1, 2, 4);