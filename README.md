<h1>Overview</h1>

In this activity, we are creating an Amazon-like storefront with the MySQL skills I learned this unit. The app will take in orders from customers and deplete stock from the store's inventory. 

We created both 2 JS files for both the Customer and the Manager as well!

Try out our code for yourself or take a look at the images folder to see screenshots of the process.

<h1>What challanges we included in this Homework</h2>

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

<br>

If not, the app will log a phrase like Insufficient quantity!, and then prevent the order from going through.

<br>

However, if our store does have enough of the product, we will fulfill the customer's order.

<br>
Once the update goes through, it will show the customer the total cost of their purchase.


<Br>


Challenge #2: Manager View (Next Level)


<br>
Created a new Node application called bamazonManager.js. Running this application will:


Lists a set of menu options:
<br>
1. View Products for Sale
2. View Low Inventory
3. Add to Inventory
4. Add New Product
<br>
If a manager selects View Products for Sale, the app should list every available item: the item IDs, names, prices, and quantities.
If a manager selects View Low Inventory, then it should list all items with an inventory count lower than five.
If a manager selects Add to Inventory, your app should display a prompt that will let the manager "add more" of any item currently in the store.
If a manager selects Add New Product, it should allow the manager to add a completely new product to the store.

<h2>What npm we used to create this Homework</h2>


• Node.js • Inquire NPM Package (https://www.npmjs.com/package/inquirer) • MYSQL NPM Package (https://www.npmjs.com/package/mysql)

<h3>Authors</h3>

Bishop Johnson

Github Link: https://github.com/johnsonbs5

<h1>Enjoy!</h1>