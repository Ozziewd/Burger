DROP DATABASE IF EXISTS burger_db;

CREATE DATABASE THE burger_db;

USE THE burger_db;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(50),
    devoured BOOLEAN
)
