import React from "react";
import { connect } from "react-redux";

class Service extends React.Component {
	render() {
		return (
			<div>
				<li className="service" id="service">
					{this.props.service}: {this.props.price}
				</li>
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
