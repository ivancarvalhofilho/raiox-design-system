"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var fontStyleMaker = function fontStyleMaker(theme, fontFamily, fontWeight, fontSize, fontColor) {
  var color = fontColor.split('.');
  return {
    fontFamily: theme.fonts.family[fontFamily],
    fontWeight: theme.fonts.weight[fontWeight],
    fontSize: theme.fonts.fontSize[fontSize],
    color: color && color.length === 3 && theme.colors[color[0]][color[1]][color[2]]
  };
};

var _default = fontStyleMaker;
exports["default"] = _default;