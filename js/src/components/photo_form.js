import React, {Component} from 'react';

class PhotoForm extends React.Component {

  handleFormSubmit = (e) => {
    //we don't want the form to submit, so we prevent the default behavior
    e.preventDefault();

    let data = {};

    const files = document.getElementById('file').files;
    if (files.length > 0) {
      data.file = files[0];
    } else {
      data.file = null;
    }

    //simple validation
    if (!data.file) {
      alert('select a file!');
      return;
    }

    //Here we do the final submit to the parent component
    this.props.onFormSubmit(data);
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({ [name]: value });
  }

  render() {
    return (
      <form onSubmit={ this.handleFormSubmit }>
        <div>
          <label>File</label>
          <input type="file" name="file" id="file" accept="image/*;capture=camera" />
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default PhotoForm;
