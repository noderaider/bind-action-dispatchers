import { bindActionCreators } from 'redux'

/**
 * bindActionDispatchers - curries mapDispatchToProps with bindActionCreators to simplify React action dispatchers.
 * @param  {Object|function(ownProps: Object): Object} actionCreators - object with action creator properties or function taking ownProps and returning object with action creators.
 * @return {function(dispatch: function): actionDispatcher}               a dispatchable action that can be passed directly to mapDispatchToProps argument of connect.
 */
export default function bindActionDispatchers(actionCreators) {
  const mapDispatchToProps = typeof actionCreators === 'function' ? (dispatch, ownProps) => actionCreators(ownProps)
                                                                  : actionCreators
  return dispatch => bindActionCreators(mapDispatchToProps)
}
