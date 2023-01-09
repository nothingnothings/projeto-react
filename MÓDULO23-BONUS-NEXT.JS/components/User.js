import React from 'react';

// //////////IMPORTANTE ---> AQUELA SINTAXE DE '      <style jsx> { 
//         ` 
//         div { 
//             border: 1px solid #eee;
//             box-shadow: 0 2px 3px #ccc;
//             padding: 20px;
//             text-align: center;
//         }
//     `
//           }                      ////SINTAXE DO 'STYLED JSX'... --> ''ALL ABOUT STYLES __ SCOPED TO A GIVEN COMPONENT....""""
//           </style>  //////// É __ A SINTAXE __ ESPECIAL __ DE STYLING DO 'NEXT.JS', que você pode usar __PARALELAMENTE __ AO 'css-modules'... -----> ELA É BOA PQ DEIXA VOCÊ __SCOPAR_ OS ESTILOS __ DE UMA MANEIRA UM POUCO DIFERENTE, POR MEIO DAQUELE CÓDIGO DENTRO DE '<style></style>', que deve ter aqueles curly braces, backticks e tudo mais, naquela ordem ali...
                            ////essa sintaxe de STYLING __TAMBÉM FUNCIONA COM MEDIA QUERIES__, E É POR ISSO QUE É BOA...



const user = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <div> 
      <p>Age: {props.age}</p>
      </div>
      <style jsx> { 
        ` 
    div { 
        border: 1px solid #eee;
        box-shadow: 0 2px 3px #ccc;
        padding: 20px;
        text-align: center;
    }
`
      }
      </style>
    </div>
  );
};

export default user;
