import InstanceListItem from './InstanceListItem'
import Radium from 'radium'
import React from 'react'
import { mediaQueries } from '../../../styles/global'

const InstanceList = ({ process, showInstance }) => (
  <ul style={style}>
    {process.instances.map(instance =>
      <InstanceListItem
        instance={instance}
        key={instance.id}
        showInstance={showInstance}
      />
    )}
  </ul>
)

InstanceList.propTypes = {
  process: React.PropTypes.object.isRequired,
  showInstance: React.PropTypes.func.isRequired
}

export default Radium(InstanceList)

// Styling

const { small, medium, big } = mediaQueries(700, 990)
const style = {
  border: '1px solid #e5e5e5',
  borderRadius: '0 0 3px 3px',
  borderTop: '0',
  height: 'auto',
  overflowY: 'auto',
  padding: 0,
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
