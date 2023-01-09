import React from 'react';

// import React, { Component } from 'react';

import BurgerStyle from './Burger.module.css';

// import BuildControls from '../../components/Burger/BuildControls/BuildControls'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


// import { withRouter } from 'react-router-dom';



// import TypeContext from './../../context/type-context';


const burger = props => {

  
  console.log(props.ingredients);


  // console.log(Object.keys(props.ingredients));
  // console.log(Object.entries(props.ingredients));






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
  
    

  //  console.log(transformedIngredients);


  console.log(transformedIngredients);


  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients!</p>
  }



  console.log(transformedIngredients);




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