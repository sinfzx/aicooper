"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@t3-oss+env-nextjs@0.11.1_typescript@5.8.3_zod@3.25.76";
exports.ids = ["vendor-chunks/@t3-oss+env-nextjs@0.11.1_typescript@5.8.3_zod@3.25.76"];
exports.modules = {

/***/ "(rsc)/../../node_modules/.pnpm/@t3-oss+env-nextjs@0.11.1_typescript@5.8.3_zod@3.25.76/node_modules/@t3-oss/env-nextjs/dist/index.js":
/*!*************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/@t3-oss+env-nextjs@0.11.1_typescript@5.8.3_zod@3.25.76/node_modules/@t3-oss/env-nextjs/dist/index.js ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createEnv: () => (/* binding */ createEnv)\n/* harmony export */ });\n/* harmony import */ var _t3_oss_env_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @t3-oss/env-core */ \"(rsc)/../../node_modules/.pnpm/@t3-oss+env-core@0.11.1_typescript@5.8.3_zod@3.25.76/node_modules/@t3-oss/env-core/dist/index.js\");\n\n\nconst CLIENT_PREFIX = \"NEXT_PUBLIC_\";\nfunction createEnv(opts) {\n    const client = typeof opts.client === \"object\" ? opts.client : {};\n    const server = typeof opts.server === \"object\" ? opts.server : {};\n    const shared = opts.shared;\n    const runtimeEnv = opts.runtimeEnv ? opts.runtimeEnv : {\n        ...process.env,\n        ...opts.experimental__runtimeEnv\n    };\n    return (0,_t3_oss_env_core__WEBPACK_IMPORTED_MODULE_0__.createEnv)({\n        ...opts,\n        shared,\n        client,\n        server,\n        clientPrefix: CLIENT_PREFIX,\n        runtimeEnv\n    });\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL0B0My1vc3MrZW52LW5leHRqc0AwLjExLjFfdHlwZXNjcmlwdEA1LjguM196b2RAMy4yNS43Ni9ub2RlX21vZHVsZXMvQHQzLW9zcy9lbnYtbmV4dGpzL2Rpc3QvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEQ7O0FBRTVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMkRBQVc7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVxQiIsInNvdXJjZXMiOlsiL1VzZXJzL2NhdmF0aW5hL3Byb2plY3RzL2FpY29vcGVyL25vZGVfbW9kdWxlcy8ucG5wbS9AdDMtb3NzK2Vudi1uZXh0anNAMC4xMS4xX3R5cGVzY3JpcHRANS44LjNfem9kQDMuMjUuNzYvbm9kZV9tb2R1bGVzL0B0My1vc3MvZW52LW5leHRqcy9kaXN0L2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVudiBhcyBjcmVhdGVFbnYkMSB9IGZyb20gJ0B0My1vc3MvZW52LWNvcmUnO1xuXG5jb25zdCBDTElFTlRfUFJFRklYID0gXCJORVhUX1BVQkxJQ19cIjtcbmZ1bmN0aW9uIGNyZWF0ZUVudihvcHRzKSB7XG4gICAgY29uc3QgY2xpZW50ID0gdHlwZW9mIG9wdHMuY2xpZW50ID09PSBcIm9iamVjdFwiID8gb3B0cy5jbGllbnQgOiB7fTtcbiAgICBjb25zdCBzZXJ2ZXIgPSB0eXBlb2Ygb3B0cy5zZXJ2ZXIgPT09IFwib2JqZWN0XCIgPyBvcHRzLnNlcnZlciA6IHt9O1xuICAgIGNvbnN0IHNoYXJlZCA9IG9wdHMuc2hhcmVkO1xuICAgIGNvbnN0IHJ1bnRpbWVFbnYgPSBvcHRzLnJ1bnRpbWVFbnYgPyBvcHRzLnJ1bnRpbWVFbnYgOiB7XG4gICAgICAgIC4uLnByb2Nlc3MuZW52LFxuICAgICAgICAuLi5vcHRzLmV4cGVyaW1lbnRhbF9fcnVudGltZUVudlxuICAgIH07XG4gICAgcmV0dXJuIGNyZWF0ZUVudiQxKHtcbiAgICAgICAgLi4ub3B0cyxcbiAgICAgICAgc2hhcmVkLFxuICAgICAgICBjbGllbnQsXG4gICAgICAgIHNlcnZlcixcbiAgICAgICAgY2xpZW50UHJlZml4OiBDTElFTlRfUFJFRklYLFxuICAgICAgICBydW50aW1lRW52XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGNyZWF0ZUVudiB9O1xuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/../../node_modules/.pnpm/@t3-oss+env-nextjs@0.11.1_typescript@5.8.3_zod@3.25.76/node_modules/@t3-oss/env-nextjs/dist/index.js\n");

/***/ })

};
;