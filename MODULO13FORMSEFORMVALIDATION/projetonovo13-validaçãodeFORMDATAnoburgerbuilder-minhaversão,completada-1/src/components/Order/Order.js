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

    if(!this.props.ingredients) { ////usado para CONSERTAR o erro de 'CANNOT READ property this.props.ingredients.salad' of undefined' (e afins).... ----> nessas hipóteses em que o usuário SÓ DIGITOU DADOS SEM CRIAR NENHUM BURGER, simplesmente vamos querer retornar 'null' (renderizar NADA) para a 'order' dele (pq nenhum burger fui efetivamente criado por ele, naquela ocasião...) --> isso previne esse erro aí de undefined, que é um erro que ocorre PQ O NOSSO APP TENTA FETCHEAR INGREDIENTS DA ORDER RETRIEVADA DO SERVER, mas esses ingrdients aí nunca foram settados pelo usuário, naquela ocasião.
      return null;
    }




    console.log(this.props)
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
