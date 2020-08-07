const express = require('express');
const bodyParser = require('body-parser');
const {
  getRecipes,
  getRecipeById,
  insertRecipe,
  updateImage,
  likeToggle
}  = require('../database-mongo/queries.js');
require('dotenv').config();
const upload = require("./services/ImageUpload");
const singleUpload = upload.single("image");
const app = express();
// const cors = require("cors");
// app.use(cors());
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// get recipes data based on the meal type
app.get('/recipes/:meal', function (req, res) {
  getRecipes(req.params.meal, (data) => {
    res.status(200).json(data);
    res.end();
  })
});

//get recipe data based on id
app.get('/recipe/:id', function (req, res) {
  getRecipeById(req.params.id, (data) => {
    res.status(200).json(data);
    res.end();
  })
});

app.post('/recipes/:id/images', function(req, res) {
  console.log('recipe id test1', req.params.id);
  singleUpload(req, res, function (err) {
    if (err) {
      return res.json({
        success: false,
        errors: {
          title: "Image Upload Error",
          detail: err.message,
          error: err,
        },
      });
    }
    imageUrl = req.file.location;
    updateImage(req.params.id, imageUrl, (data) => {
      res.status(200).json(data);
      res.end();
    })
  });
});

app.post('/recipes/:id/favorite', function(req, res) {
  likeToggle(req.params.id, req.body, (data) => {
    res.status(200).json(data);
    res.end();
  })
});

// add a new recipe
app.post('/recipes', function(req, res) {
  
  insertRecipe(req.body, (data) => {
    res.status(200).json('Success');
    res.end();
  })
});


app.listen(3000, function() {
  console.log('listening on port 3000!');
});


