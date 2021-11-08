import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

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
 /* Event Handlers */
    onMarkerClick = (props, marker, e) =>
      this.setState({
        selectedPlace: props,
        activeMarker: marker,
        showingInfoWindow: true
      });
    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null
        })
      }
    };

    render() {
      return (
        <Map 
            google = {this.props.google}
            onClick = {this.onMapClicked}
            zoom = {13}
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
            onClick={this.onMarkerClick}
            name={'Fit4Less'}
            position = {{
                lat: 43.76187244422863, 
                lng: -79.22827111828352 
            }}
          />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
                  <a href = "./Item"> Click here for more information </a>
              </div>
            </InfoWindow>
          <Marker
              onClick={this.onMarkerClick}
              name={'Goodlife Fitness: Cedarbrae Mall'} 
              position = {{
                lat: 43.75957,
                lng: -79.22624
            }}
          />
          <Marker 
            onClick={this.onMarkerClick}
            name={'World Gym'}
            position = {{
                lat: 43.77714113246414, 
                lng: -79.24931225786676
            }}
          />
          <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}>
              <div>
                <h1>{this.state.selectedPlace.name}</h1>
                  <a href = "./Item"> Click here for more information </a>
              </div>
            </InfoWindow>
          <Marker
          onClick={this.onMarkerClick}
          name={'Snap Fitness'} 
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
                  <a href = "./Item"> Click here for more information </a>
              </div>
            </InfoWindow>
        </Map>
      )
    }
  }

  export default GoogleApiWrapper({
    apiKey: ('AIzaSyDSO1X25Ssg1-_7GhYNoqMANh4wfbTOEds')
  })(MapContainer)