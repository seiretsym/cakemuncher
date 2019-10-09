// dependencies
var express = require("express");
var cakehbs = require("express-handlebars");
var bodyParser = require("body-parser");

// hosting properties
var PORT = process.env.PORT || 3377; // D E R P! :D

// create host variable
var cakeExpress = express();

// set dir path for assets
cakeExpress.use(express.static("public"));

// parse config
cakeExpress.use(bodyParser.urlencoded({ extended: true }));
cakeExpress.use(bodyParser.json());

// handlebar/views config
cakeExpress.engine("handlebars", cakehbs({ defaultLayout: "main" }));
cakeExpress.set("view engine", "handlebars");

// import cake routes
var routes = require("./controllers/cakes_controller.js");

cakeExpress.use(routes);

// start hosting!
cakeExpress.listen(PORT, function() {
  // tell me i'm doing it right
  console.log("Cakes hosted on: http://localhost:" + PORT);
});