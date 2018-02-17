import React from 'react';
import PostCard from './PostCard';

const PostList = ({
  posts = [],
  title,
  upVoteHandler,
  downVoteHandler
}) => (
  <div className='post-list mt-3'>
    <h4 className='font-weight-bold text-capitalize'>{title}</h4>

    <div className='post-list row'>
      {posts.map(post => (
        <PostCard
          key={post.id}
          post={post}
          upVoteHandler={upVoteHandler}
          downVoteHandler={downVoteHandler}
        />
      ))}
    </div>
  </div>
);

export default PostList;
