import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
class Map extends Component {
  static defaultProps = {
    center: {
      lat: 21.4272,
      lng: 92.0058
    },
    zoom: 11
  };
 
  render() {
    return (
      <div style={{ height: '550px', width: '80%', margin:"auto", marginTop:"40px" }}>
        <GoogleMapReact
          
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent
            lat={257.20}
            lng={77.50}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 export default Map;