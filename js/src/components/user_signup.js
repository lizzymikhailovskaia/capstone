import React, {Component} from 'react';
import UserForm from './user_form';

class UserSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       processing: false
     };
  }

  handleSuccess() {
    this.context.router.push('/login');
  }

  handleSubmit = (data) => {
    this.setState({ processing: true });

    const _this = this;

    let formData = new FormData();
    for (let [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }

    fetch("/users", {
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
      form = <UserForm onFormSubmit={this.handleSubmit} />;
    } else {
      form = <div>loading...</div>;
    }

    return (
      <div>
        <h1>Create</h1>
        {form}
      </div>
    );
  }
}

// if router is needed
UserSignup.contextTypes = {
  router: React.PropTypes.object.isRequired
};

export default UserSignup;
