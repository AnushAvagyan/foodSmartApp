const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const recipeSchema = new mongoose.Schema({
  id: {type: Number, required: true, unique: true},
  name: String,
  description: String,
  meal: String,
  steps: Array,
  ingredients: Array,
  labels: Array,
  cookTime: Number,
  servings: Number,
  nutrition: {
    calories: Number,
    carbohydrates: Number,
    protein: Number,
    fat: Number,
    sugar: Number,
    fiber: Number
  },
  url: String
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;