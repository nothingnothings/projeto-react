import React from 'react';



import ModalStyle from './Modal.module.css';

import Transition from 'react-transition-group/Transition'; //usado para __EDITAR/CONFIGURAR_ NOSSAS ANIMATIONS __MANUALMENTE___..... --> te dá maior PODER DE CONFIGURAÇÃO/liberdade.

import CSSTransition from 'react-transition-group/CSSTransition'; ///é parecido com o de cima, MAS É MAIS 'AUTOMÁTICO'.... ---> anima seus components react DE FORMA MAIS ___AUTOMÁTICA___...





// import './Modal.css';


const animationTiming = {
    enter: 400,
    exit: 1000
}

const modal = (props) => {


    // const cssClasses = [ModalStyle.Modal, props.show ? ModalStyle.ModalOpen : ModalStyle.ModalClosed];


    // 
        //// ^^^^^^ VERSÃO QUE USA O 'react-transition-group'... É mais complexa, mas TE DEIXA ANIMAR TANTO O 'OPEN' quanto o 'CLOSE' do modal...


    // const cssClasses = ['Modal', props.show ? 'ModalOpen' : 'ModalClosed'];



//    return (
   
// //    <div className={ModalStyle.Modal}>
// <div className={cssClasses.join(' ')}>
//         <h1>A Modal</h1>
//         <button className={ModalStyle.Button} onClick={props.closed}>Dismiss</button>
//         {/* <button className="Button" onClick={props.closed}>Dismiss</button> */}
//     </div>)



// return (
    
//     <Transition
//         mountOnEnter
//         unmountOnExit
//         in={props.show}
//         // timeout={300}
//         timeout={animationTiming}
//     >
//         {
//          (state) => {
//             const cssClasses = [ModalStyle.Modal, state === "entering" ? ModalStyle.ModalOpen : state === "exiting" ? ModalStyle.ModalClosed : null];



//              return(
//                 <div className={cssClasses.join(' ')}>
//                 <h1>A Modal</h1>
//                 <button className={ModalStyle.Button} onClick={props.closed}>Dismiss</button>
//             </div>
           
//              )
//          }






//         }
//     </Transition>
//     )












return (
    
    <CSSTransition
        mountOnEnter
        unmountOnExit
        in={props.show}
        // timeout={300}
        timeout={animationTiming}
        classNames={
            {
                enterActive: ModalStyle.ModalEnterActive,
                enterDone: ModalStyle.ModalEnter,
                exitActive: ModalStyle.ModalExitActive,
                exitDone: ModalStyle.ModalExit
            }
        }
    >
                <div className={ModalStyle.Modal}>
                <h1>A Modal</h1>
                <button className={ModalStyle.Button} onClick={props.closed}>Dismiss</button>
            </div>
    </CSSTransition>
    )























}



export default modal;