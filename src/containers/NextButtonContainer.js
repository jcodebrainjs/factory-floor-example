import { connect } from 'react-redux'
import { NextButtonComponent } from 'components'
import { actions, constants, selectors } from 'modules/factory'

const mapStateToProps = state => ({
  steps: selectors.getFactorySteps(state),
  isComplete: selectors.getFactoryIsComplete(state),

})

const mapDispatchToProps = dispatch => ({
  nextStep: () => dispatch(actions.step()),
  init: () => dispatch(actions.init(constants.ORDERS)),
})

const NextButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NextButtonComponent)

export default NextButtonContainer