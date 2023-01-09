import React from 'react';

// import React, { Component } from 'react';

import SideDrawerStyle from './SideDrawer.module.css';

import Logo from '../../Logo/Logo';

import Aux from '../../../hoc/Auxiliary/Auxiliary';

import Backdrop from '../../../components/UI/Backdrop/Backdrop';

import NavigationItems from '../NavigationItems/NavigationItems';

// import * as actionTypes from '../../../store/actions/burgerBuild';

// import { connect } from 'react-redux';









// const sideDrawer = (props) => {

//     let attachedClasses = [SideDrawerStyle.SideDrawer, SideDrawerStyle.Close ];

//     if(props.open) {
//         attachedClasses = [SideDrawerStyle.SideDrawer, SideDrawerStyle.Open];
//     }

//     return (

//         <Aux>

//             <Backdrop show={props.open} clicked={props.closed}
//                  />

//         <div className={attachedClasses.join(' ')}>
//             {/* <Logo height="11%"/> */}
//             <div className={SideDrawerStyle.Logo}>
//             <Logo />
//             </div>
//             <nav>
//             <NavigationItems />
//             </nav>

//         </div>

//         </Aux>

//     )

// }

const sideDrawer = (props) => {

  



    let attachedClasses = [SideDrawerStyle.SideDrawer, SideDrawerStyle.Close];

    if (props.open) {
      attachedClasses = [SideDrawerStyle.SideDrawer, SideDrawerStyle.Open];
    }


    let sideDrawer = (
        <Aux>
        <Backdrop show={props.open} clicked={props.closed} />

        <div className={attachedClasses.join(' ')}>
          {/* <Logo height="11%"/> */}
          <div className={SideDrawerStyle.Logo}>
            <Logo />
          </div>
          <nav>
            <NavigationItems closed={props.closed} logout={props.token}/>
          </nav>
        </div>
      </Aux>
    )

    if (props.drawerClose) {
        sideDrawer = null;
    }



        return sideDrawer

    // return (
    //   <Aux>
    //     <Backdrop show={this.props.open} clicked={this.props.closed} />

    //     <div className={attachedClasses.join(' ')}>
    //       {/* <Logo height="11%"/> */}
    //       <div className={SideDrawerStyle.Logo}>
    //         <Logo />
    //       </div>
    //       <nav>
    //         <NavigationItems onClick={this.props.onNavigationItemsClick}/>
    //       </nav>
    //     </div>
    //   </Aux>
    // );
  
}

// const mapStateToProps = (state) => {
//     return {
//         drawerClose: state.burger.sideDrawerClose
//     }
// };

// export default sideDrawer;



// const mapDispatchToProps = (dispatch) => {
//     return {
//         onNavigationItemsClick: () => {
//             dispatch(actionTypes.sideDrawerClose())
//         }
//     }
// }



// export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer);



export default sideDrawer;