import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null,
        deleteVisualPost: false
    }

    // componentDidUpdate () {  ///mudamos isto aqui, também...
    //     if ( this.props.id ) {   ////isso NÃO VAI FUNCIONAR, não vai mais funcionar pq agora nosso component 'FullPost' ESTÁ VINCULADO A UM ___PARAMETER DINÂMICO___, e não mais a esse 'this.props.id'...
    //         if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
    //             axios.get( '/posts/' + this.props.id )
    //                 .then( response => {
    //                     // console.log(response);
    //                     this.setState( { loadedPost: response.data } );
    //                 } );
    //         }
    //     }
    // }


    loadData () {
        
        console.log(this.props);
        if ( this.props.match.params.postId ) {  ////eis aqui a alteração pertinente; aqui passamos/extraímos o PARÂMETRO DINÂMICO QUE FOI DEFINIDO E REPASSADO POR AQUELA 'ROUTE' DEFINIDA LÁ EM 'Blog.js'...
            // if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) { //////CÓDIGO COM O PROBLEMA DE 'INFINITE LOOP'. ----> isso vai resultar em um infinite loop, pq esse 'this.props.id' NUNCA ESTARÁ SETTADO, O QUE FARÁ esse if statement SEMPRE RETORNAR 'truthy', o que, por sua vez, fará o 'componentDidUpdate' RODAR __cONSTANTEMENTE__, SEM PARAR... --> memory leak.
                 if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== parseInt(this.props.match.params.postId)) ) {  ///essa é a versão CONSERTADA DO CÓDIGO DE CIMA, em que checamos por um 'routing related prop', o prop de 'id' na propriedade 'params', em 'match'...
                axios.get( '/posts/' + this.props.match.params.postId ) ////////ISTO AQUI TAMBÉM DEVE/TEVE DE SER ALTERADO, POIS É O CÓDIGO DE GET DO AXIOS....  nós simplesmente trocamos 'this.props.id' POR AQUELE __ PARAMETER DINÂMICO__ OBTIDO __ POR NOSSO ROUTER....
                    .then( response => {
                        // console.log(response);
                        this.setState( { loadedPost: response.data } );
                        
                    } );
            }
        }
    }







    componentDidMount () {
        // console.log(this.props);
        // if ( this.props.match.params.postId ) {  ////eis aqui a alteração pertinente; aqui passamos/extraímos o PARÂMETRO DINÂMICO QUE FOI DEFINIDO E REPASSADO POR AQUELA 'ROUTE' DEFINIDA LÁ EM 'Blog.js'...
        //     if ( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ) {
        //         axios.get( '/posts/' + this.props.match.params.postId ) ////////ISTO AQUI TAMBÉM DEVE/TEVE DE SER ALTERADO, POIS É O CÓDIGO DE GET DO AXIOS....  nós simplesmente trocamos 'this.props.id' POR AQUELE __ PARAMETER DINÂMICO__ OBTIDO __ POR NOSSO ROUTER....
        //             .then( response => {
        //                 // console.log(response);
        //                 this.setState( { loadedPost: response.data } );
        //             } );
        //     }
        // }

        this.loadData();
    }






    componentDidUpdate() {
        
           
                        this.loadData();



           


        
    }






        




    deletePostHandler = () => {
        // axios.delete('/posts/' + this.props.id) ///CÓDIGO ___ERRADO__, É UM CÓDIGO QUE RESULTARÁ EM UM 'INFINITE LOOP'... ------> o código de baixo é a versão CERTA/FUNCIONAL...
        axios.delete('/posts/' + this.props.match.params.postId);

            this.setState(
                {
                    deleteVisualPost: true
                }
            )
            console.log(this.state);
    }

    render () {

    




        let post = <p style={{ textAlign: 'center' }}>Loading...</p>;



        // if ( this.props.id ) {
        //     post = <p style={{ textAlign: 'center' }}>Loading...!</p>;
        // }
        if ( this.state.loadedPost ) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deletePostHandler} className="Delete">Delete</button>
                    </div>
                </div>

            );

        }
        
        if(this.state.deleteVisualPost) {
            post = null;

            console.log(this.state);
        }


        return post;
    }
}

export default FullPost;