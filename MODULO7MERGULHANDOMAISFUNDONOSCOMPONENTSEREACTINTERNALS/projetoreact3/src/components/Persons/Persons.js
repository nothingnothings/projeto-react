// import React from 'react';


// import React, { Component } from 'react';


import React, { PureComponent } from 'react';
import Person from './Person/Person';





// const persons = (props) =>  {
  

//   console.log('[Persons.js] rendering...');
//   return props.persons.map( (person, index) => {
        
      
      
//         return (<Person 
//         click={() => props.clicked(index)}
//         key={person.id}
//         name={person.name} 
//         age={person.age} 
//         changed={(event) => props.changed(event, person.id)}/>  
//         )
    
//       }



// );

//     }





// class Persons extends Component {


//   // static getDerivedStateFromProps(props, state) { /////1a etapa/MÉTODO no 'update lifecycle' DE UM component (class-based component)... //1//// E VOCÊ DEVE SEMPRE ADICIONAR 'static' ao início desse método, senão ele não funciona. //NÃO HÁ MOTIVO PARA TER ESTE MÉTODO NO SEU CÓDIGO SE VOCÊ NÃO FOR O UTILIZAR, AINDA MENOS SE VOCÊ NÃO TIVER DEFINIDO UM STATE NO SEU COMPONENT ('unitialized state')...
//   //   console.log('[Persons.js] getDerivedStateFromProps');
//   //   return state; ///////////RETORNA UM OBJETO __VAZIO__, pois aqui nesse CLASS-BASED component NÓS __AINDA ___ NÃO TEMOS NENHUM STATE...
//   // }



//   // shouldComponentUpdate(nextProps, nextState) { ////////2a ETAPA/MÉTODO no 'update lifecycle' de um component (class-based component). TRUE --> CONTINUA O UPDATE NORMAL DESSE NOSSO COMPONENT 'Persons'... .  FALSE ----> CANCELA O UPDATE DESSE NOSSO COMPONENT, E O UPDATE DE TODOS OS __CHILD COMPONENTS___ DELE...
//   //   console.log('[Persons.js] shouldComponentUpdate');
//   //   return true;  /////SEMPRE DEVEMOS PASSAR ESSE RETURN, NÃO INTERESSA SE COLOCAMOS TRUE OU FALSE, SEMPRE DEVEMOS RETORNAR UM VALOR; SE NÃO FIZERMOS ISSO, ESSE MÉTODO ESTARÁ INVÁLIDO. 
//   // } //'return true' ---->  vai fazer com que nosso component CONTINUE ATUALIZANDO/seja atualizado.





// shouldComponentUpdate(nextProps, nextState) { ////////2a ETAPA/MÉTODO no 'update lifecycle' de um component (class-based component). TRUE --> CONTINUA O UPDATE NORMAL DESSE NOSSO COMPONENT 'Persons'... .  FALSE ----> CANCELA O UPDATE DESSE NOSSO COMPONENT, E O UPDATE DE TODOS OS __CHILD COMPONENTS___ DELE...
//     console.log('[Persons.js] shouldComponentUpdate');

//     if (nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked) {
//       return true; 
//     } else {
//       return false;
//     }
    
    
// }







//     getSnapshotBeforeUpdate(prevProps, prevState) {////////3a ETAPA/MÉTODO no 'update lifecycle' de um component (class-based component). 
//       console.log('[Persons.js] getSnapshotBeforeUpdate');  ///////GETSNAPSHOTBEFOREUPDATE É USADO PARA 'last-minute DOM oprations', como o GET da SCROLLING POSITION DO USUÁRIO anteriormente a um UPDATE dos nossos components...
//     // return null;
//     return { message: 'Snapshot'};
//     }







//   render() { ////////4a ETAPA/MÉTODO no 'update lifecycle' de um component (class-based component). 
//     console.log('[Persons.js] rendering...');
//     return (
//       this.props.persons.map((person, index) => {
            
//        return <Person 
//         click={() => this.props.clicked(index)}
//         key={person.id}
//         name={person.name} 
//         age={person.age} 
//         changed={(event) => this.props.changed(event, person.id)}/>  
          
//     }
  
//       )
//     )
//     }







    

// componentDidUpdate(prevProps, prevState, snapshot) {  ////////5a ETAPA/MÉTODO no 'update lifecycle' de um component (class-based component). É EXECUTADO DEPOIS DO MÉTODO 'RENDER()', e DEPOIS DO RENDER DE TODOS OS CHILD COMPONENTS RENDERIZADOS POR ELE... (e que terão seu PRÓPRIO UPDATE LIFECYCLE, iniciando em sua própria etapa/método 'getDerivedStateFromProps()')
//   console.log('[Persons.js] componentDidUpdate');
//   console.log(snapshot);
// } /////componentDidUpdate --> é A ÚLTIMA ETAPA/MÉTODO NO CICLO DE UPDATE DE UM COMPONENT....


 




