import React from 'react'
import NavLink from '../CoreUIElements/NavLink'

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },

  handleSubmit(event) {
    event.preventDefault()
    const company = event.target.elements[0].value
    const division = event.target.elements[1].value
    const branch = event.target.elements[2].value
    const path = `/${company}/${division}/${branch}`
    this.context.router.push(path)
  },

  render(){
    return (
      <div>
        <h2>Login</h2>
        <ul>
          <li><NavLink to="01/01/01">Guelph</NavLink></li>
          <li><NavLink to="01/01/02">Brant</NavLink></li>
        </ul>
            <form onSubmit={this.handleSubmit}>
              <label>Company: </label><input type="text" placeholder="Company"/> {' '}<br/>
              <label>Division: </label><input type="text" placeholder="Division"/>{' '}<br/>
              <label>Branch: </label><input type="text" placeholder="Branch"/>{' '}<br/>
              <button type="submit">login</button>
            </form>
        {this.props.children}
      </div>
    )
  }
})
