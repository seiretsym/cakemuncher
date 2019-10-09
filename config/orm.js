// dependencies
var pool = require("./connection.js");

// create orm
var orm = {
    // selectAll()
    selectAll: function(table, cb) {
        // generate query string
        var queryString = "SELECT * FROM " + table + ";";
        // connect
        pool.getConnection(function(err, connection) {
            // query
            connection.query(queryString, function(err, res) {
                // error handling
                if (err) {
                    throw err;
                }
                // callback value
                cb(res);
                // release connection
                connection.release();
            });
        });
    },
    // insertOne()
    insertOne: function(table, name, cb) {
        // generate query string
        var queryString = "INSERT INTO " + table + " (cake_name) VALUES ('" + name + "')"
        // connect
        pool.getConnection(function(err, connection) {
            // query
            connection.query(queryString, function(err, res) {
                // error handling
                if (err) {
                    throw err;
                }
                // callback value
                cb(res);
                // release connection
                connection.release();
            });
        });
    },
    // updateOne()
    updateOne: function(table, val, id, cb) {
        // generate query string
        var queryString = "UPDATE " + table + " SET ? " + " WHERE ?";
        // connect
        pool.getConnection(function(err, connection) {
            // query
            connection.query(queryString, [{devoured: val}, {id: id}], function(err, res) {
                // error handling
                if (err) {
                    throw err;
                }
                // callback value
                cb(res);
                // release connection
                connection.release();
            });
        });
    },
    // deleteOne()
    deleteOne: function(table, condition, cb) {
        // generate query string
        var queryString = "DELETE FROM " + table + " WHERE " + condition;
        // connect
        pool.getConnection(function(err, connection) {
            // query
            connection.query(queryString, function(err, res) {
                // error handling
                if (err) {
                    throw err;
                }
                // callback value
                cb(res);
                // release connection
                connection.release();
            })
        })
    }
};

// export!
module.exports = orm;