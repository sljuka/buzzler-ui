import Radium from 'radium'
import React from 'react'

const InstanceViewHeader = ({ instance, closeInstance }) => (
  <div style={{ textAlign: 'right' }}>
    <button onClick={() => closeInstance(instance.name, instance.id)}>X</button>
  </div>
)

InstanceViewHeader.propTypes = {
  closeInstance: React.PropTypes.func.isRequired,
  instance: React.PropTypes.object.isRequired
}

export default Radium(InstanceViewHeader)
