import * as actionTypes from '../actions/orderActionTypes';

import { updateObject } from '../utility';




const initialState = {
        // initialIngr: {
        //     ingredients: {
        //         bacon: 0,
        //         salad: 0,
        //         cheese: 0,
        //         meat: 0,
        //     },
        //     totalPrice: 4
        // }
        
  };



  const orderInitialIngredientsGet = (state, action) => {
    // const updatedBurger = {
    //     ...state.burger
    //   }
    //   const updatedBurgerIngredients = {
    //     ...updatedBurger
    //   }
      const insideUpdatedBurgerIngredients = action.ingredients;
      console.log(insideUpdatedBurgerIngredients);
      return updateObject(state, {
        initialIngr: {totalPrice: 6.9,
          ingredients: {
            ...insideUpdatedBurgerIngredients,
            [action.ingredientName]: state.initialIngr.ingredients[action.ingredientName] + 1
          }
        }
      }
      )
  }





const orderReducer = (state = initialState, action) => {


    switch (action.type) {
        case actionTypes.ORDER_INITIAL_INGREDIENTS_GET:
            // return orderInitialIngredientsGet(state, action);
      

        default: 
        return state;




    }
    

}






export default orderReducer;