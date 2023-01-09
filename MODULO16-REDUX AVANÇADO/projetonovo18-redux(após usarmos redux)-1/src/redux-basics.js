////////////OBS::::: SEMPRE DEVE SER SEGUIDA ESSA ORDEM (imports/requires primeiro, depois o 'createStore', com aquele código ali...) 
/////////// DEPOIS DO 'CREATESTORE', definimos o REDUCER/REDUCERS(que são apenas 1, na verdade), QUE DEVE SEMPRE VIR ANTES DA CRIAÇÃO DA STORE PROPRIAMENTE DITA (código 'const store = createStore()' ) ....










const redux = require('redux');
const createStore = redux.createStore;






const initialState = {
    counter: 0
}







//Reducer (1)

// const rootReducer = (state = initialState, action) => { //////O PRIMEIRO PARÂMETRO É UM EXEMPLO DE 'DEFAULT PARAMETER VALUE'... (e o 'default parameter value', no caso, é aquele 'initialState', que é o VALOR QUE SERÁ SEMPRE SETTADO QUANDO O 'state', o primeiro parâmetro de VERDADE, estiver definido como 'undefined'...) ---> em outras palavras, ISSO ACONTECE NA __PRIMEIRA CRIAÇÃO__/EXECUÇÃO DE 'createStore(rootReducer)...' (e isso pode ser examinado no CONSOLE.LOG QUE DIGITAMOS MAIS EMBAIXO, aquele console.log de 'store.getState()'...)
//     return state;  //////////////ESSE É O REDUCER MAIS SIMPLES QUE VOCê PODE ESCREVER. ELE SÓ VAI SIMPLESMENTE RETORNAR O 'OLDSTATE' (o que é completamente inútil, pq o OLDSTATE VAI ENTRAR NESSA FUNÇÃO PURA/REDUCER E ENTÃO VAI SIMPLESMENTE SAIR DA MESMA FORMA...) -> o professor só usa esse modelo de reducer, esse modelo que só possui esse 'return state', PQ ELE QUER NOS MOSTRAR QUE MESMO UM REDUCER __INÚTIL___ pode ser utilizado/passado como parâmetro ao 'createStore()' mais abaixo (que é uma função/execução de função que __EXIGE___ ESSE PARÂMETRO, EXIGE UM REDUCER...) 
// }

const rootReducer = (state = initialState, action) => { 

    if (action.type === 'INC_COUNTER') {
        return {
            ...state,
            counter: state.counter + 1 ///////////'state.counter++'  __NÃO FUNCIONA__, devemos usar 'state.counter + 1', em vez disso...
        }
    }


    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value ///////////'state.counter++'  É A MESMA COISA QUE ESCREVER 'state.counter + 1'...
        }
    }



    return state;  
}






//Store (2)

const store = createStore(rootReducer);







console.log(store.getState()); ///////VAI NOS MOSTRAR/CONSOLE.LOGGAR UM STATE QUE ESTÁ COMO 'UNDEFINED'... ---> obs::: 'getState()' faz o 'PULLOUT' de um STATE de nosso ' central store', representado por 'store'....... --> e esse state vai estar como UNDEFINED, nesse nosso exemplo...





//Subscription (3)  -----------> SUBSCRIPTIONS GERALMENTE SÃO POSICIONADAS/ESCRITAS ______ANTES____ DO CÓDIGO QUE FAZ 'DISPATCH' DAS ACTIONS... -------> elas são posicionadas antes PQ ___A MORAL/ATRIBUIÇÃO __ DAS 'SUBSCRIPTION' É SEMPRE EXECUTAR O CÓDIGO DENTRO DO SEU FUNCTION BODY DA ARROW FUNCTION INTERNA __QUANDO __ O STATE EM 'CENTRAL STATE' __ SOFRER ALGUMA MUDANÇA/FOR UPDATADO... (como nesse 'redux-basics', em que o REDUCER vai alterar o valor de 'counter' dentro do STATE ARMAZENADO NO 'CENTRAL STORE'...)

store.subscribe(  
    () => {
        console.log('[Subscription]', store.getState());
    }
)








// CODE THAT DISPATCHES AN ACTION... (4)


store.dispatch(
    {
        type: 'INC_COUNTER'
    }
)

 store.dispatch(
    {
        type: 'ADD_COUNTER', 
        value: 10

    }
)

console.log(store.getState());







