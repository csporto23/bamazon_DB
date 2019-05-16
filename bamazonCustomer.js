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

});