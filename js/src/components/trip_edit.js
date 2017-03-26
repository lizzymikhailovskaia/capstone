import React, {Component} from 'react';
import TripForm from './trip_form';

class TripEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        trip: null,
        processing: false
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

  handleSuccess() {
    this.context.router.push('/trips');
  }

  handleSubmit = (data) => {
    this.setState({ processing: true });

    const id = this.props.params.id;
    const _this = this;

    let formData = new FormData();
    for (let [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }

    fetch(`http://localhost:3000/trips/${id}`, {
      method: "PUT",
      headers: {},
      body: formData
    }).then( (res) => {
      if (res.ok) {
        this.setState({ processing: false });
        _this.handleSuccess();
      } else {
        this.setState({ processing: false });
        alert("Oops!");
      }
    }, (e) => {
      this.setState({ processing: false });
      alert("Error submitting form!");
    });
  }

  render() {
    const trip = this.state.trip;

    if (!trip) {
      return (<div>Loading...</div>);
    } else {
      const processing = this.state.processing;

      let form = '';
      if (!processing) {
        form = <TripForm data={trip} onFormSubmit={this.handleSubmit} />;
      } else {
        form = <div>loading...</div>;
      }

      return (
        <div>
          <h1>Edit Trip</h1>
          {form}
        </div>
      );
    }
  }
}

// if router is needed
TripEdit.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default TripEdit;
