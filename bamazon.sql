-- Create a database called 'Bamazon' and switch into it for this activity --
CREATE DATABASE Bamazon;
USE Bamazon;

-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

-- Insert data into the 'products' table --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Gel for Men', 'Cosmetics', 3.75, 400),
		('Kylie Jenner Makeup Kit', 'Cosmetics', 6.25, 627),
		('Dude Wipes', 'Grocery', 5.99, 300),
		('Brawny Paper Towels', 'Grocery', 4.25, 400),
		('Farmers Market Bread', 'Produce', 7.35, 80),
		('Avocadoes from Mexico', 'Produce', 4.20, 59),
		('Red Wine', 'Grocery', 14.95, 267),
		('Organic Hummus', 'Grocery', 4.50, 200),
		('Pampers', 'Children', 2.75, 476),
		('Zip lock Baggies', 'Grocery', 12.99, 575),
		('Baby Wipes', 'Children', 1.50, 423),
		('Boxing Gloves', 'Sports', 12.75, 150),
		('Weighted Vest', 'Sports', 7.99, 89),
		('Jorts', 'Clothing', 15.25, 120),
		('Vans', 'Clothing', 49.99, 10),
		('Purina One Healthy Adult', 'Pet', 7.25, 415),
		('Dog Chow', 'Pet', 12.50, 163),
		('Advil Liquid Gels', 'Pharmacy', 3.95, 221),
		('Neosporin', 'Pharmacy', 3.15, 102),
		('Jello', 'Grocery', 2.00, 22);