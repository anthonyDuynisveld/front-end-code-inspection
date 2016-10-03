$.support.cors = true;
$.ajaxSetup({ cache: false });
	
var SingleInput = React.createClass ({
	getInitialState: function (){
		return {
			name : this.props.name,
			value : this.props.value,
			fullData : this.props.data
		};
	},

	render: function (){
		var classesSet = ((this.props.supportData.svrProps.css && new Set (this.props.supportData.svrProps.css.classes)) || new Set());
		classesSet.add ("cell4")
		var classes = []
		classesSet.forEach(function (value){
			classes.push(value)
		})
		return (
			<div className={classes.join(' ')}>
				<div>{this.props.supportData.svrProps.name}:&nbsp;</div>
				<div>
					<input defaultValue={"Enter the "+this.props.supportData.svrProps.name} value={this.state.value} onChange={this.handleChange} id={this.props.name}  />
				</div>
			</div>
		);	
	},
	handleChange: function (e){
		this.setState ({value: e.target.value});
	}

})

var DisplayData = React.createClass ({
	getInitialState: function (){
		return {
			name : this.props.name,
			value : this.props.value,
			fullData : this.props.data
		};
	},

	render: function (){
		return (
			<div className="cell2">
				{this.state.value}
			</div>
		);	
	},
	handleChange: function (e){
		this.setState ({value: e.target.value});
	}

})


var ListingScreen = React.createClass({
	getInitialState: function (){
		return {
		};
	},

	render: function() {
		
		var header = ObjectParser (ListHeader, {"fileData":this.props.list[0], "supportData":this.props.supportData}, this.props.supportData.svrProps.listingScreenOrder);
		var list = ListParser (this.props.supportData, this.props.list, ListingLine)
		
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
	},

	clickLine: function (){
		ReactDOM.render(
			<EditScreen name="footer" api="http://localhost:28080/React/data/footerApi.js" url="http://localhost:28080/React/data/footer.js"/>,
			document.getElementById ('container')
		);
	}
})

var CashCodeScreen = React.createClass({
	getInitialState: function (){
		return {
			data : this.props.data,
			supportData : this.props.supportData
		};
	},

	componentDidMount: function() {
		if (this.props.data){
			return
		}
		this.serverRequest = $.get(this.props.url, function (result) {
			this.setState({
				"data": result,
				"supportData": this.state.supportData,
			});
		}.bind(this), "json");
		this.serverRequest = $.get(this.props.api, function (result) {
			this.setState({
				"data": this.state.data,
				"supportData": result
			});
		}.bind(this), "json");
	},

	componentWillUnmount: function() {
		this.serverRequest.abort();
	},

	render: function() {
		if (!this.state.data || !this.state.supportData){
			return (<div> Processing Please Wait </div>);
		}
		
		return ( <ListingScreen name={this.props.name} list={this.state.data.content} supportData={this.state.supportData} type={ListingLine}/>);
	},
	
})


var WorkInProgressScreen = React.createClass({
	getInitialState: function (){
		return {
			data : this.props.data,
			supportData : this.props.supportData
		};
	},

	componentDidMount: function() {
		if (this.props.data){
			return
		}
		this.serverRequest = $.get(this.props.url, function (result) {
			this.setState({
				"data": result,
				"supportData": this.state.supportData,
			});
		}.bind(this), "json");
		this.serverRequest = $.get(this.props.api, function (result) {
			this.setState({
				"data": this.state.data,
				"supportData": result
			});
		}.bind(this), "json");
	},

	componentWillUnmount: function() {
		this.serverRequest.abort();
	},

	render: function() {
		if (!this.state.data || !this.state.supportData){
			return (<div> Processing Please Wait </div>);
		}
		
		return ( <ListingScreen name={this.props.name} list={this.state.data.content} supportData={this.state.supportData} type={ListingLine}/>);
	},
	
})

	
var FooterScreen = React.createClass({
	getInitialState: function (){
		return {
			data : this.props.data,
		};
	},

	componentDidMount: function() {
		if (this.props.data){
			return
		}
		this.serverRequest = $.get(this.props.url, function (result) {
			this.setState({
				"data": result
			});
		}.bind(this), "json");
	},

	componentWillUnmount: function() {
		this.serverRequest.abort();
	},

	createObject: function (name){
		return this.state.data.fileData [name]	
			
		
	},

	render:function (){

		if (!this.state.data){
			return (<div> Processing Please Wait </div>);
		}
		
		return ( <EditScreen data={this.state.data} type={ListingLine}/>);
	}
})

/*
ReactDOM.render(
	<FooterScreen name="footer" api="http://localhost:28080/React/data/footerApi.js" url="http://localhost:28080/React/data/footer.js"/>,
	document.getElementById ('container')
);
*/
/*
ReactDOM.render(
	<CashCodeScreen name="footer" api="http://localhost:28080/React/data/cashCodesServerInfo.js" url="http://localhost:28080/React/data/cashCodes.js"/>,
	document.getElementById ('container2')
)
*/

// ReactDOM.render(
// 	<WorkInProgressScreen name="WorkInProgress" api="http://localhost:28080/React/data/cashCodesServerInfo.js" url="http://localhost:28080/React/data/cashCodes.js"/>,
// 	document.getElementById ('container2')
// )

