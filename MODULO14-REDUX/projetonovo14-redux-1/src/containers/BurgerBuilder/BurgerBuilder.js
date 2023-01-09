import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';

import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Burger from '../../components/Burger/Burger';

import Modal from '../../../src/components/UI/Modal/Modal';

import OrderSummary from '../../../src/components/Burger/OrderSummary/OrderSummary';

import Spinner from '../../../src/components/UI/Spinner/Spinner';

import axiosOrder from '../../axios-orders';

import withErrorHandler from '../../../src/hoc/withErrorHandler/withErrorHandler';
import axios from 'axios';

// const INGREDIENT_PRICES = {

// }

const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

// import TypeContext from '../../context/type-context';

class BurgerBuilder extends Component {
  // constructor(props) { ///SINTAXE MAIS ANTIGA, é a mesma coisa que escrever 'state = {}' ....
  //   super(props);
  //   this.state = {...}
  // }

  // static contextType = TypeContext;

  // state = {
  //   ingredients: {
  //     salad: 1,
  //     bacon: 1,
  //     cheese: 2,
  //     meat: 2
  //   }
  // };

  // state = {
  //   ingredients: {
  //     salad: 0,
  //     bacon: 0,
  //     cheese: 0,
  //     meat: 0
  //   },
  //   totalPrice: 4, //valor INICIAL do BUrger... sempre será '4'.
  //   purchasing: false,
  //   loading: false
  // };

  state = {
    ingredients: null,
    totalPrice: 4, //valor INICIAL do BUrger... sempre será '4'.
    purchasing: false,
    purchasable: false,
    loading: false,
    error: false,
  };

  componentDidMount() {
    console.log(this.props);

    axios
      .get(
        'https://burgerbuilder201051-default-rtdb.firebaseio.com/ingredients.json'
      )
      .then((response) => {
        console.log(response);
        console.log('test');

        this.setState({
          ingredients: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          error: true,
        });
      });
  }


