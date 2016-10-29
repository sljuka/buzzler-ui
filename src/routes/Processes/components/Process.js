import Instance from './instance'
import Radium from 'radium'
import React from 'react'
import { mediaQueries } from '../../../styles/global'

const Process = ({ process }) => (
  <div style={style.flexItem}>
    <div>
      <div style={style.header}>
        <div>{process.name}</div>
        <div style={style.subheader}><span>{process.instances.length} open</span></div>
      </div>
      <ul style={style.content}>
        {process.instances.map(instance =>
          <Instance instance={instance} key={instance.id} />
        )}
      </ul>
    </div>
  </div>
)

Process.propTypes = {
  process: React.PropTypes.object.isRequired
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
  },
  header: {
    backgroundColor: '#f8f8f8',
    border: '1px solid #e5e5e5',
    borderRadius: '3px 3px 0 0',
    padding: '5px 10px'
  },
  subheader: {
    color: '#a5a5a5',
    fontSize: '0.9em',
    textAlign: 'left'
  },
  content: {
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
}
