USE raffle_se_db;

CREATE TABLE attendees (
    id MEDIUMINT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    presentDate DATE NULL,
    attended BOOLEAN NULL,
    raffleG BOOLEAN NULL,
    winner  BOOLEAN NULL,
    PRIMARY KEY(id)
);