// dependencies
var mysql = require("mysql");

var pool = mysql.createPool({
    host: "us-cdbr-iron-east-05.cleardb.net",
    port: 3306,
    user: "b557827e8ecf47",
    password: "0942987c",
    database: "cakes_db"
})

pool.on("acquire", function (connection) {
    console.log("Connected as Derp #" + connection.threadId);
});

pool.on("release", function (connection) {
    console.log("Connection released from Derp #" + connection.threadId);
});

// export!
module.exports = pool;