// import axios from 'axios';
import * as actionTypes from './orderActionTypes';

// import axios from 'axios';

import axiosOrder from '../../axios-orders';









export const purchaseBurgerSuccess = (id, orderData) => {
        return {
                type: actionTypes.PURCHASE_BURGER_SUCCESS,
                orderId: id,
                orderData: orderData
        };
};


export const purchaseBurgerFail = (error) => {
        return {
                type: actionTypes.PURCHASE_BURGER_FAIL,
                error: error
        }
}



export const purchaseBurgerAttempt = (orderData) => {
        return (dispatch) => {
                        dispatch(purchaseBurgerLoading());
                        axiosOrder.post(
                                '/orders.json', orderData
                        )
                        .then(
                                response => {
                                        console.log(response);
                                        dispatch(purchaseBurgerSuccess(response.data.name, orderData));
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




 export const asyncFetchOrdersStart = () => {
        return dispatch => {
                dispatch(fetchOrdersStart());
            axiosOrder.get('/orders.json')
            .then(
               res => {
                   const fetchedOrders = [];
                   for (let key in res.data) {
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