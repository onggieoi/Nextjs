webpackHotUpdate("static/development/pages/index.js",{

/***/ "./containers/PointOfSale/PrintPage/ComponentToPrint.tsx":
/*!***************************************************************!*\
  !*** ./containers/PointOfSale/PrintPage/ComponentToPrint.tsx ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! qrcode.react */ \"./node_modules/qrcode.react/lib/index.js\");\n/* harmony import */ var qrcode_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(qrcode_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var contexts_cart_cart_context__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! contexts/cart/cart.context */ \"./contexts/cart/cart.context.tsx\");\nvar _this = undefined,\n    _jsxFileName = \"/home/onggieoi/Coding/Next/task/PointOfSale/client/containers/PointOfSale/PrintPage/ComponentToPrint.tsx\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\n\n\nvar ComponentToPrint = function ComponentToPrint() {\n  _s();\n\n  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useContext\"])(contexts_cart_cart_context__WEBPACK_IMPORTED_MODULE_2__[\"CartContext\"]),\n      ticketsOrder = _useContext.ticketsOrder;\n\n  return __jsx(\"div\", {\n    className: \"m-0 p-0\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 5\n    }\n  }, ticketsOrder.map(function (ticket) {\n    return __jsx(\"div\", {\n      key: ticket.orderOrginal,\n      className: \"bg-white w-screen mx-1\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 11\n      }\n    }, __jsx(\"div\", {\n      className: \"flex p-5 m-0\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 13,\n        columnNumber: 13\n      }\n    }, __jsx(\"img\", {\n      src: \"/favicon.png\",\n      className: \"w-auto h-auto\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 15\n      }\n    }), __jsx(\"div\", {\n      className: \"ml-3\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 15\n      }\n    }, \"KHU DU L\\u1ECACH TH\\xC1C DATANLA\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 41\n      }\n    }), \"\\u0110\\u1ECBa ch\\u1EC9: QL20 \\u0110\\xE8o Prenn, Ph\\u01B0\\u1EDDng 3, Tp. \\u0110\\xE0 L\\u1EA1t, L\\xE2m \\u0110\\u1ED3ng\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 17,\n        columnNumber: 72\n      }\n    }), \"\\u0110i\\u1EC7n tho\\u1EA1i: 0263 3533 899\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 18,\n        columnNumber: 42\n      }\n    }), \"MST: 0302945625\")), __jsx(\"div\", {\n      className: \"flex p-5\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 13\n      }\n    }, __jsx(\"div\", {\n      className: \"mr-auto my-auto\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 15\n      }\n    }, __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 17\n      }\n    }, \"Name: \", ticket.name), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 17\n      }\n    }, \"Price: \", ticket.price, \" VND\"), __jsx(\"div\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 17\n      }\n    }, \"(Included 10% from VAT)\")), __jsx(\"div\", {\n      className: \"ml-auto\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 28,\n        columnNumber: 15\n      }\n    }, __jsx(qrcode_react__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      value: ticket.orderOrginal,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 17\n      }\n    }))), __jsx(\"div\", {\n      className: \"border-dashed border-gray-600 border w-full my-5\",\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 13\n      }\n    }), __jsx(\"footer\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 13\n      }\n    }, \"- V\\xE9 \\u0111\\u01B0\\u1EE3c in t\\u1EEB ph\\u1EA7n m\\u1EC1m v\\xE9 t\\u1EF1 in c\\u1EE7a c\\xF4ng ty c\\u1ED5 ph\\u1EA7n SaveMoney.\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 79\n      }\n    }), \"M\\xE3 nh\\xE2n vi\\xEAn: Administrator \", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 43\n      }\n    }), \"V\\xE9 s\\u1EED d\\u1EE5ng n\\u1ED9i b\\u1ED9. Qu\\xFD kh\\xE1ch vui l\\xF2ng li\\xEAn h\\u1EC7 s\\u1ED1 (028) 3925 9828 \\u0111\\u1EC3 nh\\u1EADn h\\xF3a \\u0111\\u01A1n.\", __jsx(\"br\", {\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 96\n      }\n    }), \"H\\xECnh th\\u1EE9c thanh to\\xE1n: Ti\\u1EC1n m\\u1EB7t\"));\n  }));\n};\n\n_s(ComponentToPrint, \"Hs9jN3YxgEEKTmxyfyNQhqx/MpY=\");\n\n_c = ComponentToPrint;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ComponentToPrint);\n\nvar _c;\n\n$RefreshReg$(_c, \"ComponentToPrint\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL1BvaW50T2ZTYWxlL1ByaW50UGFnZS9Db21wb25lbnRUb1ByaW50LnRzeD9iNjUxIl0sIm5hbWVzIjpbIkNvbXBvbmVudFRvUHJpbnQiLCJ1c2VDb250ZXh0IiwiQ2FydENvbnRleHQiLCJ0aWNrZXRzT3JkZXIiLCJtYXAiLCJ0aWNrZXQiLCJvcmRlck9yZ2luYWwiLCJuYW1lIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBOztBQUVBLElBQU1BLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsR0FBTTtBQUFBOztBQUFBLG9CQUNKQyx3REFBVSxDQUFDQyxzRUFBRCxDQUROO0FBQUEsTUFDckJDLFlBRHFCLGVBQ3JCQSxZQURxQjs7QUFFN0IsU0FDRTtBQUFLLGFBQVMsRUFBQyxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FFSUEsWUFBWSxDQUFDQyxHQUFiLENBQWlCLFVBQUNDLE1BQUQ7QUFBQSxXQUNmO0FBQUssU0FBRyxFQUFFQSxNQUFNLENBQUNDLFlBQWpCO0FBQStCLGVBQVMsRUFBQyx3QkFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssZUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUssU0FBRyxFQUFDLGNBQVQ7QUFBd0IsZUFBUyxFQUFDLGVBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFERixFQUVFO0FBQUssZUFBUyxFQUFDLE1BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQ0FDMEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUQxQix3SEFFeUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZ6RCw4Q0FHMkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUgzQixvQkFGRixDQURGLEVBVUU7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0U7QUFBSyxlQUFTLEVBQUMsaUJBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQVlELE1BQU0sQ0FBQ0UsSUFBbkIsQ0FERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBQWFGLE1BQU0sQ0FBQ0csS0FBcEIsU0FGRixFQUdFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUNBSEYsQ0FERixFQU1FO0FBQUssZUFBUyxFQUFDLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNFLE1BQUMsbURBQUQ7QUFBUSxXQUFLLEVBQUVILE1BQU0sQ0FBQ0MsWUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBTkYsQ0FWRixFQW9CRTtBQUFLLGVBQVMsRUFBQyxrREFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BcEJGLEVBcUJFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0lBQ2tFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEbEUsMkNBRThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGOUIsZ0tBR21GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFIbkYsd0RBckJGLENBRGU7QUFBQSxHQUFqQixDQUZKLENBREY7QUFvQ0QsQ0F0Q0Q7O0dBQU1OLGdCOztLQUFBQSxnQjtBQXdDU0EsK0VBQWYiLCJmaWxlIjoiLi9jb250YWluZXJzL1BvaW50T2ZTYWxlL1ByaW50UGFnZS9Db21wb25lbnRUb1ByaW50LnRzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFFSY29kZSBmcm9tICdxcmNvZGUucmVhY3QnO1xuXG5pbXBvcnQgeyBDYXJ0Q29udGV4dCB9IGZyb20gJ2NvbnRleHRzL2NhcnQvY2FydC5jb250ZXh0JztcblxuY29uc3QgQ29tcG9uZW50VG9QcmludCA9ICgpID0+IHtcbiAgY29uc3QgeyB0aWNrZXRzT3JkZXIgfSA9IHVzZUNvbnRleHQoQ2FydENvbnRleHQpO1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPSdtLTAgcC0wJz5cbiAgICAgIHtcbiAgICAgICAgdGlja2V0c09yZGVyLm1hcCgodGlja2V0KSA9PiAoXG4gICAgICAgICAgPGRpdiBrZXk9e3RpY2tldC5vcmRlck9yZ2luYWx9IGNsYXNzTmFtZT0nYmctd2hpdGUgdy1zY3JlZW4gbXgtMSc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBwLTUgbS0wJz5cbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvZmF2aWNvbi5wbmdcIiBjbGFzc05hbWU9J3ctYXV0byBoLWF1dG8nIC8+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtbC0zJz5cbiAgICAgICAgICAgICAgICBLSFUgRFUgTOG7ikNIIFRIw4FDIERBVEFOTEE8YnIgLz5cbiAgICAgICAgICAgICAgICDEkOG7i2EgY2jhu4k6IFFMMjAgxJDDqG8gUHJlbm4sIFBoxrDhu51uZyAzLCBUcC4gxJDDoCBM4bqhdCwgTMOibSDEkOG7k25nPGJyIC8+XG4gICAgICAgICAgICAgICAgxJBp4buHbiB0aG/huqFpOiAwMjYzIDM1MzMgODk5PGJyIC8+XG4gICAgICAgICAgICAgICAgTVNUOiAwMzAyOTQ1NjI1XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBwLTUnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbXItYXV0byBteS1hdXRvJz5cbiAgICAgICAgICAgICAgICA8ZGl2Pk5hbWU6IHt0aWNrZXQubmFtZX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlByaWNlOiB7dGlja2V0LnByaWNlfSBWTkQ8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PihJbmNsdWRlZCAxMCUgZnJvbSBWQVQpPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nbWwtYXV0byc+XG4gICAgICAgICAgICAgICAgPFFSY29kZSB2YWx1ZT17dGlja2V0Lm9yZGVyT3JnaW5hbH0gLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdib3JkZXItZGFzaGVkIGJvcmRlci1ncmF5LTYwMCBib3JkZXIgdy1mdWxsIG15LTUnPjwvZGl2PlxuICAgICAgICAgICAgPGZvb3Rlcj5cbiAgICAgICAgICAgICAgLSBWw6kgxJHGsOG7o2MgaW4gdOG7qyBwaOG6p24gbeG7gW0gdsOpIHThu7EgaW4gY+G7p2EgY8O0bmcgdHkgY+G7lSBwaOG6p24gU2F2ZU1vbmV5LjxiciAvPlxuICAgICAgICAgICAgICBNw6MgbmjDom4gdmnDqm46IEFkbWluaXN0cmF0b3IgPGJyIC8+XG4gICAgICAgICAgICAgIFbDqSBz4butIGThu6VuZyBu4buZaSBi4buZLiBRdcO9IGtow6FjaCB2dWkgbMOybmcgbGnDqm4gaOG7hyBz4buRICgwMjgpIDM5MjUgOTgyOCDEkeG7gyBuaOG6rW4gaMOzYSDEkcahbi48YnIgLz5cbiAgICAgICAgICAgICAgSMOsbmggdGjhu6ljIHRoYW5oIHRvw6FuOiBUaeG7gW4gbeG6t3RcbiAgICAgICAgICAgIDwvZm9vdGVyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKVxuICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50VG9QcmludDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./containers/PointOfSale/PrintPage/ComponentToPrint.tsx\n");

/***/ })

})