import React from 'react';

import Toolbar from './Toolbar.module.css';

import Logo from '../../Logo/Logo';


import SideDrawerToggleButton from '../../../components/UI/SideDrawerToggleButton/SideDrawerToggleButton';


import NavigationItems from '../NavigationItems/NavigationItems';



const toolbar = (props) => {
  return (
    <header className={Toolbar.Toolbar}>
      {/* <div>MENU</div> */}
      <SideDrawerToggleButton clicked={props.clicked}/>
      {/* <div>LOGO</div> */}

      {/* <Logo height="80%"/> */}
      <div className={Toolbar.Logo}>
      <Logo/>
      </div>
      <nav className={Toolbar.DesktopOnly}>
      <NavigationItems />
      </nav>
    </header>
  );
};

export default toolbar;
