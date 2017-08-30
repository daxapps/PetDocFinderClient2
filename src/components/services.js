import React from "react";
import {connect} from 'react-redux';
// // import "./vet.css";
// import store from '../store';
import { addService } from '../actions/services';

// console.log('GETSTATE: ', store.getState());
// store.dispatch(addService('Trim Nails', "$25.00"));
// console.log('GETSTATE2: ', store.getState());


class Service extends React.Component {
	addService(service, price) {
		console.log('PROPS: ', this.props)
		// this.props.dispatch(addService(service, price, this.props.showAddService));
	}

	render() {
		// const services = this.props.services.map((service, index) =>
		// 	<Service key={index} index={index} {...service} />
		// );

		return (
			<div>
				<p className="service" id="service">{this.props.service}: {this.props.price}</p>
			</div>
		);
// 	}
}

// Service.defaultProps = {
//     service: '',
//     price: ''
};
const mapStateToProps = state => {
	return {
    showAddService: state.vet.showAddService
	}
}

export default connect(mapStateToProps)(Service);
