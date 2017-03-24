import React from 'react';

const LocationListItem = ({location}) => {
  return (
    <div className="col-xs-6 col-md-3">
      <p>{location.name}</p>
      <p>{location.adress}</p>
      <p>{location.description}</p>
      <p>{location.start_date}</p>
      <p>{location.end_date}</p>
      <a href={ `/locations/${location.id}` } className="thumbnail">
        <img src={ location.photo } alt="..."/>
      </a>
    </div>
  );
};

export default LocationListItem;
