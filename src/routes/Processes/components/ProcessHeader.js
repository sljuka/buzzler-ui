import Radium from 'radium'
import React from 'react'

const ProcessHeader = (props) => {
  const {
    addProcessInstance,
    addProcessInstancePending,
    closeProcess,
    process
  } = props

  return (
    <div>
      <div style={style.header}>
        <button
          style={style.buttonCloseProcess}
          onClick={() => closeProcess(process.name)}
        >
          x
        </button>
        <div>{process.name}</div>
        <div style={style.subheader}>
          <button
            style={style.buttonAddInstance}
            onClick={() => addProcessInstance(process.id, 1)}
            disabled={addProcessInstancePending}
          >
            +
          </button>
          <div style={style.openedInstanceCount}><span>{process.instances.length} open</span></div>
        </div>
      </div>
    </div>
  )
}

ProcessHeader.propTypes = {
  addProcessInstance: React.PropTypes.func.isRequired,
  addProcessInstancePending: React.PropTypes.bool,
  closeProcess: React.PropTypes.func.isRequired,
  process: React.PropTypes.object.isRequired
}

export default Radium(ProcessHeader)

// Styling

const style = {
  header: {
    backgroundColor: '#f8f8f8',
    border: '1px solid #e5e5e5',
    borderRadius: '3px 3px 0 0',
    padding: '5px 10px',
    textAlign: 'center'
  },
  openedInstanceCount: {
    color: '#a5a5a5',
    fontSize: '0.9em',
    textAlign: 'right',
    marginTop: 5
  },
  buttonCloseProcess: {
    float: 'right'
  },
  buttonAddInstance: {
    float: 'left'
  },
  subheader: {
    paddingTop: 15,
    height: 40
  }
}
