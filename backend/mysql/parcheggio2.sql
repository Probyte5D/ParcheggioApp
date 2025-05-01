CREATE DATABASE IF NOT EXISTS parcheggio;
USE parcheggio;

CREATE TABLE parcheggio (
    id INT AUTO_INCREMENT PRIMARY KEY,
    ora_ingresso TIME NOT NULL,
    ora_uscita TIME NOT NULL,
    durata VARCHAR(5),
    costo INT,
    targa VARCHAR(20),           -- Nuovo campo per la targa dell'auto
    nome_utente VARCHAR(50),     -- Nuovo campo per il nome dell'utente
    data_creazione TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Data di creazione del parcheggio
);
