var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/todoapp'); // todoapp is the database name....


module.exports = {
  mongoose,
};
