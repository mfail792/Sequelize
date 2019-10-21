//Pulling in sequelize package
var Sequelize = require("sequelize");

//Referencing connection to DB
var sequelize = require("../config/connection.js");

//Creating a 'book' model
var Book = sequelize.define('book', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
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

//Sync with the DB

Book.sync();

//Export book model

module.exports = Book;