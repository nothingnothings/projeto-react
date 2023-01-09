import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';

import ContactData from '../ContactData/ContactData';

import { connect } from 'react-redux';






// import axiosOrder from '../../axios-orders';

class Checkout extends Component {
  // state = { //////AGORA FAZEMOS HANDLE DISSO LÁ NO STATE DE 'REDUX', para esse state desse container em particular...
  //   // ingredients: {
  //   //     salad: 1,
  //   //     bacon: 1,
  //   //     meat: 1,
  //   //     cheese: 1



  //   // },
  //   // ingredients: null,
  //   totalPrice: 0
  // };

  // UNSAFE_componentWillMount() /////////USAR ESSE MODELO QUANDO FOR FAZER 'DEPLOY' DE BURGERBUILDER (e outros apps), no production mode....
  // componentWillMount() { //////////USADO COM O APPROACH QUE AINDA NÃO USAVA 'REDUX'... --> approach dos queryParams...
    // componentDidMount() {
    // const query = new URLSearchParams(this.props.location.search);
    // for (let param of query.entries()) {
    //     console.log(param[1].split(','));

    //     const ingredients = param[1].split(',')

    //     const res = [];

    //     for (let i = 0; i < ingredients.length; i += 2) {
    //         var o = {};
    //         o[ingredients[i]] = ingredients[i + 1];
    //         res.push(o);
    //     }

    //     console.log(res);

    //     const mergedIngredients = Object.assign(...res);

    //     console.log(mergedIngredients);
    // }

    //     this.setState(
    //         {
    //             ingredients: mergedIngredients
    //         }
    //     )
    // }

  //   const query = new URLSearchParams(this.props.location.search);



  //   console.log(query);

  //   console.log(query.entries());

  //   const ingredients = {};


  //   let price = null;


  //   for (let param of query.entries()) {
  //     console.log(param);
  //     //    ingredients[param[0]]


  //     if (param[0] === 'price') {
  //         price = param[1];
  //         console.log(price);
          
  //     } else {
  //       ingredients[param[0]] = +param[1];
  //     }

     
  //   }


  //   this.setState({
  //     ingredients: ingredients,
  //     totalPrice: price
  //   });


  //   console.log(this.state.totalPrice)
    




  // }




    




  checkoutCancelledHandler = () => {
    // this.props.history.goBack();
    this.props.history.push('/');
  };

  checkoutContinueHandler = () => {
    console.log(this.props.ingr); //redux
    console.log(this.props.price); //redux
    if(!this.props.price) {
      alert('Please add some ingredients in the "Burger Builder" page!');
      return;
    }
    this.props.history.replace('/checkout/contact-data');
  };


  render() {





    // const contactDataWithIngredients = (
    //   <ContactData ingredients={this.state.ingredients} price={this.state.totalPrice}/>
    // )

    // const contactDataWithIngredients = (
    //   <ContactData ingredients={this.props.ingr} price={this.props.price}/>
    // )


    console.log(this.state);

    return (
      <div>
        <CheckoutSummary
          // ingredients={this.state.ingredients}
          ingredients={this.props.ingr}
          checkoutCancelled={this.checkoutCancelledHandler}
          checkoutContinue={this.checkoutContinueHandler}
        />
        <Route
          path={this.props.match.path + '/contact-data'}
          // component={contactData}  /// não use 'component' se O COMPONENT QUE VOCÊ QUISER RENDERIZAR __ PRECISA__ TAMBÉM DE ALGUNS PROPS/STATE específicos... (como nesse nosso caso, em que precisamos passar o nosso 'state' de 'Checkout', que contém os dados relativos a propriedade 'ingredients', dentro do state, AO COMPONENT 'ContactData'...)
          //  render={() => {      //se você quiser essa coisa que explicamos nessa linha de cima, VOCÊ DEVE USAR __ O RENDER() de uma forma gambiarrenta, para então poder renderizar esse component nessa route COM __ALGUNS PROPS __EMBUTIDOS/PASSADOS A ELE..
          //       return contactDataWithIngredients; ///OBS::: 'render' e essa sintaxe '() => {return contactDataWithIngredients}' SÃO USADOS COM O/NO APPROACH DOS QUERYPARAMS, com o approach QUE __NÃO USA 'react-redux'...
          //  }}          
           
           component={      ///USADO COM O  __rEDUX_, nesse projeto... (pois não precisamos dos queryParams, nesse caso, com o uso do REDUX....s)
            ContactData
       } 
        />
      </div>
    );
  }
}




const mapStateToProps = (state) => {
    return {
      ingr: state.ingredients
      // price: state.totalPrice
    }
}






export default connect(mapStateToProps)(Checkout);
