import React, {Component} from 'react';
import LocationForm from './location_form';

class LocationEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       location: null
     };
  }

  componentDidMount() {
    const id = this.props.params.id;

    fetch(`http://localhost:3000/locations/${id}`, {
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
      )
      .catch(function (error) {/*Handle error*/});
  }

  handleSuccess() {
    this.context.router.push('/locations');
  }

  handleSubmit = (data) => {
    const id = this.props.params.id;

    const _this = this;

    let formData = new FormData();
    for (let [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }

    fetch(`http://localhost:3000/locations/${id}`, {
      method: "PUT",
      headers: {},
      body: formData,
      credentials: "include"
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
    const location = this.state.location;

    if (!location) {
      return (<div>Loading...</div>);
    } else {
      return (
        <div>
          <h1>Edit Location</h1>
          <LocationForm data={location} onFormSubmit={this.handleSubmit} />
        </div>
      );
    }
  }
}

// if router is needed
LocationEdit.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default LocationEdit;
