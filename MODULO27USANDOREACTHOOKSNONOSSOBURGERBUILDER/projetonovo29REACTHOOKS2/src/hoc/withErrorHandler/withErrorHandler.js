import React, { Component, useEffect, useState } from 'react';

import Modal from '../../components/UI/Modal/Modal';

import Aux from '../Auxiliary/Auxiliary';

import useHttpErrorHandler from '../../hooks/http-error-handler';


// import axios from 'axios';

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

// const withErrorHandler = (WrappedComponent, axios) => {
//   return class extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         error: null,
//       };

//       axios.interceptors.request.use((req) => {
//         this.setState({ error: null });
//         return req;
//       });

//       axios.interceptors.response.use(
//         (res) => res,
//         (error) => {
//           this.setState({
//             error: error,
//           });
//           console.log('Error: ' + error.message);
//         }
//       );
//     }

//     state = {
//       error: null,
//     };

//     errorConfirmedHandler = () => {
//       this.setState({
//         error: null,
//       });
//     };

//     // componentDidMount() { ///para o set de AXIOS INTERCEPTORS que são executados no INÍCIO DO RUNTIME DE NOSSO CÓDIGO (bem no início do make dos http requests enviados ao servidor; no início do runtime), SEMPRE PREFIRA DEFINIR OS INTERCEPTORS DENTRO DO RENDER DO SEU COMPONENT, e não nesse 'componentDidMount'...   outra alternativa seria 'componentWillMount', mas esse lifecycle hook específico será __DESCONTINUADO NO FUTURO__, por isso é melhor settar os axios interceptors _NO RENDER (mas não no 'return' em si) __ DE NOSSOS COMPONENTS___... (como fazemos neste exemplo do 'withErrorhHandler')...

//     //     axios.interceptors.request.use(
//     //         request => {
//     //             this.setState(
//     //                 {error: null}
//     //             )
//     //             return request;
//     //         }
//     //     )

//     //   axios.interceptors.response.use(res => res, (error) => {

//     //     this.setState(
//     //         {
//     //             error: error
//     //         }
//     //     )

//     //   });
//     // }

//     ///isto não funciona mais. Deprecado.
//     //  componentWillMount() { ///para o set de AXIOS INTERCEPTORS que são executados no INÍCIO DO RUNTIME DE NOSSO CÓDIGO (bem no início do make dos http requests enviados ao servidor; no início do runtime), SEMPRE PREFIRA DEFINIR OS INTERCEPTORS DENTRO DO RENDER DO SEU COMPONENT, e não nesse 'componentDidMount'...   outra alternativa seria 'componentWillMount', mas esse lifecycle hook específico será __DESCONTINUADO NO FUTURO__, por isso é melhor settar os axios interceptors _NO RENDER (mas não no 'return' em si) __ DE NOSSOS COMPONENTS___... (como fazemos neste exemplo do 'withErrorhHandler')...

//     //         axios.interceptors.request.use(
//     //             request => {
//     //                 this.setState(
//     //                     {error: null}
//     //                 )
//     //                 return request;
//     //             }
//     //         )

//     //       axios.interceptors.response.use(res => res, (error) => {

//     //         this.setState(
//     //             {
//     //                 error: error
//     //             }
//     //         )

//     //       });
//     //     }

//     componentWillMount() {
//       this.reqInterceptor = axios.interceptors.request.use((req) => {
//         this.setState({ error: null });
//         return req;
//       });

//       this.resInterceptor = axios.interceptors.response.use(
//         (res) => res,
//         (error) => {
//           this.setState({
//             error: error,
//           });
//           console.log('Error: ' + error.message);
//         }
//       );
//     }

//     componentWillUnmount() {
//       axios.interceptors.request.eject(this.reqInterceptor);

//       axios.interceptors.response.eject(this.resInterceptor);
//     }

//     render() {
//       return (
//         //obs: aquela propriedade 'message' É ALGO QUE EXISTE NATIVAMENTE NO OBJETO 'error' QUE NOS É RETORNADO/CONCEDIDO PELO firebase EM SI (e repassado pelo axios), QUANDO ALGUM ERRO OCORRE DURANTE O RUNTIME DO NOSSO APLICATIVO...

//         <Aux>
//           <Modal
//             show={this.state.error}
//             modalClosed={this.errorConfirmedHandler}
//           >
//             {this.state.error ? this.state.error.message : null}
//           </Modal>
//           <WrappedComponent {...this.props} />
//         </Aux>
//       );
//     }
//   };
// };

const withErrorHandler = (WrappedComponent, axios) => {
  //versão que RETORNA UM FUNCTIONAL COMPONENT desse withErrorHandler... (versão reacthooks)... 

  //OBS: DEPOIS VIROU UMA VERSÃO QUE __ USA __ O NOSSO '  CUSTOM HOOK' DE 'useHttpErrorHandler', para reduzir um pouco da lógica DENTRO DESSE HOC.... (outsourceamos um pouco de nossa lógica, com isso, ao nosso hook de 'useHttpErrorHandler'...)

  // return props => {
  //   const [error, setError] = useState(null);

  //   const errorConfirmedHandler = () => {
  //     setError(null);
  //   };

  //   const reqInterceptor = axios.interceptors.request.use((req) => {
  //     setError(null);
  //     return req;
  //   });

  //   const resInterceptor = axios.interceptors.response.use(
  //     (res) => res,
  //     (error) => {
  //       setError(error);
  //       console.log('Error: ' + error.message);
  //     }
  //   );

  //   useEffect(() => {
  //     return () => {
  //       axios.interceptors.request.eject(reqInterceptor);

  //       axios.interceptors.response.eject(resInterceptor);
  //     };
  //   }, [reqInterceptor, resInterceptor]);

  //   return (
  //     <Aux>
  //       <Modal show={error} modalClosed={errorConfirmedHandler}>
  //         {error ? error.message : null}
  //       </Modal>
  //       <WrappedComponent {...props} />
  //     </Aux>
  //   );
  // };



  return props => {

      const [error, errorConfirmedHandler] =  useHttpErrorHandler(axios);



    // const [error, setError] = useState(null);

    // const errorConfirmedHandler = () => {
    //   setError(null);
    // };

    const reqInterceptor = axios.interceptors.request.use((req) => {
      // setError(null);
          errorConfirmedHandler(null);
      return req;
    });

    const resInterceptor = axios.interceptors.response.use(
      (res) => res,
      (error) => {
        // setError(error);
        errorConfirmedHandler(error);
        console.log('Error: ' + error.message);
      }
    );

    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(reqInterceptor);

        axios.interceptors.response.eject(resInterceptor);
      };
    }, [reqInterceptor, resInterceptor]);

    return (
      <Aux>
        <Modal show={error} modalClosed={errorConfirmedHandler}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Aux>
    );
  };













};

export default withErrorHandler;
