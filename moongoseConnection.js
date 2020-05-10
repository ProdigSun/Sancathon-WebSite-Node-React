var mongoose = require('mongoose');

const URI = () => '';

mongoose.connect(URI(), options, function (error) {
});

var db = mongoose.connection;

export default db;
