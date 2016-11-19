import InstanceViewHeader from './InstanceViewHeader'
import Radium from 'radium'
import React from 'react'
import { mediaQueries } from '../../../styles/global'

const InstanceView = (props) => {
  const {
    closeInstance,
    instance
  } = props

  return (
    <div style={style}>
      <InstanceViewHeader instance={instance} closeInstance={closeInstance} />
      <h1>{instance.name}</h1>
    </div>
  )
}

InstanceView.propTypes = {
  instance: React.PropTypes.object.isRequired,
  closeInstance: React.PropTypes.func.isRequired
}

export default Radium(InstanceView)

const { small, medium, big } = mediaQueries(700, 990)
const style = {
  border: '1px solid #e5e5e5',
  borderTop: '0',
  padding: '5px 10px',
  [small]: {
    height: 500 - 20 - 40
  },
  [medium]: {
    height: 300 - 20 - 40
  },
  [big]: {
    height: 300 - 20 - 40
  }
}
