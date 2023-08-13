CREATE DATABASE allegory;
\c allegory;

CREATE TABLE datos_personales (
  id SERIAL PRIMARY KEY,
  correo VARCHAR(255) NOT NULL UNIQUE,
  contraseña VARCHAR(255) NOT NULL,
  nombre VARCHAR(255) NOT NULL,
  peso DECIMAL,
  altura DECIMAL,
  cintura DECIMAL,
  pecho DECIMAL,
  busto DECIMAL,
  tipo_de_cuerpo VARCHAR(50)
);