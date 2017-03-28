import React from 'react';

const LocationInfo = ({location}) => {
  return (
    <div>
      <p>{location.name}</p>
      <p>{location.description}</p>
      <p>{location.adress}</p>
      <p>{location.start_date}</p>
      <p>{location.end_date}</p>
    </div>
  );
};

export default LocationInfo;
