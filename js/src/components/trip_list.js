import React, {Component} from 'react';
import TripListItem from './trip_list_item';

class TripList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       trips: []
     };
  }

  componentDidMount() {
    const user_id = this.props.user_id;

    fetch(`http://localhost:3000/users/${user_id}/trips`, {
      method: 'GET',
      credentials: "include",
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
    const tripItems = this.state.trips.map((trip) => {
      return (
         <TripListItem
          key={trip.id}
          trip={trip} />
       );
    });

    return (
      <div className="row">
       {tripItems}
      </div>
    );
  }
};

export default TripList;
