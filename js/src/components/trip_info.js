import React from 'react';

const TripInfo = ({trip}) => {
  return (
    <div>
      <p>{trip.name}</p>
      <p>{trip.description}</p>
      <p>{trip.start_date}</p>
      <p>{trip.end_date}</p>
      <div className="thumbnail">
        <img src={ trip.photo } alt="..."/>
      </div>
    </div>
  );
};

export default TripInfo;
