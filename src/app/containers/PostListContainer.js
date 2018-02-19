import React, { Component } from 'react';
import { connect } from 'react-redux';
import sort from 'lodash.sortby';

// presentational components
import PostList from '../components/PostList';

// api
import * as PostApi from '../utils/api/post';

// actions
import {
  receivePosts,
  deletePost,
  downVotePost,
  upVotePost
} from '../../app/actions/post';

const mapStateToProps = (state) => ({
  posts: state.post.posts,
  sortBy: state.post.sortBy
});

const mapDispatchToProps = (dispatch) => ({
  receivePosts: (posts) => dispatch(receivePosts(posts)),

  deletePost: (postId) => PostApi.deletePost(postId).then(
    post => dispatch(deletePost(post))
  ),

  upVotePost: (postId) => PostApi.upVote(postId).then(
    post => dispatch(upVotePost(post))
  ),

  downVotePost: (postId) => PostApi.downVote(postId).then(
    post => dispatch(downVotePost(post))
  ),
});

class PostListContainer extends Component {
  state = {
    postListTitle: 'Top Posts'
  }

  componentDidMount() {
    const { match } = this.props;

    const category = match ? match.params.category : '';
    PostApi
      .getPosts(category)
      .then(posts => {this.props.receivePosts(posts)});

    if (category !== '') {
      this.setState({
        postListTitle: `Top ${category} Posts` 
      })
    }
  }

  render() {
    const { posts, upVotePost, downVotePost, deletePost, sortBy } = this.props;
    const { postListTitle } = this.state;

    return (
      <PostList
        posts={sort(posts, [sortBy])}
        title={postListTitle}
        upVotePost={upVotePost}
        downVotePost={downVotePost}
        deletePost={deletePost}
      />
    );
  }
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PostListContainer);
