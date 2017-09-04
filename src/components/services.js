import React from "react";
import { connect } from "react-redux";
import { deleteService } from "../actions/services";

class Service extends React.Component {
	// onDeleteClick() {
	// 	const { id } = this.props.match.params;
	// 	this.props.deleteService(id, () => {});
	// }

	render() {
		return (
			<div>
				<p className="service" id="service">
					{this.props.service}: {this.props.price}
					<button onClick={this.props.onDeleteClick} data-service-id={this.props._id}>
						<i className="fa fa-trash" aria-hidden="true" />
					</button>
				</p>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		showAddService: state.vet.showAddService
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onDeleteClick: btn => {
			console.log('BTNTARGET:', btn.currentTarget)
			deleteService(btn.currentTarget.getAttribute("data-service-id"), dispatch);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Service);
