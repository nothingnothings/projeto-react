import { put } from 'redux-saga/effects'; //USADO PARA FAZER _dISPATCH__ DE ACTIONS com o 'sagas', nesse arquivo nosso....

import { delay } from 'redux-saga/effects';

import { call } from 'redux-saga/effects'; ///É ISSO QUE __DEIXA NOSSOS CÓDIGOS DE 'sagas' TESTABLE... Facilita a vida na etapa de TESTING...

import axios from 'axios';

import * as authActions from '../actions/index';



// A DIFERENÇA 

// DE 

// 'takeEvery'

// PARA 

// 'takeLatest'

// É QUE 

// ESTE ÚLTIMO __ VAI SEMPRE __ CANCELAR ___ 


// AUTOMATICAMENTE 



// QUALQUER 'ongoing execution' DA SAGA QUE 
// ELE EXECUTA/está vinculado,

// E AÍ __ APENAS ___ EXECUTARÁ __A 


// VERSÃO/INSTÂNCIA MAIS 'LATEST' (mais recente)


// DESSA SAGA A QUE ESTÁ VINCULADO...


// Ex:




// yield takeLatest(actionTypes.PURCHASE_BURGER_ATTEMPT, purchaseBurgerSaga); //////ISSO VAI CONSIDERAR 



// __APENAS __ A 


// EXECUÇÃO MAIS _RECENTE__ 


// do 

// 'purchaseBurgerSaga',

// E VAI CANCELAR 

// TODAS AS 

// EXECUÇÕES QUE O ANTECEDEM/ANTECEDERAM....





// -------------->E ESSA É OUTRA ADIÇÃO BOA,



// ADIÇÃO DE QUE VOCÊ TALVEZ PRECISE DE TEMPOS EM TEMPOS,

// PARA 

// GARANTIR QUE __ APENAS 1 PROCESSO 'saga' FIQUE SENDO EXECUTADO 

// 'AT A GIVEN TIME'... 





// (é a diferença entre EXECUTAR MÚLTIPLOS SAGAS a partir DE MÚLTIPLOS 'DISPATCHES DE UMA ACTION' e 


// DISPARAR/CONSIDERAR APENAS O ÚLTIMO DISPATCH/ULTIMA SAGA DISPARADA A PARTIR DO DISPATCH DE UMA ACTION...)










export function* logoutSaga(action) {
//   yield localStorage.removeItem('token'); //'YIELD' DEVE SER CHAMADO EM CADA 'step' DE __FUNÇÕES DE TIPO 'GENERATOR' (generator functions).... (generator functions === SÃO OBJETOS 'SAGA', na verdade...)
//   yield localStorage.removeItem('expirationDate'); // ----> DENTRO DESSE CALL,  VAMOS PASSAR, COMO PRIMEIRO ARGUMENTO, __ UM ARRAY___  EM QUE   __ O PRIMEIRO ELEMENTO  é  'localStorage', E AÍ   __o  SEGUNDO ____ELEMENTO __ DESSE ARRAY QUE  É O PRIMEIRO ARGUMENTO __ SERÁ/É __ A FUNÇÃO __ QUE VOCÊ QUER  QUE SEJA  EXECUTADA  NESSE OBJETO.... ex: yield call([localStorage, 'removeItem'])
//   yield localStorage.removeItem('email');
//   yield localStorage.removeItem('userId');
     yield call([localStorage, 'removeItem'], 'token'); ////É A MESMA COISA QUE O CÓDIGO DE CIMA, código de 'yield localStorage.removeItem('token)', MAS ____ TEM A VANTAGEM__ NO QUESITO TESTING.... ---> ESSA EXPRESSÃO DEIXA NOSSO CÓDIGO 'TESTABLE'... deixa as sagas TESTABLE... ---> tudo graças à helper function de 'call'...
     yield call([localStorage, 'removeItem'], 'expirationDate');
     yield call([localStorage, 'removeItem'], 'email');
     yield call([localStorage, 'removeItem'], 'userId');




  yield console.log('test');
  yield put(
    // {
    //     type: actionTypes.AUTH_LOGOUT ////VERSÃO __HARDCODADA__ DO DISPATCH DE UMA ACTION COM 'put'... --> devemos usar a VERSÃO LOGO ABAIXO, que USA UM ACTION CREATOR do 'redux-thunk' PARA __ CRIAR __ UMA ACTION AQUI em 'authSaga.js'... -> e essa 'action' criada por esse action creator VAI ENTÃO SER DISPATCHEADA por esse método de 'put'....
    // }

    authActions.authLogoutSucceed() //versão OPTIMIZADA do código de cima...
  );
}

