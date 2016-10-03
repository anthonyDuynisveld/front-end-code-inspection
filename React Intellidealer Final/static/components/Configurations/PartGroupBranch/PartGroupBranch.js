
import React from 'react';
import axios from 'axios';
import PartGroupBranchDetails from './Data/PartGroupBranchScreenData.js';
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
            axios.post("http://localhost:18080/rest/configuration/partgroupingbranch/partGroupingsPageable?company="+ this.props.params.company +"&division="+ this.props.params.division +"&branch="+ this.props.params.branch ,

                {
                    "activeOnly": true,
                    "searchFields": [
                        "partGroupingBranch"
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
                "supportData": PartGroupBranchDetails,
            });
        },

        render() {
            console.log("partgroupingbranch")
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

