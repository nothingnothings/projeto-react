import React, { Component } from 'react';

import Aux from '../../hoc/Auxiliary/Auxiliary'; //usado para renderizar múltiplos react components de forma adjacente.

import BuildControls from '../../components/Burger/BuildControls/BuildControls';

import Burger from '../../components/Burger/Burger';

import Modal from '../../../src/components/UI/Modal/Modal';

import OrderSummary from '../../../src/components/Burger/OrderSummary/OrderSummary';

import Spinner from '../../../src/components/UI/Spinner/Spinner';

import axiosOrder from '../../axios-orders'; //instância especial axios

import withErrorHandler from '../../../src/hoc/withErrorHandler/withErrorHandler';
// import axios from 'axios'; //axios

import * as actionsCreators from '../../store/actions/index';



import { connect } from 'react-redux'; //redux
// import * as actionTypes from '../../store/actions/actionTypes' //redux BÁSICO (não uso mais os identifiers dessa forma simples aí...)







// const INGREDIENT_PRICES = {

// }

// const INGREDIENT_PRICES = { ///MOVIDO PARA O NOSSO REDUCER...
//   salad: 0.5,
//   bacon: 0.7,
//   cheese: 0.4,
//   meat: 1.3,
// };

// import TypeContext from '../../context/type-context';

class BurgerBuilder extends Component {
  // constructor(props) { ///SINTAXE MAIS ANTIGA, é a mesma coisa que escrever 'state = {}' ....
  //   super(props);
  //   this.state = {...}
  // }

  // static contextType = TypeContext;

  // state = {
  //   ingredients: {
  //     salad: 1,
  //     bacon: 1,
  //     cheese: 2,
  //     meat: 2
  //   }
  // };

  // state = {
  //   ingredients: {
  //     salad: 0,
  //     bacon: 0,
  //     cheese: 0,
  //     meat: 0
  //   },
  //   totalPrice: 4, //valor INICIAL do BUrger... sempre será '4'.
  //   purchasing: false,
  //   loading: false
  // };

  state = {
    // ingredients: null,  /////STATE DE TIPO '3' ------> 'Client State' ---> DEVE SER USADO O REDUX PARA PASSAR SUA PROPRIEADE DE FORMA COMPETENTE AO LONGO DO NOSSO APP... (pq é para isso que serve o redux, para passar PROPRIEDADES DO STATE de forma mais fácil a components que não são diretamente conectados...)
    // totalPrice: 4, //valor INICIAL do BUrger... sempre será '4'. /////STATE DE TIPO '3' ------> 'Client State' ---> DEVE SER USADO O REDUX PARA PASSAR SUA PROPRIEADE DE FORMA COMPETENTE AO LONGO DO NOSSO APP... (pq é para isso que serve o redux, para passar PROPRIEDADES DO STATE de forma mais fácil a components que não são diretamente conectados...)
    // purchasing: false,///STATE DE TIPO '1' ---> 'LOCAL UI STATE'  ----> esse state NÃO PRECISA SER 'MANAGED' PELO REDUX E SEU STATE GLOBAL... --> esse state aí, dessa propriedade, pode SER MANAGEADO __LOCALMENTE__, PELO STATE do próprio 'BurgerBuilder' container...  ------> E DEPOIS DE UM TEMPO, NO NOSSO CURSO, REMOVEMOS ESSA PROPRIEDADE AÍ __COMPLETAMENTE__ DO NOSSO BURGERBUILDER.... ----> nós fazemos handle da ativação do BOTÃO 'order now', agora, POR MEIO DO MÉTODO LOCAL (em 'burgerbuilder') DE 'updatePurchaseState', que vai retornar OU __ 'true' ou 'false', e é ISSO QUE É PASSADO AO NOSSO COMPONENT 'BuildControls', que possui o tal botão 'ORDER NOW', que tem um prop de 'disabled={}', que vai ficar 'true' ou 'false' dependendo do resultado de 'updatePurchaseState', e é isso que ativa/desativa aquele botão 'ORDER NOW'... ----> em decorrência disso, esse 'purchasable', TANTO NO LOCAL STATE DE 'burgerBuilder', COMO NO 'GLOBAL REDUX STATE' pode ser COMPLETAMENTE REMOVIDO, deixando apenas 'loading', 'purchasing' e 'error' nesse STATE LOCAL/TRADICIONAl... 
    purchasable: false, ///STATE DE TIPO '1' ---> 'LOCAL UI STATE'  ----> esse state NÃO PRECISA SER 'MANAGED' PELO REDUX E SEU STATE GLOBAL... --> esse state aí, dessa propriedade, pode SER MANAGEADO __LOCALMENTE__, PELO STATE do próprio 'BurgerBuilder' container...
    // loading: false, ///STATE DE TIPO '1' ---> 'LOCAL UI STATE'  ----> esse state NÃO PRECISA SER 'MANAGED' PELO REDUX E SEU STATE GLOBAL... --> esse state aí, dessa propriedade, pode SER MANAGEADO __LOCALMENTE__, PELO STATE do próprio 'BurgerBuilder' container...
    error: false, ///STATE DE TIPO '1' ---> 'LOCAL UI STATE'  ----> esse state NÃO PRECISA SER 'MANAGED' PELO REDUX E SEU STATE GLOBAL... --> esse state aí, dessa propriedade, pode SER MANAGEADO __LOCALMENTE__, PELO STATE do próprio 'BurgerBuilder' container...
 
 
  };

