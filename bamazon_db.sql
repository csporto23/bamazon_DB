DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;
USE bamazon;

CREATE TABLE products (
item_id INTEGER NOT NULL AUTO_INCREMENT,
product_name VARCHAR(200) NOT NULL,
department_name VARCHAR(200) NOT NULL,
price INTEGER(12),
stock_quantity INTEGER(12) NOT NULL,
PRIMARY KEY (item_id)
);

SELECT * FROM products