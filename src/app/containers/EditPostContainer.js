import React, { Component } from 'react';
import { connect } from 'react-redux';

// presentational components
import PostForm from '../components/PostForm';

// api
import * as PostApi from '../utils/api/post';


class EditPostContainer extends Component {
  state = {
    post: {
      title: '',
      author: '',
      category: '',
      body: ''
    },
    categories: ['react', 'redux', 'udacity']
  }

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;
    if (id) {
      PostApi
        .getPost(id)
        .then(post => this.setState({
          post
        }));
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

  updatePost = (event) => {
    event.preventDefault();

    const { post } = this.state;
    const { history } = this.props;

    PostApi
      .updatePost(post)
      .then((res) => history.push(`/posts/${post.id}`));
  }

  render() {
    const { post, categories } = this.state;

    return (
      <PostForm 
        post={post}
        categories={categories}
        inputChangeHandler={this.updatePostForm}
        submitHandler={this.updatePost}
      />
    );
  }
};

export default connect()(EditPostContainer);
