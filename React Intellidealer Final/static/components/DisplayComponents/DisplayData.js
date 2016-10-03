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
        return (
            <span className="cell2">
                {this.state.value}
            </span>
        );
    },
    handleChange: function (e){
        this.setState ({value: e.target.value});
    }

})