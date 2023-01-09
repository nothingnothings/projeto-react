import React from 'react';




import BuildControlsStyle from './BuildControls.module.css';


import BuildControl from '../BuildControls/BuildControl/BuildControl';





const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
  
]








const buildControls = (props) => {
















    const style = {
        color: "white"
    }



    console.log(props.disableButton);



    return(

        <div className={BuildControlsStyle.BuildControls}>
            <strong><p style={style}>Current Price: &nbsp; $ {props.price.toFixed(2)}</p></strong>
             {
             controls.map(ctrl => (
                     <BuildControl key={ctrl.label} //sim, vamos usar o 'label' como ID, também. Isso é só um detalhe.
                      label={ctrl.label} 
                      
                      removed={() => {props.ingredientRemoved(ctrl.type)}}
                      added={() => {props.ingredientAdded(ctrl.type)}} ///CÓDIGO __BEM IMPORTANTE___... ---> esse parâmetro 'ctrl.type' É PASSADO AO MÉTODO 'addIngredientHandler', lá em 'BurgerBuilder'...
                      disabled={props.disabled[ctrl.type]}
                      /> 
                 )



                 )
             }
            <button className={BuildControlsStyle.OrderButton}
            disabled={props.purchasable}
            onClick={() => {props.ordered()}}
         
            >ORDER NOW</button>
        </div>


    );
}
















export default buildControls;