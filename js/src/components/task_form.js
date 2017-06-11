import React, {Component} from 'react';

class TaskForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data ? this.props.data : this.emptyForm()
  }

  emptyForm() {
    return {
      name: ""
    };
  }

  handleFormSubmit = (e) => {
    //we don't want the form to submit, so we prevent the default behavior
    e.preventDefault();

    let data = {};
    data.name = this.state.name;

    //simple validation
    if (!data.name) {
      return;
    }

    //Here we do the final submit to the parent component
    this.props.onFormSubmit(data);
    this.setState(this.emptyForm()); //reset the form
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
          <label>Name</label>
          <input className="form-control" type="text" name="name" value={ this.state.name } onChange={ this.handleChange }/>
        </div>
        <input className="btn btn-primary" type="submit" value="Submit" />
      </form>
    );
  }
}

export default TaskForm;
