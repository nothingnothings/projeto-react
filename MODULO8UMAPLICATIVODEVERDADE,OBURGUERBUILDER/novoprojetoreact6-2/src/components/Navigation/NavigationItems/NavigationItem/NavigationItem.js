import React from 'react';



import NavigationItemStyle from './NavigationItem.module.css';



const navigationItem = (props) => {
    return <li className={NavigationItemStyle.NavigationItem}>
        
        
        <a 
        
        
        href={props.link}
        className={
            
            props.active 
        
        ?
    
            NavigationItemStyle.active 

        :

        null
    }
        >{props.children}</a></li> 
}















export default navigationItem;