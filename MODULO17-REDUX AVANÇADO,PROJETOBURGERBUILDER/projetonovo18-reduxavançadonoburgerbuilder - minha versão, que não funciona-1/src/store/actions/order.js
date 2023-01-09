import * as actionTypes from './orderActionTypes';

import axios from 'axios';











export const orderPost = () => {
        return {
                type: actionTypes.ORDER_POST
        };
};










export const orderInitialIngredientsGet = (ingredients) => {
        return {
                type: actionTypes.ORDER_INITIAL_INGREDIENTS_GET,
                ingredients: ingredients
        };
};



export const asyncOrderInitialIngredientsGet = () => {
        return (dispatch) => {
                axios.get(
                            'https://burgerbuilder201051-default-rtdb.firebaseio.com/ingredients.json'
                          )
                          .then((response) => {
                                  console.log(response.data);
                                  
                                const ingredients = response.data;
                                dispatch(orderInitialIngredientsGet(ingredients));
                          })
                        //   .catch((error) => {
                        //     this.setState({
                        //       error: true,
                        //     });
                        //   });
              
        }
}