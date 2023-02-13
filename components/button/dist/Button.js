"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Button;
var _jsxRuntime = require("react/jsx-runtime");
function GhostButton(_ref) {
  var href = _ref.href,
    children = _ref.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: "flex items-center hover:text-pink-700 text-sm px-5 py-2.5",
    href: href,
    children: children
  });
}
function SolidButton(_ref2) {
  var href = _ref2.href,
    children = _ref2.children;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)("button", {
    type: "button",
    className: "flex items-center text-white bg-pink-700 hover:bg-pink-800 break-normal focus:ring-4 focus:ring-blue-300 px-5 py-2.5",
    href: href,
    children: children
  });
}
function Button(_ref3) {
  var href = _ref3.href,
    children = _ref3.children,
    type = _ref3.type;
  if (type == "solid") return /*#__PURE__*/(0, _jsxRuntime.jsx)(SolidButton, {
    href: href,
    children: children
  });else if (type == "ghost") return /*#__PURE__*/(0, _jsxRuntime.jsx)(GhostButton, {
    href: href,
    children: children
  });
}

//# sourceMappingURL=Button.js.map