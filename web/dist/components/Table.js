"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactInfiniteScrollComponent = _interopRequireDefault(require("react-infinite-scroll-component"));

var _theme = _interopRequireDefault(require("../../../tokens/theme"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _icons = _interopRequireDefault(require("../../../tokens/theme/icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n  padding: 0 20px;\n  cursor: pointer;\n  display: flex;\n"]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  transition: 2s;\n  cursor: auto;\n  border-left: 8px ", " solid;\n  left: 0;\n  width: 100%;\n  top: ", ";\n"]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n"]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n  white-space: nowrap;\n  display: flex;\n  margin: auto 0;\n  align-items: center;\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  //width: 100%;\n  align-items: center;\n  justify-content: ", ";\n  cursor: ", ";\n  border-bottom: ", ";\n  background-color: ", ";\n  padding: 5px;\n  max-height: 48px;\n  padding-left: ", ";\n  padding-right: ", ";\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  display: inline-grid;\n  transition: 2s;\n  grid-template-rows: ", ";\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: inline-grid;\n  font-size: 14px;\n  border: ", ";\n  overflow: ", ";\n  background-color: #f2f5f7;\n  min-width: ", ";\n  width: 100%;\n  color: ", ";\n  grid-template-columns: ", ";\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  font-family: ", ";\n  flex: 1;\n\n  .custom-scrollbar,\n  .select__menu-list {\n    &::-webkit-scrollbar-track {\n      background-color: transparent;\n    }\n\n    &::-webkit-scrollbar {\n      width: 14px;\n    }\n\n    &::-webkit-scrollbar-thumb {\n      background-color: rgba(216, 216, 216, 1);\n      border-radius: 20px;\n      border: 4px solid rgba(0, 0, 0, 0);\n      background-clip: padding-box;\n      width: 4px;\n    }\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  background: white;\n  position: relative;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-grid;\n  position: relative;\n  margin-right: ", ";\n  overflow: auto;\n  font-size: 14px;\n  height: auto !important;\n  max-height: ", ";\n  min-width: ", ";\n  border-bottom: 1px solid #e7e7e7;\n  width: 100%;\n  color: ", ";\n  grid-template-columns: ", ";\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: inline-grid;\n  position: relative;\n  margin-right: ", ";\n  overflow: overlay;\n  font-size: 14px;\n  min-width: ", ";\n  width: 100%;\n  height: auto !important;\n  max-height: ", ";\n  color: ", ";\n  grid-template-columns: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  width: ", "%;\n  justify-content: center;\n  flex-direction: column;\n  min-width: fit-content;\n  height: 60px;\n  align-items: center;\n  background-image: linear-gradient(to bottom, transparent, white);\n\n  > p {\n    color: ", ";\n    margin: 0;\n  }\n\n  > svg {\n    margin-top: 10px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var LoaderContainer = _styledComponents["default"].div(_templateObject(), function (props) {
  return props.cols * '100';
}, function (props) {
  return props.theme.colors.neutral.dark.base;
});

var Container = _styledComponents["default"].div(_templateObject2(), function (props) {
  return props.optional && '-12px';
}, function (props) {
  return !props.optional && 'fit-content';
}, function (props) {
  return props.maxheight;
}, function (props) {
  return props.theme.colors.neutral.dark.base;
}, function (props) {
  return (props.hasColor ? '8px ' : '') + props.cols.splice(props.color ? 1 : 0).reduce(function (x, y, index) {
    return "".concat(x, " minmax(").concat(props.colHeadersWidth[index] ? "".concat(props.colHeadersWidth[index], "px") : 'auto', ",auto)");
  }, '');
});

var ContainerInfinite = (0, _styledComponents["default"])(_reactInfiniteScrollComponent["default"])(_templateObject3(), function (props) {
  return props.optional && '-12px';
}, function (props) {
  return props.maxheight;
}, function (props) {
  return !props.optional && 'fit-content';
}, function (props) {
  return props.theme.colors.neutral.dark.base;
}, function (props) {
  return (props.hasColor ? '8px ' : '') + props.cols.splice(props.color ? 1 : 0).reduce(function (x, y, index) {
    return "".concat(x, " minmax(").concat(props.colHeadersWidth[index] ? "".concat(props.colHeadersWidth[index], "px") : 'auto', ",auto)");
  }, '');
});

var Scroll = _styledComponents["default"].div(_templateObject4());

var DisplayGrid = _styledComponents["default"].div(_templateObject5(), function (props) {
  return props.theme.fonts.family.body;
});

