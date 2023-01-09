


import React, { Component } from 'react';


// import AppStyle from '../src/App.module.css';



import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder';



import Layout from '../src/hoc/Layout/Layout';


// import TypeContext from './context/type-context';






class App extends Component {


  // static contextType = TypeContext;



  componentDidMount() {

    setTimeout(
      () => {
        this.setState({
          show: false
        })
      }, 5000
    )
  }


  state = {
    show: true
  }


  render() {



   


    return(
        <div>
       <Layout >
         {this.state.show ? <BurgerBuilder/> : null}
       </Layout>
       </div>
    )
  }

}

export default App;
