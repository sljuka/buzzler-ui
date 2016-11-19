import Process from '../components/Process'
import { connect } from 'react-redux'
import {
  showInstance,
  closeInstance,
  addProcessInstance,
  closeProcess
} from '../actions'

function mapDispatchToProps (dispatch) {
  return {
    addProcessInstance: (processId, userId) => dispatch(addProcessInstance(processId, userId)),
    closeInstance: (processName, id) => dispatch(closeInstance(processName, id)),
    closeProcess: (processName) => dispatch(closeProcess(processName)),
    showInstance: (processName, id) => dispatch(showInstance(processName, id))
  }
}

const mapStateToProps = ({ processes }, ownProps) => {
  const { process: { name } } = ownProps

  return {
    addProcessInstancePending: processes.addProcessInstancePending,
    showedInstance: processes.showedInstances[name]
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Process)
