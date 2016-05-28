'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

exports.default = bindActionDispatchers;

var _redux = require('redux');

var _chai = require('chai');

var IS_DEV = process.env.NODE_ENV !== 'production';

/**
 * bindActionDispatchers - curries mapDispatchToProps with bindActionCreators to simplify React action dispatchers.
 * @param  {Object|function(ownProps: Object): Object} actionCreators - object with action creator properties or function taking ownProps and returning object with action creators.
 * @return {function(dispatch: function): actionDispatcher}               a dispatchable action that can be passed directly to mapDispatchToProps argument of connect.
 */
function bindActionDispatchers(actionCreators) {
  if (IS_DEV) {
    (0, _chai.assert)(['object', 'function'].includes(typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)));
    _chai.assert.isNotArray(actionCreators);
    _chai.assert.isNotNumber(actionCreators);
    _chai.assert.isNotBoolean(actionCreators);
  }
  if (typeof actionCreators === 'function') return function (dispatch, ownProps) {
    return (0, _redux.bindActionCreators)(actionCreators(ownProps), dispatch);
  };
  return function (dispatch) {
    return (0, _redux.bindActionCreators)(actionCreators, dispatch);
  };
}