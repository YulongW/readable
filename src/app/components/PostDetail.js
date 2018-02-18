import React from 'react';
import PostCard from './PostCard';

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
      deletePostHandler={deletePostHandler}
    />

    <div className='post-body mt-3 mx-2'>
      {post.body}
    </div>

    <div className='post-comments mt-3 mx-2'>
      <p className='font-weight-bold'>Comments</p>
    </div>
  </div>
);

export default PostDetail;
