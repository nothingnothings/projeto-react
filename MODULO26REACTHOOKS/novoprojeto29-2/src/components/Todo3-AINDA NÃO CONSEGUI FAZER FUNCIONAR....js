import React, { useReducer } from 'react';

import axios from 'axios';

import { useState } from 'react';

import { useEffect } from 'react';

const Todo = (props) => {
  // const inputState = useState(''); //versão FEIA de escrever o HOOK de 'useState'... (não usa array destructuring)...

  const [todoName, setTodoName] = useState(''); ////versão __BONITA__ de escrever o hook de 'useState()' (usa ARRAY DESTRUCTURING...)

  // const [todoList, setTodoList] = useState([]); ///PODEMOS CHAMAR 'useState()' QUANTAS VEZES QUISERMOS...

  // const [submittedTodo, setSubmittedTodo] = useState(null); ///fix para UPDATES BUGADOS DA UI A PARTIR DE TIMEOUTS/CÓDIGOS ASSÍNCRONOS...


  ////MELHOR DO QUE USAR ESSE FIX, É USAR o hook de 'useReducer()' no lugar de 'useState'.... (pq o useReducer NÃO PRECISA DESSES FIXES baratos...)





    const todoListReducer = (state, action) => { ///ALTERNATIVA __SUPERIOR__ ao approach de usar 'useState()' para definir/managear nosso state....
        switch(action.type) {
          case 'ADD':
            return state.concat(action.payload);

            case 'SET': 
            return action.payload;

            case 'REMOVE':
            return state.filter((todo) => { return todo.id !== action.payload.id});


            default: 
            return state;
        }
    }


    // const [state, dispatch] = useReducer(todoListReducer, [] ); ///há ainda a possibilidade de um TERCEIRO ARGUMENTO, depois do 'initial state', que é uma ACTION QUE VOCÊ DESEJA QUE SEJA IMEDIATAMENTE EXECUTADA NESSE REDUCER... mas nós não usamos isto aqui...

    const [todoList, dispatch] = useReducer(todoListReducer, [] ); ///PROFESSOR RENOMEOU 'state', trocou para 'todoList', para NÃO NOS CONFUNDIRMOS COM OS STATES MANAGEADOS NESSE 'Todo.js'...

    ///obs: segundo argumento de 'useReducer' é o __VALOR INICIAL___ DESSE 'state' EM QUE ESTAMOS USANDO ESTE REDUCER... (no caso, é um ARRAY VAZIo, pq vamos adicionar nossos items a ele..)





  useEffect(() => {
    //É EXECUTADO__ BEM NO INÍCIO DO 'LOAD' DESSE COMPONENT 'Todo' NA PÁGINA...

    axios
      .get(
        'https://reacthooks21901290291-default-rtdb.firebaseio.com/todos.json'
      )
      .then((result) => {
        console.log(result);
        const todoData = result.data;

        const todos = [];

        for (const key in todoData) {
          todos.push({
            id: key,
            todoName: todoData[key].todoName,
          });
        }
        console.log(todos);
        // setTodoList(todos); 
        dispatch(
          {
            type: 'SET',
            payload: todos
          }
        )






      });
      
    return () => {
      console.log('cleanup function, inside the first parameter'); ////ESSA FUNÇÃO VAI SEMPRE SER EXECUTADA __ANTES___ do ''''primeiro parâmetro de verdade''' do useEffect, aquele código mais acima, nos runs SUBSEQUENTES AO PRIMEIRO LOAD DO COMPONENT NA PÁGINA.... --> por isso é __USADO __ COMO CLEANUP FUNCTION, pq vai 'LIMPAR' os resíduos da última execução daquele código do primeiro parâmetro ANTES DE ENGATAR UMA NOVA EXECUÇÃO desse mesmo código...
    };
  }, []);
// }, [todoName]);
  // }, [todoName]); //ISSO AQUI FARÁ com que O CÓDIGO NO PRIMEIRO PARÂMETRO de 'useEffect()' SEJA EXECUTADO SEMPRE QUE NOSSO 'INPUT' (que é todoName) tiver o VALOR DE SEU INPUT FIELD ALTERADO...
  // },  []) //ESSE ARRAY VAZIO PASSADO COMO SEGUNDO PARÂMETRO __ VAI FAZER__ COM QUE O CÓDIGO DIGITADO DENTRO desse 'useEffect()' seja executado APENAS 1 ÚNICA VEZ, NO PRIMEIRO 'LOAD' DO COMPONENT NA PÁGINA.... (e isso evita LOOPS INFINITOS desse código dentro de 'useEffec()')

  // const mouseMoveHandler = (event) => {
  //   console.log(event.clientX, event.clientY);
  // };

  // useEffect(() => {
  //   document.addEventListener('mousemove', mouseMoveHandler);

  //   return () => {
  //     document.removeEventListener('mousemove', mouseMoveHandler); //////EXEMPLO DE USO DA 'CLEANUP FUNCTION' dentro de useEffect __ PARA REMOVER___ EVENTLISTENERS que vão sendo adicionados na nossa página.... ---> antes de um NOVO EVENTLISTENER de 'mousemove' ser adicionado, O VELHO É __REMOVIDO__ por meio de 'removeEventListener' e por meio dessa função de CLEANUP de 'return () => {}' dentro do FINAL DA FUNÇÃO PASSADA COMO PRIMEIRO PARÂMETRO DE 'useEffect()'... ----> isso evita que os VELHOS 'mousemove' listeners PERSISTAM NA PÁGINA... --> ficará SÓ 1 listener, o que melhorará em muito a performance...
  //   };
  // });





  // useEffect(() => {
  //   document.addEventListener('mousemove', mouseMoveHandler);

  //   return () => {
  //     document.removeEventListener('mousemove', mouseMoveHandler); //////EXEMPLO DE USO DA 'CLEANUP FUNCTION' dentro de useEffect __ PARA REMOVER___ EVENTLISTENERS que vão sendo adicionados na nossa página.... ---> antes de um NOVO EVENTLISTENER de 'mousemove' ser adicionado, O VELHO É __REMOVIDO__ por meio de 'removeEventListener' e por meio dessa função de CLEANUP de 'return () => {}' dentro do FINAL DA FUNÇÃO PASSADA COMO PRIMEIRO PARÂMETRO DE 'useEffect()'... ----> isso evita que os VELHOS 'mousemove' listeners PERSISTAM NA PÁGINA... --> ficará SÓ 1 listener, o que melhorará em muito a performance...
  //   };
  // }, []); ////a posição desse '[]' (array vazio) como segundo parâmetro FARÁ COM QUE SEJA SIMULADO O __o COMPORTAMENTO DE 'componentDidUnmount' com essa parte do seu código... --> isso significa que SE O REACT DETECTAR QUE O ELEMENTO 'todo' FOI 'UNMOUNTED' da página, ELE __ VAI AUTOMATICAMENTE__ EXECUTAR__ ESSE SEU CÓDIGO DE CLEANUP que você definiu nesse 'useEffect' (no caso, esse 'removeEventListener' ali....) ---> e isso é acessado justamente por esse segundo parâmetro de '[]' no seu useEffect, e pela presença DA CLEANUP FUNCTION ('return (...) => {...}....' no PRIMEIRO PARÂMETRO de um 'useEffect', ao final...)




  // useEffect( ////Depois de usarmos um pouco mais o REDUCER, esse fix se tornou REDUNDANTE... (só é usado quando usamos 'useState()')
  //   () => {
  //     if (submittedTodo) { ///só vamos entrar Nesse bloco __ DEPOIS DO PRIMEIRO LOAD DO COMPONENT 'Todo' na página, O QUE É EXATAMENTE O QUE QUEREMOS... --> isso 'FIXA' o 'FIX', por assim dizer...
  //       // setTodoList(todoList.concat(submittedTodo))
  //       dispatch({
  //         type: 'ADD',
  //         payload: submittedTodo
  //       })
  //     }
 
  // },
  //     [submittedTodo]
  // )




  const inputChangedHandler = (event) => {
    // inputState[1](event.target.value);
    setTodoName(event.target.value);
  };

  const todoRemoveHandler = (todoId) => {
    // setTodoList() 


    axios.delete(
      // 'https://reacthooks21901290291-default-rtdb.firebaseio.com/todos.json', 
      `https://reacthooks21901290291-default-rtdb.firebaseio.com/todos/${todoId}.json`,  ///NECESSÁRIO PARA __ DELETAR__ ITEMS COM SUCESSO no database do firebase...
      
    )
    .then(
      (response) => {
          console.log(response);
          dispatch(
            {
              type: 'REMOVE', 
              payload: todoId
            }
          )
      }
    )
    .catch(
        (error) => {console.log(error)}
    )

    // dispatch(
    //   {
    //     type: 'REMOVE',
    //     payload: {
    //       id: todoId
    //     }
    //   }
    // )


  }





  const todoAddHandler = () => {
    // setTodoList(todoName);
    // console.log(todoList.concat(todoName));
    // setTodoList(todoList.concat(todoName));
    // console.log(new Date().getTime());
    console.log(todoName);

    axios
      .post(
        'https://reacthooks21901290291-default-rtdb.firebaseio.com/todos.json',
        { todoName: todoName }
      ) ///este send realmente funciona. Criei um novo projeto do axios...
      .then((res) => {
          
        // setTimeout(() => { ///SERVE PARA __FAKAr__ UMA 'demora' NO RETRIEVE DE DADOS NO SERVIDOR.... --> isso serve para o professor nos mostrar um PROBLEMA com os hooks, lá na aula 'GOTCHAS DE STATES E EFFECTS'...
        //   const todoItem = {
        //     id: res.data.name, 
        //     name: todoName
        //   }
        //     console.log(todoItem);
        // setTodoList(todoList.concat(todoItem));
        //             }, 3000)

setTimeout(() => {

  const todoItem = {
    id: res.data.name,
    name: todoName
  }
  // setTodoName('');
  // setTodoList(todoList.concat(todoItem));
  // setSubmittedTodo(todoItem); ////chamamos ISTO em vez de 'setTodoList' aqui, para evitar ERROS NO UPDATE DE NOSSA UI (erros ocorrem quando updatamos CÓDIGO ASSÍNCRONO/CÓDIGO QUE DEMORA DEMAIS, COMO TIMEOUTs....)


  dispatch( //substitui esse código de 'setSubmittedTodo'...


      {
        type: 'ADD', 
        payload: todoItem
      }
  )



}, 3000)


          

        console.log(res);

        //   const todoItem = {
        //     id: res.data.name, 
        //     name: todoName
        //   }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  ///React.Fragment --> MESMA COISA QUE '<Aux />'...
  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Todo"
        // value={inputState[0]}
        value={todoName}
        //   onChange={inputState[1]}
        onChange={inputChangedHandler}
      />
      <button type="button" onClick={todoAddHandler}>
        Add
      </button>
      {/* <ul>{inputState[0]}</ul> */}
      {/* <ul>{todoName}</ul> */}
      {/* <ul>{todoList}</ul> */}

      <ul>
        {todoList.map((todoItem, index) => {
          return (
            <li
              // key={new Date().getTime() * Math.random()}
              
              key={todoItem.id}
              style={{
                listStyle: 'none',
              }}
            >
              {todoItem.todoName}
              <button onClick={() => {todoRemoveHandler(todoItem.id)}} style={{color: 'red'}}>REMOVE</button>
              {/* <button onClick={todoRemoveHandler.bind(this, todoItem.id)} style={{color: 'red'}}>REMOVE</button> */}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Todo;
