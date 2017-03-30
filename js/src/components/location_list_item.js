import React from 'react';
import {Link} from 'react-router';

const LocationListItem = ({location}) => {
  return (
    <div className="col-md-12">
      <hr/>
      <div>
        <Link to={`/locations/${location.id}`}>
          <strong>{location.name}</strong>
        </Link>
      </div>
      <div>{location.address}</div>
    </div>
  );
};

export default LocationListItem;
