import Radium from 'radium'
import React from 'react'

const Process = ({ process }) => (
  <div style={style.flexItem}>
    <div style={style.processItem}>
      {process.name}
    </div>
  </div>
)

Process.propTypes = {
  process: React.PropTypes.object.isRequired
}

export default Radium(Process)

const style = {
  flexItem: {
    '@media (max-width: 600px)': {
      flex: '0 0 100%',
      height: 500
    },
    '@media (min-width: 601px)': {
      flex: '0 0 33.3333%',
      height: 200
    },
    padding: 10
  },
  processItem: {
    '@media (max-width: 600px)': {
      height: 500 - 20
    },
    '@media (min-width: 601px)': {
      height: 200 - 20
    },
    border: '1px solid'
  }
}
