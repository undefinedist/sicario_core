'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _styledSystem = require('styled-system');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Avatar = (0, _styledComponents2.default)('img')([], function (props) {
  return {
    height: '' + (props.size ? props.size : '48px'),
    width: '' + (props.size ? props.size : '48px')
  };
}, _styledSystem.space, _styledSystem.fontSize, _styledSystem.width, _styledSystem.color, _styledSystem.borderWidth, _styledSystem.borderRadius, _styledSystem.borderColor);

Avatar.defaultProps = {
  src: 'https://pbs.twimg.com/profile_images/854537128994275328/nVZX1MEh_400x400.jpg',
  size: '64px',
  borderWidth: 2,
  borderRadius: 9999,
  px: 1,
  py: 1,
  borderColor: 'gray1',
  bg: 'transparent',
  color: 'transparent'
};

exports.default = Avatar;