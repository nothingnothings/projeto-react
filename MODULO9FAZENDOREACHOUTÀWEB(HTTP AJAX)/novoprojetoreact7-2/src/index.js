import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


import axios from 'axios';




axios.interceptors.request.use(
  (request) => { //here, inside this arrow function inside the '.use()' block, you CANT __EDIT__ YOUR REQUEST CONFIG FILE (o arquivo de configuração do seu request/requests....)

    console.log(request);
    return request;
  }, 
  error => {
    console.log(error);
    return Promise.reject(error);
  }
);





axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'; ////////ISSO SERÁ USADO COMO URL 'BASE' PARA CADA HTTP REQUEST FEITO NO NOSSO BROWSERSIDE...


// axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN' ///exemplo.

// axios.defaults.headers.post['Content-Type'] = 'application/json'; ///EXEMPLO.








axios.interceptors.response.use( 
  (response) => {  //mesma coisa/funcionamento do INTERCEPTORS DE cima, mas dessa vez com o caminho inverso, com A RESPONSe/responses...

    console.log(response);
    return response;
  }, 
  error => {
    console.log(error);
       return Promise.reject(error);
  }
);




ReactDOM.render(

    <App />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
