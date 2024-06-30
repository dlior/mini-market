CREATE TABLE customers (
  id UUID PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  contact VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  postalCode INTEGER NOT NULL,
  country VARCHAR(255) NOT NULL,
  createdAt DATE NOT NULL DEFAULT NOW(),
  updatedAt DATE DEFAULT NULL,
  deletedAt DATE DEFAULT NULL
);

-- CREATE TABLE employees (
--   id UUID PRIMARY KEY,
--   lastName VARCHAR(255) NOT NULL,
--   firstName VARCHAR(255) NOT NULL,
--   birthdate DATE NOT NULL,
--   photo VARCHAR(255) NOT NULL,
--   notes TEXT NOT NULL,
--   createdAt DATE NOT NULL DEFAULT NOW(),
--   updatedAt DATE DEFAULT NULL,
--   deletedAt DATE DEFAULT NULL
-- );

-- CREATE TABLE shippers (
--   id UUID PRIMARY KEY,
--   name VARCHAR(255) NOT NULL,
--   phone VARCHAR(255) NOT NULL,
--   createdAt DATE NOT NULL DEFAULT NOW(),
--   updatedAt DATE DEFAULT NULL,
--   deletedAt DATE DEFAULT NULL
-- );

-- CREATE TABLE suppliers (
--   id UUID PRIMARY KEY,
--   name VARCHAR(255) NOT NULL,
--   contact VARCHAR(255) NOT NULL,
--   address VARCHAR(255) NOT NULL,
--   city VARCHAR(255) NOT NULL,
--   postalCode INTEGER NOT NULL,
--   country VARCHAR(255) NOT NULL,
--   phone VARCHAR(255) NOT NULL,
--   createdAt DATE NOT NULL DEFAULT NOW(),
--   updatedAt DATE DEFAULT NULL,
--   deletedAt DATE DEFAULT NULL
-- );

COPY customers FROM '/docker-entrypoint-initdb.d/customers.csv' DELIMITER ',' CSV HEADER;
-- COPY employees FROM '/docker-entrypoint-initdb.d/employees.csv' DELIMITER ',' CSV HEADER;
-- COPY shippers FROM '/docker-entrypoint-initdb.d/shippers.csv' DELIMITER ',' CSV HEADER;
-- COPY suppliers FROM '/docker-entrypoint-initdb.d/suppliers.csv' DELIMITER ',' CSV HEADER;