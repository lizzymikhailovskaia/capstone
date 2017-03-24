import React, {Component} from 'react';
import TaskListItem from './task_list_item';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       tasks: []
     };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/tasks`, {
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

  render() {
    const taskItems = this.state.tasks.map((task) => {
      return (
         <LocationListItem
          key={task.id}
          task={task}/>
       );
    });

    return (
      <div className="row">
       {taskItems}
      </div>
    );
  }
};

export default TaskListItemList;
