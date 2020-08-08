const axios = require('axios');

const getNutritionData = async (ing) => {
  
  var nutrition = {
    calories: 0,
    carbohydrates: 0,
    protein: 0,
    fat: 0,
    sugar: 0
  };

  for (var i = 0; i < ing.length; i ++) {
    nutrition = await axios.get(`https://world.openfoodfacts.org/category/${ing[i]}.json`)
    .then(data => {
      if (data.data.products.length) {
        nutrition.calories += data.data.products[0].nutriments['energy-kcal_value'];
        nutrition.carbohydrates += Number(data.data.products[0].nutriments.carbohydrates);
        nutrition.protein += Number(data.data.products[0].nutriments.proteins);
        nutrition.fat += Number(data.data.products[0].nutriments.fat);
        nutrition.sugar += Number(data.data.products[0].nutriments.sugars);

      }
     return nutrition;
    })
    .catch(err =>{
      console.error('Failed', err);
    });
  }
  return nutrition;

};

module.exports = getNutritionData;

