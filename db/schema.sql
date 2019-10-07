DROP DATABASE IF EXISTS cakes_db;

CREATE DATABASE cakes_db;

USE cakes_db;

CREATE TABLE cakes (
    id INT NOT NULL AUTO_INCREMENT,
    cake_name VARCHAR(100),
    devoured BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (id)
)