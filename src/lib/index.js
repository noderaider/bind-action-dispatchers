import { bindActionCreators } from 'redux'
import { assert } from 'chai'

const IS_DEV = process.env.NODE_ENV !== 'production'

/**
 * bindActionDispatchers - curries mapDispatchToProps with bindActionCreators to simplify React action dispatchers.
 * @param  {Object|function(ownProps: Object): Object} actionCreators - object with action creator properties or function taking ownProps and returning object with action creators.
 * @return {function(dispatch: function): actionDispatcher}               a dispatchable action that can be passed directly to mapDispatchToProps argument of connect.
 */
export default function bindActionDispatchers(actionCreators) {
  if(IS_DEV) {
    assert(['object', 'function'].includes(typeof actionCreators))
    assert.isNotArray(actionCreators)
    assert.isNotNumber(actionCreators)
    assert.isNotBoolean(actionCreators)
  }
  if(typeof actionCreators === 'function')
    return (dispatch, ownProps) => bindActionCreators(actionCreators(ownProps), dispatch)
  return dispatch => bindActionCreators(actionCreators, dispatch)
}
