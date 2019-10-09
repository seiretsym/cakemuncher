// dependencies
var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "derp",
    database: "cakes_db"
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