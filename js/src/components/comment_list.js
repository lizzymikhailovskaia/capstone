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
    const id = this.props.id;
    let resource;
    if(this.props.type == 'trip') {
      resource = 'trips';
    } else {
      resource = 'locations';
    }

    fetch(`/${resource}/${id}/comments`, {
      method: 'GET',
      credentials: "include",
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

    const id = this.props.id;
    const type = this.props.type;

    return (
      <div>
        <CommentCreate onSubmit={this.handleUpdate} type={type} id={id}/>
        <div>
          {commentItems}
        </div>
      </div>
    );
  }
};

export default CommentList;
