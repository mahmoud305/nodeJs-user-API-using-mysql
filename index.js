/**
 * author : Mahmoud Abo-Hgr .
 * Group : Friday 10-->4 
 * Assignment 5
 * Backend Node.js
 */

const express = require('express');
const app = express();
const port = 4000;
app.use(express.urlencoded({extended:false}));// to be able to print on console
app.use(express.json())
const www = process.env.WWW || './';
console.log(`serving ${www}`);
const userRouter= require("./modules/Users/Routes/user.Routes");
app.use(userRouter);
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
