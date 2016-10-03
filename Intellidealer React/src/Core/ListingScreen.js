import React from 'react';
import autobind from 'autobind-decorator';
import Parser from '../Core/parsers';

@autobind
class ListingScreen extends React.Component {
    getInitialState (){
        return {
        };
    }

    render() {

        var header = Parser.parser.ObjectParser (ListHeader, {"fileData":this.props.list[0], "supportData":this.props.supportData}, this.props.supportData.svrProps.listingScreenOrder);
        var list = Parser.parser.ListParser (this.props.supportData, this.props.list, ListingLine)

        return (
            <div>
            Search Crieteria
        <div className="searchFields">
            <SearchFields name={this.props.name} data={{"fileData":this.props.list[0], "supportData":this.props.supportData}}/>
        </div>
        <div className="cellfull">
            </div>
            <div className="cellfull">
            {header}
            </div>
            {list}

            </div>
        );
    }

    clickLine (){
        ReactDOM.render(
        <EditScreen name="footer" api="http://localhost:28080/React/data/footerApi.js" url="http://localhost:28080/React/data/footer.js"/>,
            document.getElementById ('container')
        );
    }
})
