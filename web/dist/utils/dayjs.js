"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _dayjs = _interopRequireDefault(require("dayjs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var weekday = require('dayjs/plugin/weekday');

_dayjs["default"].extend(weekday);

require('dayjs/locale/pt-br');

_dayjs["default"].locale('pt-br');

var _default = _dayjs["default"];
exports["default"] = _default;