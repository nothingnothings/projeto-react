import React from 'react';

// import React, { Component } from 'react';

import NavigationItem from '../NavigationItems/NavigationItem/NavigationItem';

import NavigationItemsStyle from './NavigationItems.module.css';

// import { connect } from 'react-redux';

const navigationItems = (props) => {
  // let authenticate = (
  //   <NavigationItem link={'/auth'}>Authenticate</NavigationItem>
  // )

  let authenticate = (
    <NavigationItem link={'/auth'} closed={props.closed}>
      Authenticate
    </NavigationItem>
  );

  if (props.logout) {
    authenticate = (
      <NavigationItem
        link={'/logout'}
        closed={props.closed}
        style={{
          backgroundColor: '#8F5C2C',
          borderBottom: '4px solid #40A4C8',
          color: 'white',
        }}
      >
        Log out
      </NavigationItem>
    );
  }

  return (
    <ul className={NavigationItemsStyle.NavigationItems}>
      <NavigationItem closed={props.closed} link={'/'}>
        Burger Builder
      </NavigationItem>

      {props.logout ? (
        <NavigationItem link={'/orders'} closed={props.closed}>
          Orders
        </NavigationItem>
      ) : null}
      {/* <NavigationItem link={'/auth'}>Authenticate</NavigationItem> */}

      {authenticate}
    </ul>
  );
};

// class NavigationItems extends Component { ///NÃO VAMOS QUERER USAR ESTE FORMATO DO CÓDIGO... --> ele funciona, mas ACABA TRANSFORMANDO 'NavigationItems' em um __CONTAINER__ CONECTADO AO REDUX, e nós NÃO QUEREMOS ISSO; QUEREMOS QUE ELE CONTINUE COMO UM 'DUMB' COMPONENT, desvinculado do store do redux...
//para ver o código 'proper' disso aqui, deve-se ir até o component 'Layout', que é o CONTAINER QUE SEGURA os COMPONENTS QUE SEGURAM ESSE 'NavItems', no final das contas...
//     render() {

//   let authenticate = (
//     <NavigationItem link={'/auth'}>Authenticate</NavigationItem>
//   )

//   if (this.props.token) {
//     authenticate = <NavigationItem link={'/logout'}>Logout</NavigationItem>
//   }

// return (<ul className={NavigationItemsStyle.NavigationItems}>

//         <NavigationItem closed={this.props.closed} link={'/'}  >Burger Builder</NavigationItem>

//         <NavigationItem link={'/orders'} closed={this.props.closed} >Orders</NavigationItem>
//         {/* <NavigationItem link={'/auth'}>Authenticate</NavigationItem> */}
//         {authenticate}

// </ul>
// )
//     }
// };

// const mapStateToProps = (state) => {
//     return {
//      token: state.auth.token
//     }
// }

// export default connect(mapStateToProps)(NavigationItems);

export default navigationItems;
