import React, { Component } from 'react';


import Order from '../../components/Order/Order'

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

import axiosOrder from '../../axios-orders';

import { connect } from 'react-redux';

import Spinner from '../../components/UI/Spinner/Spinner';


// import { asyncFetchBurgerOrders } from '../../store/actions/index';

import * as actionTypes from '../../store/actions/index';






class Orders extends Component {


    state = {
            // ingredients: null,
            // totalPrice: null

            // orders: [], /////substituído pelo REDUX...
            // loading: true
    }


        componentDidMount() {


                this.props.onFetchOrders(this.props.orders);








            // axiosOrder.get('/orders.json')
            // .then(
            //     (response) => {
            //         console.log(response);
            //         console.log('test');

            //         const orders = response.data;
            //         console.log(orders);
            //         console.log(Object.entries(orders));

            //         // let updatedOrders = null;


            //         // for (let order in orders) {
            //         //      updatedOrders = orders;
            //         //      console.log(orders);
            //         //      console.dir(orders);

            //         // }

            //         this.setState(
            //             {
            //                 orders: orders,
            //                 loading: false
            //             }
            //         )



            //         // console.log(this.state);
            //         // console.log(Object.entries(this.state.orders).map(
            //             console.log(Object.entries(this.props.orders).map(
            //             order => {
            //                 console.log(order);
            //                 console.log(order[1])
            //                 return (
                            
            //                 <Order ingredients={order[1].ingredients} price={order[1].price}  />
                            
            //                 )
            //             }
            //         ));

            //     })
            //     .catch(
            //         error => {
            //             this.setState(
            //                 {
            //                     loading: false
            //                 }
            //             )
            //             console.log(error);
            //         }
            //     )

                
         

            //         const orderList = Object.entries(orders)[0][1].map(order => {


            //             return {
            //                 ...order
            //             }

                  
             

        
        }








    render() {

        // Object.entries(this.state.orders).map(
        //     order => {
        //         console.log(order);
        //         console.log(order[1])
        //         return (
                
        //         <Order ingredients={order[1].ingredients} price={order[1].price}  />
                
        //         )
        //     }
        // )


     

        let orderList = (
            <Spinner />
        )




        // if (!this.state.loading) {
            if (!this.props.loading) {
            orderList = Object.entries(this.props.orders).map(
                order => {
                    console.log(order);
                    console.log(order[1]);
                    console.log(order[0]);
                        
                    return (
                        <Order ingredients={order[1].ingredients} price={order[1].price} key={order[0]} />
                    )
                }
            )
        }


  



            return (       
                <div>

                    {/* {OrderList} */}
                        {orderList}
                    {/* <Order price ingredients/>
                    <Order price ingredients/>  */}
                    {/* {/* <Order price={} ingredients={}/>
                    <Order price={} ingredients={}/> *} */}
                    

                </div>
                
            );
    }
}




const OrdersWithErrorHandler = withErrorHandler(Orders, axiosOrder);





const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (orders) => {
            // dispatch(asyncFetchBurgerOrders(orders)) //versão nossa, antiga, de fetch das ORDERs do servidor firebase....
            dispatch(actionTypes.asyncFetchOrdersStart(orders));
        }
    }
    
}


const mapStateToProps = (state) => {
   return {
       orders: state.order.orders,
       loading: state.order.loading
}
}

export default connect(mapStateToProps, mapDispatchToProps)(OrdersWithErrorHandler);
