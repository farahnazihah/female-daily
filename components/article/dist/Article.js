"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Article;
var _image = _interopRequireDefault(require("next/image"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function Article(_ref) {
  var articleData = _ref.articleData;
  var src = articleData.image;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "w-full py-5",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_image["default"], {
      loader: function loader() {
        return src;
      },
      src: src,
      alt: "product",
      width: "0",
      height: "0",
      className: "w-full h-auto rounded-lg mb-3"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h4", {
      className: "font-bold text-xl mb-3",
      children: articleData.title
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
      className: "text-gray-400",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
        className: "font-semibold",
        children: articleData.author
      }), " |", " ", articleData.published_at]
    })]
  });
}

//# sourceMappingURL=Article.js.map