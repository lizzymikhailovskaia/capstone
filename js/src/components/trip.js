import React, {Component} from 'react';
import {Link} from 'react-router';
import TripInfo from './trip_info';
import LocationList from './location_list';
import CommentList from './comment_list';

class Trip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       trip: []
     };
  }

  componentDidMount() {
    const id = this.props.params.id;
    fetch(`/trips/${id}`, {
      method: 'GET',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
      },
    }).then ( response => response.json() )
      .then( json =>
        this.setState({
          trip: json
        })
      )
      .catch(function (error) {/*Handle error*/});
  }

  render() {
    const trip = this.state.trip;

    const user_id = localStorage.getItem('user_id');
    let editLink = '';
    let createLocationLink = '';
    if (trip && trip.user && user_id == trip.user.id) {
      editLink = <Link className="btn btn-primary" to={`/trips/${trip.id}/edit`}>Edit trip</Link>;
      createLocationLink = <Link className="btn btn-primary" to={`/trips/${trip.id}/new-location`}>Create location</Link>;
    }

    return (
      <div>
        <div><h1>Info about your great Trip!</h1></div>
        <TripInfo trip={trip}></TripInfo>
        <div>{editLink}</div>
        <div>{createLocationLink}</div>
        <LocationList trip_id={this.props.params.id}></LocationList>
        <CommentList type="trip" id={this.props.params.id}></CommentList>
      </div>
    );
  }
};

export default Trip;
