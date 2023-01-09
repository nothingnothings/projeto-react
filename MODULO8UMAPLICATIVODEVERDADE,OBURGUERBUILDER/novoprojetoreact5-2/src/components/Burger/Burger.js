import React from 'react';

import BurgerStyle from './Burger.module.css';

// import BuildControls from '../../components/Burger/BuildControls/BuildControls'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


// import TypeContext from './../../context/type-context';










const burger = props => {

  
  

  let transformedIngredients = Object.keys(props.ingredients)
  .map(igKey => {
    // console.log([...Array(props.ingredients[igKey])])
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
  

  //  console.log(transformedIngredients);



  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }








  return (
  



    // // <TypeContext.Provider
    
    // value={
    //     {
    //       type: props.type
    //     }
      
    // }
    
    
    // >
    <div className={BurgerStyle.Burger}>
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