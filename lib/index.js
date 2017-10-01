'use strict';

exports.__esModule = true;

var _reactRedux = require('react-redux');

var _redux = require('redux');

var connectDecorator = function connectDecorator(matchPropsToState, actions) {
  for (var _len = arguments.length, args = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
    args[_key - 2] = arguments[_key];
  }

  var provideDispatch = function provideDispatch(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
  };
  var matchDispatchToProps = !actions ? actions : provideDispatch;
  return _reactRedux.connect.apply(undefined, [matchPropsToState, matchDispatchToProps].concat(args));
};

exports.default = connectDecorator;