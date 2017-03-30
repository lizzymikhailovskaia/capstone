import React, {Component} from 'react';
import LoginForm from './login_form';

class UserLogin extends React.Component {
  handleSuccess(user) {
    localStorage.setItem('user_id', user.id);
    localStorage.setItem('user_name', user.name);
    this.context.router.push(`/users/${user.id}`);
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
        return res.json();
      } else {
        alert("Oops!");
      }
    }, (e) => {
      alert("Error submitting form!");
    }).then( json => _this.handleSuccess(json.user) );
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
UserLogin.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default UserLogin;