var ContainerHeader = _styledComponents["default"].div(_templateObject6(), function (props) {
  return "".concat(props.theme.styles.border.width.hairline, " solid ").concat(props.theme.colors.neutral.dark['03']);
}, function (props) {
  return props.optional && 'hidden';
}, function (props) {
  return !props.optional && 'fit-content';
}, function (props) {
  return props.theme.colors.neutral.dark.base;
}, function (props) {
  return props.colsWidth.length > 0 ? (props.hasColor ? '8px ' : '') + props.colsWidth.reduce(function (x, y, index) {
    return "".concat(x, " minmax(", "".concat(props.colsWidth[index], "px"), ", auto)");
  }, '') : "".concat(props.hasColor ? '8px ' : '', " repeat(").concat(props.cols.length, ", auto)");
});

var Column = _styledComponents["default"].div(_templateObject7(), function (props) {
  return props.rows.reduce(function (x, y, index) {
    return "".concat(x, " ", "".concat((props.size || 48) + (index === props.indexRowOpened && props.indexRowOpened != null ? props.childrenHeight : 0), "px"));
  }, '');
});

var Row = _styledComponents["default"].div(_templateObject8(), function (props) {
  return props.justify === 'right' ? 'flex-end' : props.justify === 'left' && 'flex-start' || 'center';
}, function (props) {
  return props.clicable && 'pointer';
}, function (props) {
  return props.border && '1px solid #e7e7e7';
}, function (props) {
  return props.color || 'white';
}, function (props) {
  return props.first && '10%';
}, function (props) {
  return props.last && '10%';
});

var Value = _styledComponents["default"].div(_templateObject9());

var SpanValue = _styledComponents["default"].span(_templateObject10());

var Children = _styledComponents["default"].div(_templateObject11(), function (props) {
  return props.color;
}, function (props) {
  return props.top;
});

var Collapse = _styledComponents["default"].div(_templateObject12());

