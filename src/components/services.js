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
		// console.log("PROPSSERVICE: ", this.props.showAddService);
		// editService(service, price, this.props.showAddService, this.props.dispatch);
	}
	onSubmit(event) {
    event.preventDefault();
    // const serviceText = this.serviceInput.value.trim();

    // if (serviceText && this.props.onAdd) {
    //   this.props.onAdd(this.serviceInput.value, this.priceInput.value);
    // }
    // this.serviceInput.value = "";
    // this.priceInput.value = "";
  }

	render() {
		return (
			<div>
				<Form inline className="service" id="service" onSubmit={this.onSubmit}>
					<FormGroup controlId="formInlineName">
						{this.props.service}: {this.props.price}
					</FormGroup>
					<FormGroup controlId="formInlineName">
						<EditForm
							type="service"
							onAdd={(service, price) =>
								this.props.editService(service, price, this.props._id)}
						/>
					</FormGroup>
					<FormGroup controlId="formInlineName">
						<button
							onClick={this.props.onDeleteClick}
							data-service-id={this.props._id}
						>
							<i className="fa fa-trash" aria-hidden="true" />
						</button>
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
		},
		onDeleteClick: btn => {
			console.log("BTNTARGET:", btn.currentTarget);
			deleteService(
				btn.currentTarget.getAttribute("data-service-id"),
				dispatch
			);
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Service);
