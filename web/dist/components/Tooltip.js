"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _FontUtil = _interopRequireDefault(require("../utils/FontUtil"));

var _this = void 0;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  bottom: -3px;\n  left: ", "px;\n  background: ", ";\n  transform: rotate(45deg);\n  width: 6px;\n  height: 6px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  background: ", ";\n  padding: 8px;\n  display: ", ";\n  opacity: 0.8;\n  text-align: center;\n  min-width: 123px;\n  border-radius: 4px;\n  top: ", "px;\n  left: ", "px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var TooltipMessage = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.theme.colors.neutral.dark.base;
}, function (props) {
  return !props.show && 'none';
}, function (props) {
  return props.positionY - props.height;
}, function (props) {
  return props.positionX - props.width / 2;
});

var Arrow = _styledComponents["default"].div(_templateObject2(), function (props) {
  return (props.width - 6) / 2;
}, function (props) {
  return props.theme.colors.neutral.dark.base;
});

var attributte = 'custom-tooltip';

var Tooltip = function Tooltip(props) {
  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      height = _useState4[0],
      setHeight = _useState4[1];

  var _useState5 = (0, _react.useState)(0),
      _useState6 = _slicedToArray(_useState5, 2),
      width = _useState6[0],
      setWidth = _useState6[1];

  var _useState7 = (0, _react.useState)(0),
      _useState8 = _slicedToArray(_useState7, 2),
      widthTooltip = _useState8[0],
      setWidthTooltip = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      positionX = _useState10[0],
      setPositionX = _useState10[1];

  var _useState11 = (0, _react.useState)(0),
      _useState12 = _slicedToArray(_useState11, 2),
      positionY = _useState12[0],
      setPositionY = _useState12[1];

  var _useState13 = (0, _react.useState)(''),
      _useState14 = _slicedToArray(_useState13, 2),
      message = _useState14[0],
      setMessage = _useState14[1];

  var tooltipRef = (0, _react.useRef)();

  var onMouseOver = function onMouseOver(element, e) {
    setShow(true);
    setMessage(element.attributes.getNamedItem(attributte).value);
    setHeight(element.getBoundingClientRect().height > 34 ? element.getBoundingClientRect().height : 34);
    setPositionX(element.getBoundingClientRect().left);
    setPositionY(element.getBoundingClientRect().top);
    setWidthTooltip(tooltipRef.current ? tooltipRef.current.clientWidth : 0);
    setWidth((tooltipRef.current ? tooltipRef.current.clientWidth : 0) - e.target.clientWidth);
  };

  var onMouseLeave = function onMouseLeave(e) {
    setShow(false);
  };

  (0, _react.useEffect)(function () {
    document.querySelectorAll("[".concat(attributte, "]")).forEach(function (element) {
      element.onmouseover = onMouseOver.bind(_this, element);
      element.onmouseleave = onMouseLeave.bind(_this, element);
    });
    setTimeout(function () {
      document.querySelectorAll("[".concat(attributte, "]")).forEach(function (element) {
        element.onmouseover = onMouseOver.bind(_this, element);
        element.onmouseleave = onMouseLeave.bind(_this, element);
      });
    }, 5000);
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, props.children, /*#__PURE__*/_react["default"].createElement(TooltipMessage, {
    ref: tooltipRef,
    height: height,
    width: width,
    show: show,
    positionX: positionX,
    positionY: positionY
  }, message, /*#__PURE__*/_react["default"].createElement(Arrow, {
    width: widthTooltip
  })));
};

var _default = Tooltip;
exports["default"] = _default;