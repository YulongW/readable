import React, { Component } from 'react';
import { connect } from 'react-redux';

// presentational components
import PostList from '../components/PostList';

// api
import * as PostApi from '../utils/api/post';

// actions
import {
  receivePosts,
  downVotePost,
  upVotePost
} from '../../app/actions/post';

const mapStateToProps = (state) => ({
  posts: state.post.posts
});

const mapDispatchToProps = (dispatch) => ({
  receivePosts: (posts) => dispatch(receivePosts(posts)),

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
    const { posts, upVotePost, downVotePost } = this.props;
    const { postListTitle } = this.state;

    return (
      <PostList
        posts={posts}
        title={postListTitle}
        upVoteHandler={upVotePost}
        downVoteHandler={downVotePost}
      />
    );
  }
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(PostListContainer);
