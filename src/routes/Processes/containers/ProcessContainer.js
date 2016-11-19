import Process from '../components/Process'
import { connect } from 'react-redux'
import { showInstance, closeInstance, addProcessInstance } from '../actions'

function mapDispatchToProps (dispatch) {
  return {
    showInstance: (processName, id) => dispatch(showInstance(processName, id)),
    closeInstance: (processName, id) => dispatch(closeInstance(processName, id)),
    addProcessInstance: (processId, userId) => dispatch(addProcessInstance(processId, userId))
  }
}

const mapStateToProps = ({ processes }, ownProps) => {
  const { process: { name } } = ownProps

  return {
    showedInstance: processes.showedInstances[name],
    addProcessInstancePending: processes.addProcessInstancePending
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Process)
