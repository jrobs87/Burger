const orm = require('../config/orm.js');

const burger = {

  // get all from db
  all: function (table, cb) {
    orm.selectAll(table, function (result) {
      cb(result);
    });
  },

  // inserts a new burger
  add: function (table, burger) {
    orm.insertOne(table, burger, function (result) {
      cb(result);
    });
  },

  // update burger
//   update: function (table, burger_new, burger_old) {
//     orm.updateOne(table, burger_new, burger_old, function (result) {
//       cb(result);
//     });
//   },
// };

update: function (table, id, devoured, cb) {
  orm.updateOne(table, id, devoured, function (result) {
    cb(result)
  });
},
};

module.exports = burger;