  componentDidMount() {
    // console.log(this.props);

    // axios
    //   .get(
    //     'https://burgerbuilder201051-default-rtdb.firebaseio.com/ingredients.json'
    //   )
    //   .then((response) => {
    //     console.log(response);
    //     console.log('test');

    //     this.setState({
    //       ingredients: response.data,
    //     });
    //   })
    //   .catch((error) => {
    //     this.setState({
    //       error: true,
    //     });
    //   });
      this.props.onIngredientGet();
      this.props.onRedirectToHomeReset();










  }


    updatePurchaseState(ingredients) {
      console.log(ingredients);
      if(ingredients === null) {
        return;
      }
      const sum = Object.keys(ingredients)
      .map (igKey => {
        return ingredients[igKey];
      })
      .reduce ( (sum, el) => {
        return sum + el;
      }, 0);
      // this.setState(
      //   {purchasable: sum > 0} 
      // );


      return sum > 0;
    }




  // addIngredientHandler = (type) => {
  //   const oldCount = this.state.ingredients[type];
  //   const updatedCount = oldCount + 1;
  //   const updatedIngredients = {
  //     ...this.state.ingredients,
  //   };
  //   updatedIngredients[type] = updatedCount;
  //   const priceAddition = INGREDIENT_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice + priceAddition;
  //   this.setState({
  //     totalPrice: newPrice,
  //     ingredients: updatedIngredients,
  //   });
  //   this.updatePurchaseState( updatedIngredients);
  // };

  purchaseHandler = () => {

    // if(this.state.ingredients.bacon === 0 && this.state.ingredients.cheese === 0 && this.state.ingredients.meat === 0 && this.state.ingredients.salad === 0) {
    //   alert('Please add some ingredients before proceeding!');
    //   return;
    // }

    // if(this.props.ingr.bacon === 0 && this.props.ingr.cheese === 0 && this.props.ingr.meat === 0 && this.props.ingr.salad === 0) {
    //   alert('Please add some ingredients before proceeding!');
    //   return;
    // }







        if (!this.props.token) {
            // this.props.onBurgerCreateWithoutAuth();
        
            this.props.onSetAuthRedirectPath('/checkout');
            this.props.history.push('/auth');
        }


    this.setState({
      purchasing: true,
    });
  };

  // purchaseContinueHandler = () => { //////NÃO USAMOS MAIS ESSE MÉTODO, pois agora temos O __REDUX___ PARA PASSAR O 'INGREDIENT STATE' aos containers de 'checkout' e 'contactData' (isso nos deixa abandonar esse código de queryParams, que antes cumpria essa função de passar 'ingredients' a nossos outros containers/páginas...)
  //   ///////OBS::: colocar '.json' DO LADO DO PATH/NODE a que você está querendo enviar o HTTP REQUEST  ___ É ALGO QUE __ SÓ É OBRIGATÓRIO PARA SERVIDORES __fIREBASE; EM OUTROS TIPOS DE SERVIDORES, ESSE '.json' AO FINAL __NÃO É NECESSÁRIO___... ---> pq isso? PQ ESSE É O ___eNDPOINT QUE ___ O FIREBASE__ PRECISA TARGETTAR PARA QUE A FEATURE DO FIREBASE DE 'AUTOMATIC CREATION' DOS NODES/PATHS CONSIGA FUNCIONAR CORRETAMENTE.

  //   //   this.setState({
  //   //     loading: true
  //   //   })

  //   // const orderData = {

  //   //     ingredients: this.state.ingredients,
  //   //   price: this.state.totalPrice,
  //   //     customer: {
  //   //       name: 'Max schwarzmuller',
  //   //       address: {
  //   //         street: 'Teststreet 1',
  //   //         zipCode: '41351',
  //   //         country: 'Germany'
  //   //       },
  //   //       email: 'test@test.com'
  //   //     },

