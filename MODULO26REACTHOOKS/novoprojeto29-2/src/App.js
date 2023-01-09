// import React, { Component } from 'react';

import React, { useState } from 'react';

import Todo from './components/Todo';

import Header from './components/Header';

import Auth from './components/Auth';


import AuthContext from './auth-context';



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Header />
//         <Todo />
//         <Auth />
//       </div>
//     );
//   }
// }

// export default App;

const App = (props) => {
  // const [currentPage, setCurrentPage] = useState('');
  const [currentPage, setCurrentPage] = useState('auth');
  const [authStatus, setAuthStatus] = useState(false);

  // const onLoadAuth = () => {
  //   console.log('test');
  //   setCurrentPage('auth');
  // };

  // const onLoadTodo = () => {
  //   console.log('test');
  //   setCurrentPage('todo');
  // };

  //   return (
  //     <div className="App">
  //       <Header onLoadTodo={onLoadTodo} onLoadAuth={onLoadAuth}/>
  //       <hr></hr>
  //       <Todo />
  //       <Auth />
  //     </div>
  //   );



  const switchPage = pageName => {
    setCurrentPage(pageName);
  }




  const login = () => {
    setAuthStatus(true);
  }



  // let page = <div></div>;

  // if (currentPage === 'auth') {
  //   page = <Auth />;
  // }

  // if (currentPage === 'todo') {
  //   page = <Todo />;
  // }

  return (
   
    <div className="App">
         <AuthContext.Provider value={{status: authStatus, login: login}}>
      {/* <Header onLoadTodo={onLoadTodo} onLoadAuth={onLoadAuth} /> */}
      <Header onLoadTodo={switchPage.bind(this, 'todos')} onLoadAuth={switchPage.bind(this, 'auth')} />
      <hr></hr>
      {/* {page} */}
      {currentPage === 'auth' ? <Auth /> : <Todo />}
      {/* <Todo />
          <Auth /> */}
             </AuthContext.Provider>
    </div>
 
  );
};




// const [currentPage, setCurrentPage] = useState('auth'); 

// const switchPage = (pageName) => {
//     setCurrentPage(pageName);
// }

// return (
//     <div className="App">
//       <Header onLoadTodo={switchPage.bind(this, 'todos')} onLoadAuth={switchPage.bind(this, 'auth')} value={{status: authStatus, login: login}} /> //sintaxe alternativa, usada pelo professor....
//       <hr></hr>
//       {
//          currentPage === 'auth' ? <Auth /> : </Todo>
//              }
//       
//    
//     </div>
//   );
// };











export default App;
