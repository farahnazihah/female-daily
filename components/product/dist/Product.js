"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Product;
var _fi = require("react-icons/fi");
var _image = _interopRequireDefault(require("next/image"));
var _Rating = _interopRequireDefault(require("./Rating"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Product(_ref) {
  var data = _ref.data;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "w-full p-2 rounded-lg bg-white",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "flex justify-center my-3",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_image["default"], {
        loader: function loader() {
          return data.image;
        },
        src: data.image,
        alt: "product",
        width: "0",
        height: "0",
        className: "w-3/5 h-auto"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "flex flex-row mb-2 text-xs xl:text-md font-bold",
        children: [data.rating, /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
          className: "flex mx-0.5 lg:mx-2",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Rating["default"], {
            rate: data.rating
          })
        }), "(7)"]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h6", {
        className: "font-bold",
        children: data.name.toUpperCase()
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: data.desc
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "text-neutral-400",
        children: data.desc ? "" : data.description
      })]
    })]
  });
}

//# sourceMappingURL=Product.js.map