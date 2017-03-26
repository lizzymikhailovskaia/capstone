import React, {Component} from 'react';
import LocationListItem from './location_list_item';

class LocationList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       locations: []
     };
  }

  componentDidMount() {
    const trip_id = this.props.trip_id;
    fetch(`http://localhost:3000/trips/${trip_id}/locations`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    }).then ( response => response.json() )
      .then( json =>
        this.setState({
          locations: json
        })
      )
      .catch(function (error) {/*Handle error*/});
  }

  render() {
    const locationItems = this.state.locations.map((location) => {
      return (
         <LocationListItem
          key={location.id}
          location={location}/>
       );
    });

    return (
      <div>
        <h2>Places to visit</h2>
        <div className="row">
         {locationItems}
        </div>
      </div>
    );
  }
};

export default LocationList;
