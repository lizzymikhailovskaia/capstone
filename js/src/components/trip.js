import React, {Component} from 'react';
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
    fetch(`http://localhost:3000/trips/${id}`, {
      method: 'GET',
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
    return (
      <div>
        <div>
          <TripInfo trip={this.state.trip}></TripInfo>
        </div>
        <LocationList trip_id={this.props.params.id}></LocationList>
        <CommentList type="trip" id={this.props.params.id}></CommentList>
      </div>
    );
  }
};

export default Trip;
