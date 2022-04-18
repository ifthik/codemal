import React, { Component } from 'react'
import './Label.css'

class Label extends Component {
  render() {
      const proprs = this.props;
      const style= proprs.isActive? {background:'green'}: {background:'orange'}
      const statusText= proprs.isActive? "Active": "Disabled"
    return (
        <span onClick={proprs.onAction} className='list-label-item' style={style}>{statusText}</span>
    )
  }
}

export default Label

/*import React from 'react'

function Label() {
  return (
    <span>Label A</span>
  )
}

export default Label
*/