    updatePurchaseState (ingredients) {
      console.log(ingredients);
      const sum = Object.keys (ingredients)
      .map (igKey => {
        return ingredients[igKey];
      })
      .reduce ( (sum, el) => {
        return sum + el;
      }, 0);
      this.setState(
        {purchasable: sum > 0} 
      );

    }




  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchaseState( updatedIngredients);
  };

  purchaseHandler = () => {

    if(this.state.ingredients.bacon === 0 && this.state.ingredients.cheese === 0 && this.state.ingredients.meat === 0 && this.state.ingredients.salad === 0) {
      alert('Please add some ingredients before proceeding!');
      return;
    }




    this.setState({
      purchasing: true,
    });
  };

  purchaseContinueHandler = () => {
    ///////OBS::: colocar '.json' DO LADO DO PATH/NODE a que você está querendo enviar o HTTP REQUEST  ___ É ALGO QUE __ SÓ É OBRIGATÓRIO PARA SERVIDORES __fIREBASE; EM OUTROS TIPOS DE SERVIDORES, ESSE '.json' AO FINAL __NÃO É NECESSÁRIO___... ---> pq isso? PQ ESSE É O ___eNDPOINT QUE ___ O FIREBASE__ PRECISA TARGETTAR PARA QUE A FEATURE DO FIREBASE DE 'AUTOMATIC CREATION' DOS NODES/PATHS CONSIGA FUNCIONAR CORRETAMENTE.

    //   this.setState({
    //     loading: true
    //   })

    // const orderData = {

    //     ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //     customer: {
    //       name: 'Max schwarzmuller',
    //       address: {
    //         street: 'Teststreet 1',
    //         zipCode: '41351',
    //         country: 'Germany'
    //       },
    //       email: 'test@test.com'
    //     },

    //     deliveryMethod: 'fastest'

    // }

    // axiosOrder.post('/orders.json', orderData).then(

    //   (response) => {
    //     this.setState({
    //       loading: false,
    //       purchasing: false
    //     });
    //   }
    // )
    // .catch(error => {
    //   this.setState(
    //     {
    //       loading: false,
    //       purchasing: false
    //     }
    //   )
    // }
    // )

    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          '=' +
          encodeURIComponent(this.state.ingredients[i])
      );
    }

    queryParams.push('price=' + this.state.totalPrice);

    const queryString = queryParams.join('&');

    console.log(queryParams);

    this.props.history.push({
      pathname: '/checkout',
      search: '?' + queryString,
    });
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    // if(oldCount <= 0) { ////////CÓDIGO DEPRECADO, É UMA VERSÃO MAIS RUDIMENTAR DA FEATURE DE 'IMPEDIR QUE O USUÁRIO CRASHE O CÓDIGO POR MEIO DA REMOÇÃO DE UM NÚMERO DE INGREDIENTS QUE JÁ NÃO EXISTE NO HAMBURGUER' (reduzir o número de ingredients de '0' para '-1') --> para isso, o professor USOU o prop de 'disabled', e a const de 'disabledInfo', DEFINIDA EM BURGERBUILDER...
    //   return (
    //     <p>{alert("You can't remove any more of that ingredient")}</p>
    //   );
    // }

    this.setState({
      totalPrice: newPrice,
      ingredients: updatedIngredients,
    });
    this.updatePurchaseState( updatedIngredients);
  };

  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false,
    });
  };

  render() {
    // let ingredientCount = null;

    // if (this.state.ingredients) {
    //   ingredientCount = Object.values(this.state.ingredients);

    //   let ingredientCountSum = ingredientCount.reduce(
    //     (oldNumber, newNumber) => {
    //       return oldNumber + newNumber;
    //     }
    // )

    // if(!ingredientCountSum) {
    //   ingredientCountSum = true;
    //   return ingredientCountSum;
    // } else {
    //   ingredientCountSum = false;
    //   return ingredientCountSum;
    // }

    // }

    // let modalContent = (<OrderSummary ingredients={this.state.ingredients} price={this.state.totalPrice} clicked={this.purchaseCancelHandler} success={this.purchaseContinueHandler}></OrderSummary>)

    let modalContent = null;

    let burger = this.state.error ? (
      <p>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );

    const disabledInfo = {
      ...this.state.ingredients,
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0; //parte da direita: CHECK BEM IMPORTANTE. RETORNA ou o valor 'true', ou 'false' para AQUELA DETERMINADA KEY (disabledInfo[key]) definida na direita... (que será 'cheese: true', 'meat: false', etc, dependendo desse check da direita...)
    }



    


    if (this.state.ingredients) {

  
      //1
      burger = (
        <Aux>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            disabled={disabledInfo} //'disabledInfo' será uma constante que terá aquele objeto com a 'CÓPIA DO STATE DE INGREDIENTS', mas aquela cópia tem uma alteração no INGREDIENT que será/não será removido, que estará tipo assim: 'cheese: false', ou 'bacon: true', etc.....
            price={this.state.totalPrice}
            ingredientAdded={this.addIngredientHandler}
            ingredientRemoved={this.removeIngredientHandler}
            purchasable={!this.state.purchasable}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );

      modalContent = (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          clicked={this.purchaseCancelHandler}
          success={this.purchaseContinueHandler}
        ></OrderSummary>
      ); //2
    }

    if (this.state.loading) {
      //3
      modalContent = <Spinner />;
    }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {modalContent}
        </Modal>
        {burger}
        {/* <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
        disabled={disabledInfo} //'disabledInfo' será uma constante que terá aquele objeto com a 'CÓPIA DO STATE DE INGREDIENTS', mas aquela cópia tem uma alteração no INGREDIENT que será/não será removido, que estará tipo assim: 'cheese: false', ou 'bacon: true', etc.....
        price={this.state.totalPrice}
        ingredientAdded={this.addIngredientHandler} 
        ingredientRemoved={this.removeIngredientHandler}
         disableButton={ingredientCountSum}
         ordered={this.purchaseHandler}
      
         /> */}
      </Aux>
    );
  }
}

export default withErrorHandler(BurgerBuilder, axiosOrder);
