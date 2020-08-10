const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;
var moment = require('moment');

const weightSchema = new mongoose.Schema({
  weight: Number,
  createdAt: {type: String, default: moment().format("DD MMMM YYYY")}
});

const Weight = mongoose.model('Weight', weightSchema);

module.exports = Weight;