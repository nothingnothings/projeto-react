import React from 'react';


import Burger2Style from './Burger2.module.css';

import BurgerIngredient from '../Burger/BurgerIngredient/BurgerIngredient'



const burger = props => {

  
  console.log(props.ingredients);


  let transformedIngredients = Object.keys(props.ingredients)
  .map(igKey => {
    
    return [...Array(props.ingredients[igKey])].map(

      ( _, i ) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />
      }
    

    
    )
  }
  ).reduce(
    (arr, el) => {
      return arr.concat(el)
    },
    []);
  
  console.log(transformedIngredients);


  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }



  console.log(transformedIngredients);




  return (
  

    <div className={Burger2Style.Burger}>
      <BurgerIngredient type="bread-top" />
      {/* <BurgerIngredient type="cheese" /><BurgerIngredient type="meat" /> */}
            {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
      {/* <BuildControls /> */}
    </div>
    // {/* </TypeContext.Provider> */}
  );
};




export default burger;