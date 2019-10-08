// dependencies
var connection = require("./connection.js");

// create orm
var orm = {
    // selectAll()
    selectAll: function(table, cb) {
        // generate query string
        var queryString = "SELECT * FROM " + table + ";";
        // connect
        connection.query(queryString, function(err, res) {
            // error handling
            if (err) throw err;
            // callback value
            cb(res);
        })
        
    },
    // insertOne()
    insertOne: function(table, name, bool, cb) {
        // generate query string
        var queryString = "INSERT INTO " + table + " (cake_name, devoured) VALUES (?, ?)"
        // connect
        connection.query(queryString, [name, bool], function(err, res) {
            // error handling
            if (err) throw err;
            // callback value
            cb(res);
        })
    },
    // updateOne()
    updateOne: function(cb) {
        // generate query string

        // connect

        // callback value
        cb();
    },
    // deleteOne()
    deleteOne: function(cb) {
        // generate query string

        // connect

        // callback value
        cb();
    }
};

// export!
module.exports = orm;