import React from 'react';

import './Char.css';






const char = (props) => {

    const style = {
        display: 'inline-block',    
        padding: '16px',
        margin: '16px',
        border: '1px solid black',
        textAlign: 'center'
    }


    return (
        <div className="char" style={style}>
        <p>{letter}</p>
        </div>


    )





    
}




export default char;