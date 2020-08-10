const Recipe = require('./Recipe.js');
const Weight = require('./Weight.js');

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

  Recipe.find({_id: id}).exec((err, data) => {
    if (err) {
      return console.error(err);
    }
    callback(data);
  });
}

const insertRecipe = (recipeData, callback) => {
  var recipe = new Recipe(recipeData);
  recipe.save(function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log(data);
    callback();
  });
}
const updateImage = (id, url, callback) => {

  Recipe.findByIdAndUpdate({_id: id}, {url: url}).exec((err, data) => {
    if (err) {
      return console.error(err);
    }
    callback(data);
  });
}

const likeToggle = (id, val, callback) => {

  Recipe.findByIdAndUpdate({_id: id}, val).exec((err, data) => {
    if (err) {
      return console.error(err);
    }
    callback(data);
  });
}


const seedDatabase = (data) => {

  Recipe.insertMany(data)
    .then(() => console.log('done inserting records'))
    .catch(err => console.log(err));

}

const setWeight = (data, callback) => {
  var weight = new Weight(data);
  weight.save(function (err, data) {
    if (err) {
      return console.error(err);
    }
    console.log(data);
    callback();
  });
}

const getWeight = (data, callback) => {
  Weight.find(data).exec((err, data) => {
    if (err) {
      return console.error(err);
    }
    callback(data);
  });
}

module.exports.getRecipes = getRecipes;
module.exports.getRecipeById = getRecipeById;
module.exports.seedDatabase = seedDatabase;
module.exports.insertRecipe = insertRecipe;
module.exports.updateImage = updateImage;
module.exports.likeToggle = likeToggle;
module.exports.setWeight = setWeight;
module.exports.getWeight = getWeight;

