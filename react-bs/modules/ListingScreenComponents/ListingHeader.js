import React from 'react'

export default React.createClass({
    getInitialState: function (){
        return {};
    },

    render: function (){
        return (
            <div className="cell2">
                {this.props.supportData.svrProps.name}
            </div>
        );
    }

});

