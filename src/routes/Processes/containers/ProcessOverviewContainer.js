import ProcessOverview from '../components/ProcessOverview'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  processes: presentProcessesInOrder(state)
})

export default connect(mapStateToProps, null)(ProcessOverview)

function presentProcessesInOrder (state) {
  const { order, processes } = state.processes

  return order.map((name) => processes[name]).filter(item => item)
}
