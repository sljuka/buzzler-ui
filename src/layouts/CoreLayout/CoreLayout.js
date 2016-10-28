import React from 'react'
import Header from '../../components/Header'
import { StyleRoot } from 'radium'
import './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <StyleRoot>
    <div className='container text-center'>
      <Header />
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
