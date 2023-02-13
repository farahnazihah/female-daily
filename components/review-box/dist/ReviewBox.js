"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = ReviewBox;
var _Rating = _interopRequireDefault(require("./Rating"));
var _image = _interopRequireDefault(require("next/image"));
var _link = _interopRequireDefault(require("next/link"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var src = "https://image.femaledaily.com/dyn/80/images/user-pics/72acded3acd45e4c8b6ed680854b8ab1jxqnwq1669093826846.jpeg";
function Reviewer(_ref) {
  var user = _ref.user,
    profile = _ref.profile;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "px-5 flex flex-col items-center relative -top-5",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("div", {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_image["default"], {
        className: "rounded-full mr-2",
        loader: function loader() {
          return src;
        },
        src: src,
        alt: "product",
        width: "48",
        height: "48"
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "font-bold text-gray-700",
      children: user
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "text-xs text-gray-400",
      children: profile.join(", ")
    })]
  });
}
function ProductReview(_ref2) {
  var product = _ref2.product;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "flex flex-row px-2 items-center py-3",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_image["default"], {
      className: " mr-3",
      loader: function loader() {
        return product.image;
      },
      src: product.image,
      alt: "product",
      width: "48",
      height: "48"
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "font-bold text-gray-700",
        children: product.name
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        className: "text-xs text-gray-400",
        children: product.desc
      })]
    })]
  });
}
function ReviewBox(_ref3) {
  var reviewData = _ref3.reviewData;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    className: "w-full",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
      className: "divide-y p-3 border-2 rounded-lg",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(ProductReview, {
        product: reviewData.product
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
        className: "py-3",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
          className: "flex justify-between flex-wrap",
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Rating["default"], {
            rate: reviewData.star
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
            className: "text-gray-400 text-xs my-2",
            children: "2 hours ago"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
          className: "text-xs my-2",
          children: [reviewData.comment, "...", " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_link["default"], {
            className: "text-pink-500 font-semibold",
            href: "google.com",
            children: "Read more"
          })]
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(Reviewer, {
      user: reviewData.user,
      profile: reviewData.profile
    })]
  });
}

//# sourceMappingURL=ReviewBox.js.map