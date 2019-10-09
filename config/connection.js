// dependencies
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "us-cdbr-iron-east-05.cleardb.net",
    port: 3306,
    user: "b7480000637524",
    password: "74b892d8",
    database: "heroku_90b9773e800c8ea"
})

// connect!
connection.connect(function(err) {
    if (err) {
        console.log("Connection Derped: " + err.stack)
        return;
    }

    console.log("Connected as Derp# " + connection.threadId);
})

// export!
module.exports = connection;