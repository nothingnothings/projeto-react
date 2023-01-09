import React, { Component } from 'react';
// import React, { useState } from 'react'; /////////////SE VOCÊ IMPORTAR o 'reacthooks' (esse 'useState'), você NÃO DEVE IMPORTAR O 'Component', o component será inútil... E VICE-VERSA (se você importar o Component, não deverá importar o useState...) --> isso é pq SE NÓS IMPORTARMOS O 'useState', ESTAREMOS USANDO/VAMOS UTILIZAR O 'REACTHOOKS', que é algo que AFASTA A NECESSIDADE DE USO DE 'class-based components', que são react COMPONENTS QUE NECESSITAM Do objeto 'Component' para funcionar...
// import './App.css';
import classes2 from './App.module.css';
import Person from './Person/Person';


//import Radium from 'radium';
//import { StyleRoot } from 'radium'; ///////////////NECESSÁRIO PARA CONSEGUIR USAR MEDIA QUERIES DINAMICAMENTE/DEFINIR MEDIA QUERIES DENTRO DE INLINE STYLES/COM INLINE STYLES, com a ajuda do RADIUM (esse é um objeto do RADIUM. Devemos wrappar 'StyleRoot' em volta do nosso aplicativo para que MEDIA QUERIES DINÂMICOS/INLINE STILIZADOS E __ANIMAÇÕES COM KEYFRAMES__ FUNCIONEM).

//import './Person/Person.css';  //(podemos tanto importar esse arquivo .css AQUI, como em 'Person.js'... -----> o professor importou em 'Person.js', mas podemos importar aqui, e os efeitos ainda serão sentidos na página, os estilos ainda serão aplicados...)



