import React from 'react'
import BreadCrumbs from 'react-breadcrumbs'

export default React.createClass({
  componentDidMount() {

  },

  render(){
    console.log('global scope');
    return (
      <div>
        <h2>Intellidealer</h2>
        <BreadCrumbs routes={this.props.routes} params={this.props.params}/>
        {this.props.children}
      </div>
    )
  }
});

// import NavLink from './NavLink'
// <ul role="nav">
//     <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
// <li><NavLink to="/partgroupbranch">Part Group Branch</NavLink></li>
// <li><NavLink to="/repos">Repos</NavLink></li>
//     </ul>
