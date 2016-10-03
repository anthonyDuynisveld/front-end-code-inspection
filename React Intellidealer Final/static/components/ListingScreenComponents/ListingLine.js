import React from 'react'
import parser from '../Helpers/parsers.js';
import DisplayData from "../DisplayComponents/DisplayData";


export default React.createClass({
    getInitialState: function (){
        return {}
    },

    render: function (){
        var objects = parser.Parser.ObjectParser (DisplayData, this.props.data, this.props.data.supportData.svrProps.listingScreenOrder);
        return (
            <li className="cellfull">
                {objects}
            </li>
        );
    }
})
