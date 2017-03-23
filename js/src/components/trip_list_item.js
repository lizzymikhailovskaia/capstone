import React from 'react';

const TripListItem = ({trip}) => {
  return (
    <div className="col-xs-6 col-md-3">
      <p>{trip.name}</p>
      <p>{trip.start_date}</p>
      <p>{trip.end_date}</p>
      <a href={ `/trips/${trip.id}` } className="thumbnail">
        <img src={ trip.photo } alt="..."/>
      </a>
    </div>
  );
};

export default TripListItem;
