const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const {
  getRecipes,
  getRecipeById,
  insertRecipe,
  updateImage,
  likeToggle,
  setWeight,
  getWeight
}  = require('../database-mongo/queries.js');
require('dotenv').config();
const upload = require("./services/ImageUpload");
const {
  getNutritionData,
  generateLabels
 } = require("./services/getNutritionData");
const singleUpload = upload.single("image");

const app = express();
// const cors = require("cors");
// app.use(cors());
app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// get recipes data based on the meal type
app.get('/api/recipes/:filter', function (req, res) {
    getRecipes(req.query, (data) => {
     res.status(200).json(data);
     res.end();
   })
 });

//get recipe data based on id
app.get('/api/recipes/:id', function (req, res) {
  getRecipeById(req.params.id, (data) => {
    res.status(200).json(data);
    res.end();
  })
});

app.post('/api/recipes/:id/images', function(req, res) {
  //console.log('recipe id test1', req.params.id);
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

app.post('/api/recipes/:id/favorite', function(req, res) {
  likeToggle(req.params.id, req.body, (data) => {
    res.status(200).json(data);
    res.end();
  })
});

// add a new recipe
app.post('/api/recipes', async function(req, res) {
  var steps = req.body.steps.split('\r\n');
  req.body.steps = steps;
  req.body.nutrition = await getNutritionData(req.body.ingredients);
  req.body.labels = generateLabels(req.body.nutrition);
  insertRecipe(req.body, (data) => {
    res.status(200).json('Success');
    res.end();
  })
});

// add a new weight log
app.post('/api/weights', function(req, res) {
  setWeight(req.body, (data) => {
    getWeight({}, (data) => {
      res.status(200).json(data);
      res.end();
    })
  })
});

app.get('/api/weights', function(req, res) {
  getWeight({}, (data) => {
    res.status(200).json(data);
    res.end();
  })
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname + '/../react-client/dist/index.html'));
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});


