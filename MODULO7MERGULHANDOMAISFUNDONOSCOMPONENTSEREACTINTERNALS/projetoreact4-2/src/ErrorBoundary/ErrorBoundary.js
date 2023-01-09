import React, { Component } from 'react';






class ErrorBoundary extends Component {



    state = {
        HasError: false,
        errorMessage: ''
    }




    componentDidCatch = (error, info) => {




        this.setState(
            
            {
            HasError: true, 
            errorMessage: error
        }
        
        
        
        );

    }











    // render() {
    //     // return <h1>Something went wrong</h1>;
    //     let mensagemDeErro = null;
    //     if (this.state.HasError) {
    //         mensagemDeErro = (<h1>Something went wrong</h1>);
    //     }
    //     return {mensagemDeErro};
    // }




    render() {
        if (this.state.HasError) {
            return <h1>{this.state.errorMessage}</h1>

        } else {
            return this.props.children;
        }
    }
}










export default ErrorBoundary; //correto. Deverá ser wrappado no component em que esperaremos os erros/erro.