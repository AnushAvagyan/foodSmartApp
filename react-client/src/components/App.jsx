import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigation from './Navigation.jsx';
import HomePage from './HomePage.jsx';
import RecipeList from './RecipeList.jsx';
import Recipe from './Recipe.jsx';
import AddRecipe from './AddRecipe.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);

    this.saveRecipe = this.saveRecipe.bind(this);
    this.uploadImage = this.uploadImage.bind(this);
    this.likeRecipe = this.likeRecipe.bind(this);
  }

  saveRecipe(event) {
    event.preventDefault();

    $.ajax({
      url: 'http://localhost:3000/recipes',
      type: 'POST',
      data: $('form').serializeArray(),
      success: function(data) {
         console.log('success', data);
         alert('Thank you! You recipe has been saved');
         window.location = 'http://localhost:3000';
      },
      error: function(err) {
        console.log("Failed  ", err);
      }
    })
  }

  uploadImage(image) {
    event.preventDefault();
    let imageData = new FormData();
    //Append file to form data
    imageData.append("image", image.files[0], image.files[0].name);

    $.ajax({
      url: `http://localhost:3000/recipes/${image.id}/images`,
      type: 'POST',
      processData: false,
      contentType: false,
      data: imageData,
      success: function(data) {
         console.log('success', data);
         alert('Thank you! You image has been saved');
         window.location = 'http://localhost:3000';
      },
      error: function(err) {
        console.log("Failed  ", err);
      }
    })
  }

  likeRecipe(like, id) {

    var obj = {favorite: like};

    $.ajax({
      url: `http://localhost:3000/recipes/${id}/favorite`,
      type: 'POST',
      data: obj,
      success: function(data) {
         console.log('success', data);
      },
      error: function(err) {
        console.log("Failed  ", err);
      }
    })
  }



  render() {

    return (
      <div className="main">
        <Navigation />
        <Switch>
          <Route exact path='/'>
           <HomePage />
          </Route>
          <Route exact path='/add_new_recipe'>
           <AddRecipe handleClick={() => this.saveRecipe(event)} />
          </Route>
          <Route exact path='/:meal'>
           <RecipeList handleLike={this.likeRecipe} />
          </Route>
          <Route exact path='/recipe/:id'>
           <Recipe handleClick={(event) => this.uploadImage(event)} handleLike={this.likeRecipe}/>
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;