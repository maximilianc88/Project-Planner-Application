-- Drops the database if it exists currently --
DROP DATABASE IF EXISTS mothra_development;
-- Creates the database --
CREATE DATABASE mothra_development;

USE mothra_development;

SELECT * FROM projects;
SELECT * FROM teams;
SELECT * FROM tasks;