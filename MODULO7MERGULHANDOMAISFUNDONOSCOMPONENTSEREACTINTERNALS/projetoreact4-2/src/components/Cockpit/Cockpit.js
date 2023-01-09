import React from 'react';

import { useContext } from 'react';










// import classes2 from '../../../App.module.css'


 import { useEffect, useRef } from 'react';  // É O ___SEGUNDO REACTHOOK __________ MAIS IMPORTANTE DE TODOS. ELE SÓ PERDE PARA O 'useState' (que é o negócio que altera/updata STATE dos functional components...)  -------> ISSO 

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












import AuthContext from '../../context/auth-context';










import cockpit from './Cockpit.module.css'





const Cockpit = props => {



  const authContext = useContext(AuthContext);




  const toggleBtnRef = useRef(null);      /////////É O APPROACH USADO PARA UTILIZAR __REFS___ (função típica de CLASS-BASED COMPONENTS) NOS NOSSOS FUNCTIONAL COMPONENTS... --> OBS: passe um valor inicial de 'NULL' se vocÊ __NÃO VAI ESCREVER UM DOS USE-CASES MAIS COMPLEXOS DE 'useRef', os use-cases EM QUE PASSAMOS __VALORES___ COMO PARÂMETRO/REFERÊNCIAS DESSE 'useRef'...
  // toggleBtnRef.current.click(); //////ISSO NÃO VAI FUNCIONAR... (TypeError: Cannot read property 'click' of null) ----> ISSO VAI ACONTECER DEVIDO À ORDEM ERRADA DE 'DEFINIÇÃO-EXECUÇÃO' do referencial 'toggleBtnRef' ---> se escrevermos essa linha logo abaixo da definição da constante 'toggleBtnRef', nós VAMOS ACABAR EXECUTANDO '.current.click()' SOBRE UMA reference QUE AINDA _NÃO TEVE NENHUM VALOR/ELEMENTO (como o BUTTON lá de baixo, que tem 'ref={toggleBtnRef}' como prop...) ASSIGNADO A ELA... ---> SOLUÇÃO PARA ISSO: USAR 'useEffect()', QUE É O NEGÓCIO NOS FUNCTIONAL COMPONENTS __QUE NOS PERMITE ___ EXECUTAR CÓDIGOS/LÓGICA ________aPÓS ___ O RENDER CYCLE DO NOSSO COMPONENT... (após o código JSX em 'render()' ter sido RETORNADO)...




  useEffect(() => { //podemos usar múltiplos 'useEffects', cada um para um DIFERENTE EFEITO, diferente efeito que dependerá de DATAS (dados) diferentes...
    toggleBtnRef.current.click(); ////////USADO COM O APPROACH DE 'REFS' DO REACTHOOKS (functional components).... --> é isso que vai corrigir a 'ordem' de EXECUÇÃO-DEFINIÇÃO
  

  }, 
  []
  );





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
      // console.log('[Cockpit.js] useEffect');
      // setTimeout(() => {
      //   alert('Saved data to the cloud!');
      // }, 1000);


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
      btnClass = cockpit.red;
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
        <div className={cockpit.buttons}>
        <button 
        ref={toggleBtnRef}
        className={btnClass} //aqui temos um PROBLEMA. o ESTILO TOGGLE NÃO ESTÁ FUNCIONANDO...
        onClick={props.clicked}>Show/Hide Persons</button>
        {/* <AuthContext.Consumer> ////////APPROACH TRADICIONAL, VELHO, DE USO DE 'CONTEXT'.
       { (context) => <button onClick={context.login}>Login</button> }
        </AuthContext.Consumer> 
        
        VER LINHA MAIS ABAIXO, AQUELE ALI É O __APPROACH MODERNO___, APPROACH QUE USA 
        
        O REACTHOOK DE 'useContext()'... --> esse HOOK depende da escrita 
        de uma linha como 'const authContext = useContext(AuthContext);'*/}
      {<button onClick={authContext.login}>Login</button> }


        </div>
        </div>
    );
    
    




    }







export default React.memo(Cockpit);






// export default Cockpit;