import React from "react";
import VetListItem from "./vetlist-item";


class VetList extends React.Component {
	render() {

		const vetItems = this.props.vets.map((item, index) =>{
			return <VetListItem key={index} {...item}/>
		})

		return (
			<div id="panel">
				<h2>Results</h2>
				<ul id="places">
					{vetItems}
				</ul>
				<button id="more">More results</button>
			</div>
		);
	}
}

export default VetList;
