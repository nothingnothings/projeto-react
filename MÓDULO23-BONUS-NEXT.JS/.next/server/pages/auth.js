(function() {
var exports = {};
exports.id = 473;
exports.ids = [473];
exports.modules = {

/***/ 777:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ auth; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(282);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(297);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(731);
;// CONCATENATED MODULE: external "styled-jsx/style"
var style_namespaceObject = require("styled-jsx/style");;
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
;// CONCATENATED MODULE: ./components/User.js



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

const user = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "jsx-4086506474",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "jsx-4086506474",
      children: props.name
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "jsx-4086506474",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
        className: "jsx-4086506474",
        children: ["Age: ", props.age]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "4086506474",
      children: ["div.jsx-4086506474{border:1px solid #eee;box-shadow:0 2px 3px #ccc;padding:20px;text-align:center;}"]
    })]
  });
};

/* harmony default export */ var User = (user);
;// CONCATENATED MODULE: ./pages/auth/index.js


// import React, { Component } from 'react';
// const AuthIndexPage = (props) => {
//   <div>
//     <h1>The Auth Index Page</h1>
//   </div>;
// };
// export default AuthIndexPage;

 // import Router from 'next/router'; /// SINTAXE OBSOLETA. USAR ESSA DE BAIXO, que ainda funciona.

 //SINTAXE ATUAL DE 'Router'... --> nós instanciamos um objeto 'router', usando esse constructor/objeto, e então acessamos os métodos no seu interior com a 'dot notation' ('.')... ////DEVE SER COLOCADO __DENTRO DO __ BODY __ DO COMPONENT/PÁGINA nosso... (E ESSA PÁGINA ____DEVE __ SER, OBRIGATORIAMENTE__, UM FUNCTIONAL COMPONENT....)

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

const AuthIndexPage = props => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
      children: ["The Auth Index Page - ", props.appName]
    }), /*#__PURE__*/jsx_runtime_.jsx(User, {
      name: "Max",
      age: 28
    })]
  });
};

AuthIndexPage.getInitialProps = context => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        appName: "Super App"
      });
    }, 1000);
  });
  return promise;
};

/* harmony default export */ var auth = (AuthIndexPage);

/***/ }),

/***/ 417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 731:
/***/ (function(module) {

"use strict";
module.exports = require("next/router");;

/***/ }),

/***/ 297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(777); });
module.exports = __webpack_exports__;

})();