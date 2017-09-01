import React from "react";
import { connect } from "react-redux";

import "./googlemap.css";
import VetList from "./vet-list";

class GoogleMap extends React.Component {
  render() {
    return (
      <div>
        <div id="map" ref="map" />
        <input
          id="pac-input"
          className="controls"
          type="text"
          placeholder="Search New Location"
        />
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
