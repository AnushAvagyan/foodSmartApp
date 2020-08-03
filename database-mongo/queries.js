const Recipe = require('./Recipe.js');

const getRecipes = (meal, callback) => {
  let query = meal ? {meal: meal} : {};
  Recipe.find(query).exec((err, data) => {
    if (err) {
      return console.error(err);
    }
    callback(data);
  });
}

const getRecipeById = (id, callback) => {

  Recipe.find({id: id}).exec((err, data) => {
    if (err) {
      return console.error(err);
    }
    callback(data);
  });
}

const insertRecipe = (recipeData, callback) => {
  var recipe = new Recipe(recipeData);
  recipe.save(function (err) {
    if (err) {
      return console.error(err);
    }
    callback();
  });
}


const seedDatabase = (data) => {

  Recipe.insertMany(data)
    .then(() => console.log('done inserting records'))
    .catch(err => console.log(err));

}

module.exports.getRecipes = getRecipes;
module.exports.getRecipeById = getRecipeById;
module.exports.seedDatabase = seedDatabase;
module.exports.insertRecipe = insertRecipe;
