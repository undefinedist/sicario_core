'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonOutline = (0, _styledComponents2.default)('button')([], function (props) {
  return {
    display: 'inline-block',
    fontFamily: 'inherit',
    borderRadius: '4px',
    appearance: 'none',
    boxSizing: 'border-box'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.borderWidth, _styledSystem.borderColor);

ButtonOutline.defaultProps = {
  fontSize: 1,
  px: 4,
  py: 2,
  color: 'blue',
  bg: 'transparent',
  borderWidth: 2,
  borderColor: 'currentColor'
};

exports.default = ButtonOutline;