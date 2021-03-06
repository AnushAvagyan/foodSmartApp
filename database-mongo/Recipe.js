const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const recipeSchema = new mongoose.Schema({
  name: String,
  description: String,
  meal: String,
  steps: Array,
  ingredients: Array,
  labels: Array,
  cookTime: Number,
  servings: Number,
  favorite: Boolean,
  nutrition: {
    calories: Number,
    carbohydrates: Number,
    protein: Number,
    fat: Number,
    sugar: Number
  },
  weight: Array,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const Recipe = mongoose.model('Recipe', recipeSchema);

module.exports = Recipe;

