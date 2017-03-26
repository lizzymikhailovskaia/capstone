import React from 'react';

const LocationListItem = ({location}) => {
  return (
    <div className="col-md-12">
      <hr/>
      <p><strong>{location.name}</strong></p>
      <p>{location.adress}</p>
      <p>{location.description}</p>
      <p>{location.start_date}</p>
      <p>{location.end_date}</p>
    </div>
  );
};

export default LocationListItem;
