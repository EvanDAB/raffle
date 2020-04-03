USE raffle_sei_db;

CREATE TABLE attendees (
    id MEDIUMINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    company VARCHAR(45) NOT NULL,
    presentDate DATE NULL,
    attended BOOLEAN NULL,
    rafGroup BOOLEAN NULL,
    winner  BOOLEAN NULL,
    PRIMARY KEY(id)
);