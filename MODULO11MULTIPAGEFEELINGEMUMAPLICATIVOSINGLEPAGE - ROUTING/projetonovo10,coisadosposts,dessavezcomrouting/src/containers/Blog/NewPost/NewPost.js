import React, { Component } from 'react';
import axios from 'axios';


import { Redirect } from 'react-router-dom';




import './NewPost.css';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        // submitted: false  //usado no approach DE __RENDER__ CONDICIONAL___ DE UM REDIRECT EM NOSSO COMPONENT (objeto '<Redirect />', dentro do 'render()' de 'NewPost'...)
    }

     


    componentDidMount() {
        console.log(this.props);



        // const query = new URLSearchParams(this.props.location.search); ///CÓDIGO ÚTIL PARA MEXER COM QUERYPARAMS... (como '''?quicksubmit=true''')
        // for (let param of query.entries()) {
        //     console.log(param); // yields ['start', '5']
    



        // if unauth => this.props.history.replace('/posts'); ////código/formato de código que pode ser usado para __CRIAR 'Guards' no seu routing (tipo criar rotas RESTRITAS, DISPONÍVEIS APENAS A USUÁRIOS AUTORIZADOS, usuários que de alguma forma conseguiram trocar o state do nosso component 'NewPost', uma propriedade 'auth' ou whatever, que começa com um valor 'false', para 'TRUE'....)





        //props.location.hash  ----> usado para extrair FRAGMENTS DE urls (fragments === partes da url com '#', como '#submit'...)
    }
    








    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        };
        axios.post('/posts', data)
            .then(response => {
                console.log(response);
                // this.setState({ /////////usado no approach DE __RENDER__ CONDICIONAL___ DE UM REDIRECT EM NOSSO COMPONENT (objeto '<Redirect />', dentro do 'render()' de 'NewPost'...)
                //     submitted: true
                // })

                // this.props.history.replace('/posts'); ///////// ESSE MÉTODO  '.replace()' TEM O MESMO COMPORTAMENTO do objeto/component '<Redirect />', mas ele é acessado dentro do objeto/propriedade 'history' (router-related-prop).... 

                this.props.history.push('/posts'); //approach mais convencional de ___rEDIRECT___ do usuário à página desejada por nós....


            });
    }

    render () {

            // let redirect = null;  ////// usado no approach DE __RENDER__ CONDICIONAL___ DE UM REDIRECT EM NOSSO COMPONENT (objeto '<Redirect />', dentro do 'render()' de 'NewPost'...)

            // if(this.state.submitted) {  ////usado no approach DE __RENDER__ CONDICIONAL___ DE UM REDIRECT EM NOSSO COMPONENT (objeto '<Redirect />', dentro do 'render()' de 'NewPost'...) 
            //     redirect = (
            //         <Redirect to="/" /> ///////OBS:::: A DIFERENÇA DE funcionamento '<Redirect />'(objeto/component) em relação à 'this.props.history.push()' É QUE __O PUSH___ TE DEIXA __VOLTAR À PÁGINA ANTERIOR, À PÁGINA EM QUE O USUÁRIO/NÓS ESTÁVAMOS ANTES DE OCORRER O 'empurrao' (push) DA URL/PATH/ROUTE que renderizou a nova página/component... (pq o 'push' vai empurrar essa nova PÁGINA __ POR CIMA DA NOSSA PÁGINA ATUAL/Página antiga)... -------> JÁ O OBJETO/COMPONENT '<Redirect />' NÃO NOS DEIXA FAZER ISSO, PQ ELE VAI __SUBSTITUIR ___ A ÚLTIMA PÁGINA NO 'STACK' DE PÁGINAS (página mais 'topmost') PELA PÁGINA QUE VOCÊ ESPECIFICOU EM 'to={}'... ---> e isso vai nos impedir de clicar em '<--' no browser, para retornar à página anterior, anterior ao '<Redirect />'...
            //     )
            // }


        return (
            <div className="NewPost">
                {/* {redirect}       */}
                {/* usado no approach DE __RENDER__ CONDICIONAL___ DE UM REDIRECT EM NOSSO COMPONENT (objeto '<Redirect />', dentro do 'render()' de 'NewPost'...)  */}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;