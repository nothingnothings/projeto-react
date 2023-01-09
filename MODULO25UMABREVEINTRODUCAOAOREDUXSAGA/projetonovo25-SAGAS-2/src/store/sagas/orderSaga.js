
import { put } from 'redux-saga/effects'; //USADO PARA FAZER _dISPATCH__ DE ACTIONS com o 'sagas', nesse arquivo nosso....


import axiosOrder from '../../axios-orders';

import * as actionTypes from '../actions/order';

export function* asyncFetchOrdersStartSaga(action) {
        yield put(actionTypes.fetchOrdersStart()); ///ISSO (códigos de CARREGAMENTO, QUE MOSTRAM SPINNERS;) DEVEM SER ESCRITOS __ DO LADO ___ DE FORA__ DE 'try-catch' blocks em sagas...
        const queryParams = '?auth=' + action.token + '&orderBy="userId"&equalTo="' + action.userId + '"';
        
        try{
              

                
                const response = yield axiosOrder.get('/orders.json' + queryParams);
                const fetchedOrders = [];
                for (let key in response.data) {
                        console.log(key);
                    yield fetchedOrders.push(
                        {
                            ...response.data[key],
                            id: key
                        }
                    )
                }
                yield put(actionTypes.fetchOrdersSuccess(fetchedOrders))
            } catch(error ) {
                            yield put(actionTypes.fetchOrdersFail(error));
              
            }
}

export function* purchaseBurgerAttemptSaga(action) {
        yield put(actionTypes.purchaseBurgerLoading());
 
        try {
          const response =  yield axiosOrder.post('/orders.json?auth=' + action.token, action.orderData);
              yield put(actionTypes.purchaseBurgerSuccess(response.data.name, action.orderData))
      
        } catch (error) {
                yield put (actionTypes.purchaseBurgerFail(error.message))
        }
}
