import React from "react";
import { connect } from "react-redux";
import { editService, deleteService } from "../actions/services";
import EditForm from "./edit-form";
import { Form, FormGroup } from "react-bootstrap";

class Service extends React.Component {
	constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

	editService(service, price) {
	}

	onSubmit(event) {
    event.preventDefault();
  }

	render() {
		return (
			<div>
				<Form inline className="service" id="service" onSubmit={this.onSubmit}>
					<FormGroup controlId="formInlineName">
						<div className="service-item">
						<strong>{this.props.service}</strong>: ${this.props.price}
						</div>
					</FormGroup>
					<FormGroup controlId="formInlineName">
						<EditForm
							type="service"
							onAdd={(service, price) =>
								this.props.editService(service, price, this.props._id)}
							formService={this.props.service}
							formPrice={this.props.price}
							formServiceId={this.props._id}
						/>
					</FormGroup>
				</Form>
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
		editService: (service, price, serviceId) => {
			editService(service, price, serviceId, dispatch);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Service);
