import React from "react";
import { connect } from "react-redux";
import ReactStars from "react-stars";
import { showAddServiceAction } from "../actions/vet";
import Vet from "./vet";
import { Form, FormGroup, ControlLabel } from "react-bootstrap";

class VetListItem extends React.Component {
	// constructor(props) {
	// 	super(props)
	// 	console.log(props);
	// }
	render() {
		// console.log("PROPS", this.props.pid, this.props.place_id);
		let showVet = this.props.pid === this.props.place_id ? <Vet /> : "";
		return (
			<Form inline>
				<li
					onClick={this.props.showAddServiceComponent}
					data-id={this.props.place_id}
					data-name={this.props.name}
				>
					<strong>
						{this.props.name}
					</strong>
					{"  "}
					{this.props.vicinity}
					{"  "}
					<FormGroup controlId="formInlineName">Rating:</FormGroup>
					{"  "}
					<FormGroup controlId="formInlineName">
						<ReactStars count={this.props.rating} color1={"#ffd700"} />
					</FormGroup>
					{showVet}
				</li>
			</Form>
		);
	}
}

function mapStateToProps(state) {
	// console.log("STATE:", state);
	return { pid: state.vet.googleDataId };
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
