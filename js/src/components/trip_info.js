import React from 'react';

const TripInfo = ({trip}) => {
  return (
    <div>
      <h1>{trip.name}</h1>
      <div>{trip.description}</div>
      <div>Dates: {trip.start_date} - {trip.end_date}</div>
      <div>
        <img className="img-rounded" src={ trip.photo } alt="..."/>
      </div>
    </div>
  );
};

export default TripInfo;
