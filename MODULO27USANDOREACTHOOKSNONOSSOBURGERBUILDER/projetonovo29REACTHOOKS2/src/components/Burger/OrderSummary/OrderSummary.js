// import React, { Component } from 'react';

// import { render } from '@testing-library/react';
// import React, { Component } from 'react';


import React from 'react';

import { connect } from 'react-redux';

import Aux from '../../../hoc/Auxiliary/Auxiliary';

import Button from '../../UI/Button/Button';

// import { Link } from 'react-router-dom';

// class OrderSummary extends Component  {

//     // const ingredientSummary = Object.keys(this.this.props.ingredients) ////////VERSÃO ALTERNATIVA DE NOSSO CÓDIGO MAIS ABAIXO. FOI A QUE O PROFESSOR UTILIZOU.
//     // .map(

//     //     (igKey) => {
//     //         return <li><span style={textTransform: 'capitalize'}>{igKey}</span>: {this.this.props.ingredients[igKey]}</li>
//     //     }
//     // )

//     // componentWillUpdate() { //ninguém usa isso hoje em dia

//     // }

//     componentDidUpdate() {
//         console.log('[Order Summary] ComponentDidUpdate');
//     }

//     capitalizeFirstLetter = string =>  {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }

//     ///UMA ALTERNATIVA A ESSA FUNÇÃO E O WRAP do 'ingredientSummary' SERIA
//     // DEFINIR UMA TAG WRAPPANDO NOSSO NEGÓCIO, UMA TAG DE '<span>{ingredientSummary}</span>' ---> AÍ, NESSA TAG 'SPAN', NÓS DEFINIRÍAMOS UM INLINE STYLE DE 'style={textTransform: 'capitalize'}'  (SIM, ISSO É VÁLIDO E FUNCIONA, VAI FAZER COM QUE A PRIMEIRA LETRA DESSAS STRINGS FIQUE MAIÚSCULA)...
//     //
//     //
//     //
//     //

//     // ingredientSummary.forEach([key, value]) => {

//     // }

//     render() {

//         const ingredientSummary = Object.entries(this.this.props.ingredients);
//     console.log(ingredientSummary);

//         return (
//             <Aux>
//             <h3>Your Order</h3>
//             <p>A delicious burger with the following ingredients:</p>
//             <ul>
//                 <li>{this.capitalizeFirstLetter(ingredientSummary[0][0])}: {this.this.props.ingredients.salad}</li>
//                 <li>{this.capitalizeFirstLetter(ingredientSummary[1][0])}: {this.this.props.ingredients.bacon}</li>
//                 <li>{this.capitalizeFirstLetter(ingredientSummary[2][0])}: {this.this.props.ingredients.cheese}</li>
//                 <li>{this.capitalizeFirstLetter(ingredientSummary[3][0])}: {this.this.props.ingredients.meat}</li>
//             </ul>
//             <h2>Total Price: $ {this.props.price.toFixed(2)}</h2>
//             {/* <button onClick={this.props.clicked}>CANCEL</button>
//             <button>CONTINUE</button> */}
//             <Button clicked={this.props.success} btnType="Success">
//             CONTINUE
//             </Button>
//             <Button clicked={this.props.clicked} btnType="Danger">
//             CANCEL
//             </Button>

//             </Aux>

// )

//     }

// }

// const orderSummary = (props) =>  {

//     // const ingredientSummary = Object.keys(this.this.props.ingredients) ////////VERSÃO ALTERNATIVA DE NOSSO CÓDIGO MAIS ABAIXO. FOI A QUE O PROFESSOR UTILIZOU.
//     // .map(

//     //     (igKey) => {
//     //         return <li><span style={textTransform: 'capitalize'}>{igKey}</span>: {this.this.props.ingredients[igKey]}</li>
//     //     }
//     // )

//     // componentWillUpdate() { //ninguém usa isso hoje em dia

//     // }

//     // componentDidUpdate() {
//     //     console.log('[Order Summary] ComponentDidUpdate');
//     // }

//     const capitalizeFirstLetter = string =>  {
//         return string.charAt(0).toUpperCase() + string.slice(1);
//     }

//     ///UMA ALTERNATIVA A ESSA FUNÇÃO E O WRAP do 'ingredientSummary' SERIA
//     // DEFINIR UMA TAG WRAPPANDO NOSSO NEGÓCIO, UMA TAG DE '<span>{ingredientSummary}</span>' ---> AÍ, NESSA TAG 'SPAN', NÓS DEFINIRÍAMOS UM INLINE STYLE DE 'style={textTransform: 'capitalize'}'  (SIM, ISSO É VÁLIDO E FUNCIONA, VAI FAZER COM QUE A PRIMEIRA LETRA DESSAS STRINGS FIQUE MAIÚSCULA)...
//     //
//     //
//     //
//     //

//     // ingredientSummary.forEach([key, value]) => {

//     // }

//         const ingredientSummary = Object.entries(this.props.ingredients);

