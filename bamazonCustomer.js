const mysql = require('mysql');
const inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Cs343233!',
    database: 'bamazon'

});

connection.connect((err) => {
    if(err) throw err;
    //console.log("connected")
    //table functions under here.
    
});