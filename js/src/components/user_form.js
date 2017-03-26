import React from 'react';

const UserForm = () => {
  return (
    <div>
      <h1>Signup!</h1>
      <form action="/users" method="post">
        <div>
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Email</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>Password</label>
          <input type="password" name="password" />
        </div>
        <div>
          <label>BIO</label>
          <input type="text" name="bio" />
        </div>
        <div>
          <label>Photo</label>
          <input type="file" name="photo" accept="image/*;capture=camera" />
        </div>
        <div>
          <label for="cbox1">Public</label>
          <input type="checkbox" id="cbox1" value="1" name="public">
        </div>

        <input type="submit" value="Submit">
      </form>
    </div>
  );
}

export default UserForm;
