import React from 'react';
import {Link} from 'react-router';

const TripListItem = ({trip}) => {
  return (
    <div className="col-xs-6 col-md-3">
      <p>
        <Link to={`/trips/${trip.id}`}>
          <strong>{trip.name}</strong>
        </Link>
      </p>
      <p>{trip.start_date}</p>
      <p>{trip.end_date}</p>
      <Link to={`/trips/${trip.id}`} className="thumbnail">
        <img src={ trip.photo } alt="..."/>
      </Link>
    </div>
  );
};

export default TripListItem;