  //   //     deliveryMethod: 'fastest'

  //   // }

  //   // axiosOrder.post('/orders.json', orderData).then(

  //   //   (response) => {
  //   //     this.setState({
  //   //       loading: false,
  //   //       purchasing: false
  //   //     });
  //   //   }
  //   // )
  //   // .catch(error => {
  //   //   this.setState(
  //   //     {
  //   //       loading: false,
  //   //       purchasing: false
  //   //     }
  //   //   )
  //   // }
  //   // )

  //   const queryParams = [];
  //   for (let i in this.state.ingredients) {
  //     queryParams.push(
  //       encodeURIComponent(i) +
  //         '=' +
  //         encodeURIComponent(this.state.ingredients[i])
  //     );
  //   }

  //   queryParams.push('price=' + this.state.totalPrice);

  //   const queryString = queryParams.join('&');

  //   console.log(queryParams);

  //   this.props.history.push({
  //     pathname: '/checkout',
  //     search: '?' + queryString,
  //   });
  // };

  // removeIngredientHandler = (type) => {
  //   const oldCount = this.state.ingredients[type];
  //   const updatedCount = oldCount - 1;
  //   const updatedIngredients = {
  //     ...this.state.ingredients,
  //   };
  //   updatedIngredients[type] = updatedCount;
  //   const priceDeduction = INGREDIENT_PRICES[type];
  //   const oldPrice = this.state.totalPrice;
  //   const newPrice = oldPrice - priceDeduction;

  //   // if(oldCount <= 0) { ////////CÓDIGO DEPRECADO, É UMA VERSÃO MAIS RUDIMENTAR DA FEATURE DE 'IMPEDIR QUE O USUÁRIO CRASHE O CÓDIGO POR MEIO DA REMOÇÃO DE UM NÚMERO DE INGREDIENTS QUE JÁ NÃO EXISTE NO HAMBURGUER' (reduzir o número de ingredients de '0' para '-1') --> para isso, o professor USOU o prop de 'disabled', e a const de 'disabledInfo', DEFINIDA EM BURGERBUILDER...
  //   //   return (
  //   //     <p>{alert("You can't remove any more of that ingredient")}</p>
  //   //   );
  //   // }

  //   this.setState({
  //     totalPrice: newPrice,
  //     ingredients: updatedIngredients,
  //   });
  //   this.updatePurchaseState( updatedIngredients);
  // };


  purchaseContinueHandler = () => { ///ESSA SERÁ A VERSÃO 'purchaseContinueHandler' USADA __ COM O APPROACH QUE UTILIZA 'REDUX'... (mais avançado).
      // this.props.onPurchaseInit();
    this.props.history.push('/checkout'); ///só vamos navegar o usuário até essa página, e nada mais do que isso...
    
    }





  purchaseCancelHandler = () => {
    this.setState({
      purchasing: false
    });

    
  };



  render() {
      console.log(this.props.ingr);





    // let ingredientCount = null;

    // if (this.state.ingredients) {
    //   ingredientCount = Object.values(this.state.ingredients);

    //   let ingredientCountSum = ingredientCount.reduce(
    //     (oldNumber, newNumber) => {
    //       return oldNumber + newNumber;
    //     }
    // )

    // if(!ingredientCountSum) {
    //   ingredientCountSum = true;
    //   return ingredientCountSum;
    // } else {
    //   ingredientCountSum = false;
    //   return ingredientCountSum;
    // }

    // }

    // let modalContent = (<OrderSummary ingredients={this.state.ingredients} price={this.state.totalPrice} clicked={this.purchaseCancelHandler} success={this.purchaseContinueHandler}></OrderSummary>)

    let modalContent = null;

    // let burger = this.state.error ? (
      let burger = this.props.error ? (
      <p>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );

    // const disabledInfo = {
    //   ...this.state.ingredients,
    // };

    const disabledInfo = {
      ...this.props.ingr
    };



    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0; //parte da direita: CHECK BEM IMPORTANTE. RETORNA ou o valor 'true', ou 'false' para AQUELA DETERMINADA KEY (disabledInfo[key]) definida na direita... (que será 'cheese: true', 'meat: false', etc, dependendo desse check da direita...)
    }


    // if (!this.props.ingr) {
    //   console.log('test');
    //   burger = (
    //     <Aux>
    //     <Burger ingredients={this.props.initialIngr} />
    //     <BuildControls
    //       disabled={disabledInfo} 
    //       price={this.props.price}
    //       ingredientAdded={(ingredientId) => {this.props.onIngredientAdd(ingredientId)}}
    //       ingredientRemoved={(ingredientId) => {this.props.onIngredientRemove(ingredientId)}}
    //       purchasable={this.updatePurchaseState(this.props.ingr)} 
    //       ordered={this.purchaseHandler}
    //     />
    //   </Aux>
    //   )
    // }
    


