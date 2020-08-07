import React from "react";
import $ from 'jquery';
import { useState } from 'react';


const LikeButton = (props) => {

  const [favorite, toggle] = useState(props.recipe.favorite);

  const like = (bool, id) => {
    console.log(props.recipe)
    toggle(bool);
    props.handleLike(bool, id);
  }

  return (
    <div>
      {favorite !== undefined ? (
        <i className="fa fa-heart icon" style={{color: favorite ? 'red' : 'gray', fontSize: '48px'}}
        onClick={() => like(!favorite, props.recipe._id)}></i>
      ) : (
        <i className="fa fa-heart icon" style={{color: props.recipe.favorite ? 'red' : 'gray', fontSize: '48px'}}
        onClick={() => like(!props.recipe.favorite, props.recipe._id)}></i>
      )}
    </div>
  )
}

export default LikeButton;

