import React from 'react';

const LocationForm = () => {
  return (
    <div>
      <h1>Create your awesome location! </h1>
      <form action="/locations" method="post">
        <div>
          <label>Name</label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Adress</label>
          <input type="text" name="adress" />
        </div>
        <div>
          <label>Description</label>
          <input type="text" name="description" />
        </div>
        <div>
          <label>The starting day</label>
          <input type="text" name="start_date" />
        </div>
        <div>
          <label>The last day</label>
          <input type="text" name="end_date" />
        </div>
        <div>
          <label>Photo</label>
          <input type="file" name="photo" accept="image/*;capture=camera" />
        </div>
        <input type="submit" value="Submit">
      </form>
    </div>
  );
}
export default LocationForm;
