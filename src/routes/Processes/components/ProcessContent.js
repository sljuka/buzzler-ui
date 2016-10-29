import Radium from 'radium'
import React from 'react'
import InstanceView from './InstanceView'
import InstanceList from './InstanceList'

const ProcessContent = (props) => {
  const {
    process,
    showedInstance: instance,
    showInstance,
    closeInstance
  } = props

  if (instance)
    return (
      <InstanceView instance={instance} closeInstance={closeInstance} />
    )
  else
    return (
      <InstanceList process={process} showInstance={showInstance} />
    )
}

ProcessContent.propTypes = {
  process: React.PropTypes.object.isRequired,
  showInstance: React.PropTypes.func.isRequired,
  closeInstance: React.PropTypes.func.isRequired,
  showedInstance: React.PropTypes.object
}

export default Radium(ProcessContent)
