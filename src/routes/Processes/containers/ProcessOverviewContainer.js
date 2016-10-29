import ProcessOverview from '../components/ProcessOverview'
import { connect } from 'react-redux'
import { fetchProcesses } from '../actions'

function mapDispatchToProps (dispatch) {
  return {
    fetchProcesses: () => dispatch(fetchProcesses())
  }
}

const mapStateToProps = (state) => ({
  processes: presentProcessesInOrder(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProcessOverview)

function presentProcessesInOrder (state) {
  const { order, processes } = state.processes

  return order.map((name) => processes[name])
}
