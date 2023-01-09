import React from 'react';



import NavigationItemStyle from './NavigationItem.module.css';

import { NavLink } from 'react-router-dom';


const navigationItem = (props) => {
    return <li className={NavigationItemStyle.NavigationItem}>
        
        
        <NavLink exact
        activeClassName={NavigationItemStyle.active}
        
        to={props.link} 
    //     className={ ///CÓDIGO QUE SE TORNA DESNECESSÁRIO/OBSOLETO DIANTE DA EXISTÊNCIA DE 'NavLink' e de seu comportamento com o 'class=active'...
            
    //         props.active 
        
    //     ?
    
    //         NavigationItemStyle.active 

    //     :

    //     null
    // }
        >{props.children}</NavLink></li> 
}



export default navigationItem;