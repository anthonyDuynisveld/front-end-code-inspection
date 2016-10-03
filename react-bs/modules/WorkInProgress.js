
import React from 'react';
import axios from 'axios';
import WorkInProgressDetails from './Data/WorkInProgressScreenData.js';
import ListingScreen from './ListingScreenComponents/ListingScreen.js';

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
            axios.post("http://localhost:18080/rest/configuration/workinprocess/workInProcessPageable?company=01&division=01&branch=01",
                {
                    "activeOnly": true,
                    "searchFields": [
                        ""
                    ]
                }, {withCredentials: true}).then( function (response) {
                console.log(response);
                serverRequest.ajaxSuccess(response);
            }).catch(function(){
            });
        },

        ajaxSuccess(response) {
            this.setState({
                "data": response.data,
                "supportData": WorkInProgressDetails,
            });
        },

        render() {
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

