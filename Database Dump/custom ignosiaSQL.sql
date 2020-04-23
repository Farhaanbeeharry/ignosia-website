CREATE DATABASE IGNOSIA;

USE IGNOSIA;

CREATE TABLE USER (
	UserID VARCHAR(100) NOT NULL,
	FirstName VARCHAR(32) NOT NULL,
	LastName VARCHAR(32) NOT NULL,
	PRIMARY KEY (UserID)
);

CREATE TABLE USERCONTACT (
    UserID VARCHAR(100) NOT NULL,
    PhoneNumber INT(8) NOT NULL,
    EmailAddress VARCHAR(64) NOT NULL UNIQUE,
    PRIMARY KEY (UserID),
    FOREIGN KEY (UserID) REFERENCES USER(UserID)
);

CREATE TABLE USERPERSONAL (
    UserID VARCHAR(100) NOT NULL,
    Gender ENUM('Male', 'Female', 'Other') NOT NULL,
    Device ENUM('iOS', 'Android') NOT NULL,
    DateOfBirth DATE NOT NULL,
    Country VARCHAR(32) NOT NULL,
    PRIMARY KEY (UserID),
    FOREIGN KEY (UserID) REFERENCES USER(UserID)
);

CREATE TABLE USERREVIEW(
    UserID VARCHAR(100) NOT NULL,
    Happiness ENUM('Happy', 'Unhappy') NOT NULL,
    Satisfaction ENUM('Excellent', 'Poor') NOT NULL,
    Review TEXT NOT NULL,
    PRIMARY KEY (UserID),
    FOREIGN KEY (UserID) REFERENCES USER(UserID)
);

CREATE TABLE USERMESSAGE(
    UserID VARCHAR(100) NOT NULL,
    Subscription ENUM('Subscribed', 'Unsubscribed') NOT NULL,
    Message TEXT NOT NULL,
    PRIMARY KEY (UserID),
    FOREIGN KEY (UserID) REFERENCES USER(UserID)
);

CREATE TABLE DOWNLOADS(
    NumberOfDownloads INT NOT NULL
);

INSERT INTO DOWNLOADS (NumberOfDownloads) VALUES (0);