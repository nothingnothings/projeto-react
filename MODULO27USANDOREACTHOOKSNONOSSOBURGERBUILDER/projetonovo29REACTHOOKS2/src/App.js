// import React, { Component, useEffect } from 'react';


import React, { useEffect } from 'react';

import { Suspense } from 'react'; //// USADO COM 'React.lazy()'.... 

import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder';

import { BrowserRouter } from 'react-router-dom';

import { Redirect } from 'react-router-dom';

import Layout from '../src/hoc/Layout/Layout';

import { Route } from 'react-router';

import { Switch } from 'react-router-dom';

import Logout from '../src/containers/Auth/Logout/Logout';

import { connect } from 'react-redux';

import * as actionsTypes from '../src/store/actions/index';
import Spinner from './components/UI/Spinner/Spinner';
 
// import asyncComponent from '../src/hoc/AsyncComponent/AsyncComponent';  ////SUBSTITUÍDO PELO LAZY LOADING DO 'React.lazy()'....



// const AsyncOrders = asyncComponent(() => {
//   return import('../src/containers/Orders/Orders');
// });

// const AsyncAuth = asyncComponent(() => {
//   return import('../src/containers/Auth/Auth');
// });

// const AsyncCheckout = asyncComponent(() => {
//   return import('../src/containers/Checkout/Checkout');
// });

// class App extends Component {
//   componentDidMount() {
//     this.props.onTryAutoSignIn();
//   }

//   render() {
//     let routes = (
//       <Switch>
//         <Route path="/auth" component={AsyncAuth} />
//         <Route path="/" exact component={BurgerBuilder} />
//         <Redirect to="/" />
//       </Switch>
//     );

//     if (this.props.token) {
//       routes = (
//         <Switch>
//           <Route path="/checkout" component={AsyncCheckout} />
//           <Route path="/orders" component={AsyncOrders} />

//           <Route path="/auth" component={AsyncAuth} />
//           <Route path="/logout" component={Logout} />
//           <Route path="/" exact component={BurgerBuilder} />
//           <Redirect to="/" />
//         </Switch>
//       );
//     }

//     return (
//       <BrowserRouter>
//         <div>
//           <Layout>{routes}</Layout>
//         </div>
//       </BrowserRouter>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     token: state.auth.token !== null,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTryAutoSignIn: (token) => dispatch(actionsTypes.authCheckState(token)),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);




// const AsyncOrders = asyncComponent(() => { /////SUBSTITUÍDO PELO LAZY LOADING DO 'React.lazy()'...
//   return import('../src/containers/Orders/Orders');
// });

// const AsyncAuth = asyncComponent(() => {
//   return import('../src/containers/Auth/Auth');
// });

// const AsyncCheckout = asyncComponent(() => {
//   return import('../src/containers/Checkout/Checkout');
// });






const Orders = React.lazy(() => { 
  return import('../src/containers/Orders/Orders');
});

const Auth = React.lazy(() => {
  return import('../src/containers/Auth/Auth');
});

const Checkout = React.lazy(() => {
  return import('../src/containers/Checkout/Checkout');
});














const App = (props) => {
  // componentDidMount() {
  //   this.props.onTryAutoSignIn();
  // }


    useEffect(() => {
            props.onTryAutoSignIn();
        


    }, []);


  // let routes = (
  //   <Switch>
  //     <Route path="/auth" component={AsyncAuth} />
  //     <Route path="/" exact component={BurgerBuilder} />
  //     <Redirect to="/" />
  //   </Switch>
  // );


  let routes = (
    <Switch>
      <Route path="/auth" render={() => {return <Auth />}} />
      <Route path="/" exact component={BurgerBuilder} />
      {/* <Redirect to="/" /> */}
    </Switch>
  );








  // if (props.token) {
  //   routes = (
  //     <Switch>
  //       <Route path="/checkout" component={AsyncCheckout} />
  //       <Route path="/orders" component={AsyncOrders} />
  //       <Route path="/auth" component={AsyncAuth} />
  //       <Route path="/logout" component={Logout} />
  //       <Route path="/" exact component={BurgerBuilder} />
  //       <Redirect to="/" />
  //     </Switch>
  //   );
  // }





  if (props.token) {                      ////obs: 'props' no slot de parâmetros é ALGO NECESSÁRIO, e aquele spread operator para distribuir os props no COMPONENT assíncrono __TAMBÉM É NECESSÁRIO___....
    routes = (                              //é necessário para fazer O FORWARD ADEQUADO DE NOSSOS 'ROUTING PROPS' A ESSES COMPONENTS...
      <Switch>
        <Route path="/checkout" render={(props) => {return <Checkout {...props} />}} />
        <Route path="/orders" render={(props) => {return <Orders  {...props}/>}} />
        <Route path="/auth" render={(props) => {return <Auth  {...props}/>}} />
        <Route path="/logout" component={Logout} />
        <Route path="/" exact component={BurgerBuilder} />
        <Redirect to="/" />
      </Switch>
    );
  }

















  // return (
  //   <BrowserRouter>
  //     <div>
  //       <Layout>{routes}</Layout>
  //     </div>
  //   </BrowserRouter>
  // );


  // return (
  //   <BrowserRouter>
  //     <div>
  //       <Layout><Suspense fallback={<p>Loading...</p>}>{routes}</Suspense></Layout>
  //     </div>
  //   </BrowserRouter>
  // );




  return (
    <BrowserRouter>
      <div>
        <Layout><Suspense fallback={Spinner}>{routes}</Suspense></Layout>
      </div>
    </BrowserRouter>
  );





};

const mapStateToProps = (state) => {
  return {
    token: state.auth.token !== null,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignIn: (token) => dispatch(actionsTypes.authCheckState(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
