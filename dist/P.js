'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var P = (0, _styledComponents2.default)('p')([], function (props) {
  return {
    maxWidth: '' + (props.wide ? '34em' : '28em'),
    lineHeight: '1.5'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color);

P.defaultProps = {};

exports.default = P;