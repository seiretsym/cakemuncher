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
    cake.insert(req.body.data, function() {
        // thumbs-up!
        res.status(200).end();
    });
});

// update
cakes.put("/api/cakes/:id", function(req, res) {
    // create condition
    var condition = "id = " + req.params.id;
    // use cake.update(val, condition, cb)
    cake.update("FALSE", condition, function(data) {
        // check if a row was modified
        if (data.changedRows === 0) {
            // return 404 because condition wasn't found
            return res.status(404).end();
        }
        // all okay!
        res.status(200).end();
    })
});

// delete
cakes.delete("/api/cakes/:id", function(req, res) {
    // create condition
    var condition = "id = " + req.params.id;
    // use cake.delete(condition, cb)
    cake.delete(condition, function(data) {
        // check if a row was deleted
        if (data.affectedRows === 0) {
            // return 404 because condition wasn't found
            return res.status(404).end();
        }
        // oh yeah!
        res.status(200).end();
    })
});

// export
module.exports = cakes;