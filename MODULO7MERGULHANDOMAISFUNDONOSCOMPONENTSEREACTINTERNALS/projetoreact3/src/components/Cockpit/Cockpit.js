import React from 'react';


// import classes2 from '../../../App.module.css'


 import { useEffect } from 'react';  // É O ___SEGUNDO REACTHOOK __________ MAIS IMPORTANTE DE TODOS. ELE SÓ PERDE PARA O 'useState' (que é o negócio que altera/updata STATE dos functional components...)  -------> ISSO 

// PQ O 'useEffect' ///OBS: ele deve ser importado NO FUNCTIONAL COMPONENT para poder ser utilizado.

// BASICAMENTE ___COMBINA___ A FUNCIONALIDADE/USE-CASES de 


// __________tODOS ____________ ESSES 'CLASS-BASED LIFECYCLE HOOKS' EM 


// 1 ÚNICO REACThook, o 'useEffect'.......



// TECNICAMENTE, ELE NÃO É 

// UM 


// 'LIFECYCLE HOOK', 

// e sim 

// É um 


// __REACTHOOK____....




// (É BASICAMENTE UMA __FUNÇÃO GIGANTE__ QUE TEM TODAS 

// AS FUNCIONALIDADES/LIFECYCLE HOOKS DOS COMPONENTS CLASS-BASED, é 

// um 'tudo em um'...)























import cockpit from './Cockpit.module.css'





const Cockpit = props => {


    // useEffect(() => { //podemos usar múltiplos 'useEffects', cada um para um DIFERENTE EFEITO, diferente efeito que dependerá de DATAS (dados) diferentes...
    //   console.log('[Cockpit.js] useEffect');
    //   setTimeout(() => {
    //     alert('Saved data to the cloud!');
    //   }, 1000);


    //   return () => {
    //     console.log('[Cockpit.js] cleanup work in useEffect');
        
    //   }
    // }, [props.persons]);






    // useEffect(() => { //podemos usar múltiplos 'useEffects', cada um para um DIFERENTE EFEITO, diferente efeito que dependerá de DATAS (dados) diferentes...
    //   console.log('[Cockpit.js] useEffect');
    //   setTimeout(() => {
    //     alert('Saved data to the cloud!');
    //   }, 1000);


    // //   return () => {
    // //     console.log('[Cockpit.js] cleanup work in useEffect');
    // //     clearTimeout(alertTimer); //limpa o nosso timer...
        
    // //   }
    // // }, []); //isso vai assegurar QUE O __CÓDIGO__ DE 'return () => {}' SEJA EXECUTADO __SEMPRE QUE__ NOSSO COMPONENT 'cockpit' FOR MONTADO... (mounted).


    // },
    // [props.persons]
    // );












    useEffect(() => { //podemos usar múltiplos 'useEffects', cada um para um DIFERENTE EFEITO, diferente efeito que dependerá de DATAS (dados) diferentes...
      console.log('[Cockpit.js] useEffect');
      setTimeout(() => {
        alert('Saved data to the cloud!');
      }, 1000);


    //   return () => {
    //     console.log('[Cockpit.js] cleanup work in useEffect');
    //     clearTimeout(alertTimer); //limpa o nosso timer...
        
    //   }
    // }, []); //isso vai assegurar QUE O __CÓDIGO__ DE 'return () => {}' SEJA EXECUTADO __SEMPRE QUE__ NOSSO COMPONENT 'cockpit' FOR MONTADO... (mounted).


    return () => {
      console.log('[Cockpit.js] cleanup work in UseEffect')
    }
    },
    []
    );



    useEffect(
      ()=> {
        console.log('[Cockpit.js] 2nd useEffect');
        

        return() => {
          console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };

    });










    // useEffect(() => { 
    //   console.log('[Cockpit.js] 2nd useEffect');

    //   return () => {
    //     console.log('[Cockpit.js] cleanup work in 2nd  useEffect');
    //   }
    // }); 








    // useEffect(() => { //podemos usar múltiplos 'useEffects', cada um para um DIFERENTE EFEITO, diferente efeito que dependerá de DATAS (dados) diferentes...
    //   console.log('[Cockpit.js] useEffect');
    //   setTimeout(() => {
    //     alert('Saved data to the cloud!');
    //   }, 1000);


    //   return () => {
    //     console.log('[Cockpit.js] cleanup work in useEffect');
    //   }
    // }, []);













    
// const Cockpit = (props) => {


//   useEffect(() => { 
//     console.log('[Cockpit.js] useEffect');
//     setTimeout(() => {
//       alert('Saved data to the cloud!');
//     }, 1000)
//   }, []); /////////EIS O CÓDIGO EM QUESTÃO. (SE DEIXAMOS O SEGUNDO PARÂMETRO DE UM 'useEffect' COMO UM ARRAY VAZIO, isso faz com que o código do PRIMEIRO PARÂMETRO SEJA EXECUTADO APENAS __NO PRIMEIRO RENDER DO NOSSO COMPONENT__; ou seja, os RE-RENDERS POSTERIORES DESSE COMPONENT NÃO VÃO TRIGGAR O PRIMEIRO PARÂMETRO/FUNÇÃO de 'useEffect'...)















    const classes = [];
    let btnClass = '';
 
    if (props.showPersons) {
      btnClass = Cockpit.red;
    }









    // if(props.persons.length <= 2) {
    
      
    //   classes.push(cockpit.red); 
    // }
    
    
    
    
    // if(props.persons.length <= 1) {
    //   classes.push(cockpit.bold);
    // }




    if(props.personsLength <= 2) { //usado para regular a feature de 'React.memo(xxx)'...
    
      
      classes.push(cockpit.red); 
    }
    
    
    
    
    
    if(props.personsLength <= 1) {
      classes.push(cockpit.bold);
    }











    return (
        <div className={cockpit.Cockpit}>
        <h1>{props.title}</h1> 
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
     
        className={btnClass}
        onClick={props.clicked}>Show/Hide Persons</button> 
        </div>
    );
    





    }







export default React.memo(Cockpit);






// export default Cockpit;