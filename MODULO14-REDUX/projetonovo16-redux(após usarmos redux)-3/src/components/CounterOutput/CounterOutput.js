import React from 'react';



import CounterOutputStyle from '../CounterOutput/CounterOutput.module.css';





const CounterOutput = (props) => {

           return <div className="CounterOutput">
                Current Counter: {props.value}
            </div>
}




export default CounterOutput;