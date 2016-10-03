import React from 'react'
import NavChoice from './NavChoice'

export default React.createClass({

    getInitialState (){
        return {
            crumbLayers : [this.props.menuItems]
        };
    },

    addCrumbLayer(menuItems){
        this.state.crumbLayers.push(menuItems)
    },


    render(){

        var navlinks =[];
        this.state.crumbLayers.forEach(function(choices){
            navlinks.push(" / ");
            navlinks.push(React.createElement(NavChoice, {"menuItems" : choices}));
        })
        navlinks.shift();
        return (

            <div>
                {navlinks}
            </div>
        );
    }
})