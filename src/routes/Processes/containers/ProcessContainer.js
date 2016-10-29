import Process from '../components/Process'
import { connect } from 'react-redux'
import { showInstance, closeInstance } from '../actions'

function mapDispatchToProps (dispatch) {
  return {
    showInstance: (processName, id) => dispatch(showInstance(processName, id)),
    closeInstance: (processName, id) => dispatch(closeInstance(processName, id))
  }
}

const mapStateToProps = ({ processes }, ownProps) => {
  const { process: { name } } = ownProps

  return {
    showedInstance: processes.showedInstances[name]
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Process)
