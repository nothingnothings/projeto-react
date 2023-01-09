import React, { Component } from 'react';
// import axios from 'axios';
// import axios from '../../axios';


//instalar: npm install --save react-router react-router-dom, PARA USAR O ROUTING no react...

//Link ==== component que SERVE PARA SETTAR OS 'LINKS/A HREFs' USADOS COM  O 'REACT-ROUTER-DOM'...


//'NavLink' === mesma coisa que 'Link', MAS ESSE OBJETO 'NavLink' POSSUI ALGUNS PROPS EXTRAS/ESPECIAIS ____QUE NOS AJUDAM ____ COM O STYLING DE 'Active Links' (ex: você clica em uma página, aí você/o usuário quer SABER EM QUE __ROTA ESPECÍFICA ___ ELE ESTÁ____... --> se você usar o 'NavLink', esse component 'NavLink' poderá ter um CSS STYLE de 'red', por exemplo, mostrando que VOCÊ ESTÁ NA PÁGINA/COMPONENT A QUE AQUELE 'NavLink'/objeto NavLink está vinculado...)
//e é por isso que substituímos 'Link' por 'NavLink' em todas ocorrências desse component/objeto, no nosso código...


import { Route, Link, NavLink } from 'react-router-dom';


import { Switch } from 'react-router-dom';


import { Redirect } from 'react-router-dom';

import BlogStyle from './Blog.module.css';


// import Post from '../../components/Post/Post';
// import FullPost from '../Blog/FullPost/FullPost';
// import NewPost from '../Blog/NewPost/NewPost';


import Posts from './Posts/Posts';

// import NewPost from '../../containers/Blog/NewPost/NewPost'  ////usado na nossa antiga versão do app de 'posts'... -------> trocamos pela versão que faz LAZY LOADING desse component/página/container... no lazy loading, não usamos esses 'imports puros', e sim usamos __iMPORTS CONDICIONAIS__, IMPORTS QUE FARÃO COM QUE OS COMPONENTS/PÁGINAS SEJAM ___ IMPORTADOS __ APENAS QUANDO REALMENTE NECESSÁRIO (ou seja, quando o usuário navegar até aquele component/página)... ---> e o component/função/arquivo que vai fazer isso para nós é o HOC de nome 'asyncComponent' (observe sua sintaxe, para ver como é o padrão)...

import FullPost from '../../containers/Blog/FullPost/FullPost'


import asyncComponent from '../../../src/hoc/asyncComponent';


const AsyncNewPost = asyncComponent(////este código é usado para obter LAZY LOADING no/com o nosso component 'NewPost'... ---> também é necessário, para o lazyloading em REACT, o HOC 'asyncComponent', que podemos encontrar no nosso código, no folder 'HOC'....
        () => {
            return import('./NewPost/NewPost')
        }
); 



class Blog extends Component {
    // state = {
    //     posts: [],
    //     selectedPostId: null,
    //     error: false
    // }

    // componentDidMount () {
    //     axios.get( '/posts' )
    //         .then( response => {
    //             const posts = response.data.slice(0, 4);
    //             const updatedPosts = posts.map(post => {
    //                 return {
    //                     ...post,
    //                     author: 'Max'
    //                 }
    //             });
    //             this.setState({posts: updatedPosts});
    //             // console.log( response );
    //         } )
    //         .catch(error => {
    //             // console.log(error);
    //             this.setState({error: true});
    //         });
    // }

    // postSelectedHandler = (id) => {
    //     this.setState({selectedPostId: id});
    // }


     state = {
        //  auth: false,
         auth: true
     }










