"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _colors = _interopRequireDefault(require("./colors"));

var _fonts = _interopRequireDefault(require("./fonts"));

var _styles = _interopRequireDefault(require("./styles"));

var _icons = _interopRequireDefault(require("./icons"));

var _iconsAdquirente = _interopRequireDefault(require("./iconsAdquirente"));

require("./global.css");

var _iconsBanco = _interopRequireDefault(require("./iconsBanco"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var theme = {
  colors: _colors["default"],
  fonts: _fonts["default"],
  icons: _icons["default"],
  iconsAdquirentes: _iconsAdquirente["default"],
  iconsBanco: _iconsBanco["default"],
  styles: _styles["default"]
};
var _default = theme;
exports["default"] = _default;