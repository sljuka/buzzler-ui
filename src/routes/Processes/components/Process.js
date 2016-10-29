import ProcessContent from './ProcessContent'
import ProcessHeader from './ProcessHeader'
import Radium from 'radium'
import React from 'react'
import { mediaQueries } from '../../../styles/global'

const Process = (props) =>
  <div style={style.flexItem}>
    <ProcessHeader process={props.process} />
    <ProcessContent {...props} />
  </div>

Process.propTypes = {
  process: React.PropTypes.object.isRequired,
  showInstance: React.PropTypes.func.isRequired,
  showedInstance: React.PropTypes.object
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
  }
}
