import React from 'react';
import Comment from './Comment';
import CommentForm from './CommentForm'


const CommentList = ({
  comments = [],
  upVoteComment,
  downVoteComment,
  deleteComment,
  commentForm,
  updateCommentForm,
  submitCommentForm
}) => (
  <div className='comment-list mt-4 mx-2'>
    <h5 className='font-weight-bold'>Comments</h5>

    {comments.length > 0 ? comments.map(comment => (
      <Comment
        key={comment.id}
        comment={comment}
        upVoteComment={upVoteComment}
        downVoteComment={downVoteComment}
        deleteComment={deleteComment}
      />
    )) : (
      <div className=''>
        No comment yet.
      </div>
    )}

    <h5 className='font-weight-bold mt-4'>New Comment</h5>
    <CommentForm
      commentForm={commentForm}
      updateCommentForm={updateCommentForm}
      submitCommentForm={submitCommentForm}
    />
  </div>
)

export default CommentList;
