import * as actionTypes from './burgerActionTypes';


// import axios from 'axios'; //USADO AQUI NESTE ARQUIVO __APENAS__ SE ESTIVER USANDO O REDUX-THUNK/OPTARMOS POR REDUX-THUNK.... se estivermos usando o 'redux-saga', isto não é necessário...





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



// export const asyncOrderInitialIngredientsGet = () => {
//         return (dispatch) => {
//                 axios.get(
//                             'https://burgerbuilder201051-default-rtdb.firebaseio.com/ingredients.json'
//                           )
//                           .then((response) => {
                                  
//                                 const ingredients = response.data;
//                                 dispatch(orderInitialIngredientsGet(ingredients));
//                           })
//                           .catch(
//                                   error => {
//                                           console.log(error);
//                                         dispatch(fetchIngredientsFailed());
//                                   }
//                           )
                      
//                         //   .catch((error) => {
//                         //     this.setState({
//                         //       error: true,
//                         //     });
//                         //   });
              
//         }
// }



export const asyncOrderInitialIngredientsGet = () => {
                        return {
                                type: actionTypes.INITIALIZE_INITIAL_INGREDIENTS_GET
                        }
}