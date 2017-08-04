import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import { createClient } from "@google/maps";
import "./googlemap.css";

const API_KEY = "AIzaSyDFjGgNQtuiSuFvfXvs84TS1lY_ZtqYXYc";
const AnyReactComponent = ({ text }) =>
  <div>
    {text}
  </div>;

//Documentation for map init and setup:
//https://github.com/istarkov/google-map-react/blob/master/API.md
export default class GoogleMap extends Component {
  static defaultProps = {
    center: { lat: 59.95, lng: 30.33 },
    zoom: 15
  };

  componentDidMount() {
    //Documentation for geocode / places / etc
    //https://www.npmjs.com/package/@google/maps
    var googleMapsClient = createClient({
      key: API_KEY
    });
    // Geocode an address.
    googleMapsClient.geocode(
      {
        address: "1600 Amphitheatre Parkway, Mountain View, CA"
      },
      function(err, response) {
        if (!err) {
          console.log(response.json.results);
        }
      }
    );
  }

  render() {
    return (
      <div className="map" style={{ width: "60%", height: "40vh", margin: "100px auto" }}>
        <GoogleMapReact
          center={{ lat: 29.7604, lng: -95.3698 }}
          defaultZoom={this.props.zoom}
          bootstrapURLKeys={{ key: API_KEY }}
        >
          <AnyReactComponent
            lat={29.7604}
            lng={-95.3698}
            text={"Houston, TX"}
          />
        </GoogleMapReact>
      </div>
    );
  }
}
