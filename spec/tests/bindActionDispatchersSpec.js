'use strict';

var _redux = require('redux');

describe('bindActionDispatchers', function () {
  var bindActionDispatchers = require('../../lib').default;
  var fooActionCreator = function fooActionCreator() {
    return { type: 'FOO', payload: 'foo' };
  };
  var barActionCreator = function barActionCreator() {
    return { type: 'BAR', payload: 'bar' };
  };
  var fooActionCreatorWithProps = function fooActionCreatorWithProps(ownProps) {
    return { type: 'FOO', payload: ownProps };
  };
  var barActionCreatorWithProps = function barActionCreatorWithProps(ownProps) {
    return { type: 'BAR', payload: ownProps };
  };

  it('is a function', function () {
    return expect(bindActionDispatchers).toEqual(jasmine.any(Function));
  });
  it('is equivalent to bindActionCreators for object of functions input', function () {
    var actionCreators = { fooActionCreator: fooActionCreator, barActionCreator: barActionCreator };
    var dispatch = function dispatch() {};
    expect(JSON.stringify(bindActionDispatchers(actionCreators)(dispatch))).toEqual(JSON.stringify((0, _redux.bindActionCreators)(actionCreators, dispatch)));
  });
  it('is equivalent to bindActionCreators for ownProps input', function () {
    var actionCreators = function actionCreators(ownProps) {
      return { fooActionCreator: fooActionCreatorWithProps(ownProps),
        barActionCreator: barActionCreatorWithProps
      };
    };
    var dispatch = function dispatch() {};
    expect(JSON.stringify(bindActionDispatchers(actionCreators)(dispatch))).toEqual(JSON.stringify((0, _redux.bindActionCreators)(actionCreators, dispatch)));
  });
});