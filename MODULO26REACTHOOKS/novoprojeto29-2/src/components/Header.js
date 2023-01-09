import React, { useContext } from 'react';
import AuthContext from '../auth-context';

const Header = (props) => {



  const auth = useContext(AuthContext);

 return (<header>
    {/* <button onClick={props.onLoadTodo} disabled={!auth.status}>Todo List</button> |{' '} */}


    {/* {auth.status ? <button onClick={props.onLoadTodo} disabled={!auth.status}>Todo List</button> : null } */}
    {auth.status ? <button onClick={props.onLoadTodo}>Todo List</button> : null }
    <button onClick={props.onLoadAuth}>Auth</button>
  </header>)
};

export default Header;
