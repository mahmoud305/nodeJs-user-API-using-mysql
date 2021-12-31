const mysql= require("mysql2");
dataBase=mysql.createConnection({
    host:"localhost",
    database:"node36",
    port:"3306",
    user:"root",
    password:"123456"
})

module.exports = dataBase