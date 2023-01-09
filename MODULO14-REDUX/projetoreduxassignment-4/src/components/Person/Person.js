import React from 'react';

import PersonStyle from '../Person/Person.module.css';

const person = (props) => (
  <div className={PersonStyle.Person} onClick={props.clicked}>
    <h1>{props.name}</h1>
    <p>Age: {props.age}</p>
  </div>
);

export default person;
