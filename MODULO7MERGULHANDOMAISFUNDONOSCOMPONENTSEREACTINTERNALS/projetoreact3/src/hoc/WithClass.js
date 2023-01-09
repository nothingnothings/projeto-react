import React from 'react';









// const withClass = (props) => {
//             <div className={props.classes}>
//                 {props.children}
//             </div>

// }





// const withClass = (WrappedComponent, className) => {
        
// return props => (
//                 <div className={className}>
//                     <WrappedComponent />
//                 </div>
//         );
// };





/////////SINTAXE CERTA --> gambiarra do '{...props}' escrito dentro do 'WrappedComponent' ---> isso faz com que os PROPS SEJAM __PASSADOS___ CORRETAMENTE____ AO 'WRAPPEDCOMPONENT' (Que pode ser 'person', 'persons', 'app', QUALQUER COMPONENTE QUE VOCÊ QUISER...)
const withClass = (WrappedComponent, className) => {
        
    return props => (
                    <div className={className}>
                        <WrappedComponent {...props}/>  
                    </div>
            );
    };



/////////SINTAXE ERRADA ---> ISSO NÃO VAI FUNCIONAR... O 'PASS BRUTO' DOS PROPS por meio dessa sintaxe aqui __NÃO FUNCIONA__... --> é necessário usar o approach mostrado logo acima, que utiliza o SPREAD OPERATOR.
// const withClass = (WrappedComponent, className) => {
        
//     return props => (
//                     <div className={className}>
//                         <WrappedComponent 
//                            name: 'Max' ////////ISSO ESTÁ ERRADO.
//                            age: 28
                            ///>  
//                     </div>
//             );
//     };




/////////OUTRA SINTAXE ERRADA ---> ISSO NÃO VAI FUNCIONAR... O 'PASS BRUTO E SIMPLES' DE 'PROPS' por meio dessa sintaxe aqui __NÃO FUNCIONA__... --> é necessário usar o approach mostrado logo acima, que utiliza o SPREAD OPERATOR.  ---> se tentarmos passar 'props={props}', aqui, NÓS APENAS ESTAREMOS CRIANDO UMA PROPRIEDADE 'PROPS' DENTRO DO OBJETO PROPS (que é criado automaticamente pelo REACt) COM UM VALOR DE props... ( ou seja, 'props: {props: props}', o QUE __NÃO QUEREMOS_...)
// const withClass = (WrappedComponent, className) => {
        
//     return props => (
//                     <div className={className}>
//                         <WrappedComponent 
//                            name: 'Max' ////////ISSO ESTÁ ERRADO.
//                            age: 28
                            ///>  
//                     </div>
//             );
//     };
















export default withClass;