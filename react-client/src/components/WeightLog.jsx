import React from "react";
import { useState, useEffect } from 'react';
import $ from 'jquery';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import WeightChart from './WeightChart.jsx';


const WeightLog = (props) => {

  const [weight, setWeight] = useState([]);

  useEffect(() => {

    $.ajax({
      url: `http://localhost:3000/api/weights`,
      type: 'GET',
      success: (data) => {
        console.log(data);
        setWeight(data);
      },
      error: (err) => {
        console.log('err', err);
      }
    });

  }, []);


  const addWeight = (event) => {
    event.preventDefault();

    $.ajax({
      url: 'http://localhost:3000/api/weights',
      type: 'POST',
      data: $('form').serialize(),
      success: function(data) {
         console.log('success', data);
         setWeight(data);
      },
      error: function(err) {
        console.log("Failed  ", err);
      }
    })
  }



  return (

    <div className='container'>
      <p className="h1">Track your weight</p>
      <WeightChart data={weight}/>
      <Form >
        <Form.Group>
          <Form.Label>Log weight</Form.Label>
          <Form.Control name='weight' placeholder="Enter your weight in pounds" />
        </Form.Group>
        <Button type='submit' variant="primary" onClick={() => addWeight(event)}>
          Submit
        </Button>
    </Form>
    </div>

  )
}

export default WeightLog;
