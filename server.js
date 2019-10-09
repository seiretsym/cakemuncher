// dependencies
var express = require("express");
var cakehbs = require("express-handlebars");

// hosting properties
var PORT = process.env.PORT || 3377; // D E R P! :D

// create host variable
var cake = express();

// set dir path for assets/views
cake.use(express.static("public"));

// parse config
cake.use(express.urlencoded({ extended: true }));
cake.use(express.json());

// handlebar/views config
cake.engine("handlebars", cakehbs({ defaultLayout: "main" }));
cake.set("view engine", "handlebars");

// import cake routes
var routes = require("./controllers/cakes_controllers.js");

cake.use(routes);

// start hosting!
cake.listen(PORT, function() {
  // tell me i'm doing it right
  console.log("Cakes hosted on: http://localhost:" + PORT);
});