import React, { Component } from 'react';
import { connect } from 'react-redux';

// presentational components
import PostDetail from '../components/PostDetail';

// api
import * as PostApi from '../utils/api/post';

// actions
import {
  receivePost,
  upVotePost,
  downVotePost
} from '../../app/actions/post';

const mapStateToProps = (state) => ({
  post: state.post.posts[0]
});

const mapDispatchToProps = (dispatch) => ({
  receivePost: (post) => dispatch(receivePost(post)),
  
  upVotePost: (postId) => PostApi.upVote(postId).then(
    post => dispatch(upVotePost(post))
  ),

  downVotePost: (postId) => PostApi.downVote(postId).then(
    post => dispatch(downVotePost(post))
  ),
});

class PostDetailContainer extends Component {
  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;
    PostApi
      .getPost(id)
      .then(post => this.props.receivePost(post));
  }

  deletePost = (id) => {
    const { history } = this.props;

    PostApi.deletePost(id).then((res) => {
      history.goBack();
    });
  }

  render() {
    const { post, upVotePost, downVotePost } = this.props; 
    return (
      <PostDetail 
        post={post} 
        upVoteHandler={upVotePost} 
        downVoteHandler={downVotePost} 
        deletePostHandler={this.deletePost}
      />
    );
  }
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PostDetailContainer);
