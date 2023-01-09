import React, { Component } from 'react';


import Order from '../../components/Order/Order'

import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'

import axiosOrder from '../../axios-orders';

import Spinner from '../../components/UI/Spinner/Spinner'




class Orders extends Component {


    state = {
            // ingredients: null,
            // totalPrice: null

            orders: [],
            loading: true
    }


        componentDidMount() {
            axiosOrder.get('/orders.json')
            .then(
                (response) => {
                    console.log(response);
                    console.log('test');

                    const orders = response.data;
                    console.log(orders);
                    console.log(Object.entries(orders));

                    // let updatedOrders = null;


                    // for (let order in orders) {
                    //      updatedOrders = orders;
                    //      console.log(orders);
                    //      console.dir(orders);

                    // }

                    this.setState(
                        {
                            orders: orders,
                            loading: false
                        }
                    )



                    console.log(this.state);
                    console.log(Object.entries(this.state.orders).map(
                        order => {
                            console.log(order);
                            console.log(order[1])
                            return (
                            
                            <Order ingredients={order[1].ingredients} price={order[1].price}  />
                            
                            )
                        }
                    ));

                })
                .catch(
                    error => {
                        this.setState(
                            {
                                loading: false
                            }
                        )
                        console.log(error);
                    }
                )

                
         

                    // const orderList = Object.entries(orders)[0][1].map(order => {


                    //     return {
                    //         ...order
                    //     }

                  
             

        
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




        if (!this.state.loading) {
            orderList = Object.entries(this.state.orders).map(
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






export default withErrorHandler(Orders, axiosOrder);