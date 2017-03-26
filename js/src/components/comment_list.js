import React, {Component} from 'react';
import CommentListItem from './comment_list_item';
import CommentCreate from './comment_create';

class CommentList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       comments: []
     };
  }

  componentDidMount() {
    this.loadData();
  }

  loadData() {
    const trip_id = this.props.trip_id;
    fetch(`http://localhost:3000/trips/${trip_id}/comments`, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    }).then ( response => response.json() )
      .then( json =>
        this.setState({
          comments: json
        })
      )
      .catch(function (error) {/*Handle error*/});
  }

  handleUpdate = () => {
    this.loadData();
  }

  render() {
    const commentItems = this.state.comments.map((comment) => {
      return (
         <CommentListItem
          key={comment.id}
          onUpdate={this.handleUpdate}
          comment={comment}/>
       );
    });

    const trip_id = this.props.trip_id;

    return (
      <div>
        <CommentCreate onSubmit={this.handleUpdate} trip_id={trip_id}/>
        <div>
          {commentItems}
        </div>
      </div>
    );
  }
};

export default CommentList;
