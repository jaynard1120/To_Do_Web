const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'ToDoList'
})

connection.connect((err)=>{
    if(err) throw(err);
    console.log("Successfully Connected! ")
})