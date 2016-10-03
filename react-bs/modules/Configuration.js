import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
        <div>
          <h1>Configurations</h1>
          <ul role="nav">
            <li><NavLink to="workinprogress/">Work In Progress</NavLink></li>
          </ul>
        {this.props.children}
    </div>
    )
  }
})
