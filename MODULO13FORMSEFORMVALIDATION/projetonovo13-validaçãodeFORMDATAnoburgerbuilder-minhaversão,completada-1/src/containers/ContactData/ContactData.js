import React, { Component } from 'react';

import Button from '../../components/UI/Button/Button';

import ContactDataStyle from './ContactData.module.css';

import axiosOrder from '../../axios-orders';

import Spinner from '../../components/UI/Spinner/Spinner';

import { withRouter } from 'react-router-dom';


import Input from '../../components/UI/Input/Input';


class ContactData extends Component {
  state = {
   name: '',
    email: '',
      street: '',
      postalCode: '',
    loading: false,
    price: null,
    deliveryMethod: null
  };



  contactDataHandler = (event, type) => {
    // switch(type) {

    //     case "postal":
    //       this.setState(
    //         {
    //           customer: {address: {
    //             postalCode: event.target.value
    //           }
    //         }
    //         }
    //       )
    //       break;

    //       case "name":
    //         this.setState(
    //           {
    //          cusomer: {name: event.target.value}
    //           }
    //         )
    //       break;
    //       case "email":
    //         this.setState(
    //           {
    //          customer: {email: event.target.value}
    //           }
    //         )
    //         break;
    //         case "street":
    //           this.setState(
    //             {
    //                 customer: {
    //                     address: {
    //                         street: event.target.value
    //                     }
    //                 }
    //             }
    //           )

    //           console.log('test');
    //             break;
                
    //             default:
    //                 return;

    // }


    if(type === "name") {

        this.setState(
            {
                    name: event.target.value
              
            }
        )
        console.log(this.state);
    }


    if(type === "postal") {
        this.setState(
            {

                  
                        postalCode: event.target.value
                }
            
        )
        console.log(this.state);
    }


    if(type === "street") {
        this.setState(
            {
                         street: event.target.value

                
            }
        )
    }


    if(type === "email") {

        








        this.setState(
            {
  email: event.target.value

            }
        )
    }

      if(type === 'dropdown') {
            console.log(event.target.value);

          this.setState(
            {
              deliveryMethod: event.currentTarget.value
            }
          )
        
          console.log(this.state);
      }





  

      }
    
  






  orderHandler = (event) => {
    event.preventDefault(); ///VAI PREVENIR O RELOAD DA P??GINA.(e sim, precisamos do par??metro 'event' para acessar esse m??todo especial, m??todo que PREVINE O COMPORTAMENTO DEFAULT DO BROWSER DE __RECARREGAR___ P??GINAS QUANDO UM 'SUBMIT' OCORRE DENTRO DE UMA FORM...)
    console.log(this.props.ingredients);
    

    this.setState({
      loading: true,
    });

    const orderData = {
      ingredients: this.props.ingredients,
      price: this.props.price,
        name: this.state.name,
        email: this.state.email,
          street: this.state.street,
          postalCode: this.state.postalCode,
          deliveryMethod: this.state.deliveryMethod
      
      }
    

        axiosOrder.post('/orders.json', orderData)
        .then(

            (response) => {
              console.log(response);
                this.setState({
                  loading: false
                });
                this.props.history.push('/');
              }
        )
        .catch(error => {
          console.log(error);
            this.setState(
                {
                    loading: false
                }
            )
        }
        )
  };

  render() {
    console.log(this.state);
    console.log(this.props);

    let contactDataContent = (<div className={ContactDataStyle.ContactData}>
    <h4>Enter your Contact Data</h4>
    <form>

      <Input label="Name" inputtype='input' type="text" placeholder="Your Name" onChange={(event) => { this.contactDataHandler(event, "name")}} />
      <Input label="Email" inputtype='input' type="text" placeholder="Your Mail" onChange={(event) => { this.contactDataHandler(event, "email")}} />
      <Input label="Street" inputtype='input' placeholder="Street" onChange={(event) => { this.contactDataHandler(event, "street")}} />
      <Input label="Postal Code" inputtype='input' onWheel={event => event.preventDefault()} placeholder="Postal Code" onChange={(event) => { this.contactDataHandler(event, "postal")}} />
      <Input label="Delivery Method" placeholder="Select" inputtype='dropdown' onChange={(event) => { this.contactDataHandler(event, "dropdown")}} />
      {/* <input type="text" name="name" placeholder="Your Name" onChange={(event) => { this.contactDataHandler(event, "name")}}/>
      <input type="email" id="email" pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}" name="email" placeholder="Your Mail" onChange={(event) => { this.contactDataHandler(event, "email")}}/>
      <input type="text" name="street" placeholder="Street" onChange={(event) => { this.contactDataHandler(event, "street")}} />
      <input type="number" onWheel={event => event.preventDefault()} name="postal" placeholder="Postal Code" onChange={(event) => { this.contactDataHandler(event, "postal")}}/> */}
      <Button
        btnType="Success"
        clicked={(event) => {
          this.orderHandler(event);
        }}
      >
        ORDER
      </Button>
    </form>
  </div>
    )



    if(this.state.loading) {
         contactDataContent = (<Spinner />);
    }








    return (

            //   <div className={ContactDataStyle.ContactData}>
    //     <h4>Enter your Contact Data</h4>
    //     <form>
    //       <input type="text" name="name" placeholder="Your Name" onChange={(event) => { this.contactDataHandler(event, "name")}}/>
    //       <input type="email" id="email" pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}" name="email" placeholder="Your Mail" onChange={(event) => { this.contactDataHandler(event, "email")}}/>
    //       <input type="text" name="street" placeholder="Street" onChange={(event) => { this.contactDataHandler(event, "street")}} />
    //       <input type="number" onwheel={event => event.preventDefault()} name="postal" placeholder="Postal Code" onChange={(event) => { this.contactDataHandler(event, "postal")


    //       }}/>
    //       <Button
    //         btnType="Success"
    //         clicked={(event) => {
    //           this.orderHandler(event);
    //         }}
    //       >
    //         ORDER
    //       </Button>
    //     </form>
    //   </div>
            <div>
        {contactDataContent}
        </div>





    );
  }
}

export default withRouter(ContactData);
