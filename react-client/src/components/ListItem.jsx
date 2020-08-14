import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import LikeButton from './LikeButton.jsx';

const ListItem = (props) => (
  <div className="row featurette">
    <div className="col-md-7">
      <Link to={`recipe/${props.recipe._id}`}  >
        <h2 className="featurette-heading">{props.recipe.name} </h2>
      </Link>
      { props.recipe.labels.map(label =>
      <Link to={`${label}`}  >
        <span className="badge badge-info" onClick={() => props.handleFilter('labels', label)} > {label}&nbsp;
        </span>
      </Link>
      )}
      <p className="lead">{props.recipe.description}</p>
    </div>
    <div className="col-md-5">
      <img className="featurette-image img-fluid mx-auto"alt="500x500" src={props.recipe.url}/>
      <LikeButton recipe={props.recipe} handleLike={props.handleLike} />
    </div>
  </div>
)

export default ListItem;