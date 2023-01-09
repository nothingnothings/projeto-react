// import React from 'react';

// import AddPersonStyle from '../../components/AddPerson/AddPerson.module.css';

// const addPerson = (props) => {
//   return <div className={AddPersonStyle.AddPerson}>
//       <label for="name" >Name</label>
//       <input type="text" placeholder="Name"/>
//       <label for="age">Age</label>
//       <input type="number"  placeholder="Age"/>
//     <button onClick={props.personAdded}>Add Person</button>
//   </div>;
// };



// export default addPerson;




import React, { Component } from 'react';

import AddPersonStyle from '../../components/AddPerson/AddPerson.module.css';

class AddPerson extends Component {

state = {
    name: '',
    age: ''
}

nameChangedHandler = (event) => {
  this.setState(
    {
      name: event.target.value
    }
  )
}


ageChangedHandler = (event) => {
  this.setState(
    {
      age: event.target.value
    }
  )
}



 render() { return <div className={AddPersonStyle.AddPerson}>
      <label for="name" >Name</label>
      <input type="text" 
      placeholder="Name" 
      onChange={(event) => {this.nameChangedHandler(event)}}
      value={this.state.name} //isso aqui SETTA O 'TWO WAY BINDING' nesse nosso component...
      />
      <label for="age">Age</label>
      <input type="number" 
       placeholder="Age" 
       onChange={(event) => {this.ageChangedHandler(event)}}
       value={this.state.age}
       />
    <button onClick={() => {this.props.personAdded(this.state.name, this.state.age)}}//EXEMPLO DE COMO USAR 'REACT NORMAL' (state tradicional, feito seu MANAGE DE DENTRO DO COMPONENT EM QUE ESSE STATE EXISTE) COM O 'REACT REDUX' (com o STATE de REDUX, aquele state GLOBAL DO REDUX)... -----> aqui, no caso, vamos usar essa referência a 'personAdded' PARA __PASSAR __ AS INFORMAÇÕES RELATIVAS AO STATE LOCAL DE 'AddPerson', aquelas propriedades 'this.state.name' e 'this.state.age', NA DIREÇÃO DO NOSSO STATE GLOBAL REDUX, justamente por meio da REFERÊNCIA A ESSA ACTION DE 'personAdded', que é uma REPRESENTAÇÃO DA ACTION 'onPersonAdded', lá em 'Persons'...
    > 
      Add Person</button> 
  </div>;
 }
}



export default AddPerson;