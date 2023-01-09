// import React, { Component }  from 'react';


import React from 'react';

import Burger from '../../Burger/Burger';

import Button from '../../UI/Button/Button';


import checkoutSummaryStyle from './CheckoutSummary.module.css';


import { withRouter } from 'react-router-dom'

// import { Link } from 'react-router-dom';


// class CheckoutSummary extends Component  {



//       // checkoutCancelHandler = () => {
//       //       this.props.history.push('/');
//       //       console.log(this.props);
//       // }


//       render() {

      
//   return (<div className={checkoutSummaryStyle.CheckoutSummary}>

//         <h1>We hope it tastes well!</h1>
//           <div style={{width: '100%',
//                         margin: 'auto' }}>
//         <Burger ingredients={this.props.ingredients}/>
//         </div>
//         <Link to="/">
//         <Button btnType="Danger">CANCEL</Button>
//         </Link>
//         <Button btnType="Success">CONTINUE</Button>

//   </div> )
//         }

//       }









const checkoutSummary = (props) => {

      console.log(props);
  return (<div className={checkoutSummaryStyle.CheckoutSummary}>

        <h1>We hope it tastes well!</h1>
          <div style={{width: '100%',
                        margin: 'auto' }}>
        <Burger ingredients={props.ingredients}/>
        </div>
        <Button btnType="Danger" clicked={props.checkoutCancelled}>CANCEL</Button>
        <Button btnType="Success" clicked={props.checkoutContinue} disabled={props.continueButtonStatus}>CONTINUE</Button>

  </div> )
        }

      





















export default withRouter(checkoutSummary);
// export default checkoutSummary;