//Initiating the connection to MySQL

//Dependencies
var Sequelize = require("sequelize");

//Creating MySQL connection using Sequelize
var sequelize = new Sequelize('library_db', 'root', 'vegetable', {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }

});

module.exports = sequelize;

