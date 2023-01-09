import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary';


import BuildControls from '../../components/Burger/BuildControls/BuildControls';


import Burger from '../../components/Burger/Burger';



import Modal from '../../../src/components/UI/Modal/Modal';


import OrderSummary from '../../../src/components/Burger/OrderSummary/OrderSummary';




// const INGREDIENT_PRICES = {

// }



const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3
}






// import TypeContext from '../../context/type-context';






export default class BurgerBuilder extends Component {

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


  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0
    }, 
    totalPrice: 4, //valor INICIAL do BUrger... sempre será '4'.
    purchasing: false
  };








 
  addIngredientHandler = (type) => {  
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState(
      {
        totalPrice: newPrice, 
        ingredients: updatedIngredients
      }
    )

    




  }







purchaseHandler = () => {
  this.setState(
    {
      purchasing: true
    }
  )

}




purchaseContinueHandler = () => {
    alert('You Continue!');
    this.setState(
      {
        purchasing: false
      }
    )
}







  removeIngredientHandler = (type) => {

    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;

    // if(oldCount <= 0) { ////////CÓDIGO DEPRECADO, É UMA VERSÃO MAIS RUDIMENTAR DA FEATURE DE 'IMPEDIR QUE O USUÁRIO CRASHE O CÓDIGO POR MEIO DA REMOÇÃO DE UM NÚMERO DE INGREDIENTS QUE JÁ NÃO EXISTE NO HAMBURGUER' (reduzir o número de ingredients de '0' para '-1') --> para isso, o professor USOU o prop de 'disabled', e a const de 'disabledInfo', DEFINIDA EM BURGERBUILDER...
    //   return (
    //     <p>{alert("You can't remove any more of that ingredient")}</p>
    //   );
    // } 

      this.setState(
        {
          totalPrice: newPrice, 
          ingredients: updatedIngredients
        }
      )
    
  

    

  }



  purchaseCancelHandler = () => {
    this.setState(
      {
        purchasing: false
      }
    )


  }








  render() {





    const ingredientCount = Object.values(this.state.ingredients);


    let ingredientCountSum = ingredientCount.reduce(
        (oldNumber, newNumber) => {
          return oldNumber + newNumber;
        }
    )
  

    if(!ingredientCountSum) {
      ingredientCountSum = true;
    } else {
      ingredientCountSum = false;
    }

    









    const disabledInfo = {
      ...this.state.ingredients
    };

    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0; //parte da direita: CHECK BEM IMPORTANTE. RETORNA ou o valor 'true', ou 'false' para AQUELA DETERMINADA KEY (disabledInfo[key]) definida na direita... (que será 'cheese: true', 'meat: false', etc, dependendo desse check da direita...)
    }





    return (
      <Aux>
        <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
        <OrderSummary ingredients={this.state.ingredients} price={this.state.totalPrice} clicked={this.purchaseCancelHandler} success={this.purchaseContinueHandler}></OrderSummary>
        </Modal>
        {/* <div>Burger</div> */}
        <Burger ingredients={this.state.ingredients}/>
        {/* <div>Build Controls</div> */}
        <BuildControls 
        disabled={disabledInfo} //'disabledInfo' será uma constante que terá aquele objeto com a 'CÓPIA DO STATE DE INGREDIENTS', mas aquela cópia tem uma alteração no INGREDIENT que será/não será removido, que estará tipo assim: 'cheese: false', ou 'bacon: true', etc.....
        price={this.state.totalPrice}
        ingredientAdded={this.addIngredientHandler} 
        ingredientRemoved={this.removeIngredientHandler}
         disableButton={ingredientCountSum}
         ordered={this.purchaseHandler}
      
         />
        
      </Aux>
    );
  }
}



