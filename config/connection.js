// dependencies
var mysql = require("mysql");

var pool = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "derp",
    database: "heroku_94f12b839305f34"
})

pool.on("acquire", function(connection) {
    console.log("Connected as Derp #" + connection.threadId);
});

pool.on("release", function(connection) {
    console.log("Connection released from Derp #" + connection.threadId);
});

// export!
module.exports = pool;