//   componentWillUnmount() {
//     console.log('[Persons.js] componentWillunMount');
//   }









//   }












class Persons extends PureComponent {  ///isso aqui IMPLICITAMENTE adiciona um método/hook 'shouldComponentUpdate()' COM CHECKS (if) DE TODOS OS PROPS DESSE COMPONENT EM QUE VOCÊ ESCREVEU 'extends PureComponent'...


  // static getDerivedStateFromProps(props, state) { /////1a etapa/MÉTODO no 'update lifecycle' DE UM component (class-based component)... //1//// E VOCÊ DEVE SEMPRE ADICIONAR 'static' ao início desse método, senão ele não funciona. //NÃO HÁ MOTIVO PARA TER ESTE MÉTODO NO SEU CÓDIGO SE VOCÊ NÃO FOR O UTILIZAR, AINDA MENOS SE VOCÊ NÃO TIVER DEFINIDO UM STATE NO SEU COMPONENT ('unitialized state')...
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state; ///////////RETORNA UM OBJETO __VAZIO__, pois aqui nesse CLASS-BASED component NÓS __AINDA ___ NÃO TEMOS NENHUM STATE...
  // }



  // shouldComponentUpdate(nextProps, nextState) { ////////2a ETAPA/MÉTODO no 'update lifecycle' de um component (class-based component). TRUE --> CONTINUA O UPDATE NORMAL DESSE NOSSO COMPONENT 'Persons'... .  FALSE ----> CANCELA O UPDATE DESSE NOSSO COMPONENT, E O UPDATE DE TODOS OS __CHILD COMPONENTS___ DELE...
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   return true;  /////SEMPRE DEVEMOS PASSAR ESSE RETURN, NÃO INTERESSA SE COLOCAMOS TRUE OU FALSE, SEMPRE DEVEMOS RETORNAR UM VALOR; SE NÃO FIZERMOS ISSO, ESSE MÉTODO ESTARÁ INVÁLIDO. 
  // } //'return true' ---->  vai fazer com que nosso component CONTINUE ATUALIZANDO/seja atualizado.




///////ESSE MÉTODO JÁ VEM 'OUT OF THE BOX' com o 'PureComponent', ele já escreve implicitamente um 'shouldComponentUpdate' com CHECKS de TODOS OS PROPS do nosso component em que colocamos 'extends PureComponent'...
// shouldComponentUpdate(nextProps, nextState) { ////////2a ETAPA/MÉTODO no 'update lifecycle' de um component (class-based component). TRUE --> CONTINUA O UPDATE NORMAL DESSE NOSSO COMPONENT 'Persons'... .  FALSE ----> CANCELA O UPDATE DESSE NOSSO COMPONENT, E O UPDATE DE TODOS OS __CHILD COMPONENTS___ DELE...
//     console.log('[Persons.js] shouldComponentUpdate');

//     if (nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked) {  //////USAR 'PureComponent' em vez de escrever esses if checks imensos CHECANDO POR TODOS OS PROPS DE NOSSO COMPONENT (o pureComponent já faz isso por nós, sem escrever tudo isso.)
//       return true; 
//     } else {
//       return false;
//     }
    
    
// }







    getSnapshotBeforeUpdate(prevProps, prevState) {////////3a ETAPA/MÉTODO no 'update lifecycle' de um component (class-based component). 
      console.log('[Persons.js] getSnapshotBeforeUpdate');  ///////GETSNAPSHOTBEFOREUPDATE É USADO PARA 'last-minute DOM oprations', como o GET da SCROLLING POSITION DO USUÁRIO anteriormente a um UPDATE dos nossos components...
    // return null;
    return { message: 'Snapshot'};
    }







  render() { ////////4a ETAPA/MÉTODO no 'update lifecycle' de um component (class-based component). 
    console.log('[Persons.js] rendering...');
    return (
      this.props.persons.map((person, index) => {
            
       return <Person 
        click={() => this.props.clicked(index)}
        key={person.id}
        name={person.name} 
        age={person.age} 
        changed={(event) => this.props.changed(event, person.id)}/>  
          
    }
  
      )
    )
    }







    

componentDidUpdate(prevProps, prevState, snapshot) {  ////////5a ETAPA/MÉTODO no 'update lifecycle' de um component (class-based component). É EXECUTADO DEPOIS DO MÉTODO 'RENDER()', e DEPOIS DO RENDER DE TODOS OS CHILD COMPONENTS RENDERIZADOS POR ELE... (e que terão seu PRÓPRIO UPDATE LIFECYCLE, iniciando em sua própria etapa/método 'getDerivedStateFromProps()')
  console.log('[Persons.js] componentDidUpdate');
  console.log(snapshot);
} /////componentDidUpdate --> é A ÚLTIMA ETAPA/MÉTODO NO CICLO DE UPDATE DE UM COMPONENT....


 




  componentWillUnmount() {
    console.log('[Persons.js] componentWillunMount');
  }









  }


































  
 






export default Persons;