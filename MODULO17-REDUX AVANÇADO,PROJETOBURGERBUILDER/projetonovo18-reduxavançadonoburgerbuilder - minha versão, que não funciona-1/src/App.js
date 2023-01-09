


import React, { Component } from 'react';


// import AppStyle from '../src/App.module.css';



import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder';


import {BrowserRouter} from 'react-router-dom';


import Layout from '../src/hoc/Layout/Layout';



import { Route } from 'react-router';


import { Switch } from 'react-router-dom';

import Orders from './containers/Orders/Orders';





import Checkout from './containers/Checkout/Checkout'

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
  }


  // state = {
  //   show: true
  // }


  render() {



   


    return(
        <BrowserRouter>
        <div>
       <Layout >
         {/* {this.state.show ? <BurgerBuilder/> : null} */}
         {/* <BurgerBuilder />
         <Checkout /> */}
         <Switch>
         <Route path="/checkout" component={Checkout} />
         <Route path="/orders" component={Orders} />
        <Route path="/" component={BurgerBuilder} //obs: 'exact' nessa route NÃO É NECESSÁRIO, pois já temos o SWITCH STATEMENT/OBJECT ali em cima; se colocássemos o 'exact' + o 'switch', isso seria redundante...
        />
      
        </Switch>
       </Layout>
       </div>
       </BrowserRouter>
    )
  }

}

export default App;
