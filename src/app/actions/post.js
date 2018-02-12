export const ADD_POST = 'ADD_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_POST = 'RECEIVE_POST';
export const UP_VOTE_POST = 'UP_VOTE_POST';
export const DOWN_VOTE_POST = 'DOWN_VOTE_POST';

export const addPost = ({ name, content }) => ({
  type: ADD_POST,
  name,
  content
});

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = (post) => ({
  type: RECEIVE_POST,
  post
});

export const upVotePost = (post) => ({
  type: UP_VOTE_POST,
  post
});

export const downVotePost = (post) => ({
  type: DOWN_VOTE_POST,
  post
});
