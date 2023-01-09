// export const INC_COUNTER = 'INC_COUNTER';  //////ESTES SÃO CÓDIGOS QUE DEFINEM OS __IDENTIFCADORES __ DAS ACTIONS, mas identificadores __ SEM SER AS ACTIONS EM SI.... ____ 

// export const DEC_COUNTER = 'DEC_COUNTER';

// export const ADD_COUNTER = 'ADD_COUNTER';

// export const SUB_COUNTER = 'SUB_COUNTER';

// export const RESULT_STORE = 'RESULT_STORE';

// export const DELETE_RESULT = 'DELETE_RESULT';


export const INC_COUNTER = 'INC_COUNTER';  

export const DEC_COUNTER = 'DEC_COUNTER';

export const ADD_COUNTER = 'ADD_COUNTER';

export const SUB_COUNTER = 'SUB_COUNTER';

export const RESULT_STORE = 'RESULT_STORE';

export const DELETE_RESULT = 'DELETE_RESULT';










////ESSES CÓDIGOS MAIS ABAIXO ___SÃO CÓDIGOS DE 'ACTION CREATORS', são CONSTANTES QUE SEGURAM __FUNÇÕES__ QUE RETORNAM ACTIONS com seus próprios 'IDENTIFIERS', que são JUSTAMENTE OS IDENTIFIERS QUE TEMOS DEFINIDOS MAIS ACIMA...

export const inc_counter = () => { ///////ESTE É UM __aCTION CREATOR____ --> seu formato é assim:  'const nomeDoIdentifierDaAction = (payloadQueVocêQuer) => { return { actionEmSi... } };'
        return {
            
            type: INC_COUNTER  //sim, esse é o IDENTIFIER QUE TEMOS LOGO ACIMA...
        }
}



export const dec_counter = () => { 
    return {
        
        type: DEC_COUNTER  
    }
}

export const add_counter = (value) => { 
    return {
        
        type: ADD_COUNTER, 
        value: value
    }
}

export const sub_counter = (value) => { 
    return {
        
        type: SUB_COUNTER,
        value: value
    }
}

// export const result_store = (result) => {  /// 'result' ---> FOI COLOCADO 'result' NESSE CAMPO 'OPCIONAL' (não é bem opcional, pq às vezes VOCÊ VAI PRECISAR DE PAYLOADS, SÃO INFORMAÇÕES NECESSÁRIAS A ALGUMAS ACTIONS...) de 'PAYLOADS'  ---> esse 'payload' será passado ao BODY da action, que pode ser visto mais abaixo...
//     return {
        
//         type: RESULT_STORE,
//         result: result
//     }
// }



export const storeResult = (result) => { /////CREATOR DE ACTION __SÍNCRONA__ (que é executada de forma SÍNCRONA... --> entretanto, VAMOS ENFIAR ESSE NEGÓCIO EM UM 'ASYNC ACTION CREATOR', que é aquele logo de baixo....)
    return { 
type: RESULT_STORE,
result: result
}
}



export const asyncStoreResult = (result) => {
return dispatch => {
setTimeout(() => {
dispatch(storeResult(result)); 
}, 2000);
} 
}











export const delete_result = (id) => { 
    return {
        
        type: DELETE_RESULT,
        resultId: id
    }
}