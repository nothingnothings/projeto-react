import * as actionTypes from './burgerActionTypes';


import axios from 'axios';





export const sideDrawerClose = () => {
        return {
                type: actionTypes.SIDEDRAWER_CLOSE
        }
}



export const ingredient_add = (ingredientId) => {
        return {
            type: actionTypes.INGREDIENT_ADD,
                    ingredientName: ingredientId
        };
};




export const ingredient_remove = (ingredientId) => {
        return {
            type: actionTypes.INGREDIENT_REMOVE,
            ingredientName: ingredientId
        }
}




export const orderInitialIngredientsGet = (ingredients) => {
        return {
                type: actionTypes.ORDER_INITIAL_INGREDIENTS_GET,
                ingredients: ingredients
        };
};


export const fetchIngredientsFailed = () => {
        return {
                type: actionTypes.FETCH_INGREDIENTS_FAILED
        }
}



export const asyncOrderInitialIngredientsGet = () => {
        return (dispatch) => {
                axios.get(
                            'https://burgerbuilder201051-default-rtdb.firebaseio.com/ingredients.json'
                          )
                          .then((response) => {
                                  
                                const ingredients = response.data;
                                dispatch(orderInitialIngredientsGet(ingredients));
                          })
                          .catch(
                                  error => {
                                          console.log(error);
                                        dispatch(fetchIngredientsFailed());
                                  }
                          )
                      
                        //   .catch((error) => {
                        //     this.setState({
                        //       error: true,
                        //     });
                        //   });
              
        }
}