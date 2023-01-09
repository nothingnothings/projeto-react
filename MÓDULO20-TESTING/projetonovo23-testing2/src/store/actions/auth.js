import * as authActionTypes from './authActionTypes';

import axios from 'axios';


// export const burgerCreate = () => {
//           return {
//             type: authActionTypes.BURGER_CREATED_WITHOUT_AUTH
//           }
// }

// export const burgerFinished = () => {
//     return {
//       type: authActionTypes.BURGER_FINISHED_PURCHASING
//     }
// }




export const authStart = () => {
  return {
    type: authActionTypes.AUTH_START,
  };
};

// export const authSuccess = (authData) => {
export const authSuccess = (token, userId, email) => {
  return {
    type: authActionTypes.AUTH_SUCCESS,
    // authData: authData
    token: token,
    userId: userId,
    email: email
  };
};

export const authFail = (error) => {
  return {
    type: authActionTypes.AUTH_FAIL,
    error: error,
  };
};

export const authLogout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('expirationDate');
  localStorage.removeItem('email');
  localStorage.removeItem('userId');
  return {
    type: authActionTypes.AUTH_LOGOUT,
  };
};

export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(authLogout());
    }, expirationTime * 1000);
  };
};

export const authAttempt = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true, ///propriedade obrigatória para FUNCIONAMENTO DO 'REST API' do firebase... ---> deve sempre estar settada como 'true'...
    };
    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCy31S56NPNXlXSSCTRdE5TccY_QYmtZe4'; /// url usada para SIGNUP/CADASTRO....
    if (!isSignup) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCy31S56NPNXlXSSCTRdE5TccY_QYmtZe4'; ///url/endpoint usado para ___SIGNIN/LOGIN...
    }
    axios
      .post(url, authData) ///ESSA 'key' ([API_KEY]) FOI OBTIDA LÁ DO SITE DO GOOGLE FIREBASE, na engrenagem, e depois em 'Configurações do Projeto' > 'Chave de API da web'...
      .then((response) => {
        const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000); ////lembre-se de adicionar '* 1000', pois o JAVASCRIPT SEMPRE CONSIDERA 'TEMPO' EM MILISSEGUNDOS, E NÃO EM SEGUNDOS.... (só o 'expiresIn' que é mostrado em segundos....)
        localStorage.setItem('token', response.data.idToken);
        localStorage.setItem('expirationDate', expirationDate);
        localStorage.setItem('userId', response.data.localId);
        localStorage.setItem('email', response.data.email )
        dispatch(authSuccess(response.data.idToken, response.data.localId, response.data.email));
        dispatch(checkAuthTimeout(response.data.expiresIn));
      })
      .catch((error) => {
        
        dispatch(authFail(error.response.data.error));
      });
  };
};


export const authCheckState = () => {
  return dispatch => {
      const token = localStorage.getItem('token');
      if(!token) {
        // console.log('test');
        dispatch(authLogout())
      } else {
        const expirationDate = new Date(localStorage.getItem('expirationDate'));
        if (expirationDate <= new Date()) {
          dispatch(authLogout());
        } 
        else {
          const userId = localStorage.getItem('userId');
          const email = localStorage.getItem('email');
          dispatch(authSuccess(token, userId, email)); ///////// esse userId é aquele 'gettado' logo acima....
          // dispatch(checkAuthTimeout(expirationDate.getSeconds() - new Date().getSeconds()));  ////este código NÃO VAI FUNCIONAR... vai introduzir um PROBLEMA NO NOSSO CÓDIGO: nosso código vai sempre executar 'auth_logout'... ---------> ao usar 'getTime()' em vez de 'getSeconds()', nós vamos obter A DIFERENÇA ENTRE O 'FUTURO' E O 'PRESENTE' (que é o tempo até a token expirar, basicamente) EM __MILISSEGUNDOS___, que é exatamente o que queremos (pq a unidade de tempo usada GERALMENTE no javascript é MILISSEGUNDOS.... os timers/setTimeouts também funcionam com ms, e é por isso que vamos utilizar '.getTime()' aqui....)
          dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000 ));  ////devemos WRAPPAR essa expressão em parênteses PARA PODER ENTÃO A DIVIDIR por 1000... ---> e dividimos por 1000 pq LOGO DEPOIS ELA SERÁ MULTIPLICADA por '1000', lá na action de checkAuthTimeout()...
        }
  
      }
  }
}





export const setAuthRedirectPath = (path) => {
    return {
      type: authActionTypes.SET_AUTH_REDIRECT_PATH,
      path: path
    }
}