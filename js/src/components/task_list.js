import React, {Component} from 'react';
import TaskListItem from './task_list_item';
import TaskCreate from './task_create';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       tasks: []
     };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const location_id = this.props.location_id;
    fetch(`http://localhost:3000/locations/${location_id}/tasks`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    }).then ( response => response.json() )
      .then( json =>
        this.setState({
          tasks: json
        })
      )
      .catch(function (error) {/*Handle error*/});
  }

  handleUpdate = () => {
    this.loadData();
  }

  render() {
    const taskItems = this.state.tasks.map((task) => {
      return (
         <TaskListItem
          key={task.id}
          onUpdate={this.handleUpdate}
          task={task}/>
       );
    });

    const location_id = this.props.location_id;

    return (
      <div>
        <TaskCreate onSubmit={this.handleUpdate} location_id={location_id}/>
        <div>
          {taskItems}
        </div>
      </div>
    );
  }
};

export default TaskList;