class App extends Component {
  state = { ///////MUITO IMPORTANTE.
    persons: [
      { id: 'aspogashpog', name: 'Max', age: 28 },
      { id: '211251javja', name: 'Manu', age: 29 },
      { id: 'dasgzjpj', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value', /////ISSO É UM EXEMPLO. ESSA PROPRIEDADE NÃO SERÁ AFETADA PELO NOSSO NOVO STATE DEFINIDO POR 'setState()', pois naquele objeto ({}) que passamos como argumento ao 'setState()', nós APENAS REFERENCIAMOS O ARRAY DE 'persons', e não falamos nada sobre essa propriedade 'otherState'...
    showPersons: false
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


togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}





  // nameChangedHandler = (event) => {  ////substituído por 'deletePersonHandler'....

  //   this.setState({  
  //     persons: [
  //       { name: 'Max', age: 28 }, 
  //     { name: event.target.value, age: 29 },
  //     { name: 'Stephanie', age: 22 }
  //   ]
  //   });

  //   console.log(event.target.value);
  // }







  nameChangedHandler = (event, id) => {  ////substituído por 'deletePersonHandler'....
    const personIndex = this.state.persons.findIndex(
      p => {
        return p.id === id;
      }
    );



    const person = {
      
      
      ...this.state.persons[personIndex]
    }


    person.name = event.target.value;


    const persons = [...this.state.persons];



    persons[personIndex] = person;




    /*cons person = Object.assign({}, this.state.persons[personIndex]); */ //sintaxe alternativa para fazer a mesma coisa que aquele '...this.state.persons' faz...




    this.setState({  
      persons: persons /*[ 
        { name: 'Max', age: 28 }, 
      { name: event.target.value, age: 29 },
      { name: 'Stephanie', age: 22 }
    ]*/
     
 
    });

    console.log(event.target.value);
  }















  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }








  


  render = () => {
    

    // const style = {
    //   backgroundColor: 'green', 
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   // ':hover': { //sintaxe do RADIUM. Usada para conseguir definir PSEUDOSELETORES E MEDIAQUERIES dentro de 'inline styles'/com inline styles....
    //   //   backgroundColor: 'lightgreen',
    //   //   color: 'black'
    //   // }
      
    // }



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



    // return (
    //   <div className="App">
    //     <h1>Hi, I'm a React App</h1>
    //     <p>This is really working!</p>
    //     <button 
    //     style={style}
    //     onClick={this.togglePersonsHandler}>Show/Hide Persons</button> 
    //     {

    //       this.state.showPersons 
          
    //       ?

    //       <div>
    //     <Person 
    //     name={this.state.persons[0].name}
    //     age={this.state.persons[0].age} />
    //     <Person 
    //     name={this.state.persons[1].name} 
    //     age={this.state.persons[1].age}
    //     changed={this.nameChangedHandler} 
    //     click={this.switchNameHandler.bind( this, 'Max!' )}>  
    //     My Hobbies: Racing</Person>  
    //     <Person 
    //     name={this.state.persons[2].name} 
    //     age={this.state.persons[2].age}/>
    //     </div>

    //     :
        
    //         null
    //     }
 
    //   </div>
    // );



    
//ali em cima OBSERVAMOS UMA TERNARY EXPRESSION INSERIDA NO MEIO DE UM CÓDIGO JSX... (sim, isso é possível.) -------> MAS É MEIO SUBÓPTIMO. VER O APPROACH QUE ESTÁ LOGO ABAIXO, QUE É MELHOR DO QUE ESSE APPROACH DAS TERNARY EXPRESSIOnS (Pq as ternary expressions SÃO RUINS DE LER EM APPS MAIORES...).




let persons = null;

let btnClass = '';













if (this.state.showPersons) {


  
  persons = (
    <div>
      {this.state.persons.map( (person, index) => {
        return <Person 
        click={() => {this.deletePersonHandler(index)}}
        name={person.name} 
        age={person.age} 
        key={person.id}
        changed={(event) => this.nameChangedHandler(event, person.id)}/>
      })}



    </div>
  );

  btnClass = classes2.red;



// key --> PROPRIEDADE QUE SEMPRE DEVEMOS ADICIONAR/COLOCAR NOS NOSSOS COMPONENTS QUANDO ESTAMOS RENDERIZANDO LISTAS DE ELEMENTOS.
// 
// 
// 
// 


  // persons = (<div>
  // <Person 
  // name={this.state.persons[0].name}
  // age={this.state.persons[0].age} />
  // <Person 
  // name={this.state.persons[1].name} 
  // age={this.state.persons[1].age}
  // changed={this.nameChangedHandler} 
  // click={this.switchNameHandler.bind( this, 'Max!' )}>  
  // My Hobbies: Racing</Person>  
  // <Person 
  // name={this.state.persons[2].name} 
  // age={this.state.persons[2].age}/>



  // </div>)
  // style.backgroundColor = 'red';   //////////CÓDIGO QUE, junto de 'const style = ...', FAZ PARTE DOS NOSSOS STYLING DINÂMICOS...
  // style[':hover'] = {
  //   color: 'black',
  //   backgroundColor: 'pink'
  // }
}




// let classes = ['red', 'bold'].join(' ');


const classes = [];


if(this.state.persons.length <= 2) {

  //classes.push('red');
  classes.push(classes2.red); ////versão do CSS MODULES... É superior (teoricamente).
}




if(this.state.persons.length <= 1) {
  //classes.push('bold'); //classes = ['red', 'bold'];
  classes.push(classes2.bold);
}




return (


 /*<StyleRoot> */
  // <div className="App">
  <div className={classes2.App}>  
    <h1>Hi, I'm a React App</h1>
    <p className={classes.join(' ')}>This is really working!</p>
    <button 
    //style={style}
    className={btnClass}
    onClick={this.togglePersonsHandler}>Show/Hide Persons</button> 
    {persons}

   

  </div>
  /*</StyleRoot> */
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






















// export default App; //sem Radium.


//export default Radium(App); //com o Radium (nos deixa adicionar PSEUDOSELETORES E MEDIA QUERIES aos nossos INLINE STYLES).



// export default app;



export default App;