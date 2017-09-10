import React from "react";
import { connect } from "react-redux";

import "./googlemap.css";
import VetList from "./vet-list";

class GoogleMap extends React.Component {
  render() {
    return (
      <div>
        <input
          id="pac-input"
          className="controls"
          type="text"
          placeholder="Search New Location"
        />
        <div id="map" ref="map" />
        <h4>Click on vet listing below to see prices.</h4>
        <VetList vets={this.props.vetList} />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return { vetList: state.vet.googleMaps };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(GoogleMap);
