import * as actionTypes from '../actions/actionsTypes';


import { updateObject } from '../utility'; ///ISSO SERVE PARA __rEDUZIR UM POUCO O TAMANHO DO CÓDIGO NOS NOSSOS REDUCERS... ---> é uma utility function, usada para DEIXAR O CÓDIGO MAIS 'LEAN'/remover repetições desnecessárias de 'return {...state}', lá nos nossos CASES no reducer....




const initialState = {
  counter: 0,
};

const counterReducer = (state = initialState, action) => {
  ///////devemos sempre definir o parâmetro 'state' dessa forma, dessa forma/formato de 'default parameter value', esse negócio de '= initialState' ----------> ISSO VAI FAZER COM QUE, QUANDO O parâmetro 'state'  '''''inicial''''' (primeira execução) estiver como 'undefined', SERÁ __aDOTADO ___ O VALOR DE 'initialState', aquela CONSTANTE QUE DEFINIMOS LOGO ACIMA, que então entrará como valor de 'state' (e por isso é considerado um 'PARÂMETRO DEFAULT' dessa função 'reducer', nesse caso... (e em todos os outros)) ------> é LÓGICO QUE NAS FUTURAS EXECUÇÕES DE 'reducer', será adotado o VALOR 'value' mesmo, e não esse 'initialState', que SÓ SERVE PARA A PRIMEIRA EXECUÇÃO (mesmo assim, ele é crucial, pois precisamos dessa primeira execução)...

  //     if(action.type === 'INC_COUNTER') {
  //                 return {
  //                     ...state,
  //                         counter: state.counter + 1
  //                 }
  //     }

  //     if(action.type === 'DEC_COUNTER') {
  //         return {
  //             ...state,
  //                 counter: state.counter - 1
  //         }
  // }

  //     if(action.type === 'ADD_COUNTER') {
  //         return {
  //             ...state,
  //                 counter: state.counter + action.value
  //         }
  // }

  //     if(action.type === 'SUB_COUNTER') {
  //     return {
  //         ...state,
  //             counter: state.counter - action.value
  //     }
  // }

  //     return state;

  switch (action.type) {  ////faz a mesma coisa que o código acima (com if statements), mas com SWITCH-CASE STATEMENTS...
    // case actionTypes.INC_COUNTER: /////CÓDIGO __ SEM A UTILITY FUNCTION__ (que está em 'utility.js', função que deixa NOSSO CÓDIGO do reducer mais 'LEAN'...)
    //   return {
    //     ...state,
    //     counter: state.counter + 1,
    //   };
    // case actionTypes.DEC_COUNTER:
    //   return {
    //     ...state,
    //     counter: state.counter - 1,
    //   };
    //   case actionTypes.ADD_COUNTER:
    //     return {
    //       ...state,
    //       counter: state.counter + action.value,
    //     };

    //     case actionTypes.SUB_COUNTER:
    //       return {
    //         ...state,
    //         counter: state.counter - action.value,
    //       };

        ////OBS::: 'updateObject' está em 'utility.js', e possui um código de:
////''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  //       const updateObject = (oldObject, updatedValues) => {
  //         return {
  //             ...oldObject,
  //             ...updatedValues
  //         }
  // };
  //'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''





          case actionTypes.INC_COUNTER:
            return updateObject(state, {counter: state.counter + 1});
          case actionTypes.DEC_COUNTER:
            return updateObject(state, {counter: state.counter - 1});
            case actionTypes.ADD_COUNTER:
              return updateObject(state, {counter: state.counter + action.value});
      
              case actionTypes.SUB_COUNTER:
                return updateObject(state, {counter: state.counter - action.value});


















        // case actionTypes.RESULT_STORE: 
        // return {
        //     ...state, 
        //     results: state.results.concat({


        //       value: state.counter,
        //     resultId: new Date() * Math.random() //////////USADO PARA CONSEGUIR UM 'ID' __REALMENTE ___ 'UNIQUE'__, único, nunca teremos um ELEMENTO ARMAZENADO COM A MESMA DATA QUE O OUTRO, PQ AS DATAS SEMPRE VÃO SER DIFERENTES (tempos diferentes)...
        //       // id: state.counter * Math.random()
        //     }
        //     )      /////////UMA ALTERNATIVA A ESSE ID, CRIADA POR MIM, SERIA ESCREVER 'id: state.counter * Math.random();'
            
        // };
        // break;
//         case actionTypes.DELETE_RESULT:
// //////////////APPROACH Nº 1  de COMO __REMOVER UM ELEMENTO/OBJETO DE UM ARRAY __ NO STATE__ DE FORMA ____iMMUTABLE____ (este approach usa o método 'splice' JUNTO DE 'indexOf'... )
//             // const resultToBeDeleted = state.results.find((result) => {return result.resultId === action.resultId})
//             // const indexOfResult = state.results.indexOf(resultToBeDeleted)
//             // const newArray = [...state.results];
//             // newArray.splice(indexOfResult, 1);
//             // return {
//             //   ...state,
//             //   results: newArray
//             // }
// /////////////////////APPROACH Nº2 (usa o método 'filter'):
//           const updatedArray = state.results.filter(
//             (result) => {
//                 return result.resultId !== action.resultId; /////////////EIS O CÓDIGO IMPORTANTE PARA O 'FILTER'...
//             }
//             )
//             return {
//                 ...state,
//                 results: updatedArray
//             }





//         break;
    default:
      return state;
  }
};

export default counterReducer;

