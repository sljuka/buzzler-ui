import Radium from 'radium'
import React from 'react'

const ProcessHeader = ({ process }) => (
  <div>
    <div style={style.header}>
      <div>{process.name}</div>
      <div style={style.subheader}><span>{process.instances.length} open</span></div>
    </div>
  </div>
)

ProcessHeader.propTypes = {
  process: React.PropTypes.object.isRequired,
  showInstance: React.PropTypes.func.isRequired
}

export default Radium(ProcessHeader)

// Styling

const style = {
  header: {
    backgroundColor: '#f8f8f8',
    border: '1px solid #e5e5e5',
    borderRadius: '3px 3px 0 0',
    padding: '5px 10px'
  },
  subheader: {
    color: '#a5a5a5',
    fontSize: '0.9em',
    textAlign: 'left'
  }
}
