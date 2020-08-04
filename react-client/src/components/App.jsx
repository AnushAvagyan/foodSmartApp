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
  }

  saveRecipe(event) {
    event.preventDefault();

    $.ajax({
      url: 'http://localhost:3000/recipes',
      type: 'POST',
      data: $('form').serializeArray(),
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
           <AddRecipe handleClick={(event) => this.saveRecipe(event)} />
          </Route>
          <Route exact path='/:meal'>
           <RecipeList />
          </Route>
          <Route exact path='/recipe/:id'>
           <Recipe />
          </Route>
        </Switch>
      </div>
    )
  }
}

export default App;