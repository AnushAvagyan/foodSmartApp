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


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      meal: null,
      recipes: []
    }

    this.getRecipes = this.getRecipes.bind(this);
  }

  componentDidMount() {

    //this.getRecipes();
  }

  getRecipes(mealType) {
    $.ajax({
      url: `/recipes/${mealType}`,
      success: (data) => {
        this.setState({
          recipes: data
        })
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

//   render () {
//     return (
//     <div>
//       <h1>Item List</h1>
//       <List items={this.state.items}/>
//     </div>
//     )
//   }
// }

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

          {/* <Route exact path='/add_new_recipe'>
           <NewRecipe  />
          </Route> */}

        </Switch>

      </div>
    )
  }
}

export default App;