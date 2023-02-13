"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Rating;
var _bs = require("react-icons/bs");
var _jsxRuntime = require("react/jsx-runtime");
function Rating(_ref) {
  var rate = _ref.rate;
  var fill = rate | 0;
  var half = rate - fill > 0.1 ? 1 : 0;
  var empty = 5 - (fill + half);
  var stars = [];
  for (var i = 0; i < fill; i++) {
    stars.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsStarFill, {
      className: "text-pink-600  lg:mr-0.5"
    }, "fill-".concat(i)));
  }
  for (var _i = 0; _i < half; _i++) {
    stars.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsStarHalf, {
      className: "text-pink-600  lg:mr-0.5"
    }, "half-".concat(_i)));
  }
  for (var _i2 = 0; _i2 < empty; _i2++) {
    stars.push( /*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsStar, {
      className: "text-pink-600 lg:mr-0.5"
    }, "empty-".concat(_i2)));
  }
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
    className: "flex flex-row items-center",
    children: stars
  });
}

//# sourceMappingURL=Rating.js.map