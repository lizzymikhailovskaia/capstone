import React from 'react';

const PhotoListItem = ({photo, onPhotoSelect}) => {
  const imageUrl = photo.file;
  return (
    <div className="col-xs-6 col-md-3">
      <a href={ imageUrl } className="thumbnail">
        <img src={ imageUrl } alt="..."/>
      </a>
    </div>
  );
};

export default PhotoListItem;
