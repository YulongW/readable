import React from 'react';

const PostForm = ({
  post,
  categories,
  inputChangeHandler,
  submitHandler
}) => (
  <form id='post-form' className='mt-3' onSubmit={submitHandler}>
    <div className='form-row'>
      <div className='form-group col-md-6'>
        <label htmlFor='post-title'>Title</label>
        <input type='text' className='form-control' id='post-title' name='title' value={post.title} onChange={inputChangeHandler} required />
      </div>
    </div>
    <div className='form-row'>
      <div className='form-group col-md-4'>
        <label htmlFor='post-author'>Author</label>
        <input type='text' name='author' className='form-control' id='post-author' value={post.author} onChange={inputChangeHandler} required />
      </div>
      <div className='form-group col-md-2'>
        <label htmlFor='post-category'>Category</label>
        <select id='post-category' name='category' className='form-control' value={post.category} onChange={inputChangeHandler} required>
          <option></option>
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>
    </div>
    <div className='form-row'>
      <div className='form-group col-md-6'>
        <label htmlFor='post-body'>Body</label>
        <textarea className='form-control' id='post-body' name='body' rows='10' value={post.body} onChange={inputChangeHandler} required />
      </div>
    </div>
    <button type='submit' className='btn btn-primary'>Submit</button>
  </form>
);

export default PostForm;
