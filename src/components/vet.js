import React from "react";
import { connect } from "react-redux";
import "./vet.css";
import { addService } from "../actions/services";
import Service from "./services";
import AddForm from "./add-form";

export class Vet extends React.Component {
	componentDidMount() {
		// console.log("GETSTATE: ", this.props);
	}

	addService(service, price) {
		// console.log("PROPSSERVICE: ", this.props.showAddService);
		addService(service, price, this.props.showAddService, this.props.dispatch);
	}

	render() {
		// console.log("PROPSSerSer: ", this.props.services.services);
		let services = "<li>No Services Added</li>";

		if (this.props.services.services) {
			services = this.props.services.services.map((service, index) =>
				<Service key={index} index={index} {...service} />
			);
		}
		return (
			<div className="vet">
				<div className="services">
					<AddForm
						type="service"
						onAdd={(service, price) => this.addService(service, price)}
					/>
				</div>
				<ul>
					{services}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	console.log("STATE", state);
	return {
		services: state.services,
		showAddService: state.vet.showAddService
	};
};

export default connect(mapStateToProps)(Vet);
