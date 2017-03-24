import React from 'react';

const TripForm = () => {
  return (
    <div>
      <p>Create your trip: </p>
      <form action="/trips" method="post">
        <div>
          <label>Trip name: </label>
          <input type="text" name="name" />
        </div>
        <div>
          <label>Your trip description</label>
          <input type="text" name="description" />
        </div>
        <div>
          <label>The starting day of your trip </label>
          <input type="text" name="start_date" />
        </div>
        <div>
          <label>The last day of your trip</label>
          <input type="text" name="end_date" />
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

export default TripForm;
