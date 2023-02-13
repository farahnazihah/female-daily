"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = EditorsChoice;
var _Product = _interopRequireDefault(require("./Product"));
var _image = _interopRequireDefault(require("next/image"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function EditorsChoice(_ref) {
  var data = _ref.data;
  var src = "https://image.femaledaily.com/dyn/80/images/user-pics/72acded3acd45e4c8b6ed680854b8ab1jxqnwq1669093826846.jpeg";
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "w-full",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex flex-row px-3 relative top-2 flex-wrap-reverse justify-center",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_image["default"], {
        className: "rounded-full mr-2",
        loader: function loader() {
          return src;
        },
        src: src,
        alt: "product",
        width: "48",
        height: "48"
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "font-bold text-gray-700",
          children: data.editor
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
          className: "text-xs text-gray-400",
          children: data.role
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      className: "border rounded-lg w-fit",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Product["default"], {
        data: data.product
      })
    })]
  });
}

//# sourceMappingURL=EditorsChoice.js.map