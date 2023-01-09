import React from 'react';


import InputStyle from './Input.module.css';






const input = (props) => {

    let inputElement = null;


        switch (props.inputtype) { ///////SIM, ESSE PROP DEVE SER DEFINIDO/SETTADO ASSIM MESMO, SEM 'CamelCase', POIS SE NÃO FIZERMOS ISSO, SERÁ MOSTRADO UM ERRO CHATO NO CONSOLE DIZENDO QUE 'DEFAULT HTML PROPS' (como esse inputtype) NÃO PODEM SER DEFINIDOS COM CAMEL CASE QUANDO ELES FOREM REPRESENTADOS NO DOM, pq o __DOM__ em si, o código html em si, SEMPRE É __ CASE INSENSITIVE__ (ao contrário do javascript/react, que é CASE SENSITIVE.)
            case('input'): 
            inputElement = (<input {...props} className={InputStyle.InputElement}/>)
            break;
            case('textarea'):
            inputElement = (<textarea {...props} className={InputStyle.InputElement}/>)
            break;
            case('dropdown'):
            inputElement = (<select {...props} name="dropdown" id="dropdown">
                        <option value="fastest">Fastest</option>
                        <option value="cheapest">Cheapest</option>
            </select> )
            break;
            default:
                inputElement = (<input {...props} className={InputStyle.InputElement}/>)
        }



    return (
        <div className={InputStyle.Input}>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )



}








export default input;