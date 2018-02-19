import React from 'react';

const CommentForm = ({
  commentForm,
  updateCommentForm,
  submitCommentForm
}) => (
  <form id='comment-form' className='mt-3' onSubmit={submitCommentForm}>
    <div className='form-row'>
      <div className='form-group col-md-4'>
        <label htmlFor='comment-author'>Author</label>
        <input type='text' name='author' id='comment-author' required
          className='form-control'
          value={commentForm.author}
          onChange={updateCommentForm}
        />
      </div>
    </div>
    <div className='form-row'>
      <div className='form-group col-md-4'>
        <label htmlFor='comment-body'>Body</label>
        <textarea id='comment-body' name='body' rows='10' required
          className='form-control'
          value={commentForm.body}
          onChange={updateCommentForm}
        />
      </div>
    </div>
    <button type='submit' className='btn btn-primary'>Submit</button>
  </form>
);

export default CommentForm;
