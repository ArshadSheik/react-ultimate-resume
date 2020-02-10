"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AddButtonDashed = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactJss = require("react-jss");

var _ui = require("@wld/ui");

var _add_button_dashed_styles = require("./add_button_dashed_styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var useStyles = (0, _reactJss.createUseStyles)(_add_button_dashed_styles.styles);

var AddButtonDashedComponent = function AddButtonDashedComponent(_ref) {
  var onClick = _ref.onClick,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? 'Add' : _ref$title,
      _ref$classes = _ref.classes,
      receivedClasses = _ref$classes === void 0 ? {} : _ref$classes;
  var classes = useStyles();
  return _react.default.createElement(_ui.Tooltip, {
    title: title
  }, _react.default.createElement("button", {
    type: "button",
    className: (0, _classnames.default)(classes.container, receivedClasses.container),
    onClick: onClick
  }, _react.default.createElement(_ui.Typography, {
    customClasses: {
      container: receivedClasses.typography
    },
    variant: "h2"
  }, '+')));
};

var AddButtonDashed = AddButtonDashedComponent;
exports.AddButtonDashed = AddButtonDashed;