import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({
  sortBy,
  sortByHandler
}) => (
  <header className='sticky-top'>
    <nav className='navbar navbar-dark bg-dark box-shadow py-2'>
      <Link to='/' className='navbar-brand'>
        <strong>Readable</strong>
      </Link>
      
      <ul className='navbar-nav navbar-expand'>
        <li className='nav-item'>
          <div className='input-group py-2'>
            <div className='input-group-prepend'>
              <label className='input-group-text' htmlFor='sort'>Sort By</label>
            </div>
            <select className='custom-select' id='sort' name='sort' value={sortBy} onChange={sortByHandler}>
              <option value='timestamp'>Date</option>
              <option value='voteScore'>Votes</option>
            </select>
          </div>
        </li>

        <li className='nav-item ml-4'>
          <Link to='/create' className='navbar-brand py-2'>
            <button className='btn btn-outline-light'>New Post</button>
          </Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default Header;
