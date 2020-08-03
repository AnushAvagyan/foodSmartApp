var express = require('express');
var bodyParser = require('body-parser');
const {
  getRecipes,
  getRecipeById,
  insertRecipe
}  = require('../database-mongo/queries.js');
var items = require('../database-mongo');

var app = express();

app.use(express.static(__dirname + '/../react-client/dist'));

app.get('/recipes/:meal', function (req, res) {
  getRecipes(req.params.meal, (data) => {

    res.status(200).json(data);
    res.end();

  })
});

app.get('/recipe/:id', function (req, res) {
  getRecipeById(req.params.id, (data) => {

    res.status(200).json(data);
    res.end();

  })
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

