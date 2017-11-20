'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hr = (0, _styledComponents2.default)('hr')([], function (props) {
  return {
    height: 0
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.borderRadius, _styledSystem.borderWidth);

Hr.defaultProps = {
  bg: 'transparent',
  color: 'black',
  pl: 0,
  pr: 0,
  pb: 0,
  borderRadius: 0,
  borderWidth: 1,
  borderTop: true
};

exports.default = Hr;