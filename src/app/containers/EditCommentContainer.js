import React, { Component } from 'react';
import { connect } from 'react-redux';

// presentational components
import CommentForm from '../components/CommentForm';

// api
import * as CommentApi from '../utils/api/comment';

class EditCommentContainer extends Component {
  state = {
    comment: {
      author: '',
      body: ''
    }
  }

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;
    if (id) {
      CommentApi
        .getComment(id)
        .then(comment => this.setState({
          comment
        }));
    }
  }

  updateCommentForm = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState((prev, props) => {
      return {
        comment: {
          ...prev.comment,
          [name]: value
        }
      };
    })
  }

  submitCommentForm = (event) => {
    event.preventDefault();

    const { comment } = this.state;
    const { history } = this.props;

    CommentApi.updateComment({
      ...comment,
      timestamp: new Date().getTime()
    }).then(() => history.push(`/posts/${comment.parentId}`));
  }

  render() {
    const { comment } = this.state;

    return (
      <CommentForm 
        commentForm={comment}
        updateCommentForm={this.updateCommentForm}
        submitCommentForm={this.submitCommentForm}
      />
    );
  }
};

export default connect()(EditCommentContainer);
