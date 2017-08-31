import React from "react";
import { connect } from "react-redux";

import VetListItem from "./vetlist-item";
import { googleMaps } from "../actions/vet";

class VetList extends React.Component {
	render() {
		const vetItems = this.props.vets.map((item, index) => {
			return <VetListItem key={index} {...item} />;
		});

		return (
			<div id="panel">
				<h2>Results2</h2>
				<ul id="places">
					{vetItems}
				</ul>
				<button id="more">More results</button>
				<button onClick={this.props.googleMapsClick}>Results</button>
			</div>
		);
	}
}

const mapStateToProps = (state, props) => {
	return {}
}
const mapDispatchToProps = (dispatch) => {
	return {
		googleMapsClick: () => {
			dispatch(googleMaps());
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(VetList);
