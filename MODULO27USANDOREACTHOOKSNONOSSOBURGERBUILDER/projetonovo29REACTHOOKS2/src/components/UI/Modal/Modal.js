// import React, { Component } from 'react';



// import React, { useState } from 'react';


import React from 'react';

import { useMemo } from 'react';


import ModalStyle from './Modal.module.css';

import Backdrop from '../Backdrop/Backdrop';

import Aux from '../../../hoc/Auxiliary/Auxiliary';

// class Modal extends Component {
//   shouldComponentUpdate(nextProps, nextState) {
//     // if(nextProps.show !== this.props.show) { //MESMA COISA QUE O CÓDIGO DE BAIXO, MAS O CÓDIGO DE BAIXO É MAIS SIMPLIFICADO (e melhor).
//     //     return true;
//     // } else {
//     //     return false;
//     // }

//     return (
//       nextProps.show !== this.props.show ||
//       nextProps.children !== this.props.children
//     );
//   }

//   // componentWillUpdate() {
//   //     console.log('[Modal] componentWillUpdate')
//   // }

//   render() {
//     return (
//       <Aux>
//         <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
//         <div
//           className={ModalStyle.Modal}
//           style={{
//             transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
//             opacity: this.props.show ? '1' : '0',
//           }}
//         >
//           {this.props.children}
//         </div>
//       </Aux>
//     );
//   }
// }












const Modal = (props) => {



    

    // shouldComponentUpdate(nextProps, nextState) {
    //   return (
    //     nextProps.show !== props.show ||
    //     nextProps.children !== props.children
    //   );
    // }
  

  // if(nextProps.show !== this.props.show) { //MESMA COISA QUE O CÓDIGO DE BAIXO, MAS O CÓDIGO DE BAIXO É MAIS SIMPLIFICADO (e melhor).
//     //     return true;
//     // } else {
//     //     return false;
//     // }
////        }



          // const [show, setShow] = useState(props.show);



      return (
        <Aux>
          <Backdrop show={props.show} clicked={props.modalClosed} />
          
          
          
        {    useMemo(() => {return (
             <div
             className={ModalStyle.Modal}
             style={{
               transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
               opacity: props.show ? '1' : '0',
             }}
           >
             {props.children}
           </div>
        )},  [props.children, props.show])      
                                                }
        </Aux>
      );
    
  }


export default Modal;
