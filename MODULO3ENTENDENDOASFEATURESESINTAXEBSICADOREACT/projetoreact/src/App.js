import React, { Component } from 'react';
// import React, { useState } from 'react'; /////////////SE VOCÊ IMPORTAR o 'reacthooks' (esse 'useState'), você NÃO DEVE IMPORTAR O 'Component', o component será inútil... E VICE-VERSA (se você importar o Component, não deverá importar o useState...) --> isso é pq SE NÓS IMPORTARMOS O 'useState', ESTAREMOS USANDO/VAMOS UTILIZAR O 'REACTHOOKS', que é algo que AFASTA A NECESSIDADE DE USO DE 'class-based components', que são react COMPONENTS QUE NECESSITAM Do objeto 'Component' para funcionar...
import './App.css';
import Person from './Person/Person';

//import './Person/Person.css';  //(podemos tanto importar esse arquivo .css AQUI, como em 'Person.js'... -----> o professor importou em 'Person.js', mas podemos importar aqui, e os efeitos ainda serão sentidos na página, os estilos ainda serão aplicados...)




class App extends Component {
  state = { ///////MUITO IMPORTANTE.
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value' /////ISSO É UM EXEMPLO. ESSA PROPRIEDADE NÃO SERÁ AFETADA PELO NOSSO NOVO STATE DEFINIDO POR 'setState()', pois naquele objeto ({}) que passamos como argumento ao 'setState()', nós APENAS REFERENCIAMOS O ARRAY DE 'persons', e não falamos nada sobre essa propriedade 'otherState'...
  }


  switchNameHandler = (newName) => {
    console.log('Button was Clicked!'); ///teste para ver se o BOTÃO FUNCIONA, se esse CÓDIGO REALMENTE É EXECUTADO A PARTIR DE UM EVENTO 'onClick'...
    //DON'T DO THIS: this.state.persons[0].name = 'Maximillian';  ///////// NUNCA DEVEMOS USAR ESSAS MUDANÇAS DIRETAS DE 'STATE'..... --> não devemos fazer isso PQ O REACT __NÃO ADMITE __ MUDANÇAS DIRETAS DE STATE... --> DEVEMOS SEMPRE USAR 'setState' para realizar mudanças no nosso state....
    this.setState({  //////////ISSO UPDATA O NOSSO STATE, O QUE FAZ COM QUE O __REACT__ RE-RENDERIZE/UPDATE  os elementos afetados pela troca de 'state'...
      persons: [
        { name: newName, age: 28 }, ////ISSO VAI ACABAR UPDATANDO O 'state' em relação a esse objeto, pois 'Max', do primeiro state, acabou sendo mudado para 'Maximillian'.... --> e ele sempre será mudado para 'Maximillian' quando o botão for pressionado, pois esse é o fluxo de nosso código.
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 22 }
    ]
    })
  }


  nameChangedHandler = (event) => {


    this.setState({  
      persons: [
        { name: 'Max', age: 28 }, 
      { name: event.target.value, age: 29 },
      { name: 'Stephanie', age: 22 }
    ]
    });

    console.log(event.target.value);
  }





  render = () => {
    

    const style = {
      backgroundColor: 'white', 
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }



    /*return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );*/

    // return (
    //   <div className="App">
    //     <h1>Hi, I'm a React App</h1>
    //     <p>This is really working!</p>
    //     <button onClick={this.switchNameHandler}>Switch Name</button>
    //     {/*<Person name="Max" age="28" />
    //     <Person name="Manu" age="29">My Hobbies: Racing</Person>
    // <Person name="Stephanie" age="30"/> */}  {/* é assim que colocamos comentários em código jsx */}
    //     <Person name={Object.values(this.state.persons[0])[0]} age={Object.values(this.state.persons[0])[1]} />
    //     <Person name={Object.values(this.state.persons[1])[0]} age={Object.values(this.state.persons[1])[1]}>My Hobbies: Racing</Person>
    //     <Person name={Object.values(this.state.persons[2])[0]} age={Object.values(this.state.persons[2])[1]}/>

    
    //   </div>
    // );



    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        <button 
        style={style}
        onClick={this.switchNameHandler.bind(this, 'Maximillian')}>Switch Name</button> {/*ESSA É A PRIMEIRA MANEIRA ('.bind()' de this e do argumento que você quer passar) DE PASSAR UM PARÂMETRO/ARGUMENTO a uma FUNÇÃO QUE SE ENCONTRA EM UM OUTRO LUGAR... --> passamos o método 'switchNameHandler' como ARGUMENTO 'props' lá no component 'Person'... ---> fazemos isso para então podermos o utilizar lá... */}
        <Person 
        name={this.state.persons[0].name}
        age={this.state.persons[0].age} />
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        changed={this.nameChangedHandler} 
        click={() => this.switchNameHandler('MAXIMILLIAN!!!')}> {/*ESSA É A SEGUNDA MANEIRA DE PASSAR UM PARÂMETRO/ARGUMENTO A UMA FUNÇÃO QUE SE ENCONTRA EM OUTRO LUGAR...  ---> essa versão usa UMA ARROW FUNCTION e 'this.suafunçãohandler()', tudo em uma única linha, dentro do function body da arrow function*/}
          My Hobbies: Racing</Person>  
        {/* aqui vemos o uso de uma gambiarra COMUM com MÉTODOS e propriedades, em que passamos essa propriedade ao nosso component, ao 'props' de nosso component, onde essa propriedade 'click' é utilizada...  */}
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}/>
      </div>
    );



    





  


        //return React.createElement('div', null, 'h1', 'I\'m a React App!!!'); essa sintaxe NÃO FUNCIONA. Ver sintaxe logo abaixo, que é a que funciona.


        //return React.createElement('div', { className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
        
   




   }
 }



