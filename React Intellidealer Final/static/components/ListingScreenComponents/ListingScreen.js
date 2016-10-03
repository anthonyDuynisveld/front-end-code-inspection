import React from 'react';
import parser from '../Helpers/parsers.js';
import SearchFields from '../SearchFieldComponents/SearchFields.js'
import EditScreen from '../EditScreenComponents/EditScreen.js'
import ListingHeader from '../ListingScreenComponents/ListingHeader.js'
import ListingLine from '../ListingScreenComponents/ListingLine.js'

export default React.createClass({
    getInitialState (){
        return {
        };
    },

    render() {

        var header = parser.Parser.ObjectParser (ListingHeader, {"fileData":this.props.list[0], "supportData":this.props.supportData}, this.props.supportData.svrProps.listingScreenOrder);
        var list = parser.Parser.DataListParser (this.props.supportData, this.props.list, ListingLine, this.props.supportData.svrProps.listingScreenOrder)


        return (
            <div>
            Search Crieteria
        <div className="searchFields">
            <SearchFields name={this.props.name} data={{"fileData":this.props.list[0], "supportData":this.props.supportData}}/>
        </div>
        <ul className="cellfull">
            <li className="cellfull">
            {header}
            </li>
            {list}

            </ul>
            </div>
        );
    },

    clickLine (){
        // ReactDOM.render(
        // <EditScreen name="footer" api="http://localhost:28080/React/data/footerApi.js" url="http://localhost:28080/React/data/footer.js"/>,
        //     document.getElementById ('container')
        // );
    }
})
