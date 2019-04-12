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
                name: "prduct_ID",
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
                switch (answer.action) {}
                console.log(answer)
            
            var query = "select * from products where stock_quantity > 0;"
            connection.query(query, function(err, result){
                console.log (result)
            
            });
            
            // prompt({
            //     "How many units of the product would you like to buy?"
            // })
        })
}