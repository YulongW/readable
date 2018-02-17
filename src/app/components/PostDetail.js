import React from 'react';
import PostCard from './PostCard';
import { Link } from 'react-router-dom';

const PostDetail = ({
  post = {},
  upVoteHandler,
  downVoteHandler,
  deletePostHandler
}) => (
  <div className='post-detail mt-3'>
    <h4 className='post-title font-weight-bold text-capitalize'>Post Detail</h4>

    <PostCard
      post={post}
      upVoteHandler={upVoteHandler}
      downVoteHandler={downVoteHandler}
    />

    <div className='post-control btn-group mx-2' role='group' aria-label='Edit and Delete Post'>
      <button type='button' className='btn btn-sm btn-secondary'>
        <Link to={`/edit/${post.id}`} className='text-white'>Edit</Link>
      </button>
      <button type='button' className='btn btn-sm btn-danger' onClick={() => deletePostHandler(post.id)}>
        Delete
      </button>
    </div>

    <div className='post-body mt-3 mx-2'>
      {post.body}
    </div>

    <div className='post-comments mt-3 mx-2'>
      <p className='font-weight-bold'>Comments</p>
    </div>
  </div>
);

export default PostDetail;
