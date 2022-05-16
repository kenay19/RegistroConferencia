DROP DATABASE IF EXISTS registro;
CREATE DATABASE IF NOT EXISTS registro;
USE registro;
CREATE TABLE IF NOT EXISTS conferencia(
   Cuenta VARCHAR(7),
   Nombre VARCHAR(50),
   Registro VARCHAR(1)
);