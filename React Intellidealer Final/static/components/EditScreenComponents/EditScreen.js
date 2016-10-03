import React from 'react'

export default React.createClass ({
    getInitialState: function (){
        return {};
    },

    render: function() {
        var objects = ObjectParser (SingleInput, this.props.data, data.supportData.svrProps.inputOrder);
        return (
            <div>
                {objects}
            </div>
        );
    }
});


