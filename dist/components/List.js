"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _ListHeader = _interopRequireDefault(require("./ListHeader"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3, _templateObject4;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var ListContainer = _styledComponents["default"].div(_templateObject || (_templateObject = _taggedTemplateLiteral([""])));

var Row = _styledComponents["default"].div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  display: flex;\n  height: ", "px;\n  padding: 0px 16px;\n  border-bottom: 1px solid #e0e0e0;\n"])), function (props) {
  return props.size || 46;
});

var Column = _styledComponents["default"].div(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  height: 100%;\n  width: ", "%;\n  justify-content: ", ";\n  align-items: center;\n  display: flex;\n"])), function (props) {
  return props.width;
}, function (props) {
  return props.align === 'right' ? 'flex-end' : props.align === 'left' ? 'flex-start' : props.align;
});

var ListData = _styledComponents["default"].div(_templateObject4 || (_templateObject4 = _taggedTemplateLiteral([""])));

var List = function List(props) {
  return /*#__PURE__*/_react["default"].createElement(ListContainer, {
    style: props.style
  }, /*#__PURE__*/_react["default"].createElement(_ListHeader["default"], {
    data: props.header,
    align: props.align
  }), /*#__PURE__*/_react["default"].createElement(ListData, {
    style: props.styleData,
    className: "custom-scrollbar"
  }, props.rows.map(function (row, index) {
    return /*#__PURE__*/_react["default"].createElement(Row, {
      key: index,
      size: props.rowSize
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
  rowSize: _propTypes["default"].number,
  rows: _propTypes["default"].array,
  style: _propTypes["default"].object,
  styleData: _propTypes["default"].object
};