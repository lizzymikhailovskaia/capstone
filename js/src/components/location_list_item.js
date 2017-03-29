import React from 'react';
import {Link} from 'react-router';

const LocationListItem = ({location}) => {
  return (
    <div className="col-md-12">
      <hr/>
      <p>
        <Link to={`/locations/${location.id}`}>
          <strong>{location.name}</strong>
        </Link>
      </p>
      <p>{location.address}</p>
      <p>{location.description}</p>
      <p>{location.start_date}</p>
      <p>{location.end_date}</p>
    </div>
  );
};

export default LocationListItem;