    // if (this.state.ingredients) {

    if (this.props.ingr){
      //1
      burger = (
        <Aux>
          {/* <Burger ingredients={this.state.ingredients} /> */}
          <Burger ingredients={this.props.ingr} />
          <BuildControls
            token={this.props.token} ///equivalente a 'isAuthenticated', na aula do professor..
            disabled={disabledInfo} //'disabledInfo' será uma constante que terá aquele objeto com a 'CÓPIA DO STATE DE INGREDIENTS', mas aquela cópia tem uma alteração no INGREDIENT que será/não será removido, que estará tipo assim: 'cheese: false', ou 'bacon: true', etc.....
            price={this.props.price}
            // ingredientAdded={this.addIngredientHandler}
            ingredientAdded={(ingredientId) => {this.props.onIngredientAdd(ingredientId)}}
            // ingredientRemoved={this.removeIngredientHandler}
            ingredientRemoved={(ingredientId) => {this.props.onIngredientRemove(ingredientId)}}
            // purchasable={!this.state.purchasable}
            // purchasable={this.props.purchasable}
            purchasable={this.updatePurchaseState(this.props.ingr)} //código alterado, agora funciona com REDUX...
            ordered={this.purchaseHandler}
          />
        </Aux>
      );

      modalContent = (
        <OrderSummary
          ingredients={this.props.ingr}
          price={this.props.totalPrice}
          clicked={this.purchaseCancelHandler}
          success={this.purchaseContinueHandler}
        ></OrderSummary>
      ); //2
    }

    // if (this.state.loading) { //não usamos mais isto. Agora o 'loading', essa propriedade no state, É GERENCIADA/HANDLADA LÁ NO REDUX...
    //   //3
    //   modalContent = <Spinner />;
    // }

    return (
      <Aux>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {modalContent}
        </Modal>
        {burger}
        {/* <Burger ingredients={this.state.ingredients}/>
        <BuildControls 
        disabled={disabledInfo} //'disabledInfo' será uma constante que terá aquele objeto com a 'CÓPIA DO STATE DE INGREDIENTS', mas aquela cópia tem uma alteração no INGREDIENT que será/não será removido, que estará tipo assim: 'cheese: false', ou 'bacon: true', etc.....
        price={this.state.totalPrice}
        ingredientAdded={this.addIngredientHandler} 
        ingredientRemoved={this.removeIngredientHandler}
         disableButton={ingredientCountSum}
         ordered={this.purchaseHandler}
      
         /> */}
      </Aux>
    );
  }
}


const mapStateToProps = state => {
        return {
            ingr: state.burger.burger.ingredients,
            price: state.burger.burger.totalPrice,
            purchasable: state.burger.burger.purchasable,
            // initialIngr: state.order.initialIngr.ingredients
            error: state.burger.error,
            token: state.auth.token !== null
        }

}

const mapDispatchToProps = (dispatch) => {
            // return {
            //   onIngredientAdd: (ingredientId) => {
            //     dispatch(
            //       {
            //         type: actionTypes.INGREDIENT_ADD,
            //         ingredientName: ingredientId
            //       }
            //     )
            //   },
            //   onIngredientRemove: (ingredientId) => {
            //     dispatch(
            //       {
            //         type: actionTypes.INGREDIENT_REMOVE,
            //         ingredientName: ingredientId
            //       }
            //     )
            //   }
            // }
            return {
              onIngredientAdd: (ingredientId) => {
                dispatch(
                  actionsCreators.ingredient_add(ingredientId)
                )
              },
              onIngredientRemove: (ingredientId) => {
                dispatch(
                    actionsCreators.ingredient_remove(ingredientId)
                )
              },
              onIngredientGet: () => {
                dispatch(
                      actionsCreators.asyncOrderInitialIngredientsGet()
                )
              },
              // onBurgerCreateWithoutAuth: () => {
              //   dispatch(
              //     actionsCreators.burgerCreate()
              //   )
              // },
              onSetAuthRedirectPath: (path) => dispatch(actionsCreators.setAuthRedirectPath(path)),

              // onPurchaseInit: () => {
              //   dispatch(
              //     orderActionTypes.purchaseInit()
              //   )
              // }
              onRedirectToHomeReset: () => dispatch(actionsCreators.redirectToHomeResetter())
            }
}



const BurgerBuilderWithHocs = withErrorHandler(BurgerBuilder, axiosOrder);



// export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axiosOrder))



export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilderWithHocs);