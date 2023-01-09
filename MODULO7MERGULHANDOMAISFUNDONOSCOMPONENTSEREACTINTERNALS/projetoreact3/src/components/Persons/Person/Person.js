// import React from 'react';

import React, { Component } from 'react';

import Pessoa from './Person.module.css';





import Aux from '../../../hoc/Auxiliary.js';
import withClass from '../../../hoc/WithClass';

// const person = (props) => {

//   console.log('[Person.js] rendering...');
//   return (

//   <div className={Pessoa.Person}>
//   <p onClick={props.click}>Hi, I'm {props.name} and I am {props.age} years old!</p>
//   <p>{props.children}</p>
//   <input type="text" onChange={props.changed} value={props.name}/>
//   </div>

//   )
// };

// class Person extends Component {
//   render() {
//     console.log('[Person.js] rendering...');
//     return (
//       <div className={Pessoa.Person}>
//         <p onClick={this.props.click}>
//           Hi, I'm {this.props.name} and I am {this.props.age} years old!
//         </p>
//         <p>{this.props.children}</p>
//         <input
//           type="text"
//           onChange={this.props.changed}
//           value={this.props.name}
//         />
//       </div>
//     );
//   }
// }



// class Person extends Component {
//   render() {
//     console.log('[Person.js] rendering...');
//     return (
//         [ ///////////////EIS AQUI UM JEITO (O SEGUNDO APPROACH/JEITO) DE FAZER O RETURN DE ELEMENTOS 'JSX/HTML' ADJACENTES UM AO OUTRO... POR MEIO DA SINTAXE DE UM __ARRAY_ ('[]') E ENTÃO VÍRGULAS SEPARANDO CADA UM DOS ELEMENTOS... --> o ARRAY AINDA É CONTADO COMO __ELEMENTO ÚNICO/SINGULAR__, por isso seu return não resulta em CONFLITOS com a sintaxe do react...
//         <p 
//         key="i1"
//         onClick={this.props.click}>
//           Hi, I'm {this.props.name} and I am {this.props.age} years old!
//         </p>,

//         <p
//         key="i2">{this.props.children}</p>,

//         <input
//           key="i3 "
//           type="text"
//           onChange={this.props.changed}
//           value={this.props.name}
//         />
//         ]
//     );
//   }
// }







class Person extends Component {
  render() {
    console.log('[Person.js] rendering...');
    return (
       ///////TERCEIRO '''APPROACH''' PARA RENDERIZAR MÚLTIPLOS ELEMENTOS HTML/JSX ADJACENTES UM AO OUTRO... você usa esse 'empty wrapper component' de nome 'aux' PARA ___ OUTPUTTAR TODO O CONTEÚDO ENFIADO NO MEIO DE SUAS OPENING E CLOSING TAGS (que são os seus 'props.children', basicamente.... deve-se examinar o código de 'Auxiliary.js'...)
        <Aux>
        <p 
        key="i1"
        onClick={this.props.click}>
          Hi, I'm {this.props.name} and I am {this.props.age} years old!
        </p>,

        <p
        key="i2">{this.props.children}</p>,

        <input
          key="i3 "
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }
}


















// export default Person;

export default withClass(Person, Pessoa.Person);


// export default withClass(Person, Pessoa.Person);