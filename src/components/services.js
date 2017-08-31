import React from "react";
import { connect } from "react-redux";

class Service extends React.Component {
	render() {
		return (
			<div>
				<p className="service" id="service">
					{this.props.service}: {this.props.price}
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
