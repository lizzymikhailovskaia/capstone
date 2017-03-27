import React, {Component} from 'react';
import UserInfo from './user_info';
import TripList from './trip_list';

class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       user: []
     };
  }

  componentDidMount() {
    const id = this.props.params.id;
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'GET',
      credentials: "include",
      headers: {
        'Accept': 'application/json',
      },
    }).then ( response => response.json() )
      .then( json =>
        this.setState({
          user: json
        })
      )
      .catch(function (error) {/*Handle error*/});
  }

  render() {
    return (
      <div>
        <div>
          <UserInfo user={this.state.user}></UserInfo>
        </div>
        <TripList user_id={this.props.params.id}></TripList>
      </div>
    );
  }
};

export default User;
