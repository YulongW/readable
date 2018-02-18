import { 
  ADD_COMMENT,
  RECEIVE_COMMENTS,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT
} from '../actions/comment';

const initialState = {
  comments: []
}

function comment(state = initialState, action) {
  switch (action.type) {
    case ADD_COMMENT:
      return {
        ...state,
        comments: state.comments.concat(action.comment)
      }
    case RECEIVE_COMMENTS:
      return {
        ...state,
        comments: [...action.comments]
      }
    case UP_VOTE_COMMENT:
      return {
        ...state,
        comments: [].concat(action.comment).concat(
          state.comments.filter(comment => action.comment.id !== comment.id)
        )
      }
    case DOWN_VOTE_COMMENT:
      return {
        ...state,
        comments: [].concat(action.comment).concat(
          state.comments.filter(comment => action.comment.id !== comment.id)
        )
      }
    default:
      return state;
  }
}

export default comment;
