import React from 'react'

export default React.createClass({
    getInitialState: function (){
        return {}
    },

    render: function (){
        var objects = ObjectParser (DisplayData, this.props.data, this.props.data.supportData.svrProps.listingScreenOrder);
        return (
            <div className="cellfull">
                {objects}
            </div>
        );
    }
})
