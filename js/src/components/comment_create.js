import React, {Component} from 'react';
import CommentForm from './comment_form';

class CommentCreate extends React.Component {
  handleSuccess() {
    this.props.onSubmit();
  }

  handleSubmit = (data) => {
    const trip_id = this.props.trip_id;
    const _this = this;

    let formData = new FormData();
    for (let [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
    formData.append('trip_id', trip_id);

    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {},
      body: formData
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
        <h1>Create Comment</h1>
        <CommentForm onFormSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default CommentCreate;
