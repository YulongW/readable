export const ADD_COMMENT = 'ADD_COMMENT';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const UP_VOTE_COMMENT = 'UP_VOTE_COMMENT';
export const DOWN_VOTE_COMMENT = 'DOWN_VOTE_COMMENT';

export const addComment = (comment) => ({
  type: ADD_COMMENT,
  comment
});

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const upVoteComment = (comment) => ({
  type: UP_VOTE_COMMENT,
  comment
});

export const downVoteComment = (comment) => ({
  type: DOWN_VOTE_COMMENT,
  comment
});
