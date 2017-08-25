import React from "react";

import "./googlemap.css";
import VetList from "./vet-list";

export default class GoogleMap extends React.Component {
  componentDidMount() {
    // new google.maps.Map(this.refs.map, {
    //   zoom: 12,
    //   center: {
    //     lat: 29.7604,
    //     lng: -95.3698
    //   }
    // });
  }

  render() {
    return (
      <div>
        {/* return <div ref="map" />*/}
        <div id="map" />
        <input
          id="pac-input"
          className="controls"
          type="text"
          placeholder="Search New Location"
        />
        <div id="panel">
          <h2>Results</h2>
          <ul id="places" />
          <button id="more">More results</button>
        </div>
        {/*<VetList />*/}
      </div>
    );
  }
}
