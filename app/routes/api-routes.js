//Requiring Book model
var Book = require("../models/book.js");

//Routes
module.exports = function (app) {

    app.get("/api/all", function (req, res) {
        Book.findAll({}).then(function (results) {
            res.json(results);
        })
    })
}

//Get a specific book route
app.get("/api/:book", function (req, res) {
    if (req.params.book) {
        Book.findAll({
            where: {
                title: req.params.book
            }
        }).then(function (results) {
            res.json(results);
        });
    }
});

//Get all books of a specific genre
app.get("/api/:genre", function (req, res) {
    if (req.params.genre) {
        Book.findAll({
            where: {
                genre: req.params.genre
            }
        }).then(function (results) {
            res.json(results);
        });
    }
});

//Get all books from a specific author
app.get("/api/:author", function (req, res) {
    if (req.params.author) {
        Book.findAll({
            where: {
                title: req.params.author
            }
        }).then(function (results) {
            res.json(results);
        });
    }
});

//Get all 'long' books (over 300 pages or more)
app.get("/api/books/long", function (req, res) {
    Book.findAll({
        where: {
            pages: {
                $gte: 300
            }
        }
    }).then(function (results) {
        res.json(results);
    });
});

//Get short books
app.get("/api/books/short", function (req, res) {
    Book.findAll({
        where: {
            pages: {
                $lte: 150
            }
        }
    }).then(function (results) {
        res.json(results);
    });
});

//Adding a book
app.post("/api/new", function (req, res) {

    Create.create({
        title: 'foo',
        description: 'bar',
        deadline: new Date()
    }).then(function (task) {
    });
})

