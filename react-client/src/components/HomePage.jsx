import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import App from './App.jsx';



const HomePage = (props) => (
  <div>
    <div className='title'>
      <p className='heading'>Your own recipe book</p>
      <div className="subtitle">
        Save your favorite recipes, find out nutritional value and more.
      </div>
    </div>

    <div className="row">
      <div className="col-md-7">
        <Link to={'breakfast'}  >
          <h2>Breakfast </h2>
        </Link>
        <span className="text-muted">Great start of your day = great breakfast</span>
        <p className="lead">Breakfast is often called ‘the most important meal of the day’, and for good reason. As the name suggests, breakfast breaks the overnight fasting period. It replenishes your supply of glucose to boost your energy levels and alertness, while also providing other essential nutrients required for good health.</p>
      </div>
      <div className="col-md-5">
        <img className="featurette-image img-fluid mx-auto" alt="500x500" src="https://host-service.s3-us-west-1.amazonaws.com/breakfast.jpg" />
      </div>
    </div>

    <div className="row">
      <div className="col-md-7">
        <Link to={'lunch'}  >
          <h2>Lunch </h2>
        </Link>

        <span className="text-muted">In a world where everything is getting more and more fast-paced, people forget to take breaks, but breaks are not a waste of time.</span>
        <p className="lead">-It has been proven that people who don’t eat lunch tend to gain more weight because they overeat during dinner time to compensate for lunch.</p>
      </div>
      <div className="col-md-5">
          <img className="featurette-image img-fluid mx-auto" alt="500x500" src="https://host-service.s3-us-west-1.amazonaws.com/lunch.jpg"/>
      </div>
    </div>

    <div className="row">
      <div className="col-md-7">
        <Link to={'dinner'}  >
          <h2>Dinner </h2>
        </Link>

        <span className="text-muted">Dinner is where the magic happens in the kitchen</span>
        <p className="lead">Eat a light, healthy, carb-included, small dinner every night and see how easily you fall asleep. </p>
      </div>
      <div className="col-md-5">
        <img className="featurette-image img-fluid mx-auto" alt="500x500" src="https://host-service.s3-us-west-1.amazonaws.com/dinner.jpg"/>
      </div>
    </div>

    <div className="row">
      <div className="col-md-7">
        <Link to={'snack'}  >
          <h2 className="featurette-heading">Healthy snacks </h2>
        </Link>

        <span className="text-muted">What type of snacker are you?</span>
        <p className="lead">Do you need gluten-free snacks, or are you just looking for healthy snack ideas packed with protein and not too much sugar?</p>
      </div>
      <div className="col-md-5">
        <img className="featurette-image img-fluid mx-auto" alt="500x500" src="https://host-service.s3-us-west-1.amazonaws.com/snacks.png" />
      </div>
    </div>

  </div>
)

export default HomePage;






