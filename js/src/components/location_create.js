import React, {Component} from 'react';
import LocationForm from './location_form';

class LocationCreate extends React.Component {
  handleSuccess() {
    this.context.router.push('/locations');
  }

  handleSubmit = (data) => {
    const trip_id = this.props.params.id;
    const component = this;

    let formData = new FormData();
    for (let [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
    formData.append('trip_id', trip_id);

    fetch("http://localhost:3000/locations",{
      method: "POST",
      headers: {},
      body: formData
    }).then((res) => {
      if (res.ok) {
        component.handleSuccess();
      } else {
        alert("OoO");
      }
    },(e) => {
      alert("Error submitting form!");
    });
  }

  render() {
    return(
      <div>
        <h1>Create Location</h1>
        <LocationForm onFormSubmit={this.handleSubmit} />
      </div>
    );
  }
}

// if router is needed
LocationCreate.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default LocationCreate;
