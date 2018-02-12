import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App';
import PostListContainer from './PostListContainer';
import PostDetailContainer from './PostDetailContainer';

import 'bootstrap/dist/css/bootstrap.min.css';

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div className='root'>
        <link href='https://fonts.googleapis.com/icon?family=Material+Icons' rel='stylesheet' />

        <header>
          <div className='navbar navbar-dark bg-dark box-shadow'>
            <Link to='/' className='navbar-brand'>
              <strong>Readable</strong>
            </Link>
          </div>
        </header>

        <Route exact path='/' component={App} />
        <Route exact path='/:category' component={PostListContainer} />
        <Route exact path='/posts/:id' component={PostDetailContainer} />

        <footer className='fixed-bottom bg-dark text-center'>
          <span className='text-white'>Readable</span>
        </footer>

      </div>
    </Router>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;