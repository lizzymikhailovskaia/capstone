import React, {Component} from 'react';
import CommentForm from './comment_form';

class CommentEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: props.comment
    };
  }

  handleSuccess() {
    this.props.onSubmit();
  }

  handleSubmit = (data) => {
    const id = this.props.comment.id;

    const _this = this;

    let formData = new FormData();
    for (let [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }

    fetch(`http://localhost:3000/comments/${id}`, {
      method: "PUT",
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
    const comment = this.state.comment;

    if (!comment) {
      return (<div>Loading...</div>);
    } else {
      return (
        <div>
          <h1>Edit your Comment</h1>
          <CommentForm data={comment} onFormSubmit={this.handleSubmit} />
        </div>
      );
    }
  }
}

export default CommentEdit;
