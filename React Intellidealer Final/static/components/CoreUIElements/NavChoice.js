// modules/NavLink.js
import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  getInitialState(){
    return{

      menuItems : [this.props.menuItems]
    };
  },
  render() {

      var links = [];
    this.state.menuItems.forEach(function(pathName, index){
      if (!pathName){
        return;
      }

     links.push(React.createElement(NavLink, pathName[index]));
    });
    if (links.length == 0){
      links = null;
    }
    return (
        <span>
          {links}
        </span>
    );
  }
})
