

import React, { Component } from 'react';



import BurgerIngredientStyles from './BurgerIngredient.module.css';



import propTypes from 'prop-types';
// import TypeContext from '../../../context/type-context';






// const BurgerIngredient = (props) => {
    


//     let ingredient = null;




//     switch(props.type) {  ///sintaxe de 'switch()' ===== switch(parâmetro) {case(x): códigoASerExecutado}
//         case ('bread-bottom'): ingredient = <div className={BurgerIngredient.BreadBottom}></div>;
        
//         break;


//         case('bread-top'): ingredient = 
        
//         <div className={BurgerIngredient.BreadTop}>
//             <div className={BurgerIngredient.Seeds1}></div>
//             <div className={BurgerIngredient.Seeds2}></div>
//             <div></div>
//         </div>;

//         break;

//         case('meat'): ingredient = <div className={BurgerIngredient.Meat}></div>;

//         break;

//         case('cheese'): ingredient = <div className={BurgerIngredient.Cheese}></div>;

//         break;

//         case('bacon'): ingredient = <div className={BurgerIngredient.Bacon}></div>;

//         break;

//         case('salad'): ingredient = <div className={BurgerIngredient.Salad}></div>;
        

//         break;

//         default: ingredient = null; //isso aqui é o que ocorre quando o 'type' DENTRO DE PROPS É INVÁLIDO/NÃO EXISTE/NÃO FOI PASSADO... --> o ingredient será NULO, ou seja, NADA ACONTECERÁ/será renderizado..., pois não existirá elemento 'div' com className de 'null'...


        
//     }

    
//     return ingredient;








// }







export default class BurgerIngredient extends Component {
    
    
    
    

    constructor(props) {
        super(constructor);
    }






    render() {

    
      let ingredient = null;

        
        
        switch(this.props.type) {  ///sintaxe de 'switch()' ===== switch(parâmetro) {case(x): códigoASerExecutado}
            case ('bread-bottom'): ingredient = <div className={BurgerIngredientStyles.BreadBottom}></div>;
            
            break;
    
    
            case('bread-top'): ingredient = 
            
            <div className={BurgerIngredientStyles.BreadTop}>
                <div className={BurgerIngredientStyles.Seeds1}></div>
                <div className={BurgerIngredientStyles.Seeds2}></div>
                <div></div>
            </div>;
    
            break;
    
            case('meat'): ingredient = <div className={BurgerIngredientStyles.Meat}></div>;
    
            break;
    
            case('cheese'): ingredient = <div className={BurgerIngredientStyles.Cheese}></div>;
    
            break;
    
            case('bacon'): ingredient = <div className={BurgerIngredientStyles.Bacon}></div>;
    
            break;
    
            case('salad'): ingredient = <div className={BurgerIngredientStyles.Salad}></div>;
            
    
            break;
    
            default: ingredient = null; //isso aqui é o que ocorre quando o 'type' DENTRO DE PROPS É INVÁLIDO/NÃO EXISTE/NÃO FOI PASSADO... --> o ingredient será NULO, ou seja, NADA ACONTECERÁ/será renderizado..., pois não existirá elemento 'div' com className de 'null'...
            
            
            
        }
        
        return ingredient;

    }
   
}































BurgerIngredient.propTypes = {
    type: propTypes.string.isRequired ///'isRequired' ---> esse método faz com que nosso APp TE DÊ uM ___ERRO__ se vocÊ não passar um PROP DE NOME 'type'...

}



















// const expr = 'Papayas';
// switch (expr) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${expr}.`);
// }


