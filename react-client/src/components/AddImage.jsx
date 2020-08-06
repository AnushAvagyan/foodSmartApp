import React from "react";
import $ from 'jquery';
import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
//import { useParams} from "react-router";


const AddImage = (props) => {

  const [image, setImage] = useState([]);
  //let { id } = useParams();
  const addId = (id) => {
    //console.log('doing', id, event.target.files[0])
    event.target.id = id;
    setImage(event.target)

  }


  return (
    <div className='container'>
      <p> Add or update an image </p>
       <Form  encType="multipart/form-data">
        <Form.Group>
          <Form.Control label="Upload a picture" type="file" accept="image/png, image/jpeg"  onChange={(event) =>
             addId(props.recipeId)} />
        </Form.Group>

        {image && <button onClick={(event) => props.handleImageUpload(image, props.recipeId)}>
          Upload
        </button>
        }
      </Form>
    </div>
  )
}

export default AddImage;