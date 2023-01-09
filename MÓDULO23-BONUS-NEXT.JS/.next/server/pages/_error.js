(function() {
var exports = {};
exports.id = 820;
exports.ids = [820];
exports.modules = {

/***/ 561:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(664);


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


function Error({
  statusCode
}) {
  ////MODELO 'INICIAL' DE NOSSO 'ERROR COMPONENT', COMPONENT (página) QUE APARECE quando ocorre um erro generalizado quando o user acessa nosso app (por isso que o nome desse arquivo é '_error.js', e não '404.js', ou '500.js') 
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
      children: "Oops, something went wrong..."
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
      children: ["Try ", /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
        href: "/",
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
          children: "going back"
        })
      })]
    })]
  });
}

Error.getInitialProps = ({
  res,
  err
}) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return {
    statusCode
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Error);

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
var __webpack_exports__ = __webpack_require__.X(0, [664], function() { return __webpack_exec__(561); });
module.exports = __webpack_exports__;

})();