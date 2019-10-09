// dependencies
var express = require("express");
var cake = require("../models/cake.js");

// create a router
var cakes = express.Router();

// get
cakes.get("/", function(req, res) {

});

// insert
cakes.post("/api/cakes", function(req, res) {

});

// update
cakes.put("/api/cakes/:id", function(req, res) {

});

// delete
cakes.delete("/api/cakes/:id", function(req, res) {

});

// export
module.exports = cakes;