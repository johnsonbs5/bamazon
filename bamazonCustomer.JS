// required dependencies needed to run shop
var inquirer = require('inquirer');
var mysql = require('mysql');

// MySQL connection
var connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,

	// username
	user: 'root',

	// My password and database
	password: 'root',
	database: 'Bamazon'
});

// We are using validateInput to ensure only positive integers
function validateInput(value) {
	var integer = Number.isInteger(parseFloat(value));
	var sign = Math.sign(value); // If the number passed into Math.sign() is 0, it will return a +/- 0. Note that if the number is positive, an explicit (+) will not be returned.

	if (integer && (sign === 1)) {
		return true;
	} else {
		return 'Please enter a whole non-zero number.'; 
	}
}

// prompting for item and quantity 
function promptUserPurchase() {
	// console.log('___ENTER promptUserPurchase___');

	// Prompt the user to select an item
	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Please enter the Item ID which you would like to purchase.',
			validate: validateInput,
			filter: Number
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many do you need?',
			validate: validateInput,
			filter: Number
		}
	]).then(function(input) {
		var item = input.item_id;
		var quantity = input.quantity;

		// Query db for item quantity
		var queryStr = 'SELECT * FROM products WHERE ?';

		connection.query(queryStr, {item_id: item}, function(err, data) {
			if (err) throw err;

			// console.log('data = ' + JSON.stringify(data));

			if (data.length === 0) {
				console.log('ERROR: Invalid Item ID. Please select a valid Item ID.'); //Letting user know about invalid quantity
				displayInventory();

			} else {
				var productData = data[0];

				// console.log('productData = ' + JSON.stringify(productData));

				// If the quantity requested by the user is in stock
				if (quantity <= productData.stock_quantity) {
					console.log('Congratulations, the product you requested is in stock! Placing order!');

					// Construct the updating query string
					var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;
					// console.log('updateQueryStr = ' + updateQueryStr);

					// Update the inventory
					connection.query(updateQueryStr, function(err, data) {
						if (err) throw err;

						console.log('Your oder has been placed! Your total is $' + productData.price * quantity);
						console.log('Thank you for shopping with us!');
						console.log("\n---------------------------------------------------------------------\n");

						// End db connection
						connection.end();
					})
				} else {
					console.log('Sorry, there is not enough product in stock, your order can not be placed as is.');
					console.log('Please modify your order.');
					console.log("\n---------------------------------------------------------------------\n");

					displayInventory();
				}
			}
		})
	})
}

// output inventory
function displayInventory() {
	// console.log('___ENTER displayInventory___');

	// Construct the db query string
	queryStr = 'SELECT * FROM products';

	// connection for creating db query
	connection.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log('Existing Inventory: ');
		console.log('...................\n');

		var strOut = '';
		for (var i = 0; i < data.length; i++) {
			strOut = '';
			strOut += 'Item ID: ' + data[i].item_id + '  //  ';
			strOut += 'Product Name: ' + data[i].product_name + '  //  ';
			strOut += 'Department: ' + data[i].department_name + '  //  ';
			strOut += 'Price: $' + data[i].price + '\n';

			console.log(strOut);
		}

	  	console.log("---------------------------------------------------------------------\n");

	  	//Prompt the user for item/quantity they would like to purchase
	  	promptUserPurchase();
	})
}

// runBamazon will execute the main application logic
function runBamazon() {
	// console.log('___ENTER runBamazon___');

	// Display the available inventory
	displayInventory();
}

// Run the application logic
runBamazon();