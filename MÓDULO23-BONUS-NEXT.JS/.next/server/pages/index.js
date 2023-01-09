(function() {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 124:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(664);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(731);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_dist_next_server_lib_router_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(414);


// import React from 'react';
// const IndexPage = (props) => {
//         <div>
//             <h1>The Main Page</h1>
//         </div>
// }
// export default IndexPage;

 // import Router from 'next/router'; /// SINTAXE OBSOLETA. USAR ESSA DE BAIXO, que ainda funciona.

 //SINTAXE ATUAL DE 'Router'... --> nós instanciamos um objeto 'router', usando esse constructor/objeto, e então acessamos os métodos no seu interior com a 'dot notation' ('.')...

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

class IndexPage extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  static async getInitialProps(context) {
    /////'''GETINITIALPROPS'''' --> é um HOOK __ EXCLUSIVO___ DO 'next.js', e que pode ser USADO TANTO EM FUNCTIONAL COMO EM CLASS-BASED COMPONENTS...
    console.log(context);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          appName: "Super App"
        });
      }, 1000);
    }); // return {}; ///isso é usado PROVISIONALMENTE SÓ PARA ___ EVITAR __ O 'ERRO' QUE GANHAMOS AO ESCREVER o 'getInitialProps' pela primeira vez... OBS:: TAMBÉM É USADO SE VOCÊ QUER __ PREVENIR __ O COMPORTAMENTO DE 'static optimize', ou algo assim, do next.js...

    return promise; //código necessário para pegar/retornar o CONTEÚDO daquela promise, que é aquele objeto com 'appName: xxx'.., e que VAI 'POPULAR'  os nossos PROPS, vai 'pre-populate' os nossos props...
  }

  render() {
    // const router = useRouter(); 
    return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h1", {
        children: ["The Main Page of ", this.props.appName]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
        children: ["Go to ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__.default, {
          href: "/auth",
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            children: "Auth"
          })
        })]
      })]
    }); //IMPERATIVE NAVIGATION (é esse approach do 'router.push()'...)
  }

}

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

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
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(124); });
module.exports = __webpack_exports__;

})();