//Pulling in sequelize package
var Sequelize = require("sequelize");

//Referencing connection to DB
var sequelize = require("../config/connection.js");

//Creating a 'book' model
var Book = sequelize.define('book', {
    id: {
        type: Sequelize.INTEGER,
        autoincrement: true,
        piaryKey: true
    },
    title: {
        type: Sequelize.STRING
    },
    author: {
        type: Sequelize.STRING
    },
    genre: {
        type: Sequelize.STRING
    },
    pages: {
        type: Sequelize.INTEGER
    }
}, {
    timestamps: false
});

