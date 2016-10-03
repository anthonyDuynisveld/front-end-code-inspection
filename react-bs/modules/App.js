import React from 'react'
import auth from './auth'

export default React.createClass({
  componentDidMount() {
    auth.connect();

  },

  render() {
    return (
      <div>

        <h1>Global Scope</h1>
        {this.props.children}
      </div>
    )
  }
})

// import NavLink from './NavLink'
// <ul role="nav">
//     <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
// <li><NavLink to="/partgroupbranch">Part Group Branch</NavLink></li>
// <li><NavLink to="/repos">Repos</NavLink></li>
//     </ul>
