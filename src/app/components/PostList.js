import React from 'react';
import PostCard from './PostCard';
import { Link } from 'react-router-dom';

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
      {posts.length > 0 ? posts.map(post => (
        <PostCard
          key={post.id}
          post={post}
          upVotePost={upVotePost}
          downVotePost={downVotePost}
          deletePost={deletePost}
        />
      )) : (
        <div className='col'>
          There is no post currently. Please feel free to 
          <Link to='/create' className='ml-1'>
            make a new one
          </Link>.
        </div>
      )}
    </div>
  </div>
);

export default PostList;
