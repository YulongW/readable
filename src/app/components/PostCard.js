import React from 'react';
import { Link } from 'react-router-dom';
import FaCaretUp from 'react-icons/lib/fa/caret-up';
import FaCaretDown from 'react-icons/lib/fa/caret-down';

const PostCard = ({
  post,
  upVotePost,
  downVotePost,
  deletePost
}) => (
  <div className='post-card col-md-6 col-lg-4 d-flex align-items-start py-2'>
    <div className='vote d-flex flex-column mr-3 text-center'>
      <a className='vote-up' onClick={() => upVotePost(post.id)}>
        <FaCaretUp />
      </a>
      <span className='vote-count'>{post.voteScore}</span>
      <a className='vote-down' onClick={() => downVotePost(post.id)}>
        <FaCaretDown />
      </a>
      {post.deleted}
    </div>
    
    <div className='summary'>
      <Link to={`/${post.category}/${post.id}`}>
        {post.title}
      </Link>

      <div className='summary-body'>
        <small>
          Post by <span className='post-author pr-1 text-primary'>{post.author}</span> 
          on <span className='post-date pr-1 text-primary'>{new Date(post.timestamp).toDateString()}</span>
          <span className='post-comment-count text-secondary'>({post.commentCount} comments)</span>
        </small>
      </div>

      <div className='post-control btn-group my-2' role='group' aria-label='Edit and Delete Post'>
        <button type='button' className='btn btn-sm btn-secondary'>
          <Link to={`/edit/${post.id}`} className='text-white'>Edit</Link>
        </button>
        <button type='button' className='btn btn-sm btn-danger' onClick={() => deletePost(post.id)}>
          Delete
        </button>
      </div>
    </div>
  </div>
);

export default PostCard;
