// dependencies
var orm = require("../config/orm.js");

var cake = {
    // all!
    all: function(cb) {
        // use orm.selectAll(table, cb)
        orm.selectAll("cakes", function(res) {
            // callback value
            cb(res);
        })
    },
    // insert!
    insert: function(name, cb) {
        // use orm.insertOne(table, name, cb)
        orm.insertOne("cakes", name, function(res) {
            // callback value
            cb(res);
        })
    },
    // update!
    update: function(val, condition, cb) {
        // use orm.updateOne(table, val, condition, cb)
        orm.updateOne("cakes", val, condition, function(res) {
            // callback value
            cb(res);
        })
    },
    // delete!
    delete: function(condition, cb) {
        // use orm.deleteOne(table, condition, cb)
        orm.deleteOne("cakes", condition, function(res) {
            // callback value
            cb(res);
        })
    }
};

// export!
module.exports = cake;