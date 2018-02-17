import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidV4 from 'uuid/v4';

// presentational components
import PostForm from '../components/PostForm';

// api
import * as PostApi from '../utils/api/post';

const mapStateToProps = (state) => ({
  categories: ['react', 'redux', 'udacity']
});

const mapDispatchToProps = (dispatch) => ({});

class CreatePostContainer extends Component {
  state = {
    post: {
      title: '',
      author: '',
      category: '',
      body: ''
    }
  }

  updatePostForm = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    this.setState((prev, props) => {
      return {
        post: {
          ...prev.post,
          [name]: value
        }
      };
    })
  }

  createNewPost = (event) => {
    event.preventDefault();

    const { post } = this.state;
    const { history } = this.props;
    const id = uuidV4();
    const timestamp = new Date().getTime();

    PostApi.addPost({
      ...post,
      id,
      timestamp
    }).then((res) => history.push(`/posts/${id}`));
  }

  render() {
    const { categories } = this.props;
    const { post } = this.state;

    return (
      <PostForm 
        post={post}
        inputChangeHandler={this.updatePostForm}
        submitHandler={this.createNewPost}
        categories={categories}
      />
    );
  }
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CreatePostContainer);
