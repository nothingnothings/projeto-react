import React from 'react';




import Button from './Button.module.css';





const button = (props) => {
    

    return (
        <button className={[Button.Button, Button[props.btnType]].join(' ')}
        onClick={props.clicked}
        >
            
            
            {props.children}
            </button>
    )
}

















export default button; 