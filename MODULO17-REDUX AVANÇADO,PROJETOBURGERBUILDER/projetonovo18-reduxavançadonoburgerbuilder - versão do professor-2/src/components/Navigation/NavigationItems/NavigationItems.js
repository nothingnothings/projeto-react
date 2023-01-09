import React from 'react';


import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';


import NavigationItemsStyle from './NavigationItems.module.css';



const navigationItems = (props) => {
  return <ul className={NavigationItemsStyle.NavigationItems}>
          
          <NavigationItem closed={props.closed} link={'/'}  >Burger Builder</NavigationItem>


      
          <NavigationItem link={'/orders'} closed={props.closed} >Orders</NavigationItem>



         
  
          
       


  </ul>
};




export default navigationItems;
