import React from "react";
import $ from 'jquery';
import { useState, useEffect } from 'react';
import { useParams} from "react-router";
import Image from 'react-bootstrap/Image'
import AddImage from './AddImage.jsx';
import LikeButton from './LikeButton.jsx';

const Recipe = (props) => {

  const [recipe, setRecipe] = useState([]);

  let { id } = useParams();

  useEffect(() => {

    $.ajax({
      url: `http://localhost:3000/recipe/${id}`,
      success: (data) => {
        setRecipe(data[0]);

      },
      error: (err) => {
        console.log('err', err);
      }
    });

  }, []);

  return (

    <div className='container'>
      <p className="h1">{recipe.name}</p>
      <p> {recipe.description} </p>
      <div className='row'>
        <div className="col-lg-5">
          <div className='img-container'>
            <img src={recipe.url} className="img-fluid" alt="Responsive image" />
            <LikeButton recipe={recipe} handleLike={props.handleLike} />
            {recipe.labels && <div className="col-lg-4 col-sm-4">
              { recipe.labels.map(label => <span className="badge badge-info">{label}&nbsp;</span>)}
            </div> }
              <div className="entry-content">
                <div className="row">
                  <div className="col-lg-4 col-sm-4">
                    Serves: <p><strong><i className="fa fa-users"></i> {recipe.servings} people</strong></p>
                  </div>
                  <div className="col-lg-4 col-sm-4">
                    Cooking Time: <p><strong><i className="fa fa-clock-o" aria-hidden="true"></i> {recipe.cookTime} min</strong></p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        <div className="col-lg-5 card">
          {recipe.nutrition && <div >
            <h4>Nutrition</h4>
              <ul>
                <li> Calories <span>{recipe.nutrition.calories.toFixed(2)}</span> </li>
                <li> Sugar <span>{recipe.nutrition.sugar.toFixed(2)}g</span> </li>
                <li> Protein <span>{recipe.nutrition.protein.toFixed(2)}g</span> </li>
                <li> Fat <span>{recipe.nutrition.fat.toFixed(2)}g</span> </li>
                <li> Carbohydrates <span>{recipe.nutrition.carbohydrates.toFixed(2)}g</span> </li>
              </ul>
          </div>
          }
          {recipe.ingredients && <div>
            <h4>Ingredients</h4>
            <ul>
              {recipe.ingredients.map(ing => <li>{ing}</li>)}
            </ul>
          </div> }
        </div>
        <AddImage recipeId={id} handleImageUpload={(event) => props.handleClick(event)}/>
      </div>
      {recipe.steps && <div>
        <h4>Directions</h4>
        <ol>
          {recipe.steps.map(step => <li>{step}</li>)}
        </ol>
      </div> }
    </div>
  )
}

export default Recipe;

