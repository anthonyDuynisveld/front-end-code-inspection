
import React from 'react';
import axios from 'axios';
import CashCodeDetails from './Data/CashCodeScreenData.js';
import ListingScreen from '../../ListingScreenComponents/ListingScreen.js';

export default React.createClass({


    getInitialState (){
        return {
            data : this.props.data,
            supportData : this.props.supportData
        };
    },

        componentDidMount() {
            if (this.props.data) {
                return
            }
            var serverRequest = this;
            axios.post("http://localhost:18080/rest/configuration/cashcode/cashCodesPageable?" +
                "company="+ this.props.params.company +
                "&division="+ this.props.params.division +
                // "&branch="+ this.props.params.branch +
                "&keywords=" +
                "&page=0" +
                "&size=5" +
                "&sort=location,asc" ,
                {
                    "activeOnly": true,
                    "cashCode": "",
                    "endBranch": "",
                    "startBranch": ""
                }, {withCredentials: true}).then( function (response) {
                console.log(response);
                serverRequest.ajaxSuccess(response);
            }).catch(function(){
            });
        },


        ajaxSuccess(response) {
            this.setState({
                "data": response.data,
                "supportData": CashCodeDetails,
            });
        },

        render() {
            console.log("cashcodes")
        if (!this.state.data || !this.state.supportData){
            return (<div> Processing Please Wait </div>);
        }

        return (
            <div>

                <ListingScreen name={this.state.supportData.svrProps.name} list={this.state.data.content} supportData={this.state.supportData} />
                {this.props.children}
            </div>
        );

    }

})

