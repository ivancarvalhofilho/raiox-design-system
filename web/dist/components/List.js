"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _ListHeader = _interopRequireDefault(require("./ListHeader"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  height: 100%;\n  width: ", "%;\n  justify-content: ", ";\n  align-items: center;\n  display: flex;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  height: 46px;\n  padding: 0px 16px;\n  border-bottom: 1px solid #e0e0e0;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 342px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ListContainer = _styledComponents["default"].div(_templateObject());

var Row = _styledComponents["default"].div(_templateObject2());

var Column = _styledComponents["default"].div(_templateObject3(), function (props) {
  return props.width;
}, function (props) {
  return props.align === 'right' ? 'flex-end' : props.align === 'left' ? 'flex-start' : props.align;
});

var ListData = _styledComponents["default"].div(_templateObject4());

var List = function List(props) {
  return /*#__PURE__*/_react["default"].createElement(ListContainer, null, /*#__PURE__*/_react["default"].createElement(_ListHeader["default"], {
    data: props.header,
    align: props.align
  }), /*#__PURE__*/_react["default"].createElement(ListData, null, props.rows.map(function (row, index) {
    return /*#__PURE__*/_react["default"].createElement(Row, {
      key: index
    }, row.map(function (column, index) {
      return /*#__PURE__*/_react["default"].createElement(Column, {
        key: index,
        align: props.align[index],
        width: 100 / row.length
      }, column);
    }));
  })));
};

var _default = List;
exports["default"] = _default;
List.propTypes = {
  align: _propTypes["default"].array,
  header: _propTypes["default"].array,
  rows: _propTypes["default"].array
};