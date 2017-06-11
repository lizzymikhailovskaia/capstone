import React, {Component} from 'react';
import LocationListItem from './location_list_item';
import GoogleMap from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';

const Place = ({ text }) => <div className="marker">{text}</div>;

class LocationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       locations: []
     };
  }

  componentDidMount() {
    const trip_id = this.props.trip_id;
    fetch(`/trips/${trip_id}/locations`, {
      method: 'GET',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
      },
    }).then ( response => response.json() )
      .then( json =>
        this.setState({
          locations: json
        })
      )
      .catch(function (error) {/*Handle error*/});
  }

  render() {
    const locationItems = this.state.locations.map((location) => {
      return (
         <LocationListItem
          key={location.id}
          location={location}/>
       );
    });

    let map = '';
    if (this.state.locations.length > 0) {
      const locationsWithCoords = this.state.locations
        .filter((location) => {
          return location.latitude && location.longitude;
        });

      const places = locationsWithCoords.filter((location) => {
        return location.latitude && location.longitude;
      })
      .map((location ) => {
        return (
          <Place
            text=""
            lat={location.latitude}
            lng={location.longitude}/>
        );
      });

      if (this.state.locations.length > 1) {
        let bounds = new google.maps.LatLngBounds();
        locationsWithCoords.forEach(location => {
          const latLng = new google.maps.LatLng(location.latitude, location.longitude);
          bounds.extend(latLng);
        });

        const ne = bounds.getNorthEast();
        const sw = bounds.getSouthWest();
        const nw = { lat: ne.lat(), lng: sw.lng() };
        const se = { lat: sw.lat(), lng: ne.lng() };
        const { center, zoom } = fitBounds({
          se: { lat: se.lat, lng: se.lng },
          nw: { lat: nw.lat, lng: nw.lng }
        }, { width: 400, height: 200 });

        map =
          <div className="map">
            <GoogleMap
              center={center}
              zoom={zoom}>
              {places}
            </GoogleMap>
          </div>;
      } else {
        const center = [
          this.state.locations[0].latitude,
          this.state.locations[0].longitude
        ];
        const zoom = 9;

        map =
          <div className="map">
            <GoogleMap
              center={center}
              zoom={zoom}>
              {places}
            </GoogleMap>
          </div>;
      }
    }

    return (
      <div>
        <h2>Places to visit</h2>
        {map}
        <div className="row">
         {locationItems}
        </div>
      </div>
    );
  }
};

export default LocationList;
