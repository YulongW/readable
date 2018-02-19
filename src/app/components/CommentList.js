import React from 'react';
import Comment from './Comment'

const CommentList = ({
  comments = [],
  upVoteComment,
  downVoteComment,
  deleteComment
}) => (
  <div className='comment-list mt-3 mx-2'>
    <h5 className='font-weight-bold'>Comments</h5>
    
    {comments.map(comment => (
      <Comment
        key={comment.id}
        comment={comment}
        upVoteComment={upVoteComment}
        downVoteComment={downVoteComment}
        deleteComment={deleteComment}
      />
    ))}
  </div>
)

export default CommentList;
