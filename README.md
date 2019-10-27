<h1>Overview<h1>

In this activity, we are creating an Amazon-like storefront with the MySQL skills I learned this unit. The app will take in orders from customers and deplete stock from the store's inventory. 

We created both 2 JS files for both the Customer and the Manager as well!

Try out our code for yourself or take a look at the images folder to see screenshots of the process.

<h1>What challanges we included in this Homework<h2>

Challenge #1: Customer View (Minimum Requirement)


Created a MySQL Database called bamazon.
Then created a Table inside of that database called products.
The products table includes each of the following columns:



item_id (unique id for each product)
product_name (Name of product)
department_name
price (cost to customer)
stock_quantity (how much of the product is available in stores)



We populated this database with around 10 different products. 

Then we created a Node application called bamazonCustomer.js. Running this application will first display all of the items available for sale. Included the ids, names, and prices of products for sale.
The app should then prompt users with two messages.



The first asks them the ID of the product they would like to buy.

The second message asks how many units of the product they would like to buy.



Once the customer has placed the order, my application will check if the store has enough of the product to meet the customer's request.



If not, the app will log a phrase like Insufficient quantity!, and then prevent the order from going through.



However, if our store does have enough of the product, we will fulfill the customer's order.


Once the update goes through, it will show the customer the total cost of their purchase.







If this activity took you between 8-10 hours, then you've put enough time into this assignment. Feel free to stop here -- unless you want to take on the next challenge.





Challenge #2: Manager View (Next Level)



Create a new Node application called bamazonManager.js. Running this application will:


List a set of menu options:
View Products for Sale
View Low Inventory
Add to Inventory
Add New Product
If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.
If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five.
If a manager selects Add to Inventory, your app should display a prompt that will let the manager "add more" of any item currently in the store.
If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.