import React, {Component} from 'react';
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
    fetch(`http://localhost:3000/locations/${id}`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    }).then ( response => response.json() )
      .then( json =>
        this.setState({
          location: json
        })
      )
      .catch(function (error) {/*Handle error*/});
  }

  render() {
    return (
      <div>
        <div>
          <LocationInfo location={this.state.location}></LocationInfo>
        </div>
        <TaskList location_id={this.props.params.id}></TaskList>
        <CommentList type="location" id={this.props.params.id}></CommentList>
      </div>
    );
  }
};

export default Location;
