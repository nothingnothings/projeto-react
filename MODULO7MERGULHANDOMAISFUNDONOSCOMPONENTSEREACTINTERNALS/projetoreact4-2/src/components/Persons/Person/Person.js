// import React from 'react';

import React, { Component } from 'react';

import Pessoa from './Person.module.css';

import AuthContext from '../../../context/auth-context'

import PropTypes from 'proptypes';

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
  constructor(props) {
    ///sempre devemos passar 'props'...
    super(props); ///sempre devemos chamar 'super(props)' NO INÍCIO DO NOSSO CONSTRUCTOR...
    this.inputProperty = React.createRef(); /////////////////USADO COM O SEGUNDO APPROACH de USO de 'ref'... (APPROACH MODERNO... ver lição 'usando refs'...)
  }


  static contextType = AuthContext;



  componentDidMount() {
    // this.inputProperty.focus();//// USADO COM O PRIMEIRO APPROACH de USO de 'ref'... (APPROACH MODERNO... ver lição 'usando refs'...)
    this.inputProperty.current.focus(); /////// SIM, O MÉTODO 'current' ___PRECISA___ SER CHAMADO ANTES DE SER POSSÍVEL USAR AQUELA 'REFERENCE' CRIADA LÁ NO CONSTRUCTOR DE 'Person'... ////////ISSO AQUI FAZ PARTE Do SEGUNDO APPROACH de USO de 'ref'... (APPROACH MODERNO... ver lição 'usando refs'...)////////
    console.log(this.context.authenticated); ////////SIM, ESSE CÓDIGO FUNCIONA. AQUI, NÓS USAMOS O APPROACH 'ELEGANTE' DE USAR A 'CONTEXT API'.... ------> LEMBRE-SE: esse uso de 'this.context' __DEPENDE__ DE NÓS escrevermos 'static contextType = AuthContext'  MAIS ACIMA.... (pq é nesse código aí que NÓS EFETIVAMENTE VINCULAMOS O CONTEXTO DO 'AuthContext' à CLASSE/COMPONENT de 'Person'...)
  }

  render() {
    console.log('[Person.js] rendering...');

    return (
      ///////TERCEIRO '''APPROACH''' PARA RENDERIZAR MÚLTIPLOS ELEMENTOS HTML/JSX ADJACENTES UM AO OUTRO... você usa esse 'empty wrapper component' de nome 'aux' PARA ___ OUTPUTTAR TODO O CONTEÚDO ENFIADO NO MEIO DE SUAS OPENING E CLOSING TAGS (que são os seus 'props.children', basicamente.... deve-se examinar o código de 'Auxiliary.js'...)

      <Aux>
        {/* <AuthContext.Consumer> usado com O MÉTODO TRADICIONAL DE ADICIONAR 'CONTEXT' */}
        {/* { (context) => {this.props.isAuth ? ( <p className={Pessoa.green}>VALIDATION SUCCEEDED</p> ) : ( <p className={Pessoa.red}>VALIDATION INCOMPLETE</p> )} }  ///////////CÓDIGO SUBSTITUÍDO. PROP DE 'this.props.isAuth' FOI SUBSTITUÍDO por 'context.authenticated'... */}
        {/* {context => context.authenticated ? ( <p className={Pessoa.green}>VALIDATION SUCCEEDED</p> ) : ( <p className={Pessoa.red}>VALIDATION INCOMPLETE</p> ) }  APPROACH __TRADICIONAL__ DE USO DO 'CONTEXT'... --> precisa de todas aquelas etapas lá. O APPROACH DE BAIXO ('this.context') É O APPROACH MAIS MODERNO, O APPROACH QUE TE DEIXA USAR 'CONTEXT' EM LUGARES QUE NÃO SÃO OBRIGATORIAMENTE O 'RETURN STATEMENT' DO RENDER DO SEU COMPONENT --> ISSO SIGNIFICA QUE VOCÊ PODE USAR CONTEXT EM LUGARES COMO 'componentDidMount()', com esse approach... --> entretanto, esse approach DEPENDE DA ESCRITA DE 'static contextType = AuthContext;' dentro do seu component...*/}
        {this.context.authenticated ? ( <p className={Pessoa.green}>VALIDATION SUCCEEDED</p> ) : ( <p className={Pessoa.red}>VALIDATION INCOMPLETE</p> ) } 
        {/* </AuthContext.Consumer> */}

        <p key="i1" onClick={this.props.click}>
          Hi, I'm {this.props.name} and I am {this.props.age} years old!
        </p>

        <p key="i2">{this.props.children}</p>

        <input
          key="i3 "
          // ref={(inputElement) => {inputElement.focus();}} /////////ISSO NÃO FUNCIONARÁ. 'cannot read FOCUS property of NULL'...
          // ref={(inputElement) => {this.inputProperty = inputElement}} //// 1o APPROACH para  o USO DE 'ref'... AQUI, É USADO PARA O ESTILO 'FOCUS' ESPECIFICADO AO INPUT ELEMENT DO COMPONENT 'PERSON' EM QUE O USUÁRIO REALMENTE DIGITARÁ/ESTARÁ DIGITANDO...
          ref={this.inputProperty}
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </Aux>
    );
  }



  componentDidUpdate() {
    console.log(this.context.authenticated);
  }
}



Person.propTypes = {
  ///////EXEMPLO DE UTILIZAÇÃO DE 'PROPTYPES', UMA FEATURE __USADA DURANTE ___ 'DEVMODE' __ DE UM APLICATIVO; É UMA FEATURE ___ QUE VAI SEMPRE ALERTAR/GRITAR QUANDO __ UMA PESSOA/IDIOTA __ USAR UM PROP COM NOME ERRADO (PROP QUE NÃO EXISTE) OU PASSAR UM VALOR DE DATATYPE ___INVÁLIDO/NÃO SUPORTADO__ NO PROP.. (ex: 'click' ---> É um __PROP__ VÁLIDO Que só FUNCIONA__ quando passa UM VALOR QUE TENHA UM DATATYPE DE 'FUNCTION'...)
  click: PropTypes.func,
  age: PropTypes.number,
  name: PropTypes.string,
  changed: PropTypes.func,
}; ////////////TODOS OS DATATYPES PODEM SER DEFINIDOS AQUI (Até booleans e arrays, por exemplo).... ----> VOCê ATÉ PODE DEFINIR PROPTYPES MAIS AVANÇADOS, como 'hey, esse proptype deverá ser de uma FUNÇÃO QUE ACEITA/EXIGE ARGUMENTOS X E Y e retorna coisa Z...' ---> você pode ser bem avançado, aqui...

// export default Person;

export default withClass(Person, Pessoa.Person);

// export default withClass(Person, Pessoa.Person);
