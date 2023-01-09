import React from 'react';

import SideDrawerStyle from './SideDrawer.module.css'

import Logo from '../../Logo/Logo';


import Aux from '../../../hoc/Auxiliary';


import Backdrop from '../../../components/UI/Backdrop/Backdrop'



import NavigationItems from '../NavigationItems/NavigationItems';


const sideDrawer = (props) => {

    let attachedClasses = [SideDrawerStyle.SideDrawer, SideDrawerStyle.Close ];


    if(props.open) {
        attachedClasses = [SideDrawerStyle.SideDrawer, SideDrawerStyle.Open];
    }




    return (




        props.open


        ?

        
        
        <Aux>


    

            <div className={SideDrawerStyle.BackdropNoShow} 
         >
            <Backdrop show={props.open} clicked={props.close}
          
                />
            </div>
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

    

        : 


        null

        
    )


}



export default sideDrawer;


