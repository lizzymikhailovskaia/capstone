import React from 'react';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.data ? this.props.data : {
      name: "",
      email: "",
      password: "",
      bio: "",
      public: false
    };
  }

  handleFormSubmit = (e) => {
    //we don't want the form to submit, so we prevent the default behavior
    e.preventDefault();

    let data = {};
    data.name = this.state.name;
    data.email = this.state.email;
    data.password = this.state.password;
    data.bio = this.state.bio;
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
        <label>Name</label>
        <input type="text" name="name" value={ this.state.name } onChange={ this.handleChange } />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" value={ this.state.email } onChange={ this.handleChange } />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" value={ this.state.password } onChange={ this.handleChange } />
      </div>
      <div>
        <label>BIO</label>
        <input type="text" name="bio" value={ this.state.bio } onChange={ this.handleChange } />
      </div>
      <div>
        <label>Photo</label>
        <input type="file" name="photo" id="photo" accept="image/*;capture=camera" />
      </div>
      <div>
        <label>Public</label>
        <input type="checkbox" name="public" checked={ this.state.public } onChange={ this.handleChange } />
      </div>

      <input type="submit" value="Submit"/>
    </form>
    );
  }
}

export default UserForm;
