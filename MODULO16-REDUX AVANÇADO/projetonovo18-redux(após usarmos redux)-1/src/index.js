import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore } from 'redux';
import { combineReducers } from 'redux'; ////////USADO PARA __COMBINAR__ MÚLTIPLOS REDUCERS EM APENAS 1 SÓ (combiná-los, fazê-los virar o ÚNICO REDUCER USADO PELO NOSSO APP, justamente pq APENAS PODE EXISTIR 1 REDUCER POR APp/execução de 'createStore'.......)
// import reducer from './store/reducer'; //formato 'REDUCER ÚNICO'. Defasado.
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import { Provider } from 'react-redux';

import { applyMiddleware } from 'redux';

import  thunk  from 'redux-thunk'; ////////USADO COM 'APPLYMIDDLEWARE()' PARA POSSIBILITAR O USO/EXECUÇÃO DE CÓDIGOS ASSÍNCRONOS (http requests, timers, getlocation, etc...) COM PROJETOS QUE SE UTILIZAM DE REDUX...

import { compose } from 'redux';



const rootReducer = combineReducers({ //É ASSIM QUE '''USAMOS MÚLTIPLOS REDUCERS'''', com essa função '''combine reducers'''' gerando um NOVO 'REDUCER COMBINADO', que é uma fusão daqueles 2 parâmetros...
    counter: counterReducer,
    results: resultReducer
})



const logger = (store) => {  ///EXEMPLO DE MIDDLEWARE. MIDDLEWARE COM O REDUX.
  return next => {
    return action => {
      console.log('[Middleware] Dispatching', action);
      const result = next(action);
      console.log('[Middleware] Next state', store.getState());
      return result;
    }
  }
}


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(logger, /////USADO COM NOSSO 'MIDDLEWARE'... --> esse segundo parâemtro de 'createStore' SERVE PARA __vINCULARMOS__ NOSSO 'Middleware' AO 'store' GLOBAL DE NOSSO APP...
                                                                            thunk ))); //////////SEGUNDO MIDDLEWARE DE NOSSO CÓDIGO, usado para CONSEGUIR EXECUTAR/ESCREVER CÓDIGO ASSÍNCRONO COM O 'REDUX', por meio dos ACTION CREATORS... (normalmente, A EXECUÇÃO DE CÓDIGO ASYNC COM O REDUX NÃO É PERMITIDA, mas esse package específico 'redux-thunk' MUDA ESSE PANORAMA...)













ReactDOM.render(
  // SIM, ESSE 'WRAP' de 'APP' (nosso aplicativo) PELO OBJETO/COMPONENT 'Provider' (extraído de 'react-redux') É NECESSÁRIO.... DEVEMOS FAZÊ-LO PARA QUE SEJA POSSÍVEL O USO DE REDUX COM O  REACT...
    <Provider store={store}> 
  {/* E SIM, É NECESSÁRIO ESSE PROP DE 'store={}'... ------> NELE NÓS VAMOS VINCULAR/CONECTAR NOSSO 'store', aquela CONSTANTE ali em cima, que CRIA NOSSO STORE POR MEIO DO CÓDIGO 'createStore(reducer)'... */}
    <App />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();













//////OBS: A FUNÇÃO 'createStore' e o PRÓPRIO STORE ('const store') SÃO CRIADOS NO 
/// 'index.js', sim, MAS O __REDUCER__ NÃO É CRIADO/ESCRITO AQUI...