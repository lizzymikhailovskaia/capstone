import React, {Component} from 'react';
import PhotoForm from './photo_form';

class PhotoCreate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       processing: false
     };
  }

  handleSuccess() {
    this.props.onSubmit();
  }

  handleSubmit = (data) => {
    this.setState({ processing: true });

    const location_id = this.props.location_id;
    const _this = this;

    let formData = new FormData();
    for (let [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
    formData.append('location_id', location_id);

    fetch("http://localhost:3000/photos", {
      method: "POST",
      headers: {},
      body: formData,
      credentials: "include"
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
    const processing = this.state.processing;

    let form = '';
    if (!processing) {
      form = <PhotoForm onFormSubmit={this.handleSubmit} />;
    } else {
      form = <div>loading...</div>;
    }

    return (
      <div>
        <h1>Create Photo</h1>
        {form}
      </div>
    );
  }
}

export default PhotoCreate;
