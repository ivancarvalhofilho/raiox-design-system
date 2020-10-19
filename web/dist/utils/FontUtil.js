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
    color: theme.colors[fontColor[0]][fontColor[1]][fontColor[2]]
  };
};

var _default = fontStyleMaker;
exports["default"] = _default;