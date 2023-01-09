// import React from 'react';

// import BuildControlsStyle from './BuildControls.module.css';

// import BuildControl from '../BuildControls/BuildControl/BuildControl';

// const controls = [
//   { label: 'Bacon', type: 'bacon' },
//   { label: 'Cheese', type: 'cheese' },
//   { label: 'Meat', type: 'meat' },
//   { label: 'Salad', type: 'salad' },
// ];

// const buildControls = (props) => {
//   console.log(props.purchasable);

//   const style = {
//     color: 'white',
//   };

//   console.log(props.disableButton);

//   return (
//     <div className={BuildControlsStyle.BuildControls}>
//       {/* <strong><p style={style}>Current Price: &nbsp; $ {props.price.toFixed(2)}</p></strong> VERSÃO TRADICIONAL */}
//       <strong>
//         <p style={style}>
//           Current Price: &nbsp; ${' '}
//           {
//             props.price.toFixed(2) //VERSÃO REDUX.
//           }{' '}
//         </p>
//       </strong>
//       {controls.map((ctrl) => (
//         <BuildControl
//           key={ctrl.label} //sim, vamos usar o 'label' como ID, também. Isso é só um detalhe.
//           label={ctrl.label}
//           removed={() => {
//             props.ingredientRemoved(ctrl.type);
//           }}
//           //   added={() => {props.ingredientAdded(ctrl.type)}} ///CÓDIGO __BEM IMPORTANTE___... ---> esse parâmetro 'ctrl.type' É PASSADO AO MÉTODO 'addIngredientHandler', lá em 'BurgerBuilder'...
//           added={() => {
//             props.ingredientAdded(ctrl.type);
//           }} //CÓDIGO BEM IMPORTANTE, E ALTERADO POR NOSSA SINTAXE DO REDUX.... (agora esse parâmetro 'ctrl.type' vai ser passado AO DISPATCH DA ACTION 'onIngredientAdd', lá em 'BurgerBuilder'...)
//           disabled={props.disabled[ctrl.type]}
//         />
//       ))}
//       <button
//         className={BuildControlsStyle.OrderButton}
//         disabled={props.purchasable}
//         onClick={() => {
//           props.ordered();
//         }}
//       >
//         ORDER NOW
//       </button>
//     </div>
//   );
// };




// import React, { Component } from 'react';

// import BuildControlsStyle from './BuildControls.module.css';


// // import { connect } from 'react-redux';


// import BuildControl from '../BuildControls/BuildControl/BuildControl';

// const controls = [
//   { label: 'Bacon', type: 'bacon' },
//   { label: 'Cheese', type: 'cheese' },
//   { label: 'Meat', type: 'meat' },
//   { label: 'Salad', type: 'salad' },
// ];

// class BuildControls extends Component {



//   render() {

//     const style = {
//         color: 'white',
//       };

//       return (
//         <div className={BuildControlsStyle.BuildControls}>
//           {/* <strong><p style={style}>Current Price: &nbsp; $ {props.price.toFixed(2)}</p></strong> VERSÃO TRADICIONAL */}
//           <strong>
//             <p style={style}>
//               Current Price: &nbsp; ${' '}
//               {
//                 this.props.price.toFixed(2) //VERSÃO REDUX.
//               }{' '}
//             </p>
//           </strong>
//           {controls.map((ctrl) => (
//             <BuildControl
//               key={ctrl.label} //sim, vamos usar o 'label' como ID, também. Isso é só um detalhe.
//               label={ctrl.label}
//               removed={() => { this.props.ingredientRemoved(ctrl.type);//código usado com O REDUX__...
//               }}
//               //   added={() => {props.ingredientAdded(ctrl.type)}} ///CÓDIGO __BEM IMPORTANTE___... ---> esse parâmetro 'ctrl.type' É PASSADO AO MÉTODO 'addIngredientHandler', lá em 'BurgerBuilder'...
//               added={() => {
//                 this.props.ingredientAdded(ctrl.type);
//               }} //CÓDIGO BEM IMPORTANTE, E ALTERADO POR NOSSA SINTAXE DO REDUX.... (agora esse parâmetro 'ctrl.type' vai ser passado AO DISPATCH DA ACTION 'onIngredientAdd', lá em 'BurgerBuilder'...)
//               disabled={this.props.disabled[ctrl.type]}
//             />
//           ))}

//           <button
//             className={BuildControlsStyle.OrderButton}
//             // disabled={this.props.purchasable}
//             disabled={!this.props.purchasable}
//             onClick={() => {
//               this.props.ordered();
//             }}
//           >
//             {/* ORDER NOW */}
//             {this.props.token ? 'ORDER NOW' : 'SIGN UP TO ORDER' }
//           </button>
//         </div>
//       );
//     };

//   }







import React from 'react';

import BuildControlsStyle from './BuildControls.module.css';


// import { connect } from 'react-redux';


import BuildControl from '../BuildControls/BuildControl/BuildControl';

const controls = [
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Salad', type: 'salad' },
];

const BuildControls = (props) => {
    
  
  
  const style = {
        color: 'white',
      };

      return (
        <div className={BuildControlsStyle.BuildControls}>
          {/* <strong><p style={style}>Current Price: &nbsp; $ {props.price.toFixed(2)}</p></strong> VERSÃO TRADICIONAL */}
          <strong>
            <p style={style}>
              Current Price: &nbsp; ${' '}
              {
                props.price.toFixed(2) //VERSÃO REDUX.
              }{' '}
            </p>
          </strong>
          {controls.map((ctrl) => (
            <BuildControl
              key={ctrl.label} //sim, vamos usar o 'label' como ID, também. Isso é só um detalhe.
              label={ctrl.label}
              removed={() => { props.ingredientRemoved(ctrl.type);//código usado com O REDUX__...
              }}
              //   added={() => {props.ingredientAdded(ctrl.type)}} ///CÓDIGO __BEM IMPORTANTE___... ---> esse parâmetro 'ctrl.type' É PASSADO AO MÉTODO 'addIngredientHandler', lá em 'BurgerBuilder'...
              added={() => {
                props.ingredientAdded(ctrl.type);
              }} //CÓDIGO BEM IMPORTANTE, E ALTERADO POR NOSSA SINTAXE DO REDUX.... (agora esse parâmetro 'ctrl.type' vai ser passado AO DISPATCH DA ACTION 'onIngredientAdd', lá em 'BurgerBuilder'...)
              disabled={props.disabled[ctrl.type]}
            />
          ))}

          <button
            className={BuildControlsStyle.OrderButton}
            // disabled={this.props.purchasable}
            disabled={!props.purchasable}
            onClick={() => {
              props.ordered();
            }}
          >
            {/* ORDER NOW */}
            {props.token ? 'ORDER NOW' : 'SIGN UP TO ORDER' }
          </button>
        </div>
      );
    };

  





















  






// const mapStateToProps = state => {
//     return {price: state.totalPrice
//     }
// }













export default BuildControls;
