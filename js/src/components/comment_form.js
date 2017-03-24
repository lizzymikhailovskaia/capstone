import React from 'react';

const CommentForm = () => {
  return (
    <div>
      <h1>Put your comment</h1>
      <form action="/comments" method="post">
        <div>
          <label>Title</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Text</label>
          <textarea name="text"></textarea>
        </div>
        <input type="submit" value="Submit">
      </form>
    </div>
  );
}

export default CommentForm;
