var path = require("path");



module.exports = function (app) {

    //index route that loads index.html
    app.get("/", function (req, res) {
        res.sendFile(path.join(_dirname, "../public/view.html"));
    });

    //add route loading the add.html page
    app.get("/add", function (req, res) {
        res.sendFile(path.join(_dirname, "../public/add.html"));
    });

    //route for loading all.html page
    //where all books in DB are displayed
    app.get("/all", function (req, res) {
        res.sendFile(path.join(_dirname, "../public/all.html"));
    });

    //route for loading short.html page
    //where short books in the DB are displayed
    app.get("/short", function (req, res) {
        res.sendFile(path.join(_dirname, "../public/short.html"));
    });

    //long route loading the long.html page
    //where long books in the DB are displayed
    app.get("/long", function (req, res) {
        res.sendFile(path.join(_dirname, "../public/long.html"));
    });

};