import React from 'react';

const TaskListItem = ({task}) => {
  return (
    <div className="col-xs-6 col-md-3">
      <p>{task.name}</p>
      <p>{task.start_date}</p>
      <p>{task.end_date}</p>
      <a href={ `/tasks/${task.id}` } className="thumbnail">
        <img src={ task.photo } alt="..."/>
      </a>
    </div>
  );
};

export default TaskListItem;
