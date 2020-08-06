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
  }

  saveRecipe(event) {
    event.preventDefault();
    //console.log(image);

    // let data = new FormData();
    // //Append files to form data
    // data.append("file", image, image.name);
    // data.append("form", $('form').serializeArray());

    $.ajax({
      url: 'http://localhost:3000/recipes',
      type: 'POST',
      // processData: false,
      // contentType: false,
      data: $('form').serializeArray(),
      success: function(data) {
         console.log('success', data);
      },
      error: function(err) {
        console.log("Failed  ", err);
      }
    })
  }

  uploadImage(image, id) {
    event.preventDefault();
    console.log(image);

    let imageData = new FormData();
    //Append files to form data
    imageData.append("image", image, image.name);

    $.ajax({
      url: `http://localhost:3000/recipes/${id}/images`,
      type: 'POST',
      processData: false,
      contentType: false,
      data: imageData,
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
           <RecipeList />
          </Route>
          <Route exact path='/recipe/:id'>
           <Recipe handleClick={(event) => this.uploadImage(event)}/>
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;