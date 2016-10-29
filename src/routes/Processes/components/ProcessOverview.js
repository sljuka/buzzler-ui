import Process from './process'
import React from 'react'

export const ProcessOverview = (props) => {
  const { processes, fetchProcesses } = props

  return (
    <div>
      <button onClick={fetchProcesses}>fetch</button>
      <div style={style}>
        {processes.map(process => <Process key={process.name} process={process} />)}
      </div>
    </div>
  )
}

ProcessOverview.propTypes = {
  fetchProcesses         : React.PropTypes.func.isRequired,
  processes              : React.PropTypes.array.isRequired,
  processIdOfNewInstance : React.PropTypes.number
}

export default ProcessOverview

const style = {
  display: 'flex',
  flexDirection: 'row',
  flexFlow: 'row wrap',
  justifyContent: 'flex-start'
}
