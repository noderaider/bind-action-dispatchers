import { bindActionCreators } from 'redux'
describe('bindActionDispatchers', () => {
  const bindActionDispatchers = require('../../lib').default
  const fooActionCreator = () => ({ type: 'FOO', payload: 'foo' })
  const barActionCreator = () => ({ type: 'BAR', payload: 'bar' })
  const fooActionCreatorWithProps = ownProps => ({ type: 'FOO', payload: ownProps })
  const barActionCreatorWithProps = ownProps => ({ type: 'BAR', payload: ownProps })

  it('is a function', () => expect(bindActionDispatchers).toEqual(jasmine.any(Function)))
  it('is equivalent to bindActionCreators for object of functions input', () => {
    const actionCreators = { fooActionCreator, barActionCreator }
    const dispatch = () => {}
    expect(JSON.stringify(bindActionDispatchers(actionCreators)(dispatch)))
      .toEqual(JSON.stringify(bindActionCreators(actionCreators, dispatch)))
  })
  it('is equivalent to bindActionCreators for ownProps input', () => {
    const actionCreators = ownProps =>  ({ fooActionCreator: fooActionCreatorWithProps(ownProps)
                                        , barActionCreator: barActionCreatorWithProps
                                        })
    const dispatch = () => {}
    expect(JSON.stringify(bindActionDispatchers(actionCreators)(dispatch)))
      .toEqual(JSON.stringify(bindActionCreators(actionCreators, dispatch)))
  })
})
