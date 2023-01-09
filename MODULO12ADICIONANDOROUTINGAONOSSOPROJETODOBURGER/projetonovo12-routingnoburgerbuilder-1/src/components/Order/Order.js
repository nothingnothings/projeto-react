import React, { Component } from 'react';

import OrderStyle from './Order.module.css';


import Burger2 from './Burger2';



// const order = (props) => {
//   return (
//     <div className={OrderStyle.Order}>
//       {/* <p>Ingredients: Salad ({props.ingredients.salad}) &nbsp;
//                     Cheese({props.ingredients.cheese}) &nbsp;
//                     Meat({props.ingredients.meat}) &nbsp;
//                     Bacon({props.ingredients.bacon}) &nbsp;
//                     </p> */}
//                   <p>Ingredients:</p>
//               <ul>
//                 <li>Salad ({props.ingredients.salad})</li>
//                 <li>Cheese ({props.ingredients.cheese})</li>
//                 <li>Meat ({props.ingredients.meat})</li>
//                 <li>Bacon ({props.ingredients.bacon})</li>



//           </ul>
//       <p>
//         Price: <strong>{`${Number(props.price).toFixed(2)}USD`}</strong>{' '}
//       </p>
//     </div>
//   );
// };



class Order extends Component {


  state = {
      ingredients: this.props.ingredients

  }


  render() {
  return (
    <div className={OrderStyle.Order}>
      {/* <p>Ingredients: Salad ({props.ingredients.salad}) &nbsp;
                    Cheese({props.ingredients.cheese}) &nbsp;
                    Meat({props.ingredients.meat}) &nbsp;
                    Bacon({props.ingredients.bacon}) &nbsp;
                    </p> */}
                  <p>Ingredients:</p>
              <ul>
                <li>Salad ({this.props.ingredients.salad})</li>
                <li>Cheese ({this.props.ingredients.cheese})</li>
                <li>Meat ({this.props.ingredients.meat})</li>
                <li>Bacon ({this.props.ingredients.bacon})</li>
                <li className={OrderStyle.Burger}><Burger2 ingredients={this.state.ingredients} /></li>


          </ul>
      <p>
        Price: <strong>{`${Number(this.props.price).toFixed(2)}USD`}</strong>{' '}
      </p>
    </div>


  );
                  }
};


















export default Order;
