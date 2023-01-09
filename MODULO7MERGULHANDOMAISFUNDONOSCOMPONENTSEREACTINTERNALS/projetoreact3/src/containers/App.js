import React, { Component } from 'react';
// import cockpit from '../components/Cockpit/Cockpit';
import Cockpit from '../components/Cockpit/Cockpit';


import classes from './App.module.css';
//import classes2 from './App.module.css';
//import Person from '../components/Persons/Person/Person';
import Persons from '../components/Persons/Persons'



import WithClass from '../hoc/WithClass';
import withClass from '../hoc/WithClass';


// import withClass from '../hoc/WithClass';



class App extends Component {



  // constructor(props) {  //////////////SINTAXE ANTIGA, SINTAXE ANTIGA QUE ANTES ERA USADA PARA DEFINIR/INICIALIZAR O STATE DE SEU CLASS-BASED COMPONENT.
  //   super(props);
  //   console.log('[App.js] constructor');
  //   this.state = { 
  //     persons: [
  //       { id: 'aspogashpog', name: 'Max', age: 28 },
  //       { id: '211251javja', name: 'Manu', age: 29 },
  //       { id: 'dasgzjpj', name: 'Stephanie', age: 26 }
  //     ],
  //     otherState: 'some other value', 
  //     showPersons: false
  //   }
  // }



  constructor(props) { // ''primeira etapa/método  do 'creation lifecycle' de um component  (ou da CRIAÇÃO de um component, basicamente)
    super(props);
    console.log('[App.js] constructor');
  }




  state = {         //também pode ser definido DENTRO do constructor (pq a sintaxe ''''state = {}''''' fora do constructor é A SINTAXE MAIS MODERNA, NEM SEMPRE SUPORTADA NOS PROJETOS)
    persons: [
      { id: 'aspogashpog', name: 'Max', age: 28 },
      { id: '211251javja', name: 'Manu', age: 29 },
      { id: 'dasgzjpj', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value', 
    showPersons: false,
    showCockpit: true,
    changeCounter: 0

  }



  static getDerivedStateFromProps(props, state) { //2a etapa/método do 'creation lifecycle' de um component ... //devemos sempre adicionar 'STATIC' no início desse método específico.
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }




  //  componentWillMount() { /////////APENAS VERSÕES ______vELHAS____ DO REACT O SUPORTAM... ///////DEPRECADO, OBSOLETO. NÃO USAR. Mesma coisa com componentWillUpdate() e componentWillReceiveProps(props);
  //    console.log('[App.js] componentWillMount');
  //  }






 

  switchNameHandler = (newName) => {
    console.log('Button was Clicked!'); 
    this.setState({  
      persons: [
        { name: newName, age: 28 },
      { name: 'Manu', age: 29 },
      { name: 'Stephanie', age: 22 }
    ]
    })
  }


togglePersonsHandler = () => {
  const doesShow = this.state.showPersons;
  this.setState({showPersons: !doesShow});
}




componentDidUpdate() {
  console.log('[App.js] componentDidUpdate');
}


shouldComponentUpdate(nextProps, nextState) {
  console.log('[App.js] shouldComponentUpdate');
  return true;
}






  nameChangedHandler = (event, id) => { 
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




   




    // this.setState({   persons: persons, changeCounter: this.state.changeCounter + 1}); ////////FORMA INCORRETA DE UPDATAR O STATE (incorreta pq estamos usando 'this.setState()' e passando O OBJETO state a ELE diretamente, na forma nua e crua, enquanto ESTAMOS UTILIZANDO um OLD __STATE__ (this.state.persons) para atualizar o counter ......... ------> NÓS NUNCA DEVEMOS FAZER ISSO; A FORMA '''SIMPLES'''' DE SETstate DEVE SEMPRE ___SER UTILIZADA APENAS COM CÓDIGOS DE SETSTATE ___qUE __ NÃO __ SE UTILIZAM DO OLD STATE PARA CONSTRUIR NOVOS DADOS/LÓGICA/UPDATAR O STATE/CONSTRUIR UM NOVO STATE... -----> visto em 'changeCounter'...)


    this.setState((prevState, props) => {

        return {
          persons: persons,
          changeCounter: prevState.changeCounter + 1 /////VERSÃO CORRETA de 'this.setState()' QUANDO ESTAMOS DEFININDO UM NOVO STATE A PARTIR DE DADOS DO 'OLD STATE' (visto no counter de 'changeCounter', que adiciona '1' ao VALOR do __VELHO COUNTER__... (que começa com 0))
        };




    })







    console.log(event.target.value);
  }















  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }








  


  render = () => {  ///3a etapa/método do 'creation lifecycle' de um COMPONENT.
    

    console.log('[App.js] render');




let persons = null;

// let btnClass = '';



// let cockpit = null





if (this.state.showPersons) {


  
  persons = 
      <Persons  //4 
        persons={this.state.persons}
        clicked={this.deletePersonHandler}
        changed={this.nameChangedHandler} 
      
      


      />


    
    
  

  // btnClass = classes2.red;



}





// const classes = [];


// if(this.state.persons.length <= 2) {

  
//   classes.push(classes2.red); 
// }




// if(this.state.persons.length <= 1) {
//   classes.push(classes2.bold);
// }









// if(this.state.showCockpit) {

//  cockpit =  <Cockpit //4
//   title={this.props.appTitle} //sim, ESSE CÓDIGO É VÁLIDO. ESTAMOS ACESSANDO UM __PROP__ QUE FOI REPASSADO POR 'index.js' A ESSE ELEMENTO 'APP', E QUE SERÁ AGORA REPASSADO AO COMPONENT 'Cockpit' POR MEIO DESSE PROP 'title'...
//   showPersons={this.state.showPersons}
//   // persons={this.state.persons}
//   personsLength={this.state.persons.length}
//   clicked={() => {this.togglePersonsHandler()}}
//   >
//   </Cockpit>
  
// }









return (
    //<WithClass classes={classes.App}
  <div className={classes.App}>
    <button onClick={() => {this.setState({showCockpit: false})}} >Remove Cockpit</button>
  {/* <Cockpit //4
  title={this.props.appTitle} //sim, ESSE CÓDIGO É VÁLIDO. ESTAMOS ACESSANDO UM __PROP__ QUE FOI REPASSADO POR 'index.js' A ESSE ELEMENTO 'APP', E QUE SERÁ AGORA REPASSADO AO COMPONENT 'Cockpit' POR MEIO DESSE PROP 'title'...
  showPersons={this.state.showPersons}
  persons={this.state.persons}
  clicked={() => {this.togglePersonsHandler()}}
  >
  </Cockpit> */}
  {/* {cockpit} */}
  {this.state.showCockpit ? (
          <Cockpit
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            personsLength={this.state.persons.length}
            clicked={this.togglePersonsHandler}
          />
        ) : null}
  {persons}
  </div>
  //</WithClass>
);













  





   }
 }





export default App;





// export default withClass(App, classes.App); //MANEIRA __ ALTERNATIVA___ DE CRIAR/UTILIZAR UM 'HOC' (higher order component).