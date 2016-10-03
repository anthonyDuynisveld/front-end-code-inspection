import { Link } from 'react-router'
import React from 'react'

export default React.createClass({

    render(){
        var path = location.pathname  ;
        if (!location.pathname.match("/" + this.props.to)){
                path += (location.pathname[location.pathname.length - 1] == "/" )?"":"/";
                path += this.props.to;
        }

        return <Link to={path}>{this.props.children}</Link>
    }
})
