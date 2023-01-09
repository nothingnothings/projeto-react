import React from 'react';

// import React, { Component } from 'react'; ///QUEREMOS EVITAR QUE ESSE COMPONENT SEJA TRANSFORMADO EM UM 'CONTAINER', em um CLASS-BASED COMPONENT CONECTADO AO REDUX... --> queremos que ele PERMANEÇA COMO UM DUMB COMPONENT, POR ISSO VAMOS USAR 'Layout' para passar PROPS EXTRAÍDOS LÁ DO ___STATE GLOBAL DO REDUX/STORE DO REDUX...

import ToolbarStyle from './Toolbar.module.css';

import Logo from '../../Logo/Logo';

import UserIcon from '../../UserIcon/UserIcon';

// import { connect } from 'react-redux';

import DrawerToggle from '../../Navigation/SideDrawer/DrawerToggle/DrawerToggle';

import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar = (props) => {


  let logo =  (<div className={ToolbarStyle.Logo}>
      <Logo />
  </div>);


    if(props.token) {
      logo = (
        <div className={ToolbarStyle.Logo}>
          <UserIcon />
        </div>
      )
    }

    let p = null;


    if (props.email) {
      console.log('test');
      console.log(props.email)
      p = (
        <p className={ToolbarStyle.Paragraph}>{props.email.split('@')[0]}</p>
      )
    }



  return (
    <header className={ToolbarStyle.Toolbar}>
      <DrawerToggle clicked={props.drawerToggleClicked} />
      {/* <div>LOGO</div> */}

      {/* <Logo height="80%"/> */}
      <div className={ToolbarStyle.Logo}>
        {/* <Logo /> */}
        {logo} 
        {p}
      </div>
      <nav className={ToolbarStyle.DesktopOnly}>
        <NavigationItems logout={props.token}/>
      </nav>
    </header>
  );
};

// class Toolbar extends Component {
//   render() {

//         let logo = (      <div className={ToolbarStyle.Logo}>
//                          <Logo/>
//                           </div>)

//           if (this.props.token) {
//               logo = (
//                 <div className={ToolbarStyle.Logo}>
//                 <UserIcon />

//                  </div>
//               )
//           }

//           let p = null;

//           if (this.props.email) {
//           p= (
//           <p

//         //   style={{
//         //       color: 'white',
//         //       // display: 'inline-block',
//         //       display: 'block',
//         //       left: '10%',
//         //       position: 'fixed',
//         //       textTransform: 'capitalize'
//         // }

//         // }

//         className={ToolbarStyle.Paragraph}

//         >{this.props.email.split('@')[0]}</p>

//           )
//       }

//     return (
//       <header className={ToolbarStyle.Toolbar}>
//         <DrawerToggle clicked={this.props.drawerToggleClicked}/>
//         {/* <div>LOGO</div> */}

//         {/* <Logo height="80%"/> */}
//         {/* <div className={Toolbar.Logo}>
//         <Logo/>
//         </div> */}
//         {logo}
//         {p}
//         <nav className={ToolbarStyle.DesktopOnly}>
//         <NavigationItems />
//         </nav>
//       </header>
//     );
//   }

// };

// const mapStateToProps = (state) => {
//   return {
//     token: state.auth.token,
//     email: state.auth.email

//   }
// }

export default toolbar;
// export default connect(mapStateToProps)(Toolbar);
