'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = (0, _styledComponents2.default)('button')([], function (props) {
  return {
    display: 'inline-block',
    fontFamily: 'inherit',
    borderWidth: 0,
    borderRadius: '4px',
    appearance: 'none'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color);

Button.defaultProps = {
  fontSize: 1,
  px: 4,
  py: 2,
  mr: 2,
  color: 'white',
  bg: 'blue'
};

exports.default = Button;