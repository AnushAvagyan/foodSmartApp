import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import App from './App.jsx';



const HomePage = (props) => (
  <div className='container'>

    <div className='title'>
      <p className='heading'>Your own recipe book</p>
      <div className="subtitle">
        Save your favorite recipes, find out nutritional value and more.
      </div>
    </div>

    <div>
      <Link to={'breakfast'}  >
        <h2>Breakfast </h2>
      </Link>
      <span className="text-muted">Great start of your day = great breakfast</span>
      <p className="lead">Breakfast is often called ‘the most important meal of the day’, and for good reason. As the name suggests, breakfast breaks the overnight fasting period. It replenishes your supply of glucose to boost your energy levels and alertness, while also providing other essential nutrients required for good health.</p>
    </div>

    <div>
      <Link to={'lunch'}  >
        <h2>Lunch </h2>
      </Link>
      <span className="text-muted">In a world where everything is getting more and more fast-paced, people forget to take breaks, but breaks are not a waste of time.</span>
      <p className="lead">-It has been proven that people who don’t eat lunch tend to gain more weight because they overeat during dinner time to compensate for lunch.</p>
    </div>

    <div>
      <Link to={'dinner'}  >
        <h2>Dinner </h2>
      </Link>

      <span className="text-muted">Dinner is where the magic happens in the kitchen</span>
      <p className="lead">Eat a light, healthy, carb-included, small dinner every night and see how easily you fall asleep.
      </p>
    </div>

    <div>

      <Link to={'snack'}  >
        <h2 className="featurette-heading">Healthy snacks </h2>
      </Link>

      <span className="text-muted">What type of snacker are you?</span>
      <p className="lead">Do you need gluten-free snacks, or are you just looking for healthy snack ideas packed with protein and not too much sugar?</p>
    </div>
  </div>
)

export default HomePage;






