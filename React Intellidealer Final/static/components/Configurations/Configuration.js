import React from 'react'
import NavLink from '../CoreUIElements/NavChoice'

export default React.createClass({
  render() {
      console.log("configurations");

    return (
        <div>
          {this.props.children}
        </div>
    )
  }
})
