'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

var _Box = require('./Box');

var _Box2 = _interopRequireDefault(_Box);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Flex = (0, _styledComponents2.default)(_Box2.default)([], function (props) {
  return {
    display: 'flex',
    flexWrap: '' + (props.wrap ? "wrap" : null),
    alignItems: '' + props.align,
    justifyContent: '' + props.justify
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color);

Flex.defaultProps = {};

exports.default = Flex;