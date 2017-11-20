'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var A = (0, _styledComponents2.default)('a')([], function (props) {
  return {
    textAlign: '' + (props.center ? 'center' : 'left'),
    textDecoration: '' + (props.underline ? 'underline' : 'none'),
    opacity: 1,
    transition: 'opacity .3s ease-in',
    display: 'inline-block'
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.hover);

A.defaultProps = {
  color: 'inherit',
  hover: {
    opacity: 0.66,
    transition: 'opacity .25s ease-in'
  }
};

exports.default = A;