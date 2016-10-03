import React from 'react'

export default React.createClass ({
    getInitialState: function (){
        return {
            name : this.props.name,
            value : this.props.value,
            fullData : this.props.data
        };
    },

    render: function (){
        var classesSet = ((this.props.supportData.svrProps.css && new Set (this.props.supportData.svrProps.css.classes)) || new Set());
        classesSet.add ("cell4")
        var classes = []
        classesSet.forEach(function (value){
            classes.push(value)
        })
        return (
            <span className={classes.join(' ')}>
                <div>{this.props.supportData.svrProps.name}:&nbsp;</div>
                <div>
                    <input defaultValue={"Enter the "+this.props.supportData.svrProps.name} value={this.state.value} onChange={this.handleChange} id={this.props.name}  />
                </div>
            </span>
        );
    },
    handleChange: function (e){
        this.setState ({value: e.target.value});
    }

})
