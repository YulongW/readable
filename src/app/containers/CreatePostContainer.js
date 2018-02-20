import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuidV4 from 'uuid/v4';

// presentational components
import PostForm from '../components/PostForm';

// api
import * as PostApi from '../utils/api/post';


class CreatePostContainer extends Component {
  state = {
    post: {
      title: '',
      author: '',
      category: '',
      body: ''
    },
    categories: ['react', 'redux', 'udacity']
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
    const { post, categories } = this.state;

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

export default connect()(CreatePostContainer);
