import React, { useEffect, useReducer, useRef } from 'react';
import axios from 'axios';

import { useState } from 'react';

import { useMemo } from 'react'; //USADO PARA OPTIMIZAR. Serve o mesmo papel de 'shouldComponentUpdate'...


import { useFormInput } from '../hooks/forms'; ///EXEMPLO DE 'CUSTOM HOOK', criado por nós para fazer a VALIDATION E MANAGE DOS VALORES DOS INPUTS....



import TodoStyle from './Todo.module.css';

import List from '../components/List';

const Todo = props => {
  // const [todoName, setTodoName] = useState('');
  // const [submittedTodo, setSubmittedTodo] = useState(null);
  // const [todoList, setTodoList] = useState([]);
  //   const [todoState, setTodoState] = useState({ userInput: '', todoList: [] });
  const [inputIsValid, setInputIsValid] = useState('false');
  // const todoInputRef = useRef(); //usamos, mais tarde, um CUSTOM HOOK no lugar dele...


    console.log(inputIsValid);


  // let color = 'red';



  let inputClasses = [TodoStyle.Input];



  if (!inputIsValid) {
    inputClasses.push(TodoStyle.Invalid)
  }




  // if (inputIsValid) {
  //     color = 'transparent';
  // }





  const todoListReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return state.concat(action.payload);
      case 'SET':
        return action.payload;
      case 'REMOVE':
        return state.filter(todo => todo.id !== action.payload);
      default:
        return state;
    }
  };

  const [todoList, dispatch] = useReducer(todoListReducer, []);






    const todoInput = useFormInput();






  useEffect(() => {
    axios.get('https://reacthooks21901290291-default-rtdb.firebaseio.com/todos.json').then(result => {
      console.log(result);
      const todoData = result.data;
      const todos = [];
      for (const key in todoData) {
        todos.push({ id: key, name: todoData[key].name });
      }
      dispatch({ type: 'SET', payload: todos });
    });
    return () => {
      console.log('Cleanup');
    };
  }, []);

  // const mouseMoveHandler = event => {
  //   console.log(event.clientX, event.clientY);
  // };

  // useEffect(() => {
  //   document.addEventListener('mousemove', mouseMoveHandler);
  //   return () => {
  //     document.removeEventListener('mousemove', mouseMoveHandler);
  //   };
  // }, []);

  // useEffect(
  //   () => {
  //     if (submittedTodo) {
  //       dispatch({ type: 'ADD', payload: submittedTodo });
  //     }
  //   },
  //   [submittedTodo]
  // );

  // const inputChangeHandler = event => {
  //   // setTodoState({
  //   //   userInput: event.target.value,
  //   //   todoList: todoState.todoList
  //   // });
  //   setTodoName(event.target.value);
  // };


  const inputValidationHandler = (event) => {


    if (event.target.value.trim() === '') {
      setInputIsValid(false);
    } else {
      setInputIsValid(true);
    }

    // console.log(inputClasses);

    // if(event.target.value.trim() === '') {
    //     inputClasses.push(inputClasses.Invalid)
    // } else {
    //   return;
    // }




  }




  const todoAddHandler = () => {
    // setTodoState({
    //   userInput: todoState.userInput,
    //   todoList: todoState.todoList.concat(todoState.userInput)
    // });

    // const todoName = todoInputRef.current.value;


    const todoName = todoInput.value;

    axios
      .post('https://reacthooks21901290291-default-rtdb.firebaseio.com/todos.json', { name: todoName })
      .then(res => {
        setTimeout(() => {
          const todoItem = { id: res.data.name, name: todoName };
          dispatch({ type: 'ADD', payload: todoItem });
        }, 3000);
      })
      .catch(err => {
        console.log(err);
      });
  };




 




  const todoRemoveHandler = todoId => {
    axios
      .delete(`https://reacthooks21901290291-default-rtdb.firebaseio.com/todos/${todoId}.json`)
      .then(res => {
        dispatch({ type: 'REMOVE', payload: todoId });
      })
      .catch(err => console.log(err));
  };

  return (
    <React.Fragment>
      <input
        type="text"
        placeholder="Todo"
        // ref={todoInputRef}
        value={todoInput} //exemplo de utilização de CUSTOM HOOKS...
        // onChange={inputValidationHandler}
        onChange={todoInput.onChange}
        // className={inputClasses.join(' ')}
        style={
          {
            // backgroundColor: !inputIsValid ? 'red' : 'transparent'
            backgroundColor: todoInput.validity ? 'red' : 'transparent'
            // backgroundColor: color
          }
        }
      />
      <button type="button" onClick={todoAddHandler}>
        Add
      </button>
      <ul>
        {/* {todoList.map(todo => (
          <li key={todo.id} onClick={todoRemoveHandler.bind(this, todo.id)} style={{listStyle: 'none'}}>
            {todo.name}
          </li>
        ))} */}
        {/* <List items={todoList}  clicked={todoRemoveHandler}/>  ///sem o 'memo'...*/}
{

useMemo(() => {



  <List items={todoList}  clicked={todoRemoveHandler}/> 
}, [todoList]) ///ISSO É O QUE FAZ O NEGÓCIO... --> aqui vocÊ estipula qual VALOR/STATE o REACT DEVERÁ 'WATCH OUT FOR'... ---> se esse valor/valores aí forem alterados, o React tem a permissão para __ RE-RENDERIZAR ESSE COMPONENT/VALOR QUE VOCÊ WRAPPOU COM ESSE 'useMemo()'...

}







      </ul>
    </React.Fragment>
  );
};

export default Todo;
