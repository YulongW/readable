import React, { Component } from 'react';
import { connect } from 'react-redux';
import sort from 'lodash.sortby';
import uuidV4 from 'uuid/v4';

// presentational components
import PostDetail from '../components/PostDetail';

// api
import * as PostApi from '../utils/api/post';
import * as CommentApi from '../utils/api/comment';

// actions
import {
  receivePost,
  upVotePost,
  downVotePost
} from '../../app/actions/post';

import {
  addComment,
  receiveComments,
  deleteComment,
  upVoteComment,
  downVoteComment
} from '../../app/actions/comment';

const mapStateToProps = (state) => ({
  post: state.post.posts[0],
  comments: state.comment.comments
});

const mapDispatchToProps = (dispatch) => ({
  receivePost: (post) => dispatch(receivePost(post)),

  upVotePost: (postId) => PostApi.upVote(postId).then(
    post => dispatch(upVotePost(post))
  ),

  downVotePost: (postId) => PostApi.downVote(postId).then(
    post => dispatch(downVotePost(post))
  ),
  
  receiveComments: (comments) => dispatch(receiveComments(comments)),

  deleteComment: (commentId) => CommentApi.deleteComment(commentId).then(
    comment => dispatch(deleteComment(comment))
  ),

  upVoteComment: (commentId) => CommentApi.upVote(commentId).then(
    comment => dispatch(upVoteComment(comment))
  ),

  downVoteComment: (commentId) => CommentApi.downVote(commentId).then(
    comment => dispatch(downVoteComment(comment))
  ),

  dispatch
});

class PostDetailContainer extends Component {
  state = {
    commentForm: {
      parentId: '',
      author: '',
      body: ''
    }
  }

  componentDidMount() {
    const { match, history, receivePost, receiveComments } = this.props;
    const id = match.params.id;
    
    PostApi.getPost(id)
    .then(post => {
      // if no post is found
      if (Object.keys(post).length == 0) {
        history.push('/404');
      }

      receivePost(post);

      CommentApi.getComments(post.id)
      .then(comments => {
        receiveComments(comments);
      });

      this.setState((prev) => ({
        commentForm: {
          ...prev.commentForm,
          'parentId': post.id
        }
      }));
    });
  }

  deletePost = (id) => {
    const { history } = this.props;

    PostApi.deletePost(id).then((res) => {
      history.goBack();
    });
  }

  updateCommentForm = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState((prev) => ({
      commentForm: {
        ...prev.commentForm,
        [name]: value
      }
    }));
  }

  submitCommentForm = (event) => {
    const { dispatch } = this.props;
    event.preventDefault();

    const { commentForm } = this.state;
    const id = uuidV4();
    const timestamp = new Date().getTime();

    CommentApi.addComment({
      ...commentForm,
      id,
      timestamp
    }).then((comment) => {
      dispatch(addComment(comment));
      this.clearCommentForm();
    });
  }

  clearCommentForm = () => {
    this.setState((prev) => ({
      commentForm: {
        ...prev.commentForm,
        author: '',
        body: ''
      }
    }));
  }

  render() {
    const {
      post, upVotePost, downVotePost, 
      comments, upVoteComment, downVoteComment, deleteComment
    } = this.props;
    const { commentForm } = this.state;

    return (
      <PostDetail 
        post={post} 
        upVotePost={upVotePost} 
        downVotePost={downVotePost} 
        deletePost={this.deletePost}
        
        comments={sort(comments, ['voteScore']).reverse()}
        upVoteComment={upVoteComment}
        downVoteComment={downVoteComment}
        deleteComment={deleteComment}
        commentForm={commentForm}
        updateCommentForm={this.updateCommentForm}
        submitCommentForm={this.submitCommentForm}
      />
    );
  }
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PostDetailContainer);
