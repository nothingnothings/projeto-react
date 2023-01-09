import React from 'react';



import CounterOutputStyle from './CounterOutput.module.css';





const CounterOutput = (props) => {

           return <div className={CounterOutputStyle.CounterOutput}>
                Current Counter: {props.value}
            </div>
}




export default CounterOutput;