import InstanceViewHeader from './InstanceViewHeader'
import Radium from 'radium'
import React from 'react'
import { mediaQueries, colors } from '../../../styles/global'

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
  borderTop: '0',
  borderRight: `1px solid ${colors.border}`,
  borderBottom: `1px solid ${colors.border}`,
  borderLeft: `1px solid ${colors.border}`,
  padding: '5px 10px',
  [small]: {
    height: 440
  },
  [medium]: {
    height: 240
  },
  [big]: {
    height: 240
  }
}
