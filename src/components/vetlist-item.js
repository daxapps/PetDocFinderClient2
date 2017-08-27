import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { showAddService } from "../actions/vet";
// import Vet from "./vet";

class VetListItem extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showAddService: false
		};
	}
//dispatch action
// how to change to true??? and call vet.js??
	onClick() {
		this.setState({ showAddService: !this.state.showAddService });
	}

	render() {
		return (
			<li 
				onClick={this.onClick.bind(this)}
				// onClick={() => this.props.showAddService(addServiceBtn)}
				data-id={this.props.pid}>{this.props.name} Rating: {this.props.rating}</li>
			)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({showAddService: showAddService}, dispatch)
}

export default connect(mapDispatchToProps)(VetListItem);
