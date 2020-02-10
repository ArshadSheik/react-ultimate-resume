"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.styles = void 0;

var _styles_utils = require("../../../../../../../utils/styles/styles_utils");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var center = _styles_utils.flex.center;

var styles = function styles(theme) {
  var palette = theme.palette,
      spacing = theme.miscellaneous.spacing;
  return {
    container: {
      width: 300,
      margin: spacing * 2,
      padding: 0,
      overflow: 'hidden'
    },
    imageContainer: _objectSpread({
      height: 200,
      width: '100%',
      backgroundColor: palette.dark[50],
      position: 'relative'
    }, center),
    image: {
      height: '100%',
      width: '100%',
      objectFit: 'cover',
      position: 'absolute',
      top: 0,
      left: 0
    },
    actions: {
      zIndex: 2,
      position: 'absolute',
      top: 0,
      right: spacing,
      '& > *': {
        margin: [spacing * 2, spacing]
      }
    },
    content: {
      padding: spacing * 2
    },
    textField: {}
  };
};

exports.styles = styles;