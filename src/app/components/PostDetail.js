import React from 'react';
import PostCard from './PostCard';
import CommentList from './CommentList';

const PostDetail = ({
  post = {},
  upVotePost,
  downVotePost,
  deletePost,

  comments=[],
  upVoteComment,
  downVoteComment,
  deleteComment,
  commentForm,
  updateCommentForm,
  submitCommentForm
}) => (
  <div className='post-detail mt-3 mb-4 pb-4'>
    <h5 className='post-title font-weight-bold text-capitalize'>Post Detail</h5>

    <PostCard
      post={post}
      upVotePost={upVotePost}
      downVotePost={downVotePost}
      deletePost={deletePost}
    />

    <div className='post-body mt-3 mx-2'>
      {post.body}
    </div>

    <CommentList
      post={post}
      comments={comments} 
      upVoteComment={upVoteComment} 
      downVoteComment={downVoteComment} 
      deleteComment={deleteComment}
      commentForm={commentForm}
      updateCommentForm={updateCommentForm} 
      submitCommentForm={submitCommentForm}
    />
  </div>
);

export default PostDetail;
