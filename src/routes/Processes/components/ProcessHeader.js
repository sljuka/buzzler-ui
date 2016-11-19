import Radium from 'radium'
import React from 'react'

const ProcessHeader = ({ process, addProcessInstance, addProcessInstancePending }) => (
  <div>
    <div style={style.header}>
      <button
        style={style.button}
        onClick={() => addProcessInstance(process.id, 1)}
        disabled={addProcessInstancePending}
      >
        +
      </button>
      <div>{process.name}</div>
      <div style={style.subheader}><span>{process.instances.length} open</span></div>
    </div>
  </div>
)

ProcessHeader.propTypes = {
  process: React.PropTypes.object.isRequired,
  addProcessInstance: React.PropTypes.func.isRequired,
  addProcessInstancePending: React.PropTypes.bool
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
  },
  button: {
    float: 'right',
    margin: 4
  }
}
