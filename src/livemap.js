import React from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

class Map extends React.Component {
  render() {
    const bounds = new window.google.maps.LatLngBounds();
    // eslint-disable-next-line
    this.props.locations.map((location) => {
      bounds.extend(new window.google.maps.LatLng(location.lat, location.lng));
    });

    this.refs.map && this.refs.map.fitBounds(bounds);

    return (
      <GoogleMap ref="map">
        {this.props.locations.map((location, index) => (
          <Marker
            key={index}
            position={{ ...location }}
          />
        ))}
      </GoogleMap>
    );
  }
}

const LiveMap = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: '100%' }} />,
    mapElement: <div style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
)(Map);

export default LiveMap;
