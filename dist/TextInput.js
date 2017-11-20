'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

var _Div = require('./Div');

var _Div2 = _interopRequireDefault(_Div);

var _Input = require('./Input');

var _Input2 = _interopRequireDefault(_Input);

var _P = require('./P');

var _P2 = _interopRequireDefault(_P);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextInput = function TextInput(props) {
  return _react2.default.createElement(
    _Div2.default,
    props,
    _react2.default.createElement(_Label2.default, { mb: 1, children: props.label }),
    props.text && _react2.default.createElement(
      _P2.default,
      { mt: 0, mb: 2, fontSize: 0, color: 'gray5', wide: true },
      props.text
    ),
    _react2.default.createElement(_Input2.default, {
      type: 'text',
      value: props.value })
  );
};

exports.default = TextInput;