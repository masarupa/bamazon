DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL,
  department_name VARCHAR(100) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cap", "accessories", 60.00, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("coffee table", "furniture", 300.00, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("laptop", "electronic", 2000.00, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ring", "jewerly", 300.00, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pen", "office stationary" , 20.00, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("phone case","electronic", 40.00, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("hand soap","home", 7.00, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("shampoo","beauty", 10.00, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("sun glasses", "fashion", 200.00, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("strawberry", "grocery", 5.00, 200);