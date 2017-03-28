import React,{Component} from 'react';
import TaskEdit from './task_edit';

class TaskListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       editMode: false
     };
  }

  onSubmit = () => {
    this.setState({ editMode: false });
    this.props.onUpdate();
  }

  startEditing = () => {
    this.setState({ editMode: true });
  }

  render() {
    const task = this.props.task;

    let view = '';
    if (this.state.editMode) {
      view =
        <TaskEdit onSubmit={this.onSubmit} task={task}/>

    } else {
      view =
        <div>
          <p>{task.name}</p>
          <button onClick={this.startEditing}>Edit</button>
        </div>
      ;
    }

    return (
      <div>
        {view}
      </div>
    );
  }
};

export default TaskListItem;
