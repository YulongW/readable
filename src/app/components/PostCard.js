import React from 'react';
import { Link } from 'react-router-dom';
import FaCaretUp from 'react-icons/lib/fa/caret-up';
import FaCaretDown from 'react-icons/lib/fa/caret-down';

const PostCard = ({
  post,
  upVoteHandler,
  downVoteHandler
}) => (
  <div className='post-card col-md-6 col-lg-4 d-flex align-items-center py-2'>
    <div className='vote d-flex flex-column mr-3 text-center'>
      <a className='vote-up' onClick={() => upVoteHandler(post.id)}>
        <FaCaretUp />
      </a>
      <span className='vote-count'>{post.voteScore}</span>
      <a className='vote-down' onClick={() => downVoteHandler(post.id)}>
        <FaCaretDown />
      </a>
      {post.deleted}
    </div>
    
    <div className='summary'>
      <Link to={`/posts/${post.id}`}>
        {post.title}
      </Link>
      <div className='summary-body'>
        <small>
          Post by <span className='post-author'>{post.author}</span> on <span className='post-date'>{new Date(post.timestamp).toDateString()}</span>
        </small>
      </div>
    </div>
  </div>
);

export default PostCard;
