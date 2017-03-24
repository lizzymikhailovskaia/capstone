import React, {Component} from 'react';

class Trip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       trip: []
     };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/trips`, {
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
      <div className="row">
      </div>
    );
  }
};

export default Trip;
