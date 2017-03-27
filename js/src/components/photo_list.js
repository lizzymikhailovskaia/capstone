import React, {Component} from 'react';
import PhotoListItem from './photo_list_item';
import PhotoCreate from './photo_create'

class PhotoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       photos: []
     };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const id = this.props.params.id;

    fetch(`http://localhost:3000/locations/${id}/photos`, {
      method: 'GET',
      credentials: "include",
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

  handleUpdate = () => {
    this.loadData();
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

    const id = this.props.params.id;
    return (
      <div>
        <PhotoCreate onSubmit={this.handleUpdate} location_id={id}/>
        <div>
          {photoItems}
        </div>
      </div>
    );
  }
};

export default PhotoList;
