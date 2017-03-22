import React, {Component} from 'react';
import PhotoListItem from './photo_list_item';

class PhotoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       photos: []
     };
  }

  componentDidMount() {
    const id = this.props.params.id;

    fetch(`http://localhost:3000/locations/${id}/photos`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    }).then ( response => response.json() )
      .then( json =>
        this.setState({
          photos: json
        })
      )
      .catch(function (error) {/*Handle error*/});
  }

  render() {
    const photoItems = this.state.photos.map((photo) => {
      return (
         <PhotoListItem
          onPhotoSelect={() => {}}
          key={photo.id}
          photo={photo} />
       );
    });

    return (
      <div className="row">
       {photoItems}
      </div>
    );
  }
};

export default PhotoList;
