import React from "react";
import $ from 'jquery';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col'


const AddRecipe = (props) => {

  return (
    <div className='container'>
      <p className="h1">Add a recipe to your book</p>
       <Form  encType="multipart/form-data" >
  <Form.Group>
    <Form.Label>Your recipe name</Form.Label>
    <Form.Control name='name' placeholder="Enter text" />
    <Form.Text className="text-muted">
      Be creative and descriptive with the name
    </Form.Text>
  </Form.Group>

  <Form.Group>
    <Form.Label>Select the meal type</Form.Label>
    <Form.Control as="select" multiple name='meal'>
      <option>breakfast</option>
      <option>lunch</option>
      <option>dinner</option>
      <option>snack</option>
    </Form.Control>
  </Form.Group>
  <Form.Group>
    <Form.Label>List your ingredient in the textbox</Form.Label>
    <Form.Control as="textarea" rows="3" name='ingredients'/>
  </Form.Group>
  <Form.Group>
    <Form.Label>Enter detailed directions</Form.Label>
    <Form.Control as="textarea" rows="3" name='steps'/>
  </Form.Group>
  <Form.Group controlId="exampleForm.ControlTextarea1">
    <Form.Label>Some notes or short description</Form.Label>
    <Form.Control as="textarea" rows="3" name='description'/>
  </Form.Group>
  <Form.Row>
    <Form.Group as={Col}>
      <Form.Label>Servings</Form.Label>
      <Form.Control name='servings' />
    </Form.Group>


    <Form.Group as={Col} >
      <Form.Label>Time to cook</Form.Label>
      <Form.Control name='cookTime'/>
    </Form.Group>
  </Form.Row>



  <Button type='submit' variant="primary" onClick={() => props.handleClick(event)}>
    Submit
  </Button>



</Form>

    </div>





  )
}

export default AddRecipe;

