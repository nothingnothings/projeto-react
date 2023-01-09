import * as actionsTypes from './actionsTypes';




export const storeResult = (result) => {   /////CREATOR DE ACTION __SÍNCRONA__ (que é executada de forma SÍNCRONA... --> entretanto, VAMOS ENFIAR ESSE NEGÓCIO EM UM 'ASYNC ACTION CREATOR', que é aquele logo de baixo....)
  const updatedResult = result * 2;
 
  return {
    type: actionsTypes.RESULT_STORE,
    // result: result,
    result: updatedResult
  };
};

export const asyncStoreResult = (result) => {
  return (dispatch, getState) => {   ////'getState' ---> é código OPCIONAL de 'redux-thunk', ESPECIFICAMENTE DE NOSSOS ACTION CREATORS... --> e ele é recebido justamente nesse slot aí, no SEGUNDO SLOT dos parâmetros da FUNÇÃO INTERNA RETORNADA PELO 'ASYNC ACTION CREATOR' que usa o redux-thunk (é o async creator que faz com que a ACTION SEJA 'RETARDADA'; ou seja, que ela atrase um poucoo, para que se comporte como CÓDIGO ASSÍNCRONO, pois seu DISPATCH SERÁ UM POUCO __ATRASADO___ EM RAZÃO do funcionamento do 'redux-thunk', que age como um EXECUTOR DE CÓDIGO ASSÍNCRONO...).
    setTimeout(() => { ///esse 'getState' PODE/DEVE SER ENTÃO UTILIZADO DENTRO DO ___BODY__ do nosso código assíncrono, isso em casos em que PRECISAMOS DE 'DATA' CONTIDA DENTRO DO current state/old state de nosso aplicativo (como IDs de usuário, armazenados no GLOBAL STORE DO REDUX, os quais queremos enviar por meio de http requests, por exemplo...)
      const oldCounter = getState().counter.counter;
      console.log(oldCounter);
      dispatch(storeResult(result));
    }, 2000);
  };
};

export const delete_result = (id) => {
  return {
    type: actionsTypes.DELETE_RESULT,
    resultId: id,
  };
};
