// import React from 'react';

// import React, { Component } from 'react';

// import React, { Component } from 'react';


import React from 'react';

import { connect } from 'react-redux';

import BurgerStyle from './Burger.module.css';

// import BuildControls from '../../components/Burger/BuildControls/BuildControls'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

// import { render } from '@testing-library/react';

// import { withRouter } from 'react-router-dom';

// import TypeContext from './../../context/type-context';

// class Burger extends Component {
//   render() {
//     // console.log(Object.keys(props.ingredients));
//     // console.log(Object.entries(props.ingredients));

//     ////////////
//     let transformedIngredients = null;
//     ///////////

//     if (this.props.ingredients !== null) {
//       transformedIngredients = Object.keys(this.props.ingredients)
//         .map((igKey) => {
//           return [...Array(this.props.ingredients[igKey])].map((_, i) => {
//             return <BurgerIngredient key={igKey + i} type={igKey} />;
//           });
//         })
//         .reduce((arr, el) => {
//           return arr.concat(el);
//         }, []);
//     }

//     // let transformedIngredients = Object.keys(props.ingredients)
//     // .map(igKey => {

//     //   return [...Array(props.ingredients[igKey])].map(

//     //     ( _, i ) => {
//     //       return <BurgerIngredient key={igKey + i} type={igKey} />
//     //     }

//     //   )
//     // }
//     // ).reduce(
//     //   (arr, el) => {
//     //     return arr.concat(el)
//     //   },
//     //   []);

//     //  console.log(transformedIngredients);

//     if (this.props.ingredients === null) {
//       transformedIngredients = Object.keys(this.props.initialIngr)
//         .map((igKey) => {
//           return [...Array(this.props.initialIngr[igKey])].map((_, i) => {
//             return <BurgerIngredient key={igKey + i} type={igKey} />;
//           });
//         })
//         .reduce((arr, el) => {
//           return arr.concat(el);
//         }, []);
//     }

//     if (transformedIngredients.length === 0) {
//       transformedIngredients = <p>Please start adding ingredients!</p>;
//     }

//     return (
//       // // <TypeContext.Provider

//       // value={
//       //     {
//       //       type: props.type
//       //     }

//       // }

//       // >
//       <div className={BurgerStyle.Burger}>
//         <BurgerIngredient type="bread-top" />
//         {/* <BurgerIngredient type="cheese" /><BurgerIngredient type="meat" /> */}
//         {transformedIngredients}
//         <BurgerIngredient type="bread-bottom" />
//         {/* <BuildControls /> */}
//       </div>
//       // {/* </TypeContext.Provider> */}
//     );
//   }
// }

// class Burger extends Component {

//     render() {

//       console.log(this.props.ingr);

//       // console.log(Object.keys(props.ingredients));
//       // console.log(Object.entries(props.ingredients));

//       let transformedIngredients = Object.keys(props.ingredients)
//       .map(igKey => {
//         console.log(igKey);
//         // console.log(...Array(this.props.ingr[igKey]))
//         return [...Array(this.props.ingr[igKey])].map(

//           ( _, i ) => {
//             return <BurgerIngredient key={igKey + i} type={igKey} />
//           }

//         )
//       }
//       ).reduce(
//         (arr, el) => {
//           return arr.concat(el)
//         },
//         []);

//       //  console.log(transformedIngredients);

//       console.log(transformedIngredients);

//       if (transformedIngredients.length === 0) {
//         transformedIngredients = <p>Please start adding ingredients!</p>
//       }

//       console.log(transformedIngredients);

//       return (

//         // // <TypeContext.Provider

//         // value={
//         //     {
//         //       type: props.type
//         //     }

//         // }

//         // >
//         <div className={BurgerStyle.Burger}>
//           <BurgerIngredient type="bread-top" />
//           {/* <BurgerIngredient type="cheese" /><BurgerIngredient type="meat" /> */}
//                 {transformedIngredients}
//           <BurgerIngredient type="bread-bottom" />
//           {/* <BuildControls /> */}
//         </div>
//         // {/* </TypeContext.Provider> */}
//       );
//     }

// };

const Burger = (props) => {

    let transformedIngredients = null;

    if (props.ingredients !== null) {
      transformedIngredients = Object.keys(props.ingredients)
        .map((igKey) => {
          return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
          });
        })
        .reduce((arr, el) => {
          return arr.concat(el);
        }, []);
    }

    if (props.ingredients === null) {
      transformedIngredients = Object.keys(props.initialIngr)
        .map((igKey) => {
          return [...Array(props.initialIngr[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
          });
        })
        .reduce((arr, el) => {
          return arr.concat(el);
        }, []);
    }

    if (transformedIngredients.length === 0) {
      transformedIngredients = <p>Please start adding ingredients!</p>;
    }

    return (
      <div className={BurgerStyle.Burger}>
        <BurgerIngredient type="bread-top" />
        {transformedIngredients}
        <BurgerIngredient type="bread-bottom" />
      </div>
    );
  }


const mapStateToProps = (state) => {
  return {
    initialIngr: state.order.initialIngr.ingredients,
    ingredients: state.burger.burger.ingredients,
  };
};

// export default burger;

export default connect(mapStateToProps)(Burger);

// export default Burger;
