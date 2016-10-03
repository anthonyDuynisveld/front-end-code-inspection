import React from 'react';
import parser from '../Helpers/parsers.js';
import ListingLine from '../ListingScreenComponents/ListingLine.js'
import ListingHeader from '../ListingScreenComponents/ListingHeader.js'
import SearchFields from '../SearchFieldComponents/SearchFields.js'
import EditScreen from '../EditScreenComponents/EditScreen.js'

export default React.createClass({
    getInitialState (){
        return {
        };
    },

    render() {

        var header = parser.ObjectParser (ListingHeader, {"fileData":this.props.list[0], "supportData":this.props.supportData}, this.props.supportData.svrProps.listingScreenOrder);
        var list = parser.ListParser (this.props.supportData, this.props.list, ListingLine)

        return (
            <div>
            Search Crieteria
        <div className="searchFields">
            <SearchFields name={this.props.name} data={{"fileData":this.props.list[0], "supportData":this.props.supportData}}/>
        </div>
        <div className="cellfull">
            </div>
                <ListingHeader data={{"fileData":this.props.list[0], "supportData":this.props.supportData}}/>
            <div className="cellfull">
            {header}
            </div>
            {list}

            </div>
        );
    },

    clickLine (){
        // ReactDOM.render(
        <EditScreen name="footer" api="http://localhost:28080/React/data/footerApi.js" url="http://localhost:28080/React/data/footer.js"/>,
            document.getElementById ('container')
        // );
    }
})
