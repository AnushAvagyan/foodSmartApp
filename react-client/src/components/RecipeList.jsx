import React from "react";
import $ from 'jquery';
import { useState, useEffect } from 'react';
import { useParams} from "react-router";
import ListItem from './ListItem.jsx';


const RecipeList = (props) => {

  const [recipes, setRecipes] = useState([]);
  let { meal } = useParams();

  useEffect(() => {

    $.ajax({
      url: `http://localhost:3000/recipes/${meal}`,
      success: (data) => {
        setRecipes(data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });

  }, []);

  return (

    <div>
    <h4> List Component </h4>

    { recipes.map(recipe => <ListItem recipe={recipe}/>)}
  </div>
  )
}

export default RecipeList;