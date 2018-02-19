import React from 'react';
import { Link } from 'react-router-dom';
import FaCaretUp from 'react-icons/lib/fa/caret-up';
import FaCaretDown from 'react-icons/lib/fa/caret-down';

const Comment = ({
  comment = {},
  upVoteComment,
  downVoteComment,
  deleteComment
}) => (
  <div className='comment col-md-6 col-lg-4 d-flex align-items-center py-2'>
    <div className='comment-vote d-flex flex-column mr-3 text-center'>
      <a className='comment-vote-up' onClick={() => upVoteComment(comment.id)}>
        <FaCaretUp />
      </a>
      <span className='comment-vote-count'>{comment.voteScore}</span>
      <a className='comment-vote-down' onClick={() => downVoteComment(comment.id)}>
        <FaCaretDown />
      </a>
    </div>
    
    <div className='comment-detail'>
      <div className='comment-body'>
        {comment.body}
      </div>

      <div className='comment-summary'>
        <small>
          Comment by <span className='comment-author pr-1 text-primary'>{comment.author}</span> 
          on <span className='comment-date pr-1 text-primary'>{new Date(comment.timestamp).toDateString()}</span>
        </small>
      </div>

      <div className='comment-control btn-group my-2' role='group' aria-label='Edit and Delete Comment'>
        <button type='button' className='btn btn-sm btn-secondary'>
          <Link to={`/edit/${comment.id}`} className='text-white'>Edit</Link>
        </button>
        <button type='button' className='btn btn-sm btn-danger' onClick={() => deleteComment(comment.id)}>
          Delete
        </button>
      </div>
    </div>
  </div>
);

export default Comment;
