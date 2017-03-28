import React, {Component} from 'react';
import TaskForm from './task_form';

class TaskCreate extends React.Component {
  handleSuccess() {
    this.props.onSubmit();
  }

  handleSubmit = (data) => {
    const location_id = this.props.location_id;
    const _this = this;

    let formData = new FormData();
    for (let [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }
    formData.append('location_id', location_id);

    fetch("http://localhost:3000/tasks", {
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
        <h1>Create Task</h1>
        <TaskForm onFormSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default TaskCreate;
