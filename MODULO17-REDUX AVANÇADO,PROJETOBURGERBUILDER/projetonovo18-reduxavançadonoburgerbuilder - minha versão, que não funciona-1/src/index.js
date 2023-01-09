import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
// import ingredientsReducer from './store/reducers/reducer';
// import priceReducer from '../src/store/reducers/priceReducer';
import BurgerReducer from './store/reducers/burgerBuilderReducer';
import orderReducer from './store/reducers/orderReducer';
import { combineReducers } from 'redux'; ///USADO PARA COMBINAR OS REDUCERS 'burgerBuilderReducer' e 'orderReducer'...
import reportWebVitals from './reportWebVitals';
import thunk from 'redux-thunk'; ///////REDUX AVANÇADO. ---> THUNK --> USADO PARA CONSEGUIR EXECUTAR CÓDIGOS ASSÍNCRONOS/DISPATCH ASSÍNCRONO DE ACTIONS... --> por meio de action creators ---> é usado para coisas como HTTP REQUESTS e setTimeout, getLocation, etc etc...
import { applyMiddleware } from 'redux'; //////////CÓDIGO ESSENCIAL PARA: 1) implementar/utilizar o REDUX DEV TOOLS; 2) UASR O 'redux-thunk', que é o PACKAGE DE REDUX _ QUE NOS PERMITE FAZER HANDLE DE CÓDIGOS ASSÍNCRONOS no REDUX POR MEIO DE ACTION CREATORS..
import { compose } from 'redux'; //////REDUX AVANÇADO. Usado para __COMBINAR TODOS OS MIDLEWARES EM APENAS 1 SÓ...
import { Provider } from 'react-redux'; //REDUX BÁSICO.


// const rootReducer = combineReducers(
//   {
//     ingredients: ingredientsReducer,
//     price: priceReducer
//   }
// )

const logger = (store) => {
  ///EXEMPLO DE MIDDLEWARE. MIDDLEWARE COM O REDUX. É ASSIM QUE UM MIDDLEWARE É CONSTRUÍDO/escrito.
  return (next) => {
    return (action) => {
      console.log('[Middleware] Dispatching', action);
      const result = next(action);
      console.log('[Middleware] Next state', store.getState());
      return result;
    };
  };
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const reducer = combineReducers({
      burger: BurgerReducer,
      order: orderReducer,
     
})



const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(logger, thunk)) //código redux (REDUX AVANÇADO ---> é o segundo parâmetro, que vai IMPLEMENTAR/APLICAR AQUELES MIDDLEWARES NO FLOW DE NOSSO CÓDIGO.... --> OBS: middlewares são sempre executados/exercem efeitos __ENTRE A ETAPA DO __DISPATCH__ DA ACTION __ E O EFETIVO RECEBIMENTO DESSA ACTION LÁ NO REDUCER...)
); 

ReactDOM.render(
  <Provider store={store}>
    {/* //código redux. */}
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
