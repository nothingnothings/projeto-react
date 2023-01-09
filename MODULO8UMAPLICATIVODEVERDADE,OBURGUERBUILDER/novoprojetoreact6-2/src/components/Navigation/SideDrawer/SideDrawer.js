import React from 'react';

import SideDrawerStyle from './SideDrawer.module.css'

import Logo from '../../Logo/Logo';


import Aux from '../../../hoc/Auxiliary/Auxiliary';


import Backdrop from '../../../components/UI/Backdrop/Backdrop'



import NavigationItems from '../NavigationItems/NavigationItems';


const sideDrawer = (props) => {

    let attachedClasses = [SideDrawerStyle.SideDrawer, SideDrawerStyle.Close ];


    if(props.open) {
        attachedClasses = [SideDrawerStyle.SideDrawer, SideDrawerStyle.Open];
    }




    return (

        
        
        <Aux>

         
            <Backdrop show={props.open} clicked={props.closed}
                 />
            
        <div className={attachedClasses.join(' ')}>
            {/* <Logo height="11%"/> */}
            <div className={SideDrawerStyle.Logo}>
            <Logo />
            </div>
            <nav>
            <NavigationItems />
            </nav>
            



        </div>

            

        </Aux>

    

        
    )


}



export default sideDrawer;


