import React, {Component} from 'react';
import TaskListItem from './task_list_item';

class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       task: []
     };
  }

  componentDidMount() {
    fetch(`http://localhost:3000/task`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    }).then ( response => response.json() )
      .then( json =>
        this.setState({
          task: json
        })
      )
      .catch(function (error) {/*Handle error*/});
  }

  render() {
    const taskItems = this.state.task.map((task) => {
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
