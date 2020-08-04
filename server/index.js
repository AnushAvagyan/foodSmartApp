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
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

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

app.post('/recipes', function(req, res) {
  console.log(req.body);
  req.body.url = `https://foodmvp.s3-us-west-1.amazonaws.com/${Math.round(Math.random() * 30)}.jpg`
  insertRecipe(req.body, (data) => {
    res.status(200).json(data);
    res.end();
  })

});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});

