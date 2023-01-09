
import React from 'react';


import Backdrop from './Backdrop.module.css';



const backdrop = (props) => {

   return props.show ? <div className={Backdrop.Backdrop}
    onClick={props.clicked}
  
   style={
       {
           transition: 'opacity 2s linear'
       }
   }
   
   >




   </div> : null

}










export default backdrop;