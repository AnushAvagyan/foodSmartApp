import React from "react";
import $ from 'jquery';
import { useState, useEffect } from 'react';
import { useParams} from "react-router";
import Image from 'react-bootstrap/Image'
import AddImage from './AddImage.jsx';


const Recipe = (props) => {

  const [recipe, setRecipe] = useState([]);
  const [favorite, toggle] = useState(false);
  let { id } = useParams();

  useEffect(() => {

    $.ajax({
      url: `http://localhost:3000/recipe/${id}`,
      success: (data) => {
        setRecipe(data[0]);
        toggle(data[0].favorite);
      },
      error: (err) => {
        console.log('err', err);
      }
    });

  }, []);

  const like = (bool, id) => {
    toggle(bool);
    props.handleLike(bool, id);
  }

  return (

    <div className='container'>
      <p className="h1">{recipe.name}</p>
      <p> {recipe.description} </p>
      <div className='row'>
        <div className="col-lg-7">
          <div className='img-container'>
            <img src={recipe.url} className="img-fluid" alt="Responsive image" />
            <i className="fa fa-heart icon" style={{color: favorite ? 'red' : 'gray', fontSize: '48px'}}
            onClick={() => like(!favorite, recipe._id)}></i>
          </div>

          <AddImage recipeId={id} handleImageUpload={(event) => props.handleClick(event)}/>
        </div>
        {recipe.nutrition && <div className="col-lg-3 card">
          <h4>Nutrition</h4>
            <ul>
              <li> Calories <span>{recipe.nutrition.calories}</span> </li>
              <li> Sugar <span>{recipe.nutrition.sugar}g</span> </li>
              <li> Protein <span>{recipe.nutrition.protein}g</span> </li>
              <li> Fat <span>{recipe.nutrition.fat}g</span> </li>
              <li> Carbohydrates <span>{recipe.nutrition.carbohydrates}g</span> </li>
              <li> Fiber <span>{recipe.nutrition.fiber}</span> </li>
            </ul>
        </div>
        }
      </div>
      <div className="entry-content">
        <div className="row">
          {recipe.labels && <div className="col-lg-4 col-sm-4">
          { recipe.labels.map(label => <span className="badge badge-info">{label}&nbsp;</span>)}
          </div> }
          <div className="col-lg-4 col-sm-4">
            Serves: <p><strong><i className="fa fa-users"></i> {recipe.servings} people</strong></p>
          </div>
          <div className="col-lg-4 col-sm-4">
            Cooking Time: <p><strong><i className="fa fa-clock-o" aria-hidden="true"></i> {recipe.cookTime} min</strong></p>
          </div>
        </div>
        {recipe.ingredients && <div>
          <h4>Ingredients</h4>
          <ul>
            { recipe.ingredients.map(ing => <li>{ing}</li>)}
          </ul>
        </div> }
        {recipe.steps && <div>
          <h4>Directions</h4>
          <ol>
            { recipe.steps.map(step => <li>{step}</li>)}
          </ol>
        </div> }
      </div>
    </div>
  )
}

export default Recipe;

