import React, {Component} from 'react';
import TripForm from './trip_form';

class TripCreate extends React.Component {
  handleSuccess() {
    this.context.router.push('/trips');
  }

  handleSubmit = (data) => {
    const _this = this;

    let formData = new FormData();
    for (let [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }

    fetch("http://localhost:3000/trips", {
      method: "POST",
      headers: {},
      body: formData
    }).then( (res) => {
      if (res.ok) {
        _this.handleSuccess();
      } else {
        alert("Oops!");
      }
    }, (e) => {
      alert("Error submitting form!");
    });
  }

  render() {
    return (
      <div>
        <h1>Create Trip</h1>
        <TripForm onFormSubmit={this.handleSubmit} />
      </div>
    );
  }
}

// if router is needed
TripCreate.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default TripCreate;
