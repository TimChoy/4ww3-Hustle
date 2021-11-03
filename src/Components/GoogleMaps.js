import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

export class MapContainer extends Component {
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
          showingInfoWindow: false,
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
            >
        <Marker 
            position = {{
                at: this.state.mapCenter.lat,
                lng: this.state.mapCenter.lng  
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
    apiKey: (process.env.REACT_APP_API_KEY)
  })(MapContainer)