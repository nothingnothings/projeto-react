// import React, { Component } from 'react';

// const AuthIndexPage = (props) => {
//   <div>
//     <h1>The Auth Index Page</h1>
//   </div>;
// };

// export default AuthIndexPage;





import React, { Component } from 'react';

import Link from 'next/link';

// import Router from 'next/router'; /// SINTAXE OBSOLETA. USAR ESSA DE BAIXO, que ainda funciona.


import { useRouter } from 'next/router'; //SINTAXE ATUAL DE 'Router'... --> nós instanciamos um objeto 'router', usando esse constructor/objeto, e então acessamos os métodos no seu interior com a 'dot notation' ('.')... ////DEVE SER COLOCADO __DENTRO DO __ BODY __ DO COMPONENT/PÁGINA nosso... (E ESSA PÁGINA ____DEVE __ SER, OBRIGATORIAMENTE__, UM FUNCTIONAL COMPONENT....)


import User from '../../components/User';




// class AuthIndexPage extends Component {

//     render(){
//         const router = useRouter();
//         return(
//             <div>
//             <h1>The Auth Index Page</h1>
//             <p>Go to <Link href="/"><a>Main Page</a></Link></p>
//             <button onCLick={() => router.push('/')}>Go to Main Page</button>  /////'router', o objeto router do 'next.js', __NÃO FUNCIONA COM CLASS-BASED COMPONENTS....
//           </div>
//         )   
//     }

// }

// export default AuthIndexPage;









// const AuthIndexPage = (props) => {


//         const router = useRouter();
//         return(
//             <div>
//             <h1>The Auth Index Page</h1>
//             <User name="Max" age="29"/>
//             <p>Go to <Link href="/"><a>Main Page</a></Link></p>
//             <button onClick={() => router.push('/')}>Go to Main Page</button> 
//           </div>
//         )   


// }

// export default AuthIndexPage;











// class AuthIndexPage extends Component {


//   // const router = useRouter();

//   render() {

  
//   return(
//       <div>
//       <h1>The Auth Index Page</h1>
//       <User name="Max" age="29"/>
//       <p>Go to <Link href="/"><a>Main Page</a></Link></p>
//       {/* <button onClick={() => router.push('/')}>Go to Main Page</button>  */}
//     </div>
//   )   

//   }

// }

// export default AuthIndexPage;











const AuthIndexPage = (props) => {
    return <div>
        <h1>The Auth Index Page - {props.appName}</h1>
        <User name="Max" age={28}/>
    </div>
}



AuthIndexPage.getInitialProps = (context) => {
  const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve({
              appName: "Super App"
          })
      }, 1000)
  });
  return promise;
}



export default AuthIndexPage;