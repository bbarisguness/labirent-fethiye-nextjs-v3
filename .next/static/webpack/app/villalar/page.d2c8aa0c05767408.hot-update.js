"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/villalar/page",{

/***/ "(app-client)/./components/index/villa/card/villaCard.jsx":
/*!***************************************************!*\
  !*** ./components/index/villa/card/villaCard.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ VillaCard; }\n/* harmony export */ });\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/link */ \"(app-client)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _s = $RefreshSig$();\n\n\n\nfunction VillaCard(param) {\n    let { data , type , from  } = param;\n    _s();\n    console.log(data);\n    const [imageIndex, setImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _data_attributes_gallery_data_attributes_image_data_, _data_attributes, _data_attributes_gallery, _data_attributes_gallery_data, _data_attributes_gallery_data_attributes, _data_attributes_gallery_data_attributes_image;\n        setImage((_data_attributes_gallery_data_attributes_image_data_ = data === null || data === void 0 ? void 0 : (_data_attributes = data.attributes) === null || _data_attributes === void 0 ? void 0 : (_data_attributes_gallery = _data_attributes.gallery) === null || _data_attributes_gallery === void 0 ? void 0 : (_data_attributes_gallery_data = _data_attributes_gallery.data) === null || _data_attributes_gallery_data === void 0 ? void 0 : (_data_attributes_gallery_data_attributes = _data_attributes_gallery_data.attributes) === null || _data_attributes_gallery_data_attributes === void 0 ? void 0 : (_data_attributes_gallery_data_attributes_image = _data_attributes_gallery_data_attributes.image) === null || _data_attributes_gallery_data_attributes_image === void 0 ? void 0 : _data_attributes_gallery_data_attributes_image.data[0]) === null || _data_attributes_gallery_data_attributes_image_data_ === void 0 ? void 0 : _data_attributes_gallery_data_attributes_image_data_.attributes.url);\n    }, [\n        data\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        var _data_attributes_gallery_data_attributes_image_data_imageIndex, _data_attributes, _data_attributes_gallery, _data_attributes_gallery_data, _data_attributes_gallery_data_attributes, _data_attributes_gallery_data_attributes_image, _data_attributes_gallery_data_attributes_image_data_imageIndex_attributes;\n        //console.log(imageIndex);\n        setImage((_data_attributes_gallery_data_attributes_image_data_imageIndex = data === null || data === void 0 ? void 0 : (_data_attributes = data.attributes) === null || _data_attributes === void 0 ? void 0 : (_data_attributes_gallery = _data_attributes.gallery) === null || _data_attributes_gallery === void 0 ? void 0 : (_data_attributes_gallery_data = _data_attributes_gallery.data) === null || _data_attributes_gallery_data === void 0 ? void 0 : (_data_attributes_gallery_data_attributes = _data_attributes_gallery_data.attributes) === null || _data_attributes_gallery_data_attributes === void 0 ? void 0 : (_data_attributes_gallery_data_attributes_image = _data_attributes_gallery_data_attributes.image) === null || _data_attributes_gallery_data_attributes_image === void 0 ? void 0 : _data_attributes_gallery_data_attributes_image.data[imageIndex]) === null || _data_attributes_gallery_data_attributes_image_data_imageIndex === void 0 ? void 0 : (_data_attributes_gallery_data_attributes_image_data_imageIndex_attributes = _data_attributes_gallery_data_attributes_image_data_imageIndex.attributes) === null || _data_attributes_gallery_data_attributes_image_data_imageIndex_attributes === void 0 ? void 0 : _data_attributes_gallery_data_attributes_image_data_imageIndex_attributes.url);\n    }, [\n        imageIndex\n    ]);\n    const imageHandler = (e, operation)=>{\n        e.preventDefault();\n        if (operation == \"next\") {\n            if (imageIndex == 2) {\n                setImageIndex(0);\n            } else {\n                setImageIndex(imageIndex + 1);\n            }\n        // console.log(imageIndex);\n        //setImage(data.attributes.gallery?.data?.attributes.image.data[imageIndex-1])\n        //if (imageIndex == 3) { setImageIndex(1) } else { setImageIndex(imageIndex + 1) }\n        } else {\n            if (imageIndex == 0) {\n                setImageIndex(2);\n            } else {\n                setImageIndex(imageIndex - 1);\n            }\n        //console.log(imageIndex);\n        }\n    };\n}\n_s(VillaCard, \"PNNAYyk9uNwXDkjPK7zuQSXOkOQ=\");\n_c = VillaCard;\nvar _c;\n$RefreshReg$(_c, \"VillaCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9pbmRleC92aWxsYS9jYXJkL3ZpbGxhQ2FyZC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTJDO0FBQ2Y7QUFDc0I7QUFFbkMsU0FBU0ssVUFBVSxLQUFvQixFQUFFO1FBQXRCLEVBQUVDLEtBQUksRUFBRUMsS0FBSSxFQUFFQyxLQUFJLEVBQUUsR0FBcEI7O0lBRTlCQyxRQUFRQyxHQUFHLENBQUNKO0lBRVosTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdSLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1MsT0FBT0MsU0FBUyxHQUFHViwrQ0FBUUE7SUFFbENELGdEQUFTQSxDQUFDLElBQU07WUFDSEcsc0RBQUFBO1FBQVRRLFNBQVNSLENBQUFBLHVEQUFBQSxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLENBQUFBLG1CQUFBQSxLQUFNUyxVQUFVLGNBQWhCVCw4QkFBQUEsS0FBQUEsSUFBQUEsNEJBQUFBLGlCQUFrQlUsMkRBQWxCVixLQUFBQSxJQUFBQSwwREFBMkJBLDZEQUEzQkEsS0FBQUEsSUFBQUEsMEVBQWlDUyw4RUFBakNULEtBQUFBLElBQUFBLDJGQUE2Q08sK0VBQTdDUCxLQUFBQSxJQUFBQSwrQ0FBb0RBLElBQUksQ0FBQyxFQUFFLGNBQTNEQSxrRUFBQUEsS0FBQUEsSUFBQUEscURBQTZEUyxXQUFXRSxHQUFHO0lBQ3hGLEdBQUc7UUFBQ1g7S0FBSztJQUVUSCxnREFBU0EsQ0FBQyxJQUFNO1lBRUhHLGdFQUFBQTtRQURULDBCQUEwQjtRQUMxQlEsU0FBU1IsQ0FBQUEsaUVBQUFBLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsQ0FBQUEsbUJBQUFBLEtBQU1TLFVBQVUsY0FBaEJULDhCQUFBQSxLQUFBQSxJQUFBQSw0QkFBQUEsaUJBQWtCVSwyREFBbEJWLEtBQUFBLElBQUFBLDBEQUEyQkEsNkRBQTNCQSxLQUFBQSxJQUFBQSwwRUFBaUNTLDhFQUFqQ1QsS0FBQUEsSUFBQUEsMkZBQTZDTywrRUFBN0NQLEtBQUFBLElBQUFBLCtDQUFvREEsSUFBSSxDQUFDSyxXQUFXLGNBQXBFTCw0RUFBQUEsS0FBQUEsSUFBQUEsNkVBQUFBLCtEQUFzRVMsK0dBQXRFVCxLQUFBQSw4RUFBa0ZXLEdBQUY7SUFDN0YsR0FBRztRQUFDTjtLQUFXO0lBRWYsTUFBTU8sZUFBZSxDQUFDQyxHQUFHQyxZQUFjO1FBQ25DRCxFQUFFRSxjQUFjO1FBQ2hCLElBQUlELGFBQWEsUUFBUTtZQUdyQixJQUFJVCxjQUFjLEdBQUc7Z0JBQUVDLGNBQWM7WUFBRyxPQUNuQztnQkFBRUEsY0FBY0QsYUFBYTtZQUFHLENBQUM7UUFHdEMsMkJBQTJCO1FBRTNCLDhFQUE4RTtRQUM5RSxrRkFBa0Y7UUFDdEYsT0FDSztZQUNELElBQUlBLGNBQWMsR0FBRztnQkFBRUMsY0FBYztZQUFHLE9BQ25DO2dCQUFFQSxjQUFjRCxhQUFhO1lBQUcsQ0FBQztRQUV0QywwQkFBMEI7UUFFOUIsQ0FBQztJQUNMO0FBQ0osQ0FBQztHQXRDdUJOO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvaW5kZXgvdmlsbGEvY2FyZC92aWxsYUNhcmQuanN4PzE4OGEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi92aWxsYUNhcmQubW9kdWxlLmNzc1wiXHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWaWxsYUNhcmQoeyBkYXRhLCB0eXBlLCBmcm9tIH0pIHtcclxuICAgIFxyXG4gICAgY29uc29sZS5sb2coZGF0YSk7XHJcblxyXG4gICAgY29uc3QgW2ltYWdlSW5kZXgsIHNldEltYWdlSW5kZXhdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IFtpbWFnZSwgc2V0SW1hZ2VdID0gdXNlU3RhdGUoKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SW1hZ2UoZGF0YT8uYXR0cmlidXRlcz8uZ2FsbGVyeT8uZGF0YT8uYXR0cmlidXRlcz8uaW1hZ2U/LmRhdGFbMF0/LmF0dHJpYnV0ZXMudXJsKVxyXG4gICAgfSwgW2RhdGFdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhpbWFnZUluZGV4KTtcclxuICAgICAgICBzZXRJbWFnZShkYXRhPy5hdHRyaWJ1dGVzPy5nYWxsZXJ5Py5kYXRhPy5hdHRyaWJ1dGVzPy5pbWFnZT8uZGF0YVtpbWFnZUluZGV4XT8uYXR0cmlidXRlcz8udXJsKVxyXG4gICAgfSwgW2ltYWdlSW5kZXhdKVxyXG5cclxuICAgIGNvbnN0IGltYWdlSGFuZGxlciA9IChlLCBvcGVyYXRpb24pID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYgKG9wZXJhdGlvbiA9PSBcIm5leHRcIikge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGlmIChpbWFnZUluZGV4ID09IDIpIHsgc2V0SW1hZ2VJbmRleCgwKSB9XHJcbiAgICAgICAgICAgIGVsc2UgeyBzZXRJbWFnZUluZGV4KGltYWdlSW5kZXggKyAxKSB9XHJcblxyXG5cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaW1hZ2VJbmRleCk7XHJcblxyXG4gICAgICAgICAgICAvL3NldEltYWdlKGRhdGEuYXR0cmlidXRlcy5nYWxsZXJ5Py5kYXRhPy5hdHRyaWJ1dGVzLmltYWdlLmRhdGFbaW1hZ2VJbmRleC0xXSlcclxuICAgICAgICAgICAgLy9pZiAoaW1hZ2VJbmRleCA9PSAzKSB7IHNldEltYWdlSW5kZXgoMSkgfSBlbHNlIHsgc2V0SW1hZ2VJbmRleChpbWFnZUluZGV4ICsgMSkgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGltYWdlSW5kZXggPT0gMCkgeyBzZXRJbWFnZUluZGV4KDIpIH1cclxuICAgICAgICAgICAgZWxzZSB7IHNldEltYWdlSW5kZXgoaW1hZ2VJbmRleCAtIDEpIH1cclxuXHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coaW1hZ2VJbmRleCk7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJzdHlsZXMiLCJMaW5rIiwiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlZpbGxhQ2FyZCIsImRhdGEiLCJ0eXBlIiwiZnJvbSIsImNvbnNvbGUiLCJsb2ciLCJpbWFnZUluZGV4Iiwic2V0SW1hZ2VJbmRleCIsImltYWdlIiwic2V0SW1hZ2UiLCJhdHRyaWJ1dGVzIiwiZ2FsbGVyeSIsInVybCIsImltYWdlSGFuZGxlciIsImUiLCJvcGVyYXRpb24iLCJwcmV2ZW50RGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./components/index/villa/card/villaCard.jsx\n"));

/***/ })

});