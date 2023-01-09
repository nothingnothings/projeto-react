import React from 'react';


import SideDrawerToggleButtonStyle from './SideDrawerToggleButton.module.css';




const sideDrawerToggleButton = (props) => {

   return  (

    <div className={SideDrawerToggleButtonStyle.SideDrawerToggleButton}>
   <button onClick={props.clicked} className={SideDrawerToggleButtonStyle.SideDrawerToggleButton}>
       <span></span>
           <div></div>
       <span></span>
   </button>
   </div>
   
   )
}














export default sideDrawerToggleButton;