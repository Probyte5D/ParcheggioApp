CREATE DATABASE IF NOT EXISTS parcheggio;
USE parcheggio;

CREATE TABLE parcheggio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ora_ingresso TIME NOT NULL,
    ora_uscita TIME NOT NULL,
    durata VARCHAR(5),
    costo INT
);