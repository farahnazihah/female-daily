"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Group;
var _image = _interopRequireDefault(require("next/image"));
var _bs = require("react-icons/bs");
var _md = require("react-icons/md");
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var src = "https://image.femaledaily.com/dyn/80/images/user-pics/72acded3acd45e4c8b6ed680854b8ab1jxqnwq1669093826846.jpeg";
function Group(_ref) {
  var groupData = _ref.groupData;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_jsxRuntime.Fragment, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "flex flex-col w-full items-center border shadow-lg rounded-lg p-5",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_image["default"], {
        className: "rounded-full m-2",
        loader: function loader() {
          return src;
        },
        src: src,
        alt: "product",
        width: "160",
        height: "160"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("h3", {
        className: "text-xl font-bold",
        children: groupData.name
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "w-full flex items-center place-content-evenly mt-5",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsPeopleFill, {}), "-"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_bs.BsListUl, {}), "-"]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex items-center",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_md.MdOutlineInsertComment, {}), "-"]
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "mb-5 text-center text-gray-500 text-md font-semibold",
        children: groupData.desc
      })]
    })
  });
}

//# sourceMappingURL=Group.js.map