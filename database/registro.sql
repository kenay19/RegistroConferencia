DROP DATABASE IF EXISTS registro;
CREATE DATABASE IF NOT EXISTS registro;
USE registro;
CREATE TABLE IF NOT EXISTS report(
    numeroCuenta INT ,
    nombre VARCHAR(50),
    app VARCHAR(50),
    apm VARCHAR(50)
);