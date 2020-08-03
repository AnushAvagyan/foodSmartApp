import React from 'react';
import ReactDOM from 'react-dom';
import { ajax } from 'jquery';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Navigation from './Navigation.jsx';
import HomePage from './HomePage.jsx';
import RecipeList from './RecipeList.jsx';
import Recipe from './Recipe.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: null,
      recipes: []
    }


  }

  componentDidMount() {
  }

  render() {

    return (
      <div className="main">
        <Navigation />

        <Switch>
          <Route exact path='/'>
           <HomePage />
          </Route>


          <Route exact path='/:meal'>
           <RecipeList />
          </Route>
          <Route exact path='/recipe/:id'>
           <Recipe />
          </Route>

          {/* <Route exact path='/add_new_recipe'>
           <NewRecipe  />
          </Route> */}

        </Switch>

      </div>
    )
  }
}

export default App;