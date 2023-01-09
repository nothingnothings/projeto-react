


import React, { Component } from 'react';


// import AppStyle from '../src/App.module.css';



import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder';



import Layout from '../src/components/Layout/Layout';


// import TypeContext from './context/type-context';






class App extends Component {


  // static contextType = TypeContext;


  render() {



   


    return(
        <div>
       <Layout >
         <BurgerBuilder/>
       </Layout>
       </div>
    )
  }

}

export default App;
