import React from "react";
import "./googlemap.css";
import VetList from "./vet-list";
// import { googleMaps } from "../actions/vet";


export default class GoogleMap extends React.Component {
  // componentWillReceiveProps(nextProps) {
  //   this.map.panTo({ lat: nextProps.lat, lng: nextProps.lng });

  //   var infowindow = new google.maps.InfoWindow({
  //     content: nextProps.content
  //   });

  //   var pos = { lat: nextProps.lat, lng: nextProps.lng };
  //   var marker = new google.maps.Marker({
  //     position: pos,
  //     map: this.map
  //   });
  //   marker.addListener("click", function() {
  //     infowindow.open(this.map, marker);
  //   });
  // }

  // componentDidMount() {
  //   this.map = new google.maps.Map(this.refs.map, {
  //     center: {
  //       lat: this.props.lat,
  //       lng: this.props.lng
  //     },
  //     zoom: 12
  //   });
  // }

  render() {
    const tmpvets = [
      { pid: "599c58e9d6976831e5da26d0", name: "Bob's Vet", rating: "3.8 stars" },
      { pid: "59999e22d6976831e5d4cdbb", name: "Bob's Vet", rating: "3.8 stars" },
      { pid: "123", name: "Bob's Vet", rating: "3.8 stars" }
    ];

    // const gVets = window.googleMapInfo
    // console.log('GVets:', window.googleMapInfo[0])

    return (
      <div>
        <div id="map" ref='map'/>
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
        <VetList vets={tmpvets} />
      </div>
    );
  }
}
