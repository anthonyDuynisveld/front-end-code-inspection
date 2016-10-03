/*
 StorePicker
 This will let us make <StorePicker/>
 */

import React from 'react';
import { History } from 'react-router';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

@autobind
class workInProgress extends React.Component {
    getInitialState (){
        return {
            data : this.props.data,
            supportData : this.props.supportData
        };
    }

        componentDidMount() {
            if (this.props.data) {
                return
            }
            this.serverRequest = $.get(window.location + "/data/cashCodes.js", function (result) {
                this.setState({
                    "data": result,
                    "supportData": this.supportData,
                });
            }.bind(this), "json");
            this.serverRequest = $.get("http://localhost:3004/React/data/cashCodesServerInfo.js", function (result) {
                this.setState({
                    "data": this.data,
                    "supportData": result
                });
            }.bind(this), "json");
        }

        componentWillUnmount() {
        this.serverRequest.abort();
    }

        render() {
        if (!this.data || !this.supportData){
            return (<div> Processing Please Wait </div>);
        }

        return ( <ListingScreen name={this.props.name} list={this.data.content} supportData={this.supportData} type={ListingLine}/>);
    }

}

reactMixin.onClass(workInProgress, History);

export default workInProgress;
