import React, { Component } from 'react';

import Modal from '../../components/UI/Modal/Modal';

import Aux from '../Auxiliary/Auxiliary';

//  const withErrorHandler = (WrappedComponent, axios) => {
//      return (props) => {
//          return (
//              <Aux>
//                  <Modal show>Something went wrong!</Modal>
//              <WrappedComponent {...props}/>
//              </Aux>
//          );
//      }
//  };

const withErrorHandler = (WrappedComponent, axios) => {


    

      
  







  return class extends Component {



      constructor(props) {
        super(props);
        this.state = {
          error: null
        };

        axios.interceptors.request.use(
              req => {
                this.setState({error: null});
                return req;
              }
        )

        axios.interceptors.response.use(res => res, error => {
          this.setState({
            error: error
          })
          console.log("Error: " + error.message);
        })
      }










    state = {
      error: null
  };  





    errorConfirmedHandler = () => {
        this.setState(
            {
                error: null
            }
        )
    }



    // componentDidMount() { ///para o set de AXIOS INTERCEPTORS que são executados no INÍCIO DO RUNTIME DE NOSSO CÓDIGO (bem no início do make dos http requests enviados ao servidor; no início do runtime), SEMPRE PREFIRA DEFINIR OS INTERCEPTORS DENTRO DO RENDER DO SEU COMPONENT, e não nesse 'componentDidMount'...   outra alternativa seria 'componentWillMount', mas esse lifecycle hook específico será __DESCONTINUADO NO FUTURO__, por isso é melhor settar os axios interceptors _NO RENDER (mas não no 'return' em si) __ DE NOSSOS COMPONENTS___... (como fazemos neste exemplo do 'withErrorhHandler')...

    //     axios.interceptors.request.use(
    //         request => {
    //             this.setState(
    //                 {error: null}
    //             )
    //             return request;
    //         }
    //     )


    
    //   axios.interceptors.response.use(res => res, (error) => {

    //     this.setState(
    //         {
    //             error: error
    //         }
    //     )

        
        
  



    //   });
    // }










///isto não funciona mais. Deprecado.
//  componentWillMount() { ///para o set de AXIOS INTERCEPTORS que são executados no INÍCIO DO RUNTIME DE NOSSO CÓDIGO (bem no início do make dos http requests enviados ao servidor; no início do runtime), SEMPRE PREFIRA DEFINIR OS INTERCEPTORS DENTRO DO RENDER DO SEU COMPONENT, e não nesse 'componentDidMount'...   outra alternativa seria 'componentWillMount', mas esse lifecycle hook específico será __DESCONTINUADO NO FUTURO__, por isso é melhor settar os axios interceptors _NO RENDER (mas não no 'return' em si) __ DE NOSSOS COMPONENTS___... (como fazemos neste exemplo do 'withErrorhHandler')...

//         axios.interceptors.request.use(
//             request => {
//                 this.setState(
//                     {error: null}
//                 )
//                 return request;
//             }
//         )


    
//       axios.interceptors.response.use(res => res, (error) => {

//         this.setState(
//             {
//                 error: error
//             }
//         )

        
        
  



//       });
//     }



componentWillMount() {


            
  this.reqInterceptor = axios.interceptors.request.use(
              req => {
                this.setState({error: null});
                return req;
              }
        )


     this.resInterceptor = axios.interceptors.response.use(res => res, error => {
          this.setState({
            error: error
          })
          console.log("Error: " + error.message);
        })
}









componentWillUnmount() {
  console.log('Will Unmount', this.reqInterceptor, this.resInterceptor)
  axios.interceptors.request.eject(this.reqInterceptor);

  axios.interceptors.response.eject(this.resInterceptor);
}










    render() {



    





      return ( //obs: aquela propriedade 'message' É ALGO QUE EXISTE NATIVAMENTE NO OBJETO 'error' QUE NOS É RETORNADO/CONCEDIDO PELO firebase EM SI (e repassado pelo axios), QUANDO ALGUM ERRO OCORRE DURANTE O RUNTIME DO NOSSO APLICATIVO...

        <Aux>
        <Modal show={this.state.error} modalClosed={this.errorConfirmedHandler}>
            
            {this.state.error ? this.state.error.message : null}
            
            </Modal>
        <WrappedComponent {...this.props} />
      </Aux>



       
      );
    }
  };
};

export default withErrorHandler;
