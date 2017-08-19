import React, { Component } from "react";
// import GoogleMapReact from "google-map-react";
// import { createClient } from "@google/maps";
import "./googlemap.css";

// const API_KEY = "AIzaSyDFjGgNQtuiSuFvfXvs84TS1lY_ZtqYXYc";
// const AnyReactComponent = ({ text }) =>
//   <div>
//     {text}
//   </div>;

//Documentation for map init and setup:
//https://github.com/istarkov/google-map-react/blob/master/API.md
export default class GoogleMap extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <div>
      <div id="map"></div>
      <input id="pac-input" className="controls" type="text" placeholder="Search Box" />
      <div id="panel">
        <h2>Results</h2>
        <ul id="places">

        </ul>
        <button id="more">More results</button>
      </div>
      </div>
    );
  }
}
