import React from "react";
import {connect} from 'react-redux';
// // import "./vet.css";
// import store from '../store';
// import { addService } from '../actions/services';

// console.log('GETSTATE: ', store.getState());
// store.dispatch(addService('Trim Nails', "$25.00"));
// console.log('GETSTATE2: ', store.getState());


export function Service(props) {
// 	addService(service, price) {
// 		this.props.dispatch(addService(service, price));
// 	}

// 	render() {
// 		const services = this.props.services.map((service, index) =>
// 			<Service key={index} index={index} {...service} />
// 		);

		return (
			<li className="service">
				<p>{props.service}: {props.price}</p>
			</li>
		);
// 	}
}

Service.defaultProps = {
    service: '',
    price: ''
};

export default connect()(Service);
