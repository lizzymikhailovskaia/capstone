import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data ? this.props.data : {
      email: "",
      password: ""
    };
  }

  handleFormSubmit = (e) => {
    //we don't want the form to submit, so we prevent the default behavior
    e.preventDefault();

    let data = {};
    data.email = this.state.email;
    data.password = this.state.password;

    //simple validation
    if (!data.email || !data.password) {
      alert('email and password required!');
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
        <label>Email</label>
        <input type="email" name="email" value={ this.state.email } onChange={ this.handleChange } />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={ this.state.password } onChange={ this.handleChange } />
      </div>
      <input type="submit" value="Log in"/>
    </form>
    );
  }
}

export default LoginForm;
