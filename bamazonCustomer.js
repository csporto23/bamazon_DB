const mysql = require('mysql');
const inquirer = require('inquirer');
require("dotenv").config();
const keys = require("./keys.js");

const sqlUser = keys.mysql.user
const sqlPassword = keys.mysql.password


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: sqlUser,
    password: sqlPassword,
    database: 'bamazon'

});

connection.connect((err) => {
    if(err) throw err;
    console.log("connected")
    //table functions under here.
    inventory();
    customerOrder();
});

function inventory() {
    connection.query('SELECT * FROM products', (err, res) => {
        if (err) throw err;

        for (var i = 0; i < res.length; i++){
            console.log(`
           Item Number: ${res[i].item_id}
           Item Name: ${res[i].product_name}
           Item Price: ${res[i].price}
            `);
        }
    });
};

function customerOrder() {
        inquirer.prompt([
            {
                name: 'product_id',
                type: 'input',
                message: 'Whats the ID number of the item you would like to buy?'
            },
            {
                name: 'product_amount',
                type: 'input',
                message: 'How many units of this item would you like?',
                validate: (res) => {
                    for (var i = 0; i < res.length; i++)
                    if (res[i].stock_quantity > this.product_amount) {
                        console.log('Insufficient quantity!')
                        return false;
                    } else return true;
                }
            }
        ]).then((answer) => {
            connection.query("SELECT * FROM products", [answer.product_amount, answer.product_name], (err, res) => {
                for (var i = 0; i < res.length; i++){}

        })

        });
};