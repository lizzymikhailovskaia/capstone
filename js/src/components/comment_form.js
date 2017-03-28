import React, {Component} from 'react';

class CommentForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data ? this.props.data : this.emptyForm()
  }

  emptyForm() {
    return {
      text: ""
    };
  }

  handleFormSubmit = (e) => {
    //we don't want the form to submit, so we prevent the default behavior
    e.preventDefault();

    let data = {};
    data.text = this.state.text;

    //simple validation
    if (!data.text) {
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
        <div>
          <label>Text</label>
          <textarea name="text" value={ this.state.text } onChange={ this.handleChange }/>
        </div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default CommentForm;
