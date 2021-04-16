CREATE DATABASE cakedb;

CREATE TABLE cakes (
    id SERIAL PRIMARY KEY,
    image BYTEA,
    name VARCHAR(30) NOT NULL,
    price INT
);