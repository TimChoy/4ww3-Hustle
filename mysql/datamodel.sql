USE hustleDB;

CREATE TABLE Gyms (
	GymID INTEGER NOT NULL,
    GymName VARCHAR(100) NOT NULL,
    GymDesc VARCHAR(255) NOT NULL,
    Latitude DECIMAL(10, 7) NOT NULL,
    Longitude DECIMAL(10, 7) NOT NULL,
    ImagePath VARCHAR(255) DEFAULT NULL,
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
    Title VARCHAR(255) NOT NULL,
    Review VARCHAR(255) NOT NULL,
	Rating INTEGER NOT NULL,
    GymID INTEGER NOT NULL,
    UserID INTEGER NOT NULL,
    FOREIGN KEY (GymID) REFERENCES Gyms(GymID),
    FOREIGN KEY (UserID) REFERENCES Users(UserID),
    PRIMARY KEY (ReviewID)
);

-- INSERT INTO Gyms(); 

INSERT INTO Users VALUES (0, 'Tim', 'Choy', 'tc@example.com', 'password');

-- INSERT INTO Reviews();