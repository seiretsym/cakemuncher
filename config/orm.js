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
    insertOne: function(table, name, cb) {
        // generate query string
        var queryString = "INSERT INTO " + table + " (cake_name) VALUES ('" + name + "')"
        // connect
        connection.query(queryString, function(err, res) {
            // error handling
            if (err) throw err;
            // callback value
            cb(res);
        })
    },
    // updateOne()
    updateOne: function(table, val, condition, cb) {
        // generate query string
        var queryString = "UPDATE " + table + " SET devoured=" + val + " WHERE " + condition;
        // connect
        connection.query(queryString, function(err, res) {
            // error handling
            if (err) throw err;
            // callback value
            cb(res);
        })
    },
    // deleteOne()
    deleteOne: function(table, condition, cb) {
        // generate query string
        var queryString = "DELETE FROM " + table + " WHERE " + condition;
        // connect
        connection.query(queryString, function(err, res) {
            // error handling
            if (err) throw err;
            // callback value
            cb(res);
        })
    }
};

// export!
module.exports = orm;