// import React from 'react';



// const IndexPage = (props) => {
//         <div>
//             <h1>The Main Page</h1>
//         </div>
// }






// export default IndexPage;






import React, { Component } from 'react';

import Link from 'next/link';

// import Router from 'next/router'; /// SINTAXE OBSOLETA. USAR ESSA DE BAIXO, que ainda funciona.


import { useRouter } from 'next/router'; //SINTAXE ATUAL DE 'Router'... --> nós instanciamos um objeto 'router', usando esse constructor/objeto, e então acessamos os métodos no seu interior com a 'dot notation' ('.')...
import { resolveHref } from 'next/dist/next-server/lib/router/router';




// const router = useRouter();  ////DEVE SER COLOCADO __DENTRO DO __ BODY __ DO COMPONENT/PÁGINA nosso... (E ESSA PÁGINA ____DEVE __ SER, OBRIGATORIAMENTE__, UM FUNCTIONAL COMPONENT....)







// class IndexPage extends Component {
//     render(){
//         const router = useRouter(); 
//         return(
            
//             <div>
//             <h1>The Main Page</h1>
//             <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
//             <button onCLick={() => router.push('/auth')}>Go to Auth</button>  /////'router', o objeto router do 'next.js', __NÃO FUNCIONA COM CLASS-BASED COMPONENTS....
//           </div>
//         )   //IMPERATIVE NAVIGATION (é esse approach do 'Router.push()'...)
//     }

// }

// export default IndexPage;





// const IndexPage = (props) => {
    
//         const router = useRouter(); 

//         return(
            
//             <div>
//             <h1>The Main Page</h1>
//             <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
//             <button onClick={() => router.push('/auth')}>Go to Auth</button> 
//           </div>
//         )   //IMPERATIVE NAVIGATION (é esse approach do 'router.push()'...)


// }

// export default IndexPage;












class IndexPage extends Component {


  static async getInitialProps(context) { /////'''GETINITIALPROPS'''' --> é um HOOK __ EXCLUSIVO___ DO 'next.js', e que pode ser USADO TANTO EM FUNCTIONAL COMO EM CLASS-BASED COMPONENTS...
    console.log(context);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(
          {
              appName: "Super App"
          }
        )
      }, 1000)
    })
    // return {}; ///isso é usado PROVISIONALMENTE SÓ PARA ___ EVITAR __ O 'ERRO' QUE GANHAMOS AO ESCREVER o 'getInitialProps' pela primeira vez... OBS:: TAMBÉM É USADO SE VOCÊ QUER __ PREVENIR __ O COMPORTAMENTO DE 'static optimize', ou algo assim, do next.js...
    return promise; //código necessário para pegar/retornar o CONTEÚDO daquela promise, que é aquele objeto com 'appName: xxx'.., e que VAI 'POPULAR'  os nossos PROPS, vai 'pre-populate' os nossos props...
  }



      render(){

      
  // const router = useRouter(); 

  return(
      
      <div>
      <h1>The Main Page of {this.props.appName}</h1>
      <p>Go to <Link href="/auth"><a>Auth</a></Link></p>
      {/* <button onClick={() => router.push('/auth')}>Go to Auth</button>   NÃO FUNCIONA COM CLASS-BASED COMPONENTS....*/}
    </div>
  )   //IMPERATIVE NAVIGATION (é esse approach do 'router.push()'...)


      }
}

export default IndexPage;