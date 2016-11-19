import Radium from 'radium'
import React from 'react'

const InstanceListItem = (props) => {
  const {
    instance,
    showInstance
  } = props

  return (
    <li style={style} onClick={() => showInstance(instance.name, instance.id)}>
      #{instance.id}
    </li>
  )
}

InstanceListItem.propTypes = {
  instance: React.PropTypes.object.isRequired,
  showInstance: React.PropTypes.func.isRequired
}

export default Radium(InstanceListItem)

const style = {
  borderBottom: '1px solid #e5e5e5',
  cursor: 'pointer',
  fontSize: '0.9em',
  listStyle: 'none',
  padding: '5px 10px',
  textAlign: 'left',
  ':hover': {
    backgroundColor: '#f8f8f8'
  }
}