    render () {
    

        return (
            <div className={BlogStyle.Posts}>
                <header>
                    <nav>
                        <ul  style={{
                            listStyle: 'none',
                            margin: '0',
                            padding: '0', 
                            display: 'flex row',
                            justifyContent: 'center'
                        }}>
                            <li style={{
                                    display: "inline-block",
                                    margin: "20px"
                            }}><NavLink to="/" exact 
                                activeClassName="active" //redundante, é o DEFAULT, é o class/className ativa/active __DEFAULT___ adicionado ao link criado com 'NewLink' -----> só deixamos isto aqui para DEMONSTRAR QUE __VOCÊ PODE ___ ALTERAR ESSE NOME DA CLASSE ATIVA no 'NavLink'; você pode definir aqui a string que você quiser, como 'my-active', ou whatever... --> isso serve para DIFERENCIAR OS ESTILOS dos links criados com 'NavLink'----> serve para vocÊ ter vários NavLink, cada um com estilo 'active' diferente, se você quiser...

                                activeStyle={
                                    {
                                        color: "#fa923f",
                                        textDecoration: 'underline'
                                    }
                        }
                           
                           
                           
                           >
                              Posts</NavLink></li>
                            <li style={{
                                    display: "inline-block",
                                    margin: "20px"
                            }}><NavLink exact

                             
                            
                                    to={

                                {
                                    pathname:'/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }



                            } >New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                   {/* <Posts /> */}
                

                {/* <Switch // muito importante. É AQUILO QUE FAZ COM QUE APENAS 1 ROTA DAQUELAS 3 SEJA RENDERIZADA, a rota que MATCHE PRIMEIRO o 'currentPath' do browser/usuário... ---> isso evita com que aquela route de path '/:postId' seja renderizada junto DE TODAS AS OUTRAS ROUTES (ou seja, 'Switch' RESOLVE OS PROBLEMAS COM routes dinâmicas/dynamic route parameters'...) */}
                {/* >   ////OBS: NÓS SÓ TIRAMOS/DESLIGAMOS ESSE 'SWITCH' DAQUI PQ __ NÓS ACABAMOS MUDANDO A '''ROUTE'' DE 'FullPost'/de nosso single post PARA __O COMPONENT__ 'Posts'...*/} 
                 
                          {/*  OBS:::: A ORDEM DE POSICIONAMENTO DAS ROUTES (com ou SEM switch) __ É IMPORTANTE____...*/}
                <Switch>
                  {/* { this.state.auth     ?        <Route path="/new-post" component={NewPost}  /> : null   }  ////////CÓDIGO ___SEM O LAZY LOADING___ */}
                  {/* Código de 'NewPost/asyncNewPost' abaixo: EXEMPLO DE LAZY LOADING. */}
                  { this.state.auth     ?        <Route path="/new-post" component={AsyncNewPost}  /> : null   } 
                  
                                    {/* Este código logo acima é UM EXEMPLO DE COMO VOCÊ PODE SETTAR 'GUARDS' NO REACT ROUTER... ---> guards --> são BLOQUEIOS DE AUTENTICAÇÃO... --> usuário SÓ PODERÁ ACESSAR ESSAS ROUTES SE ESTIVER AUTENTICADO, ou seja, se aquela propriedade no nosso state de 'auth' estiver como 'true'...  -----> e nós codamos aquele 'Redirect' PARA REDIRECIONAR O USUÁRIO PARA A NOSSA PÁGINA DE 'posts' NOS CASOS EM QUE NÃO ESTIVER AUTENTICADO (default). */}


                                   {/* esses links logo abaixo SÃO EXEMPLOS DE COMO VOCÊ PODE SETTAR O __REDIRECIONAMENTO__ DE PATHS/LINKS__ no seu site... --> todos esses links renderizarão a página/component/container 'Posts', todas elas 'dão na mesma', mas são DIFERENTES PATHS PARA O MESMO CONTEÚDO... (redirecionamento, basicamente). ---> o professor também nos mostra outra solução, contudo, na aula 'redirecionando requests'...  ------> ESSA OUTRA SOLUÇÃO É O COMPONENT/OBJETO 'Redirect', que observamos mais embaixo... --> ali é possível ver jutstamente isso, o '<Redirect/>', que vai exigir uma propriedade 'from' (a url de 'entrada') e uma propriedade to (o path que deverá ''''substituir''''/redirecionar o path que foi passado em 'from'...)  -------> OBS: para usar o objeto 'Redirect', deve-se importá-lo com a sintaxe 'import Redirect from 'react-router-dom';*/}
                {/* <Route path="/exemploderedirecionamento" component={Posts} /> 
                <Route path="/cartas" component={Posts} />
                <Route path="/posts" component={Posts} /> */}
                
                <Route path="/posts" component={Posts} />
                <Redirect from="/" to="/posts" />
                    {/* <Redirect from="/posts" to="/" />  ////////////ISSO AQUI É A ALTERNATIVA A ESSE '''CÓDIGO DE REDIRECIONAMENTO'''' que vemos aí em cima (que é várias routes com o mesmo component/container/página sendo renderizado, mas com paths diferentes... --> mas paths que levam AO MESMO LUGAR. ) */}



                    {/* <Route render={ () => { <h1>Not found</h1>   }} />       ////////esta é uma ALTERNATIVA AO APPROACH DE REDIRECIONAR 'paths inválidos'/urls inválidas ao path de '/posts (nossa home), visto logo acima... ----------> USE ESTE APPROACH (2o approach) SE VOCÊ QUISER QUE UMA PÁGINA/COMPONENT/CONTAINER DE 'erro: request 404, unknown request' seja mostrada ao usuário quando ele escrever alguma url com path idiota que não existe... ----> para usar esse approach, escreva uma ROUTE comum por último, mas não defina a propriedade/prop de 'path'.... --------> se você fizer isso, essa rota/route 'subsidiária' SERÁ _EXECUTADA__ SE O REQUEST/PATH QUE O USUÁRIO ESCREVEU  ___NÃO SE ENCAIXAR__ EM NENHUM OUTRO 'CASE'/route daquelas escritas mais acima... */}
                </Switch>
                 
                 
                 
                 {/* <Route exact path="/" component={Posts} /> */}

             
                

                {/* <Route path="/:postId" exact component={FullPost}  // ---> '/:postId' ------> ver anotações sobre 'DYNAMIC ROUTING PARAMETERS', e sobre a marcação ':' nessa propriedade 'path'...  */}
                 {/* /> */}
                    {/* </Switch> */}




                   {/* <Route exact path="/"render={() => { ////////////VER ANOTACAO 'renderizando components  EM ROUTES ESPECÍFICAS' ---> não devemos usar 'render', esse prop aí, para renderizar components diretamente/integralmente... é muito melhor, geralmente, usar O PROP DE 'component' PARA RENDERIZAR NOSSOS COMPONENTS NO LOCAL DE 'Route'....
                    //    return <h1>Home</h1>
                    return <Posts />
                   }}/> */}
                      {/* <Route path="/"render={() => {
                       return <h1>Home 2</h1>
                   }}/> */}
            </div>
        );
    }
}

//OBS: no prop de 'component', no 'ROUTE', devemos passar O OBJETO DO COMPONENT QUE QUEREMOS RENDERIZAR NESSA ROUTE AÍ, caso o critério (o path) SEJA SATISFEITO... --> nesse caso, só passamos a referencia do objeto 'Posts', e isso já basta.

////OBS:::: o COMPONENT 'ROUTE' É USADO EM ROUTING... É SEMPRE ESSE NOME AÍ, e ele aceita PROPS/PROPRIEDADES ESPECÍFICAS(reserved keywords), que definem UMA ROTA, uma rota que SE FOR SEGUIDA, RENDERIZARÁ AS COISAS QUE ESTÃO DESCRITAS NO PROP 'render'...

/////IMPORTANTE: PARA USARMOS O COMPONENT 'ROUTER' (QUE TAMBÉM PRECISA DO WRAP DO component 'BrowserRouter' na PARTE DO CÓDIGO EM QUE VOCE VAI QUERER DEFINIR UM 'ROUTING'), VOCê PRECISA ADICIONAR O IMPORT DE 'import { Route } from 'react-router-dom';'...


////TAMBÉM IMPORTANTE:  propriedade/prop 'exact' ----> É UMA 'BOOLEAN PROPERTY'; se você a escrever no call/definicao do router, escrever ela solta mesmo, ELA JÁ TERÁ SEU VALOR DEFINIDO COMO 'true'... --> e o que 'exact' faz é ___DEFINIR UM CRITÉRIO DE 'PATH'___ NAQUELE ROUTE, UM CRITÉRIO EXTREMAMENTE ESPECÍFICO: O PATH ACESSADO PELO USUÁRIO TERÁ DE SER ___eXATAMENTE___ AQUELE ESPECIFICADO NO PROP 'path' DO 'Route'... caso não seja exatamente esse path aí, O CONTEÚDO DESCRITO NO PROP 'render' DESSE 'Route' NÃO SERÁ _ RENDERIZADO NA TELA___ (e 'exact' difere do COMPORTAMENTO DEFAULT JUSTAMENTE POR ISSO: O COMPORTAMENTO DEFAULT DO ROUTER DO REACT É __DE CONSIDERAR __"PREFIXES"___ --> ele apenas vai verificar se O INÍCIO DO PATH é o mesmo... ------> é por isso que MESMO NÓS ACESSANDO '/new-posts', nesse exemplo, caso não esteja definido exact, O CONTEÚDO DOS 2 ROUTES SERÁ ATIVADO, será ativado pq os seus paths estão definidos como '/', que é o início de tanto '/'  como '/new-posts'...)




export default Blog;





/////////OBS::: PARA __dEFINIR___ LINKS QUANDO USAMOS 'REACT ROUTER'/react-router-dom (links que ALTERAM PATH do usuário, e que ao mesmo tempo PREVINEM O COMPORTAMENTO DEFAULT DAS ANCHOR TAGS, AQUELE COMPORTAMENTO QUE FAZ A PÁGINA ___rECARREGAR__ QUANDO O PATH/URL do app é ALTERADO...), DEVE-SE UTILIZAR O OBJETO/COMPONENT ESPECIAL CHAMADO DE 'Link', que também é importado da package de 'react-router-dom'...



//////////LINK --> EXIGE UM PROP DE 'to=...' (o '...' SERÁ UMA STRING, A STRING DO SEU 'PATH', do path que voce vai querer a que esse link leve... (isso na sua forma mais simples, pq VOCE ___PODE___ ENFIAR VARIÁVEIS DENTRO DESSE 'to={}'))