# Project Name #

<!--
> This material was originally posted [here](http://www.quora.com/What-is-Amazons-approach-to-product-development-and-product-management). It is reproduced here for posterities sake.

There is an approach called "working backwards" that is widely used at Amazon. They work backwards from the customer, rather than starting with an idea for a product and trying to bolt customers onto it. While working backwards can be applied to any specific product decision, using this approach is especially important when developing new products or features.

For new initiatives a product manager typically starts by writing an internal press release announcing the finished product. The target audience for the press release is the new/updated product's customers, which can be retail customers or internal users of a tool or technology. Internal press releases are centered around the customer problem, how current solutions (internal or external) fail, and how the new product will blow away existing solutions.

If the benefits listed don't sound very interesting or exciting to customers, then perhaps they're not (and shouldn't be built). Instead, the product manager should keep iterating on the press release until they've come up with benefits that actually sound like benefits. Iterating on a press release is a lot less expensive than iterating on the product itself (and quicker!).

If the press release is more than a page and a half, it is probably too long. Keep it simple. 3-4 sentences for most paragraphs. Cut out the fat. Don't make it into a spec. You can accompany the press release with a FAQ that answers all of the other business or execution questions so the press release can stay focused on what the customer gets. My rule of thumb is that if the press release is hard to write, then the product is probably going to suck. Keep working at it until the outline for each paragraph flows.

Oh, and I also like to write press-releases in what I call "Oprah-speak" for mainstream consumer products. Imagine you're sitting on Oprah's couch and have just explained the product to her, and then you listen as she explains it to her audience. That's "Oprah-speak", not "Geek-speak".

Once the project moves into development, the press release can be used as a touchstone; a guiding light. The product team can ask themselves, "Are we building what is in the press release?" If they find they're spending time building things that aren't in the press release (overbuilding), they need to ask themselves why. This keeps product development focused on achieving the customer benefits and not building extraneous stuff that takes longer to build, takes resources to maintain, and doesn't provide real customer benefit (at least not enough to warrant inclusion in the press release).
 -->

## Heading ##
  > Create your recipe book
## Sub-Heading ##
  > Save your favorite recipes, get nutritional values, view your weight trends, log your current weight and more

## Summary ##
  > Let us help you organize your recipe book - create, edit and improve your recipes, add pictures, get nutritional value, plan your meals, and share ideas with friends.

## Problem ##
  > Is your diet healthy? Not sure what to cook?

## Solution ##
  > This app will help you plan your meals, create recipes, try new things, improvize, document, reuse and share. View your weight trends to track your progress.

## Quote from You ##
  >

## How to Get Started ##
  >

## Customer Quote ##
  >

## Closing and Call to Action ##
  >


  Notes:

  1. DONE - Main page - navigation to create a new recipe, view weight trends and explore buttons, Selection of breakfast, lunch, dinner or snack options
  2. Done - Recipe list page - based on the selection (breakfast, lunch ...). Recipe title, image, labels. Add filter by labels functionality. Like/unlike button
  3. Done - Recipe details page - title, labels, picture, nutritional value (calculated and provided by the app in the backend), ingredients, steps. Like/unlike buttons. Add/update image button.
  4. Done - Create new recipe page - Form to add title, ingredients (either one textbox for all, or separately, plus need to collect weight - grams, lb...), steps (textbox to add desc), save.
  5. Done - weight trends page - a line chart and ability to log weight

  For now only 1 user will exist when implementing mvp. Later profiles can be implemented and the recipes will show based on the user.

    Out of scope for mvp
   Share your recipe book internally and via different social channels, explore friends recipes (similar to newsfeed), comment other recipes and ask questions, leaderboards, authentification, plan for a week, help with shopping list planning, integration with shopping ecommerce apps with ability to place an order and get delivery, daily consumed calories tracker.... App suggests how to improve the recipe - how to balance nutritients by adding a new ingredient(for example add more veggies), how to substitute unheathy options based on your preferences, shows similar recipes...
   For now the nutritional values are calculated per 100 gram, adding ingredients measurements was out of scope of mvp. In the future this need to be added, and third party API needs to be changed to the ones that will work better for this use case (the current ones are very slow, not very accurate)

   Questions :
   How to calculate nutritional value? Need calories, carbs, protein et for each food. Use public API? OR generate and store the data in app's own database? (use sample or random data for mvp)
   A: Used open source third party API
