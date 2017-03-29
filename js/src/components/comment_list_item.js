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
          <div>
            <strong>{comment.user.name}</strong>
            <span> said at </span>
            <i>{comment.created_at}</i>:
          </div>
          <div>{comment.text}</div>
          <button className="btn btn-primary" type="submit" value="Edit" onClick={this.startEditing}>Edit</button>
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
