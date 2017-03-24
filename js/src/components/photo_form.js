import React from 'react';

const PhotoForm = () => {
  return (
    <div>
      <h1>Upload your photo</h1>
      <form action="/photos" method="post">
        <div>
          <label>Photo</label>
          <input type="file" name="file" accept="image/*;capture=camera" />
        </div>
        <input type="submit" value="Submit">
      </form>
    </div>
  );
}

export default PhotoForm;
