const db  = require('./index.js');
const Recipe = require('./Recipe.js');
var faker = require('faker');

var sampleData = [];

var name = ["Soy-and-Ginger-Glazed Salmon with Udon Noodles","Strawberry Shortcakes Jars", "Taro Milk Tea With Boba", "Pea Tea Latte With Boba", "Chiles En Vinagre", "Black Power Hummus By Tanya Fields", "Easy Sweet & Spicy Air Fryer Salmon", "Spaghetti Alla Chittara", "Quick Kale Chips", "White Chocolate Butterscotch Cookies", "English Muffin Pizzas", "Cafemaddy Shows You 3 Creative Ways Of Using Kimchi", "Creamy Kimchi Bacon Spaghetti", "Kimchi, Spam, And Egg Scramble", "Kimchi Grilled Cheese", "How To BBQ on a Stove Top Grill", "Raspberry Chipotle Chicken Thighs", "Smoked Paprika Potatoes", "Charred Cumin Broccolini", "Grilled Sweet Corn With Lemon Pepper Butter", "Easy Tortilla Española"];
var desc = ["Two buttermilk waffles, topped with whipped cream and maple syrup, a side of two eggs served any style, and your choice of smoked bacon or smoked ham.",
"28-day aged 300g USDA Certified Prime Ribeye, rosemary-thyme garlic butter, with choice of two sides.",
"Breaded fried chicken with veggies, and a side of Ceasar salad",
"Creamy mascarpone cheese and custard layered between espresso and rum soaked house-made ladyfingers, topped with Valrhona cocoa powder.", "With only 4 ingredients, this dessert is perfect f…u just want something quick and delicious to eat!", "This is about to be your new favorite drink. Take …nd taro powder at your local Asian grocery store.", "This pea tea latte with boba is sure to satisfy yo… of sweetness, try adding in some condensed milk!", "I feel like I always have to have something spicy … or enjoy them on their own right out of the jar.", "Spice up your hummus routine with this upgraded Bl…r spices make this hummus the ultimate party dip.", "Kimchi is the secret ingredient you never knew you… tangy flavor. Give it a try, you won’t be sorry!", "This was a breakfast staple in my house growing up…ed seasoning, but salt and pepper work great too.", "Give your grilled cheese a fiery update by sneakin…f gooey American cheese and sharp cheddar cheese.", "Chicken thighs grilled with a sweet, smoky, and sl… a notch at your next indoor or outdoor barbecue.", "These potatoes make the perfect side dish to accom… a child, but grilled and seasoned to perfection!", "Broccolini is a fun vegetable that is perfect for …ll adds a great char and another layer of flavor.", "Grilled corn is a mandatory item when we talk abou…is classic dish is guaranteed to wow your guests.", "This classic Spanish dish is perfect for breakfast…eat with vegetables and/or Spanish ham folded in."];
var ing = ["Vegetable Soup","Fish and chips", "Pasta Carbonara", 'Regular white vinegar', 'balsamic vinegar', 'apple cider vinegar','cocoa powder','Sea salt','Almond flour', 'black olives', 'organic chicken broth','Sun-dried tomatoes', 'pesto', 'medium cheddar', 'Greek yogurt', 'ground beef', 'eggs', 'boneless chicken breasts', 'sliced pepperoni', 'grape tomatoes','cucumber', 'zucchini', 'cauliflower', 'Brussels Sprouts', 'carrots', 'fresh snap peas']
var steps = ["Preheat the oven to 400°F (200°C). Line a baking sheet with parchment paper.", "Arrange the biscuits on the prepared baking sheet.… golden brown. Remove from the oven and let cool.", "In a medium bowl, toss the strawberries with the sugar. Macerate for 10–15 minutes.", "Cut the biscuits in half crosswise, then chop into bite-size cubes.", "Add some biscuit cubes to the bottoms of 2 mason j…op with finely crushed biscuits and a strawberry.", "Enjoy!", "Bring the water to a boil in a small saucepan over…e tea come to room temperature, about 10 minutes.", "Whisk the taro powder into the tea until dissolved.", "To assemble, add the boba pearls and brown sugar s…ice, then pour in the taro tea and half-and-half.", "Stir with a wide-opening straw and serve.", "Enjoy!", "Bring the water to a boil in a small saucepan over…d let cool to room temperature, about 10 minutes.", "To assemble, add the boba pearls and brown sugar s… the ice, then pour in the tea and half-and-half.", "Stir with a wide-opening straw and serve. If desir…a bit of lemon juice for a color-changing effect.", "Enjoy!", "Put oil in pan, add garlic, bay leaf, peppercorn, Mexican oregano, cumin seeds", "Saute briefly", "Add sliced jalapeños and slide carrots and sauté it more", "Add water, apple cider vinegar, white vinegar, salt", "Let it boil for a couple of minutes and then transfer to jars - throw in fridge.", "Enjoy!", "In a food processor or blender, combine the lemon …ping down sides of the processor halfway through.", "Add the chickpeas, salt, cumin, and cayenne and bl…black bean skins. Season with more salt to taste.", "Transfer to a bowl and use the back of a spoon to … wheat or gluten-free crackers, pita, or veggies.", "Enjoy!", "Place honey in a microwave safe dish and heat for 10 seconds until slightly warm.", "Add in the turmeric, coriander, chili powder, salt…ney and mix very well until all are incorporated.", "Wash and pat dry the salmon fillets. When salmon f…sy and you will have to wash your air-fryer pan).", "Then, place the salmon fillets in an air fryer, se…almon fillets and enjoy with your favorite sides.", "Boil water for pasta.", "Cook for 7-9 minutes. Drain pasta and set aside.", "Dice tomatoes and thinly slice basil.", "Heat sauce pan for 3 minutes. Pour olive oil in saucepan.", "Add tomatoes and fresh basil.", "Stir for 5 minutes. Add garlic.", "Mix in pasta. Add salt to taste.", "Enjoy!", "Preheat the oven to 350°F.", "Wash and cut a bunch of kale.", "Separate pieces onto a cookie sheet.", "Combine olive oil, honey and sea salt.", "Drizzle onto kale leaves.", "Put in the oven for 12-15 minutes.", "Enjoy!", "Preheat oven to 350°F", "Mix sugars, butter, egg, and vanilla extract in a medium bowl.", "Stir in flour, baking powder, salt, white chocolate and butterscotch until dough.", "Scoop onto a greased baking sheet and place in the oven for 10 to 12 minutes.", "Let cool for 10 minutes.", "Enjoy!", "Separate and toast the English muffin. It should be crispy.", "Place half of the marinara sauce on each half of the English muffin.", "Add half the cheese to each half of the English muffin.", "Add toppings. (If you are not using toppings, skip this step.)", "Microwave for 30 seconds or until the cheese is melted and the toppings are warm.", "Enjoy!", "Dice the bacon, mince the shallots, and grate the garlic on a microplane.", "Bring a large pot of salted water to a boil. Add t…1 cup of the cooking water, then drain the pasta.", "Heat a large skillet over medium-high heat. Add th…d all but 1 tablespoon of the rendered bacon fat.", "Reduce the heat to medium and add the shallot to t…kimchi and sauté until fragrant, about 2 minutes.", "Add the butter and heavy cream to the pan. Season … Add the cooked pasta and toss until well coated.", "While stirring constantly, gradually add the Parme…erving some for garnish, and stir to incorporate.", "Divide the pasta between 2 serving bowls and top w…eserved bacon, scallions, and furikake, if using.", "Enjoy!", "Dice the Spam into small cubes.", "Crack the eggs into a small bowl and beat to combine.", "Heat the olive oil in a medium nonstick skillet ov…en brown and crispy, stirring often, 3–4 minutes.", "Reduce the heat to medium-low, add the kimchi, and… Stir in the kimchi and spam until well combined.", "Add the rice to 2 serving bowls and divide the scr…between the bowls. Top with furikake, if desired.", "Enjoy!", "Recipe By: Madeline Park", "Shred the cheddar cheese on the large holes of a box grater.", "Add the kimchi to a small bowl and use kitchen shears to cut into small pieces.", "Butter both sides of each slice of bread.", "Heat the olive oil in a medium nonstick skillet ov…er the kimchi to a bowl and wipe out the skillet.", "Turn the heat to medium and add both slices of but… of the bread begins to turn golden, 3–4 minutes.", "Sandwich the slices of bread together and cook, fl…y and fully melted and the bread is well-toasted.", "Transfer to a cutting board and cut in half.", "Enjoy!", "In a small bowl, mix together 2 tablespoons garlic…oons onion powder, the paprika, salt, and pepper.", "Drizzle the chicken thighs with the olive oil, the…gerate overnight if you’re grilling the next day.", "Melt the butter in a small saucepan over medium he…utes. Remove the pot from the heat and set aside.", "Heat a grill pan over medium-high heat. Grease wit…izes, 1–2 minutes, then repeat on the other side.", "Garnish the chicken with the parsley and serve warm with the remaining sauce alongside.", "Enjoy!", "Cut the potatoes into wedges. Add the wedges to a …hen drain. Spread the potatoes on a baking sheet.", "In a small bowl, mix together the paprika, salt, and pepper.", "Drizzle the potatoes with 1 tablespoon of olive oil and season with the spice mixture.", "Heat a grill pan over medium-high heat. Grease the…rks form on both sides, about 2 minutes per side.", "Remove the potatoes from the grill, drizzle with t…l, and garnish with more paprika and the parsley.", "Serve immediately or transfer to a 175°F (80°C) to keep warm until ready to serve.", "Enjoy!", "Bring a large pot of salted water to a boil. Fill a large bowl with cold water and set nearby.", "Blanch the broccolini in the boiling water for abo…e bowl of cold water to stop the cooking process.", "Remove broccolini from the water, shaking off any excess, and spread on a baking sheet.", "Drizzle the broccolini with the olive oil and season with the cumin, salt, and pepper. Toss to coat.", "Heat a grill pan over medium-high heat. Grease wit…s per side. Remove the broccolini from the grill.", "Rub the cut sides of the lemon wedges with the sug…n grill until caramelized, 1 minute on each side.", "Place the caramelized lemon wedges on top of the b…, then squeeze over the broccolini before serving", "Serve immediately or transfer to a 175°F (80°C) to keep warm until ready to serve."]
var meal = ['breakfast', 'dinner', 'lunch', 'snack'];
var labels = ['gluten free', 'low calorie', 'under 30 mins', 'low sugar', 'high calorie']

