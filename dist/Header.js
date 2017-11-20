'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Fixed = require('./Fixed');

var _Fixed2 = _interopRequireDefault(_Fixed);

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

var _Flex = require('./Flex');

var _Flex2 = _interopRequireDefault(_Flex);

var _ButtonCircle = require('./ButtonCircle');

var _ButtonCircle2 = _interopRequireDefault(_ButtonCircle);

var _Logo = require('./Logo');

var _Logo2 = _interopRequireDefault(_Logo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  return _react2.default.createElement(
    _Flex2.default,
    {
      justify: 'space-between',
      align: 'center',
      bg: props.bg,
      top: true,
      left: true,
      right: true
    },
    _react2.default.createElement(
      _Box2.default,
      props.logoWrapper,
      _react2.default.createElement(_Logo2.default, { px: props.logoPx, src: props.src })
    ),
    _react2.default.createElement(
      _Box2.default,
      props.btnWrapper,
      _react2.default.createElement(
        _ButtonCircle2.default,
        props.btn,
        'btn'
      )
    )
  );
};

exports.default = Header;