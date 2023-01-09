import React, { Component } from 'react';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';

import AuthStyle from './Auth.module.css';

import * as actions from '../../store/actions/index';

import { connect } from 'react-redux';


import { Redirect } from 'react-router-dom';

import Spinner from '../../components/UI/Spinner/Spinner';
// import { redirect } from 'statuses';
// import { Redirect } from 'react-router-dom';

class Auth extends Component {
  state = {
    controls: {
      //////////MESMO FORMATO DE 'CRIAÇÃO DE INPUT FIELDS' usado em 'ContactData', mas dessa vez nessa 'página especial' de 'Auth.js'... --->  e, como em 'Auth.js', USAREMOS O __STATE__ LOCAL DE  UM CONTAINER ('Auth.js', nesse caso) PARA ___cRIAR___ E EDITAR/CUSTOMIZAR NOSSOS INPUT FIELDS...
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Mail Address',
        },
        value: '',
        validation: {
          required: true,
          isEmail: true,
        },
        valid: false,
        touched: false,
      },

      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Your Password',
        },
        value: '',
        validation: {
          required: true,
          //isPassword: true,
          minLength: 6,
        },
        valid: false,
        touched: false,
      },
    },
    isSignup: true,
  };

  checkValidity(value, rules) {
    let isValid = true;

    if (rules.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }

    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }

    if (rules.isEmail) {
      const pattern =
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
      isValid = pattern.test(value) && isValid;
    }

    // if (rules.isNumeric) {
    //   const pattern = /^\d+$/;
    //   isValid = pattern.test(value) && isValid;
    // }

    return isValid;
  }

  inputChangedHandler = (event, inputIdentifier) => {
    //OBS: ESTA PARTE INICIAL É __NOSSO __vELHO CÓDIGO___ DE 'inputChangedHandler', conforme ele fora usado em 'ContactData', em aulas anteriores.... ---> ENTRETANTO, PROFESSOR ESCREVEU UMA VERSÃO MAIS OPTIMIZADA/MENOR deste mesmo código, ADAPTADA para 'Auth.js', que você pode encontrar mais abaixo...
    //   // if (inputIdentifier === 'select') {
    //   //   ///código 'inventado' por mim. Foi inventado para dar conta do 'CASE' do ELEMENTO 'dropdown'/select....
    //   //   const updatedOrderForm = {
    //   //     ...this.state.orderForm,
    //   //   };

    //   //   const updatedFormElement = {
    //   //     ...updatedOrderForm[inputIdentifier],
    //   //   };

    //   //   updatedFormElement.value = event.target.currentValue;

    //   //   updatedOrderForm[inputIdentifier] = updatedFormElement;

    //   //   this.setState({
    //   //     orderForm: updatedOrderForm,
    //   //   });

    //   //   console.log(this.state);
    //   // }
    //   const updatedControls = {
    //     ////VER AULA 'FAZENDO HANDLE DE USER INPUT'. --> aqui professor usa UMA GRANDE GAMBIARRA para poder UPDATAR O STATE DE 'ContactData' de forma IMUTÁVEL.... (ele faz isso PQ SEMPRE QUE NÓS QUEREMOS UPDATAR UM STATE E VAMOS QUERER USAR OS DADOS DO STATE ANTERIOR, É MUITO MELHOR UPDATAR NOSSO STATE DE FORMA IMUTÁVEL, COM A AJUDA DOS SPREAD OPERATORS...) -----> entretanto, aqui surgiu um problema, pois OS SPREAD OPERATORS CRIAM CÓPIAS 'shallow' ( e não 'deep', que tem todas as propriedades e seus valores representados na cópia) --> isso significa que a ''''NOVA CÓPIA'''' não vai ser uma cópia total, algumas propriedades bem internas (como 'placeholder' e  'type' ) VÃO CONTINUAR SENDO 'pointers' ao OBJETO 'state' original, o que é péssimo... ------> para evitar isso aí, professor escreve as linhas abaixo de 'updatedOrderForm'.... (ele CLONA VERDADEIRAMENTE a propriedade 'value' dentro de nossos 'inputIdentifier' (que são os elementos 'name', 'street', 'email', 'country', no nosso state....))
    //     ...this.state.controls,
    //   };

    //   const updatedControlElement = {
    //     ...updatedControls[inputIdentifier],
    //   };

    //   updatedControlElement.value = event.target.value;

    //   console.log(updatedControlElement.touched);

    //   updatedControlElement.valid = this.checkValidity(
    //     updatedControlElement.value,
    //     updatedControlElement.validation
    //   );

    //   updatedControlElement.touched = true;

    //   updatedControls[inputIdentifier] = updatedControlElement;

    //   let formIsValid = true; ////parte difícil de entender. Examinar esse for in loop logo abaixo, que é o que vai definir o valor dessa variável/ alternar entre true/false dependendo do STATUS de nossos input fields e o input que o usuário inseriu neles...

    //   for (let inputIdentifier in updatedControls) {
    //     formIsValid = updatedControls[inputIdentifier].valid && formIsValid; ////ISSO FARÁ COM QUE 'formIsValid' APENAS FIQUE COMO 'true' (valor de 'true') SE O VALOR NO NOSSO 'given input element ( ou seja, EM TODOS ELES, pq estamos LOOPANDO por dentro de todos eles com esse for in loop) E ___ O ___ VALOR DE 'formIsValid' __ EM SI__ JÁ ESTIVER SETTADO COMO 'true' (esse último check, de '&& formIsValid', serve para que O VALOR DE 'formIsValid' seja true __aPENAS__ QUANDO TODOS VALORES '.valid' dentor de 'updatedOrderForm[inputIdentifer]', esse elemento dinâmico, que na verdade é todos, FOR ___ DE TRUE__...)
    //   }

    //   this.setState({
    //     orderForm: updatedControls,
    //     formIsValid: formIsValid,
    //   });

    //   console.log(this.state);
    //   console.log(formIsValid);
    // };

    console.log(this.state);
    const updatedControls = {
      ///é o mesmo código comentado para fora, visto ali em cima, mas menor...
      ...this.state.controls,
      [inputIdentifier]: {
        ...this.state.controls[inputIdentifier],
        value: event.target.value,
        valid: this.checkValidity(
          event.target.value, //'value'
          this.state.controls[inputIdentifier].validation
        ), //'rules'...
        touched: true,
      },
    };

    this.setState({ controls: updatedControls });
    console.log(updatedControls);
  };

  submitHandler = (event) => {
    ////'event' será passado JUSTAMENTE para __CONSEGUIR ___ executar 'event.preventDefault()'... (o que vai prevenir o RELOAD DE NOSSA PÁGINA QUANDO CLICAMOS EM 'submit', no BOTÃO/BUTTON de 'submit' DENTRO DE 'form'...)
    event.preventDefault(); ///OBS: sim, você pode 'pegar' event diretamente aqui, nesse método, sem passá-lo antes lá em 'onSubmit={...}'...
    this.props.onAuthAttempt(
      this.state.controls.email.value,
      this.state.controls.password.value,
      this.state.isSignup
    ); //pass desses valores como PARÂMETROS da action 'authAttempt()', lá em 'auth.js'...  --> o 'true'/this.state.isSignup é USADO COMO VALOR DO PARÂMETRO 'isSignup' em 'authAttempt'.... (terceiro parâmetro).
  };

  switchAuthModeHandler = () => {

    // if (this.state.isSignup) {
      ////isso vai EVITAR que um request seja enviado NA PRIMEIRA VEZ em que o usuário clica em 'SIGN-IN'/SWITCH TO SIGN-IN
      // return;
      this.setState((prevState) => {
        return { isSignup: !prevState.isSignup };
      });

    // }
    // this.setState((prevState) => {
    //   return { isSignup: !prevState.isSignup };
    // });

    // this.props.onAuthAttempt(
    //   this.state.controls.email.value,
    //   this.state.controls.password.value,
    //   this.state.isSignup
    // );
  };








  componentDidMount() {

    console.log(this.props.authRedirectPath)
    console.log(this.props.authRedirectPath !== '/');
    if (!this.props.createdBurger && this.props.authRedirectPath !== '/' ) {
      console.log('test');
      this.props.onSetAuthRedirectPath('/');
      
      
    } 
  }






  render() {
    // return ( ////código inicial meu. Ruim...
    //         <div>
    //             <form>
    //                 <Input />
    //                 <Input />
    //                 <Button />
    //             </form>
    //         </div>

    // );
      console.log(this.props.authRedirectPath);



    const controlElementsArray = []; ///MUITO IMPORTANTE.... --> é isso que vai realmente CRIAR NOSSOS INPUT FIELDS (o de 'email' e o de 'password') A PARTIR DOS OBJETOS 'control' (como 'email' e 'password') que temos no STATE LOCAL DESSE 'Auth'...
    for (let key in this.state.controls) {
      controlElementsArray.push({
        id: key,
        config: this.state.controls[key],
      });
    }




      let errorMessage = null;

      let switchMessage = 'SIGN-IN';


      // let redirect = null;


    if(!this.state.isSignup) {
      switchMessage = 'SIGN-UP';
    }



    let form = !this.props.loading 
    
    ? 
    
    (
      controlElementsArray.map(
        // <div>
        //   <form>

        ////ESSE É O __MESMO CÓDIGO/MODELO __ usado lá em 'ContactData'...
        (controlElement) => (
          <Input
            changed={(event) => {
              this.inputChangedHandler(event, controlElement.id);
            }}
            key={controlElement.id} ///'id: key'...
            elementValue={controlElement.id}
            touched={controlElement.config.touched}
            invalid={!controlElement.config.valid}
            elementType={controlElement.config.elementType}
            shouldValidate={controlElement.config.validation}
            value={controlElement.value}
            elementConfig={controlElement.config.elementConfig}
          />
        )
      )
    ) 
    
    : 
    
    (
      <Spinner />
    );



    if (this.props.error) {
      errorMessage = (
          <p style={{
            color: 'red'
          }}>{this.props.error.message.replaceAll('_'," ")}</p>
      )
  }






//   if (this.props.token) {
//     console.log(this.props);
//     redirect = (
    
//     // <Redirect to="/" />
//     <Redirect to='/' />
    
    
//     )
// }






//   if (this.props.token && this.props.createdBurger) {
//     console.log(this.props.authRedirectPath);
//       redirect = (
        
//       // <Redirect to="/" />
//       <Redirect to={this.props.authRedirectPath} />
      
      
//       )
//   }




  // if (this.props.token && this.props.createdBurger) {
  //   console.log('test');
  //   redirect = (<Redirect to="/checkout" />)


    
  // }

  let redirect = null;


  if (this.props.token) {
      redirect = (<Redirect to={this.props.authRedirectPath} />)
  }













    // </form>
    //   {/* <Button>SIGNUP</Button>
    //   <Button>SIGN-IN</Button>  -------> ESSES BUTTONS VÃO SER COLOCADOS ALI EMBAIXO, e não aqui dentro.... (decisão do professor...)*/}
    // // </div>

    return (
      <div className={AuthStyle.Auth}>
        {/* <div className="Auth"> */}
        <form onSubmit={this.submitHandler}>
          {form}
          <Button btnType="Success">SUBMIT</Button>
        </form>
        <Button btnType="Danger" clicked={this.switchAuthModeHandler}>
          SWITCH TO {switchMessage}
        </Button>
        {this.state.isSignup ? (
          <p>Already have an account? Switch to Sign-in and enter with your account! </p>
        ) : null}
        {errorMessage}
        {redirect}
        {/* <Redirect to={this.props.authRedirectPath} /> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    token: state.auth.token !== null,
    authRedirectPath: state.auth.authRedirectPath,
    createdBurger: state.burger.createdBurger,

  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAuthAttempt: (email, password, isSignup) => {
      dispatch(actions.authAttempt(email, password, isSignup));
    },
    onSetAuthRedirectPath: (path) => {
        dispatch(actions.setAuthRedirectPath(path))
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
