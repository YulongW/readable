import React, { Component } from 'react';

import PostListContainer from '../containers/PostListContainer';
import CategoryListContainer from '../containers/CategoryListContainer';

import '../css/app.css';

class App extends Component {
  render() {
    return (
      <div className='app-container'>
        <CategoryListContainer />
        <PostListContainer />
      </div>
    );
  }
};

export default App;
