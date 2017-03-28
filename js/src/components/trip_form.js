import React, {Component} from 'react';

class TripForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data ? this.props.data : {
      name: "",
      description: "",
      start_date: "",
      end_date: "",
      public: false
    };
  }

  handleFormSubmit = (e) => {
    //we don't want the form to submit, so we prevent the default behavior
    e.preventDefault();

    let data = {};
    data.name = this.state.name;
    data.description = this.state.description;
    data.start_date = this.state.start_date;
    data.end_date = this.state.end_date;
    data.public = this.state.public;

    const files = document.getElementById('photo').files;
    if (files.length > 0) {
      data.photo = files[0];
    } else {
      data.photo = null;
    }

    //simple validation
    if (!data.name) {
      return;
    }

    //Here we do the final submit to the parent component
    this.props.onFormSubmit(data);
    // this.setState(getInitialState()); //reset the form
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
          <label>Trip name: </label>
          <input type="text" name="name" value={ this.state.name } onChange={ this.handleChange } />
        </div>
        <div>
          <label>Your trip description</label>
          <textarea name="description" value={ this.state.description } onChange={ this.handleChange }></textarea>
        </div>
        <div>
          <label>The starting day of your trip </label>
          <input type="text" name="start_date" value={ this.state.start_date } onChange={ this.handleChange } />
        </div>
        <div>
          <label>The last day of your trip</label>
          <input type="text" name="end_date" value={ this.state.end_date } onChange={ this.handleChange } />
        </div>
        <div>
          <label>Public</label>
          <input type="checkbox" name="public" checked={ this.state.public } onChange={ this.handleChange } />
        </div>
        <div>
          <label>Photo</label>
          <input type="file" name="photo" id="photo" accept="image/*;capture=camera" />
        </div>

        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TripForm;
