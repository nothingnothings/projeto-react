// import axios from 'axios';
import * as actionTypes from './orderActionTypes';

// import axios from 'axios';


// import * as authActions from './auth';

import axiosOrder from '../../axios-orders';









export const purchaseBurgerSuccess = (id, orderData, userId) => {
        return {
                type: actionTypes.PURCHASE_BURGER_SUCCESS,
                orderId: id,
                orderData: orderData,
                userId: userId
        };
};


export const purchaseBurgerFail = (error) => {
        return {
                type: actionTypes.PURCHASE_BURGER_FAIL,
                error: error
        }
}



export const purchaseBurgerAttempt = (orderData, token, userId) => {
        return (dispatch) => {
                        dispatch(purchaseBurgerLoading());
                        axiosOrder.post(
                                '/orders.json?auth=' + token, orderData
                        )
                        .then(
                                response => {
                                
                                        // const userId = localStorage.getItem('userId');
                                        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
                                        // dispatch(authActions.burgerFinished());
                                }
                        )
                        .catch(
                                error => {
                                        dispatch(purchaseBurgerFail(error.message));
                                }
                        )
        }
}




export const purchaseBurgerLoading = () => {
        return {
                type: actionTypes.PURCHASE_BURGER_LOADING
        }
}


// export const fetchBurgerOrders = (orders) => { Ver anotações logo abaixo...
//         return {
//                 type: actionTypes.FETCH_BURGER_ORDERS,
//                 orderList: orders
//         }
// }



// export const asyncFetchBurgerOrders = () => { ///ESTA É MINHA VERSÃO DO CÓDIGO de 'fetch' das orders do nosso aplicativo...
//         return (dispatch) => {
//                 dispatch(purchaseBurgerLoading());
//                 axiosOrder.get('/orders.json')
//                 .then(
//                     (response) => {
//                         const orders = response.data;
//                         console.log(orders);
//                         console.log(Object.entries(orders));
//                         dispatch(fetchBurgerOrders(orders))
//                     }
//                 )
//                 .catch()
//         }
// }






export const fetchOrdersSuccess = (orders) => {
        return {
            type: actionTypes.FETCH_ORDERS_SUCCESS,
            orders: orders
        }
}





export const fetchOrdersFail = (error) => {
        return {
            type: actionTypes.FETCH_ORDERS_FAIL,
            error: error
        }
}







export const fetchOrdersStart = () => {
        return {
            type: actionTypes.FETCH_ORDERS_START

        }
 }




 export const asyncFetchOrdersStart = (token, userId) => {
        return dispatch => {
                dispatch(fetchOrdersStart());
        //     axiosOrder.get('/orders.json?auth=' + token)   
        const queryParams = '?auth=' + token + '&orderBy="userId"&equalTo="' + userId + '"';  ///obs:: sempre coloque as propriedades/objetos à direita das keys (keys como 'orderBy') WRAPPADAS POR  '  ""  ' (double quotation marks), como visto naquele "userId"....
        axiosOrder.get('/orders.json' + queryParams ) ////////// '/orders.json'   | ?auth= token |  'orderBy=userId equal to userId(constante) ' | )
       // (SIM, É UM CÓDIGO ABSURDO ASSIM MESMO, TUDO PARA QUE o último userId fique "userId"...)
        //e tudo isto é necessário, de verdade....
        
        .then(
               res => {
                   const fetchedOrders = [];
                   for (let key in res.data) {
                           console.log(key);
                       fetchedOrders.push(
                           {
                               ...res.data[key],
                               id: key
                           }
                       )
                   }
                   dispatch(fetchOrdersSuccess(fetchedOrders)); ///AQUI É DISPATCHADA A ACTION DE 'fetchOrdersSuccess', com um pass de 'fetchedOrders' como payload (propriedade 'orders')...
               }
            )
            .catch(error => {
                    dispatch(fetchOrdersFail(error));
            })
        }
    }






// export const purchaseInit = () => {
//         return {
//                 type: actionTypes.PURCHASE_INIT;
//         }
// }





export const redirectToHomeResetter = () => {
        return {
                type: actionTypes.REDIRECT_TO_HOME_RESETTER
        }
}


















// export const orderInitialIngredientsGet = (ingredients) => {
//         return {
//                 type: actionTypes.ORDER_INITIAL_INGREDIENTS_GET,
//                 ingredients: ingredients
//         };
// };



// export const asyncOrderInitialIngredientsGet = () => {
//         return (dispatch) => {
//                 axios.get(
//                             'https://burgerbuilder201051-default-rtdb.firebaseio.com/ingredients.json'
//                           )
//                           .then((response) => {
//                                   console.log(response.data);
                                  
//                                 const ingredients = response.data;
//                                 dispatch(orderInitialIngredientsGet(ingredients));
//                           })
//                         //   .catch((error) => {
//                         //     this.setState({
//                         //       error: true,
//                         //     });
//                         //   });
              
//         }
// }