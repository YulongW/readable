import React, { Component } from 'react';
import { connect } from 'react-redux';
import sort from 'lodash.sortby';

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
  )
});

class PostDetailContainer extends Component {
  componentDidMount() {
    const { match, receivePost, receiveComments } = this.props;
    const id = match.params.id;
    
    PostApi.getPost(id)
    .then(post => {
      receivePost(post);

      CommentApi.getComments(post.id)
      .then(comments => {
        receiveComments(comments);
      });
    });
  }

  deletePost = (id) => {
    const { history } = this.props;

    PostApi.deletePost(id).then((res) => {
      history.goBack();
    });
  }

  render() {
    const {
      post, upVotePost, downVotePost, 
      comments, upVoteComment, downVoteComment, addComment, deleteComment
    } = this.props; 

    return (
      <PostDetail 
        post={post} 
        upVotePost={upVotePost} 
        downVotePost={downVotePost} 
        deletePost={this.deletePost}
        
        comments={sort(comments, ['voteScore']).reverse()} 
        upVoteComment={upVoteComment} 
        downVoteComment={downVoteComment} 
        addComment={addComment}
        deleteComment={deleteComment}
      />
    );
  }
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PostDetailContainer);
