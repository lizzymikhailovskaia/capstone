import React from 'react';
import {Link} from 'react-router';

const TripListItem = ({trip}) => {
  return (
    <div className="col-sm-6 col-md-4">
      <div className="well">
        <div>
          <Link to={`/trips/${trip.id}`}>
            <strong>{trip.name}</strong>
          </Link>
        </div>
        <Link to={`/trips/${trip.id}`} className="thumbnail">
          <img src={ trip.photo } alt="..."/>
        </Link>
        <div>Date: {trip.start_date} - {trip.end_date}</div>
      </div>
    </div>
  );
};

export default TripListItem;
