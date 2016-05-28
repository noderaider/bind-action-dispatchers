'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = bindActionDispatchers;

var _redux = require('redux');

/**
 * bindActionDispatchers - curries mapDispatchToProps with bindActionCreators to simplify React action dispatchers.
 * @param  {Object|function(ownProps: Object): Object} actionCreators - object with action creator properties or function taking ownProps and returning object with action creators.
 * @return {function(dispatch: function(action: Object))}               a dispatchable action that can be passed directly to mapDispatchToProps argument of connect.
 */
function bindActionDispatchers(actionCreators) {
  var mapDispatchToProps = typeof actionCreators === 'function' ? function (dispatch, ownProps) {
    return actionCreators(ownProps);
  } : actionCreators;
  return function (dispatch) {
    return (0, _redux.bindActionCreators)(mapDispatchToProps);
  };
}