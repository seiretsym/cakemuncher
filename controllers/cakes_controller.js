// dependencies
var express = require("express");
var cake = require("../models/cake.js");

// create a router
var cakes = express.Router();

// get
cakes.get("/", function(req, res) {
    // use cake.all(cb)
    cake.all(function(data) {
        // show that index page!
        res.render("index", { cakes: data })
    })
});

// insert
cakes.post("/api/cakes", function(req, res) {
    // use cake.insert(name, bool, cb)

});

// update
cakes.put("/api/cakes/:id", function(req, res) {
    // use cake.update(val, condition, cb)

});

// delete
cakes.delete("/api/cakes/:id", function(req, res) {
    // use cake.delete(condition, cb)

});

// export
module.exports = cakes;