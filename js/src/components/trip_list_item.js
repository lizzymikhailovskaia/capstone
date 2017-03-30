import React from 'react';
import {Link} from 'react-router';


const TripListItem = ({trip}) => {
  return (
    <div className="col-xs-6 col-md-3">
      <div>
        <Link to={`/trips/${trip.id}`}>
          <strong>{trip.name}</strong>
        </Link>
      </div>
      <div>{trip.start_date} - {trip.end_date}</div>
      <Link to={`/trips/${trip.id}`} className="thumbnail">
        <img src={ trip.photo } alt="..."/>
      </Link>
      </div>
  );
};

export default TripListItem;
