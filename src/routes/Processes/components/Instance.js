import React from 'react'

const Instance = ({ instance }) => (
  <li style={style}>
    {'instance' + instance.name}
  </li>
)

Instance.propTypes = {
  instance: React.PropTypes.object.isRequired
}

export default Instance

const style = {
  listStyle: 'none',
  borderBottom: '1px solid #e5e5e5',
  padding: 5
}
