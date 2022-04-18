import React, {Component } from 'react'

class Tools extends Component {
  render() {
     const {children,onAction}= this.props;
    return (
        <>
        <div className='list-header'>
        <select name="status" onChange={onAction}>
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="disabled">Disabled</option>
        </select>
        </div>
        {children}
        <div className='list-footer'>
            Some list footer content goes here
        </div>
     </>
    )
  }
}

export default Tools
