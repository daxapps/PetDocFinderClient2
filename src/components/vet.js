import React from "react";
import { connect } from "react-redux";
import "./vet.css";
// import store from '../store';
import { addService } from "../actions/services";
import Service from "./services";
import AddForm from "./add-form";

// console.log('GETSTATE: ', store.getState());
// store.dispatch(addService('Trim Nails', "$25.00"));
// console.log('GETSTATE2: ', store.getState());

export class Vet extends React.Component {
	addService(service, price) {
		this.props.dispatch(addService(service, price));
	}

	render() {
		console.log("SERVICES: ", this.props.services.services);
		const services = this.props.services.services.map((service, index) =>
			<Service key={index} index={index} {...service} />
		);

		return (
			<div className="vet">
				<div className="services">
					<AddForm
						type="service"
						onAdd={(service, price) => this.addService(service, price)}
					/>
					{/* use Redux Form??? */}
				</div>
				<ul>
					{services}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => ({
	services: state.services
});

export default connect(mapStateToProps)(Vet);
