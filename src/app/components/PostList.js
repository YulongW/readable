import React from 'react';
import PostCard from './PostCard';

const PostList = ({
  posts = [],
  title,
  upVotePost,
  downVotePost,
  deletePost
}) => (
  <div className='post-list mt-3'>
    <h5 className='font-weight-bold text-capitalize'>{title}</h5>

    <div className='post-list row'>
      {posts.map(post => (
        <PostCard
          key={post.id}
          post={post}
          upVotePost={upVotePost}
          downVotePost={downVotePost}
          deletePost={deletePost}
        />
      ))}
    </div>
  </div>
);

export default PostList;
