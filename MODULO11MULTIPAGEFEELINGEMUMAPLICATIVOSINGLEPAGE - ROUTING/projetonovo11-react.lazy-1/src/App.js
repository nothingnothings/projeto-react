import React, { Component, Suspense } from 'react';

import { BrowserRouter, Route, NavLink } from 'react-router-dom';

// import { Suspense } from 'react'; /////OBS: O 'suspense', ESSE OBJETO AÍ, É NECESSÁRIO PARA PODERMOS USAR O APPROACH DE 'React.lazy' PARA FAZER LAZY LOADING DE COMPONENTS/CONTAINERS/PÁGINAS NO NOSSO PROJETO...


// import Posts from './containers/Posts';
import User from './containers/User';
import Welcome from './containers/Welcome.js';





const AsyncPosts = React.lazy(() => import('./containers/Posts'));




class App extends Component {
    render() {
        return(
            // <BrowserRouter basename="/algumaCoisa"> /// exemplo de 'HOME' que não TEM/NÃO TERÁ UMA PÁGINA INICIAL COM 'slash nothing'; que terá uma página inicial tipo 'domain.com/posts' (com algo depois do '/' basicamente)... -----> para isso, você precisa dessa propriedade/prop 'basename'...
            // <BrowserRouter basename="/"> //// este é o DEFAULT.
            <BrowserRouter>
            <React.Fragment>
                <nav>
                    <NavLink to="/user">User Page</NavLink> |&nbsp;
                    <NavLink to="/posts">Posts Page</NavLink>
                </nav>
                
                <Route path="/user" component={User} />
                <Route 
                path="/posts" render={
                    () => {
                        return <Suspense fallback={
                            <div>Loading...</div>
                        }>
                            <AsyncPosts/>
                        </Suspense>  ///////SIM, DEVEMOS SEMPRE WRAPPAR O 'COMPONENT DINAMICO'/component a ser carregado por meio do LAZY LOADING com ESSE __component/objeto '<Suspense/>'...
                    }
                }/>
                <Route path="/" component={Welcome} exact />
            </React.Fragment>
            </BrowserRouter>
        )
    }
}







export default App;











/////////OBS: ABAIXO TEMOS UM EXEMPLO QUE COMPROVA A VANTAGEM DO 'React.lazy()'... ---->a  vantagem é que seu uso não é EXCLUSIVO A SITUAÇÕES QUE ENVOLVEM ROUTING... não, podemos o utilizar em outras situações, para renderizar/CARREGAR __OUTRAS __ COISAS CONDICIONALMENTE, COISAS QUE NÃO SÃO ROUTES/CONTAINERS/COMPONENTS... ---> aqui, no caso, vamos renderizar os posts de acordo com o state de 'showPosts'... --> e esse render desses posts VAI ACONTECER DE FORMA ASSÍNCRONA/LAZY LOADING... (quando for togglado o negócio, quando for executado o método 'modeHandler', nosso component 'Posts' será renderizado de forma DINÂMICA (será carregado seu código na hora.... mais optimizado, impossível.) )

////////OBS::: ABAIXO USAMOS 'React.Fragment' em vez de 'Aux'.... (mas não faz diferença: ambos fazem a mesma coisa, permitem que você renderize 2 elementos JSX adjacentes, se fizer o seu wrap de forma correta...)





// /////import { Suspense } from 'react';


// class App extends Component {

//     state = {
//         showPosts: false
//     }





// modeHandler = () => {

//             this.setState(prevState => {
//                 return {
//                     showPosts: !prevState.showPosts
//                 }
//             }
      
//             )
// }





// render() {
//     return(  <React.Fragment>
//             <button onClick={() => {this.modeHandler()}}>Toggle mode</button>
//             {this.state.showPosts 
            
            
//             ?
            
            
//             (<Suspense 
//          fallback={
//         <div>Loading...</div>   
//             }><AsyncPosts/>
//         </Suspense> )
            

//             : 


//             <User />
    
            
            
            
            
//              }
    //       </React.Fragment>
//     )
// }
// }