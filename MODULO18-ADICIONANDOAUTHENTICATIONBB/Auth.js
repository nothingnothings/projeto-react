import React, { Component } from 'react';

import Button from '../../components/UI/Button/Button';
import Input from '../../components/UI/Input/Input';



class Auth extends Component {

  state = {
    controls: { //////////MESMO FORMATO DE 'CRIAÇÃO DE INPUT FIELDS' usado em 'ContactData', mas dessa vez nessa 'página especial' de 'Auth.js'... --->  e, como em 'Auth.js', USAREMOS O __STATE__ LOCAL DE  UM CONTAINER ('Auth.js', nesse caso) PARA ___cRIAR___ E EDITAR/CUSTOMIZAR NOSSOS INPUT FIELDS...
      email: {
        elementType: 'input',   
        elementConfig: {
          type: 'email',
          placeholder: 'Your Mail Address'
        },
        value: '',
        validation: {  
          required: true,
          isEmail: true
        } ,
        valid: false,
        touched: false
      },

       password: {
        elementType: 'input',   
        elementConfig: {
          type: 'password',
          placeholder: 'Your Password'
        },
        value: '',
        validation: {  
          required: true,
          //isPassword: true
        } ,
        valid: false,
        touched: false
      }
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


    const controlElementsArray = []; ///MUITO IMPORTANTE.... --> é isso que vai realmente CRIAR NOSSOS INPUT FIELDS (o de 'email' e o de 'password') A PARTIR DOS OBJETOS 'control' (como 'email' e 'password') que temos no STATE LOCAL DESSE 'Auth'...
    for(let key in this.state.controls) {
      controlElementsArray.push(
        {
          id: key, 
          config: this.state.controls[key]
        }
      )
    }
  
  
  
  let form = (
      <div>
        <form>
        {controlElementsArray.map( ////ESSE É O __MESMO CÓDIGO/MODELO __ usado lá em 'ContactData'...
            (controlElement) => {
              return (
                <Input changed={(event) => {this.inputChangedHandler(event, controlElement.id)}}
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
            }
  
  
  
        )}
        </form>
        {/* <Button>SIGNUP</Button>
        <Button>SIGN-IN</Button>  -------> ESSES BUTTONS VÃO SER COLOCADOS ALI EMBAIXO, e não aqui dentro.... (decisão do professor...)*/}
      </div>
  
  
  )
  
    return <div>
     <form>
      {form}
      <Button btnType="Success">SUBMIT</Button>
      </form>
      
      </div>
    
  }
}

export default Auth;
