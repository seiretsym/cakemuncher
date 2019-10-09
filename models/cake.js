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
    insert: function(name, bool, cb) {
        // use orm.insertOne(table, name, bool, cb)
        orm.insertOne("cakes", name, bool, function(res) {
            // callback value
            cb(res);
        })
    },
    // update!
        // use orm.updateOne(table, val, condition, cb)

    // delete!
        // use orm.deleteOne(table, condition, cb)
}

// export!
module.exports = cake;