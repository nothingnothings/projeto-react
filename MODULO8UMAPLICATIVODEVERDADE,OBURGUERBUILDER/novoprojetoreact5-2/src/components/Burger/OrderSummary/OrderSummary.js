import React from 'react';


import Aux from '../../../hoc/Auxiliary';


import Button from '../../UI/Button/Button';




const orderSummary = (props) => {


    // const ingredientSummary = Object.keys(props.ingredients) ////////VERSÃO ALTERNATIVA DE NOSSO CÓDIGO MAIS ABAIXO. FOI A QUE O PROFESSOR UTILIZOU.
    // .map( 

    //     (igKey) => {
    //         return <li><span style={textTransform: 'capitalize'}>{igKey}</span>: {props.ingredients[igKey]}</li>
    //     }
    // )









    
    const capitalizeFirstLetter = string =>  {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    ///UMA ALTERNATIVA A ESSA FUNÇÃO E O WRAP do 'ingredientSummary' SERIA 
    // DEFINIR UMA TAG WRAPPANDO NOSSO NEGÓCIO, UMA TAG DE '<span>{ingredientSummary}</span>' ---> AÍ, NESSA TAG 'SPAN', NÓS DEFINIRÍAMOS UM INLINE STYLE DE 'style={textTransform: 'capitalize'}'  (SIM, ISSO É VÁLIDO E FUNCIONA, VAI FAZER COM QUE A PRIMEIRA LETRA DESSAS STRINGS FIQUE MAIÚSCULA)...
    //
    //
    //
    //










    const ingredientSummary = Object.entries(props.ingredients);
    console.log(ingredientSummary);
    // ingredientSummary.forEach([key, value]) => {
      

    // }



    return (
        <Aux>
        <h3>Your Order</h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
            <li>{capitalizeFirstLetter(ingredientSummary[0][0])}: {props.ingredients.salad}</li>
            <li>{capitalizeFirstLetter(ingredientSummary[1][0])}: {props.ingredients.bacon}</li>
            <li>{capitalizeFirstLetter(ingredientSummary[2][0])}: {props.ingredients.cheese}</li>
            <li>{capitalizeFirstLetter(ingredientSummary[3][0])}: {props.ingredients.meat}</li>
        </ul>
        <h2>Total Price: $ {props.price.toFixed(2)}</h2>
        {/* <button onClick={props.clicked}>CANCEL</button>
        <button>CONTINUE</button> */}
        <Button clicked={props.success} btnType="Success">
        CONTINUE
        </Button>
        <Button clicked={props.clicked} btnType="Danger">
        CANCEL
        </Button>

        </Aux>



    )
}












export default orderSummary