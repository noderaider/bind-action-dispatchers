'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bindActionDispatchers;

var _redux = require('redux');

/** action creators can either be an object of action creators or a function accepting ownProps (using ownProps causes redux to run in a slower mode) */
function bindActionDispatchers(actionCreators) {
  var mapDispatchToProps = typeof actionCreators === 'function' ? function (dispatch, ownProps) {
    return actionCreators(ownProps);
  } : actionCreators;
  return function (dispatch) {
    return (0, _redux.bindActionCreators)(mapDispatchToProps);
  };
}