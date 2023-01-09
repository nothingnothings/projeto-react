import React, { Component } from 'react';

import Button from '../../components/UI/Button/Button';

import ContactDataStyle from './ContactData.module.css';

// import axiosOrder from '../../axios-orders';

// import axios from 'axios';

import Spinner from '../../components/UI/Spinner/Spinner';

import { withRouter } from 'react-router-dom';

import Input from '../../components/UI/Input/Input';

import { connect } from 'react-redux';
// import { purchaseBurgerAttempt } from '../../store/actions/order';

// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler'; ///CÓDIGO USADO COM O REDUX...

import * as actions from '../../store/actions/index';
// import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import { Redirect } from 'react-router-dom';

import { checkValidity } from '../../shared/utility';


import { updateObject } from '../../shared/utility';

class ContactData extends Component {
  // state = {
  //  name: '',
  //   email: '',
  //     street: '',
  //     postalCode: '',
  //   loading: false,
  //   price: null,
  //   deliveryMethod: null
  // };

  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
        },
        value: '',
        validation: {
          ///AQUI VÃO TODAS AS REGRAS DE NOSSOS components 'Input' em 'ContactData'....
          required: true, /////USADO NA VALIDATION DE NOSSOS INPUTS... assistir aula 'Adding Custom Form Validation'... ---> ''''required: true'' significa que ESSE FIELD DEVE SER __PREENCHIDO__ PARA QUE USUÁRIO POSSA ENVIAR A 'ORDER'...
        },
        valid: false,
        touched: false,
      },

      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Street',
        },
        value: '',
        validation: {
          ///ver método 'checkValidity()'....
          required: true,
        },
        valid: false,
        touched: false,
      },
      zipCode: {
        elementType: 'input',
        elementConfig: {
          type: 'number',
          placeholder: 'ZIP Code',
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
          isNumeric: true,
        },
        valid: false,
        touched: false,
      },

      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Country',
        },
        value: '',
        validation: {
          required: true,
        },

        valid: false,
        touched: false,
      },

      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Mail',
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },

      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' },
          ],
        },
        value: 'fastest',
        validation: {},
        valid: true,

        // validation: {
        //   required: false
        // },
        // valid: true
      },
    },
    formIsValid: false,

    // loading: false,
  };

  //   inputChangedHandler = (event, value) => {
  //     console.log('test');

  //     if(value === "name") {

  //       this.setState(
  //           {
  //                   name: event.target.value

  //           }
  //       )
  //       console.log(this.state);
  //   }

  //   if(value === "zipCode") {
  //       this.setState(
  //           {

  //                       zipCode: event.target.value
  //               }

  //       )
  //       console.log(this.state);
  //   }

  //   if(value === "country") {
  //     this.setState(
  //         {

  //                     country: event.target.value
  //             }

  //     )
  //     console.log(this.state);
  // }

  //   if(value === "street") {
  //       this.setState(
  //           {
  //                        street: event.target.value

  //           }
  //       )
  //   }

  //   if(value === "email") {

  //       this.setState(
  //           {
  // email: event.target.value

  //           }
  //       )
  //   }

  //     if(value === 'deliveryMethod') {
  //           console.log(event.target.value);

  //         this.setState(
  //           {
  //             deliveryMethod: event.currentTarget.value
  //           }
  //         )

  //         console.log(this.state);
  //     }
  //   }

  // checkValidity(value, rules) {
  //   // let isValid = false;

  //   // if(!rules.required) {
  //   //   return true;
  //   // }

  //   // if (!rules) { ////////APPROACH USADO PARA DEIXAR VÁLIDO/EVITAR O ERRO DE 'UNDEFINED' com o objeto/elemento 'deliveryMethod' (que é nosso dropdown).... -----> contudo, esse approach aqui é pior do que o que o professor nos mostrou, pior do que o approach de simplesmente definir um objeto 'validation' de valor '{}' (objeto vazio) LÁ NO STATE, em 'deliveryMethod' --> isso fará com que nosso objeto NÃO SEJA CONSIDERADO 'undefined' pelo javascript (pq objetos vazios NÃO SÃO UNDEFINED), e isso, por sua vez, vai evitar aquele erro de 'undefined'...
  //   //   return true;
  //   // }

  //   let isValid = true; ///////FIX PARA O PROBLEMA DE VALIDAÇÃO, AQUELE PROBLEMA COMUM DE VALIDAÇÃO (problema em que uma sequência de if checks acaba afetando a propriedade 'validity' do nosso state de forma errada, pq tipo, se apenas 1 desses if checks sem o '&& isValid' no if statement RETORNAR 'TRUE', isso basicamente 'overwritaria' o valor de 'isValid' definido pelos if checks anteriores (que poderiam ter definido o valor dessa variável como sendo 'false'... ) ----> e por meio desse 'let isValid = true' e também dessa adição do check de '&& isValid' ao final de cada if statement, O PROFESSOR EVITA ESSE COMPORTAMENTO; FAZ COM QUE 'isValid' seja considerado false NAS HIPÓTESES EM QUE APENAS 1 DOS IF STATEMENTS RETORNA 'false'; apenas 1 if statement retornando false já vai ser suficiente para fazer o 'isValid' ficar como 'false', que éo  que queremos. )

  //   if (rules.required) {
  //     isValid = value.trim() !== '' && isValid;
  //   }

  //   if (rules.minLength) {
  //     isValid = value.length >= rules.minLength && isValid;
  //   }

  //   if (rules.maxLength) {
  //     isValid = value.length <= rules.maxLength && isValid;
  //   }

  //   if (rules.isEmail) {
  //     const pattern =
  //       /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  //     isValid = pattern.test(value) && isValid;
  //   }

  //   if (rules.isNumeric) {
  //     const pattern = /^\d+$/;
  //     isValid = pattern.test(value) && isValid;
  //   }

  //   return isValid;

  //   //   let isValid = true;  ///////FIX PARA O PROBLEMA DE VALIDAÇÃO, AQUELE PROBLEMA COMUM DE VALIDAÇÃO (problema em que uma sequência de if checks acaba afetando a propriedade 'validity' do nosso state de forma errada, pq tipo, se apenas 1 desses if checks sem o '&& isValid' no if statement RETORNAR 'TRUE', isso basicamente 'overwritaria' o valor de 'isValid' definido pelos if checks anteriores (que poderiam ter definido o valor dessa variável como sendo 'false'... ) ----> e por meio desse 'let isValid = true' e também dessa adição do check de '&& isValid' ao final de cada if statement, O PROFESSOR EVITA ESSE COMPORTAMENTO; FAZ COM QUE 'isValid' seja considerado false NAS HIPÓTESES EM QUE APENAS 1 DOS IF STATEMENTS RETORNA 'false'; apenas 1 if statement retornando false já vai ser suficiente para fazer o 'isValid' ficar como 'false', que éo  que queremos. )

  //   // if (rules.required) {
  //   // isValid = value.trim() !== '' && isValid;
  //   // }

  //   // if (rules.minLength) {
  //   //   isValid = value.length >= rules.minLength && isValid;
  //   // }

  //   // if (rules.maxLength) {
  //   //   isValid = value.length <= rules.maxLength && isValid;
  //   // }

  //   // return isValid;
  // }

  inputChangedHandler = (event, inputIdentifier) => {
    if (inputIdentifier === 'select') {
      ///código 'inventado' por mim. Foi inventado para dar conta do 'CASE' do ELEMENTO 'dropdown'/select....
      // const updatedOrderForm = {
      //   ...this.state.orderForm,
      // };


        const updatedFormElement = updateObject(this.state.orderForm[inputIdentifier], { ///simplificação do código que comentamos para fora nesse 'inputChangedHandler', proporcionada através do uso da helper function 'updateObject()'...
          value: event.target.currentValue
        })



      // const updatedFormElement = {
      //   ...updatedOrderForm[inputIdentifier],
      // };

        const updatedOrderForm = updateObject(this.state.orderForm, {
          [inputIdentifier]: updatedFormElement
        })




      // updatedFormElement.value = event.target.currentValue;

      // updatedOrderForm[inputIdentifier] = updatedFormElement;

      this.setState({
        orderForm: updatedOrderForm
      });

    }

    // const updatedOrderForm = {
    //   ////VER AULA 'FAZENDO HANDLE DE USER INPUT'. --> aqui professor usa UMA GRANDE GAMBIARRA para poder UPDATAR O STATE DE 'ContactData' de forma IMUTÁVEL.... (ele faz isso PQ SEMPRE QUE NÓS QUEREMOS UPDATAR UM STATE E VAMOS QUERER USAR OS DADOS DO STATE ANTERIOR, É MUITO MELHOR UPDATAR NOSSO STATE DE FORMA IMUTÁVEL, COM A AJUDA DOS SPREAD OPERATORS...) -----> entretanto, aqui surgiu um problema, pois OS SPREAD OPERATORS CRIAM CÓPIAS 'shallow' ( e não 'deep', que tem todas as propriedades e seus valores representados na cópia) --> isso significa que a ''''NOVA CÓPIA'''' não vai ser uma cópia total, algumas propriedades bem internas (como 'placeholder' e  'type' ) VÃO CONTINUAR SENDO 'pointers' ao OBJETO 'state' original, o que é péssimo... ------> para evitar isso aí, professor escreve as linhas abaixo de 'updatedOrderForm'.... (ele CLONA VERDADEIRAMENTE a propriedade 'value' dentro de nossos 'inputIdentifier' (que são os elementos 'name', 'street', 'email', 'country', no nosso state....))
    //   ...this.state.orderForm,
    // };

    // const updatedFormElement = {
    //   ...updatedOrderForm[inputIdentifier],
    // };

    const updatedFormElement = updateObject(this.state.orderForm[inputIdentifier], 
      {
        value: event.target.value,
        // valid: this.checkValidity(event.target.value, this.state.orderForm[inputIdentifier].validation),
        valid: checkValidity(event.target.value, this.state.orderForm[inputIdentifier].validation),
        touched: true
      })

    // updatedFormElement.value = event.target.value;

    // console.log(updatedFormElement.touched);

    // updatedFormElement.valid = this.checkValidity(
    //   updatedFormElement.value,
    //   updatedFormElement.validation
    // );

        const updatedOrderForm = updateObject(this.state.orderForm, {
          [inputIdentifier]: updatedFormElement
        })




    // updatedFormElement.touched = true;

    // updatedOrderForm[inputIdentifier] = updatedFormElement;

    let formIsValid = true; ////parte difícil de entender. Examinar esse for in loop logo abaixo, que é o que vai definir o valor dessa variável/ alternar entre true/false dependendo do STATUS de nossos input fields e o input que o usuário inseriu neles...

    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid; ////ISSO FARÁ COM QUE 'formIsValid' APENAS FIQUE COMO 'true' (valor de 'true') SE O VALOR NO NOSSO 'given input element ( ou seja, EM TODOS ELES, pq estamos LOOPANDO por dentro de todos eles com esse for in loop) E ___ O ___ VALOR DE 'formIsValid' __ EM SI__ JÁ ESTIVER SETTADO COMO 'true' (esse último check, de '&& formIsValid', serve para que O VALOR DE 'formIsValid' seja true __aPENAS__ QUANDO TODOS VALORES '.valid' dentor de 'updatedOrderForm[inputIdentifer]', esse elemento dinâmico, que na verdade é todos, FOR ___ DE TRUE__...)
    }

    this.setState({
      orderForm: updatedOrderForm,
      formIsValid: formIsValid,
    });

  };

  orderHandler = (event) => {
    event.preventDefault(); ///VAI PREVENIR O RELOAD DA PÁGINA.(e sim, precisamos do parâmetro 'event' para acessar esse método especial, método que PREVINE O COMPORTAMENTO DEFAULT DO BROWSER DE __RECARREGAR___ PÁGINAS QUANDO UM 'SUBMIT' OCORRE DENTRO DE UMA FORM...)


    // if(this.props.ingredients.bacon === 0 && this.props.ingredients.cheese === 0 && this.props.ingredients.meat === 0 && this.props.ingredients.salad === 0) {
    //   alert('Please build a burger before making an order!');
    //   return;
    // }

    // if(!this.state.orderForm.name.value ||
    //    !this.state.orderForm.street.value ||
    //    !this.state.orderForm.zipCode.value ||
    //    !this.state.orderForm.email.value ||
    //    !this.state.orderForm.country.value ) {

    //     alert('Please enter your contact information!');
    //     return;
    //    }

    // this.setState({ ///isso não é mais necessário, graças ao redux....
    //   loading: true,
    // });

    const orderData = {
      // ingredients: this.props.ingredients, /
      ingredients: this.props.ingr, //código que agora está usando o REDUX.
      price: this.props.price, //código que agora está usando o REDUX.
      name: this.state.orderForm.name.value,
      email: this.state.orderForm.email.value,
      street: this.state.orderForm.street.value,
      postalCode: this.state.orderForm.zipCode.value,
      country: this.state.orderForm.country.value,
      deliveryMethod: this.state.orderForm.deliveryMethod.value,
      // userId: localStorage.getItem('userId')  ///também funciona...
      userId: this.props.userId
    };


    // const userId = localStorage.getItem('userId');

    this.props.onOrderAttempt(orderData, this.props.token);

    // this.props.onPurchaseLoading();  /////////ESTA LÓGICA/DISPATCH FOI COLOCADA LÁ NO ACTION CREATOR de 'purchaseBurgerAttempt', com o call de 'dispatch(purchaseBurgerLoading());' ---> ISSO É EXECUTADO ANTES DA EXECUÇÃO DO 'axios.post', E FAZ MAIS SENTIDO DO QUE EXECUTAR AQUI, nesse 'orderHandler'...

    // const orderData = {
    //   // ingredients: this.props.ingredients, /
    //   ingredients: this.props.ingr, //código que agora está usando o REDUX.
    //   price: this.props.price, //código que agora está usando o REDUX.
    //   name: this.state.orderForm.name.value,
    //   email: this.state.orderForm.email.value,
    //   street: this.state.orderForm.street.value,
    //   postalCode: this.state.orderForm.zipCode.value,
    //   country: this.state.orderForm.country.value,
    //   deliveryMethod: this.state.orderForm.deliveryMethod.value,
    // };

    // const formData = {}; //////////CÓDIGO ALTERNATIVO DE SEND DOS DADOS DE 'ContactData'...
    // for (let formElementIdentifier in this.state.orderForm) {
    //     formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value
    // }
    // const order = {
    //       ingredients: this.props.ingredients,
    //       price: this.props.price,
    //       orderData: formData

    // }

    // axiosOrder  //////////////NÃO PRECISAMOS MAIS DESSA LÓGICA DE 'post' dessa instância do axios em 'ContactData', pois agora fazemos essa TAREFA LÁ NO ACTION CREATORS ASSÍNCRONOS/ACTIONS DE 'order.js'
    //   .post('/orders.json', orderData)
    //   .then((response) => {
    //     console.log(response);
    //     this.setState({
    //       loading: false,
    //     });
    //     this.props.history.push('/');
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     this.setState({
    //       loading: false,
    //     });
    //   });
  };

  validInputChecker = (formElement) => {
    if (!formElement.valid) {
      return false;
    }
  };

  render() {
    // console.log(this.props.redirect);
    const formElementsArray = [];

    for (let key in this.state.orderForm) {
      formElementsArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }

    let redirectToHome = null;


    let redirectToOrders = null;


    if (this.props.redirectToHome) {
      redirectToHome = <Redirect to="/" />;
    }


    if (this.props.redirectToHome && this.props.error) {
      alert(`An error has occurred: ${this.props.error}. Redirecting to Burger Builder...`)
      redirectToHome = <Redirect to="/" />;
    }



    // if (this.props.redirectToOrders) {
    //   redirectToOrders = <Redirect to="/orders" />;
    // }



    let form = (
      <div className={ContactDataStyle.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form
          onSubmit={(event) => {
            ///código ANTES DE USAR O REDUX com nosso projeto... ---> foi substituído pelo 'onBurgerAttempt', action dispatch realizado LÁ EMBAIXO, NO BUTTON, com o prop de 'clicked'...

            // if(Object.keys(this.props.ingr).length === 0) {
            //   event.preventDefault();
            //   alert('Please build a valid burger in "Burger Builder" page!');
            //   return;
            // }

            if (
              !this.state.orderForm.name.value ||
              !this.state.orderForm.street.value ||
              !this.state.orderForm.zipCode.value ||
              !this.state.orderForm.email.value ||
              !this.state.orderForm.country.value
            ) {
              alert('Please enter your contact information!');
              return;
            }

            this.orderHandler(event);
          }}
        >
          {formElementsArray.map((formElement) => {

            // if(formElement.config.elementType === 'select') {
            //   <Input elementType={formElement.config.elementType} elementConfig />
            // }
            return (
              <Input
                changed={(event) => {
                  this.inputChangedHandler(event, formElement.id);
                }}
                key={formElement.id}
                elementValue={formElement.id}
                touched={formElement.config.touched}
                invalid={!formElement.config.valid}
                elementType={formElement.config.elementType}
                shouldValidate={formElement.config.validation}
                value={formElement.value}
                elementConfig={formElement.config.elementConfig}
              />
            );
          })}

          {/* <Input
            label="Name"
            inputtype="input"
            type="text"
            placeholder="Your Name"
            onChange={(event) => {
              this.contactDataHandler(event, 'name');
            }}
          />
          <Input
            label="Email"
            inputtype="input"
            type="text"
            placeholder="Your Mail"
            onChange={(event) => {
              this.contactDataHandler(event, 'email');
            }}
          />
          <Input
            label="Street"
            inputtype="input"
            placeholder="Street"
            onChange={(event) => {
              this.contactDataHandler(event, 'street');
            }}
          />
          <Input
            label="Postal Code"
            inputtype="input"
            onWheel={(event) => event.preventDefault()}
            placeholder="Postal Code"
            onChange={(event) => {
              this.contactDataHandler(event, 'postal');
            }}
          />
          <Input
            label="Delivery Method"
            placeholder="Select"
            inputtype="dropdown"
            onChange={(event) => {
              this.contactDataHandler(event, 'dropdown');
            }}
          /> */}
          {/* <input type="text" name="name" placeholder="Your Name" onChange={(event) => { this.contactDataHandler(event, "name")}}/>
      <input type="email" id="email" pattern="(?!(^[.-].*|[^@]*[.-]@|.*\.{2,}.*)|^.{254}.)([a-zA-Z0-9!#$%&'*+\/=?^_`{|}~.-]+@)(?!-.*|.*-\.)([a-zA-Z0-9-]{1,63}\.)+[a-zA-Z]{2,15}" name="email" placeholder="Your Mail" onChange={(event) => { this.contactDataHandler(event, "email")}}/>
      <input type="text" name="street" placeholder="Street" onChange={(event) => { this.contactDataHandler(event, "street")}} />
      <input type="number" onWheel={event => event.preventDefault()} name="postal" placeholder="Postal Code" onChange={(event) => { this.contactDataHandler(event, "postal")}}/> */}
          <Button
            disabled={!this.state.formIsValid}
            btnType="Success"
            // clicked={this.props.onOrderAttempt}
            // clicked={(event) => {  ///código substituído pelo handler especial 'onSubmit', lá no início de nossa '<form />'...
            //   this.orderHandler(event);
            // }}
          >
            ORDER
          </Button>
          {redirectToHome}
          {redirectToOrders}
        </form>
      </div>
    );

    if (this.props.loading) {
      form = <Spinner />;
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
      <div>{form}</div>
    );
  }
}

// export default withRouter(ContactData); //sem redux.

const mapStateToProps = (state) => {
  return {
    ingr: state.burger.burger.ingredients,
    price: state.burger.burger.totalPrice,
    loading: state.order.loading,
    token: state.auth.token,
    redirectToHome: state.order.redirectToHome,
    userId: state.auth.userId,
    // redirectToOrders: state.order.redirectToOrders,
    error: state.order.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onOrderAttempt: (orderData, token) => {
      dispatch(actions.purchaseBurgerAttempt(orderData, token));
    },
    onPurchaseLoading: () => {
      dispatch(actions.purchaseBurgerLoading());
    },
  };
};

// const ContactDataWithRouterAndWithErrorHandler = withErrorHandler(withRouter(ContactData)); /////O 'withErrorHandler' bugou tudo...

const ContactDataWithRouter = withRouter(ContactData);
// const ContactDataWithErrorHandler = withErrorHandler(ContactData);

// export default connect(mapStateToProps, mapDispatchToProps)(ContactDataWithRouterAndWithErrorHandler); ///COM REDUX.

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContactDataWithRouter);

// export default connect(mapStateToProps, mapDispatchToProps)(ContactDataWithErrorHandler);

// contactDataHandler = (event, type) => {
//   // switch(type) {

//   //     case "postal":
//   //       this.setState(
//   //         {
//   //           customer: {address: {
//   //             postalCode: event.target.value
//   //           }
//   //         }
//   //         }
//   //       )
//   //       break;

//   //       case "name":
//   //         this.setState(
//   //           {
//   //          cusomer: {name: event.target.value}
//   //           }
//   //         )
//   //       break;
//   //       case "email":
//   //         this.setState(
//   //           {
//   //          customer: {email: event.target.value}
//   //           }
//   //         )
//   //         break;
//   //         case "street":
//   //           this.setState(
//   //             {
//   //                 customer: {
//   //                     address: {
//   //                         street: event.target.value
//   //                     }
//   //                 }
//   //             }
//   //           )

//   //           console.log('test');
//   //             break;

//   //             default:
//   //                 return;

//   // }

//   if(type === "name") {

//       this.setState(
//           {
//                   name: event.target.value

//           }
//       )
//       console.log(this.state);
//   }

//   if(type === "postal") {
//       this.setState(
//           {

//                       postalCode: event.target.value
//               }

//       )
//       console.log(this.state);
//   }

//   if(type === "street") {
//       this.setState(
//           {
//                        street: event.target.value

//           }
//       )
//   }

//   if(type === "email") {

//       this.setState(
//           {
// email: event.target.value

//           }
//       )
//   }

//     if(type === 'dropdown') {
//           console.log(event.target.value);

//         this.setState(
//           {
//             deliveryMethod: event.currentTarget.value
//           }
//         )

//         console.log(this.state);
//     }

//     }
