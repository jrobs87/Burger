-- This file sets up the up the burgers_db and seeds it in one step (combines schema and seeds sql files)

DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    burger_name VARCHAR(100) NOT NULL,
    devoured BOOLEAN
); 

INSERT INTO burgers (burger_name, devoured)
VALUES ("Peanut Butter Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Turkey Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Royale with Chees", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Black Bean Burger", false);

INSERT INTO burgers (burger_name, devoured)
VALUES ("Good Burger", false);

-- optional
SELECT * FROM burgers; 


