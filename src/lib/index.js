import { bindActionCreators } from 'redux'

/** action creators can either be an object of action creators or a function accepting ownProps (using ownProps causes redux to run in a slower mode) */
export default function bindActionDispatchers(actionCreators) {
  const mapDispatchToProps = typeof actionCreators === 'function' ? (dispatch, ownProps) => actionCreators(ownProps) : actionCreators
  return dispatch => bindActionCreators(mapDispatchToProps)
}
