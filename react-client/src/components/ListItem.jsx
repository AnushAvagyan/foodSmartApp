import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const ListItem = (props) => (
  <div className="row featurette">
          <div className="col-md-7">
          <Link to={`recipe/${props.recipe.id}`}  >
          <h2 className="featurette-heading">{props.recipe.name} </h2>
        </Link>
        { props.recipe.labels.map(label => <span className="badge badge-info">{label}&nbsp;</span>)}

            <p className="lead">{props.recipe.description}</p>
          </div>
          <div className="col-md-5">
            <img className="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src={props.recipe.url} data-holder-rendered="true"/>
          </div>
        </div>
)

export default ListItem;