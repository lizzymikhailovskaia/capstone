import React, {Component} from 'react';
import {Link} from 'react-router';
import LocationInfo from './location_info';
import TaskList from './task_list';
import CommentList from './comment_list';

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       location: []
     };
  }

  componentDidMount() {
    const id = this.props.params.id;
    fetch(`/locations/${id}`, {
      method: 'GET',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
      },
    }).then ( response => response.json() )
      .then( json =>
        this.setState({
          location: json
        })
      );
  }

  render() {
    const location = this.state.location;

    const user_id = localStorage.getItem('user_id');
    let editLink = '';
    if (location && location.trip && location.trip.user
      && location.trip.user.id == user_id)
    {
      editLink = <Link className="btn btn-primary" to={`/locations/${location.id}/edit`}>Edit location</Link>;
    }

    return (
      <div>
        <div>
          <LocationInfo location={location}></LocationInfo>
        </div>
        <div>{editLink}</div>
        <Link className="btn btn-primary" to={`/locations/${location.id}/photos`}>Photo Gallery</Link>
        <TaskList location_id={this.props.params.id}></TaskList>
        <CommentList type="location" id={this.props.params.id}></CommentList>
      </div>
    );
  }
};

export default Location;
