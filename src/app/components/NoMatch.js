import React from 'react';
import img404 from '../static/404.jpg';
import { Link } from 'react-router-dom';

const NoMatch = () => (
  <div className='no-match text-center mt-5'>
    <Link to='/'>
      <img src={img404} className='img-fluid' alt='404' />
    </Link>
  </div>
);

export default NoMatch;
