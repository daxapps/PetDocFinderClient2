import React from "react";
import { connect } from "react-redux";
import "./vet.css";
// import store from '../store';
import { addService } from "../actions/services";
import Service from "./services";
import AddForm from "./add-form";
// import { bindActionCreators } from 'redux';


export class Vet extends React.Component {
	addService(vetId, service, price) {
		console.log('CALLED?')
		this.props.dispatch(addService(vetId, service, price));
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
						onAdd={(vetId, service, price) => this.addService(vetId, service, price)}
					/>
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
