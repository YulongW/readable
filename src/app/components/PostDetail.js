import React from 'react';
import PostCard from './PostCard';

const PostDetail = ({
  post = {},
  upVoteHandler,
  downVoteHandler
}) => (
  <div className='post-detail container-fluid mt-3'>
    <h4 className='post-title font-weight-bold text-capitalize'>Post Detail</h4>

    <PostCard
      post={post}
      upVoteHandler={upVoteHandler}
      downVoteHandler={downVoteHandler}
    />
    
    <div className='post-body'>
      {post.body}
    </div>

    <div className='post-comments'>
      Comments
    </div>
  </div>
);

export default PostDetail;

