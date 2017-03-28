import React, {Component} from 'react';

class LocationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data ? this.props.data : {
      name: "",
      adress: "",
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
    data.adress = this.state.adress;
    data.description = this.state.description;
    data.start_date = this.state.start_date;
    data.end_date = this.state.end_date;


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
        <div className="form-group">
          <label>Name: </label>
          <input className="form-control" type="text" name="name" value={ this.state.name } onChange={ this.handleChange } />
        </div>
        <div className="form-group">
          <label>Your location description</label>
          <textarea className="form-control" name="description" value={ this.state.description } onChange={ this.handleChange }></textarea>
        </div>
        <div className="form-group">
          <label>Your trip address</label>
          <textarea className="form-control" name="adress" value={ this.state.adress } onChange={ this.handleChange }></textarea>
        </div>
        <div className="form-group">
          <label>The starting day </label>
          <input className="form-control" type="text" name="start_date" value={ this.state.start_date } onChange={ this.handleChange } />
        </div>
        <div className="form-group">
          <label>The last day </label>
          <input className="form-control" type="text" name="end_date" value={ this.state.end_date } onChange={ this.handleChange } />
        </div>
        <input  className="btn btn-primary" type="submit" value="Submit" />
      </form>
    );
  }
}

export default LocationForm;
