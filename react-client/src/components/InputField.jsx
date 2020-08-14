import React from "react";
import { useState } from 'react';

const InputField = (props) => {

  const [fields, setFields] = useState(['ing']);

  const add = () => {
    const values = [...fields];
    values.push('ing');
    setFields(values);
  }

  return (
    <div>
      { fields.map(field =>
        <input
          type="text"
          placeholder="Enter text"
          name='ingredients'
        />
      ) }
      <button type="button" onClick={() => add()}>
        Add more ingredients
      </button>
    </div>
  )
}

export default InputField;


