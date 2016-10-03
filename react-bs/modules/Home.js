import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
    <h2>Intellidealer</h2>
    <ul>
    <li><NavLink to="configurations/">Configurations</NavLink></li>
      </ul>
        {this.props.children}
    </div>
    )
  }
})
