import React, {Component} from 'react';
import LocationListItem from './location_list_item';

class TripList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       trips: []
     };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/locations`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    }).then ( response => response.json() )
      .then( json =>
        this.setState({
          trips: json
        })
      )
      .catch(function (error) {/*Handle error*/});
  }

  render() {
    const locationItems = this.state.locations.map((trip) => {
      return (
         <LocationListItem
          key={location.id}
          trip={location}/>
       );
    });

    return (
      <div className="row">
       {locationItems}
      </div>
    );
  }
};

export default LocationListItemList;
