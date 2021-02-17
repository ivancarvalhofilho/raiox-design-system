"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _clickHandleUtil = require("./clickHandleUtil");

Object.keys(_clickHandleUtil).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _clickHandleUtil[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _clickHandleUtil[key];
    }
  });
});

var _FontUtil = require("./FontUtil");

Object.keys(_FontUtil).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (key in exports && exports[key] === _FontUtil[key]) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _FontUtil[key];
    }
  });
});