DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR(255) NOT NULL,
department_name VARCHAR(255) NOT NULL,
price INTEGER(255),
stock_quantity INTEGER(255) NOT NULL,
PRIMARY KEY (item_id)
);

SELECT * FROM products