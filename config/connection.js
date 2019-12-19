// dependencies
var mysql = require("mysql");

var pool = mysql.createPool({
    host: process.env.CLEARDB_HOST,
    port: 3306,
    user: process.env.CLEARDB_USERNAME,
    password: process.env.CLEARDB_PW,
    database: process.env.CLEARDB_DB
})

pool.on("acquire", function (connection) {
    console.log("Connected as Derp #" + connection.threadId);
});

pool.on("release", function (connection) {
    console.log("Connection released from Derp #" + connection.threadId);
});

// export!
module.exports = pool;