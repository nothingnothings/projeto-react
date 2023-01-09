import React from 'react'; ////ISSO É NECESSÁRIO... mas o 'Component' não é necessário aqui, pois NÃO CRÍAMOS/UTILIZAMOS NENHUMA 'CLASSE' AQUI, QUE SÃO AS FIGURAS DO JAVASCRIPT QUE REALMENTE PRECISAM DE 'Component' PARA FUNCIONAREM COM O REACT...


import Pessoa from './Person.module.css';


//import Radium from 'radium';


const person = (props) => { //'state' teoricamente não pode ser usado nessa espécie de definição de react component... (só podemos usar se utilizarmos o approach do 'react hooks'...)
  //return <p>Hi, I'm a Person and I am {Math.floor(Math.random() * 30)} years old!</p>; //////////OBS: USAMOS '{}' em volta do CÓDIGO QUE QUEREMOS QUE SEJA DINÂMICO/QUEREMOS QUE SEJA ___eXECUTADO __ COMO CÓDIGO JAVASCRIPT NORMAL, E NÃO EXECUTADO/OUTPUTTADO COMO TEXTO NORMAL... (como 'strings'...).
  
  // const style = {
  //   backgroundColor: 'red'
  // }
  


  /*const style = {
    '@media(min-width: 500px)': {
      width: '450px'
    }
  }
  */
  
  return (
    
  
  <div className={Pessoa.Person}>
  <p onClick={props.click}>Hi, I'm {props.name} and I am {props.age} years old!</p>
  <p>{props.children}</p>
  <input type="text" onChange={props.changed} value={props.name}/>
  </div>



  )
};



//export default Radium(person); //////ISSO TBM É NECESSÁRIO, É NECESSÁRIO PARA QUE POSSAMOS USAR ESSE EXPORT/RENDERIZAR ESSE EXPORT no nosso projeto...

export default person;
