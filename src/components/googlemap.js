import React, { Component } from "react";
// import GoogleMapReact from "google-map-react";
// import { createClient } from "@google/maps";
import "./googlemap.css";
// import Vet from "./vet"


// const API_KEY = "AIzaSyDFjGgNQtuiSuFvfXvs84TS1lY_ZtqYXYc";
// const AnyReactComponent = ({ text }) =>
//   <div>
//     {text}
//   </div>;

//Documentation for map init and setup:
//https://github.com/istarkov/google-map-react/blob/master/API.md
export default class GoogleMap extends Component {

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
        <div id="map"></div>
        <input id="pac-input" className="controls" type="text" placeholder="Search New Location" />
        <div id="panel">
          <h2>Results</h2>
          <ul id="places"></ul>
          <button id="more">More results</button>
        </div>
      </div>
    );
  }
}
