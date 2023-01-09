

// import React, { Component } from 'react';

// import Link from 'next/link';




// const errorPage = (props) => {
    
//     const router = useRouter(); 

//     return(
        
//         <div>
//         <h1>Oops, something went wrong. </h1>
//         <p>Try <Link href="/"><a>going back</a></Link></p>
//       </div>
//     )   //IMPERATIVE NAVIGATION (é esse approach do 'router.push()'...)


// }

// export default errorPage;











// function Error({ statusCode }) { ////MODELO 'INICIAL' DE NOSSO 'ERROR COMPONENT', COMPONENT (página) QUE APARECE quando ocorre um erro generalizado quando o user acessa nosso app (por isso que o nome desse arquivo é '_error.js', e não '404.js', ou '500.js') 
//   return ( 
//     <p>
//       {statusCode
//         ? `An error ${statusCode} occurred on server`
//         : 'An error occurred on client'}
//     </p>
//   )
// }

// Error.getInitialProps = ({ res, err }) => {
//   const statusCode = res ? res.statusCode : err ? err.statusCode : 404
//   return { statusCode }
// }

// export default Error


import Link from 'next/link'


function Error({ statusCode }) { ////MODELO 'INICIAL' DE NOSSO 'ERROR COMPONENT', COMPONENT (página) QUE APARECE quando ocorre um erro generalizado quando o user acessa nosso app (por isso que o nome desse arquivo é '_error.js', e não '404.js', ou '500.js') 
  return ( 
    <div>
    <h1>
      {/* {statusCode
        ? `An error ${statusCode} occurred on server`
        : 'An error occurred on client'} */}
        Oops, something went wrong...
    </h1>
    <p>Try <Link href="/"><a>going back</a></Link></p>
    </div>
  )
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}

export default Error