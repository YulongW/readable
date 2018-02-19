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
        <input type='text' id='post-title' name='title' required
          className='form-control'
          value={post.title}
          onChange={inputChangeHandler}
        />
      </div>
    </div>

    <div className='form-row'>
      <div className='form-group col-md-4'>
        <label htmlFor='post-author'>Author</label>
        <input type='text' name='author' id='post-author' required
          className='form-control'
          value={post.author}
          onChange={inputChangeHandler}
        />
      </div>
      <div className='form-group col-md-2'>
        <label htmlFor='post-category'>Category</label>
        <select id='post-category' name='category' required
          className='form-control'
          value={post.category}
          onChange={inputChangeHandler}
        >
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
        <textarea id='post-body' name='body' rows='10' required
          className='form-control'
          value={post.body}
          onChange={inputChangeHandler}
        />
      </div>
    </div>
    <button type='submit' className='btn btn-primary'>Submit</button>
  </form>
);

export default PostForm;
