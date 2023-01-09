import React, { Component } from 'react';

// import AppStyle from '../src/App.module.css';

import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder';

// import {BrowserRouter} from 'react-router-dom'; ///não funciona com objeto 'connect'... ---> deve-se utilizar o objeto 'withRouter' envolvendo o 'connect', que funciona melhor...

import { BrowserRouter } from 'react-router-dom';

import { Redirect } from 'react-router-dom';
// import { withRouter } from 'react-router-dom';

import Layout from '../src/hoc/Layout/Layout';

import { Route } from 'react-router';

import { Switch } from 'react-router-dom';

import Orders from './containers/Orders/Orders';

import Auth from './containers/Auth/Auth';

import Logout from '../src/containers/Auth/Logout/Logout';

import Checkout from './containers/Checkout/Checkout';

import { connect } from 'react-redux';

import * as actionsTypes from '../src/store/actions/index';

// import TypeContext from './context/type-context';

class App extends Component {
  // static contextType = TypeContext;

  componentDidMount() {
    // setTimeout(
    //   () => {
    //     this.setState({
    //       show: false
    //     })
    //   }, 5000
    // )
    // const token = localStorage.getItem('userId');
    // this.props.onTryAutoSignIn(token);
    this.props.onTryAutoSignIn();
  }

  // state = {
  //   show: true
  // }

  render() {


      let routes = (
        
        <Switch>
        <Route path="/auth" component={Auth} />
          <Route path="/" exact component={BurgerBuilder} />
          <Redirect to="/" />
        </Switch>
      )





      if (this.props.token) {
        routes = (
          <Switch>
          <Route path="/checkout" component={Checkout} />
          <Route path="/orders" component={Orders} />
    
          <Route path="/logout" component={Logout} />
          <Route path="/" exact component={BurgerBuilder}/>
          <Redirect to="/" />
          </Switch>
        )
      }






    return (
      // <BrowserRouter> ///isso NÃO FUNCIONA com o objeto 'connect' do redux... --> você precisa usar o approach do 'withRouter' envolvendo o 'connect'...
      <BrowserRouter>
        <div>
          <Layout>
            {/* {this.state.show ? <BurgerBuilder/> : null} */}
            {/* <BurgerBuilder />
         <Checkout /> */}
            {/* <Switch>
              <Route path="/auth" component={Auth} />
              {/* <Route path="/logout" component={Logout} /> */}
              {/* {routes}
          */} 
              {/* <Route
              path="/"
              component={BurgerBuilder} //obs: 'exact' nessa route NÃO É NECESSÁRIO, pois já temos o SWITCH STATEMENT/OBJECT ali em cima; se colocássemos o 'exact' + o 'switch', isso seria redundante...
            />
            </Switch> */}
            {routes}
          </Layout>
        </div>
      </BrowserRouter>
      //  {/* </BrowserRouter> */}
    );
  }
}

// export default App;

const mapStateToProps = (state) => {
  return {
    token: state.auth.token !== null
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignIn: (token) => dispatch(actionsTypes.authCheckState(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

// export default withRouter(connect(null, mapDispatchToProps)(App)); /////////FIX __PARA __ PROBLEMAS ADVINDOS DO CONFLITO ENTRE O WRAP DE 'CONNECT' e a existência de ROUTINg no seu projeto... (no seu container, na verdade... ----> esse problema ocorre quando você tem o wrap de seu container por 'connect', pq o CONNECT ___IMPEDE__ QUE OS 'ROUTING RELATED PROPS' vindos do ROUTING consigam chegar ao seu container...) --> só que, por alguma razão, isso não funciona neste projeto (usei o approach do wrap de 'Browser Router' com o component '<BrowserRouter></BrowserRouter>'...)