function Table(props) {
  var hasColor = Object.keys(props.data).find(function (key) {
    return key === 'colors';
  });
  var keys = Object.keys(props.data);
  var refChildren = (0, _react.useRef)();
  var indexOptional = keys.findIndex(function (key) {
    return props.data[key].optional;
  }) + keys.filter(function (key) {
    return props.data[key].optional;
  }).length;
  var colsOriginal = keys.filter(function (key) {
    return !props.data[key].optional;
  });
  var colsOriginalWithoutColor = colsOriginal.filter(function (key) {
    return key !== 'colors';
  });
  var cols = keys.slice(indexOptional, keys.length);
  var colsOptional = keys.slice(0, indexOptional);
  var optionalHeader = (0, _react.useRef)();
  var optionalContent = (0, _react.useRef)();
  var content = (0, _react.useRef)();
  var scrollableDiv = (0, _react.useRef)();

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      optionalMouse = _useState2[0],
      setOptionalMouse = _useState2[1];

  var _useState3 = (0, _react.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      childrenSize = _useState4[0],
      setChildrenSize = _useState4[1];

  var items = (0, _react.useRef)([]);
  var itemsHeader = (0, _react.useRef)([]);

  var _useState5 = (0, _react.useState)([]),
      _useState6 = _slicedToArray(_useState5, 2),
      colsWidth = _useState6[0],
      setColsWidth = _useState6[1];

  var _useState7 = (0, _react.useState)([]),
      _useState8 = _slicedToArray(_useState7, 2),
      colHeadersWidth = _useState8[0],
      setColHeadersWidth = _useState8[1];

  (0, _react.useEffect)(function () {
    setChildrenSize(refChildren.current ? refChildren.current.clientHeight : 0);
  }, [props.children]);
  (0, _react.useEffect)(function () {
    handleResize();
    setTimeout(function () {
      handleResize();
    }, 100);
  }, [props.data]);

  var handleResize = function handleResize() {
    setColHeadersWidth(itemsHeader.current.map(function (item, index) {
      if (hasColor && index === 0) {
        return null;
      }

      return item && item.clientWidth;
    }).filter(function (item) {
      return item !== null;
    }));
  };

  (0, _react.useEffect)(function () {
    setColsWidth(items.current.map(function (item) {
      return item && item.clientWidth;
    }));
  }, [colHeadersWidth]);
  (0, _react.useEffect)(function () {
    window.addEventListener('resize', handleResize);
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement(DisplayGrid, null, props.complete && /*#__PURE__*/_react["default"].createElement(ContainerHeader, {
    optional: true,
    colsWidth: colsWidth,
    cols: colsOptional,
    ref: optionalHeader,
    hasColor: hasColor
  }, colsOptional.map(function (key, indexCol) {
    return /*#__PURE__*/_react["default"].createElement(Column, {
      key: indexCol,
      rows: [0],
      size: 28
    }, /*#__PURE__*/_react["default"].createElement(Row, {
      first: indexCol === 0,
      clicable: true,
      last: indexCol === cols.length,
      key: indexCol,
      id: "headerOptional".concat(indexCol),
      justify: props.data[key].justify,
      onClick: function onClick() {
        props.data[key].ordenable && props.onClickToOrder(key);
      },
      border: true,
      color: _theme["default"].colors.neutral.light['02'],
      title: props.data[key].title
    }, /*#__PURE__*/_react["default"].createElement(Value, {
      ref: function ref(_ref) {
        itemsHeader.current[indexCol] = _ref;
      }
    }, props.data[key].title, props.data[key].ordenable && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      path: props.orderBy !== key ? _theme["default"].icons['arrow-horizontal'] : props.order === 'DESC' ? _theme["default"].icons['arrow-up'] : _theme["default"].icons['arrow-down']
    }))));
  })), /*#__PURE__*/_react["default"].createElement(ContainerHeader, {
    hasColor: hasColor,
    colsWidth: colsWidth,
    paddingScroll: true,
    cols: props.complete ? cols : colsOriginalWithoutColor
  }, (props.complete ? cols : colsOriginal).map(function (key, indexCol) {
    return /*#__PURE__*/_react["default"].createElement(Column, {
      key: indexCol,
      rows: [0],
      size: 28
    }, /*#__PURE__*/_react["default"].createElement(Row, {
      first: indexCol === 0,
      justify: props.data[key].justify,
      last: indexCol === cols.length,
      key: indexCol,
      clicable: true,
      id: "header".concat(indexCol),
      onClick: function onClick() {
        props.data[key].ordenable && props.onClickToOrder(key);
      },
      border: true,
      color: _theme["default"].colors.neutral.light['02'],
      title: props.data[key].title
    }, /*#__PURE__*/_react["default"].createElement(Value, {
      ref: function ref(_ref2) {
        itemsHeader.current[indexCol] = _ref2;
      }
    }, props.data[key].title, props.data[key].ordenable && /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      style: {
        padding: '0 5px'
      },
      appearance: "dark",
      size: "10px",
      path: props.orderBy !== key ? _theme["default"].icons['arrow-horizontal'] : props.order === 'DESC' ? _theme["default"].icons['arrow-up'] : _theme["default"].icons['arrow-down']
    }))));
  }))), props.data[keys[0]] && props.data[keys[0]].values && /*#__PURE__*/_react["default"].createElement(Scroll, null, /*#__PURE__*/_react["default"].createElement(DisplayGrid, null, props.complete && /*#__PURE__*/_react["default"].createElement(Container, {
    id: "containerOptional",
    optional: true,
    colHeadersWidth: colHeadersWidth,
    hasColor: hasColor,
    maxheight: props.height,
    cols: colsOptional,
    ref: optionalContent,
    className: "custom-scrollbar",
    onMouseEnter: function onMouseEnter() {
      setOptionalMouse(false);
    },
    onScroll: function onScroll(e) {
      optionalHeader.current.scrollLeft = optionalContent.current.scrollLeft;

      if (!optionalMouse) {
        content.current.el.scrollTop = optionalContent.current.scrollTop;
      }
    }
  }, colsOptional.map(function (key, indexCol) {
    return /*#__PURE__*/_react["default"].createElement(Column, {
      indexRowOpened: props.indexRowOpened,
      childrenHeight: childrenSize > 30 ? childrenSize : props.children ? props.childrenSize : 60,
      key: indexCol,
      rows: props.data[key].values
    }, props.data[key].values.map(function (value, indexRow) {
      return /*#__PURE__*/_react["default"].createElement(Row, {
        id: "item".concat(indexCol).concat(indexRow),
        key: indexRow,
        justify: props.data[key].justify,
        border: indexRow !== props.data[key].values.length - 1,
        first: indexCol === 0,
        last: indexCol === cols.length,
        ref: function ref(_ref3) {
          return indexRow === 0 && key !== 'colors' ? items.current[indexCol] = _ref3 : null;
        }
      }, /*#__PURE__*/_react["default"].createElement(SpanValue, null, props.data[key].template ? props.data[key].template(value, props.data[key].params && props.data[key].params.map(function (param) {
        return props.data[param] && props.data[param].values[indexRow];
      }), props.dispatch, props.subdata && props.subdata[indexRow]) : value));
    }));
  })), /*#__PURE__*/_react["default"].createElement("div", {
    onMouseEnter: function onMouseEnter() {
      setOptionalMouse(true);
    },
    id: "scrollableDiv",
    ref: scrollableDiv,
    style: {
      width: '100%',
      minWidth: 'fit-content'
    }
  }, /*#__PURE__*/_react["default"].createElement(ContainerInfinite, {
    id: "container",
    cols: props.complete ? cols : colsOriginalWithoutColor,
    ref: content,
    style: {
      transition: 'all .3s ease'
    },
    className: "scroll custom-scrollbar",
    hasColor: hasColor,
    hasChildren: true,
    colHeadersWidth: colHeadersWidth,
    maxheight: props.height,
    height: props.height,
    scrollThreshold: "20px",
    scrollableTarget: "scrollableDiv",
    dataLength: props.data[keys[0]].values.length,
    next: function next() {
      return props.onEndScroll();
    },
    hasMore: props.total !== props.data[keys[0]].values.length,
    onScroll: function onScroll() {
      if (props.complete && optionalMouse) {
        optionalContent.current.scrollTop = content.current.el.scrollTop;
      }
    },
    loader: /*#__PURE__*/_react["default"].createElement("div", {
      style: {
        position: 'relative'
      }
    }, /*#__PURE__*/_react["default"].createElement(LoaderContainer, {
      cols: props.complete ? cols.length : colsOriginal.length - (props.isMultiple ? 1 : 2)
    }, /*#__PURE__*/_react["default"].createElement("p", {
      style: {
        paddingBottom: '10px'
      }
    }, "Carregando"), /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
      className: "rotating",
      path: _icons["default"].loading,
      size: "16px",
      spin: true,
      appearance: _theme["default"].colors.neutral.light['02']
    })))
  }, (props.complete ? cols : colsOriginal).map(function (key, indexCol) {
    return /*#__PURE__*/_react["default"].createElement(Column, {
      childrenHeight: childrenSize > 30 ? childrenSize : props.children ? props.childrenSize : 60,
      key: indexCol,
      rows: props.data[key].values,
      indexRowOpened: props.indexRowOpened
    }, props.data[key].values.map(function (value, indexRow) {
      return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
        key: indexRow
      }, /*#__PURE__*/_react["default"].createElement(Row, {
        id: "item".concat(indexCol).concat(indexRow),
        children: props.indexRowOpened === indexRow,
        justify: props.data[key].justify,
        ref: function ref(_ref4) {
          return indexRow === 0 && key !== 'colors' ? items.current[indexCol] = _ref4 : null;
        },
        clicable: props.isMultiple,
        onClick: function onClick() {
          return props.isMultiple && props.onRowClick(indexRow);
        },
        color: indexCol === 0 && props.data.colors ? props.data.colors.values[indexRow] : null,
        border: indexRow !== props.data[key].values.length - 1,
        first: indexCol === 0,
        last: indexCol === cols.length
      }, key !== 'colors' && /*#__PURE__*/_react["default"].createElement(SpanValue, null, props.data[key].template ? props.data[key].template(value, props.data[key].params && props.data[key].params.map(function (param) {
        return props.data[param] && props.data[param].values[indexRow];
      }), props.dispatch, props.subdata && props.subdata[indexRow]) : value), indexCol === colsOriginalWithoutColor.length && props.isMultiple && /*#__PURE__*/_react["default"].createElement(Collapse, null, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        size: "md",
        name: props.indexRowOpened === indexRow ? 'chevron-up' : 'chevron-down'
      })), indexCol === colsOriginalWithoutColor.length && props.indexRowOpened === indexRow && /*#__PURE__*/_react["default"].createElement(Children, {
        id: "children",
        color: props.data.colors.values[indexRow],
        onClick: function onClick(e) {
          e.stopPropagation();
        },
        ref: refChildren,
        top: "".concat((props.indexRowOpened + 1) * 48, "px")
      }, props.children || /*#__PURE__*/_react["default"].createElement(LoaderContainer, {
        style: {
          display: 'flex'
        }
      }, /*#__PURE__*/_react["default"].createElement(_Icon["default"], {
        spin: true,
        path: _icons["default"].loading,
        size: "20px"
      })))));
    }));
  }), /*#__PURE__*/_react["default"].createElement("div", {
    id: "scrollableDiv"
  }))))));
}

Table.propTypes = {
  children: _propTypes["default"].any,
  childrenSize: _propTypes["default"].any,
  complete: _propTypes["default"].bool,
  data: _propTypes["default"].object,
  dispatch: _propTypes["default"].any,
  height: _propTypes["default"].string,
  indexRowOpened: _propTypes["default"].number,
  isMultiple: _propTypes["default"].any,
  onClickToOrder: _propTypes["default"].func,
  onEndScroll: _propTypes["default"].func,
  onRowClick: _propTypes["default"].func,
  order: _propTypes["default"].string,
  orderBy: _propTypes["default"].string,
  subdata: _propTypes["default"].array,
  total: _propTypes["default"].number
};
var _default = Table;
exports["default"] = _default;