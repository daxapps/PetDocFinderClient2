import React from "react";
import { connect } from "react-redux";
import { deleteService } from "../actions/services";

class Service extends React.Component {
	onDeleteClick() {
		const { id } = this.props.match.params;

		this.props.deleteService(id, () => {
			
		});
	}

	render() {
		return (
			<div>
				<p className="service" id="service">
					{this.props.service}: {this.props.price}
					<button onClick={this.onDeleteClick.bind(this)}>Delete</button>
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

export default connect(mapStateToProps)(Service);
