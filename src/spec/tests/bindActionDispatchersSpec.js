import { bindActionCreators } from 'redux'

/** @test {bindActionDispatchers} */
describe('bindActionDispatchers', () => {
  const bindActionDispatchers = require('../../lib').default
  const fooActionCreator = () => ({ type: 'FOO', payload: 'foo' })
  const barActionCreator = () => ({ type: 'BAR', payload: 'bar' })
  const fooActionCreatorWithProps = ownProps => ({ type: 'FOO', payload: ownProps })
  const barActionCreatorWithProps = ownProps => ({ type: 'BAR', payload: ownProps })

  /** @test {bindActionDispatchers} */
  it('is a function', () => expect(bindActionDispatchers).toEqual(jasmine.any(Function)))

  /** @test {bindActionDispatchers} */
  it('returns a function for object arg', () => expect(bindActionDispatchers({ FOO: 'BAR' })).toEqual(jasmine.any(Function)))

  /** @test {bindActionDispatchers} */
  it('returns a function for function arg', () => expect(bindActionDispatchers(ownProps => { foo: ownProps })).toEqual(jasmine.any(Function)))

  /** @test {bindActionDispatchers} */
  it('throws on array arg', () => expect(() => bindActionDispatchers([ 'FOO', 'BAR' ])).toThrow())

  /** @test {bindActionDispatchers} */
  it('throws on number arg', () => expect(() => bindActionDispatchers(1337)).toThrow())

  /** @test {bindActionDispatchers} */
  it('throws on boolean arg', () => expect(() => bindActionDispatchers(true)).toThrow())

  /** @test {bindActionDispatchers} */
  it('is equivalent to bindActionCreators for object of functions input', () => {
    const actionCreators = { fooActionCreator, barActionCreator }
    const dispatch = () => {}
    expect(JSON.stringify(bindActionDispatchers(actionCreators)(dispatch)))
      .toEqual(JSON.stringify(bindActionCreators(actionCreators, dispatch)))
  })


  /** @test {bindActionDispatchers} */
  it('is equivalent to bindActionCreators for ownProps input', () => {
    const actionCreators = ownProps =>  ({ fooActionCreator: fooActionCreatorWithProps(ownProps)
                                        , barActionCreator: barActionCreatorWithProps
                                        })
    const props = { FOO: 'BAR' }
    const dispatch = () => {}
    expect(JSON.stringify(bindActionDispatchers(actionCreators(props))(dispatch)))
      .toEqual(JSON.stringify(bindActionCreators(actionCreators(props), dispatch)))
  })

  /** @test {bindActionDispatchers} */
  xit('is equal to bindActionCreators for object of functions input', () => {
    const actionCreators = { fooActionCreator, barActionCreator }
    const dispatch = () => {}
    expect(bindActionDispatchers(actionCreators)(dispatch))
      .toEqual(bindActionCreators(actionCreators, dispatch))
  })


  /** @test {bindActionDispatchers} */
  xit('is equal to bindActionCreators for ownProps input', () => {
    const actionCreators = ownProps =>  ({ fooActionCreator: fooActionCreatorWithProps(ownProps)
                                        , barActionCreator: barActionCreatorWithProps
                                        })
    const dispatch = () => {}
    expect(bindActionDispatchers(actionCreators)(dispatch))
      .toEqual(bindActionCreators(actionCreators, dispatch))
  })
})
