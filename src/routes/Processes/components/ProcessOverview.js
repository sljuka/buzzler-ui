import ProcessContainer from '../containers/ProcessContainer'
import React from 'react'
import SearchContainer from '../containers/SearchContainer'

export const ProcessOverview = (props) => {
  const {
    processes
  } = props

  return (
    <div>
      <SearchContainer />
      <div style={style.flexGrid}>
        {processes.map(process =>
          <ProcessContainer
            key={process.name}
            process={process}
          />
        )}
      </div>
    </div>
  )
}

ProcessOverview.propTypes = {
  processes: React.PropTypes.array.isRequired
}

export default ProcessOverview

const style = {
  flexGrid: {
    display: 'flex',
    flexDirection: 'row',
    flexFlow: 'row wrap',
    justifyContent: 'flex-start'
  }
}
