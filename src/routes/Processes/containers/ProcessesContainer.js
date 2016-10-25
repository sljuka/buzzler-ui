import ProcessOverview from '../components/ProcessOverview'
import { connect } from 'react-redux'
import { fetchProcesses } from '../actions'

function mapDispatchToProps (dispatch) {
  return {
    fetchProcesses: () => dispatch(fetchProcesses())
  }
}

const mapStateToProps = (state) => ({
  processes: state.processes.processes
})

export default connect(mapStateToProps, mapDispatchToProps)(ProcessOverview)
