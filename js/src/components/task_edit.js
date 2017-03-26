import React, {Component} from 'react';
import TaskForm from './task_form';

class TaskEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task: props.task
    };
  }

  handleSuccess() {
    this.props.onSubmit();
  }

  handleSubmit = (data) => {
    const id = this.props.task.id;

    const _this = this;

    let formData = new FormData();
    for (let [key, value] of Object.entries(data)) {
      formData.append(key, value);
    }

    fetch(`http://localhost:3000/tasks/${id}`, {
      method: "PUT",
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
    const task = this.state.task;

    if (!task) {
      return (<div>Loading...</div>);
    } else {
      return (
        <div>
          <h1>Edit Task</h1>
          <TaskForm data={task} onFormSubmit={this.handleSubmit} />
        </div>
      );
    }
  }
}

export default TaskEdit;
