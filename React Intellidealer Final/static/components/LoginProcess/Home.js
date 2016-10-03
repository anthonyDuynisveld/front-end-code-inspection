import React from 'react'

export default React.createClass({
  render() {
    console.log("home");
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
})
