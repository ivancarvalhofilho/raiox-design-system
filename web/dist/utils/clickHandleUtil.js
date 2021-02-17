"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = require("react");

var handleOutsideDivClick = function handleOutsideDivClick(callbackAction) {
  var wrapperRef = (0, _react.useRef)(null);
  useOutsideAlerter(wrapperRef);

  function useOutsideAlerter(ref) {
    (0, _react.useEffect)(function () {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          callbackAction();
        }
      }

      document.addEventListener('mousedown', handleClickOutside);
      return function () {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  }

  return wrapperRef;
};

var _default = handleOutsideDivClick;
exports["default"] = _default;