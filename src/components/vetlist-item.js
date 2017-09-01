import React from "react";
import { connect } from "react-redux";
import { showAddServiceAction } from "../actions/vet";
import Vet from "./vet";

class VetListItem extends React.Component {
	// constructor(props) {
	// 	super(props)
	// 	console.log(props);
	// }
	render() {
		let showVet = () => {
			if (this.props.googleDataId === this.props.place_id) {
				console.log("THISCALLED");
				return <Vet />;
			}
		};
		return (
			<li
				onClick={this.props.showAddServiceComponent}
				data-id={this.props.place_id}
				data-name={this.props.name}
			>
				{this.props.name} Rating: {this.props.rating}
				{showVet}
				{this.props.googleDataId}
				{this.props.place_id}
			</li>
		);
	}
}

function mapStateToProps(state) {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		showAddServiceComponent: e => {
			showAddServiceAction(
				e.currentTarget.getAttribute("data-id"),
				e.currentTarget.getAttribute("data-name"),
				dispatch
			);
		}
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(VetListItem);
