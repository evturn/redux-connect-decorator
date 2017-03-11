'use strict';

exports.__esModule = true;

var _reactRedux = require('react-redux');

var _redux = require('redux');

var connectDecorator = function connectDecorator(matchPropsToState, actions) {
  var provideDispatch = function provideDispatch(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
  };
  var matchDispatchToProps = !actions ? actions : provideDispatch;
  return (0, _reactRedux.connect)(matchPropsToState, matchDispatchToProps);
};

exports.default = connectDecorator;