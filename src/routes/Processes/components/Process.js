import React from 'react'

const Process = ({ process }) => (
  <div>
    {process.name}
  </div>
)

Process.propTypes = {
  process: React.PropTypes.object.isRequired
}

export default Process
