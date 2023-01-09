// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';

import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';
import List from '../src/components/List/List';

import Transition from 'react-transition-group/Transition';





// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

class App extends Component {
  // state = {
  //   showModal: true
  // }

  //  closeModalHandler = () => {

  //   }

  state = {
    modalIsOpen: false,
  };

  openModalHandler = () => {
    this.setState({
      modalIsOpen: true
    });
  };


  closeModalHandler = () => {
    this.setState(
      {
        modalIsOpen: false
      }
    )
  }

///OBS::: RENDER CONDICIONAL para fazer com que O ___MODAL NÃO FIQUE ___ APARENTE/NO DOM NO INÍCIO DO STARTUP de nosso app __SÓ FUNCIONA __ COM ESTILOS/ANIMAÇÕES DE OPEN, E NÃO FUNCIONA COM ANIMAÇÕES DE 'CLOSE' nativamente (isso significa que o MODAL É _ FECHADO INSTANTANEAMENTE, DEVIDO AO RENDER CONDICIONAL obtido por aquela ternary expression...). --> para solucionar isso, PROFESSOR NOS DIZ QUE PRECISAMOS __ DE TOOLS ADICIONAIS__... (para fazer essas animações/estilos de CLOSE de modais/backdrops FUNCIONAREM...)

  // render() {
  //   return (
  //     <div className="App">
  //       <h1>React Animations</h1>
  //       <button className="Button" onClick={() => this.setState((prevState) => ({showBlock: !prevState.showBlock}))}>Toggle Block</button>
  //       <br></br>
  //       {/* {this.state.showBlock ? ( */}
  //         <Transition in={this.state.showBlock} timeout={300}>
  //           {
  //             (state) => {return <p>{state}</p>}
  //           }
  //         {/* <div
  //         style={
  //           {
  //             backgroundColor: 'red',
  //             width: 100,
  //             height: 100,
  //             margin: 'auto'
  //           }
  //         }
  //           /> */}
  //           </Transition>
  //     {/* //   )
  //     //     : 

  //     //     null
      
  //     // } */}
  // {this.state.modalIsOpen ? <Modal show={this.state.modalIsOpen} closed={this.closeModalHandler} /> : null }
  // {this.state.modalIsOpen ? <Backdrop show={this.state.modalIsOpen} /> : null }
  //       <button
  //         className="Button"
  //         onClick={this.openModalHandler}
  //       >
  //         Open Modal
  //       </button>
  //       <h3>Animating Lists</h3>
  //       <List />
  //     </div>
  //   );
  // }





  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={() => this.setState((prevState) => ({showBlock: !prevState.showBlock}))}>Toggle Block</button>
        <br></br>
{/* 'MOUNTONENTER' --> usado para APENAS MONTAR COMPONENTS/elementos html ou JSX no DOM se __ AQUELA PROPRIEDADE/STATE DEFINIDA EM 'in={}' ESTIVER COMO true... (no caso, 'this.state.showBlock'...) /// ENTRETANTO, o 'mountOnEnter' e o 'unmountOnExit' __ VÃO QUEBRAR __ NOSSA ANIMAÇÃO, NESSE EXEMPLO NOSSO... ////PARA CONSERTAR ESSE PROBLEMA, NESE USE-CASE ESPECÍFICO, DEVEMOS TROCAR 'exited', naquele 'opacity: state === 'exited' ? 0 : 1', POR 'exiting'...*/}
          <Transition in={this.state.showBlock} 
          timeout={1000} 
          unmountOnExit
          onEnter={() => {console.log('onEnter')}} ///EIS O CÓDIGO EM QUESTÃO.
          onEntering={() => {console.log('onEntering')}}
          onEntered={() => {console.log('onEntered')}}
          onExit={() => {console.log('onExit')}}
          onExiting={() => {console.log('onExiting')}}
          onExited={() => {console.log('onExited')}}
          
          >
            {
              (state) => {return (     <div
                style={
                  {
                    backgroundColor: 'red',
                    width: 100,
                    height: 100,
                    margin: 'auto',
                    transition: 'opacity 1s ease-out',
                    // opacity: state === 'exited' ? 0 : 1
                    opacity: state === 'exiting' ? 0 : 1,
                  
            
                  }
                }
                  /> 
                  
                  )}
            }
    
            </Transition>

  {/* {this.state.modalIsOpen ?  */}
  
  {/* <Modal show={this.state.modalIsOpen} closed={this.closeModalHandler} /> */}

  {/* //  : null } */}
{/* 'mountOnEnter' É IMPORTANTE, POIS NÃO QUEREMOS QUE ESSE COMPONENT 'modal' FIQUE MONTADO NO NOSSO DOM TODO O TEMPO, E SIM APENAS __ QUANDO __ SUA ANIMAÇÃO TOCAR (por isso 'mount on enter', enter sendo o 'state' de 'entering'...) */}
    {/* 'unmountOnExit ___TAMBÉM É IMPORTANTE__, POIS NÃO QUEREMOS QUE O COMPONENT 'FIQUE' na página DEPOIS DA ANIMAÇÃO DE 'close' ter acabado; queremos que ELE REALMENTE SEJA REMOVIDO DO DOM quando isso acontecer.. */}
    
    {/* <Transition in={this.state.modalIsOpen} timeout={300} mountOnEnter unmountOnExit>
{(state) => {return (<Modal show={state} closed={this.closeModalHandler} />) }}
    </Transition>  
    ////OBS::: WRAPPAMOS 'Modal', lá em 'Modal.js', com ESSE COMPONENT 'Transition'... --> isso é a MESMA COISA que usar o 'Transition' wrappando o Modal aqui, em App.js, mas é bom pq deixa essa lógica toda lá em 'Modal.js', liberando um pouco de espaço em 'App.js'...*/}
                  {/* OBS::: e isso aí pede algumas alterações, como 'state' no prop 'show', que deve ser alterado para ficar 'this.state.modalIsOpen'... */}
                  {/* Também pede alterações lá no 'Transition' que wrappa o component 'Modal.js', pois lá vamos querer trocar o 'this.state.modalIsOpen' em 'in' por 'props.show'.... */}

      <Modal show={this.state.modalIsOpen} closed={this.closeModalHandler} />






  {this.state.modalIsOpen ? <Backdrop show={this.state.modalIsOpen} /> : null }
        <button
          className="Button"
          onClick={this.openModalHandler}
        >
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }





















}

export default App;
