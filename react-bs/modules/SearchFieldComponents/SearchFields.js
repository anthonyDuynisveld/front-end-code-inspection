import React from 'react'
import parser from '../Helpers/parsers.js'

export default React.createClass ({
    getInitialState: function (){
        return {};
    },

    render: function() {

        this.props.data.supportData.svrProps.css = (this.props.data.supportData.svrProps.css || {});
        this.props.data.supportData.svrProps.css.classes = (this.props.data.supportData.svrProps.css.classes || new Set())
        this.props.data.supportData.svrProps.css.classes.add ("hide");
        var objects = parser.ObjectParser (SingleInput, this.props.data, this.props.data.supportData.svrProps.searchOrder);

        return (
            <div>
                {objects}
            </div>
        );
    }
});
