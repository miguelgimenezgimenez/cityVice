// mongoose 4.3.x
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const mongodbUri = 'mongodb://localhost/cityVice';

mongoose.connect(mongodbUri);

module.exports = mongoose.connection;

