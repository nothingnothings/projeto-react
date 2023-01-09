import React, { useEffect} from 'react';

import Modal from '../../components/UI/Modal/Modal';

import Aux from '../Auxiliary/Auxiliary';

import useHttpErrorHandler from '../../hooks/http-error-handler';

const withErrorHandler = (WrappedComponent, axios) => {
  return (props) => {
    const [error, errorConfirmedHandler] = useHttpErrorHandler(axios);

    const reqInterceptor = axios.interceptors.request.use((req) => {
      errorConfirmedHandler(null);
      return req;
    });

    const resInterceptor = axios.interceptors.response.use(
      (res) => res,
      (error) => {
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