//////////ESSA É A VERSÃO 'FUNCTIONAL COMPONENT' de nossO 'CLASS-BASED COMPONENT' de App, definido mais acima... ---> essa versão usa A FEATURE DOS 'REACT HOOKS'.... ---> react hooks ---> NOS DEIXA UPDATAR STATES sem usar 'class based components'...
// const app = (props) => {
//   const [personsState, setPersonsState] = useState(
//     {
//       persons: [
//         { name: 'Max', age: 28 },
//         { name: 'Manu', age: 29 },
//         { name: 'Stephanie', age: 30 }
//       ],
//       otherState: 'some other value'
//     }
//   );




//   const switchNameHandler = () => {
//     setPersonsState(
//       {
//         persons: [
//           { name: 'Maximillian', age: 28 },
//           { name: 'Manu', age: 29 },
//           { name: 'Stephanie', age: 22 }
//         ]
//       }
//     )
//   }



//  const [otherState, setOtherState] = useState(
//     {otherState: 'some other value'} ///isso funciona. Podemos fazer múltiplos calls de 'setState()' em FUNCTIONAL REACT COMPONENTS...
  
//   );

//  const exemploTexto = useState(
//     'string que mostra que esse negócio funciona COM SIMPLES STRINGS'
//   )

//   const exemploNumero = useState(
//     120854015
//   )




// console.log(personsState, otherState);




// console.log(exemploTexto, exemploNumero);

  

//     // useState('some other value'); //////ISSO TAMBÉM FUNCIONA. Não somos obrigados a passar UM OBJETO como novo state de nosso aplicativo... podemos passar também umA SIMPLES STRING...


  
//   return ( 
//     <div className="App">
//       <h1>Hi, I'm a React App</h1>
//       <p>This is really working!</p>
//       <button onClick={switchNameHandler}>Switch Name</button>
//       {/*<Person name="Max" age="28" />
//       <Person name="Manu" age="29">My Hobbies: Racing</Person>
//   <Person name="Stephanie" age="30"/> */}  {/* é assim que colocamos comentários em código jsx */}
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
//       <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>

  
//     </div>
//   );






// }






















export default App;


// export default app;