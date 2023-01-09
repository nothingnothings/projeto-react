import React from 'react';



import DrawerToggleStyle from './DrawerToggle.module.css';




const DrawerToggle = (props) => {


    return (
  
        <button onClick={props.clicked} className={DrawerToggleStyle.DrawerToggle} >
            <div />
            <div />
            <div />
        </button>

    )

}

















export default DrawerToggle;