//     console.log(ingredientSummary);
//     console.log(ingredientSummary.flat(1))

//         return (
//             <Aux>
//             <h3>Your Order</h3>
//             <p>A delicious burger with the following ingredients:</p>
//             <ul>

//                 <li>{capitalizeFirstLetter(ingredientSummary[0][0])}: {this.props.ingredients.bacon}</li>
//                 <li>{capitalizeFirstLetter(ingredientSummary[1][0])}: {this.props.ingredients.cheese}</li>
//                 <li>{capitalizeFirstLetter(ingredientSummary[2][0])}: {this.props.ingredients.meat}</li>
//                 <li>{capitalizeFirstLetter(ingredientSummary[3][0])}: {this.props.ingredients.salad}</li>
//             </ul>
//             <h2>Total Price: $ {props.price.toFixed(2)}</h2>
//             {/* <button onClick={this.props.clicked}>CANCEL</button>
//             <button>CONTINUE</button> */}
//             {/* <Link to={ /////código alternativo QUE NÃO FUNCIONA, ESCRITO POR MIM.... (em vez de escrever 'links' aqui, component 'link', o que eu fiz foi escrever UM MÉTODO que executa um '.push()' e navega o usuário até '/checkout?queryParamEscroto', um método QUE ESCREVI LÁ EM 'BurgerBuilder', que é o local que deve segurar esses métodos, pois é um container...)

//             {
//                 pathname: '/checkout',
//                 search: `?burger=${ingredientSummary.flat(1)}`

//             }}> */}
//             {/* <Button clicked={props.success} btnType="Success"> */}
//             <Button btnType="Success" clicked={props.success}>
//             CONTINUE
//             </Button>
//             {/* </Link> */}
//             <Button clicked={props.clicked} btnType="Danger">
//             CANCEL
//             </Button>

//             </Aux>

// )

// }

// class orderSummary extends Component {

//     render() {

//         const capitalizeFirstLetter = string =>  {
//             return string.charAt(0).toUpperCase() + string.slice(1);
//         }

//         const ingredientSummary = Object.entries(this.props.ingr);

//         return (
//             <Aux>
//             <h3>Your Order</h3>
//             <p>A delicious burger with the following ingredients:</p>
//             <ul>

//                 <li>{capitalizeFirstLetter(ingredientSummary[0][0])}: {this.props.ingr.bacon}</li>
//                 <li>{capitalizeFirstLetter(ingredientSummary[1][0])}: {this.props.ingr.cheese}</li>
//                 <li>{capitalizeFirstLetter(ingredientSummary[2][0])}: {this.props.ingr.meat}</li>
//                 <li>{capitalizeFirstLetter(ingredientSummary[3][0])}: {this.props.ingr.salad}</li>
//             </ul>
//             <h2>Total Price: $ {this.props.price.toFixed(2)}</h2>
//             {/* <button onClick={this.props.clicked}>CANCEL</button>
//             <button>CONTINUE</button> */}
//             {/* <Link to={ /////código alternativo QUE NÃO FUNCIONA, ESCRITO POR MIM.... (em vez de escrever 'links' aqui, component 'link', o que eu fiz foi escrever UM MÉTODO que executa um '.push()' e navega o usuário até '/checkout?queryParamEscroto', um método QUE ESCREVI LÁ EM 'BurgerBuilder', que é o local que deve segurar esses métodos, pois é um container...)

//             {
//                 pathname: '/checkout',
//                 search: `?burger=${ingredientSummary.flat(1)}`

//             }}> */}
//             {/* <Button clicked={props.success} btnType="Success"> */}
//             <Button btnType="Success" clicked={this.props.success}>
//             CONTINUE
//             </Button>
//             {/* </Link> */}
//             <Button clicked={this.props.clicked} btnType="Danger">
//             CANCEL
//             </Button>

//             </Aux>

// )
//     }

// }

const orderSummary = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const ingredientSummary = Object.entries(props.ingr);

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>
        <li>
          {capitalizeFirstLetter(ingredientSummary[0][0])}: {props.ingr.bacon}
        </li>
        <li>
          {capitalizeFirstLetter(ingredientSummary[1][0])}: {props.ingr.cheese}
        </li>
        <li>
          {capitalizeFirstLetter(ingredientSummary[2][0])}: {props.ingr.meat}
        </li>
        <li>
          {capitalizeFirstLetter(ingredientSummary[3][0])}: {props.ingr.salad}
        </li>
      </ul>
      <h2>Total Price: $ {props.price.toFixed(2)}</h2>
      <Button btnType="Success" clicked={props.success}>
        CONTINUE
      </Button>
      <Button clicked={props.clicked} btnType="Danger">
        CANCEL
      </Button>
    </Aux>
  );
};

const mapStateToProps = (state) => {
  return {
    ingr: state.burger.burger.ingredients,
    price: state.burger.burger.totalPrice,
  };
};

export default connect(mapStateToProps)(orderSummary);
