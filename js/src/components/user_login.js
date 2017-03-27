import React, {Component} from 'react';
import LoginForm from './login_form';

class UserSignup extends React.Component {
  handleSuccess() {
    this.context.router.push('/');
  }

  handleSubmit = (data) => {
    const _this = this;

    let formData = new FormData();
    for (let [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }

    fetch("http://localhost:3000/login", {
      method: "POST",
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
    return (
      <div>
        <h1>Login</h1>
        <LoginForm onFormSubmit={this.handleSubmit}/>
      </div>
    );
  }
}

// if router is needed
UserSignup.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default UserSignup;
