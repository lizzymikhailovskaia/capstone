import React, {Component} from 'react';
import CommentForm from './comment_form';

class CommentCreate extends React.Component {
  handleSuccess() {
    this.props.onSubmit();
  }

  handleSubmit = (data) => {
    const id = this.props.id;
    const type = this.props.type;
    const _this = this;

    let formData = new FormData();
    for (let [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
    if (type == 'trip') {
      formData.append('trip_id', id);
    } else {
      formData.append('location_id', id);
    }

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
