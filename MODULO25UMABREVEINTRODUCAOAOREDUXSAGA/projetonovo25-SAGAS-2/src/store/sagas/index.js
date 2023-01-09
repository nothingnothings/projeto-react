import { takeEvery } from 'redux-saga/effects'; ///SUPER IMPORTANTE. É isto que 'recebe' as actions dos action creators ENVIADAS ao 'redux-saga', ÀS nossas SAGAS...

import { logoutSaga } from './authSaga';

import { checkAuthTimeoutSaga } from './authSaga';

import { authAttemptSaga } from './authSaga';

import { authCheckStateSaga } from './authSaga';

import { asyncOrderInitialIngredientsGetSaga } from './burgerBuildSaga';

import { purchaseBurgerAttemptSaga } from './orderSaga';

import { asyncFetchOrdersStartSaga } from './orderSaga';


import * as authActionTypes from '../actions/authActionTypes';

import * as burgerActionTypes from '../actions/burgerActionTypes';

import * as orderActionTypes from '../actions/orderActionTypes';

import { all } from 'redux-saga/effects';



export function* watchAuth() {

  
  // yield takeEvery(authActionTypes.AUTH_INITIATE_LOGOUT, logoutSaga); ////sempre que uma action de tipo 'AUTH_INITIATE_LOGOUT' for detectada/listened to (SE ESSE LISTENER DE 'watchAuth()' for settado/chamado, é claro), A SAGA de 'logout', naquele arquivo 'auth.js', ___SERÁ EXECUTADA___...
  // yield takeEvery(authActionTypes.AUTH_INITIALIZE_CHECKAUTH_TIMEOUT, checkAuthTimeoutSaga);
  // yield takeEvery(authActionTypes.AUTH_ATTEMPT, authAttemptSaga); ///código que DE FATO FAZ  O LOGIN....
  // yield takeEvery(authActionTypes.AUTH_INITIALIZE_AUTHCHECK_STATE, authCheckStateSaga);




      yield all( ////MESMA COISA QUE O CÓDIGO DE CIMA, MAS MAIS ABREVIADO...
          [
                     takeEvery(authActionTypes.AUTH_INITIATE_LOGOUT, logoutSaga),
                       takeEvery(authActionTypes.AUTH_INITIALIZE_CHECKAUTH_TIMEOUT, checkAuthTimeoutSaga),
                      takeEvery(authActionTypes.AUTH_ATTEMPT, authAttemptSaga),
                      takeEvery(authActionTypes.AUTH_INITIALIZE_AUTHCHECK_STATE, authCheckStateSaga),
          ]
      )
    
  





}




export function* watchBurger() {
  yield takeEvery(burgerActionTypes.INITIALIZE_INITIAL_INGREDIENTS_GET, asyncOrderInitialIngredientsGetSaga)
}



export function* watchOrder() {
  yield takeEvery(orderActionTypes.INITIALIZE_BURGER_PURCHASE_ATTEMPT, purchaseBurgerAttemptSaga );
  yield takeEvery(orderActionTypes.INITIALIZE_ASYNC_FETCH_ORDERS_START, asyncFetchOrdersStartSaga );
}