import React, { Component } from 'react';
import { connect } from 'react-redux';

// presentational components
import PostForm from '../components/PostForm';

// api
import * as PostApi from '../utils/api/post';

const mapStateToProps = (state) => ({
  categories: ['react', 'redux', 'udacity']
});

const mapDispatchToProps = (dispatch) => ({});

class EditPostContainer extends Component {
  state = {
    post: {
      title: '',
      author: '',
      category: '',
      body: ''
    }
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

  updatePost = (event) => {
    event.preventDefault();

    const { post } = this.state;
    const { history } = this.props;

    PostApi.addPost(post).then((res) => history.push(`/posts/${post.id}`));
  }

  render() {
    const { categories } = this.props;
    const { post } = this.state;

    return (
      <PostForm 
        post={post}
        inputChangeHandler={this.updatePostForm}
        submitHandler={this.updatePost}
        categories={categories}
      />
    );
  }
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(EditPostContainer);
