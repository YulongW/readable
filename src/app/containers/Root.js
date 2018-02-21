import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import HeaderContainer from './HeaderContainer';
import PostListContainer from './PostListContainer';
import PostDetailContainer from './PostDetailContainer';
import CreatePostContainer from './CreatePostContainer';
import EditPostContainer from './EditPostContainer';
import EditCommentContainer from './EditCommentContainer';
import NoMatch from '../components/NoMatch';

import 'bootstrap/dist/css/bootstrap.min.css';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div className='root'>
        <HeaderContainer />

        <div className='container-fluid mt-3 mb-4 pb-4'>
          <Switch>
            <Route exact path='/404' component={NoMatch} />
            <Route exact path='/' component={App} />
            <Route exact path='/create' component={CreatePostContainer} />
            <Route path='/edit/comment/:id' component={EditCommentContainer} />
            <Route path='/edit/:id' component={EditPostContainer} />
            <Route path='/:category/:id' component={PostDetailContainer} />
            <Route path='/:category' component={PostListContainer} />
          </Switch>
        </div>

        <footer className='fixed-bottom bg-dark text-center py-1'>
          <span className='text-white'>&copy; 2018 Yulong W.</span>
        </footer>

      </div>
    </Router>
  </Provider>
);

export default Root;
