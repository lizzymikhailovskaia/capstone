import React from 'react';
import GoogleMap from 'google-map-react';

const Place = ({ text }) => <div className="marker">{text}</div>;

const LocationInfo = ({location}) => {
  return (
    <div>
      <div><h1>Info about your cool location!</h1></div>
      <div><strong>{location.name}</strong></div>
      <div>{location.start_date} - {location.end_date}</div>
      <div>{location.description}</div>
      <div>{location.address}</div>

      <div className="map">
        <GoogleMap
          center={[location.latitude, location.longitude]}
          zoom={9}>
          <Place lat={location.latitude} lng={location.longitude} text={'A'} />
        </GoogleMap>
      </div>
    </div>
  );
}

export default LocationInfo;
