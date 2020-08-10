const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const weightSchema = new mongoose.Schema({
  weight: Number,
  createdAt: {type: Date, default: Date.now}
});

const Weight = mongoose.model('Weight', weightSchema);

module.exports = Weight;