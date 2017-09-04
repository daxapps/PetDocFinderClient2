import React from "react";
import { connect } from "react-redux";

import VetListItem from "./vetlist-item";
import { googleMaps } from "../actions/vet";

class VetList extends React.Component {
	render() {
		console.log("VETS: ", this.props);
		const vetItems = (this.props.vets || []).map((item, index) => {
			return <VetListItem key={index} {...item} />;
		});
		const styleSheet = { display: 'none'}

		return (
			<div id="panel">
				<h2>Results</h2>
				{this.props.googleDataId}
				<ul id="places">
					{vetItems}
				</ul>
				<button id="more">More results</button>
				<button id="results-btn" style={styleSheet} onClick={this.props.googleMapsClick}>
					Results
				</button>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {};
};

const mapDispatchToProps = dispatch => {
	return {
		googleMapsClick: () => {
			dispatch(googleMaps());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(VetList);
