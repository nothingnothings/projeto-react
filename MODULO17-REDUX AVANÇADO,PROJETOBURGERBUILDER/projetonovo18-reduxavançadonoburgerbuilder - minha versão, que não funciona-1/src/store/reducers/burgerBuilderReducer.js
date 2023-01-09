/* eslint-disable no-unreachable */
import * as actionTypes from '../actions/burgerActionTypes';
import { updateObject } from '../utility';

// const initialState = {
//   ingredients: {
//     bacon: 0,
//     salad: 0,
//     cheese: 0,
//     meat: 0,
//   },
//   totalPrice: 4,
// };



const initialState = {
  burger: {
    
    ingredients: {
    bacon: 0,
    salad: 0,
    cheese: 0,
    meat: 0,
  },

  // ingredients: null,






  totalPrice: 4,
  
}
};


//// 
// {
//   ingredients: {
//     bacon: XPathExpression,
//     salad: XPathExpression,
//     cheese: xxx,
//     meat: xxx
//   },
//   totalPrice: 4
// }






const INGREDIENT_PRICES = {
  salad: 0.5,
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
};

// const ingredient_add = (state, action) => {
//   console.log(state.burger);
//   const updatedPrice = state.burger.totalPrice + INGREDIENT_PRICES[action.ingredientName];
//   const updatedState = {
//     ...state
//   }
//   console.log(updatedState);
  
//   const updatedBurger = {
//     ...updatedState
//   };
//   console.log(updatedBurger);
//   console.log(updatedBurger);
//   const updatedBurgerIngredients = {
//            ...state.burger.ingredients,                       ///não estou conseguindo resolver isto.
//       [action.ingredientName]: state.burger.ingredients[action.ingredientName] + 1,
//   };
//  console.log(updatedBurgerIngredients);
//   // const updatedIngredients = {
//   //   ...state.burger.ingredients,
//   //   [action.ingredientName]: state.burger.ingredients[action.ingredientName] + 1,
//   // };





const ingredientAdd = (state, action) => {
  const updatedBurger = {
    ...state.burger
  }
  const updatedBurgerIngredients = {
    ...updatedBurger
  }
  //console.log(updatedBurgerIngredients)
  const insideUpdatedBurgerIngredients = updatedBurgerIngredients.ingredients;
  return updateObject(state, {
    burger: {totalPrice: state.burger.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      ingredients: {
        ...insideUpdatedBurgerIngredients,
        [action.ingredientName]: state.burger.ingredients[action.ingredientName] + 1
      }
    }
  }
  )
  

}






const ingredientRemove = (state, action) => {
  const updatedBurger = {
    ...state.burger
  }
  const updatedBurgerIngredients = {
    ...updatedBurger
  }

  const insideUpdatedBurgerIngredients = updatedBurgerIngredients.ingredients;
  return updateObject(state, {
    burger: {totalPrice: state.burger.totalPrice - INGREDIENT_PRICES[action.ingredientName],
      ingredients: {
        ...insideUpdatedBurgerIngredients,
        [action.ingredientName]: state.burger.ingredients[action.ingredientName] - 1
      }
    }
  }
  )
}




const burgerBuilderReducer = (state = initialState, action) => {
  // const updatePurchaseState = (ingredients) => {
  //   const sum = Object.keys(ingredients)
  //   .map (igKey => {

  //     return ingredients[igKey];
  //   })
  //   .reduce ( (sum, el) => {
  //     return sum + el;
  //   }, 0);
  //   console.log(sum > 0);
  //   return sum > 0

  //         // ...state,
  //         // purchasable:
  //   // }
  // }
  switch (action.type) {
    case actionTypes.INGREDIENT_ADD:
      // console.log('test');
      // console.log(state.ingredients);
      // console.log(state.ingredients[action.id]);
      // const oldCount = state.ingredients[action.id];
      // console.log(oldCount)
      // console.log(updatedCount);
      // console.log(state);
      // this.setState({
      //   totalPrice: newPrice,
      //   ingredients: updatedIngredients,
      // });
      // this.updatePurchaseState( updatedIngredients);
      // updatePurchaseState(updatedIngredients);
      // console.log(updatePurchaseState(updatedIngredients));
      // console.log(state);

      // const updatedCount = state.ingredients[action.ingredientName] + 1;

      // const updatedIngredients = {
      //   ...state.ingredients
      // };
      // updatedIngredients[action.ingredientName] = updatedCount;
      // const priceAddition = INGREDIENT_PRICES[action.ingredientName];
      // const oldPrice = state.totalPrice;
      // const newPrice = oldPrice + priceAddition;

      // return {

      //       ingredients: updatedIngredients,
      //       totalPrice: newPrice,
      //       purchasable: updatePurchaseState(updatedIngredients)
      // }

      //-----------------------------------------
      console.log(state);
      // return {
      //   ...state,
      //   totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      //   // purchasable: updatePurchaseState(updatedIngredients),
      //   ingredients: {
      //     ...state.ingredients,
      //     [action.ingredientName]: state.ingredients[action.ingredientName] + 1
      //   }
      // }

      //   const updatedBurger = {
      //     ...state.burger
      //   }
      //   //console.log(updatedBurger);
      //   const updatedBurgerIngredients = {
      //     ...updatedBurger
      //   }
      //   //console.log(updatedBurgerIngredients)
      //   const insideUpdatedBurgerIngredients = updatedBurgerIngredients.ingredients;
      //   //console.log(insideUpdatedBurgerIngredients);
      //   //console.log(state.burger.ingredients);
      // return {
      //   ...state,
      //   burger: {totalPrice: state.burger.totalPrice + INGREDIENT_PRICES[action.ingredientName],
      //   // purchasable: updatePurchaseState(updatedIngredients),
      //   ingredients: {
      //     ...insideUpdatedBurgerIngredients,
      //     [action.ingredientName]: state.burger.ingredients[action.ingredientName] + 1
      //   }
      // }
      // }


      // --------------------------------------------
      return ingredientAdd(state, action);



      break;
    case actionTypes.INGREDIENT_REMOVE:
      // console.log(updatedRemovedCount);
      // const updatedRemovedCount = state.ingredients[action.ingredientName] - 1;

      // let updatedRemovedIngredients = {
      //   ...state.ingredients
      // };
      // updatedRemovedIngredients[action.ingredientName] = updatedRemovedCount;
      // console.log(updatedRemovedCount);
      // const priceReduction = INGREDIENT_PRICES[action.ingredientName];
      // const oldPriceRemoved = state.totalPrice;
      // const newPriceRemoved = oldPriceRemoved + priceReduction;
      // console.log(state);
      // console.log(updatedRemovedIngredients);

      //----------------------------------------
      // return {
      //   ...state,
      //   totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName],
      //   ingredients: {
      //     ...state.ingredients,
      //     [action.ingredientName]: state.ingredients[action.ingredientName] - 1,
      //   },
      // };
      // ---------------------------------------
      return ingredientRemove(state, action);
    default:
      return state;
  }
};

export default burgerBuilderReducer;
