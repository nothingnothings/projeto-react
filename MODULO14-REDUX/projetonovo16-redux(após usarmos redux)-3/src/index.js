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




const rootReducer = combineReducers({ //É ASSIM QUE '''USAMOS MÚLTIPLOS REDUCERS'''', com essa função '''combine reducers'''' gerando um NOVO 'REDUCER COMBINADO', que é uma fusão daqueles 2 parâmetros...
    counter: counterReducer,
    results: resultReducer
})



const store = createStore(rootReducer);







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