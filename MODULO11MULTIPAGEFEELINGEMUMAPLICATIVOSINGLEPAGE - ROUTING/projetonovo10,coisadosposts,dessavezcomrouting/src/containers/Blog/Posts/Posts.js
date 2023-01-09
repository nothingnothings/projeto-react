import React, { Component } from 'react';

import axios from '../../../axios';

import Post from '../../../components/Post/Post';

import { Route } from 'react-router-dom'

import FullPost from '../FullPost/FullPost'



import { Link } from 'react-router-dom' ///usado, aqui, pelo professor para nos mostrar um approach PARA __PASSAR___ UM 'DYNAMIC PARAMETER' ('/:postId') ao component 'FullPost'... -------> para mais informações, ver a aula 'Passing Route Parameters'....




class Posts extends Component {
    state = {
        posts: []

    }


    postSelectedHandler = (id) => { 
        this.setState({selectedPostId: id});
    }



        // postSelectedHandler = (id) => {
                    //this.setState({selectedPostId: id})

        //     this.props.history.push({pathname: '/' + id}); //////////////// isso vai fazer a MESMA COISA que '<Link to={'/' + post.id}><Post></Post></Link>', MAS COM A AJUDA DO MÉTODO '.push', que é um método que NOS AJUDA A (''''FORÇAR'''') NAVEGAR O USUÁRIO POR NOSSAS PÁGINAS/CONTAINERS/PEDAÇOS DE NOSSO SITE...
        // } ---> com esse approach (approach do 'push'), nós fazemos a navegação ocorrer de forma __PROGRAMÁTICA ('navigating PROGRAMATICALLY, sem a interferência/palavra do usuário na questão.)'..... ----> essa 'PROGRAMATIC NAVIGATION' pode ser importante, de tempos em tempos... __É PRINCIPALMENTE__ UTILIZADA PARA __ MOVER __ O USUÁRIO DE UM CANTO PARA O OUTRO DE NOSSA PÁGINA ___APÓS __ UMA OPERAÇÃO TER TERMINADO (ou seja, depois da execução de um código assíncrono; no '.then() block' de UM CÓDIGO ASSÍNCRONO...)







    componentDidMount () {











        console.log(this.props); ////////////USAMOS ISSO PARA VER QUE TIPO DE INFORMAÇÃO/props NOSSO COMPONENT 'Posts' recebe/tem QUANDO É RE-RENDERIZADO AO DOM POR MEIO DO CÓDIGO DE 'react-router-dom' e de seu ROUTING...
        axios.get( '/posts' )
            .then( response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Max'
                    }
                });
                this.setState({posts: updatedPosts});
                // console.log( response );
            } )
            .catch(error => {
                console.log(error);
                // this.setState({error: true});
            });
    }

    
    
    
        render() {

            let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>;
        if (!this.state.error) {
            posts = this.state.posts.map(post => { return (
            
            <Link  
                
            to={'/' + post.id} ///isso é bem importante. É o que faz o FLOW de nosso 'dynamic routing parameter', de '/:postId', lá em 'Blog.js', funcionar.
            key={post.id} >
            <Post 
                    {...this.props}
                    // key={post.id} 
                    title={post.title} 
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}/>
                    </Link>);
            });
        }


      
     return  <div>
                <section className="Posts">
                        {posts}
                </section>
             {/* <Route path="/:postId" exact component={FullPost} /> */}
             <Route path={this.props.match.url + ':postId'} exact component={FullPost} 
            //  MESMA COISA QUE A ROUTE DE CIMA (a de '/:postId'), MAS COM UM 'PRE-PEND' (anexo anterior) DINÂMICO (prepend de 'this.props.match.url'), um anexo que é basicamente A URL __ QUE O USUÁRIO__ NAVEGOU ATÉ O PRESENTE MOMENTO, ANTES DE FAZERMOS ESSE APPEND DE ':id' na url, por meio dessa route....
             
             
             />
             
            </div>
        }
    
}




//{...this.props} ------> ISSO, LÁ NO RENDER do component 'filho' 'Post', VAI ___REPASSAR __ TODAS AS PROPRIEDADES EXISTENTES NO 'props' de 'Posts';  OU SEJA, ESSE É UM DOS APPROACHES PARA ___ REPASSAR COM SUCESSO __ OS 'ROUTING RELATED PROPS' que existem dentro de 'Posts' ao component 'Post'.... -----> (isso pq O COMPONENT PAI QUE É ROUTEADO POR 'Route' ___NUNCA VAI __ NATIVAMENTE__ PASSAR OS 'ROUTING RELATED PROPERTIES' armazenados no seu PROPS nativamente aos seus components FILHOS, components nesteados no seu render method... ---> para que esses ROUTING-RELATED PROPS sejam passados, é necessário __OU __ SEGUIR ESSE APPROACH DO SPREAD OPERATOR, de código '{...this.props}', __OU___ SEGUIR O APPROACH DO HOC de 'withRouter', cujo funcionamento também é mostrado nesse nosso component 'posts'....)











export default Posts; 
