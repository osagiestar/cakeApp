-- CREATE DATABASE cakedb;
drop table if exists cakes;
drop table if exists customers;

CREATE TABLE cakes (
    id SERIAL PRIMARY KEY,
    image VARCHAR(100) 
    name VARCHAR(30) NOT NULL,
    price INT NOT NULL
);

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  type VARCHAR(30),
  name VARCHAR(30) NOT NULL
);

CREATE TABLE customers (
  id       SERIAL PRIMARY KEY,
  name     VARCHAR(30) NOT NULL,
  email    VARCHAR(120) NOT NULL,
  address  VARCHAR(120),
  city     VARCHAR(30),
  postcode VARCHAR(12),
  country  VARCHAR(20),
  UNIQUE(email) 
);

INSERT INTO cakes(name, price) VALUES('', '2year Birthday Cake', 50);
INSERT INTO cakes(name, price) VALUES('4th Birthday Cake', 60);

INSERT INTO users (type, name) VALUES('Admin', 'Jesse O');
INSERT INTO users (type, name) VALUES('Admin', 'Jerry O');
INSERT INTO users (type, name) VALUES('Support', 'Garry S');
INSERT INTO users (type, name) VALUES('Clerk', 'Jane K');

INSERT INTO customers (name, email, address, city, postcode, country) VALUES ('Nadia Sethuraman','nadia.sethuraman@mail.com','135 Green Street','Manchester','M10 4BG','UK');
INSERT INTO customers (name, email, address, city, postcode, country) VALUES ('Melinda Marsh','mel.marsh-123@gmail.com','7 Preston Road','Oldham','OL3 5XZ','UK');
INSERT INTO customers (name, email, address, city, postcode, country) VALUES ('Martín Sommer','martin.sommer@dfgg.net','C/ Romero, 33','Madrid','28016','Spain');
INSERT INTO customers (name, email, address, city, postcode, country) VALUES ('Laurence Lebihan','laurence.lebihan@xmzx.net','12, rue des Bouchers','Marseille','13008','France');
INSERT INTO customers (name, email, address, city, postcode, country) VALUES ('Keith Stewart','keith.stewart@gmail.com','84 Town Lane','Tadworth','td5 7ng','UK');


