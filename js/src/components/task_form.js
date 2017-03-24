import React from 'react';

const TaskForm = () => {
  return (
    <div>
      <h1>Put your task</h1>
      <form action="/tasks" method="post">
        <div>
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <input type="submit" value="Submit">
      </form>
    </div>
  );
}

export default TaskForm;
