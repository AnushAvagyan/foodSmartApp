import React from "react";
import $ from 'jquery';
import { useState, useEffect } from 'react';
import { useParams} from "react-router";
import ListItem from './ListItem.jsx';


const RecipeList = (props) => {

  const [recipes, setRecipes] = useState([]);
  let { filter } = useParams();

  const filterList = (filterBy, filter) => {
    if (filterBy === 'meal') {
      var obj = { meal: filter };
    } else {
      var obj = { labels : filter };
    }
    $.ajax({
      url: `http://localhost:3000/api/recipes/:${filterBy}`,
      data: obj,
      success: (data) => {
        setRecipes(data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  useEffect(() => {

    filterList('meal', filter);

  }, []);

  return (

    <div className='container'>
      { recipes.map(recipe => <ListItem recipe={recipe} key={recipe._id} handleLike={props.handleLike} handleFilter={filterList} />)}
    </div>
  )
}

export default RecipeList;