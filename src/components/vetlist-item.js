import React from "react";

class VetListItem extends React.Component {
	render() {
		return (
			<li data-id={this.props.pid}>{this.props.name} Rating: {this.props.rating}</li>
			)
	}
}

export default VetListItem;
