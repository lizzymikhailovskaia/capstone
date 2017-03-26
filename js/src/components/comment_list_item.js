import React, {Component} from 'react';
import CommentEdit from './comment_edit';

class CommentListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       editMode: false
     };
  }

  onSubmit = () => {
    this.setState({ editMode: false });
    this.props.onUpdate();
  }

  startEditing = () => {
    this.setState({ editMode: true });
  }

  render() {
    const comment = this.props.comment;

    let view = '';
    if (this.state.editMode) {
      view =
        <CommentEdit onSubmit={this.onSubmit} comment={comment}/>

    } else {
      view =
        <div>
          <p>{comment.text}</p>
          <p>{comment.created_at}</p>
          <button onClick={this.startEditing}>Edit</button>
        </div>
      ;
    }

    return (
      <div>
        {view}
      </div>
    );
  }
};

export default CommentListItem;