const insertSampleData = function() {
  for (var i = 1; i < 31; i++) {
    var temp =  {
      name: name[Math.round(Math.random() * name.length)],
      description: desc[Math.round(Math.random() * desc.length)],
      meal: meal[Math.round(Math.random() * meal.length)],
      steps: [steps[Math.round(Math.random() * steps.length)], steps[Math.round(Math.random() * steps.length)], steps[Math.round(Math.random() * steps.length)], steps[Math.round(Math.random() * steps.length)], steps[Math.round(Math.random() * steps.length)], steps[Math.round(Math.random() * steps.length)], steps[Math.round(Math.random() * steps.length)], steps[Math.round(Math.random() * steps.length)]],
      ingredients: [ing[Math.round(Math.random() * ing.length)], ing[Math.round(Math.random() * ing.length)], ing[Math.round(Math.random() * ing.length)],ing[Math.round(Math.random() * ing.length)],ing[Math.round(Math.random() * ing.length)]],
      labels: [ labels[Math.round(Math.random() * labels.length-1)], labels[Math.round(Math.random() * labels.length-1)] ],
      cookTime: Math.round(Math.random() * 60),
      servings: Math.round(Math.random() * 6),
      favorite: Math.random() >= 0.5,
      nutrition: {
        calories: Math.round(Math.random() * 1000),
        carbohydrates: Math.round(Math.random() * 50),
        protein: Math.round(Math.random() * 15),
        fat: Math.round(Math.random() * 10),
        sugar: Math.round(Math.random() * 100),
        fiber: Math.round(Math.random() * 10)
  },
  url: `https://foodmvp.s3-us-west-1.amazonaws.com/${i}.jpg`
    }
    sampleData.push(temp);
  }
  Recipe.remove({})
    .then(()=> {
      Recipe.create(sampleData)
        .then(() => db.close())
        .catch(err => console.log(err));
    })
};

insertSampleData();