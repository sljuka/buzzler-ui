import React from 'react'
import { StyleRoot } from 'radium'
// import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <StyleRoot>
    <div className='container'>
      <div className='core-layout__viewport'>
        {children}
      </div>
    </div>
  </StyleRoot>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
