import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import App from './App';
import HeaderContainer from './HeaderContainer';
import PostListContainer from './PostListContainer';
import PostDetailContainer from './PostDetailContainer';
import CreatePostContainer from './CreatePostContainer';
import EditPostContainer from './EditPostContainer';
import NoMatch from '../components/NoMatch';

import 'bootstrap/dist/css/bootstrap.min.css';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div className='root'>
        <HeaderContainer />

        <div className='container-fluid'>
          <Switch>
            <Route exact path='/404' component={NoMatch} />
            <Route exact path='/' component={App} />
            <Route exact path='/create' component={CreatePostContainer} />
            <Route path='/posts/:id' component={PostDetailContainer} />
            <Route path='/edit/:id' component={EditPostContainer} />
            <Route path='/:category' component={PostListContainer} />
          </Switch>
        </div>

        <footer className='fixed-bottom bg-dark text-center'>
          <span className='text-white'>&copy; Yulong</span>
        </footer>

      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;
