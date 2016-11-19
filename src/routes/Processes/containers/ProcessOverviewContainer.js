import ProcessOverview from '../components/ProcessOverview'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  processes: processesOrderedByName(state)
})

export default connect(mapStateToProps, null)(ProcessOverview)

// data presenter

function processesOrderedByName (state) {
  const { order, processes } = state.processes

  return order.map(name => processes[name]).filter(item => item)
}
