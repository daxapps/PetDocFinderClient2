import React from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from 'redux';
import { showAddServiceAction } from "../actions/vet";
// import Vet from "./vet";

class VetListItem extends React.Component {
	constructor(props) {
		super(props);
		// this.state = {
		// 	showAddService: false
		// };
	}

	// handleSubmit(e) {
	// 	e.preventDefault();
	// 	// var self = this;
	// 	fetch("http://localhost:8080/api/vets/vetlist", {
	// 		method: "POST",
	// 		data: {
	// 			vetName: this.text(),
	// 			googleDataId: this.attr("data-id")
	// 		}
	// 	}).then(data => {
	// 		console.log("NEWDATA: ", data);
	// 		// return response.json();
	// 	});
	// 	// .then(function(body) {
	// 	// 	console.log(body);
	// 	// });
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
			dispatch(showAddServiceAction(e.currentTarget.getAttribute("data-id")));
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(VetListItem);
