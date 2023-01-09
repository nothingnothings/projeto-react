import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
// import ingredientsReducer from './store/reducers/reducer';
// import priceReducer from '../src/store/reducers/priceReducer';
import reducer from '../src/store/reducers/reducer';
// import  combineReducers from 'redux';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';




// const rootReducer = combineReducers(
//   {
//     ingredients: ingredientsReducer,
//     price: priceReducer
//   }
// )




const store = createStore(reducer); //código redux







ReactDOM.render(
  <Provider store={store}>
     {/* //código redux. */}
    <App 
     />
    </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
