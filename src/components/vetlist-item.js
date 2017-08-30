import React from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from 'redux';
import { showAddServiceAction } from "../actions/vet";
import { fetchService } from "../actions/services";
// import Vet from "./vet";

class VetListItem extends React.Component {
	// constructor(props) {
	// 	super(props);
		// this.state = {
		// 	showAddService: false
		// };
	// }

	render() {
		return (
			<li
				onClick={this.props.showAddServiceComponent}
				data-id={this.props.pid}
			>
				{this.props.name} Rating: {this.props.rating}
			</li>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		showAddServiceComponent: (e) => {
			showAddServiceAction(e.currentTarget.getAttribute("data-id"), dispatch)
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(VetListItem);