export function* checkAuthTimeoutSaga(action) {
  yield delay(action.expirationTime * 1000);
  yield put(authActions.authLogout());
}

export function* authAttemptSaga(action) {
  console.log('test');
  yield put(
    authActions.authStart() ///inicia o nosso 'SPINNER'...
  );
  const authData = {
    email: action.email,
    password: action.password,
    returnSecureToken: true,
  };
  console.log('test');

  let url =
    'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCy31S56NPNXlXSSCTRdE5TccY_QYmtZe4'; /// url usada para SIGNUP/CADASTRO....
  if (!action.isSignup) {
    url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCy31S56NPNXlXSSCTRdE5TccY_QYmtZe4';
  }




  try {
    ////COMO AQUI, nessa SAGA, NÃO PODEMOS USAR __ 'axios.get().then()'  (THEN BLOCKS), devemos usar UM __tRY-CATCH__ BLOCK TRADICIONAL DO JAVASCRIPT.... (e isso realmente vai funcionar... apenas precisamos seguir este modelo; modelo em que COLOCAMOS O 'STORE' da response DO call de AXIOS.POST___DENTRO __ DE UMA constante chamada 'response', e aí vamos executando o código assíncrono, dentro desse try block, por meio dessa constante aí, que é REALMENTE A RESPONSE, armazenada de forma ASSÍNCRONA devido ao comportamento da keyword 'yield' dentro de nossa saga...)

    const response = yield axios.post(url, authData); ////ISTO MUDA TUDO... (SÓ É PERMITIDO armazenar um 'axios.post' (que é um método que RETORNA UMA PROMISE) dentro de uma constante SE VOCê TIVER A KEYWORD 'yield' presente....)

    const expirationDate = yield new Date(
      new Date().getTime() + response.data.expiresIn * 1000
    ); ////lembre-se de adicionar '* 1000', pois o JAVASCRIPT SEMPRE CONSIDERA 'TEMPO' EM MILISSEGUNDOS, E NÃO EM SEGUNDOS.... (só o 'expiresIn' que é mostrado em segundos....)
    
//     yield localStorage.setItem('token', response.data.idToken);
//     yield localStorage.setItem('expirationDate', expirationDate);
//     yield localStorage.setItem('userId', response.data.localId);
//     yield localStorage.setItem('email', response.data.email);

    yield call([localStorage, 'setItem'], 'token', response.data.idToken)
    yield call([localStorage, 'setItem'], 'expirationDate', expirationDate)
    yield call([localStorage, 'setItem'], 'userId', response.data.localId)
    yield call([localStorage, 'setItem'], 'email', response.data.email)





    //   dispatch(authSuccess(response.data.idToken, response.data.localId, response.data.email));
    //   dispatch(checkAuthTimeout(response.data.expiresIn));
    yield put(
      authActions.authSuccess(response.data.idToken, response.data.localId, response.data.email)
    );
    yield put(authActions.checkAuthTimeout(response.data.expiresIn));
  } catch (error) {
    // dispatch(authFail(error.response.data.error));
    yield put(authActions.authFail(error.response.data.error));
  }

  // .catch((error) => {

  //   dispatch(authFail(error.response.data.error));
  // put(authActions.authFail(error.response.data.error));
  // });
}

export function* authCheckStateSaga(action) {
  const token = yield localStorage.getItem('token');


  if (!token) {
    yield put(authActions.authLogout());

  } else {
    const expirationDate = yield new Date(
      localStorage.getItem('expirationDate')
    );

    if (expirationDate <= new Date()) {
      yield put(authActions.authLogout());
    } else {
      const userId = yield localStorage.getItem('userId');

      
      yield put(authActions.authSuccess(token, userId, action.email));
      yield put(
        authActions.checkAuthTimeout(
          (expirationDate.getTime() - new Date().getTime()) / 1000
        )
      );
    }
  }
}













