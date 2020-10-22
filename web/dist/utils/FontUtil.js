"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var fontStyleMaker = function fontStyleMaker(theme, fontFamily, fontWeight, fontSize, fontColor) {
  return {
    fontFamily: theme.fonts.family[fontFamily],
    fontWeight: theme.fonts.weight[fontWeight],
    fontSize: theme.fonts.fontSize[fontSize],
    color: fontColor && theme.colors[fontColor.split('.')]
  };
};

var _default = fontStyleMaker;
exports["default"] = _default;