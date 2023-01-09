import React from 'react';

import InputStyle from './Input.module.css';

const input = (props) => {
  let inputElement = null;

  let validationError = null;

  const inputClasses = [InputStyle.InputElement];



  if (props.invalid && props.touched) {


    validationError = <p>Please enter a valid {props.elementValue.slice(0,1).toUpperCase() + props.elementValue.slice(1, props.elementValue.length)} !</p>;
}

  if (!props.shouldValidate) {
    validationError = null;
  }




  if (props.invalid && props.shouldValidate && props.touched) {
    inputClasses.push(InputStyle.Invalid);
  }

 



  switch (
    props.elementType ///////SIM, ESSE PROP DEVE SER DEFINIDO/SETTADO ASSIM MESMO, SEM 'CamelCase', POIS SE NÃO FIZERMOS ISSO, SERÁ MOSTRADO UM ERRO CHATO NO CONSOLE DIZENDO QUE 'DEFAULT HTML PROPS' (como esse inputtype) NÃO PODEM SER DEFINIDOS COM CAMEL CASE QUANDO ELES FOREM REPRESENTADOS NO DOM, pq o __DOM__ em si, o código html em si, SEMPRE É __ CASE INSENSITIVE__ (ao contrário do javascript/react, que é CASE SENSITIVE.)
  ) {
    case 'input':
      inputElement = (
        <input onChange={props.changed}
          {...props.elementConfig}
          className={inputClasses.join(' ')}
          value={props.value}
        />
      );
      break;
    case 'textarea':
      inputElement = (
        <textarea onChange={props.changed}
          {...props.elementConfig}
          className={inputClasses.join(' ')}
          value={props.value}
        />
      );
      break;
    case 'select':
      inputElement = (
        <select onChange={props.changed}
        className={inputClasses.join(' ')}
          value={props.value}
        >
          {props.elementConfig.options.map((option) => {
            return (
              <option onChange={props.changed}
                // onChange={}
                key={option.value}
                value={option.value}
              >
                {option.displayValue} 
              </option>
            );
          })}
        </select>
      );
      break;
    default:
      inputElement = (
        <input onChange={props.changed}
          {...props.elementConfig}
          className={inputClasses.join(' ')}
          value={props.value}
        />
      );
  }

  return (
    <div className={InputStyle.Input}>
      <label>{props.label}</label>
      {inputElement}
      {validationError}
    </div>
  );
};

export default input;
