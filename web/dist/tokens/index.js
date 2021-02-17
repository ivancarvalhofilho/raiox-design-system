"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tokens = void 0;

var _fonts = _interopRequireDefault(require("./fonts.tsx"));

var _tokens = _interopRequireDefault(require("./tokens.tsx"));

var _icons = _interopRequireDefault(require("./icons/icons"));

var _colors = _interopRequireDefault(require("./colors.tsx"));

var _iconsAdquirente = _interopRequireDefault(require("./icons/iconsAdquirente"));

var _illustrations = _interopRequireDefault(require("./icons/illustrations"));

var _iconsBanco = _interopRequireDefault(require("./icons/iconsBanco"));

require("./global.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tokens = _objectSpread({
  colors: _colors["default"],
  fonts: _fonts["default"],
  icons: _icons["default"],
  iconsAdquirentes: _iconsAdquirente["default"],
  iconsBanco: _iconsBanco["default"],
  illustrations: _illustrations["default"]
}, _tokens["default"]);

exports.Tokens = Tokens;