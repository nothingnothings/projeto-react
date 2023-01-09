import React from 'react';

import { useState } from 'react';

const Todo2 = (props) => {
  // const inputState = useState(''); //versão FEIA de escrever o HOOK de 'useState'... (não usa array destructuring)...

  // const [todoName, setTodoName] = useState(''); ////versão __BONITA__ de escrever o hook de 'useState()' (usa ARRAY DESTRUCTURING...)

  // const [todoList, setTodoList] = useState([]); ///PODEMOS CHAMAR 'useState()' QUANTAS VEZES QUISERMOS...





  const [todoState, setTodoState] = useState(
    {
      userInput: '',
      todoList: []
    }
  )



  const inputChangedHandler = (event) => {
    // inputState[1](event.target.value);
    // setTodoName(event.target.value);



    setTodoState(
      {
        userInput: event.target.value,
        todoList: todoState.todoList
      }
    )
  };

  const todoListAddHandler = () => {
    // setTodoList(todoName);
    // console.log(todoList.concat(todoName));
    // setTodoList(todoList.concat(todoName));
    // console.log(new Date().getTime());


    setTodoState(
      {
        userInput: todoState.userInput,
        list: todoState.todoList.concat(todoState.userInput)
      }
    )



  };

  ///React.Fragment --> MESMA COISA QUE '<Aux />'...
  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Todo"
        // value={inputState[0]}
        value={todoState.userInput}
        //   onChange={inputState[1]}
        onChange={inputChangedHandler}
      />
      <button type="button" onClick={todoListAddHandler}>
        Add
      </button>
      {/* <ul>{inputState[0]}</ul> */}
      {/* <ul>{todoName}</ul> */}
      {/* <ul>{todoList}</ul> */}

      <ul>
        {todoState.todoList.map((todoItem, index) => {
          return (
            <li
            key={new Date().getTime() * Math.random()}
              style={{
                listStyle: 'none',
              }}
            >
              {todoItem}
            </li>
          );
        })}
      </ul>
    </React.Fragment>
  );
};

export default Todo2;