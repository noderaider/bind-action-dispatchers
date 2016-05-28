'use strict';

var _redux = require('redux');

/** @test {bindActionDispatchers} */
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

  /** @test {bindActionDispatchers} */
  it('is a function', function () {
    return expect(bindActionDispatchers).toEqual(jasmine.any(Function));
  });

  /** @test {bindActionDispatchers} */
  it('returns a function for object arg', function () {
    return expect(bindActionDispatchers({ FOO: 'BAR' })).toEqual(jasmine.any(Function));
  });

  /** @test {bindActionDispatchers} */
  it('returns a function for function arg', function () {
    return expect(bindActionDispatchers(function (ownProps) {
      foo: ownProps;
    })).toEqual(jasmine.any(Function));
  });

  /** @test {bindActionDispatchers} */
  it('throws on array arg', function () {
    return expect(function () {
      return bindActionDispatchers(['FOO', 'BAR']);
    }).toThrow();
  });

  /** @test {bindActionDispatchers} */
  it('throws on number arg', function () {
    return expect(function () {
      return bindActionDispatchers(1337);
    }).toThrow();
  });

  /** @test {bindActionDispatchers} */
  it('throws on boolean arg', function () {
    return expect(function () {
      return bindActionDispatchers(true);
    }).toThrow();
  });

  /** @test {bindActionDispatchers} */
  it('is equivalent to bindActionCreators for object of functions input', function () {
    var actionCreators = { fooActionCreator: fooActionCreator, barActionCreator: barActionCreator };
    var dispatch = function dispatch() {};
    expect(JSON.stringify(bindActionDispatchers(actionCreators)(dispatch))).toEqual(JSON.stringify((0, _redux.bindActionCreators)(actionCreators, dispatch)));
  });

  /** @test {bindActionDispatchers} */
  it('is equivalent to bindActionCreators for ownProps input', function () {
    var actionCreators = function actionCreators(ownProps) {
      return { fooActionCreator: fooActionCreatorWithProps(ownProps),
        barActionCreator: barActionCreatorWithProps
      };
    };
    var props = { FOO: 'BAR' };
    var dispatch = function dispatch() {};
    expect(JSON.stringify(bindActionDispatchers(actionCreators(props))(dispatch))).toEqual(JSON.stringify((0, _redux.bindActionCreators)(actionCreators(props), dispatch)));
  });

  /** @test {bindActionDispatchers} */
  xit('is equal to bindActionCreators for object of functions input', function () {
    var actionCreators = { fooActionCreator: fooActionCreator, barActionCreator: barActionCreator };
    var dispatch = function dispatch() {};
    expect(bindActionDispatchers(actionCreators)(dispatch)).toEqual((0, _redux.bindActionCreators)(actionCreators, dispatch));
  });

  /** @test {bindActionDispatchers} */
  xit('is equal to bindActionCreators for ownProps input', function () {
    var actionCreators = function actionCreators(ownProps) {
      return { fooActionCreator: fooActionCreatorWithProps(ownProps),
        barActionCreator: barActionCreatorWithProps
      };
    };
    var dispatch = function dispatch() {};
    expect(bindActionDispatchers(actionCreators)(dispatch)).toEqual((0, _redux.bindActionCreators)(actionCreators, dispatch));
  });
});