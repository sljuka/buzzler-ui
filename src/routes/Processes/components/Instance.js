import Radium from 'radium'
import React from 'react'

const Instance = ({ instance }) => (
  <li style={style}>
    #{instance.id}
  </li>
)

Instance.propTypes = {
  instance: React.PropTypes.object.isRequired
}

export default Radium(Instance)

const style = {
  borderBottom: '1px solid #e5e5e5',
  fontSize: '0.9em',
  listStyle: 'none',
  padding: '5px 10px',
  textAlign: 'left',
  ':hover': {
    backgroundColor: '#f8f8f8'
  }
}
