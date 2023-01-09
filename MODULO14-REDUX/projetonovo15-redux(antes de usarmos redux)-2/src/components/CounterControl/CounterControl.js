import React from 'react';



import CounterControlStyle from './CounterControl.module.css';




const counterControl = (props) => {
    return (<div className={CounterControlStyle.CounterControl} onClick={props.clicked}>
        {props.label}
    </div>)
};




export default counterControl;