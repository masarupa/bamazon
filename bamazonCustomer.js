var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    user: "root",

    password: "password",
    database: "bamazon_DB"
});

connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});

function runSearch() {
    inquirer
        .prompt([{
                name: "product_ID",
                type: "",
                message: "What ID of the product would you like to buy?"
            },
            {
                name: "unit",
                type: "",
                message: "How many units would you like to buy?"

            }
        ])
        .then(function (answer) {
            console.log(answer);

            var query = "select id, price, stock_quantity from products where id = " + answer.product_ID +  " and stock_quantity > " + answer.unit;

            connection.query(query, function (err, results) {
                if (results.length === 0) {
                    console.log("Sorry, insufficient quantity. Try again...");
                } else {
                    console.log(results);
                    var unitsLeft = results[0].stock_quantity - answer.unit;
                    connection.query(`UPDATE products SET stock_quantity=${unitsLeft} WHERE id=${answer.product_ID}`, function (err, res) {
                        var userTotal = answer.unit * results[0].price;
                        console.log(`Thank you for purchasing!  Your total is: $${userTotal}`);
                    });
                }
                
                connection.query(`select * from products where id=${answer.product_ID}`, function (err, results) {
                    console.log(results);
            });
        });
    });
}