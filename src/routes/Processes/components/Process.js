import ProcessContent from './ProcessContent'
import ProcessHeader from './ProcessHeader'
import Radium from 'radium'
import React from 'react'
import { mediaQueries } from '../../../styles/global'

const Process = (props) => {
  const {
    addProcessInstance,
    addProcessInstancePending,
    closeInstance,
    process,
    showedInstance,
    showInstance
  } = props

  return (
    <div style={style.flexItem}>
      <ProcessHeader
        addProcessInstance={addProcessInstance}
        addProcessInstancePending={addProcessInstancePending}
        process={process}
      />
      <ProcessContent
        closeInstance={closeInstance}
        process={process}
        showedInstance={showedInstance}
        showInstance={showInstance}
      />
    </div>
  )
}

Process.propTypes = {
  addProcessInstance: React.PropTypes.func.isRequired,
  addProcessInstancePending: React.PropTypes.bool,
  closeInstance: React.PropTypes.func,
  process: React.PropTypes.object.isRequired,
  showedInstance: React.PropTypes.object,
  showInstance: React.PropTypes.func.isRequired
}

export default Radium(Process)

// Styling

const { small, medium, big } = mediaQueries(700, 990)
const style = {
  flexItem: {
    [small]: {
      flex: '0 0 100%',
      height: 500
    },
    [medium]: {
      flex: '0 0 50%',
      height: 300
    },
    [big]: {
      flex: '0 0 33.3333%',
      height: 300
    },
    padding: 10
  }
}
