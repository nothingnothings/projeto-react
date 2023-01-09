import React from 'react';


import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';


import NavigationItemsStyle from './NavigationItems.module.css';





const navigationItems = (props) => {
  return <ul className={NavigationItemsStyle.NavigationItems}>
          <NavigationItem link="/" active>Burger Builder</NavigationItem>
          <NavigationItem link="/">Checkout</NavigationItem>
       


  </ul>
};




export default navigationItems;
