import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import env from "react-dotenv";

const containerStyle = {
  position: 'relative',
  width: '100%',
  height:'60vh',
  }

export class MapContainer extends Component {
  /* Describes the initial state of the map when it's rendered */
    state = {
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {},
      mapCenter: {
          lat: 43.777702,
          lng: -79.233238
      }
    };
   
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
   
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: true,
          activeMarker: null
        })
      }
    };
   
    render() {
      return (
        <Map 
            google={this.props.google}
            initialCenter = {{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }}
            center = {{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng
            }}
            containerStyle = {containerStyle}
            >
          <Marker 
            position = {{
                lat: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng  
            }}
            />
          <Marker 
            position = {{
                lat: 43.75957,
                lng: -79.22624
            }}
          />
          <Marker 
            position = {{
                lat: 43.77714113246414, 
                lng: -79.24931225786676
            }}
          />
          <Marker 
            position = {{
                lat: 43.80145785954532,
                lng:  -79.19827247757445
            }}
          />
          <InfoWindow
            marker={this.state.activeMarker}
            visible={this.state.showingInfoWindow}>
            <div>
                <h1>{this.state.selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      )
    }
  }

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyDSO1X25Ssg1-_7GhYNoqMANh4wfbTOEds')
  })(MapContainer)