import * as orderActionTypes from '../actions/orderActionTypes';
// import * as actionTypes;

// import { updateObject } from '../utility';


import { updateObject } from '../utility';


// const initialState = {
//         initialIngr: {
//             ingredients: {
//                 bacon: 0,
//                 salad: 0,
//                 cheese: 0,
//                 meat: 0,
//             },
//             totalPrice: 4
//         }
        
//   };



  // const orderInitialIngredientsGet = (state, action) => {
  //   // const updatedBurger = {
  //   //     ...state.burger
  //   //   }
  //   //   const updatedBurgerIngredients = {
  //   //     ...updatedBurger
  //   //   }
  //     const insideUpdatedBurgerIngredients = action.ingredients;
  //     console.log(insideUpdatedBurgerIngredients);
  //     return updateObject(state, {
  //       initialIngr: {totalPrice: 6.9,
  //         ingredients: {
  //           ...insideUpdatedBurgerIngredients,
  //           [action.ingredientName]: state.initialIngr.ingredients[action.ingredientName] + 1
  //         }
  //       }
  //     }
  //     )
  // }



  const initialState = {
            orders: [],
            loading: false,
            initialIngr: {
                ingredients: {
                                    bacon: 0,
                                    salad: 0,
                                    cheese: 0,
                                    meat: 0,
            }
  }
  ,
  redirect: false,
//   purchased: false
  }




const purchaseBurgerSuccess = (state, action) => {
  
        const newOrder = {
            ...action.orderData,
            id: action.orderId,

            
        };

       return updateObject(state, {
            orders: state.orders.concat(newOrder),
            loading: false,
            redirect: true
        })
}



const fetchOrderSuccess = (state, action) => {
    
    
   
    return updateObject(state, {orders: action.orders, 
                                loading: false});
}






const orderReducer = (state = initialState, action) => {


    switch (action.type) {
        case orderActionTypes.PURCHASE_BURGER_LOADING: /// este é o 'PURCHASE_INIT' do professor, basicamente...
            // return { //esse código foi REFATORADO para ser aquele call de 'updateObject', que é aquela FUNÇÃO AUXILIAR que nos ajuda a deixar o reducer mais 'lean' (outsourcing)...
            //     ...state,
            //     loading: true
            // }
            return updateObject(state, {loading: true});


            // case orderActionTypes.PURCHASE_INIT:
            //     return {
            //         ...state,
            //         loading: false,
            //         // purchased: false
            //     }

        case orderActionTypes.PURCHASE_BURGER_SUCCESS:
            // const newOrder = {
            //     ...action.orderData,
            //     id: action.orderId,
            //     // purchased: true

                
            // }
            // return {
            //     ...state,
            //     orders: state.orders.concat(newOrder),
            //     loading: false,
            //     redirect: true
            // };
            purchaseBurgerSuccess(state, action);
            break;

        case orderActionTypes.PURCHASE_BURGER_FAIL:
                // return {
                //     ...state,
                //     loading: false
                // };
            return updateObject(state, {loading: false});

        // case orderActionTypes.FETCH_BURGER_ORDERS: // É NOSSO CÓDIGO, ANTIGO, DE FETCH DAS ORDERS LÁ DO SERVIDOR DO FIREBASE...


         
               case orderActionTypes.FETCH_ORDERS_START:
            // console.log(state.orders);
            //     return {
            //         ...state, 
            //         loading: true,
                   
                    
            //     };
           return  updateObject(state, {loading: true});
       

            case orderActionTypes.FETCH_ORDERS_SUCCESS:
                        // return{
                        //     ...state,
                        //     orders: {
                        //         ...action.orders
                        //     },
                        //     loading: false
                        // };
            return fetchOrderSuccess(state, action);


            case orderActionTypes.FETCH_ORDERS_FAIL:
                    // return {
                    //     ...state,
                    //     loading: false,
                    // }
         return  updateObject(state, {loading: false});
            default:
        return state;




    }
    

}






export default orderReducer;